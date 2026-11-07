#!/usr/bin/env node
// Geo Scope — generador de páginas estáticas.
//
// Abre cada ruta del sitio en Chromium (Playwright), deja que assets/app.js la
// pinte con los datos de data/ y guarda el HTML resultante en <ruta>/index.html.
// También regenera sitemap.xml. Uso: `npm run build` (ver README.md).

import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const { chromium } = loadPlaywright();

const SITE_URL = "https://geo-scope.online";
const LOCALES = ["es", "en", "ru", "zh"];
const DEFAULT_LOCALE = "es";
const STATIC_PAGES = {
  home: [],
  analysis: ["analysis"],
  opinion: ["opinion"],
  radar: ["radar"],
  regions: ["regions"],
  sectors: ["sectors"],
  experts: ["experts"],
  about: ["about"],
  contact: ["contact"],
  subscription: ["subscription"],
};
const DETAIL_PAGES = {
  article: "article",
  region: "regions",
  sector: "sectors",
  expert: "experts",
};
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const args = new Set(process.argv.slice(2));
const only = [...args].find((arg) => arg.startsWith("--only="))?.slice(7);

function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    console.error("Falta Playwright. Ejecuta: npm install && npx playwright install chromium");
    process.exit(1);
  }
}

function cleanPath(segments, locale) {
  const parts = [...(locale === DEFAULT_LOCALE ? [] : [locale]), ...segments].filter(Boolean);
  return parts.length ? `/${parts.join("/")}/` : "/";
}

async function loadRoutes() {
  const content = await import(pathToFileURL(path.join(ROOT, "data/content.js")).href);
  const routes = [];

  for (const locale of LOCALES) {
    for (const [page, segments] of Object.entries(STATIC_PAGES)) {
      routes.push({ page, locale, slug: "", url: cleanPath(segments, locale) });
    }
    const details = {
      article: content.articles,
      region: content.regions,
      sector: content.sectors,
      expert: content.authors,
    };
    for (const [page, items] of Object.entries(details)) {
      for (const item of items) {
        routes.push({
          page,
          locale,
          slug: item.slug,
          url: cleanPath([DETAIL_PAGES[page], item.slug], locale),
          lastmod: page === "article" ? item.date : undefined,
        });
      }
    }
  }

  return { routes, content };
}

async function assetVersion(file) {
  const data = await readFile(path.join(ROOT, file));
  return createHash("sha1").update(data).digest("hex").slice(0, 10);
}

function stubHtml(route, versions) {
  const slug = route.slug ? ` data-slug="${route.slug}"` : "";
  return `<!doctype html>
<html lang="${route.locale}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Geo Scope</title>
    <meta name="description" content="" />
    <link rel="stylesheet" href="/assets/styles.css?v=${versions.css}" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png?v=${versions.favicon}" />
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-geoscope.png?v=${versions.favicon}" />
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png?v=${versions.favicon}" />
  </head>
  <body data-page="${route.page}" data-locale="${route.locale}"${slug}>
    <div class="site-shell">
      <header id="site-header"></header>
      <main id="app"></main>
      <footer id="site-footer"></footer>
    </div>
    <script type="module" src="/assets/app.js?v=${versions.js}"></script>
  </body>
</html>
`;
}

function startServer(routesByUrl, versions) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    const route = routesByUrl.get(pathname.normalize("NFC"));

    if (route) {
      res.writeHead(200, { "content-type": MIME[".html"], "cache-control": "no-store" });
      res.end(stubHtml(route, versions));
      return;
    }

    const file = path.join(ROOT, pathname);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const info = await stat(file);
      const target = info.isDirectory() ? path.join(file, "index.html") : file;
      const body = await readFile(target);
      res.writeHead(200, {
        "content-type": MIME[path.extname(target)] || "application/octet-stream",
        "cache-control": "no-store",
      });
      res.end(body);
    } catch {
      res.writeHead(404).end("not found");
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

// Serializa la página ya pintada: <head> con una etiqueta por línea y el
// <body> tal como lo dejó app.js, sin el estado que solo existe en el navegador.
async function snapshot(page) {
  return page.evaluate(() => {
    const keepHead = (node) => node.nodeType === 1 && !["SCRIPT", "STYLE"].includes(node.tagName);
    const head = [...document.head.childNodes].filter(keepHead).map((node) => {
      const clone = node.cloneNode(true);
      clone.removeAttribute("data-hreflang-link");
      const markup = clone.outerHTML;
      return `    ${node.tagName === "TITLE" ? markup : markup.replace(/>$/, " />")}`;
    });

    const body = document.body.cloneNode(true);
    body.querySelectorAll(".is-visible").forEach((el) => el.classList.remove("is-visible"));
    body.querySelectorAll(".is-open").forEach((el) => el.classList.remove("is-open"));
    body.querySelectorAll("[class='']").forEach((el) => el.removeAttribute("class"));
    body.querySelectorAll(".toast-stack, .toast").forEach((el) => el.remove());
    body.classList.remove("menu-open");
    if (!body.getAttribute("class")) body.removeAttribute("class");

    const attrs = [...body.attributes].map((a) => ` ${a.name}="${a.value}"`).join("");
    return {
      lang: document.documentElement.lang,
      head: head.join("\n"),
      title: document.title,
      bodyOpen: `<body${attrs}>`,
      bodyInner: body.innerHTML,
    };
  });
}

function renderDocument(snap) {
  return `<!doctype html>
<html lang="${snap.lang}">
  <head>
${snap.head}
  </head>
  ${snap.bodyOpen}${snap.bodyInner.replace(/\s+$/, "")}
  </body>
</html>
`;
}

function outputFile(url) {
  return path.join(ROOT, url, "index.html");
}

function sitemapXml(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const entries = routes
    .filter((route) => route.locale === DEFAULT_LOCALE)
    .map((route) => {
      const alternates = LOCALES.map((locale) => {
        const twin = routes.find(
          (other) => other.page === route.page && other.slug === route.slug && other.locale === locale,
        );
        return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${SITE_URL}${encodeURI(twin.url)}" />`;
      });
      alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${encodeURI(route.url)}" />`);
      return LOCALES.map((locale) => {
        const twin = routes.find(
          (other) => other.page === route.page && other.slug === route.slug && other.locale === locale,
        );
        return `  <url>
    <loc>${SITE_URL}${encodeURI(twin.url)}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
${alternates.join("\n")}
  </url>`;
      }).join("\n");
    });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
}

async function main() {
  const { routes } = await loadRoutes();
  const selected = only ? routes.filter((route) => route.url.includes(only)) : routes;
  const versions = {
    js: await assetVersion("assets/app.js"),
    css: await assetVersion("assets/styles.css"),
    favicon: await assetVersion("assets/favicon-geoscope.png"),
  };
  const routesByUrl = new Map(routes.map((route) => [route.url.normalize("NFC"), route]));
  const server = await startServer(routesByUrl, versions);
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const errors = [];
  let done = 0;

  try {
    for (const route of selected) {
      const page = await context.newPage();
      page.on("pageerror", (error) => errors.push(`${route.url}: ${error.message}`));
      await page.goto(base + encodeURI(route.url), { waitUntil: "networkidle" });
      await page.waitForFunction(() => document.getElementById("app")?.children.length > 0, null, {
        timeout: 15000,
      });
      const html = renderDocument(await snapshot(page));
      const file = outputFile(route.url);
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, html);
      await page.close();
      done += 1;
      if (done % 25 === 0) console.log(`  ${done}/${selected.length} páginas`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (!only) {
    await writeFile(path.join(ROOT, "sitemap.xml"), sitemapXml(routes));
  }

  console.log(`Listo: ${done} páginas generadas${only ? "" : " y sitemap.xml actualizado"}.`);
  if (errors.length) {
    console.error(`\n${errors.length} errores de JavaScript durante la generación:`);
    errors.forEach((error) => console.error(`  - ${error}`));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
