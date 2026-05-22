import {
  about as aboutBase,
  articles as articlesBase,
  authors as authorsBase,
  navigation as navigationBase,
  newsletterInterests as newsletterInterestsBase,
  regions as regionsBase,
  sectors as sectorsBase,
  site as siteBase,
} from "../data/content.js?v=20260522a";
import {
  contentTranslations,
  defaultLocale,
  localeOptions,
  supportedLocales,
  uiCopy,
} from "../data/i18n.js?v=20260522a";

const page = document.body.dataset.page;
const app = document.getElementById("app");
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
let query = new URLSearchParams(window.location.search);
const currentLocale = resolveLocale(query);
const ui = buildLocalizedUi(currentLocale);
const localeMeta = localeOptions[currentLocale] || localeOptions[defaultLocale];
const brandLogoSrc = "/assets/geoscope-logo.png";
document.documentElement.lang = currentLocale;

const {
  about,
  articles,
  authors,
  navigation,
  newsletterInterests,
  regions,
  sectors,
  site,
} = buildLocalizedData(currentLocale);

const articleTypeLabels = ui.articleTypes;
const pageCopy = ui.pageCopy;
const siteBaseUrl = normalizeSiteBaseUrl(site.url || window.location.origin);

const defaultKeywordSeed = [site.name, ...newsletterInterests.slice(0, 6)];
const socialImagePath = site.socialImage || brandLogoSrc;
const ogLocaleMap = {
  es: "es_ES",
  en: "en_US",
  ru: "ru_RU",
  zh: "zh_CN",
};

const articleMap = new Map(articles.map((article) => [article.slug, article]));
const authorMap = new Map(authors.map((author) => [author.slug, author]));
const regionMap = new Map(regions.map((region) => [region.slug, region]));
const sectorMap = new Map(sectors.map((sector) => [sector.slug, sector]));

const orderedArticles = [...articles].sort(
  (left, right) => dateValue(right.date) - dateValue(left.date),
);

renderShell();
renderPage();

function ensureMetaTag(attribute, value) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureLinkTag(attribute, value) {
  let tag = document.head.querySelector(`link[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
}

function normalizeSiteBaseUrl(url) {
  return String(url || "").replace(/\/+$/, "");
}

function absoluteSiteUrl(localUrl = "") {
  const next = new URL(localUrl || "/", `${siteBaseUrl}/`);

  if (next.pathname.endsWith("/index.html")) {
    next.pathname = next.pathname.replace(/\/index\.html$/, "/");
  }

  return next.toString();
}

function applyCanonicalUrl(localUrl = "index.html") {
  const canonicalTag = ensureLinkTag("rel", "canonical");
  canonicalTag.setAttribute("href", absoluteSiteUrl(localUrl));
}

function clearAlternateLinks() {
  document.head
    .querySelectorAll('link[data-hreflang-link="true"]')
    .forEach((tag) => tag.remove());
}

function appendAlternateLink(hreflang, href) {
  const tag = document.createElement("link");
  tag.setAttribute("rel", "alternate");
  tag.setAttribute("hreflang", hreflang);
  tag.setAttribute("href", absoluteSiteUrl(href));
  tag.dataset.hreflangLink = "true";
  document.head.appendChild(tag);
}

function localizedUrlForLocale(path, locale, params = null) {
  const [basePath, search = ""] = String(path).split("?");
  const nextParams =
    params instanceof URLSearchParams
      ? new URLSearchParams(params)
      : params
        ? new URLSearchParams(params)
        : new URLSearchParams(search);

  const cleanPath = cleanLocalizedPath(basePath, locale, nextParams);

  if (cleanPath) {
    return cleanPath;
  }

  if (locale === defaultLocale) {
    nextParams.delete("lang");
  } else {
    nextParams.set("lang", locale);
  }

  const serialized = nextParams.toString();
  return `${basePath}${serialized ? `?${serialized}` : ""}`;
}

function applyAlternateLocaleLinks(path, params = null) {
  clearAlternateLinks();

  supportedLocales.forEach((locale) => {
    appendAlternateLink(locale, localizedUrlForLocale(path, locale, params));
  });

  appendAlternateLink("x-default", localizedUrlForLocale(path, defaultLocale, params));
}

function socialHandleFromSite() {
  const profile = site.social.find(
    (item) =>
      /^(x|twitter)$/i.test(item.label || "") ||
      /(?:^|\.)x\.com|twitter\.com/.test(item.href || ""),
  );

  if (!profile?.href) {
    return "";
  }

  try {
    const url = new URL(profile.href);
    const handle = url.pathname.replace(/^\/+/, "").split("/")[0];
    return handle ? `@${handle}` : "";
  } catch {
    return "";
  }
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

function applyHeadMeta({ description, keywords = [] }) {
  const descriptionTag = ensureMetaTag("name", "description");
  const keywordsTag = ensureMetaTag("name", "keywords");

  descriptionTag.setAttribute("content", description || site.description);
  keywordsTag.setAttribute(
    "content",
    normalizeKeywords(keywords.length ? keywords : defaultKeywordSeed).join(", "),
  );
}

function applySocialMeta({
  title,
  description,
  type = "website",
  image = socialImagePath,
  path = "index.html",
  params = null,
  imageAlt = site.name,
}) {
  const resolvedDescription = description || site.description;
  const localizedPath = localizedUrlForLocale(path, currentLocale, params);
  const twitterHandle = socialHandleFromSite();

  ensureMetaTag("property", "og:site_name").setAttribute("content", site.name);
  ensureMetaTag("property", "og:title").setAttribute("content", title || site.name);
  ensureMetaTag("property", "og:description").setAttribute("content", resolvedDescription);
  ensureMetaTag("property", "og:type").setAttribute("content", type);
  ensureMetaTag("property", "og:url").setAttribute(
    "content",
    absoluteSiteUrl(localizedPath),
  );
  ensureMetaTag("property", "og:image").setAttribute(
    "content",
    absoluteSiteUrl(image),
  );
  ensureMetaTag("property", "og:image:alt").setAttribute("content", imageAlt || site.name);
  ensureMetaTag("property", "og:locale").setAttribute(
    "content",
    ogLocaleMap[currentLocale] || ogLocaleMap[defaultLocale],
  );

  ensureMetaTag("name", "twitter:card").setAttribute("content", "summary_large_image");
  ensureMetaTag("name", "twitter:title").setAttribute("content", title || site.name);
  ensureMetaTag("name", "twitter:description").setAttribute("content", resolvedDescription);
  ensureMetaTag("name", "twitter:image").setAttribute(
    "content",
    absoluteSiteUrl(image),
  );

  if (twitterHandle) {
    ensureMetaTag("name", "twitter:site").setAttribute("content", twitterHandle);
  }

  applyCanonicalUrl(localizedPath);
  applyAlternateLocaleLinks(path, params);
}

function pageKeywords(pageKey, extra = []) {
  return normalizeKeywords([site.name, ui.pageTitles[pageKey], defaultKeywordSeed, extra]);
}

function applyStaticPageMeta(pageKey, description, extraKeywords = []) {
  applyHeadMeta({
    description,
    keywords: pageKeywords(pageKey, extraKeywords),
  });
  applySocialMeta({
    title: document.title,
    description,
    path: pageKey === "home" ? "index.html" : `${pageKey}.html`,
  });
}

function routeValue(name) {
  return query.get(name) || document.body.dataset[name] || "";
}

function localeSegments(locale = currentLocale) {
  return locale && locale !== defaultLocale ? [locale] : [];
}

function buildCleanPath(segments = [], locale = currentLocale) {
  const route = [...localeSegments(locale), ...segments]
    .filter(Boolean)
    .map((segment) => String(segment).replace(/^\/+|\/+$/g, ""))
    .join("/");

  return route ? `/${route}/` : "/";
}

function appendRouteQuery(path, params = new URLSearchParams()) {
  const serialized = params.toString();
  return `${path}${serialized ? `?${serialized}` : ""}`;
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

function buildStaticRoutePath(pageKey, locale = currentLocale, params = new URLSearchParams()) {
  const routeMap = {
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
  const path = buildCleanPath(routeMap[pageKey] || [], locale);

  if (pageKey === "analysis") {
    return appendRouteQuery(path, pickParams(params, ["type", "region", "sector", "q"]));
  }

  if (pageKey === "opinion") {
    return appendRouteQuery(path, pickParams(params, ["region", "sector", "q"]));
  }

  if (pageKey === "sectors") {
    return appendRouteQuery(path, pickParams(params, ["region"]));
  }

  return path;
}

function buildArticleRoutePath(slug, locale = currentLocale) {
  return buildCleanPath(["article", slug], locale);
}

function buildRegionRoutePath(slug, locale = currentLocale) {
  return buildCleanPath(["regions", slug], locale);
}

function buildSectorRoutePath(slug, locale = currentLocale, region = "") {
  return appendRouteQuery(
    buildCleanPath(["sectors", slug], locale),
    pickParams(new URLSearchParams(region ? { region } : {}), ["region"]),
  );
}

function currentRouteParams() {
  switch (page) {
    case "analysis":
      return pickParams(query, ["type", "region", "sector", "q"]);
    case "opinion":
      return pickParams(query, ["region", "sector", "q"]);
    case "sectors":
      return pickParams(query, ["region"]);
    case "region":
      return new URLSearchParams(routeValue("slug") ? { slug: routeValue("slug") } : {});
    case "sector": {
      const params = new URLSearchParams(routeValue("slug") ? { slug: routeValue("slug") } : {});
      if (routeValue("region")) {
        params.set("region", routeValue("region"));
      }
      return params;
    }
    case "article":
      return new URLSearchParams(routeValue("slug") ? { slug: routeValue("slug") } : {});
    default:
      return new URLSearchParams();
  }
}

function renderShell() {
  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
  bindShellInteractions();
}

function renderPage() {
  query = new URLSearchParams(window.location.search);

  const globalSearch = header.querySelector("#global-search");
  if (globalSearch) {
    globalSearch.value = query.get("q") || "";
  }

  switch (page) {
    case "home":
      document.title = `${site.name} | ${ui.pageTitles.home}`;
      applyStaticPageMeta("home", site.description, [
        ui.home.heroLead,
        ui.home.heroSubtitle,
      ]);
      app.innerHTML = renderHomePage();
      break;
    case "analysis":
      document.title = `${ui.pageTitles.analysis} | ${site.name}`;
      applyStaticPageMeta("analysis", pageCopy.analysis.description, [
        ui.pageTitles.analysis,
        ui.archive.allRegions,
        ui.archive.allSectors,
      ]);
      app.innerHTML = renderArchivePage({
        title: pageCopy.analysis.title,
        eyebrow: pageCopy.analysis.eyebrow,
        description: pageCopy.analysis.description,
        lockedType: false,
        defaultType: "all",
      });
      break;
    case "opinion":
      document.title = `${ui.pageTitles.opinion} | ${site.name}`;
      applyStaticPageMeta("opinion", pageCopy.opinion.description, [
        ui.pageTitles.opinion,
      ]);
      app.innerHTML = renderArchivePage({
        title: pageCopy.opinion.title,
        eyebrow: pageCopy.opinion.eyebrow,
        description: pageCopy.opinion.description,
        lockedType: true,
        defaultType: "opinion",
      });
      break;
    case "explainers":
      document.title = `${ui.pageTitles.analysis} | ${site.name}`;
      applyStaticPageMeta("analysis", pageCopy.analysis.description, [
        ui.pageTitles.analysis,
      ]);
      app.innerHTML = renderArchivePage({
        title: pageCopy.analysis.title,
        eyebrow: pageCopy.analysis.eyebrow,
        description: pageCopy.analysis.description,
        lockedType: false,
        defaultType: "all",
      });
      break;
    case "radar":
      document.title = `${ui.pageTitles.radar} | ${site.name}`;
      applyStaticPageMeta("radar", pageCopy.radar.description, [
        ui.pageTitles.radar,
        ui.home.globalRadar,
      ]);
      app.innerHTML = renderRadarPage();
      break;
    case "regions":
      document.title = `${ui.pageTitles.regions} | ${site.name}`;
      applyStaticPageMeta("regions", ui.regionsPage.text, regions.map((region) => region.name));
      app.innerHTML = renderRegionsPage();
      break;
    case "region":
      app.innerHTML = renderRegionDetailPage();
      break;
    case "sectors":
      document.title = `${ui.pageTitles.sectors} | ${site.name}`;
      applyStaticPageMeta("sectors", ui.sectorsPage.text, sectors.map((sector) => sector.name));
      app.innerHTML = renderSectorsPage();
      break;
    case "sector":
      app.innerHTML = renderSectorDetailPage();
      break;
    case "article":
      app.innerHTML = renderArticlePage();
      break;
    case "about":
      document.title = `${ui.pageTitles.about} | ${site.name}`;
      applyStaticPageMeta("about", about.mission, about.principles);
      app.innerHTML = renderAboutPage();
      break;
    case "contact":
      document.title = `${ui.pageTitles.contact} | ${site.name}`;
      applyStaticPageMeta("contact", ui.contactPage.body, [
        site.email,
        ui.contactPage.channels,
      ]);
      app.innerHTML = renderContactPage();
      break;
    case "subscription":
      document.title = `${ui.pageTitles.subscription} | ${site.name}`;
      applyStaticPageMeta("subscription", ui.subscriptionPage.text, [
        ui.subscriptionPage.panelTitle,
        ui.subscriptionPage.value,
      ]);
      app.innerHTML = renderSubscriptionPage();
      break;
    case "editor":
      document.title = `${ui.pageTitles.editor} | ${site.name}`;
      applyStaticPageMeta("editor", ui.editorPage.text, [
        ui.editorPage.title,
      ]);
      app.innerHTML = renderEditorPage();
      break;
    default:
      applyHeadMeta({
        description: site.description,
        keywords: defaultKeywordSeed,
      });
      applySocialMeta({
        title: `${site.name} | ${ui.pageTitles.home}`,
        description: site.description,
        path: "index.html",
      });
      app.innerHTML = renderNotFound();
      break;
  }

  bindPageInteractions();
  initRevealObserver();
}

function renderHeader() {
  const activeKey = resolveActiveNavigationKey();
  const headerNavigation = navigation.filter((item) => item.key !== "subscription");

  return `
    <div class="nav-frame">
      <a class="brand" href="${withLocale("index.html")}" aria-label="Geo Scope">
        ${renderBrandLockup()}
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        ${ui.header.menu}
      </button>
      <div class="nav-stack" id="site-nav">
        <nav class="site-nav" aria-label="${ui.header.navAria}">
          ${headerNavigation
            .map(
              (item) => `
                <a class="nav-link ${item.key === activeKey ? "is-active" : ""}" href="${withLocale(item.href)}">
                  ${item.label}
                </a>
              `,
            )
            .join("")}
        </nav>
        <div class="header-utility" aria-label="${ui.header.utilityAria}">
          <a class="header-utility__link" href="${withLocale("analysis.html")}">${ui.header.search}</a>
          <span class="header-utility__divider" aria-hidden="true"></span>
          <div class="header-language" role="group" aria-label="${ui.header.languageAria}">
            ${supportedLocales
              .map(
                (locale) => `
                  <button
                    class="header-language__button ${locale === currentLocale ? "is-active" : ""}"
                    type="button"
                    data-locale="${locale}"
                    aria-pressed="${locale === currentLocale ? "true" : "false"}"
                  >
                    ${localeOptions[locale].label}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const sectionLinks = navigation.slice(0, 7);
  const institutionalLinks = [
    { label: navigation.find((item) => item.key === "about")?.label || ui.pageTitles.about, href: "about.html" },
    { label: navigation.find((item) => item.key === "contact")?.label || ui.pageTitles.contact, href: "contact.html" },
    { label: navigation.find((item) => item.key === "subscription")?.label || ui.pageTitles.subscription, href: "subscription.html" },
    { label: ui.footer.editorialPanel, href: "editor.html" },
  ];

  return `
    <div class="footer-wrap">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand--footer" href="${withLocale("index.html")}">
            ${renderBrandLockup({ footer: true })}
          </a>
          <p>${site.description}</p>
          <div class="social-links">
            ${site.social
              .map(
                (item) => `
                  <a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>
                `,
              )
              .join("")}
          </div>
        </div>
        <div>
          <h3>${ui.footer.sections}</h3>
          <div class="footer-links">
            ${sectionLinks
              .map((item) => `<a href="${withLocale(item.href)}">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>${ui.footer.institutional}</h3>
          <div class="footer-links">
            ${institutionalLinks
              .map((item) => `<a href="${withLocale(item.href)}">${item.label}</a>`)
              .join("")}
          </div>
          <div class="footer-contact">
            <span>${site.email}</span>
            <span>${ui.footer.contactNote}</span>
          </div>
        </div>
        <div>
          <h3>${ui.footer.newsletter}</h3>
          <p class="footer-note">
            ${ui.footer.newsletterNote}
          </p>
          ${renderNewsletterForm({ compact: true })}
        </div>
      </div>
      <div class="container footer-bottom">
        <span>Copyright ${new Date().getFullYear()} ${site.name}. ${ui.footer.rightsReserved}</span>
      </div>
    </div>
  `;
}

function renderHomePage() {
  const featured = [...orderedArticles]
    .filter((article) => article.homeFeature)
    .sort((left, right) => left.homeFeature - right.homeFeature);
  const mainFeature = featured[0];
  const secondaryFeatures = featured.slice(1, 4);
  const latestAnalyses = orderedArticles
    .filter((article) => article.type === "analysis" && !article.homeFeature)
    .slice(0, 3);
  const radarItems = orderedArticles
    .filter((article) => article.type === "radar")
    .slice(0, 2);
  const leadSignal = radarItems[0]?.signals?.[0];
  const heroFeatureText = summarizeText(mainFeature.excerpt || mainFeature.subtitle, 210);
  const heroGuides = [
    {
      eyebrow: ui.home.latest.eyebrow,
      title: ui.home.latest.title,
      text: ui.home.latest.text,
      href: withLocale("analysis.html"),
      action: ui.home.latest.action,
    },
    {
      eyebrow: ui.home.regionsSection.eyebrow,
      title: ui.home.regionsSection.title,
      text: ui.home.regionsSection.text,
      href: withLocale("regions.html"),
      action: ui.home.regionsSection.action,
    },
    {
      eyebrow: ui.home.radar.eyebrow,
      title: ui.home.radar.title,
      text: ui.home.radar.text,
      href: withLocale("radar.html"),
      action: ui.home.radar.action,
    },
  ];
  const homeSectors = [...sectors]
    .sort(
      (left, right) =>
        countArticlesForSector(right.slug) - countArticlesForSector(left.slug) ||
        left.name.localeCompare(right.name),
    )
    .slice(0, 6);
  const homeRegions = [...regions]
    .sort(
      (left, right) =>
        countArticlesForRegion(right.slug) - countArticlesForRegion(left.slug) ||
        left.name.localeCompare(right.name),
    )
    .slice(0, 6);

  return `
    <section class="hero hero--home section">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <h1 class="hero-lead">${ui.home.heroLead}</h1>
          <p class="hero-subtitle">
            ${ui.home.heroSubtitle}
          </p>
          <p class="hero-text">
            ${ui.home.heroText}
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${withLocale("analysis.html")}">${ui.home.explore}</a>
            <a class="btn btn-secondary" href="${withLocale("subscription.html")}">${ui.home.subscribe}</a>
          </div>
          <div class="hero-trust-row">
            ${ui.home.trust.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div class="hero-context-grid">
            ${heroGuides
              .map(
                (guide) => `
                  <a class="hero-context-card" href="${guide.href}">
                    <span class="hero-context-card__eyebrow">${guide.eyebrow}</span>
                    <strong>${guide.title}</strong>
                    <p>${guide.text}</p>
                    <span class="inline-link">${guide.action}</span>
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
        <aside class="hero-panel hero-panel--home reveal">
          <div class="hero-panel__main">
            <div class="panel-header">
              <span class="eyebrow">${ui.home.focus}</span>
              <span class="panel-index">${ui.home.edition} / 01</span>
            </div>
            <a class="hero-panel__link" href="${articleUrl(mainFeature.slug)}">
              <h2 class="hero-panel__title">${mainFeature.title}</h2>
              <p class="hero-panel__text">${heroFeatureText}</p>
            </a>
            <div class="meta-row hero-panel__meta">
              <span class="meta-chip">${labelForType(mainFeature.type)}</span>
              <span class="meta-chip">${nameForRegion(mainFeature.region)}</span>
            </div>
          </div>
          <div class="hero-panel__side">
            <div class="metric-grid metric-grid--hero">
              <div class="metric-card">
                <strong>${articles.length}</strong>
                <span>${ui.home.dossiers}</span>
              </div>
              <div class="metric-card">
                <strong>${regions.length}</strong>
                <span>${ui.home.regions}</span>
              </div>
              <div class="metric-card">
                <strong>${sectors.length}</strong>
                <span>${ui.home.sectorsMetric}</span>
              </div>
            </div>
            <div class="signal-panel signal-panel--compact">
              <span class="eyebrow">${ui.home.globalRadar}</span>
              <div class="signal-panel__card">
                <strong>${leadSignal?.title || ui.home.weeklyPriority}</strong>
                <span>${leadSignal?.detail || ui.home.weeklyPriorityFallback}</span>
              </div>
              <a class="inline-link" href="${radarItems[0] ? articleUrl(radarItems[0].slug) : withLocale("radar.html")}">${ui.home.openWeeklyRadar}</a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section--home-lead">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.home.frontpage.eyebrow,
          title: ui.home.frontpage.title,
          text: ui.home.frontpage.text,
          stacked: true,
        })}
        <div class="feature-layout feature-layout--home">
          <div class="feature-layout__main">
            ${renderArticleCard(mainFeature, "feature")}
          </div>
          <div class="home-preview-grid">
            ${secondaryFeatures
              .map((article) => renderArticleCard(article, "standard"))
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.home.latest.eyebrow,
          title: ui.home.latest.title,
          text: ui.home.latest.text,
          actionLabel: ui.home.latest.action,
          actionHref: "analysis.html",
          stacked: true,
        })}
        <div class="card-grid card-grid--three">
          ${latestAnalyses
            .map((article) => renderArticleCard(article, "standard"))
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.home.radar.eyebrow,
          title: ui.home.radar.title,
          text: ui.home.radar.text,
          actionLabel: ui.home.radar.action,
          actionHref: "radar.html",
          stacked: true,
        })}
        <div class="radar-layout radar-layout--home">
          <article class="card radar-card radar-card--lead reveal">
            <div class="radar-card__header">
              <span class="meta-chip">${ui.home.radar.quickRead}</span>
              <span class="meta-chip">${formatDate(radarItems[0].date)}</span>
            </div>
            <h3>${radarItems[0].title}</h3>
            <p>${radarItems[0].excerpt}</p>
            <div class="signal-stack">
              ${radarItems[0].signals
                .map(
                  (signal) => `
                    <div class="signal-stack__item">
                      <strong>${signal.title}</strong>
                      <span>${signal.detail}</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <a class="inline-link" href="${articleUrl(radarItems[0].slug)}">${ui.home.radar.open}</a>
          </article>
          <div class="card-stack">
            ${radarItems
              .slice(1)
              .map((article) => renderArticleCard(article, "outline"))
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.home.sectors.eyebrow,
          title: ui.home.sectors.title,
          text: ui.home.sectors.text,
          actionLabel: ui.home.sectors.action,
          actionHref: "sectors.html",
          stacked: true,
        })}
        <div class="sector-grid">
          ${homeSectors.map((sector) => renderSectorCard(sector)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.home.regionsSection.eyebrow,
          title: ui.home.regionsSection.title,
          text: ui.home.regionsSection.text,
          actionLabel: ui.home.regionsSection.action,
          actionHref: "regions.html",
          stacked: true,
        })}
        <div class="region-grid">
          ${homeRegions.map((region) => renderRegionCard(region)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${renderNewsletterPanel({
          title: ui.home.newsletter.title,
          description: ui.home.newsletter.description,
        })}
      </div>
    </section>
  `;
}

function renderArchivePage({ eyebrow, title, description, lockedType, defaultType }) {
  const activeType = lockedType ? defaultType : query.get("type") || defaultType;
  const activeRegion = query.get("region") || "";
  const activeSector = query.get("sector") || "";
  const activeQuery = (query.get("q") || "").trim();

  const results = orderedArticles.filter((article) =>
    matchesArchiveFilters(article, {
      type: activeType,
      region: activeRegion,
      sector: activeSector,
      term: activeQuery,
    }),
  );

  const highlightedArticle = results[0] || orderedArticles[0];

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${eyebrow}</span>
          <h1 class="page-title">${title}</h1>
          <p class="page-text">${description}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${results.length}</strong>
            <span>${ui.archive.visibleResults}</span>
          </div>
          <div class="aside-line">
            <strong>${regions.length}</strong>
            <span>${formatStructureSummary(regions.length, sectors.length)}</span>
          </div>
          <a class="btn btn-secondary" href="${articleUrl(highlightedArticle.slug)}">
            ${ui.archive.openFeatured}
          </a>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <form class="filter-shell reveal" id="archive-filters">
          <div class="filter-grid">
            <label class="field">
              <span>${ui.archive.search}</span>
              <input type="search" name="q" value="${escapeAttribute(activeQuery)}" placeholder="${ui.archive.searchPlaceholder}" />
            </label>
            ${
              lockedType
                ? `<div class="field field--locked"><span>${ui.archive.lockedFormatLabel}</span><strong>${articleTypeLabels[defaultType]}</strong></div>`
                : `
                  <label class="field">
                    <span>${ui.archive.format}</span>
                    <select name="type">
                      ${renderTypeOptions(activeType)}
                    </select>
                  </label>
                `
            }
            <label class="field">
              <span>${ui.archive.region}</span>
              <select name="region">
                <option value="">${ui.archive.allRegions}</option>
                ${regions
                  .map(
                    (region) => `
                      <option value="${region.slug}" ${activeRegion === region.slug ? "selected" : ""}>
                        ${region.name}
                      </option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
            <label class="field">
              <span>${ui.archive.sector}</span>
              <select name="sector">
                <option value="">${ui.archive.allSectors}</option>
                ${sectors
                  .map(
                    (sector) => `
                      <option value="${sector.slug}" ${activeSector === sector.slug ? "selected" : ""}>
                        ${sector.name}
                      </option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <div class="filter-actions">
            <button class="btn btn-primary" type="submit">${ui.archive.applyFilters}</button>
            <a class="btn btn-ghost" href="${lockedType ? pagePath(page) : withLocale("analysis.html")}">${ui.archive.clear}</a>
          </div>
        </form>

        <div class="results-meta">
          <strong>${ui.meta.articles(results.length)}</strong>
          <span>
            ${buildResultsDescription({ type: activeType, region: activeRegion, sector: activeSector, term: activeQuery })}
          </span>
        </div>

        ${
          results.length
            ? `
              <div class="card-grid card-grid--three">
                ${results
                  .map((article) => renderArticleCard(article, "standard"))
                  .join("")}
              </div>
            `
            : `
              <div class="empty-state">
                <h2>${ui.archive.noResultsTitle}</h2>
                <p>${ui.archive.noResultsText}</p>
                <a class="btn btn-secondary" href="${lockedType ? pagePath(page) : withLocale("analysis.html")}">${ui.archive.resetFilters}</a>
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderRadarPage() {
  const radarItems = orderedArticles.filter((article) => article.type === "radar");
  const lead = radarItems[0];

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${pageCopy.radar.eyebrow}</span>
          <h1 class="page-title">${pageCopy.radar.title}</h1>
          <p class="page-text">${pageCopy.radar.description}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${radarItems.length}</strong>
            <span>${ui.radarPage.demoDeliveries}</span>
          </div>
          <div class="aside-line">
            <strong>3-5</strong>
            <span>${ui.radarPage.keySignals}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="radar-page-grid">
          <article class="card radar-card radar-card--hero reveal">
            <div class="radar-card__header">
              <span class="meta-chip">${labelForType(lead.type)}</span>
              <span class="meta-chip">${nameForRegion(lead.region)}</span>
            </div>
            <h2>${lead.title}</h2>
            <p>${lead.subtitle}</p>
            <div class="signal-stack">
              ${lead.signals
                .map(
                  (signal) => `
                    <div class="signal-stack__item">
                      <strong>${signal.title}</strong>
                      <span>${signal.detail}</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <a class="btn btn-secondary" href="${articleUrl(lead.slug)}">${ui.radarPage.openReading}</a>
          </article>
          <div class="card-stack">
            ${radarItems
              .slice(1)
              .map((article) => renderArticleCard(article, "outline"))
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRegionsPage() {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.regionsPage.eyebrow}</span>
          <h1 class="page-title">${ui.regionsPage.title}</h1>
          <p class="page-text">
            ${ui.regionsPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${regions.length}</strong>
            <span>${ui.regionsPage.mapped}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.regionsPage.covers}</strong>
            <span>${ui.regionsPage.coversText}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="pill-row reveal">
          ${regions
            .map(
              (region) => `
                <a class="pill-link" href="${regionUrl(region.slug)}">${region.name}</a>
              `,
            )
            .join("")}
        </div>
        <div class="region-grid region-grid--full">
          ${regions.map((region) => renderRegionCard(region, true)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderRegionDetailPage() {
  const slug = routeValue("slug") || regions[0].slug;
  const region = regionMap.get(slug);

  if (!region) {
    document.title = `${ui.pageTitles.regionNotFound} | ${site.name}`;
    applyHeadMeta({
      description: site.description,
      keywords: defaultKeywordSeed,
    });
    applySocialMeta({
      title: document.title,
      description: site.description,
      path: "regions.html",
    });
    return renderNotFound();
  }

  document.title = `${region.name} | ${site.name}`;
  applyHeadMeta({
    description: region.description,
    keywords: pageKeywords("regions", [region.name, region.strap, region.tags]),
  });
  applySocialMeta({
    title: document.title,
    description: region.description,
    path: "region.html",
    params: { slug: region.slug },
    imageAlt: region.name,
  });

  const regionArticles = orderedArticles.filter((article) => article.region === slug);
  const featuredArticle = regionArticles[0];
  const latest = regionArticles.slice(1, 4);
  const relatedSectors = unique(regionArticles.flatMap((article) => article.sectors)).slice(0, 4);

  return `
    <section class="page-hero section region-hero">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">Region</span>
          <h1 class="page-title">${region.name}</h1>
          <p class="page-text">${region.description}</p>
          <p class="region-strap">${region.strap}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${regionArticles.length}</strong>
            <span>${ui.regionsPage.regionArticles}</span>
          </div>
          <div class="aside-line">
            <strong>${relatedSectors.length}</strong>
            <span>${ui.regionsPage.keySectors}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="pill-row reveal">
          ${regions
            .map(
              (item) => `
                <a class="pill-link ${item.slug === slug ? "is-active" : ""}" href="${regionUrl(item.slug)}">
                  ${item.name}
                </a>
              `,
            )
            .join("")}
        </div>
        <div class="region-detail-grid">
          <div class="region-detail-grid__main">
            ${renderArticleCard(featuredArticle, "feature")}
          </div>
          <aside class="card region-insight reveal">
            <span class="eyebrow">${ui.regionsPage.strategicDescription}</span>
            <h2>${region.strap}</h2>
            <p>${region.description}</p>
            <div class="tag-list">
              ${region.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="related-topics">
              ${relatedSectors
                .map((sectorSlug) => {
                  const sector = sectorMap.get(sectorSlug);
                  return `<a href="${sectorUrl(sector.slug)}">${sector.name}</a>`;
                })
                .join("")}
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.regionsPage.latestEyebrow,
          title: ui.regionsPage.latestTitle(region.name),
          text: ui.regionsPage.latestText,
        })}
        <div class="card-grid card-grid--three">
          ${latest.map((article) => renderArticleCard(article, "standard")).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSectorsPage() {
  const activeRegion = query.get("region") || "";

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.sectorsPage.eyebrow}</span>
          <h1 class="page-title">${ui.sectorsPage.title}</h1>
          <p class="page-text">
            ${ui.sectorsPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${sectors.length}</strong>
            <span>${ui.sectorsPage.curated}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.sectorsPage.filterLabel}</strong>
            <span>${ui.sectorsPage.filterText}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <form class="filter-shell reveal" id="sector-overview-filter">
          <div class="filter-grid filter-grid--simple">
            <label class="field">
              <span>${ui.sectorsPage.filterByRegion}</span>
              <select name="region">
                <option value="">${ui.archive.allRegions}</option>
                ${regions
                  .map(
                    (region) => `
                      <option value="${region.slug}" ${region.slug === activeRegion ? "selected" : ""}>
                        ${region.name}
                      </option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <div class="filter-actions">
            <button class="btn btn-primary" type="submit">${ui.sectorsPage.apply}</button>
            <a class="btn btn-ghost" href="${withLocale("sectors.html")}">${ui.sectorsPage.clear}</a>
          </div>
        </form>
        <div class="sector-grid sector-grid--full">
          ${sectors
            .map((sector) =>
              renderSectorCard(
                sector,
                activeRegion
                  ? countArticlesForSector(sector.slug, activeRegion)
                  : countArticlesForSector(sector.slug),
              ),
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSectorDetailPage() {
  const slug = routeValue("slug") || sectors[0].slug;
  const activeRegion = routeValue("region") || "";
  const sector = sectorMap.get(slug);

  if (!sector) {
    document.title = `${ui.pageTitles.sectorNotFound} | ${site.name}`;
    applyHeadMeta({
      description: site.description,
      keywords: defaultKeywordSeed,
    });
    applySocialMeta({
      title: document.title,
      description: site.description,
      path: "sectors.html",
    });
    return renderNotFound();
  }

  document.title = `${sector.name} | ${site.name}`;
  applyHeadMeta({
    description: sector.description,
    keywords: pageKeywords("sectors", [sector.name, activeRegion && nameForRegion(activeRegion)]),
  });
  applySocialMeta({
    title: document.title,
    description: sector.description,
    path: "sector.html",
    params: { slug },
    imageAlt: sector.name,
  });

  const relatedArticles = orderedArticles.filter((article) => {
    const sectorMatch = article.sectors.includes(slug);
    const regionMatch = activeRegion ? article.region === activeRegion : true;
    return sectorMatch && regionMatch;
  });

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.sectorsPage.sector}</span>
          <div class="sector-heading">
            <span class="icon-badge">${iconMarkup(sector.icon)}</span>
            <h1 class="page-title">${sector.name}</h1>
          </div>
          <p class="page-text">${sector.description}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${relatedArticles.length}</strong>
            <span>${ui.sectorsPage.sectorArticles}</span>
          </div>
          <div class="aside-line">
            <strong>${countDistinctRegions(relatedArticles)}</strong>
            <span>${ui.sectorsPage.connectedRegions}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="pill-row reveal">
          ${sectors
            .map(
              (item) => `
                <a class="pill-link ${item.slug === slug ? "is-active" : ""}" href="${sectorUrl(item.slug)}">
                  ${item.name}
                </a>
              `,
            )
            .join("")}
        </div>
        <form class="filter-shell reveal" id="sector-detail-filter">
          <input type="hidden" name="slug" value="${slug}" />
          <div class="filter-grid filter-grid--simple">
            <label class="field">
              <span>${ui.sectorsPage.filterByRegion}</span>
              <select name="region">
                <option value="">${ui.archive.allRegions}</option>
                ${regions
                  .map(
                    (region) => `
                      <option value="${region.slug}" ${region.slug === activeRegion ? "selected" : ""}>
                        ${region.name}
                      </option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <div class="filter-actions">
            <button class="btn btn-primary" type="submit">${ui.sectorsPage.applyFilter}</button>
            <a class="btn btn-ghost" href="${sectorUrl(slug)}">${ui.sectorsPage.viewAll}</a>
          </div>
        </form>

        ${
          relatedArticles.length
            ? `
              <div class="card-grid card-grid--three">
                ${relatedArticles
                  .map((article) => renderArticleCard(article, "standard"))
                  .join("")}
              </div>
            `
            : `
              <div class="empty-state">
                <h2>${ui.sectorsPage.noArticlesTitle}</h2>
                <p>${ui.sectorsPage.noArticlesText}</p>
                <a class="btn btn-secondary" href="${sectorUrl(slug)}">${ui.sectorsPage.resetView}</a>
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderArticlePage() {
  const slug = routeValue("slug") || orderedArticles[0].slug;
  const article = articleMap.get(slug);

  if (!article) {
    document.title = `${ui.pageTitles.articleNotFound} | ${site.name}`;
    applyHeadMeta({
      description: site.description,
      keywords: defaultKeywordSeed,
    });
    applySocialMeta({
      title: document.title,
      description: site.description,
      path: "analysis.html",
    });
    return renderNotFound();
  }

  document.title = `${article.title} | ${site.name}`;

  const author = authorMap.get(article.author) || {
    name: ui.articlePage.fallbackAuthorName,
    role: ui.articlePage.fallbackAuthorRole,
  };
  const region = regionMap.get(article.region);
  const regionName = region?.name || ui.articlePage.fallbackRegionName;
  const regionDescription =
    region?.description ||
    ui.articlePage.fallbackRegionDescription;
  const regionHref = region ? regionUrl(region.slug) : withLocale("regions.html");
  const regionLinkLabel = region ? ui.articlePage.openRegionalCover : ui.articlePage.openRegionalMap;
  const related = findRelatedArticles(article);
  const favorite = isFavorite(article.slug);
  const sectorNames = article.sectors
    .map((sectorSlug) => sectorMap.get(sectorSlug)?.name)
    .filter(Boolean);

  applyHeadMeta({
    description: article.excerpt || article.subtitle || site.description,
    keywords: normalizeKeywords([
      site.name,
      article.title,
      labelForType(article.type),
      regionName,
      sectorNames,
      article.tags,
      author.name,
    ]),
  });
  applySocialMeta({
    title: document.title,
    description: article.excerpt || article.subtitle || site.description,
    type: "article",
    path: "article.html",
    params: { slug: article.slug },
    imageAlt: article.title,
  });

  return `
    <section class="article-hero section">
      <div class="container article-hero__grid">
        <div class="article-hero__copy reveal">
          <a class="back-link" href="${backLinkForArticle(article)}">${ui.articlePage.back}</a>
          <div class="meta-row">
            <span class="meta-chip">${labelForType(article.type)}</span>
            <span class="meta-chip">${regionName}</span>
            <span class="meta-chip">${ui.meta.readTime(article.readTime)}</span>
          </div>
          <h1 class="article-title">${article.title}</h1>
          <p class="article-subtitle">${article.subtitle}</p>
          <div class="article-author-row">
            <div>
              <strong>${author.name}</strong>
              <span>${author.role}</span>
            </div>
            <span>${formatDate(article.date)}</span>
          </div>
        </div>
        <div class="article-hero__visual reveal">
          ${coverArt(article, "cover-art--article")}
          <div class="article-tools">
            <button class="btn btn-secondary" data-favorite="${article.slug}">
              ${favorite ? ui.articlePage.saved : ui.articlePage.save}
            </button>
            <button class="btn btn-ghost" data-share="copy" data-slug="${article.slug}">
              ${ui.articlePage.copyLink}
            </button>
            <button class="btn btn-ghost" data-share="linkedin" data-slug="${article.slug}">
              LinkedIn
            </button>
            <button class="btn btn-ghost" data-share="x" data-slug="${article.slug}">
              X
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container article-layout">
        <article class="card prose-card reveal is-visible">
          <p class="article-lead">${article.excerpt}</p>
          ${
            article.type === "radar"
              ? renderRadarBody(article)
              : article.bodySections?.length
                ? renderStructuredEssayBody(article)
                : renderEssayBody(article)
          }
        </article>
        <aside class="article-aside reveal">
          <div class="card aside-card">
            <span class="eyebrow">${ui.articlePage.relatedRegion}</span>
            <h2>${regionName}</h2>
            <p>${regionDescription}</p>
            <a class="inline-link" href="${regionHref}">${regionLinkLabel}</a>
          </div>
          <div class="card aside-card">
            <span class="eyebrow">${ui.articlePage.tags}</span>
            <div class="tag-list">
              ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          ${renderNewsletterPanel({
            compactPanel: true,
            title: ui.articlePage.newsletterTitle,
            description: ui.articlePage.newsletterDescription,
          })}
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.articlePage.relatedEyebrow,
          title: ui.articlePage.relatedTitle,
          text: ui.articlePage.relatedText,
        })}
        <div class="card-grid card-grid--three">
          ${related.map((item) => renderArticleCard(item, "standard")).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.aboutPage.eyebrow}</span>
          <h1 class="page-title">${ui.aboutPage.title}</h1>
          <p class="page-text">
            ${ui.aboutPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${ui.aboutPage.mission}</strong>
            <span>${about.mission}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.aboutPage.vision}</strong>
            <span>${about.vision}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="card-grid card-grid--two">
          <article class="card manifesto-card reveal">
            <span class="eyebrow">${ui.aboutPage.mission}</span>
            <h2>${about.mission}</h2>
            <p>${about.vision}</p>
          </article>
          <article class="card manifesto-card reveal">
            <span class="eyebrow">${ui.aboutPage.approach}</span>
            <h2>${ui.aboutPage.approachTitle}</h2>
            <p>${ui.aboutPage.approachText}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: ui.aboutPage.manifestoEyebrow,
          title: ui.aboutPage.manifestoTitle,
          text: ui.aboutPage.manifestoText,
        })}
        <div class="manifesto-grid">
          ${about.manifesto
            .map(
              (item, index) => `
                <article class="card manifesto-card reveal">
                  <span class="eyebrow">${ui.aboutPage.manifestoPoint(index)}</span>
                  <p>${item}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="principle-row">
          ${about.principles.map((item) => `<span class="tag tag--large">${item}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.contactPage.eyebrow}</span>
          <h1 class="page-title">${ui.contactPage.title}</h1>
          <p class="page-text">
            ${ui.contactPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${ui.contactPage.information}</strong>
            <span>${site.email}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.contactPage.approach}</strong>
            <span>${ui.contactPage.approachText}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container contact-grid">
        <div class="card contact-card reveal">
          <span class="eyebrow">${ui.contactPage.channels}</span>
          <h2>${ui.contactPage.headline}</h2>
          <p>${ui.contactPage.body}</p>
          <div class="footer-links">
            <a href="mailto:${site.email}">${site.email}</a>
            <a href="${withLocale("subscription.html")}">${navigation.find((item) => item.key === "subscription")?.label || ui.pageTitles.subscription}</a>
            <a href="${withLocale("editor.html")}">${ui.footer.editorialPanel}</a>
          </div>
        </div>
        <form class="card contact-form reveal" id="contact-form">
          <span class="eyebrow">${ui.contactPage.form}</span>
          <label class="field">
            <span>${ui.contactPage.name}</span>
            <input type="text" name="name" placeholder="${ui.contactPage.namePlaceholder}" required />
          </label>
          <label class="field">
            <span>${ui.contactPage.email}</span>
            <input type="email" name="email" placeholder="${ui.contactPage.emailPlaceholder}" required />
          </label>
          <label class="field">
            <span>${ui.contactPage.subject}</span>
            <input type="text" name="subject" placeholder="${ui.contactPage.subjectPlaceholder}" required />
          </label>
          <label class="field">
            <span>${ui.contactPage.message}</span>
            <textarea name="message" rows="6" placeholder="${ui.contactPage.messagePlaceholder}" required></textarea>
          </label>
          <button class="btn btn-primary" type="submit">${ui.contactPage.send}</button>
        </form>
      </div>
    </section>
  `;
}

function renderSubscriptionPage() {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.subscriptionPage.eyebrow}</span>
          <h1 class="page-title">${ui.subscriptionPage.title}</h1>
          <p class="page-text">
            ${ui.subscriptionPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${ui.subscriptionPage.format}</strong>
            <span>${ui.subscriptionPage.formatText}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.subscriptionPage.value}</strong>
            <span>${ui.subscriptionPage.valueText}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        ${renderNewsletterPanel({
          title: ui.subscriptionPage.panelTitle,
          description: ui.subscriptionPage.panelDescription,
          detailed: true,
        })}
      </div>
    </section>
  `;
}

function renderEditorPage() {
  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">${ui.editorPage.eyebrow}</span>
          <h1 class="page-title">${ui.editorPage.title}</h1>
          <p class="page-text">
            ${ui.editorPage.text}
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${ui.editorPage.today}</strong>
            <span>${ui.editorPage.todayText}</span>
          </div>
          <div class="aside-line">
            <strong>${ui.editorPage.later}</strong>
            <span>${ui.editorPage.laterText}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container editor-grid">
        <form class="card editor-form reveal" id="editor-form">
          <span class="eyebrow">${ui.editorPage.draft}</span>
          <label class="field">
            <span>${ui.editorPage.titleLabel}</span>
            <input type="text" name="title" value="${ui.editorPage.draftTitle}" required />
          </label>
          <label class="field">
            <span>${ui.editorPage.subtitleLabel}</span>
            <input
              type="text"
              name="subtitle"
              value="${ui.editorPage.draftSubtitle}"
              required
            />
          </label>
          <div class="editor-form__row">
            <label class="field">
              <span>${ui.editorPage.typeLabel}</span>
              <select name="type">
                ${renderTypeOptions("analysis", true)}
              </select>
            </label>
            <label class="field">
              <span>${ui.editorPage.regionLabel}</span>
              <select name="region">
                ${regions
                  .map(
                    (region) => `
                      <option value="${region.slug}">${region.name}</option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <div class="editor-form__row">
            <label class="field">
              <span>${ui.editorPage.sectorLabel}</span>
              <select name="sector">
                ${sectors
                  .map(
                    (sector) => `
                      <option value="${sector.slug}">${sector.name}</option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
            <label class="field">
              <span>${ui.editorPage.readTimeLabel}</span>
              <input type="number" min="3" max="25" name="readTime" value="8" />
            </label>
          </div>
          <label class="field">
            <span>${ui.editorPage.excerptLabel}</span>
            <textarea name="excerpt" rows="4">${ui.editorPage.draftExcerpt}</textarea>
          </label>
        </form>

        <div class="editor-preview reveal">
          <div class="card editor-preview__card" id="editor-preview-card"></div>
          <div class="card editor-preview__json">
            <span class="eyebrow">${ui.editorPage.previewStructure}</span>
            <pre id="editor-json"></pre>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="section">
      <div class="container">
        <div class="empty-state">
          <h1>${ui.notFound.title}</h1>
          <p>${ui.notFound.text}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${withLocale("index.html")}">${ui.notFound.home}</a>
            <a class="btn btn-secondary" href="${withLocale("analysis.html")}">${ui.notFound.archive}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderArticleCard(article, variant = "standard") {
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
      <a class="article-card__link" href="${articleUrl(article.slug)}">
        ${coverArt(article, variant === "compact" ? "cover-art--compact" : "")}
        <div class="article-card__body">
          <div class="meta-row">
            <span class="meta-chip">${labelForType(article.type)}</span>
            <span class="meta-chip">${nameForRegion(article.region)}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <span class="inline-link article-card__cta">${ui.articlePage.readArticle}</span>
          <div class="article-card__footer">
            <span>${formatDate(article.date)}</span>
            <span>${ui.meta.shortMinutes(article.readTime)}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderRegionCard(region, expanded = false) {
  const regionArticles = orderedArticles.filter((article) => article.region === region.slug);

  return `
    <article class="card region-card reveal">
      <a class="region-card__link" href="${regionUrl(region.slug)}">
        <div class="region-card__head">
          <span class="eyebrow">${ui.regionsPage.region}</span>
          <span class="meta-chip">${formatArticleCount(regionArticles.length)}</span>
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

function renderSectorCard(sector, counter = countArticlesForSector(sector.slug)) {
  return `
    <article class="card sector-card reveal">
      <a class="sector-card__link" href="${sectorUrl(sector.slug)}">
        <div class="sector-card__head">
          <span class="icon-badge">${iconMarkup(sector.icon)}</span>
          <span class="meta-chip">${formatArticleCount(counter)}</span>
        </div>
        <h3>${sector.name}</h3>
        <p>${sector.description}</p>
        <span class="inline-link">${ui.articlePage.openSector}</span>
      </a>
    </article>
  `;
}

function renderNewsletterPanel({ title, description, detailed = false, compactPanel = false }) {
  return `
    <div class="newsletter-panel ${compactPanel ? "newsletter-panel--compact" : ""}">
      <div class="newsletter-panel__copy">
        <span class="eyebrow">${ui.newsletter.eyebrow}</span>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      ${renderNewsletterForm({ detailed, panel: true })}
    </div>
  `;
}

function renderNewsletterForm({ compact = false, detailed = false, panel = false } = {}) {
  return `
    <form class="newsletter-form ${compact ? "newsletter-form--compact" : ""} ${panel ? "newsletter-form--panel" : ""}" data-newsletter-form>
      ${
        compact
          ? ""
          : `
            <label class="field">
              <span>${ui.newsletter.name}</span>
              <input type="text" name="name" placeholder="${ui.newsletter.namePlaceholder}" ${detailed ? "required" : ""} />
            </label>
          `
      }
      <label class="field">
        <span>${ui.newsletter.email}</span>
        <input type="email" name="email" placeholder="${ui.newsletter.emailPlaceholder}" required />
      </label>
      ${
        detailed
          ? `
            <fieldset class="interest-fieldset">
              <legend>${ui.newsletter.interests}</legend>
              <div class="interest-grid">
                ${newsletterInterests
                  .map(
                    (interest) => `
                      <label class="interest-chip">
                        <input type="checkbox" name="interest" value="${interest}" />
                        <span>${interest}</span>
                      </label>
                    `,
                  )
                  .join("")}
              </div>
            </fieldset>
          `
          : ""
      }
      <button class="btn btn-primary" type="submit">${compact ? ui.newsletter.join : ui.newsletter.subscribe}</button>
    </form>
  `;
}

function sectionHeader({ eyebrow, title, text, actionLabel, actionHref, stacked = false }) {
  return `
    <div class="section-head ${stacked ? "section-head--stacked" : ""} reveal">
      <div class="section-head__content">
        <span class="eyebrow">${eyebrow}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      ${
        actionLabel && actionHref
          ? `<a class="btn btn-ghost" href="${withLocale(actionHref)}">${actionLabel}</a>`
          : ""
      }
    </div>
  `;
}

function renderEssayBody(article) {
  return `
    <section class="article-section">
      <h2>${ui.essaySections.thesis}</h2>
      <p>${article.thesis}</p>
    </section>
    <section class="article-section">
      <h2>${ui.essaySections.why}</h2>
      ${article.whyItMatters.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
    <section class="article-section">
      <h2>${ui.essaySections.regional}</h2>
      <p>${article.regionalLens}</p>
    </section>
    <section class="article-section">
      <h2>${ui.essaySections.outlook}</h2>
      <p>${article.outlook}</p>
    </section>
  `;
}

function renderStructuredEssayBody(article) {
  return article.bodySections.map((section) => renderArticleSection(section, 2)).join("");
}

function renderRadarBody(article) {
  return `
    <section class="article-section">
      <h2>${ui.essaySections.signals}</h2>
      <div class="signal-stack">
        ${article.signals
          .map(
            (signal) => `
              <div class="signal-stack__item signal-stack__item--article">
                <strong>${signal.title}</strong>
                <span>${signal.detail}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="article-section">
      <h2>${ui.essaySections.why}</h2>
      <p>${article.outlook}</p>
    </section>
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
      ${renderArticleParagraphs(section.paragraphs)}
      ${renderArticleCallouts(section.callouts)}
      ${renderArticleBullets(section.bullets)}
      ${renderArticleSubsections(section.subsections, level + 1)}
    </section>
  `;
}

function renderArticleParagraphs(paragraphs = []) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderArticleCallouts(callouts = []) {
  if (!callouts.length) {
    return "";
  }

  return `
    <div class="article-callout-stack">
      ${callouts
        .map(
          (callout) => `
            <div class="article-callout">
              <p>${callout}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderArticleBullets(bullets = []) {
  if (!bullets.length) {
    return "";
  }

  return `
    <ul class="article-list">
      ${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  `;
}

function renderArticleSubsections(subsections = [], level = 3) {
  if (!subsections.length) {
    return "";
  }

  return `
    <div class="article-subsections">
      ${subsections
        .map(
          (subsection) => `
            <div class="article-subsection">
              ${renderArticleSection(subsection, level)}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function coverArt(article, modifier = "") {
  return `
    <div class="cover-art tone-${article.tone} ${modifier}">
      <div class="cover-art__info">
        <span class="cover-art__eyebrow">${nameForRegion(article.region)}</span>
        <strong>${article.title}</strong>
        <span>${article.sectors.slice(0, 2).map(nameForSector).join(" / ")}</span>
      </div>
    </div>
  `;
}

function renderBrandLockup({ footer = false } = {}) {
  if (!footer) {
    return `
      <span class="brand-mark brand-mark--header">
        <img class="brand-logo" src="${brandLogoSrc}" alt="Geo Scope" />
      </span>
    `;
  }

  return `
    <span class="brand-mark brand-mark--footer">
      <img class="brand-logo brand-logo--footer" src="${brandLogoSrc}" alt="Geo Scope" />
    </span>
  `;
}

function bindShellInteractions() {
  const menuToggle = header.querySelector(".menu-toggle");
  const navStack = header.querySelector(".nav-stack");

  if (menuToggle && navStack) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      navStack.classList.toggle("is-open");
    });
  }

  header.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => {
      const locale = normalizeLocale(button.getAttribute("data-locale"));

      if (!locale || locale === currentLocale) {
        return;
      }

      setStoredLocale(locale);
      window.location.href = localizedUrlForLocale(
        basePathForPage(page),
        locale,
        currentRouteParams(),
      );
    });
  });

  header.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const term = String(formData.get("q") || "").trim();
      const params = new URLSearchParams();

      if (term) {
        params.set("q", term);
      }

      window.location.href = localizedUrl("analysis.html", params);
    });
  });

  footer.querySelectorAll("[data-newsletter-form]").forEach(bindNewsletterForm);
}

function bindPageInteractions() {
  app.querySelectorAll("[data-newsletter-form]").forEach(bindNewsletterForm);

  const archiveFilters = app.querySelector("#archive-filters");
  if (archiveFilters) {
    archiveFilters.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(archiveFilters);
      const params = new URLSearchParams();
      const type = String(formData.get("type") || "");
      const region = String(formData.get("region") || "");
      const sector = String(formData.get("sector") || "");
      const term = String(formData.get("q") || "").trim();

      if (type && type !== "all") {
        params.set("type", type);
      }
      if (region) {
        params.set("region", region);
      }
      if (sector) {
        params.set("sector", sector);
      }
      if (term) {
        params.set("q", term);
      }

      window.history.replaceState({}, "", localizedUrl(basePathForPage(page), params));
      renderPage();
    });
  }

  const sectorOverviewFilter = app.querySelector("#sector-overview-filter");
  if (sectorOverviewFilter) {
    sectorOverviewFilter.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(sectorOverviewFilter);
      const region = String(formData.get("region") || "");
      const params = new URLSearchParams();

      if (region) {
        params.set("region", region);
      }

      window.history.replaceState({}, "", localizedUrl("sectors.html", params));
      renderPage();
    });
  }

  const sectorDetailFilter = app.querySelector("#sector-detail-filter");
  if (sectorDetailFilter) {
    sectorDetailFilter.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(sectorDetailFilter);
      const slug = String(formData.get("slug") || "");
      const region = String(formData.get("region") || "");
      const params = new URLSearchParams({ slug });

      if (region) {
        params.set("region", region);
      }

      window.history.replaceState({}, "", localizedUrl("sector.html", params));
      renderPage();
    });
  }

  const favoriteButton = app.querySelector("[data-favorite]");
  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => {
      const slug = favoriteButton.getAttribute("data-favorite");
      toggleFavorite(slug);
      favoriteButton.textContent = isFavorite(slug) ? ui.articlePage.saved : ui.articlePage.save;
      toast(isFavorite(slug) ? ui.toasts.favoriteSaved : ui.toasts.favoriteRemoved);
    });
  }

  app.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-share");
      const slug = button.getAttribute("data-slug");
      shareArticle(slug, mode);
    });
  });

  const contactForm = app.querySelector("#contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        persistSubmission("geoScope:contact", Object.fromEntries(formData.entries()));
        contactForm.reset();
        toast(ui.toasts.contactSaved);
      });
  }

  const editorForm = app.querySelector("#editor-form");
  if (editorForm) {
    const updatePreview = () => {
      const formData = new FormData(editorForm);
      const values = Object.fromEntries(formData.entries());
      const region = regionMap.get(values.region);
      const sector = sectorMap.get(values.sector);
      const previewArticle = {
        title: String(values.title || "").trim(),
        subtitle: String(values.subtitle || "").trim(),
        excerpt: String(values.excerpt || "").trim(),
        type: String(values.type || "analysis"),
        region: values.region,
        sectors: [values.sector],
        date: new Date().toISOString().slice(0, 10),
        readTime: Number(values.readTime || 8),
        tone: region?.accent || "midnight",
      };

      const previewCard = app.querySelector("#editor-preview-card");
      const jsonBox = app.querySelector("#editor-json");

      if (previewCard) {
        previewCard.innerHTML = `
          ${coverArt(previewArticle, "cover-art--compact")}
          <div class="editor-preview__body">
            <div class="meta-row">
              <span class="meta-chip">${labelForType(previewArticle.type)}</span>
              <span class="meta-chip">${region?.name || ""}</span>
            </div>
            <h2>${escapeHtml(previewArticle.title)}</h2>
            <p>${escapeHtml(previewArticle.subtitle)}</p>
            <p class="editor-preview__excerpt">${escapeHtml(previewArticle.excerpt)}</p>
            <div class="article-card__footer">
              <span>${sector?.name || ""}</span>
              <span>${ui.meta.shortMinutes(previewArticle.readTime)}</span>
            </div>
          </div>
        `;
      }

      if (jsonBox) {
        const snippet = {
          slug: slugify(previewArticle.title),
          title: previewArticle.title,
          subtitle: previewArticle.subtitle,
          excerpt: previewArticle.excerpt,
          type: previewArticle.type,
          region: previewArticle.region,
          sectors: previewArticle.sectors,
          readTime: previewArticle.readTime,
          bodySections: [
            {
              paragraphs: [ui.editorPage.snippetIntro],
            },
            {
              heading: ui.editorPage.snippetHeading,
              paragraphs: [ui.editorPage.snippetBody],
            },
          ],
        };
        jsonBox.textContent = JSON.stringify(snippet, null, 2);
      }
    };

    editorForm.addEventListener("input", updatePreview);
    editorForm.addEventListener("change", updatePreview);
    updatePreview();
  }
}

function bindNewsletterForm(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      interests: formData.getAll("interest"),
      createdAt: new Date().toISOString(),
    };

    persistSubmission("geoScope:newsletter", payload);
    form.reset();
    toast(ui.toasts.newsletterSaved);
  });
}

function initRevealObserver() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function resolveActiveNavigationKey() {
  if (page === "article") {
    const article = articleMap.get(query.get("slug") || "");
    if (article) {
      return article.type === "analysis" ? "analysis" : pageFromType(article.type);
    }
  }

  if (page === "region") {
    return "regions";
  }

  if (page === "sector") {
    return "sectors";
  }

  return {
    home: "home",
    analysis: "analysis",
    opinion: "opinion",
    radar: "radar",
    regions: "regions",
    about: "about",
    contact: "contact",
    subscription: "subscription",
    sectors: "sectors",
  }[page];
}

function pageFromType(type) {
  return {
    analysis: "analysis",
    opinion: "opinion",
    radar: "radar",
  }[type];
}

function localizedUrl(path, params = null) {
  return localizedUrlForLocale(path, currentLocale, params);
}

function cleanLocalizedPath(basePath, locale, params) {
  switch (basePath || "index.html") {
    case "":
    case "index.html":
      return buildStaticRoutePath("home", locale, params);
    case "analysis.html":
      return buildStaticRoutePath("analysis", locale, params);
    case "opinion.html":
      return buildStaticRoutePath("opinion", locale, params);
    case "radar.html":
      return buildStaticRoutePath("radar", locale, params);
    case "regions.html":
      return buildStaticRoutePath("regions", locale, params);
    case "sectors.html":
      return buildStaticRoutePath("sectors", locale, params);
    case "about.html":
      return buildStaticRoutePath("about", locale, params);
    case "contact.html":
      return buildStaticRoutePath("contact", locale, params);
    case "subscription.html":
      return buildStaticRoutePath("subscription", locale, params);
    case "editor.html":
      return buildStaticRoutePath("editor", locale, params);
    case "article.html": {
      const slug = params.get("slug") || routeValue("slug");
      return slug ? buildArticleRoutePath(slug, locale) : buildStaticRoutePath("analysis", locale);
    }
    case "region.html": {
      const slug = params.get("slug") || routeValue("slug");
      return slug ? buildRegionRoutePath(slug, locale) : buildStaticRoutePath("regions", locale);
    }
    case "sector.html": {
      const slug = params.get("slug") || routeValue("slug");
      const region = params.get("region") || "";
      return slug
        ? buildSectorRoutePath(slug, locale, region)
        : buildStaticRoutePath("sectors", locale, params);
    }
    default:
      return "";
  }
}

function withLocale(href) {
  if (!href || /^(https?:|mailto:|#)/.test(href)) {
    return href;
  }

  const [path, hash = ""] = href.split("#");
  const localized = localizedUrl(path);
  return `${localized}${hash ? `#${hash}` : ""}`;
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

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
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

function resolveLocale(currentQuery = new URLSearchParams(window.location.search)) {
  const localeFromQuery = normalizeLocale(currentQuery.get("lang"));

  if (localeFromQuery) {
    setStoredLocale(localeFromQuery);
    return localeFromQuery;
  }

  const localeFromDocument = normalizeLocale(
    document.body?.dataset.locale || document.documentElement.lang,
  );

  if (localeFromDocument) {
    return localeFromDocument;
  }

  const storedLocale = normalizeLocale(readStoredLocale());
  if (storedLocale) {
    return storedLocale;
  }

  const browserLocale = normalizeLocale(navigator.language || navigator.languages?.[0]);
  return browserLocale || defaultLocale;
}

function normalizeLocale(value) {
  if (!value) {
    return "";
  }

  const normalized = String(value).toLowerCase();

  if (normalized.startsWith("es")) {
    return "es";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  if (normalized.startsWith("ru")) {
    return "ru";
  }

  if (normalized.startsWith("zh")) {
    return "zh";
  }

  return supportedLocales.includes(normalized) ? normalized : "";
}

function readStoredLocale() {
  try {
    return window.localStorage.getItem("geoScope:locale") || "";
  } catch {
    return "";
  }
}

function setStoredLocale(locale) {
  try {
    window.localStorage.setItem("geoScope:locale", locale);
  } catch {
    // Ignore storage failures in restricted contexts.
  }
}

function formatStructureSummary(regionCount, sectorCount) {
  switch (currentLocale) {
    case "en":
      return `${regionCount} regions and ${sectorCount} sectors in the editorial structure.`;
    case "ru":
      return `${regionCount} регионов и ${sectorCount} секторов в редакционной структуре.`;
    case "zh":
      return `编辑结构中共有 ${regionCount} 个地区和 ${sectorCount} 个板块。`;
    default:
      return `${regionCount} regiones y ${sectorCount} sectores en la estructura editorial.`;
  }
}

function formatArticleCount(count) {
  const formatter = ui?.meta?.articles;
  const fallback = `${count}`;

  if (typeof formatter === "function") {
    const result = formatter(count);
    return typeof result === "string" ? result : fallback;
  }

  return typeof formatter === "string" ? `${count} ${formatter}` : fallback;
}

function buildResultsDescription({ type, region, sector, term }) {
  const parts = [];

  if (type && type !== "all") {
    parts.push(labelForType(type));
  }
  if (region) {
    parts.push(nameForRegion(region));
  }
  if (sector) {
    parts.push(nameForSector(sector));
  }
  if (term) {
    parts.push(`${ui.archive.searchLabel}: "${term}"`);
  }

  return parts.length ? parts.join(" / ") : ui.archive.fullView;
}

function matchesArchiveFilters(article, filters) {
  const typeMatch = filters.type && filters.type !== "all" ? article.type === filters.type : true;
  const regionMatch = filters.region ? article.region === filters.region : true;
  const sectorMatch = filters.sector ? article.sectors.includes(filters.sector) : true;
  const term = filters.term.toLowerCase();
  const searchMatch = term ? articleSearchText(article).includes(term) : true;

  return typeMatch && regionMatch && sectorMatch && searchMatch;
}

function articleSearchText(article) {
  return [
    article.title,
    article.subtitle,
    article.excerpt,
    article.tags.join(" "),
    labelForType(article.type),
    nameForRegion(article.region),
    ...article.sectors.map(nameForSector),
  ]
    .join(" ")
    .toLowerCase();
}

function renderTypeOptions(selectedType, omitAll = false) {
  const options = [
    omitAll ? null : { value: "all", label: ui.typeOptions.all },
    { value: "analysis", label: ui.articleTypes.analysis },
    { value: "opinion", label: ui.articleTypes.opinion },
    { value: "radar", label: ui.articleTypes.radar },
  ].filter(Boolean);

  return options
    .map(
      (option) => `
        <option value="${option.value}" ${option.value === selectedType ? "selected" : ""}>
          ${option.label}
        </option>
      `,
    )
    .join("");
}

function labelForType(type) {
  return articleTypeLabels[type] || ui.generic.readingFallback;
}

function nameForRegion(slug) {
  return regionMap.get(slug)?.name || ui.generic.regionFallback;
}

function nameForSector(slug) {
  return sectorMap.get(slug)?.name || ui.generic.sectorFallback;
}

function countArticlesForSector(slug, regionSlug = "") {
  return orderedArticles.filter((article) => {
    const sectorMatch = article.sectors.includes(slug);
    const regionMatch = regionSlug ? article.region === regionSlug : true;
    return sectorMatch && regionMatch;
  }).length;
}

function countArticlesForRegion(slug) {
  return orderedArticles.filter((article) => article.region === slug).length;
}

function countDistinctRegions(list) {
  return unique(list.map((article) => article.region)).length;
}

function findRelatedArticles(article) {
  return orderedArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      item: candidate,
      score:
        sharedCount(article.sectors, candidate.sectors) * 2 +
        Number(article.region === candidate.region) * 3 +
        sharedCount(article.tags, candidate.tags),
    }))
    .sort((left, right) => right.score - left.score || dateValue(right.item.date) - dateValue(left.item.date))
    .slice(0, 3)
    .map((entry) => entry.item);
}

function sharedCount(left, right) {
  const rightSet = new Set(right);
  return left.filter((item) => rightSet.has(item)).length;
}

function articleUrl(slug) {
  return localizedUrl("article.html", { slug });
}

function regionUrl(slug) {
  return localizedUrl("region.html", { slug });
}

function sectorUrl(slug) {
  return localizedUrl("sector.html", { slug });
}

function pagePath(currentPage) {
  return localizedUrl(basePathForPage(currentPage));
}

function basePathForPage(currentPage) {
  return {
    home: "index.html",
    analysis: "analysis.html",
    opinion: "opinion.html",
    radar: "radar.html",
    regions: "regions.html",
    region: "region.html",
    sectors: "sectors.html",
    sector: "sector.html",
    article: "article.html",
    about: "about.html",
    contact: "contact.html",
    subscription: "subscription.html",
    editor: "editor.html",
  }[currentPage] || `${currentPage}.html`;
}

function backLinkForArticle(article) {
  return localizedUrl({
    analysis: "analysis.html",
    opinion: "opinion.html",
    radar: "radar.html",
  }[article.type]);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(localeMeta.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00Z`));
}

function dateValue(dateString) {
  return new Date(`${dateString}T12:00:00Z`).getTime();
}

function unique(list) {
  return [...new Set(list)];
}

function persistSubmission(key, payload) {
  const current = readStorage(key, []);
  current.push(payload);
  window.localStorage.setItem(key, JSON.stringify(current));
}

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function isFavorite(slug) {
  return readStorage("geoScope:favorites", []).includes(slug);
}

function toggleFavorite(slug) {
  const favorites = readStorage("geoScope:favorites", []);
  const next = favorites.includes(slug)
    ? favorites.filter((item) => item !== slug)
    : [...favorites, slug];

  window.localStorage.setItem("geoScope:favorites", JSON.stringify(next));
}

function shareArticle(slug, mode) {
  const absoluteUrl = new URL(articleUrl(slug), window.location.href).toString();

  if (mode === "copy") {
    copyToClipboard(absoluteUrl);
    toast(ui.toasts.linkCopied);
    return;
  }

  if (mode === "linkedin") {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`,
      "_blank",
      "noopener",
    );
    return;
  }

  if (mode === "x") {
    window.open(
      `https://x.com/intent/tweet?url=${encodeURIComponent(absoluteUrl)}`,
      "_blank",
      "noopener",
    );
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function toast(message) {
  let toastNode = document.querySelector(".toast");

  if (!toastNode) {
    toastNode = document.createElement("div");
    toastNode.className = "toast";
    document.body.appendChild(toastNode);
  }

  toastNode.textContent = message;
  toastNode.classList.add("is-visible");

  window.clearTimeout(toastNode.timeoutId);
  toastNode.timeoutId = window.setTimeout(() => {
    toastNode.classList.remove("is-visible");
  }, 2400);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9\s-]/g, "")
    .replaceAll(/\s+/g, "-");
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
