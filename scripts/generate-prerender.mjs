import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  about as aboutBase,
  articles as articlesBase,
  authors as authorsBase,
  navigation as navigationBase,
  newsletterInterests as newsletterInterestsBase,
  regions as regionsBase,
  sectors as sectorsBase,
  site as siteBase,
} from "../data/content.js";
import {
  contentTranslations,
  defaultLocale,
  localeOptions,
  supportedLocales,
  uiCopy,
} from "../data/i18n.js";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const appVersion = "20260601c";
const stylesVersion = "20260601d";
const faviconVersion = "20260428c";
const siteBaseUrl = String(siteBase.url || "https://geo-scope.online").replace(/\/+$/, "");
const ogLocaleMap = {
  es: "es_ES",
  en: "en_US",
  ru: "ru_RU",
  zh: "zh_CN",
};

const staticPages = [
  { key: "home", legacy: "index.html" },
  { key: "analysis", legacy: "analysis.html" },
  { key: "opinion", legacy: "opinion.html" },
  { key: "radar", legacy: "radar.html" },
  { key: "regions", legacy: "regions.html" },
  { key: "sectors", legacy: "sectors.html" },
  { key: "about", legacy: "about.html" },
  { key: "contact", legacy: "contact.html" },
  { key: "subscription", legacy: "subscription.html" },
];

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function main() {
  for (const locale of supportedLocales) {
    const context = getContext(locale);

    for (const page of staticPages) {
      const html = renderStaticPage(context, page.key);
      await writeRouteFile(routeFileFor(pageRoute(page.key, locale)), html);

      if (locale === defaultLocale) {
        await writeRouteFile(page.legacy, html);
      }
    }

    for (const article of context.orderedArticles) {
      const html = renderArticleDocument(context, article.slug);
      await writeRouteFile(routeFileFor(articleRoute(article.slug, locale)), html);
    }

    for (const region of context.regions) {
      const html = renderRegionDocument(context, region.slug);
      await writeRouteFile(routeFileFor(regionRoute(region.slug, locale)), html);
    }

    for (const sector of context.sectors) {
      const html = renderSectorDocument(context, sector.slug);
      await writeRouteFile(routeFileFor(sectorRoute(sector.slug, locale)), html);
    }
  }
}

function getContext(locale) {
  const ui = buildLocalizedUi(locale);
  const {
    about,
    articles,
    authors,
    navigation,
    newsletterInterests,
    regions,
    sectors,
    site,
  } = buildLocalizedData(locale);
  const orderedArticles = [...articles].sort(
    (left, right) => dateValue(right.date) - dateValue(left.date),
  );

  return {
    locale,
    ui,
    about,
    articles,
    authors,
    navigation,
    newsletterInterests,
    regions,
    sectors,
    site,
    articleMap: new Map(articles.map((article) => [article.slug, article])),
    authorMap: new Map(authors.map((author) => [author.slug, author])),
    regionMap: new Map(regions.map((region) => [region.slug, region])),
    sectorMap: new Map(sectors.map((sector) => [sector.slug, sector])),
    orderedArticles,
    articleTypes: ui.articleTypes,
    pageCopy: ui.pageCopy,
  };
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeLocalized(base, override) {
  if (!override) {
    return base;
  }

  const next = { ...base };

  Object.entries(override).forEach(([key, value]) => {
    if (isPlainObject(value) && isPlainObject(base[key])) {
      next[key] = mergeLocalized(base[key], value);
      return;
    }

    next[key] = value;
  });

  return next;
}

function buildLocalizedData(locale) {
  const overridesSource = contentTranslations[locale] || {};
  const overrides = locale === "ru" ? cyrillicizeValue(overridesSource) : overridesSource;

  return {
    site: mergeLocalized(siteBase, overrides.site),
    navigation: navigationBase.map((item) => ({
      ...item,
      label: overrides.navigation?.[item.key] || item.label,
    })),
    newsletterInterests: overrides.newsletterInterests || newsletterInterestsBase,
    about: mergeLocalized(aboutBase, overrides.about),
    authors: authorsBase.map((author) =>
      mergeLocalized(author, overrides.authors?.[author.slug]),
    ),
    regions: regionsBase.map((region) =>
      mergeLocalized(region, overrides.regions?.[region.slug]),
    ),
    sectors: sectorsBase.map((sector) =>
      mergeLocalized(sector, overrides.sectors?.[sector.slug]),
    ),
    articles: articlesBase.map((article) =>
      mergeLocalized(article, overrides.articles?.[article.slug]),
    ),
  };
}

function buildLocalizedUi(locale) {
  const source = uiCopy[locale] || uiCopy[defaultLocale];
  return locale === "ru" ? cyrillicizeValue(source) : source;
}

function cyrillicizeValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => cyrillicizeValue(item));
  }

  if (typeof value === "function") {
    return (...args) => cyrillicizeValue(value(...args));
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, cyrillicizeValue(entry)]),
    );
  }

  if (typeof value === "string") {
    return transliterateRussianString(value);
  }

  return value;
}

function transliterateRussianString(text) {
  let output = String(text);
  const protectedTokens = [];
  const protect = (pattern, transform) => {
    output = output.replace(pattern, (match) => {
      const token = `¤${protectedTokens.length}¤`;
      protectedTokens.push(transform ? transform(match) : match);
      return token;
    });
  };

  protect(/\bGeo Scope\b/g);
  protect(/\bLinkedIn\b/g);
  protect(/\bRSS\b/g);
  protect(/\bheadless CMS\b/g);
  protect(/\bCMS\b/g);
  protect(/\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b/g);
  protect(/\bdata\/[\w./-]+\b/g);
  protect(/\bS&P 500\b/g);
  protect(/\bWall Street\b/g, () => "Уолл-стрит");

  output = output.replace(/\bBRICS\b/g, "БРИКС");
  output = output.replace(/\bAI\b/g, "ИИ");
  output = output.replace(/[A-Za-z][A-Za-z'-]*/g, (word) => transliterateRussianWord(word));

  protectedTokens.forEach((value, index) => {
    output = output.replace(`¤${index}¤`, value);
  });

  return output;
}

function transliterateRussianWord(word) {
  const isAllCaps = /^[A-Z]+$/.test(word);
  const isCapitalized = /^[A-Z]/.test(word);
  let next = word.toLowerCase();

  const replacements = [
    [/shch/g, "щ"],
    [/skiy\b/g, "ский"],
    [/skaya\b/g, "ская"],
    [/skie\b/g, "ские"],
    [/skikh\b/g, "ских"],
    [/skogo\b/g, "ского"],
    [/skomu\b/g, "скому"],
    [/tsiya\b/g, "ция"],
    [/tsii\b/g, "ции"],
    [/tsiyu\b/g, "цию"],
    [/tsiey\b/g, "цией"],
    [/lnyy\b/g, "льный"],
    [/lnaya\b/g, "льная"],
    [/lnoe\b/g, "льное"],
    [/lnye\b/g, "льные"],
    [/lnogo\b/g, "льного"],
    [/lnomu\b/g, "льному"],
    [/lnom\b/g, "льном"],
    [/naya\b/g, "ная"],
    [/nyy\b/g, "ный"],
    [/ogo\b/g, "ого"],
    [/omu\b/g, "ому"],
    [/emu\b/g, "ему"],
    [/uyu\b/g, "ую"],
    [/iya\b/g, "ия"],
    [/iy\b/g, "ий"],
    [/yy\b/g, "ый"],
    [/oy\b/g, "ой"],
    [/ey\b/g, "ей"],
    [/ay\b/g, "ай"],
    [/uy\b/g, "уй"],
    [/zh/g, "ж"],
    [/kh/g, "х"],
    [/ts/g, "ц"],
    [/ch/g, "ч"],
    [/sh/g, "ш"],
    [/yu/g, "ю"],
    [/ya/g, "я"],
    [/yo/g, "ё"],
    [/ye/g, "е"],
  ];

  replacements.forEach(([pattern, replacement]) => {
    next = next.replace(pattern, replacement);
  });

  const singleMap = {
    a: "а",
    b: "б",
    c: "к",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "дж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "к",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "в",
    x: "кс",
    y: "ы",
    z: "з",
  };

  next = next
    .split("")
    .map((character) => singleMap[character] || character)
    .join("");

  next = next
    .replace(/ъи/g, "ьи")
    .replace(/лны/g, "льны")
    .replace(/лна/g, "льна")
    .replace(/лно/g, "льно")
    .replace(/тх/g, "тх")
    .replace(/йы/g, "ый");

  if (isAllCaps) {
    return next.toUpperCase();
  }

  if (isCapitalized) {
    return next.charAt(0).toUpperCase() + next.slice(1);
  }

  return next;
}

function dateValue(input) {
  return new Date(`${input}T12:00:00Z`).getTime();
}

function localeSegments(locale) {
  return locale === defaultLocale ? [] : [locale];
}

function buildCleanPath(segments = [], locale = defaultLocale) {
  const joined = [...localeSegments(locale), ...segments]
    .filter(Boolean)
    .map((segment) => String(segment).replace(/^\/+|\/+$/g, ""))
    .join("/");

  return joined ? `/${joined}/` : "/";
}

function appendRouteQuery(pathname, params = new URLSearchParams()) {
  const serialized = params.toString();
  return `${pathname}${serialized ? `?${serialized}` : ""}`;
}

function pageRoute(pageKey, locale = defaultLocale, params = new URLSearchParams()) {
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
    editor: ["editor"],
  };
  const pathname = buildCleanPath(map[pageKey] || [], locale);

  if (pageKey === "analysis") {
    return appendRouteQuery(pathname, pickParams(params, ["type", "region", "sector", "q"]));
  }

  if (pageKey === "opinion") {
    return appendRouteQuery(pathname, pickParams(params, ["region", "sector", "q"]));
  }

  if (pageKey === "sectors") {
    return appendRouteQuery(pathname, pickParams(params, ["region"]));
  }

  return pathname;
}

function articleRoute(slug, locale = defaultLocale) {
  return buildCleanPath(["article", slug], locale);
}

function regionRoute(slug, locale = defaultLocale) {
  return buildCleanPath(["regions", slug], locale);
}

function sectorRoute(slug, locale = defaultLocale, region = "") {
  return appendRouteQuery(
    buildCleanPath(["sectors", slug], locale),
    pickParams(new URLSearchParams(region ? { region } : {}), ["region"]),
  );
}

function routeFileFor(routePath) {
  const pathname = String(routePath || "/").split("?")[0];
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${trimmed}/index.html` : "index.html";
}

function absoluteSiteUrl(localPath) {
  const next = new URL(localPath || "/", `${siteBaseUrl}/`);
  return next.toString();
}

function pickParams(params, keys = []) {
  const next = new URLSearchParams();
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      next.set(key, value);
    }
  });
  return next;
}

function formatDate(dateString, locale) {
  return new Intl.DateTimeFormat(localeOptions[locale].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00Z`));
}

function normalizeKeywords(values = []) {
  const seen = new Set();

  return values
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .flatMap((value) => String(value || "").split(","))
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => {
      const key = value.toLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

function pageKeywords(context, pageKey, extra = []) {
  return normalizeKeywords([
    context.site.name,
    context.ui.pageTitles[pageKey],
    context.newsletterInterests.slice(0, 6),
    extra,
  ]);
}

function labelForType(context, type) {
  return context.articleTypes[type] || context.ui.generic.readingFallback;
}

function nameForRegion(context, slug) {
  return context.regionMap.get(slug)?.name || context.ui.generic.regionFallback;
}

function nameForSector(context, slug) {
  return context.sectorMap.get(slug)?.name || context.ui.generic.sectorFallback;
}

function articleCountForRegion(context, slug) {
  return context.orderedArticles.filter((article) => article.region === slug).length;
}

function articleCountForSector(context, slug, region = "") {
  return context.orderedArticles.filter((article) => {
    const sectorMatch = article.sectors.includes(slug);
    const regionMatch = region ? article.region === region : true;
    return sectorMatch && regionMatch;
  }).length;
}

function sharedCount(left = [], right = []) {
  const rightSet = new Set(right);
  return left.filter((item) => rightSet.has(item)).length;
}

function findRelatedArticles(context, article) {
  return context.orderedArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      item: candidate,
      score:
        sharedCount(article.sectors, candidate.sectors) * 2 +
        Number(article.region === candidate.region) * 3 +
        sharedCount(article.tags || [], candidate.tags || []),
    }))
    .sort(
      (left, right) =>
        right.score - left.score || dateValue(right.item.date) - dateValue(left.item.date),
    )
    .slice(0, 3)
    .map((entry) => entry.item);
}

function normalizedArticleSections(context, article) {
  if (article.bodySections?.length) {
    return article.bodySections;
  }

  if (article.type === "radar") {
    return [
      {
        heading: context.ui.essaySections.signals,
        subsections: (article.signals || []).map((signal) => ({
          heading: signal.title,
          paragraphs: [signal.detail],
        })),
      },
      {
        heading: context.ui.essaySections.outlook,
        paragraphs: [article.outlook || ""],
      },
    ];
  }

  return [
    article.thesis
      ? {
          heading: context.ui.essaySections.thesis,
          paragraphs: [article.thesis],
        }
      : null,
    article.whyItMatters?.length
      ? {
          heading: context.ui.essaySections.why,
          paragraphs: article.whyItMatters,
        }
      : null,
    article.regionalLens
      ? {
          heading: context.ui.essaySections.regional,
          paragraphs: [article.regionalLens],
        }
      : null,
    article.outlook
      ? {
          heading: context.ui.essaySections.outlook,
          paragraphs: [article.outlook],
        }
      : null,
  ].filter(Boolean);
}

function renderStaticPage(context, pageKey) {
  switch (pageKey) {
    case "home":
      return renderDocument({
        context,
        pageKey,
        title: `${context.site.name} | ${context.ui.pageTitles.home}`,
        description: context.site.description,
        keywords: pageKeywords(context, "home", [
          context.ui.home.heroLead,
          context.ui.home.heroSubtitle,
        ]),
        routeFactory: (locale) => pageRoute("home", locale),
        bodyHtml: renderHome(context),
      });
    case "analysis":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.analysis} | ${context.site.name}`,
        description: context.pageCopy.analysis.description,
        keywords: pageKeywords(context, "analysis", [
          context.ui.archive.allRegions,
          context.ui.archive.allSectors,
        ]),
        routeFactory: (locale) => pageRoute("analysis", locale),
        bodyHtml: renderArchive(context, "analysis"),
      });
    case "opinion":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.opinion} | ${context.site.name}`,
        description: context.pageCopy.opinion.description,
        keywords: pageKeywords(context, "opinion", [context.ui.pageTitles.opinion]),
        routeFactory: (locale) => pageRoute("opinion", locale),
        bodyHtml: renderArchive(context, "opinion"),
      });
    case "radar":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.radar} | ${context.site.name}`,
        description: context.pageCopy.radar.description,
        keywords: pageKeywords(context, "radar", [context.ui.home.globalRadar]),
        routeFactory: (locale) => pageRoute("radar", locale),
        bodyHtml: renderArchive(context, "radar"),
      });
    case "regions":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.regions} | ${context.site.name}`,
        description: context.ui.regionsPage.text,
        keywords: pageKeywords(context, "regions", context.regions.map((region) => region.name)),
        routeFactory: (locale) => pageRoute("regions", locale),
        bodyHtml: renderRegionsOverview(context),
      });
    case "sectors":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.sectors} | ${context.site.name}`,
        description: context.ui.sectorsPage.text,
        keywords: pageKeywords(context, "sectors", context.sectors.map((sector) => sector.name)),
        routeFactory: (locale) => pageRoute("sectors", locale),
        bodyHtml: renderSectorsOverview(context),
      });
    case "about":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.about} | ${context.site.name}`,
        description: context.about.mission,
        keywords: pageKeywords(context, "about", context.about.principles),
        routeFactory: (locale) => pageRoute("about", locale),
        bodyHtml: renderAbout(context),
      });
    case "contact":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.contact} | ${context.site.name}`,
        description: context.ui.contactPage.body,
        keywords: pageKeywords(context, "contact", [
          context.site.email,
          context.ui.contactPage.channels,
        ]),
        routeFactory: (locale) => pageRoute("contact", locale),
        bodyHtml: renderContact(context),
      });
    case "subscription":
      return renderDocument({
        context,
        pageKey,
        title: `${context.ui.pageTitles.subscription} | ${context.site.name}`,
        description: context.ui.subscriptionPage.text,
        keywords: pageKeywords(context, "subscription", [
          context.ui.subscriptionPage.panelTitle,
          context.ui.subscriptionPage.value,
        ]),
        routeFactory: (locale) => pageRoute("subscription", locale),
        bodyHtml: renderSubscription(context),
      });
    default:
      return renderDocument({
        context,
        pageKey: "home",
        title: `${context.site.name} | ${context.ui.pageTitles.home}`,
        description: context.site.description,
        keywords: pageKeywords(context, "home"),
        routeFactory: (locale) => pageRoute("home", locale),
        bodyHtml: renderHome(context),
      });
  }
}

function renderArticleDocument(context, slug) {
  const article = context.articleMap.get(slug);
  const author = context.authorMap.get(article.author);
  const region = context.regionMap.get(article.region);
  const sectorNames = article.sectors.map((sectorSlug) => nameForSector(context, sectorSlug));
  const description = article.excerpt || article.subtitle || context.site.description;

  return renderDocument({
    context,
    pageKey: pageFromType(article.type),
    title: `${article.title} | ${context.site.name}`,
    description,
    keywords: normalizeKeywords([
      context.site.name,
      article.title,
      labelForType(context, article.type),
      region?.name,
      sectorNames,
      article.tags,
      author?.name,
    ]),
    routeFactory: (locale) => articleRoute(article.slug, locale),
    ogType: "article",
    imageAlt: article.title,
    bodyAttrs: {
      "data-page": "article",
      "data-locale": context.locale,
      "data-slug": article.slug,
    },
    bodyHtml: renderArticlePage(context, article),
  });
}

function renderRegionDocument(context, slug) {
  const region = context.regionMap.get(slug);

  return renderDocument({
    context,
    pageKey: "regions",
    title: `${region.name} | ${context.site.name}`,
    description: region.description,
    keywords: pageKeywords(context, "regions", [region.name, region.strap, region.tags]),
    routeFactory: (locale) => regionRoute(region.slug, locale),
    imageAlt: region.name,
    bodyAttrs: {
      "data-page": "region",
      "data-locale": context.locale,
      "data-slug": region.slug,
    },
    bodyHtml: renderRegionPage(context, region),
  });
}

function renderSectorDocument(context, slug) {
  const sector = context.sectorMap.get(slug);

  return renderDocument({
    context,
    pageKey: "sectors",
    title: `${sector.name} | ${context.site.name}`,
    description: sector.description,
    keywords: pageKeywords(context, "sectors", [sector.name]),
    routeFactory: (locale) => sectorRoute(sector.slug, locale),
    imageAlt: sector.name,
    bodyAttrs: {
      "data-page": "sector",
      "data-locale": context.locale,
      "data-slug": sector.slug,
    },
    bodyHtml: renderSectorPage(context, sector),
  });
}

function renderDocument({
  context,
  pageKey,
  title,
  description,
  keywords,
  routeFactory,
  ogType = "website",
  imageAlt = context.site.name,
  bodyAttrs = {},
  bodyHtml,
}) {
  const canonicalPath = routeFactory(context.locale);
  const alternateLinks = supportedLocales
    .map(
      (locale) =>
        `<link rel="alternate" hreflang="${locale}" href="${absoluteSiteUrl(routeFactory(locale))}" />`,
    )
    .join("\n    ");
  const xDefault = `<link rel="alternate" hreflang="x-default" href="${absoluteSiteUrl(
    routeFactory(defaultLocale),
  )}" />`;
  const header = renderHeader(context, pageKey, routeFactory);
  const footer = renderFooter(context);
  const bodyData = Object.entries({ "data-page": pageKey, "data-locale": context.locale, ...bodyAttrs })
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  return `<!doctype html>
<html lang="${context.locale}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${normalizeKeywords(keywords).join(", ")}" />
    <link rel="canonical" href="${absoluteSiteUrl(canonicalPath)}" />
    ${alternateLinks}
    ${xDefault}
    <meta property="og:site_name" content="${context.site.name}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${absoluteSiteUrl(canonicalPath)}" />
    <meta property="og:image" content="${absoluteSiteUrl("/assets/geoscope-logo.png")}" />
    <meta property="og:image:alt" content="${imageAlt}" />
    <meta property="og:locale" content="${ogLocaleMap[context.locale] || ogLocaleMap[defaultLocale]}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${absoluteSiteUrl("/assets/geoscope-logo.png")}" />
    <meta name="twitter:site" content="@geoscope" />
    <link rel="stylesheet" href="/assets/styles.css?v=${stylesVersion}" />
    <link rel="icon" type="image/png" href="/assets/favicon-geoscope.png?v=${faviconVersion}" />
  </head>
  <body ${bodyData}>
    <div class="site-shell">
      <header id="site-header">${header}</header>
      <main id="app">${bodyHtml}</main>
      <footer id="site-footer">${footer}</footer>
    </div>
    <script type="module" src="/assets/app.js?v=${appVersion}"></script>
  </body>
</html>
`;
}

function renderHeader(context, activeKey, routeFactory) {
  const headerNavigation = context.navigation.filter((item) => item.key !== "subscription");

  return `
    <div class="nav-frame">
      <a class="brand" href="${pageRoute("home", context.locale)}" aria-label="Geo Scope">
        <span class="brand-mark brand-mark--header">
          <img class="brand-logo" src="/assets/geoscope-logo.png" alt="Geo Scope" />
        </span>
      </a>
      <div class="nav-stack is-open" id="site-nav">
        <nav class="site-nav" aria-label="${context.ui.header.navAria}">
          ${headerNavigation
            .map(
              (item) => `
                <a class="nav-link ${item.key === activeKey ? "is-active" : ""}" href="${pageRoute(item.key === "home" ? "home" : item.key, context.locale)}">
                  ${item.label}
                </a>
              `,
            )
            .join("")}
        </nav>
        <div class="header-utility" aria-label="${context.ui.header.utilityAria}">
          <a class="header-utility__link" href="${pageRoute("analysis", context.locale)}">${context.ui.header.search}</a>
          <span class="header-utility__divider" aria-hidden="true"></span>
          <div class="header-language" role="group" aria-label="${context.ui.header.languageAria}">
            ${supportedLocales
              .map(
                (locale) => `
                  <a
                    class="header-language__button ${locale === context.locale ? "is-active" : ""}"
                    href="${routeFactory(locale)}"
                    aria-current="${locale === context.locale ? "true" : "false"}"
                  >
                    ${localeOptions[locale].label}
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter(context) {
  const sectionLinks = context.navigation.slice(0, 7);
  const institutionalLinks = [
    { label: context.ui.pageTitles.about, href: pageRoute("about", context.locale) },
    { label: context.ui.pageTitles.contact, href: pageRoute("contact", context.locale) },
    { label: context.ui.pageTitles.subscription, href: pageRoute("subscription", context.locale) },
  ];

  return `
    <div class="footer-wrap">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand--footer" href="${pageRoute("home", context.locale)}">
            <span class="brand-mark brand-mark--footer">
              <img class="brand-logo brand-logo--footer" src="/assets/geoscope-logo.png" alt="Geo Scope" />
            </span>
          </a>
          <p>${context.site.description}</p>
          <div class="social-links">
            ${context.site.social
              .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>${context.ui.footer.sections}</h3>
          <div class="footer-links">
            ${sectionLinks
              .map((item) => `<a href="${pageRoute(item.key === "home" ? "home" : item.key, context.locale)}">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>${context.ui.footer.institutional}</h3>
          <div class="footer-links">
            ${institutionalLinks.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
          </div>
          <div class="footer-contact">
            <span>${context.site.email}</span>
            <span>${context.ui.footer.contactNote}</span>
          </div>
        </div>
        <div>
          <h3>${context.ui.footer.newsletter}</h3>
          <p class="footer-note">${context.ui.footer.newsletterNote}</p>
          <a class="btn btn-secondary" href="${pageRoute("subscription", context.locale)}">${context.ui.header.subscription}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>Copyright ${new Date().getFullYear()} ${context.site.name}. ${context.ui.footer.rightsReserved}</span>
      </div>
    </div>
  `;
}

function sectionHead({ eyebrow, title, text, actionLabel = "", actionHref = "" }) {
  return `
    <div class="section-head section-head--stacked reveal">
      <div class="section-head__content">
        <span class="eyebrow">${eyebrow}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      ${actionLabel && actionHref ? `<a class="btn btn-ghost" href="${actionHref}">${actionLabel}</a>` : ""}
    </div>
  `;
}

function renderHome(context) {
  const featured = [...context.orderedArticles]
    .filter((article) => article.homeFeature)
    .sort((left, right) => left.homeFeature - right.homeFeature);
  const mainFeature = featured[0];
  const secondaryFeatures = featured.slice(1, 4);
  const latestAnalyses = context.orderedArticles
    .filter((article) => article.type === "analysis" && !article.homeFeature)
    .slice(0, 3);
  const radarItems = context.orderedArticles.filter((article) => article.type === "radar").slice(0, 2);
  const homeSectors = [...context.sectors]
    .sort(
      (left, right) =>
        articleCountForSector(context, right.slug) - articleCountForSector(context, left.slug) ||
        left.name.localeCompare(right.name),
    )
    .slice(0, 6);
  const homeRegions = [...context.regions]
    .sort(
      (left, right) =>
        articleCountForRegion(context, right.slug) - articleCountForRegion(context, left.slug) ||
        left.name.localeCompare(right.name),
    )
    .slice(0, 6);

  return `
    <section class="hero hero--home section">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <h1 class="hero-lead">${context.ui.home.heroLead}</h1>
          <p class="hero-subtitle">${context.ui.home.heroSubtitle}</p>
          <p class="hero-text">${context.ui.home.heroText}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${pageRoute("analysis", context.locale)}">${context.ui.home.explore}</a>
            <a class="btn btn-secondary" href="${pageRoute("subscription", context.locale)}">${context.ui.home.subscribe}</a>
          </div>
          <div class="hero-trust-row">
            ${context.ui.home.trust.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
        <aside class="hero-panel hero-panel--home reveal">
          <div class="hero-panel__main">
            <div class="panel-header">
              <span class="eyebrow">${context.ui.home.focus}</span>
              <span class="panel-index">${context.ui.home.edition} / 01</span>
            </div>
            <a class="hero-panel__link" href="${articleRoute(mainFeature.slug, context.locale)}">
              <h2 class="hero-panel__title">${mainFeature.title}</h2>
              <p class="hero-panel__text">${mainFeature.subtitle}</p>
            </a>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section--home-lead">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.home.frontpage.eyebrow,
          title: context.ui.home.frontpage.title,
          text: context.ui.home.frontpage.text,
        })}
        <div class="feature-layout feature-layout--home">
          <div class="feature-layout__main">${renderArticleCard(context, mainFeature, "feature")}</div>
          <div class="home-preview-grid">
            ${secondaryFeatures.map((article) => renderArticleCard(context, article, "standard")).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.home.latest.eyebrow,
          title: context.ui.home.latest.title,
          text: context.ui.home.latest.text,
          actionLabel: context.ui.home.latest.action,
          actionHref: pageRoute("analysis", context.locale),
        })}
        <div class="card-grid card-grid--three">
          ${latestAnalyses.map((article) => renderArticleCard(context, article, "standard")).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.home.radar.eyebrow,
          title: context.ui.home.radar.title,
          text: context.ui.home.radar.text,
          actionLabel: context.ui.home.radar.action,
          actionHref: pageRoute("radar", context.locale),
        })}
        <div class="card-grid card-grid--two">
          ${radarItems.map((article) => renderArticleCard(context, article, "standard")).join("")}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.home.sectors.eyebrow,
          title: context.ui.home.sectors.title,
          text: context.ui.home.sectors.text,
          actionLabel: context.ui.home.sectors.action,
          actionHref: pageRoute("sectors", context.locale),
        })}
        <div class="sector-grid sector-grid--full">
          ${homeSectors.map((sector) => renderSectorCard(context, sector)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.home.regionsSection.eyebrow,
          title: context.ui.home.regionsSection.title,
          text: context.ui.home.regionsSection.text,
          actionLabel: context.ui.home.regionsSection.action,
          actionHref: pageRoute("regions", context.locale),
        })}
        <div class="region-grid region-grid--full">
          ${homeRegions.map((region) => renderRegionCard(context, region, true)).join("")}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="newsletter-panel">
          <div class="newsletter-panel__copy">
            <span class="eyebrow">${context.ui.newsletter.eyebrow}</span>
            <h2>${context.ui.home.newsletter.title}</h2>
            <p>${context.ui.home.newsletter.description}</p>
          </div>
          <a class="btn btn-primary" href="${pageRoute("subscription", context.locale)}">${context.ui.home.subscribe}</a>
        </div>
      </div>
    </section>
  `;
}

function renderArchive(context, kind) {
  const map = {
    analysis: {
      eyebrow: context.pageCopy.analysis.eyebrow,
      title: context.pageCopy.analysis.title,
      description: context.pageCopy.analysis.description,
      items: context.orderedArticles.filter((article) => article.type === "analysis"),
    },
    opinion: {
      eyebrow: context.pageCopy.opinion.eyebrow,
      title: context.pageCopy.opinion.title,
      description: context.pageCopy.opinion.description,
      items: context.orderedArticles.filter((article) => article.type === "opinion"),
    },
    radar: {
      eyebrow: context.pageCopy.radar.eyebrow,
      title: context.pageCopy.radar.title,
      description: context.pageCopy.radar.description,
      items: context.orderedArticles.filter((article) => article.type === "radar"),
    },
  }[kind];

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${map.eyebrow}</span>
          <h1 class="page-title">${map.title}</h1>
          <p class="page-text">${map.description}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${map.items.length}</strong>
            <span>${context.ui.archive.visibleResults}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="card-grid card-grid--three">
          ${map.items.map((article) => renderArticleCard(context, article, "standard")).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderRegionsOverview(context) {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.regionsPage.eyebrow}</span>
          <h1 class="page-title">${context.ui.regionsPage.title}</h1>
          <p class="page-text">${context.ui.regionsPage.text}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="region-grid region-grid--full">
          ${context.regions.map((region) => renderRegionCard(context, region, true)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderRegionPage(context, region) {
  const regionArticles = context.orderedArticles.filter((article) => article.region === region.slug);
  const featuredArticle = regionArticles[0];
  const latest = regionArticles.slice(1, 4);
  const relatedSectors = [...new Set(regionArticles.flatMap((article) => article.sectors))].slice(0, 4);

  return `
    <section class="page-hero section region-hero">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.regionsPage.region}</span>
          <h1 class="page-title">${region.name}</h1>
          <p class="page-text">${region.description}</p>
          <p class="region-strap">${region.strap}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="region-detail-grid">
          <div class="region-detail-grid__main">
            ${featuredArticle ? renderArticleCard(context, featuredArticle, "feature") : ""}
          </div>
          <aside class="card region-insight reveal">
            <span class="eyebrow">${context.ui.regionsPage.strategicDescription}</span>
            <h2>${region.strap}</h2>
            <p>${region.description}</p>
            <div class="tag-list">
              ${region.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="related-topics">
              ${relatedSectors
                .map((sectorSlug) => {
                  const sector = context.sectorMap.get(sectorSlug);
                  return sector ? `<a href="${sectorRoute(sector.slug, context.locale)}">${sector.name}</a>` : "";
                })
                .join("")}
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.regionsPage.latestEyebrow,
          title: context.ui.regionsPage.latestTitle(region.name),
          text: context.ui.regionsPage.latestText,
        })}
        <div class="card-grid card-grid--three">
          ${latest.map((article) => renderArticleCard(context, article, "standard")).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSectorsOverview(context) {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.sectorsPage.eyebrow}</span>
          <h1 class="page-title">${context.ui.sectorsPage.title}</h1>
          <p class="page-text">${context.ui.sectorsPage.text}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="sector-grid sector-grid--full">
          ${context.sectors.map((sector) => renderSectorCard(context, sector)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSectorPage(context, sector) {
  const relatedArticles = context.orderedArticles.filter((article) =>
    article.sectors.includes(sector.slug),
  );

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.sectorsPage.sector}</span>
          <h1 class="page-title">${sector.name}</h1>
          <p class="page-text">${sector.description}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="card-grid card-grid--three">
          ${relatedArticles.map((article) => renderArticleCard(context, article, "standard")).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderArticlePage(context, article) {
  const author = context.authorMap.get(article.author) || {
    name: context.ui.articlePage.fallbackAuthorName,
    role: context.ui.articlePage.fallbackAuthorRole,
  };
  const region = context.regionMap.get(article.region);
  const related = findRelatedArticles(context, article);
  const sections = normalizedArticleSections(context, article);

  return `
    <section class="article-hero section">
      <div class="container article-hero__grid">
        <div class="article-hero__copy reveal">
          <a class="back-link" href="${pageRoute(pageFromType(article.type), context.locale)}">${context.ui.articlePage.back}</a>
          <div class="meta-row">
            <span class="meta-chip">${labelForType(context, article.type)}</span>
            <span class="meta-chip">${nameForRegion(context, article.region)}</span>
          </div>
          <h1 class="article-title">${article.title}</h1>
          <p class="article-subtitle">${article.subtitle}</p>
          <div class="article-meta">
            <div>
              <strong>${author.name}</strong>
              <span>${author.role}</span>
            </div>
            <div>
              <strong>${formatDate(article.date, context.locale)}</strong>
              <span>${context.ui.meta.readTime(article.readTime)}</span>
            </div>
          </div>
        </div>
        <aside class="article-hero__aside reveal">
          ${coverArt(context, article, "")}
        </aside>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container article-layout">
        <article class="article-body card reveal">
          ${sections.map((section) => renderArticleSection(section)).join("")}
        </article>
        <aside class="article-sidebar">
          <div class="card article-sidebar__panel reveal">
            <span class="eyebrow">${context.ui.articlePage.relatedRegion}</span>
            <h2>${region?.name || context.ui.articlePage.fallbackRegionName}</h2>
            <p>${region?.description || context.ui.articlePage.fallbackRegionDescription}</p>
            <a class="inline-link" href="${region ? regionRoute(region.slug, context.locale) : pageRoute("regions", context.locale)}">
              ${region ? context.ui.articlePage.openRegionalCover : context.ui.articlePage.openRegionalMap}
            </a>
          </div>
          <div class="card article-sidebar__panel reveal">
            <span class="eyebrow">${context.ui.articlePage.tags}</span>
            <div class="tag-list">
              ${(article.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </aside>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead({
          eyebrow: context.ui.articlePage.relatedEyebrow,
          title: context.ui.articlePage.relatedTitle,
          text: context.ui.articlePage.relatedText,
        })}
        <div class="card-grid card-grid--three">
          ${related.map((entry) => renderArticleCard(context, entry, "standard")).join("")}
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        <div class="newsletter-panel">
          <div class="newsletter-panel__copy">
            <span class="eyebrow">${context.ui.newsletter.eyebrow}</span>
            <h2>${context.ui.articlePage.newsletterTitle}</h2>
            <p>${context.ui.articlePage.newsletterDescription}</p>
          </div>
          <a class="btn btn-primary" href="${pageRoute("subscription", context.locale)}">${context.ui.header.subscription}</a>
        </div>
      </div>
    </section>
  `;
}

function renderAbout(context) {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.aboutPage.eyebrow}</span>
          <h1 class="page-title">${context.ui.aboutPage.title}</h1>
          <p class="page-text">${context.ui.aboutPage.text}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container card-grid card-grid--three">
        <article class="card">
          <h2>${context.ui.aboutPage.mission}</h2>
          <p>${context.about.mission}</p>
        </article>
        <article class="card">
          <h2>${context.ui.aboutPage.vision}</h2>
          <p>${context.about.vision}</p>
        </article>
        <article class="card">
          <h2>${context.ui.aboutPage.approach}</h2>
          <p>${context.ui.aboutPage.approachText}</p>
        </article>
      </div>
    </section>
  `;
}

function renderContact(context) {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.contactPage.eyebrow}</span>
          <h1 class="page-title">${context.ui.contactPage.title}</h1>
          <p class="page-text">${context.ui.contactPage.body}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container card-grid card-grid--two">
        <article class="card">
          <h2>${context.ui.contactPage.information}</h2>
          <p>${context.site.email}</p>
          <p>${context.ui.contactPage.approachText}</p>
        </article>
        <article class="card">
          <h2>${context.ui.contactPage.channels}</h2>
          <div class="social-links">
            ${context.site.social.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderSubscription(context) {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${context.ui.subscriptionPage.eyebrow}</span>
          <h1 class="page-title">${context.ui.subscriptionPage.title}</h1>
          <p class="page-text">${context.ui.subscriptionPage.text}</p>
        </div>
      </div>
    </section>
    <section class="section section-tight">
      <div class="container">
        <div class="newsletter-panel">
          <div class="newsletter-panel__copy">
            <span class="eyebrow">${context.ui.newsletter.eyebrow}</span>
            <h2>${context.ui.subscriptionPage.panelTitle}</h2>
            <p>${context.ui.subscriptionPage.panelDescription}</p>
          </div>
          <form class="newsletter-form newsletter-form--panel">
            <input type="text" placeholder="${context.ui.newsletter.namePlaceholder}" />
            <input type="email" placeholder="${context.ui.newsletter.emailPlaceholder}" />
            <fieldset class="interest-fieldset">
              <legend>${context.ui.newsletter.interests}</legend>
              <div class="interest-grid">
                ${context.newsletterInterests
                  .map(
                    (interest) => `
                      <label class="interest-chip">
                        <input type="checkbox" />
                        <span>${interest}</span>
                      </label>
                    `,
                  )
                  .join("")}
              </div>
            </fieldset>
            <button class="btn btn-primary" type="button">${context.ui.newsletter.subscribe}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderArticleCard(context, article, variant = "standard") {
  if (!article) {
    return "";
  }

  const articleClass = {
    feature: "article-card article-card--feature",
    compact: "article-card article-card--compact",
    outline: "article-card article-card--outline",
    standard: "article-card article-card--standard",
  }[variant];

  return `
    <article class="card ${articleClass} reveal">
      <a class="article-card__link" href="${articleRoute(article.slug, context.locale)}">
        ${coverArt(context, article, variant === "compact" ? "cover-art--compact" : "")}
        <div class="article-card__body">
          <div class="meta-row">
            <span class="meta-chip">${labelForType(context, article.type)}</span>
            <span class="meta-chip">${nameForRegion(context, article.region)}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <span class="inline-link article-card__cta">${context.ui.articlePage.readArticle}</span>
          <div class="article-card__footer">
            <span>${formatDate(article.date, context.locale)}</span>
            <span>${context.ui.meta.shortMinutes(article.readTime)}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderRegionCard(context, region, expanded = false) {
  const counter = articleCountForRegion(context, region.slug);

  return `
    <article class="card region-card reveal">
      <a class="region-card__link" href="${regionRoute(region.slug, context.locale)}">
        <div class="region-card__head">
          <span class="eyebrow">${context.ui.regionsPage.region}</span>
          <span class="meta-chip">${context.ui.meta.articles(counter)}</span>
        </div>
        <h3>${region.name}</h3>
        <p>${expanded ? region.description : region.strap}</p>
        <div class="tag-list">
          ${region.tags.slice(0, expanded ? 4 : 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </a>
    </article>
  `;
}

function renderSectorCard(context, sector) {
  return `
    <article class="card sector-card reveal">
      <a class="sector-card__link" href="${sectorRoute(sector.slug, context.locale)}">
        <div class="sector-card__head">
          <span class="icon-badge">${iconMarkup(sector.icon)}</span>
          <span class="meta-chip">${context.ui.meta.articles(articleCountForSector(context, sector.slug))}</span>
        </div>
        <h3>${sector.name}</h3>
        <p>${sector.description}</p>
        <span class="inline-link">${context.ui.articlePage.openSector}</span>
      </a>
    </article>
  `;
}

function coverArt(context, article, modifier = "") {
  return `
    <div class="cover-art tone-${article.tone} ${modifier}">
      <div class="cover-art__info">
        <span class="cover-art__eyebrow">${nameForRegion(context, article.region)}</span>
        <strong>${article.title}</strong>
        <span>${article.sectors.slice(0, 2).map((sector) => nameForSector(context, sector)).join(" / ")}</span>
      </div>
    </div>
  `;
}

function renderArticleSection(section, level = 2) {
  if (!section) {
    return "";
  }

  const headingTag = `h${Math.min(level, 3)}`;
  const hasHeading = Boolean(section.heading);
  const sectionClass = hasHeading
    ? "article-section"
    : "article-section article-section--intro";

  return `
    <section class="${sectionClass}">
      ${hasHeading ? `<${headingTag}>${section.heading}</${headingTag}>` : ""}
      ${(section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      ${
        section.callouts?.length
          ? `
            <div class="article-callout-stack">
              ${section.callouts
                .map(
                  (callout) => `
                    <div class="article-callout">
                      <p>${callout}</p>
                    </div>
                  `,
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.bullets?.length
          ? `
            <ul class="article-list">
              ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          `
          : ""
      }
      ${
        section.subsections?.length
          ? `
            <div class="article-subsections">
              ${section.subsections
                .map(
                  (subsection) => `
                    <div class="article-subsection">
                      ${renderArticleSection(subsection, level + 1)}
                    </div>
                  `,
                )
                .join("")}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function iconMarkup(kind) {
  const icons = {
    compass:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M9 15l2-6 6-2-2 6-6 2z"></path></svg>',
    bars:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18V9"></path><path d="M12 18V5"></path><path d="M19 18v-7"></path></svg>',
    circuit:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h8"></path><path d="M8 18h8"></path><path d="M8 6v12"></path><path d="M16 6v12"></path><circle cx="8" cy="12" r="1.5"></circle><circle cx="16" cy="12" r="1.5"></circle></svg>',
    pulse:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h5l2-4 4 8 2-4h5"></path></svg>',
    route:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M8 6h4a4 4 0 0 1 4 4v6"></path></svg>',
    shield:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-3z"></path></svg>',
    handshake:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10l3-3h4l2 2 2-2h3l3 3"></path><path d="M8 13l2 2a2 2 0 0 0 3 0l1-1 1 1a2 2 0 0 0 3 0l2-2"></path></svg>',
    grid:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>',
    spark:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"></path></svg>',
    orbit:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2"></circle><path d="M4 12c2-4 14-4 16 0-2 4-14 4-16 0z"></path><path d="M12 4c4 2 4 14 0 16-4-2-4-14 0-16z"></path></svg>',
  };

  return icons[kind] || icons.grid;
}

function pageFromType(type) {
  return {
    analysis: "analysis",
    opinion: "opinion",
    radar: "radar",
  }[type];
}

async function writeRouteFile(relativePath, html) {
  const outputPath = path.join(projectRoot, relativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}
