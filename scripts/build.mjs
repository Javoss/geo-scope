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
  newsletter: ["newsletter"],
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
    const keepHead = (node) =>
      node.nodeType === 1 &&
      node.tagName !== "STYLE" &&
      (node.tagName !== "SCRIPT" || node.type === "application/ld+json");
    const head = [...document.head.childNodes].filter(keepHead).map((node) => {
      const clone = node.cloneNode(true);
      clone.removeAttribute("data-hreflang-link");
      const markup = clone.outerHTML;
      const paired = node.tagName === "TITLE" || node.tagName === "SCRIPT";
      return `    ${paired ? markup : markup.replace(/>$/, " />")}`;
    });

    const body = document.body.cloneNode(true);
    body.querySelectorAll(".is-visible").forEach((el) => el.classList.remove("is-visible"));
    body.querySelectorAll(".is-open").forEach((el) => el.classList.remove("is-open"));
    body.querySelectorAll("[class='']").forEach((el) => el.removeAttribute("class"));
    body.querySelectorAll(".toast-stack, .toast").forEach((el) => el.remove());
    body.classList.remove("menu-open");
    if (!body.getAttribute("class")) body.removeAttribute("class");

    const attrs = [...body.attributes].map((a) => ` ${a.name}="${a.value}"`).join("");
    const text = (selector) => document.querySelector(selector)?.textContent.trim().replace(/\s+/g, " ") || "";
    return {
      card: {
        title: text(".article-title"),
        type: text(".article-hero .meta-chip"),
        region: text(".article-hero .meta-chip:nth-child(2)"),
        byline: text(".article-author-row strong"),
        date: text(".article-author-row span"),
      },
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

// Traducciones por idioma. data/i18n.js sigue siendo el archivo que se edita;
// el build genera data/i18n/<idioma>.js para que cada visitante descargue solo
// su idioma, y data/i18n/locales.js con la lista de idiomas.
async function generateLocaleBundles() {
  const sourceFile = path.join(ROOT, "data/i18n.js");
  const source = await readFile(sourceFile, "utf8");
  const i18n = await import(`${pathToFileURL(sourceFile).href}?build=${Date.now()}`);
  const helper = source.match(/function russianPlural\([\s\S]*?\n}\n/)?.[0] || "";
  const dir = path.join(ROOT, "data/i18n");
  await mkdir(dir, { recursive: true });
  const header = "// Archivo GENERADO por scripts/build.mjs a partir de data/i18n.js. No editar a mano.\n";
  const versions = {};

  for (const locale of i18n.supportedLocales) {
    const body = `${header}\n${helper}\nexport const ui = ${serialize(i18n.uiCopy[locale] || i18n.uiCopy[i18n.defaultLocale])};\n\nexport const content = ${serialize(i18n.contentTranslations[locale] || {})};\n`;
    await writeFile(path.join(dir, `${locale}.js`), body);
    versions[locale] = createHash("sha1").update(body).digest("hex").slice(0, 10);
    const generated = await import(`${pathToFileURL(path.join(dir, `${locale}.js`)).href}?check=${Date.now()}`);
    assertSame(generated.ui, i18n.uiCopy[locale] || i18n.uiCopy[i18n.defaultLocale], `ui.${locale}`);
    assertSame(generated.content, i18n.contentTranslations[locale] || {}, `content.${locale}`);
  }

  await writeFile(
    path.join(dir, "locales.js"),
    `${header}\nexport const supportedLocales = ${serialize(i18n.supportedLocales)};\nexport const defaultLocale = ${serialize(i18n.defaultLocale)};\nexport const localeOptions = ${serialize(i18n.localeOptions)};\nexport const localeVersions = ${serialize(versions)};\n`,
  );
}

function serialize(value, indent = "") {
  const next = `${indent}  `;
  if (typeof value === "function") {
    const code = value.toString();
    return /^(async\s+)?(function\b|\(|[\w$]+\s*=>)/.test(code) ? code : `function ${code}`;
  }
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((item) => `${next}${serialize(item, next)}`).join(",\n")},\n${indent}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    return `{\n${entries
      .map(([key, item]) => `${next}${/^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key)}: ${serialize(item, next)}`)
      .join(",\n")},\n${indent}}`;
  }
  return value === undefined ? "undefined" : JSON.stringify(value);
}

function assertSame(actual, expected, where) {
  if (typeof expected === "function") {
    for (const sample of [0, 1, 2, 3, 5, 11, 21, 22, "x"]) {
      if (String(actual(sample, sample)) !== String(expected(sample, sample))) {
        throw new Error(`Traducción generada distinta en ${where}(${sample})`);
      }
    }
    return;
  }
  if (expected && typeof expected === "object") {
    const keys = new Set([...Object.keys(expected), ...Object.keys(actual || {})]);
    keys.forEach((key) => assertSame(actual?.[key], expected[key], `${where}.${key}`));
    return;
  }
  if (actual !== expected) {
    throw new Error(`Traducción generada distinta en ${where}`);
  }
}

// Imágenes para redes sociales (1200×630): una por artículo e idioma, más una
// genérica. Solo se rehacen cuando cambia su contenido (assets/og/manifest.json).
async function renderSocialImages(context, cards) {
  const dir = path.join(ROOT, "assets/og");
  const manifestFile = path.join(dir, "manifest.json");
  let manifest = {};
  try {
    manifest = JSON.parse(await readFile(manifestFile, "utf8"));
  } catch {}
  const logo = `data:image/png;base64,${(await readFile(path.join(ROOT, "assets/geoscope-logo.png"))).toString("base64")}`;
  const jobs = [
    { file: "default.jpg", card: { title: "Análisis estratégico sobre geopolítica, tecnología, economía y el nuevo orden global.", type: "", region: "", byline: "", date: "" } },
    ...cards.map((card) => ({ file: `${card.locale}/${card.slug}.jpg`, card })),
  ];
  const page = await context.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  let made = 0;

  for (const job of jobs) {
    const key = createHash("sha1").update(JSON.stringify([job.card, OG_VERSION])).digest("hex").slice(0, 12);
    const target = path.join(dir, job.file);
    let exists = true;
    try {
      await stat(target);
    } catch {
      exists = false;
    }
    if (exists && manifest[job.file] === key) continue;

    await page.setContent(socialCardHtml(job.card, logo), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => {
      const title = document.querySelector(".title");
      let size = 72;
      while (title.scrollHeight > title.clientHeight && size > 34) {
        size -= 2;
        title.style.fontSize = `${size}px`;
      }
    });
    await mkdir(path.dirname(target), { recursive: true });
    await page.screenshot({ path: target, type: "jpeg", quality: 82 });
    manifest[job.file] = key;
    made += 1;
  }

  await page.close();
  await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
  return made;
}

const OG_VERSION = 2;

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function socialCardHtml(card, logo) {
  const chips = [card.type, card.region].filter(Boolean).map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("");
  const footer = [card.byline, card.date].filter(Boolean).map(escapeHtml).join(" · ");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; font-family: Inter, "Noto Sans CJK SC", "Noto Sans CJK TC", "IPAGothic", "DejaVu Sans", sans-serif;
    background: #f6f9ff; color: #1b2a40; display: flex; }
  .band { width: 22px; background: linear-gradient(180deg, #1d469b, #2f64ff); }
  .wrap { flex: 1; padding: 56px 72px 52px 64px; display: flex; flex-direction: column; }
  .top { display: flex; align-items: center; justify-content: space-between; }
  .logo { height: 76px; }
  .chips { display: flex; gap: 10px; }
  .chip { font-size: 22px; font-weight: 600; color: #1c4799; background: rgba(47,100,255,.09); border: 1px solid rgba(33,79,191,.18);
    padding: 7px 16px; border-radius: 999px; }
  .title { margin: 36px 0 0; flex: 1; display: flex; align-items: center; font-size: 72px; line-height: 1.12; font-weight: 700; letter-spacing: -0.01em; color: #112c66; overflow: hidden; }
  .foot { margin-top: 24px; padding-top: 22px; border-top: 2px solid rgba(27,42,64,.1); font-size: 24px; color: #5e6e84; display: flex; justify-content: space-between; }
  .foot b { color: #1c4799; font-weight: 600; }
  </style></head><body><div class="band"></div><div class="wrap">
  <div class="top"><img class="logo" src="${logo}"><div class="chips">${chips}</div></div>
  <div class="title">${escapeHtml(card.title)}</div>
  <div class="foot"><span>${footer}</span><b>geo-scope.online</b></div>
  </div></body></html>`;
}

async function main() {
  await generateLocaleBundles();
  const { routes } = await loadRoutes();
  const selected = only ? routes.filter((route) => route.url.includes(only)) : [...routes];
  const versions = {
    js: await assetVersion("assets/app.js"),
    css: await assetVersion("assets/styles.css"),
    favicon: await assetVersion("assets/favicon-geoscope.png"),
  };
  const notFound = { page: "notfound", locale: DEFAULT_LOCALE, slug: "", url: "/404.html", file: "404.html" };
  if (!only) selected.push(notFound);
  const routesByUrl = new Map([...routes, notFound].map((route) => [route.url.normalize("NFC"), route]));
  const cards = [];
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
      const snap = await snapshot(page);
      const html = renderDocument(snap);
      const file = route.file ? path.join(ROOT, route.file) : outputFile(route.url);
      if (route.page === "article") cards.push({ ...snap.card, locale: route.locale, slug: route.slug });
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, html);
      await page.close();
      done += 1;
      if (done % 25 === 0) console.log(`  ${done}/${selected.length} páginas`);
    }
    const made = await renderSocialImages(context, cards);
    console.log(`Imágenes para redes: ${made} nuevas o actualizadas.`);
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
