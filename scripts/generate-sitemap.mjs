import { writeFile } from "node:fs/promises";
import { articles, regions, sectors, site } from "../data/content.js";
import { defaultLocale, supportedLocales } from "../data/i18n.js";

const baseUrl = String(site.url || "https://geo-scope.online").replace(/\/+$/, "");
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { key: "home", lastmod: today },
  { key: "analysis", lastmod: today },
  { key: "opinion", lastmod: today },
  { key: "radar", lastmod: today },
  { key: "regions", lastmod: today },
  { key: "sectors", lastmod: today },
  { key: "about", lastmod: today },
  { key: "contact", lastmod: today },
  { key: "subscription", lastmod: today },
];

function buildPath(segments = [], locale = defaultLocale) {
  const localized = locale === defaultLocale ? [] : [locale];
  const route = [...localized, ...segments]
    .filter(Boolean)
    .map((segment) => String(segment).replace(/^\/+|\/+$/g, ""))
    .join("/");

  return route ? `/${route}/` : "/";
}

function pagePath(pageKey, locale = defaultLocale) {
  const map = {
    home: [],
    analysis: ["analysis"],
    opinion: ["opinion"],
    radar: ["radar"],
    regions: ["regions"],
    sectors: ["sectors"],
    about: ["about"],
    contact: ["contact"],
    subscription: ["subscription"],
  };

  return buildPath(map[pageKey] || [], locale);
}

function buildUrl(pathname) {
  return new URL(pathname, `${baseUrl}/`).toString();
}

const entries = [];

staticPages.forEach((page) => {
  supportedLocales.forEach((locale) => {
    entries.push({
      loc: buildUrl(pagePath(page.key, locale)),
      lastmod: page.lastmod,
    });
  });
});

articles.forEach((article) => {
  supportedLocales.forEach((locale) => {
    entries.push({
      loc: buildUrl(buildPath(["article", article.slug], locale)),
      lastmod: article.date || today,
    });
  });
});

regions.forEach((region) => {
  supportedLocales.forEach((locale) => {
    entries.push({
      loc: buildUrl(buildPath(["regions", region.slug], locale)),
      lastmod: today,
    });
  });
});

sectors.forEach((sector) => {
  supportedLocales.forEach((locale) => {
    entries.push({
      loc: buildUrl(buildPath(["sectors", sector.slug], locale)),
      lastmod: today,
    });
  });
});

const uniqueEntries = [...new Map(entries.map((entry) => [entry.loc, entry])).values()];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(new URL("../sitemap.xml", import.meta.url), sitemap, "utf8");
