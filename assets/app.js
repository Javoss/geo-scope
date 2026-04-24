import {
  about,
  articles,
  authors,
  navigation,
  newsletterInterests,
  regions,
  sectors,
  site,
} from "../data/content.js?v=20260424b";

const page = document.body.dataset.page;
const app = document.getElementById("app");
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
let query = new URLSearchParams(window.location.search);
const brandLogoSrc = "assets/geoscope-logo.png";

const articleTypeLabels = {
  analysis: "Analisis",
  opinion: "Opinion",
  radar: "Radar semanal",
};

const pageCopy = {
  analysis: {
    eyebrow: "Archivo editorial",
    title: "Analisis con contexto, escala y criterio.",
    description:
      "Explora el archivo completo de Geo Scope con filtros por region, sector y formato para detectar patrones, no solo titulares.",
  },
  opinion: {
    eyebrow: "Punto de vista",
    title: "Opinion estrategica con voz propia.",
    description:
      "Columnas y argumentos para leer el sistema internacional desde intereses, capacidades y consecuencias.",
  },
  radar: {
    eyebrow: "Seguimiento semanal",
    title: "Radar global para detectar senales antes del consenso.",
    description:
      "Lecturas breves sobre movimientos que anticipan cambios geopoliticos, geoeconomicos y tecnologicos.",
  },
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
      document.title = `${site.name} | Analisis estrategico global`;
      app.innerHTML = renderHomePage();
      break;
    case "analysis":
      document.title = `Analisis | ${site.name}`;
      app.innerHTML = renderArchivePage({
        title: pageCopy.analysis.title,
        eyebrow: pageCopy.analysis.eyebrow,
        description: pageCopy.analysis.description,
        lockedType: false,
        defaultType: "all",
      });
      break;
    case "opinion":
      document.title = `Opinion | ${site.name}`;
      app.innerHTML = renderArchivePage({
        title: pageCopy.opinion.title,
        eyebrow: pageCopy.opinion.eyebrow,
        description: pageCopy.opinion.description,
        lockedType: true,
        defaultType: "opinion",
      });
      break;
    case "explainers":
      document.title = `Analisis | ${site.name}`;
      app.innerHTML = renderArchivePage({
        title: pageCopy.analysis.title,
        eyebrow: pageCopy.analysis.eyebrow,
        description: pageCopy.analysis.description,
        lockedType: false,
        defaultType: "all",
      });
      break;
    case "radar":
      document.title = `Radar semanal | ${site.name}`;
      app.innerHTML = renderRadarPage();
      break;
    case "regions":
      document.title = `Regiones | ${site.name}`;
      app.innerHTML = renderRegionsPage();
      break;
    case "region":
      app.innerHTML = renderRegionDetailPage();
      break;
    case "sectors":
      document.title = `Sectores | ${site.name}`;
      app.innerHTML = renderSectorsPage();
      break;
    case "sector":
      app.innerHTML = renderSectorDetailPage();
      break;
    case "article":
      app.innerHTML = renderArticlePage();
      break;
    case "about":
      document.title = `Sobre Geo Scope`;
      app.innerHTML = renderAboutPage();
      break;
    case "contact":
      document.title = `Contacto | ${site.name}`;
      app.innerHTML = renderContactPage();
      break;
    case "subscription":
      document.title = `Suscripcion | ${site.name}`;
      app.innerHTML = renderSubscriptionPage();
      break;
    case "editor":
      document.title = `Panel editorial | ${site.name}`;
      app.innerHTML = renderEditorPage();
      break;
    default:
      app.innerHTML = renderNotFound();
      break;
  }

  bindPageInteractions();
  initRevealObserver();
}

function renderHeader() {
  const activeKey = resolveActiveNavigationKey();

  return `
    <div class="nav-frame">
      <a class="brand" href="index.html" aria-label="Geo Scope">
        ${renderBrandLockup()}
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        Menu
      </button>
      <div class="nav-stack" id="site-nav">
        <nav class="site-nav" aria-label="Principal">
          ${navigation
            .map(
              (item) => `
                <a class="nav-link ${item.key === activeKey ? "is-active" : ""}" href="${item.href}">
                  ${item.label}
                </a>
              `,
            )
            .join("")}
        </nav>
        <div class="header-utility" aria-label="Accesos">
          <a class="header-utility__link" href="analysis.html">Buscar</a>
          <span class="header-utility__divider" aria-hidden="true"></span>
          <a class="header-utility__link" href="subscription.html">Suscripcion</a>
          <span class="header-utility__divider" aria-hidden="true"></span>
          <span class="header-utility__lang">ES</span>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const sectionLinks = navigation.slice(0, 7);
  const institutionalLinks = [
    { label: "Sobre Geo Scope", href: "about.html" },
    { label: "Contacto", href: "contact.html" },
    { label: "Suscripcion", href: "subscription.html" },
    { label: "Panel editorial", href: "editor.html" },
  ];

  return `
    <div class="footer-wrap">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand--footer" href="index.html">
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
          <h3>Secciones</h3>
          <div class="footer-links">
            ${sectionLinks
              .map((item) => `<a href="${item.href}">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>Institucional</h3>
          <div class="footer-links">
            ${institutionalLinks
              .map((item) => `<a href="${item.href}">${item.label}</a>`)
              .join("")}
          </div>
          <div class="footer-contact">
            <span>${site.email}</span>
            <span>Analisis, opinion y radar semanal con enfoque internacional.</span>
          </div>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p class="footer-note">
            Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.
          </p>
          ${renderNewsletterForm({ compact: true })}
        </div>
      </div>
      <div class="container footer-bottom">
        <span>Copyright ${new Date().getFullYear()} ${site.name}. Todos los derechos reservados.</span>
        <span>Estructura editorial lista para multi-autor, archivo y evolucion hacia CMS.</span>
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
    .filter((article) => article.type === "analysis")
    .slice(0, 4);
  const radarItems = orderedArticles
    .filter((article) => article.type === "radar")
    .slice(0, 3);
  const leadSignals = radarItems[0]?.signals || [];

  return `
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <h1 class="hero-lead">Analisis estrategico para interpretar el nuevo orden global.</h1>
          <p class="hero-subtitle">
            Geopolitica, tecnologia, economia, energia y comercio internacional con una lectura clara, sobria y de largo plazo.
          </p>
          <p class="hero-text">
            Una plataforma para explicar el mundo con claridad y profundidad, desde las tensiones
            del poder hasta los cambios silenciosos que reordenan regiones, sectores y estrategias.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="analysis.html">Explorar analisis</a>
            <a class="btn btn-secondary" href="subscription.html">Suscribirse</a>
          </div>
          <div class="hero-trust-row">
            <span>Plataforma editorial</span>
            <span>Centro de analisis</span>
            <span>Perspectiva internacional</span>
          </div>
        </div>
        <aside class="hero-panel reveal">
          <div class="panel-header">
            <span class="eyebrow">En foco</span>
            <span class="panel-index">Edicion / 01</span>
          </div>
          <h2 class="hero-panel__title">${mainFeature.title}</h2>
          <p class="hero-panel__text">${mainFeature.subtitle}</p>
          <div class="meta-row">
            <span class="meta-chip">${labelForType(mainFeature.type)}</span>
            <span class="meta-chip">${nameForRegion(mainFeature.region)}</span>
          </div>
          <div class="metric-grid">
            <div class="metric-card">
              <strong>${articles.length}</strong>
              <span>Dossiers editoriales</span>
            </div>
            <div class="metric-card">
              <strong>${regions.length}</strong>
              <span>Regiones cubiertas</span>
            </div>
            <div class="metric-card">
              <strong>${sectors.length}</strong>
              <span>Sectores estrategicos</span>
            </div>
          </div>
          <div class="signal-panel">
            <h2>Radar global</h2>
            <ul class="signal-list">
              ${leadSignals
                .map(
                  (signal) => `
                    <li>
                      <strong>${signal.title}</strong>
                      <span>${signal.detail}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Portada",
          title: "Una lectura principal y tres ejes de contexto.",
          text: "La home combina un articulo destacado con piezas complementarias para construir una lectura mas completa del tablero global.",
        })}
        <div class="feature-layout">
          <div class="feature-layout__main">
            ${renderArticleCard(mainFeature, "feature")}
          </div>
          <div class="feature-layout__side">
            ${secondaryFeatures
              .map((article) => renderArticleCard(article, "compact"))
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Ultimos analisis",
          title: "Lecturas recientes con densidad estrategica.",
          text: "Analisis de fondo para seguir la evolucion del poder, las cadenas de valor y la competencia tecnologica.",
          actionLabel: "Ver archivo",
          actionHref: "analysis.html",
        })}
        <div class="card-grid card-grid--four">
          ${latestAnalyses
            .map((article) => renderArticleCard(article, "standard"))
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Radar global",
          title: "Senales breves con impacto estrategico.",
          text: "Seguimiento semanal para detectar cambios discretos con implicaciones geopoliticas y geoeconomicas.",
          actionLabel: "Ver radar semanal",
          actionHref: "radar.html",
        })}
        <div class="radar-layout">
          <article class="card radar-card radar-card--lead reveal">
            <div class="radar-card__header">
              <span class="meta-chip">Lectura rapida</span>
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
            <a class="inline-link" href="${articleUrl(radarItems[0].slug)}">Abrir radar</a>
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
          eyebrow: "Temas / Sectores",
          title: "Una estructura editorial organizada por capacidades y tensiones.",
          text: "Sectores pensados para seguir la interseccion entre tecnologia, economia, energia, diplomacia y poder estatal.",
          actionLabel: "Ver sectores",
          actionHref: "sectors.html",
        })}
        <div class="sector-grid">
          ${sectors.map((sector) => renderSectorCard(sector)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Regiones",
          title: "Cobertura regional con enfoque comparado.",
          text: "Cada region cuenta con portada propia, articulo destacado, ultimos textos y claves para interpretar sus movimientos.",
          actionLabel: "Explorar regiones",
          actionHref: "regions.html",
        })}
        <div class="region-grid">
          ${regions.map((region) => renderRegionCard(region)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${renderNewsletterPanel({
          title: "Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.",
          description:
            "Un newsletter curado para seguir geopolitica, economia internacional, tecnologia, energia y reordenamiento global sin ruido innecesario.",
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
            <span>resultados visibles con los filtros actuales.</span>
          </div>
          <div class="aside-line">
            <strong>${regions.length}</strong>
            <span>regiones y ${sectors.length} sectores en la estructura editorial.</span>
          </div>
          <a class="btn btn-secondary" href="${articleUrl(highlightedArticle.slug)}">
            Abrir lectura destacada
          </a>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <form class="filter-shell reveal" id="archive-filters">
          <div class="filter-grid">
            <label class="field">
              <span>Buscar</span>
              <input type="search" name="q" value="${escapeAttribute(activeQuery)}" placeholder="Titulo, region, etiqueta o sector" />
            </label>
            ${
              lockedType
                ? `<div class="field field--locked"><span>Formato</span><strong>${articleTypeLabels[defaultType]}</strong></div>`
                : `
                  <label class="field">
                    <span>Formato</span>
                    <select name="type">
                      ${renderTypeOptions(activeType)}
                    </select>
                  </label>
                `
            }
            <label class="field">
              <span>Region</span>
              <select name="region">
                <option value="">Todas las regiones</option>
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
              <span>Sector</span>
              <select name="sector">
                <option value="">Todos los sectores</option>
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
            <button class="btn btn-primary" type="submit">Aplicar filtros</button>
            <a class="btn btn-ghost" href="${lockedType ? pagePath(page) : "analysis.html"}">Limpiar</a>
          </div>
        </form>

        <div class="results-meta">
          <strong>${results.length} articulos</strong>
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
                <h2>No hay resultados para esta combinacion.</h2>
                <p>Prueba con otra region, otro sector o un termino de busqueda mas amplio.</p>
                <a class="btn btn-secondary" href="${lockedType ? pagePath(page) : "analysis.html"}">Restablecer filtros</a>
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
            <span>entregas demo del radar semanal para seguimiento editorial.</span>
          </div>
          <div class="aside-line">
            <strong>3-5</strong>
            <span>senales clave por entrega para una lectura rapida y util.</span>
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
            <a class="btn btn-secondary" href="${articleUrl(lead.slug)}">Abrir lectura</a>
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
          <span class="eyebrow">Mapa regional</span>
          <h1 class="page-title">Regiones con portadas propias y enfoque estrategico.</h1>
          <p class="page-text">
            Navega por BRICS, America Latina, Rusia y Eurasia, China y Asia, Europa,
            Medio Oriente, Africa y Estados Unidos y Occidente.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${regions.length}</strong>
            <span>regiones trazadas para lectura comparada.</span>
          </div>
          <div class="aside-line">
            <strong>Portadas</strong>
            <span>cada region combina descripcion, destacado, archivo y etiquetas.</span>
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
  const slug = query.get("slug") || regions[0].slug;
  const region = regionMap.get(slug);

  if (!region) {
    document.title = `Region no encontrada | ${site.name}`;
    return renderNotFound();
  }

  document.title = `${region.name} | ${site.name}`;

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
            <span>articulos demo relacionados con la region.</span>
          </div>
          <div class="aside-line">
            <strong>${relatedSectors.length}</strong>
            <span>sectores clave conectados con esta cobertura.</span>
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
            <span class="eyebrow">Descripcion estrategica</span>
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
          eyebrow: "Ultimos articulos",
          title: `Lecturas recientes sobre ${region.name}.`,
          text: "Una seleccion de piezas para seguir tendencias, riesgos y oportunidades en esta region.",
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
          <span class="eyebrow">Sectores</span>
          <h1 class="page-title">Categorias editoriales con lectura transversal.</h1>
          <p class="page-text">
            Organiza el archivo por geoeconomia, tecnologia, energia, seguridad,
            diplomacia e infraestructura para seguir el poder donde realmente opera.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${sectors.length}</strong>
            <span>sectores curados para una plataforma magazine + think tank.</span>
          </div>
          <div class="aside-line">
            <strong>Filtro regional</strong>
            <span>cada categoria permite leer el cruce entre tema y geografia.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <form class="filter-shell reveal" id="sector-overview-filter">
          <div class="filter-grid filter-grid--simple">
            <label class="field">
              <span>Filtrar por region</span>
              <select name="region">
                <option value="">Todas las regiones</option>
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
            <button class="btn btn-primary" type="submit">Aplicar</button>
            <a class="btn btn-ghost" href="sectors.html">Limpiar</a>
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
  const slug = query.get("slug") || sectors[0].slug;
  const activeRegion = query.get("region") || "";
  const sector = sectorMap.get(slug);

  if (!sector) {
    document.title = `Sector no encontrado | ${site.name}`;
    return renderNotFound();
  }

  document.title = `${sector.name} | ${site.name}`;

  const relatedArticles = orderedArticles.filter((article) => {
    const sectorMatch = article.sectors.includes(slug);
    const regionMatch = activeRegion ? article.region === activeRegion : true;
    return sectorMatch && regionMatch;
  });

  return `
    <section class="page-hero section">
      <div class="container page-hero__grid">
        <div class="reveal">
          <span class="eyebrow">Sector</span>
          <div class="sector-heading">
            <span class="icon-badge">${iconMarkup(sector.icon)}</span>
            <h1 class="page-title">${sector.name}</h1>
          </div>
          <p class="page-text">${sector.description}</p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>${relatedArticles.length}</strong>
            <span>articulos asociados con el filtro actual.</span>
          </div>
          <div class="aside-line">
            <strong>${countDistinctRegions(relatedArticles)}</strong>
            <span>regiones conectadas con esta categoria.</span>
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
              <span>Filtrar por region</span>
              <select name="region">
                <option value="">Todas las regiones</option>
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
            <button class="btn btn-primary" type="submit">Aplicar filtro</button>
            <a class="btn btn-ghost" href="${sectorUrl(slug)}">Ver todo</a>
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
                <h2>No hay articulos para esta combinacion.</h2>
                <p>Prueba otra region o vuelve a la vista completa del sector.</p>
                <a class="btn btn-secondary" href="${sectorUrl(slug)}">Restablecer vista</a>
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderArticlePage() {
  const slug = query.get("slug") || orderedArticles[0].slug;
  const article = articleMap.get(slug);

  if (!article) {
    document.title = `Articulo no encontrado | ${site.name}`;
    return renderNotFound();
  }

  document.title = `${article.title} | ${site.name}`;

  const author = authorMap.get(article.author);
  const region = regionMap.get(article.region);
  const related = findRelatedArticles(article);
  const favorite = isFavorite(article.slug);

  return `
    <section class="article-hero section">
      <div class="container article-hero__grid">
        <div class="article-hero__copy reveal">
          <a class="back-link" href="${backLinkForArticle(article)}">Volver</a>
          <div class="meta-row">
            <span class="meta-chip">${labelForType(article.type)}</span>
            <span class="meta-chip">${region.name}</span>
            <span class="meta-chip">${article.readTime} min de lectura</span>
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
              ${favorite ? "Guardado" : "Guardar"}
            </button>
            <button class="btn btn-ghost" data-share="copy" data-slug="${article.slug}">
              Copiar enlace
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
        <article class="card prose-card reveal">
          <p class="article-lead">${article.excerpt}</p>
          ${
            article.type === "radar"
              ? renderRadarBody(article)
              : renderEssayBody(article)
          }
        </article>
        <aside class="article-aside reveal">
          <div class="card aside-card">
            <span class="eyebrow">Region relacionada</span>
            <h2>${region.name}</h2>
            <p>${region.description}</p>
            <a class="inline-link" href="${regionUrl(region.slug)}">Abrir portada regional</a>
          </div>
          <div class="card aside-card">
            <span class="eyebrow">Etiquetas</span>
            <div class="tag-list">
              ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          ${renderNewsletterPanel({
            compactPanel: true,
            title: "Recibe nuevas lecturas estrategicas en tu inbox.",
            description:
              "Suscribete para seguir analisis, opinion y radar semanal con una cadencia editorial clara.",
          })}
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Relacionados",
          title: "Sigue leyendo en esta misma agenda.",
          text: "Articulos conectados por region, sector o formato editorial.",
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
          <span class="eyebrow">Sobre Geo Scope</span>
          <h1 class="page-title">Un proyecto editorial para interpretar cambios globales con profundidad, criterio y claridad.</h1>
          <p class="page-text">
            Geo Scope combina la disciplina de un think tank independiente con la lectura cuidada de una revista estrategica.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>Mision</strong>
            <span>${about.mission}</span>
          </div>
          <div class="aside-line">
            <strong>Vision</strong>
            <span>${about.vision}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="card-grid card-grid--two">
          <article class="card manifesto-card reveal">
            <span class="eyebrow">Mision</span>
            <h2>${about.mission}</h2>
            <p>${about.vision}</p>
          </article>
          <article class="card manifesto-card reveal">
            <span class="eyebrow">Enfoque</span>
            <h2>Think tank independiente y plataforma de analisis.</h2>
            <p>
              Geo Scope busca explicar el mundo con una voz analitica, sobria y profesional,
              evitando el tono sensacionalista y la logica de portal de noticias rapidas.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader({
          eyebrow: "Manifiesto editorial",
          title: "Por que existe Geo Scope.",
          text: "Un medio para pensar mejor el poder, no para amplificar ruido.",
        })}
        <div class="manifesto-grid">
          ${about.manifesto
            .map(
              (item, index) => `
                <article class="card manifesto-card reveal">
                  <span class="eyebrow">Punto 0${index + 1}</span>
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
          <span class="eyebrow">Contacto</span>
          <h1 class="page-title">Colaboraciones, consultas institucionales y propuestas editoriales.</h1>
          <p class="page-text">
            Geo Scope esta pensado para crecer hacia una plataforma con mas autores, mas categorias
            y posibles capas premium. Este espacio sirve como punto de contacto inicial.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>Email editorial</strong>
            <span>${site.email}</span>
          </div>
          <div class="aside-line">
            <strong>Enfoque</strong>
            <span>Analisis estrategico, opinion especializada y seguimiento internacional de alta claridad.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container contact-grid">
        <div class="card contact-card reveal">
          <span class="eyebrow">Canales</span>
          <h2>Hablemos.</h2>
          <p>
            Puedes escribir por colaboraciones, sindicacion de contenidos, alianzas institucionales
            o consultas sobre el desarrollo futuro de la plataforma.
          </p>
          <div class="footer-links">
            <a href="mailto:${site.email}">${site.email}</a>
            <a href="subscription.html">Suscripcion</a>
            <a href="editor.html">Panel editorial</a>
          </div>
        </div>
        <form class="card contact-form reveal" id="contact-form">
          <span class="eyebrow">Formulario</span>
          <label class="field">
            <span>Nombre</span>
            <input type="text" name="name" placeholder="Tu nombre" required />
          </label>
          <label class="field">
            <span>Email</span>
            <input type="email" name="email" placeholder="tu@email.com" required />
          </label>
          <label class="field">
            <span>Asunto</span>
            <input type="text" name="subject" placeholder="Tema de contacto" required />
          </label>
          <label class="field">
            <span>Mensaje</span>
            <textarea name="message" rows="6" placeholder="Cuentanos en que podemos ayudarte." required></textarea>
          </label>
          <button class="btn btn-primary" type="submit">Enviar consulta</button>
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
          <span class="eyebrow">Newsletter / Suscripcion</span>
          <h1 class="page-title">Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.</h1>
          <p class="page-text">
            Una suscripcion pensada para lectores que necesitan claridad, profundidad y una mirada internacional sobre geopolitica, economia, tecnologia, energia y comercio.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>Formato</strong>
            <span>Analisis, opinion y radar semanal.</span>
          </div>
          <div class="aside-line">
            <strong>Valor</strong>
            <span>Menos ruido, mas criterio y mejor arquitectura de lectura.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        ${renderNewsletterPanel({
          title: "Suscripcion editorial",
          description:
            "Elige tus intereses tematicos y construye una experiencia mas afin con tu agenda de lectura.",
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
          <span class="eyebrow">Panel editorial demo</span>
          <h1 class="page-title">Una base simple para publicar nuevos contenidos en el futuro.</h1>
          <p class="page-text">
            Esta vista funciona como paso intermedio hacia un CMS: permite preparar un articulo,
            ver una previsualizacion local y generar una estructura base reutilizable.
          </p>
        </div>
        <div class="page-hero__aside reveal">
          <div class="aside-line">
            <strong>Hoy</strong>
            <span>Datos centralizados en <code>data/content.js</code>.</span>
          </div>
          <div class="aside-line">
            <strong>Despues</strong>
            <span>Futura migracion sencilla a headless CMS o panel multi-autor.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container editor-grid">
        <form class="card editor-form reveal" id="editor-form">
          <span class="eyebrow">Nuevo borrador</span>
          <label class="field">
            <span>Titulo</span>
            <input type="text" name="title" value="Nuevo analisis sobre corredores energeticos" required />
          </label>
          <label class="field">
            <span>Subtitulo</span>
            <input
              type="text"
              name="subtitle"
              value="Un borrador para medir tono, jerarquia visual y consistencia editorial."
              required
            />
          </label>
          <div class="editor-form__row">
            <label class="field">
              <span>Formato</span>
              <select name="type">
                ${renderTypeOptions("analysis", true)}
              </select>
            </label>
            <label class="field">
              <span>Region</span>
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
              <span>Sector</span>
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
              <span>Tiempo de lectura</span>
              <input type="number" min="3" max="25" name="readTime" value="8" />
            </label>
          </div>
          <label class="field">
            <span>Extracto</span>
            <textarea name="excerpt" rows="4">Una plantilla simple para convertir ideas editoriales en nuevas piezas dentro de la arquitectura de Geo Scope.</textarea>
          </label>
        </form>

        <div class="editor-preview reveal">
          <div class="card editor-preview__card" id="editor-preview-card"></div>
          <div class="card editor-preview__json">
            <span class="eyebrow">Estructura sugerida</span>
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
          <h1>La pagina que buscas no esta disponible.</h1>
          <p>Vuelve al inicio o abre el archivo editorial para seguir explorando Geo Scope.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="index.html">Ir al inicio</a>
            <a class="btn btn-secondary" href="analysis.html">Abrir archivo</a>
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
          <div class="article-card__footer">
            <span>${formatDate(article.date)}</span>
            <span>${article.readTime} min</span>
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
          <span class="eyebrow">Region</span>
          <span class="meta-chip">${regionArticles.length} articulos</span>
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
          <span class="meta-chip">${counter} articulos</span>
        </div>
        <h3>${sector.name}</h3>
        <p>${sector.description}</p>
        <span class="inline-link">Abrir sector</span>
      </a>
    </article>
  `;
}

function renderNewsletterPanel({ title, description, detailed = false, compactPanel = false }) {
  return `
    <div class="newsletter-panel ${compactPanel ? "newsletter-panel--compact" : ""}">
      <div class="newsletter-panel__copy">
        <span class="eyebrow">Newsletter</span>
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
              <span>Nombre</span>
              <input type="text" name="name" placeholder="Tu nombre" ${detailed ? "required" : ""} />
            </label>
          `
      }
      <label class="field">
        <span>Email</span>
        <input type="email" name="email" placeholder="tu@email.com" required />
      </label>
      ${
        detailed
          ? `
            <fieldset class="interest-fieldset">
              <legend>Intereses tematicos</legend>
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
      <button class="btn btn-primary" type="submit">${compact ? "Unirme" : "Suscribirme"}</button>
    </form>
  `;
}

function sectionHeader({ eyebrow, title, text, actionLabel, actionHref }) {
  return `
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      ${
        actionLabel && actionHref
          ? `<a class="btn btn-ghost" href="${actionHref}">${actionLabel}</a>`
          : ""
      }
    </div>
  `;
}

function renderEssayBody(article) {
  return `
    <section class="article-section">
      <h2>Tesis central</h2>
      <p>${article.thesis}</p>
    </section>
    <section class="article-section">
      <h2>Por que importa</h2>
      ${article.whyItMatters.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
    <section class="article-section">
      <h2>Lectura regional</h2>
      <p>${article.regionalLens}</p>
    </section>
    <section class="article-section">
      <h2>Lo que viene</h2>
      <p>${article.outlook}</p>
    </section>
  `;
}

function renderRadarBody(article) {
  return `
    <section class="article-section">
      <h2>Senales clave</h2>
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
      <h2>Por que importa</h2>
      <p>${article.outlook}</p>
    </section>
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

  header.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const term = String(formData.get("q") || "").trim();
      const params = new URLSearchParams();

      if (term) {
        params.set("q", term);
      }

      window.location.href = `analysis.html${params.toString() ? `?${params.toString()}` : ""}`;
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

      window.history.replaceState({}, "", `${pagePath(page)}${params.toString() ? `?${params.toString()}` : ""}`);
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

      window.history.replaceState({}, "", `sectors.html${params.toString() ? `?${params.toString()}` : ""}`);
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

      window.history.replaceState({}, "", `sector.html?${params.toString()}`);
      renderPage();
    });
  }

  const favoriteButton = app.querySelector("[data-favorite]");
  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => {
      const slug = favoriteButton.getAttribute("data-favorite");
      toggleFavorite(slug);
      favoriteButton.textContent = isFavorite(slug) ? "Guardado" : "Guardar";
      toast(isFavorite(slug) ? "Articulo guardado en favoritos." : "Articulo eliminado de favoritos.");
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
      toast("Consulta registrada localmente. Lista para conectar con un backend.");
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
              <span>${previewArticle.readTime} min</span>
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
    toast("Suscripcion registrada localmente. Lista para integrar con newsletter real.");
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
    parts.push(`busqueda: "${term}"`);
  }

  return parts.length ? parts.join(" / ") : "Vista completa del archivo editorial.";
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
    omitAll ? null : { value: "all", label: "Todos los formatos" },
    { value: "analysis", label: "Analisis" },
    { value: "opinion", label: "Opinion" },
    { value: "radar", label: "Radar semanal" },
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
  return articleTypeLabels[type] || "Lectura";
}

function nameForRegion(slug) {
  return regionMap.get(slug)?.name || "Region";
}

function nameForSector(slug) {
  return sectorMap.get(slug)?.name || "Sector";
}

function countArticlesForSector(slug, regionSlug = "") {
  return orderedArticles.filter((article) => {
    const sectorMatch = article.sectors.includes(slug);
    const regionMatch = regionSlug ? article.region === regionSlug : true;
    return sectorMatch && regionMatch;
  }).length;
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
  return `article.html?slug=${slug}`;
}

function regionUrl(slug) {
  return `region.html?slug=${slug}`;
}

function sectorUrl(slug) {
  return `sector.html?slug=${slug}`;
}

function pagePath(currentPage) {
  return {
    analysis: "analysis.html",
    opinion: "opinion.html",
    radar: "radar.html",
    sectors: "sectors.html",
  }[currentPage] || `${currentPage}.html`;
}

function backLinkForArticle(article) {
  return {
    analysis: "analysis.html",
    opinion: "opinion.html",
    radar: "radar.html",
  }[article.type];
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("es-ES", {
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
    toast("Enlace copiado.");
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
