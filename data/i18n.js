import { americaLatinaCrisisOrganicaTranslations } from "./article-translations/america-latina-y-la-crisis-organica.js?v=20260609a";
import { foroSeguridadMultipolarMoscuTranslations } from "./article-translations/foro-de-seguridad-multipolar-en-moscu.js?v=20260609a";

function russianPlural(count, one, few, many) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return few;
  }

  return many;
}

function isLocalePlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeLocaleData(base, override) {
  if (!override) {
    return base;
  }

  const next = { ...base };

  Object.entries(override).forEach(([key, value]) => {
    if (isLocalePlainObject(value) && isLocalePlainObject(base[key])) {
      next[key] = mergeLocaleData(base[key], value);
      return;
    }

    next[key] = value;
  });

  return next;
}

export const supportedLocales = ["es", "en", "ru", "zh"];
export const defaultLocale = "es";

export const localeOptions = {
  es: {
    label: "ES",
    name: "Español",
    dateLocale: "es-ES",
  },
  en: {
    label: "EN",
    name: "English",
    dateLocale: "en-US",
  },
  ru: {
    label: "RU",
    name: "Russkiy",
    dateLocale: "ru-RU",
  },
  zh: {
    label: "中文",
    name: "中文",
    dateLocale: "zh-CN",
  },
};

export const uiCopy = {
  es: {
    articleTypes: {
      analysis: "Análisis",
      opinion: "Opinión",
      radar: "Radar semanal",
    },
    pageCopy: {
      analysis: {
        eyebrow: "Archivo editorial",
        title: "Análisis con contexto, escala y criterio.",
        description:
          "Explora el archivo completo de Geo Scope con filtros por región, sector y formato para detectar patrones, no solo titulares.",
      },
      opinion: {
        eyebrow: "Punto de vista",
        title: "Opinión estratégica con voz propia.",
        description:
          "Columnas y argumentos para leer el sistema internacional desde intereses, capacidades y consecuencias.",
      },
      radar: {
        eyebrow: "Seguimiento semanal",
        title: "Radar global para detectar señales antes del consenso.",
        description:
          "Lecturas breves sobre movimientos que anticipan cambios geopolíticos, geoeconómicos y tecnológicos.",
      },
    },
    pageTitles: {
      home: "Análisis estratégico global",
      analysis: "Análisis",
      opinion: "Opinión",
      radar: "Radar semanal",
      regions: "Regiones",
      sectors: "Sectores",
      experts: "Expertos",
      about: "Sobre Geo Scope",
      contact: "Contacto",
      subscription: "Suscripción",
      editor: "Panel editorial",
      regionNotFound: "Región no encontrada",
      sectorNotFound: "Sector no encontrado",
      articleNotFound: "Artículo no encontrado",
      expertNotFound: "Experto no encontrado",
    },
    header: {
      menu: "Menú",
      navAria: "Principal",
      utilityAria: "Accesos",
      search: "Buscar",
      subscription: "Suscripción",
      languageAria: "Idioma",
    },
    footer: {
      sections: "Secciones",
      institutional: "Institucional",
      newsletter: "Newsletter",
      contactNote: "Información general y colaboraciones editoriales.",
      newsletterNote:
        "Recibe análisis estratégicos y lecturas clave sobre el nuevo orden global.",
      rightsReserved: "Todos los derechos reservados.",
      editorialPanel: "Panel editorial",
    },
    home: {
      heroLead: "Análisis estratégico",
      heroSubtitle:
        "Geopolítica, tecnología, economía, energía y comercio internacional con una lectura clara, sobria y de largo plazo.",
      heroText:
        "Una plataforma para leer el sistema internacional con criterio, contexto y foco estratégico.",
      explore: "Explorar análisis",
      subscribe: "Suscribirse",
      trust: [
        "Plataforma editorial",
        "Centro de análisis",
        "Perspectiva internacional",
      ],
      focus: "En foco",
      edition: "Edición",
      dossiers: "Dossiers",
      regions: "Regiones",
      sectorsMetric: "Sectores",
      globalRadar: "Radar global",
      weeklyPriority: "Lectura prioritaria de la semana",
      weeklyPriorityFallback:
        "Movimientos breves con impacto acumulativo sobre liquidez, comercio y competencia estratégica.",
      openWeeklyRadar: "Abrir radar semanal",
      frontpage: {
        eyebrow: "Portada",
        title: "Una lectura principal y tres ejes de contexto.",
        text:
          "La home combina un artículo destacado con piezas complementarias para construir una lectura más completa del tablero global.",
      },
      latest: {
        eyebrow: "Últimos análisis",
        title: "Lecturas recientes con densidad estratégica.",
        text:
          "Análisis de fondo para seguir la evolución del poder, las cadenas de valor y la competencia tecnológica.",
        action: "Ver archivo",
      },
      radar: {
        eyebrow: "Radar global",
        title: "Señales breves con impacto estratégico.",
        text:
          "Seguimiento semanal para detectar cambios discretos con implicaciones geopolíticas y geoeconómicas.",
        action: "Ver radar semanal",
        quickRead: "Lectura rápida",
        open: "Abrir radar",
      },
      sectors: {
        eyebrow: "Temas / Sectores",
        title: "Una estructura editorial organizada por capacidades y tensiones.",
        text:
          "Sectores pensados para seguir la intersección entre tecnología, economía, energía, diplomacia y poder estatal.",
        action: "Ver sectores",
      },
      regionsSection: {
        eyebrow: "Regiones",
        title: "Cobertura regional con enfoque comparado.",
        text:
          "Cada región cuenta con portada propia, artículo destacado, últimos textos y claves para interpretar sus movimientos.",
        action: "Explorar regiones",
      },
      newsletter: {
        title:
          "Recibe análisis estratégicos y lecturas clave sobre el nuevo orden global.",
        description:
          "Un newsletter curado para seguir geopolítica, economía internacional, tecnología, energía y reordenamiento global sin ruido innecesario.",
      },
    },
    archive: {
      visibleResults: "resultados visibles con los filtros actuales.",
      structureSummary:
        "regiones y sectores en la estructura editorial.",
      openFeatured: "Abrir lectura destacada",
      search: "Buscar",
      searchPlaceholder: "Título, región, etiqueta o sector",
      format: "Formato",
      region: "Región",
      sector: "Sector",
      allRegions: "Todas las regiones",
      allSectors: "Todos los sectores",
      applyFilters: "Aplicar filtros",
      clear: "Limpiar",
      noResultsTitle: "No hay resultados para esta combinación.",
      noResultsText:
        "Prueba con otra región, otro sector o un término de búsqueda más amplio.",
      resetFilters: "Restablecer filtros",
      fullView: "Vista completa del archivo editorial.",
      searchLabel: "búsqueda",
      lockedFormatLabel: "Formato",
    },
    radarPage: {
      demoDeliveries: "entregas demo del radar semanal para seguimiento editorial.",
      keySignals: "señales clave por entrega para una lectura rápida y útil.",
      openReading: "Abrir lectura",
    },
    regionsPage: {
      eyebrow: "Mapa regional",
      title: "Regiones con portadas propias y enfoque estratégico.",
      text:
        "Navega por BRICS, América Latina, Rusia y Eurasia, China y Asia, Europa, Medio Oriente, África y Estados Unidos y Occidente.",
      mapped: "regiones trazadas para lectura comparada.",
      covers: "Portadas",
      coversText:
        "cada región combina descripción, destacado, archivo y etiquetas.",
      region: "Región",
      regionArticles: "artículos demo relacionados con la región.",
      keySectors: "sectores clave conectados con esta cobertura.",
      strategicDescription: "Descripción estratégica",
      latestEyebrow: "Últimos artículos",
      latestTitle: (regionName) => `Lecturas recientes sobre ${regionName}.`,
      latestText:
        "Una selección de piezas para seguir tendencias, riesgos y oportunidades en esta región.",
    },
    sectorsPage: {
      eyebrow: "Sectores",
      title: "Categorías editoriales con lectura transversal.",
      text:
        "Organiza el archivo por geoeconomía, tecnología, energía, seguridad, diplomacia e infraestructura para seguir el poder donde realmente opera.",
      curated:
        "sectores curados para una plataforma magazine + think tank.",
      filterLabel: "Filtro regional",
      filterText:
        "cada categoría permite leer el cruce entre tema y geografía.",
      filterByRegion: "Filtrar por región",
      apply: "Aplicar",
      applyFilter: "Aplicar filtro",
      clear: "Limpiar",
      sector: "Sector",
      sectorArticles: "artículos asociados con el filtro actual.",
      connectedRegions: "regiones conectadas con esta categoría.",
      viewAll: "Ver todo",
      noArticlesTitle: "No hay artículos para esta combinación.",
      noArticlesText: "Prueba otra región o vuelve a la vista completa del sector.",
      resetView: "Restablecer vista",
    },
    articlePage: {
      back: "Volver",
      byline: (name) => `Escrito por ${name}`,
      save: "Guardar",
      saved: "Guardado",
      copyLink: "Copiar enlace",
      relatedRegion: "Región relacionada",
      openRegionalCover: "Abrir portada regional",
      openRegionalMap: "Abrir mapa regional",
      tags: "Etiquetas",
      newsletterTitle: "Recibe nuevas lecturas estratégicas en tu inbox.",
      newsletterDescription:
        "Suscríbete para seguir análisis, opinión y radar semanal con una cadencia editorial clara.",
      relatedEyebrow: "Relacionados",
      relatedTitle: "Sigue leyendo en esta misma agenda.",
      relatedText: "Artículos conectados por región, sector o formato editorial.",
      fallbackAuthorName: "Equipo editorial",
      fallbackAuthorRole: "Geo Scope",
      fallbackRegionName: "Cobertura global",
      fallbackRegionDescription:
        "Análisis vinculado a tendencias transversales del sistema internacional.",
      readArticle: "Leer artículo",
      openSector: "Abrir sector",
    },
    aboutPage: {
      eyebrow: "Sobre Geo Scope",
      title:
        "Un proyecto editorial para interpretar cambios globales con profundidad, criterio y claridad.",
      text: "Geo Scope combina la disciplina de un think tank independiente.",
      mission: "Misión",
      vision: "Visión",
      approach: "Enfoque",
      approachTitle: "Think tank independiente y plataforma de análisis.",
      approachText:
        "Geo Scope busca explicar el mundo con una voz analítica, sobria y profesional, evitando el tono sensacionalista y la lógica de portal de noticias rápidas.",
      manifestoEyebrow: "Manifiesto editorial",
      manifestoTitle: "Por qué existe Geo Scope.",
      manifestoText:
        "Un medio para pensar mejor el poder, no para amplificar ruido.",
      manifestoPoint: (index) => `Punto 0${index + 1}`,
    },
    contactPage: {
      eyebrow: "Contacto",
      title:
        "Colaboraciones, consultas institucionales y propuestas editoriales.",
      text:
        "Geo Scope está pensado para crecer hacia una plataforma con más autores, más categorías y posibles capas premium. Este espacio sirve como punto de contacto inicial.",
      information: "Información y colaboraciones",
      approach: "Enfoque",
      approachText:
        "Análisis estratégico, opinión especializada y seguimiento internacional de alta claridad.",
      channels: "Canales",
      headline: "Hablemos.",
      body:
        "Puedes escribir por información general, colaboraciones, sindicación de contenidos, alianzas institucionales o consultas sobre el desarrollo futuro de la plataforma.",
      form: "Formulario",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Tema de contacto",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos en qué podemos ayudarte.",
      send: "Enviar consulta",
    },
    subscriptionPage: {
      eyebrow: "Newsletter / Suscripción",
      title:
        "Recibe análisis estratégicos y lecturas clave sobre el nuevo orden global.",
      text:
        "Una suscripción pensada para lectores que necesitan claridad, profundidad y una mirada internacional sobre geopolítica, economía, tecnología, energía y comercio.",
      format: "Formato",
      formatText: "Análisis, opinión y radar semanal.",
      value: "Valor",
      valueText: "Menos ruido, más criterio y mejor arquitectura de lectura.",
      panelTitle: "Suscripción editorial",
      panelDescription:
        "Elige tus intereses temáticos y construye una experiencia más afín con tu agenda de lectura.",
    },
    expertsPage: {
      eyebrow: "Expertos",
      title: "El experto fundador y la visión editorial de Geo Scope.",
      text:
        "Conoce a Javier Salazar Segales, Director General & Fundador de Geo Scope, sus áreas de especialidad y su enfoque de análisis.",
      searchPlaceholder: "Buscar por nombre o especialidad",
      all: "Todos",
      noResults: "No hay expertos que coincidan con esta búsqueda.",
      openProfile: "Ver perfil",
    },
    expertPage: {
      eyebrow: "Expertos",
      about: "Biografía",
      affiliations: "Afiliaciones",
      expertise: "Áreas de especialidad",
      languages: "Idiomas",
      education: "Formación",
      directory: "Volver al directorio",
    },
    editorPage: {
      eyebrow: "Panel editorial demo",
      title: "Una base simple para publicar nuevos contenidos en el futuro.",
      text:
        "Esta vista funciona como paso intermedio hacia un CMS: permite preparar un artículo, ver una previsualización local y generar una estructura base reutilizable.",
      today: "Hoy",
      todayText:
        "Metadatos en data/content.js y artículos modulares en data/articles/.",
      later: "Después",
      laterText: "Futura migración sencilla a headless CMS o panel multi-autor.",
      draft: "Nuevo borrador",
      titleLabel: "Título",
      subtitleLabel: "Subtítulo",
      typeLabel: "Formato",
      regionLabel: "Región",
      sectorLabel: "Sector",
      readTimeLabel: "Tiempo de lectura",
      excerptLabel: "Extracto",
      previewStructure: "Estructura sugerida",
      draftTitle: "Nuevo análisis sobre corredores energéticos",
      draftSubtitle:
        "Un borrador para medir tono, jerarquía visual y consistencia editorial.",
      draftExcerpt:
        "Una plantilla simple para convertir ideas editoriales en nuevas piezas dentro de la arquitectura de Geo Scope.",
      snippetIntro: "Apertura del artículo.",
      snippetHeading: "Primera sección",
      snippetBody: "Desarrollo principal.",
    },
    notFound: {
      title: "La página que buscas no está disponible.",
      text:
        "Vuelve al inicio o abre el archivo editorial para seguir explorando Geo Scope.",
      home: "Ir al inicio",
      archive: "Abrir archivo",
    },
    newsletter: {
      eyebrow: "Newsletter",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      interests: "Intereses temáticos",
      join: "Unirme",
      subscribe: "Suscribirme",
    },
    essaySections: {
      thesis: "Tesis central",
      why: "Por qué importa",
      regional: "Lectura regional",
      outlook: "Lo que viene",
      signals: "Señales clave",
    },
    generic: {
      readingFallback: "Lectura",
      regionFallback: "Región",
      sectorFallback: "Sector",
    },
    toasts: {
      favoriteSaved: "Artículo guardado en favoritos.",
      favoriteRemoved: "Artículo eliminado de favoritos.",
      contactSaved:
        "Consulta registrada localmente. Lista para conectar con un backend.",
      newsletterSaved:
        "Suscripción registrada localmente. Lista para integrar con newsletter real.",
      linkCopied: "Enlace copiado al portapapeles.",
      shareError: "No se pudo compartir el artículo en este dispositivo.",
    },
    meta: {
      readTime: (minutes) => `${minutes} min de lectura`,
      shortMinutes: (minutes) => `${minutes} min`,
      articles: (count) => `${count} ${count === 1 ? "artículo" : "artículos"}`,
      localeSwitcher: "Seleccionar idioma",
    },
    typeOptions: {
      all: "Todos los formatos",
    },
  },
  en: {
    articleTypes: {
      analysis: "Analysis",
      opinion: "Opinion",
      radar: "Weekly radar",
    },
    pageCopy: {
      analysis: {
        eyebrow: "Editorial archive",
        title: "Analysis with context, scale, and judgment.",
        description:
          "Explore the full Geo Scope archive with region, sector, and format filters to spot patterns, not just headlines.",
      },
      opinion: {
        eyebrow: "Point of view",
        title: "Strategic opinion with a clear voice.",
        description:
          "Columns and arguments for reading the international system through interests, capabilities, and consequences.",
      },
      radar: {
        eyebrow: "Weekly tracking",
        title: "Global radar to spot signals before consensus forms.",
        description:
          "Brief reads on moves that anticipate geopolitical, geoeconomic, and technological shifts.",
      },
    },
    pageTitles: {
      home: "Global strategic analysis",
      analysis: "Analysis",
      opinion: "Opinion",
      radar: "Weekly radar",
      regions: "Regions",
      sectors: "Sectors",
      experts: "Experts",
      about: "About Geo Scope",
      contact: "Contact",
      subscription: "Subscribe",
      editor: "Editorial desk",
      regionNotFound: "Region not found",
      sectorNotFound: "Sector not found",
      articleNotFound: "Article not found",
      expertNotFound: "Expert not found",
    },
    header: {
      menu: "Menu",
      navAria: "Main",
      utilityAria: "Quick access",
      search: "Search",
      subscription: "Subscribe",
      languageAria: "Language",
    },
    footer: {
      sections: "Sections",
      institutional: "Institutional",
      newsletter: "Newsletter",
      contactNote: "General information and editorial collaborations.",
      newsletterNote:
        "Receive strategic analysis and key reads on the new global order.",
      rightsReserved: "All rights reserved.",
      editorialPanel: "Editorial desk",
    },
    home: {
      heroLead: "Strategic analysis",
      heroSubtitle:
        "Geopolitics, technology, economics, energy, and international trade through a clear, sober, long-range lens.",
      heroText:
        "A platform for reading the international system with judgment, context, and strategic focus.",
      explore: "Explore analysis",
      subscribe: "Subscribe",
      trust: [
        "Editorial platform",
        "Analysis center",
        "International perspective",
      ],
      focus: "In focus",
      edition: "Edition",
      dossiers: "Dossiers",
      regions: "Regions",
      sectorsMetric: "Sectors",
      globalRadar: "Global radar",
      weeklyPriority: "Priority reading of the week",
      weeklyPriorityFallback:
        "Brief moves with cumulative impact on liquidity, trade, and strategic competition.",
      openWeeklyRadar: "Open weekly radar",
      frontpage: {
        eyebrow: "Front page",
        title: "One lead read and three context lines.",
        text:
          "The homepage combines a featured article with complementary pieces to build a fuller reading of the global board.",
      },
      latest: {
        eyebrow: "Latest analysis",
        title: "Recent reads with strategic density.",
        text:
          "In-depth analysis to follow shifts in power, value chains, and technological competition.",
        action: "View archive",
      },
      radar: {
        eyebrow: "Global radar",
        title: "Brief signals with strategic impact.",
        text:
          "Weekly tracking to detect subtle changes with geopolitical and geoeconomic implications.",
        action: "View weekly radar",
        quickRead: "Quick read",
        open: "Open radar",
      },
      sectors: {
        eyebrow: "Themes / Sectors",
        title: "An editorial structure organized by capabilities and tensions.",
        text:
          "Sectors designed to follow the intersection of technology, economics, energy, diplomacy, and state power.",
        action: "View sectors",
      },
      regionsSection: {
        eyebrow: "Regions",
        title: "Regional coverage with a comparative lens.",
        text:
          "Each region has its own front page, featured article, latest texts, and key tags for interpreting its moves.",
        action: "Explore regions",
      },
      newsletter: {
        title:
          "Receive strategic analysis and key reads on the new global order.",
        description:
          "A curated newsletter for following geopolitics, international economics, technology, energy, and global reordering without unnecessary noise.",
      },
    },
    archive: {
      visibleResults: "visible results under the current filters.",
      structureSummary: "regions and sectors in the editorial structure.",
      openFeatured: "Open featured read",
      search: "Search",
      searchPlaceholder: "Title, region, tag, or sector",
      format: "Format",
      region: "Region",
      sector: "Sector",
      allRegions: "All regions",
      allSectors: "All sectors",
      applyFilters: "Apply filters",
      clear: "Clear",
      noResultsTitle: "No results for this combination.",
      noResultsText:
        "Try another region, another sector, or a broader search term.",
      resetFilters: "Reset filters",
      fullView: "Full editorial archive view.",
      searchLabel: "search",
      lockedFormatLabel: "Format",
    },
    radarPage: {
      demoDeliveries: "demo weekly radar editions for editorial tracking.",
      keySignals: "key signals per edition for a quick, useful read.",
      openReading: "Open read",
    },
    regionsPage: {
      eyebrow: "Regional map",
      title: "Regions with dedicated fronts and a strategic lens.",
      text:
        "Browse BRICS, Latin America, Russia and Eurasia, China and Asia, Europe, the Middle East, Africa, and the United States and the West.",
      mapped: "regions mapped for comparative reading.",
      covers: "Fronts",
      coversText:
        "each region combines description, featured reading, archive, and tags.",
      region: "Region",
      regionArticles: "demo articles related to the region.",
      keySectors: "key sectors connected to this coverage.",
      strategicDescription: "Strategic description",
      latestEyebrow: "Latest articles",
      latestTitle: (regionName) => `Recent reads on ${regionName}.`,
      latestText:
        "A selection of pieces to follow trends, risks, and opportunities in this region.",
    },
    sectorsPage: {
      eyebrow: "Sectors",
      title: "Editorial categories with a cross-cutting lens.",
      text:
        "Organize the archive by geoeconomics, technology, energy, security, diplomacy, and infrastructure to follow power where it actually operates.",
      curated: "curated sectors for a magazine + think tank platform.",
      filterLabel: "Regional filter",
      filterText:
        "each category lets you read the intersection between topic and geography.",
      filterByRegion: "Filter by region",
      apply: "Apply",
      applyFilter: "Apply filter",
      clear: "Clear",
      sector: "Sector",
      sectorArticles: "articles associated with the current filter.",
      connectedRegions: "regions connected to this category.",
      viewAll: "View all",
      noArticlesTitle: "No articles for this combination.",
      noArticlesText: "Try another region or return to the full sector view.",
      resetView: "Reset view",
    },
    articlePage: {
      back: "Back",
      byline: (name) => `By ${name}`,
      save: "Save",
      saved: "Saved",
      copyLink: "Copy link",
      relatedRegion: "Related region",
      openRegionalCover: "Open regional front",
      openRegionalMap: "Open regional map",
      tags: "Tags",
      newsletterTitle: "Receive new strategic reads in your inbox.",
      newsletterDescription:
        "Subscribe to follow analysis, opinión, and weekly radar with a clear editorial cadence.",
      relatedEyebrow: "Related",
      relatedTitle: "Keep reading within the same agenda.",
      relatedText: "Articles connected by region, sector, or editorial format.",
      fallbackAuthorName: "Editorial team",
      fallbackAuthorRole: "Geo Scope",
      fallbackRegionName: "Global coverage",
      fallbackRegionDescription:
        "Analysis tied to cross-cutting trends in the international system.",
      readArticle: "Read article",
      openSector: "Open sector",
    },
    aboutPage: {
      eyebrow: "About Geo Scope",
      title:
        "An editorial project for interpreting global change with depth, judgment, and clarity.",
      text: "Geo Scope combines the discipline of an independent think tank.",
      mission: "Mission",
      vision: "Vision",
      approach: "Approach",
      approachTitle: "Independent think tank and analysis platform.",
      approachText:
        "Geo Scope seeks to explain the world with an analytical, sober, and professional voice, avoiding sensationalism and the logic of a breaking-news portal.",
      manifestoEyebrow: "Editorial manifesto",
      manifestoTitle: "Why Geo Scope exists.",
      manifestoText:
        "A publication designed to think about power better, not to amplify noise.",
      manifestoPoint: (index) => `Point 0${index + 1}`,
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Collaborations, institutional inquiries, and editorial proposals.",
      text:
        "Geo Scope is designed to grow into a platform with more authors, more categories, and possible premium layers. This space serves as the first point of contact.",
      information: "Information and collaborations",
      approach: "Approach",
      approachText:
        "Strategic analysis, specialized opinión, and highly legible international tracking.",
      channels: "Channels",
      headline: "Let's talk.",
      body:
        "Write to us about general information, collaborations, content syndication, institutional partnerships, or questions about the platform's future development.",
      form: "Form",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "Contact topic",
      message: "Message",
      messagePlaceholder: "Tell us how we can help.",
      send: "Send inquiry",
    },
    subscriptionPage: {
      eyebrow: "Newsletter / Subscription",
      title:
        "Receive strategic analysis and key reads on the new global order.",
      text:
        "A subscription for readers who need clarity, depth, and an international lens on geopolitics, economics, technology, energy, and trade.",
      format: "Format",
      formatText: "Analysis, opinión, and weekly radar.",
      value: "Value",
      valueText: "Less noise, more judgment, and a better reading architecture.",
      panelTitle: "Editorial subscription",
      panelDescription:
        "Choose your thematic interests and build a reading experience better aligned with your agenda.",
    },
    expertsPage: {
      eyebrow: "Experts",
      title: "The founding expert and editorial vision of Geo Scope.",
      text:
        "Meet Javier Salazar Segales, Geo Scope's General Director & Founder, and the areas where he concentrates his analysis.",
      searchPlaceholder: "Search by name or specialty",
      all: "All",
      noResults: "No experts match this search.",
      openProfile: "View profile",
    },
    expertPage: {
      eyebrow: "Experts",
      about: "Biography",
      affiliations: "Affiliations",
      expertise: "Areas of expertise",
      languages: "Languages",
      education: "Education",
      directory: "Back to directory",
    },
    editorPage: {
      eyebrow: "Demo editorial desk",
      title: "A simple base for publishing new content in the future.",
      text:
        "This view works as an intermediate step toward a CMS: it lets you prepare an article, preview it locally, and generate a reusable base structure.",
      today: "Today",
      todayText:
        "Metadata in data/content.js and modular articles in data/articles/.",
      later: "Later",
      laterText: "Easy future migration to a headless CMS or multi-author desk.",
      draft: "New draft",
      titleLabel: "Title",
      subtitleLabel: "Subtitle",
      typeLabel: "Format",
      regionLabel: "Región",
      sectorLabel: "Sector",
      readTimeLabel: "Reading time",
      excerptLabel: "Excerpt",
      previewStructure: "Suggested structure",
      draftTitle: "New analysis on energy corridors",
      draftSubtitle:
        "A draft for measuring tone, visual hierarchy, and editorial consistency.",
      draftExcerpt:
        "A simple template for turning editorial ideas into new pieces within the Geo Scope architecture.",
      snippetIntro: "Article opening.",
      snippetHeading: "First section",
      snippetBody: "Main development.",
    },
    notFound: {
      title: "The page you are looking for is not available.",
      text:
        "Return to the homepage or open the editorial archive to keep exploring Geo Scope.",
      home: "Go home",
      archive: "Open archive",
    },
    newsletter: {
      eyebrow: "Newsletter",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      interests: "Thematic interests",
      join: "Join",
      subscribe: "Subscribe",
    },
    essaySections: {
      thesis: "Core thesis",
      why: "Why it matters",
      regional: "Regional lens",
      outlook: "What comes next",
      signals: "Key signals",
    },
    generic: {
      readingFallback: "Reading",
      regionFallback: "Región",
      sectorFallback: "Sector",
    },
    toasts: {
      favoriteSaved: "Article saved to favorites.",
      favoriteRemoved: "Article removed from favorites.",
      contactSaved:
        "Inquiry stored locally. Ready to connect to a backend.",
      newsletterSaved:
        "Subscription stored locally. Ready to connect to a real newsletter.",
      linkCopied: "Link copied to clipboard.",
      shareError: "This device could not share the article.",
    },
    meta: {
      readTime: (minutes) => `${minutes} min read`,
      shortMinutes: (minutes) => `${minutes} min`,
      articles: (count) => `${count} article${count === 1 ? "" : "s"}`,
      localeSwitcher: "Select language",
    },
    typeOptions: {
      all: "All formats",
    },
  },
  ru: {
    articleTypes: {
      analysis: "Analitika",
      opinion: "Mnenie",
      radar: "Ezhenedelnyy radar",
    },
    pageCopy: {
      analysis: {
        eyebrow: "Redaktsionnyy arkhiv",
        title: "Analitika s kontekstom, masshtabom i strategicheskim suzhdeniem.",
        description:
          "Izuchayte polnyy arkhiv Geo Scope s filtrami po regionam, sektoram i formatam, chtoby videt ne tolko zagolovki, no i povtoryayushchiesya uzory.",
      },
      opinion: {
        eyebrow: "Tochka zreniya",
        title: "Strategicheskoe mnenie s sobstvennym golosom.",
        description:
          "Kolonki i argumenty dlya chteniya mezhdunarodnoy sistemy cherez interesy, vozmozhnosti i posledstviya.",
      },
      radar: {
        eyebrow: "Ezhenedelnoe nablyudenie",
        title: "Globalnyy radar dlya poiska signalov do togo, kak slozhitsya konsensus.",
        description:
          "Kratkie materialy o dvizheniyakh, kotorye predvoshchayut geopoliticheskie, geoekonomicheskie i tekhnologicheskie sdvigi.",
      },
    },
    pageTitles: {
      home: "Globalnaya strategicheskaya analitika",
      analysis: "Analitika",
      opinion: "Mnenie",
      radar: "Ezhenedelnyy radar",
      regions: "Regiony",
      sectors: "Sektory",
      experts: "Eksperty",
      about: "O Geo Scope",
      contact: "Kontakt",
      subscription: "Podpiska",
      editor: "Redaktsionnaya panel",
      regionNotFound: "Region ne nayden",
      sectorNotFound: "Sektor ne nayden",
      articleNotFound: "Statya ne naydena",
      expertNotFound: "Ekspert ne nayden",
    },
    header: {
      menu: "Menyu",
      navAria: "Osnovnaya navigatsiya",
      utilityAria: "Bystryy dostup",
      search: "Poisk",
      subscription: "Podpiska",
      languageAria: "Yazyk",
    },
    footer: {
      sections: "Razdely",
      institutional: "Platforma",
      newsletter: "Rassylka",
      contactNote: "Obshchaya informatsiya i redaktsionnye sotrudnichestva.",
      newsletterNote:
        "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
      rightsReserved: "Vse prava zashchishcheny.",
      editorialPanel: "Redaktsionnaya panel",
    },
    home: {
      heroLead: "Strategicheskaya analitika",
      heroSubtitle:
        "Geopolitika, tekhnologii, ekonomika, energetika i mezhdunarodnaya torgovlya v yasnoy, strogo vyderzhannoy i dolgoy perspektive.",
      heroText:
        "Platforma dlya chteniya mezhdunarodnoy sistemy s kontekstom, suzhdeniem i strategicheskim fokusom.",
      explore: "Otkryt analitiku",
      subscribe: "Podpisatsya",
      trust: [
        "Redaktsionnaya platforma",
        "Tsentr analitiki",
        "Mezhdunarodnaya perspektiva",
      ],
      focus: "V fokuse",
      edition: "Vypusk",
      dossiers: "Dosye",
      regions: "Regiony",
      sectorsMetric: "Sektory",
      globalRadar: "Globalnyy radar",
      weeklyPriority: "Prioritetnyy material nedeli",
      weeklyPriorityFallback:
        "Kratkie dvizheniya s nakopitelnym vliyaniem na likvidnost, torgovlyu i strategicheskuyu konkurentsiyu.",
      openWeeklyRadar: "Otkryt radar nedeli",
      frontpage: {
        eyebrow: "Pervaya polosa",
        title: "Odin glavniy material i tri linii konteksta.",
        text:
          "Glavnaya stranitsa sochetaet vedushchuyu statyu i dopolnyayushchie materialy, chtoby dat bolee polnuyu kartinu globalnogo polya.",
      },
      latest: {
        eyebrow: "Poslednyaya analitika",
        title: "Nedavnie materialy so strategicheskoy plotnostyu.",
        text:
          "Glubokaya analitika dlya otslezhivaniya sdvigov vo vlasti, tsepochkakh stoimosti i tekhnologicheskoy konkurentsii.",
        action: "Smotret arkhiv",
      },
      radar: {
        eyebrow: "Globalnyy radar",
        title: "Kratkie signaly so strategicheskim effektom.",
        text:
          "Ezhenedelnoe nablyudenie za tonkimi sdvigami s geopoliticheskimi i geoekonomicheskimi posledstviyami.",
        action: "Smotret ezhenedelnyy radar",
        quickRead: "Bystroe chtenie",
        open: "Otkryt radar",
      },
      sectors: {
        eyebrow: "Temy / Sektory",
        title: "Redaktsionnaya struktura, organizovannaya po vozmozhnostyam i napryazheniyam.",
        text:
          "Sektory, sozdannye dlya otslezhivaniya peresecheniya tekhnologiy, ekonomiki, energetiki, diplomatii i gosudarstvennoy vlasti.",
        action: "Smotret sektory",
      },
      regionsSection: {
        eyebrow: "Regiony",
        title: "Regionalnoe pokrytie so sravnitelnym podkhodom.",
        text:
          "U kazhdogo regiona est sobstvennaya pervaya stranitsa, vedushchiy material, poslednie teksty i klyuchevye metki dlya interpretatsii ego dvizheniy.",
        action: "Izuchit regiony",
      },
      newsletter: {
        title:
          "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
        description:
          "Kuriruemaya rassylka po geopolitike, mezhdunarodnoy ekonomike, tekhnologiyam, energetike i globalnoy perestroike bez lishnego shuma.",
      },
    },
    archive: {
      visibleResults: "vidimykh rezultatov pri tekushchikh filtrakh.",
      structureSummary: "regionov i sektorov v redaktsionnoy strukture.",
      openFeatured: "Otkryt vedushchiy material",
      search: "Poisk",
      searchPlaceholder: "Zagolovok, region, metka ili sektor",
      format: "Format",
      region: "Region",
      sector: "Sektor",
      allRegions: "Vse regiony",
      allSectors: "Vse sektory",
      applyFilters: "Primenit filtry",
      clear: "Sbrosit",
      noResultsTitle: "Dlya etoy kombinatsii net rezultatov.",
      noResultsText:
        "Poprobuyte drugoy region, drugoy sektor ili bolee shirokiy poiskovyy zapros.",
      resetFilters: "Sbrosit filtry",
      fullView: "Polnyy vid redaktsionnogo arkhiva.",
      searchLabel: "poisk",
      lockedFormatLabel: "Format",
    },
    radarPage: {
      demoDeliveries:
        "demo-vypuskov ezhenedelnogo radara dlya redaktsionnogo monitoringa.",
      keySignals: "klyuchevykh signalov v kazhdom vypuske dlya bystrogo i poleznogo chteniya.",
      openReading: "Otkryt material",
    },
    regionsPage: {
      eyebrow: "Regionalnaya karta",
      title: "Regiony so svoimi pervymi stranitsami i strategicheskim fokusom.",
      text:
        "Perekhodite po BRICS, Latinskoy Amerike, Rossii i Evrazii, Kitayu i Azii, Evrope, Blizhnemu Vostoku, Afrike i SSHA i Zapadu.",
      mapped: "regionov, vystroennykh dlya sravnitelnogo chteniya.",
      covers: "Pervye stranitsy",
      coversText:
        "kazhdyy region sochetaet opisanie, vedushchiy material, arkhiv i metki.",
      region: "Region",
      regionArticles: "demo-statey, svyazannykh s regionom.",
      keySectors: "klyuchevykh sektorov, svyazannykh s etim pokrytiem.",
      strategicDescription: "Strategicheskoe opisanie",
      latestEyebrow: "Poslednie stati",
      latestTitle: (regionName) => `Nedavnie materialy o ${regionName}.`,
      latestText:
        "Podborka tekstov dlya otslezhivaniya trendov, riskov i vozmozhnostey v etom regione.",
    },
    sectorsPage: {
      eyebrow: "Sektory",
      title: "Redaktsionnye kategorii s skvoznym vzglyadom.",
      text:
        "Organizuyte arkhiv po geoekonomike, tekhnologiyam, energetike, bezopasnosti, diplomatii i infrastrukture, chtoby sledit za siloy tam, gde ona deystvitelno rabotaet.",
      curated: "kuriruemykh sektorov dlya platformy formata magazine + think tank.",
      filterLabel: "Regionalnyy filtr",
      filterText:
        "kazhdaya kategoriya pozvolyaet chitat peresechenie temy i geografii.",
      filterByRegion: "Filter po regionu",
      apply: "Primenit",
      applyFilter: "Primenit filtr",
      clear: "Sbrosit",
      sector: "Sektor",
      sectorArticles: "statey, svyazannykh s tekushchim filtrom.",
      connectedRegions: "regionov, svyazannykh s etoy kategoriyey.",
      viewAll: "Pokazat vse",
      noArticlesTitle: "Dlya etoy kombinatsii net statey.",
      noArticlesText:
        "Poprobuyte drugoy region ili vernites k polnomu vidu sektora.",
      resetView: "Sbrosit vid",
    },
    articlePage: {
      back: "Nazad",
      byline: (name) => `Avtor: ${name}`,
      save: "Sokhranit",
      saved: "Sokhraneno",
      copyLink: "Kopirovat ssylku",
      relatedRegion: "Svyazannyy region",
      openRegionalCover: "Otkryt regionalnuyu pervuyu stranicu",
      openRegionalMap: "Otkryt kartu regionov",
      tags: "Metki",
      newsletterTitle: "Poluchayte novye strategicheskie teksty na pochty.",
      newsletterDescription:
        "Podpisyvaytes, chtoby poluchat analitiku, mneniya i ezhenedelnyy radar v yasnom redaktsionnom ritme.",
      relatedEyebrow: "Svyazannoe",
      relatedTitle: "Prodolzhayte chtenie v ramkakh toy zhe povestki.",
      relatedText: "Materialy, svyazannye regionom, sektorom ili redaktsionnym formatom.",
      fallbackAuthorName: "Redaktsionnaya komanda",
      fallbackAuthorRole: "Geo Scope",
      fallbackRegionName: "Globalnoe pokrytie",
      fallbackRegionDescription:
        "Analitika, svyazannaya so skvoznymi tendentsiyami mezhdunarodnoy sistemy.",
      readArticle: "Chitat statyu",
      openSector: "Otkryt sektor",
    },
    aboutPage: {
      eyebrow: "O Geo Scope",
      title:
        "Redaktsionnyy proekt dlya interpretatsii globalnykh peremen s glubinoy, strategicheskim suzhdeniem i yasnostyu.",
      text: "Geo Scope sochetaet distsiplinu nezavisimogo think tank.",
      mission: "Missiya",
      vision: "Videnie",
      approach: "Podkhod",
      approachTitle: "Nezavisimyy think tank i platforma analitiki.",
      approachText:
        "Geo Scope stremitsya obyasnyat mir analitichnym, sderzhannym i professionalnym golosom, izbegaya sensatsionnosti i logiki novostnogo portala bystrogo tsikla.",
      manifestoEyebrow: "Redaktsionnyy manifest",
      manifestoTitle: "Zachem sushchestvuet Geo Scope.",
      manifestoText:
        "Izdatelskiy proekt dlya bolee glubokogo ponimaniya vlasti, a ne dlya usileniya shuma.",
      manifestoPoint: (index) => `Punkt 0${index + 1}`,
    },
    contactPage: {
      eyebrow: "Kontakt",
      title:
        "Sotrudnichestvo, institutsionalnye zaprosy i redaktsionnye predlozheniya.",
      text:
        "Geo Scope zaduman kak platforma, kotoraya mozhet vyrasti v proekt s bolshim kolichestvom avtorov, kategoriy i vozmozhnymi premium-urovnyami. Eto prostranstvo sluzhit nachalnoy tochkoy kontakta.",
      information: "Informatsiya i sotrudnichestvo",
      approach: "Podkhod",
      approachText:
        "Strategicheskaya analitika, spetsializirovannoe mnenie i mezhdunarodnyy monitoring s vysokoy yasnostyu.",
      channels: "Kanaly",
      headline: "Davaite pogovorim.",
      body:
        "Napishite nam po voprosam obshchey informatsii, sotrudnichestva, sindikatsii kontenta, institutsionalnykh partnerstv ili budushchego razvitiya platformy.",
      form: "Forma",
      name: "Imya",
      namePlaceholder: "Vashe imya",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Tema",
      subjectPlaceholder: "Tema obrashcheniya",
      message: "Soobshchenie",
      messagePlaceholder: "Rasskazhite, chem my mozhem pomoch.",
      send: "Otpravit zapros",
    },
    subscriptionPage: {
      eyebrow: "Rassylka / Podpiska",
      title:
        "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
      text:
        "Podpiska dlya chitateley, kotorym nuzhny yasnost, glubina i mezhdunarodnyy vzglyad na geopolitiku, ekonomiku, tekhnologii, energetiku i torgovlyu.",
      format: "Format",
      formatText: "Analitika, mnenie i ezhenedelnyy radar.",
      value: "Tsennost",
      valueText:
        "Menshe shuma, bolshe strategicheskogo suzhdeniya i luchshaya arkhitektura chteniya.",
      panelTitle: "Redaktsionnaya podpiska",
      panelDescription:
        "Vyberite tematicheskie interesy i soberite chtenie, luchshe sootvetstvuyushchee vashey povestke.",
    },
    expertsPage: {
      eyebrow: "Eksperty",
      title: "Osnovnoy ekspert i redaktsionnoe videnie Geo Scope.",
      text:
        "Poznakomtes s Khavierom Salazarom Segalesom, generalnym direktorom i osnovatelem Geo Scope, a takzhe s oblastyami, na kotorykh sosredotochena ego analitika.",
      searchPlaceholder: "Poisk po imeni ili spetsializatsii",
      all: "Vse",
      noResults: "Po etomu zaprosu ekspertov ne naydeno.",
      openProfile: "Otkryt profil",
    },
    expertPage: {
      eyebrow: "Eksperty",
      about: "Biografiya",
      affiliations: "Affiliatsii",
      expertise: "Oblasti ekspertizy",
      languages: "Yazyki",
      education: "Obrazovanie",
      directory: "Nazad k katalogu",
    },
    editorPage: {
      eyebrow: "Demo-redaktsionnaya panel",
      title: "Prostaya osnova dlya publikatsii novogo kontenta v budushchem.",
      text:
        "Eta stranitsa sluzhit promyuzhutochnym shagom k CMS: ona pozvolyaet podgotovit statyu, posmotret lokalnyy prevyu i sozdavat povtoryaemuyu bazovuyu strukturu.",
      today: "Segodnya",
      todayText:
        "Metadannye v data/content.js i modulnye stati v data/articles/.",
      later: "Pozzhe",
      laterText: "Budushchiy prostoy perekhod na headless CMS ili multi-author panel.",
      draft: "Novyy chernovik",
      titleLabel: "Zagolovok",
      subtitleLabel: "Podzagolovok",
      typeLabel: "Format",
      regionLabel: "Región",
      sectorLabel: "Sektor",
      readTimeLabel: "Vremya chteniya",
      excerptLabel: "Vyderzhka",
      previewStructure: "Predlagaemaya struktura",
      draftTitle: "Novaya analitika o energeticheskikh koridorakh",
      draftSubtitle:
        "Chernovik dlya otsenki tona, vizualnoy ierarkhii i redaktsionnoy posledovatelnosti.",
      draftExcerpt:
        "Prostoy shablon dlya prevrashcheniya redaktsionnykh idey v novye materialy v arkhitekture Geo Scope.",
      snippetIntro: "Vstuplenie k state.",
      snippetHeading: "Pervyy razdel",
      snippetBody: "Osnovnaya razrabotka.",
    },
    notFound: {
      title: "Stranitsa, kotoruyu vy ishchete, nedostupna.",
      text:
        "Vernites na glavnuyu ili otkroyte redaktsionnyy arkhiv, chtoby prodolzhit znakomstvo s Geo Scope.",
      home: "Na glavnuyu",
      archive: "Otkryt arkhiv",
    },
    newsletter: {
      eyebrow: "Rassylka",
      name: "Imya",
      namePlaceholder: "Vashe imya",
      email: "Email",
      emailPlaceholder: "you@email.com",
      interests: "Tematicheskie interesy",
      join: "Prisoedinitsya",
      subscribe: "Podpisatsya",
    },
    essaySections: {
      thesis: "Klyuchevaya tezis",
      why: "Pochemu eto vazhno",
      regional: "Regionalnyy rakurs",
      outlook: "Chto dalshe",
      signals: "Klyuchevye signaly",
    },
    generic: {
      readingFallback: "Material",
      regionFallback: "Región",
      sectorFallback: "Sektor",
    },
    toasts: {
      favoriteSaved: "Statya sokhranena v izbrannoe.",
      favoriteRemoved: "Statya udalyena iz izbrannogo.",
      contactSaved:
        "Zapros sokhranen lokalno. Gotovo k podklyucheniyu backend.",
      newsletterSaved:
        "Podpiska sokhranena lokalno. Gotovo k integratsii s realnoy rassylkoy.",
      linkCopied: "Ssylka skopirovana v bufer obmena.",
      shareError: "Na etom ustroystve ne udalos podelitsya statey.",
    },
    meta: {
      readTime: (minutes) => `${minutes} min chteniya`,
      shortMinutes: (minutes) => `${minutes} min`,
      articles: (count) => `${count} ${russianPlural(count, "statya", "stati", "statey")}`,
      localeSwitcher: "Vybor yazyka",
    },
    typeOptions: {
      all: "Vse formaty",
    },
  },
};

uiCopy.zh = mergeLocaleData(uiCopy.en, {
  articleTypes: {
    analysis: "分析",
    opinion: "观点",
    radar: "每周雷达",
  },
  pageCopy: {
    analysis: {
      eyebrow: "编辑档案",
      title: "带着背景、尺度与判断的分析。",
      description:
        "通过地区、板块和格式筛选浏览 Geo Scope 全部内容，看到的不是零散标题，而是更深层的结构性趋势。",
    },
    opinion: {
      eyebrow: "观点",
      title: "有清晰立场的战略评论。",
      description:
        "以利益、能力与后果为线索，解读国际体系的评论与论证。",
    },
    radar: {
      eyebrow: "每周跟踪",
      title: "在共识形成之前识别信号的全球雷达。",
      description:
        "简短阅读，捕捉预示地缘政治、地缘经济和技术变化的动态。",
    },
  },
  pageTitles: {
    home: "全球战略分析",
    analysis: "分析",
    opinion: "观点",
    radar: "每周雷达",
    regions: "地区",
    sectors: "板块",
    experts: "专家",
    about: "关于 Geo Scope",
    contact: "联系",
    subscription: "订阅",
    editor: "编辑台",
    regionNotFound: "未找到地区",
    sectorNotFound: "未找到板块",
    articleNotFound: "未找到文章",
    expertNotFound: "未找到该专家",
  },
  header: {
    menu: "菜单",
    navAria: "主导航",
    utilityAria: "快捷入口",
    search: "搜索",
    subscription: "订阅",
    languageAria: "语言",
  },
  footer: {
    sections: "栏目",
    institutional: "机构信息",
    newsletter: "通讯",
    contactNote: "一般信息与编辑合作联系。",
    newsletterNote: "接收关于全球新秩序的战略分析与关键阅读。",
    rightsReserved: "保留所有权利。",
    editorialPanel: "编辑台",
  },
  home: {
    heroLead: "战略分析",
    heroSubtitle:
      "以清晰、克制且长期的视角解读地缘政治、技术、经济、能源与国际贸易。",
    heroText:
      "一个帮助你以判断力、背景感与战略焦点阅读国际体系的平台。",
    explore: "浏览分析",
    subscribe: "立即订阅",
    trust: ["编辑平台", "分析中心", "国际视角"],
    focus: "焦点",
    edition: "期数",
    dossiers: "专题",
    regions: "地区",
    sectorsMetric: "板块",
    globalRadar: "全球雷达",
    weeklyPriority: "本周重点阅读",
    weeklyPriorityFallback:
      "简短但具有累积影响的变化，牵动流动性、贸易与战略竞争。",
    openWeeklyRadar: "打开每周雷达",
    frontpage: {
      eyebrow: "首页封面",
      title: "一篇主读与三条背景线索。",
      text:
        "首页将一篇重点文章与补充内容并置，帮助你更完整地理解全球棋盘。",
    },
    latest: {
      eyebrow: "最新分析",
      title: "近期值得读的战略内容。",
      text:
        "跟踪权力转移、价值链重组与技术竞争的深度分析。",
      action: "查看档案",
    },
    radar: {
      eyebrow: "全球雷达",
      title: "短讯号，长影响。",
      text:
        "每周跟踪那些细微但具有地缘政治与地缘经济含义的变化。",
      action: "查看每周雷达",
      quickRead: "快速阅读",
      open: "打开雷达",
    },
    sectors: {
      eyebrow: "主题 / 板块",
      title: "围绕能力与张力组织起来的编辑结构。",
      text:
        "围绕技术、经济、能源、外交与国家能力的交汇处来组织阅读。",
      action: "查看板块",
    },
    regionsSection: {
      eyebrow: "地区",
      title: "带有比较视角的地区覆盖。",
      text:
        "每个地区都有自己的首页、重点文章、最新内容与关键标签。",
      action: "探索地区",
    },
    newsletter: {
      title: "接收关于全球新秩序的战略分析与关键阅读。",
      description:
        "一份精选通讯，帮助你在不被噪音干扰的情况下追踪地缘政治、国际经济、技术、能源与全球重组。",
    },
  },
  archive: {
    visibleResults: "条符合当前筛选条件的结果。",
    structureSummary: "个地区与板块构成当前编辑结构。",
    openFeatured: "打开重点文章",
    search: "搜索",
    searchPlaceholder: "标题、地区、标签或板块",
    format: "格式",
    region: "地区",
    sector: "板块",
    allRegions: "所有地区",
    allSectors: "所有板块",
    applyFilters: "应用筛选",
    clear: "清除",
    noResultsTitle: "当前组合没有结果。",
    noResultsText: "请尝试其他地区、板块或更宽泛的搜索词。",
    resetFilters: "重置筛选",
    fullView: "完整的编辑档案视图。",
    searchLabel: "搜索",
    lockedFormatLabel: "格式",
  },
  radarPage: {
    demoDeliveries: "用于编辑跟踪的每周雷达示例期数。",
    keySignals: "每期的关键信号，方便快速阅读。",
    openReading: "打开文章",
  },
  regionsPage: {
    eyebrow: "地区地图",
    title: "拥有独立首页与战略视角的地区。",
    text:
      "浏览 BRICS、拉丁美洲、俄罗斯与欧亚、中国与亚洲、欧洲、中东、非洲，以及美国与西方。",
    mapped: "个用于比较阅读的地区。",
    covers: "首页",
    coversText: "每个地区都结合了简介、重点文章、档案与标签。",
    region: "地区",
    regionArticles: "篇与该地区相关的示例文章。",
    keySectors: "个与该覆盖相关的关键板块。",
    strategicDescription: "战略简介",
    latestEyebrow: "最新文章",
    latestTitle: (regionName) => `关于 ${regionName} 的近期阅读。`,
    latestText: "用于跟踪该地区趋势、风险与机会的精选内容。",
  },
  sectorsPage: {
    eyebrow: "板块",
    title: "具有横向视野的编辑分类。",
    text:
      "按地缘经济、技术、能源、安全、外交与基础设施组织档案，在权力真正运作的地方追踪权力。",
    curated: "个为 magazine + think tank 平台策划的板块。",
    filterLabel: "地区筛选",
    filterText: "每个分类都帮助你交叉阅读主题与地理。",
    filterByRegion: "按地区筛选",
    apply: "应用",
    applyFilter: "应用筛选",
    clear: "清除",
    sector: "板块",
    sectorArticles: "篇与当前筛选相关的文章。",
    connectedRegions: "个与该类别相关联的地区。",
    viewAll: "查看全部",
    noArticlesTitle: "该组合下没有文章。",
    noArticlesText: "请尝试其他地区，或返回该板块的完整视图。",
    resetView: "重置视图",
  },
  articlePage: {
    back: "返回",
    byline: (name) => `作者：${name}`,
    save: "收藏",
    saved: "已收藏",
    copyLink: "复制链接",
    relatedRegion: "相关地区",
    openRegionalCover: "打开地区首页",
    openRegionalMap: "打开地区地图",
    tags: "标签",
    newsletterTitle: "将新的战略阅读直接发送到你的邮箱。",
    newsletterDescription:
      "订阅后可持续接收分析、观点与每周雷达，保持清晰而稳定的编辑节奏。",
    relatedEyebrow: "相关阅读",
    relatedTitle: "继续阅读同一议题。",
    relatedText: "按地区、板块或编辑格式关联的内容。",
    fallbackAuthorName: "编辑团队",
    fallbackAuthorRole: "Geo Scope",
    fallbackRegionName: "全球覆盖",
    fallbackRegionDescription: "与国际体系横向趋势相关的分析。",
    readArticle: "阅读全文",
    openSector: "打开板块",
  },
  aboutPage: {
    eyebrow: "关于 Geo Scope",
    title: "一个以深度、判断力与清晰度解读全球变化的编辑项目。",
    text: "Geo Scope 结合了独立智库的纪律性。",
    mission: "使命",
    vision: "愿景",
    approach: "方法",
    approachTitle: "独立智库与分析平台。",
    approachText:
      "Geo Scope 以分析性、克制且专业的声音解释世界，避免煽情与快讯式新闻门户的逻辑。",
    manifestoEyebrow: "编辑宣言",
    manifestoTitle: "Geo Scope 为什么存在。",
    manifestoText: "它存在是为了更好地思考权力，而不是放大噪音。",
    manifestoPoint: (index) => `要点 0${index + 1}`,
  },
  contactPage: {
    eyebrow: "联系",
    title: "合作、机构咨询与编辑提案。",
    text:
      "Geo Scope 被设计为一个可扩展的平台，未来可以拥有更多作者、更多分类以及可能的高级层级。这里是最初的联系入口。",
    information: "信息与合作",
    approach: "定位",
    approachText: "高可读性的战略分析、专业评论与国际跟踪。",
    channels: "渠道",
    headline: "欢迎联系。",
    body:
      "你可以就一般信息、合作、内容联合发布、机构伙伴关系或平台未来发展等问题与我们联系。",
    form: "表单",
    name: "姓名",
    namePlaceholder: "你的姓名",
    email: "邮箱",
    emailPlaceholder: "you@email.com",
    subject: "主题",
    subjectPlaceholder: "联系主题",
    message: "留言",
    messagePlaceholder: "告诉我们我们可以如何帮助你。",
    send: "发送咨询",
  },
  subscriptionPage: {
    eyebrow: "通讯 / 订阅",
    title: "接收关于全球新秩序的战略分析与关键阅读。",
    text:
      "面向需要清晰、深度和国际视角的读者，聚焦地缘政治、经济、技术、能源与贸易。",
    format: "形式",
    formatText: "分析、观点与每周雷达。",
    value: "价值",
    valueText: "更少噪音、更多判断，以及更好的阅读结构。",
    panelTitle: "编辑订阅",
    panelDescription:
      "选择你的主题兴趣，构建更符合你阅读议程的体验。",
  },
  expertsPage: {
    eyebrow: "专家",
    title: "Geo Scope 的创始专家与编辑视角。",
    text:
      "认识 Javier Salazar Segales，Geo Scope 总经理兼创始人，了解他的专长领域与分析重点。",
    searchPlaceholder: "按姓名或专长搜索",
    all: "全部",
    noResults: "没有符合当前搜索条件的专家。",
    openProfile: "查看资料",
  },
  expertPage: {
    eyebrow: "专家",
    about: "个人简介",
    affiliations: "所属与职务",
    expertise: "专长领域",
    languages: "语言",
    education: "教育背景",
    directory: "返回专家目录",
  },
  editorPage: {
    eyebrow: "演示编辑台",
    title: "为未来发布新内容准备的一套简单基础。",
    text:
      "这个视图是通往 CMS 的中间步骤：它允许你准备文章、在本地预览，并生成可重复使用的基础结构。",
    today: "现在",
    todayText: "元数据在 data/content.js，模块化文章在 data/articles/。",
    later: "之后",
    laterText: "未来可轻松迁移到 headless CMS 或多作者编辑台。",
    draft: "新草稿",
    titleLabel: "标题",
    subtitleLabel: "副标题",
    typeLabel: "格式",
    regionLabel: "地区",
    sectorLabel: "板块",
    readTimeLabel: "阅读时间",
    excerptLabel: "摘要",
    previewStructure: "建议结构",
    draftTitle: "关于能源走廊的新分析",
    draftSubtitle: "一个用于测试语调、视觉层级和编辑一致性的草稿。",
    draftExcerpt:
      "一个简单模板，用于把编辑想法转化为 Geo Scope 架构中的新文章。",
    snippetIntro: "文章开头。",
    snippetHeading: "第一部分",
    snippetBody: "主体展开。",
  },
  notFound: {
    title: "你要找的页面暂时不可用。",
    text: "返回首页或打开编辑档案，继续浏览 Geo Scope。",
    home: "返回首页",
    archive: "打开档案",
  },
  newsletter: {
    eyebrow: "通讯",
    name: "姓名",
    namePlaceholder: "你的姓名",
    email: "邮箱",
    emailPlaceholder: "you@email.com",
    interests: "主题兴趣",
    join: "加入",
    subscribe: "订阅",
  },
  essaySections: {
    thesis: "核心论点",
    why: "为什么重要",
    regional: "地区视角",
    outlook: "接下来会怎样",
    signals: "关键信号",
  },
  generic: {
    readingFallback: "阅读",
    regionFallback: "地区",
    sectorFallback: "板块",
  },
  toasts: {
    favoriteSaved: "文章已加入收藏。",
    favoriteRemoved: "文章已从收藏中移除。",
    contactSaved: "咨询已保存在本地，可随时接入后端。",
    newsletterSaved: "订阅已保存在本地，可随时接入真实通讯服务。",
    linkCopied: "链接已复制到剪贴板。",
    shareError: "此设备无法分享该文章。",
  },
  meta: {
    readTime: (minutes) => `${minutes} 分钟阅读`,
    shortMinutes: (minutes) => `${minutes} 分钟`,
    articles: (count) => `${count} 篇文章`,
    localeSwitcher: "选择语言",
  },
  typeOptions: {
    all: "所有格式",
  },
});

const xiPutinArticleTranslations = {
  en: {
    title:
      "Xi and Putin in Beijing: the strategic cooperation reshaping the global balance",
    subtitle:
      "After receiving Trump, China reaffirmed its coordination with Russia. The diplomatic sequence shows that Beijing is not choosing between Washington and Moscow: it negotiates with both to widen its room for maneuver.",
    excerpt:
      "Vladimir Putin's visit to Beijing confirmed that China wants to manage rivalry with the United States without abandoning its strategic partnership with Russia. That combination helps explain the new global balance.",
    tags: [
      "Xi Jinping",
      "Vladimir Putin",
      "China",
      "Russia",
      "Beijing",
      "energy",
      "multipolarity",
      "diplomacy",
    ],
    bodySections: [
      {
        paragraphs: [
          "The meeting between Xi Jinping and Vladimir Putin in Beijing was not just another bilateral visit. It was the public confirmation of a strategic cooperation that China and Russia want to present as stable, durable, and useful for an international order less centered on the West.",
          "The sequence matters. Beijing first received Donald Trump to manage rivalry with the United States and, days later, received Putin to reaffirm that any stabilization with Washington does not imply abandoning coordination with Moscow.",
          "The central thesis is clear: China is not choosing between Trump and Putin. It is using its relationship with both to expand its diplomatic, economic, and strategic margin. With the United States it manages competition. With Russia it consolidates coordination. With the Global South it projects multipolar leadership.",
        ],
        callouts: [
          "Beijing wants to show that it can talk to Washington without weakening its strategic link with Moscow.",
        ],
      },
      {
        heading: "Two visits, two messages",
        paragraphs: [
          "Comparing Trump's and Putin's visits helps clarify China's strategy. With Trump, the meeting was framed by managed rivalry: diplomatic gestures, business presence, commercial expectations, and a need to reduce uncertainty.",
          "With Putin, the density was different: a broad joint statement, cooperation documents, longer bilateral talks, and a stagecraft designed to confirm strategic continuity.",
          "That does not mean Trump matters less than Putin to China. It means Beijing uses different formats depending on the interlocutor. With the United States it needs to avoid rupture. With Russia it needs to show that the strategic partnership remains intact.",
        ],
      },
      {
        heading: "The diplomacy of closeness",
        paragraphs: [
          "Putin's visit had a distinct symbolic dimension. Beyond protocol, it included gestures of personal closeness: tea, references to enduring friendship, cultural elements, and a narrative of confidence between leaders.",
          "In Chinese diplomacy, those details are not ornamental. Tea, shared cuisine, and historical symbols communicate calm, continuity, and political proximity. With Trump, Beijing managed a rivalry. With Putin, it staged a relationship of trust.",
          "That contrast reinforces the idea that China speaks different strategic languages depending on the board. With Washington it combines negotiation and containment. With Moscow it adds political memory, personal bond, and long-term projection.",
        ],
        callouts: [
          "With Trump the logic was transactional; with Putin it was relational and strategic.",
        ],
      },
      {
        heading: "The official Chinese narrative",
        paragraphs: [
          "From China's perspective, the visit was presented as confirmation of friendship, political trust, and strategic coordination. Beijing emphasized the historical continuity of the relationship, the extension of the bilateral treaty, and the intention to deepen cooperation.",
          "The language matters. China does not describe its relationship with Russia as a tactical response to the West, but as a stable architecture with its own institutional basis.",
          "That point is central to Beijing's external projection: to show that its link with Moscow does not depend only on Ukraine, sanctions, or the deterioration of ties with the United States.",
        ],
      },
      {
        heading: "The Russian narrative: Moscow is not isolated",
        paragraphs: [
          "For Russia, the visit had obvious strategic value. Putin traveled to Beijing to show that Moscow still has direct access to the Chinese leadership and that Western isolation does not equal global isolation.",
          "In the Kremlin's reading, the relationship with China is key to sustaining energy exports, deepening technological cooperation, and reinforcing the narrative of a multipolar world.",
          "The message to the West is straightforward: Russia may have lost part of its access to European markets, but it has strengthened its Eurasian orientation and still has a partner of enormous economic and diplomatic weight.",
        ],
        callouts: [
          "The open question is whether Russia is consolidating a balanced partnership or becoming ever more dependent on China.",
        ],
      },
      {
        heading: "Energy: deep cooperation, but not symmetrical",
        paragraphs: [
          "The China-Russia relationship rests on a very concrete material base: energy, trade, infrastructure, and supply security. Russia needs to sell oil and gas to Asia. China needs diversified suppliers and stable energy flows.",
          "That complementarity explains why energy and trade remain at the center of the relationship. But the relationship is not symmetrical: Russia needs China more urgently than China needs Russia.",
          "That is why, even in strategic gas projects, Beijing negotiates from a stronger position. China buys, but it sets timing, terms, and conditions with more room than Moscow.",
        ],
        callouts: [
          "Energy cooperation is deep, but bargaining power inside the relationship is unevenly distributed.",
        ],
      },
      {
        heading: "Technology, artificial intelligence, and strategic autonomy",
        paragraphs: [
          "China-Russia coordination is not limited to energy. It also reaches technology, artificial intelligence, digital innovation, cybersecurity, and defense capabilities.",
          "This dimension matters because it connects directly to competition with the United States. Washington retains advantages in advanced semiconductors, software, digital platforms, and financial capital. China seeks technological autonomy. Russia, despite sanctions, still retains capabilities in defense, cybersecurity, and strategic systems.",
          "Their technological cooperation does not mean they can quickly replace the Western ecosystem, but it can reduce vulnerabilities to sanctions, export controls, and dependence on infrastructure dominated by the United States.",
        ],
      },
      {
        heading: "Defense, security, and Golden Dome",
        paragraphs: [
          "One common analytical mistake is to describe the China-Russia relationship as a classic military alliance. It is not. China avoids formal commitments that would reduce its room for maneuver. But it is not merely an economic relationship either.",
          "The most accurate formula is deep strategic coordination without a full formal alliance. That is visible in issues such as missile defense, nuclear stability, the Asia-Pacific, and Western pressure.",
          "The U.S. Golden Dome project captures that convergence well. For Washington it is a national-defense bet. For Moscow and Beijing, a system on that scale could affect strategic balance by altering the credibility of nuclear deterrence.",
        ],
        callouts: [
          "China and Russia do not need a formal military alliance to coordinate when they perceive common threats.",
        ],
      },
      {
        heading: "The Middle East and Iran",
        paragraphs: [
          "The meeting must also be read through the Middle East. China and Russia have ties with Iran, energy interests in the Gulf, and a direct concern with the stability of the Strait of Hormuz.",
          "China does not want to fully assume the role of regional security guarantor, but it does want to shape outcomes. Russia, for its part, wants to preserve diplomatic relevance in a region where the United States has long held dominant weight.",
          "Both converge around the idea of a regional order less exclusively defined by Western pressure and around linking regional stability to global energy security. For Beijing, that is part of a diplomacy of influence without overexposure.",
        ],
      },
      {
        heading: "Implications for Latin America",
        paragraphs: [
          "For Latin America, this meeting is not a distant issue. China-Russia coordination affects energy, food, fertilizers, finance, technology, defense, and global governance.",
          "China is a key trade partner for several Latin American countries. Russia still has a presence in energy, defense, fertilizers, and diplomacy. The United States remains the hemisphere's financial, political, and technological center.",
          "If rivalry among these poles deepens, the region could gain more bargaining room, but it could also face stronger pressure to align. Multipolarity does not guarantee autonomy when there is no strategy of its own.",
        ],
        callouts: [
          "Latin America's opportunity lies in negotiating with more room, not in becoming trapped between external agendas.",
        ],
      },
      {
        heading: "BRICS and the Global South",
        paragraphs: [
          "The Xi-Putin meeting reinforces the multipolar narrative. China and Russia seek to present themselves as defenders of a more balanced international order, with greater weight for the Global South and less Western predominance.",
          "But narrative is not enough. The challenge for the BRICS and the Global South is to turn discourse into institutions: payment systems, financing, infrastructure, technological cooperation, and governance mechanisms.",
          "The China-Russia relationship may help drive that agenda, but it also raises questions. Multipolarity can open space for emerging actors, but it can also reproduce new hierarchies if it revolves too heavily around Beijing and Moscow.",
        ],
      },
      {
        heading: "Possible scenarios",
        subsections: [
          {
            heading: "1. Deeper China-Russia coordination",
            paragraphs: [
              "Beijing and Moscow deepen cooperation in energy, defense, technology, alternative payments, and global diplomacy. The China-Russia axis gains structural weight inside the multipolar order.",
            ],
          },
          {
            heading: "2. Pragmatic cooperation with limits",
            paragraphs: [
              "The relationship strengthens, but China avoids excessive commitments to Russia and preserves room to negotiate with the United States, Europe, and other poles.",
            ],
          },
          {
            heading: "3. Stronger Western pressure and faster alignment",
            paragraphs: [
              "If Washington and its allies harden sanctions, technology controls, or military pressure, China and Russia could accelerate their strategic coordination even further.",
            ],
          },
          {
            heading: "4. China as mediator between blocs",
            paragraphs: [
              "Beijing maintains dialogue with both Washington and Moscow, projecting itself as a balancing center among major powers without breaking with either side.",
            ],
          },
          {
            heading: "5. Fragmented multipolarity",
            paragraphs: [
              "The international system moves toward partially separated technological, financial, and military blocs. Emerging countries face stronger pressure to choose partners and frameworks of insertion.",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The Xi-Putin meeting in Beijing was a confirmation of strategic cooperation. It was not just a display of personal friendship or a temporary reaction to the United States. It was a signal of institutionalization in a relationship that both countries want to present as a pillar of the new global balance.",
          "But it was also a sign of asymmetry. Russia needs China to sell energy, sustain markets, and resist isolation. China needs Russia as a strategic partner, energy supplier, and counterweight to the West, but it retains greater room for maneuver.",
          "The diplomatic sequence is revealing: first Trump, then Putin. Beijing manages rivalry with Washington and confirms coordination with Moscow. China does not choose between them. It negotiates with both.",
        ],
      },
      {
        heading: "Open questions",
        bullets: [
          "Is China mediating among major powers or maximizing its own room for maneuver?",
          "Is Russia a strategic partner for China or an increasingly dependent one?",
          "Can the United States stabilize its relationship with China without accepting the permanence of the China-Russia axis?",
          "Can the Global South benefit from this multipolarity, or will it only receive more pressure?",
        ],
      },
    ],
  },

  ru: {
    title:
      "Си и Путин в Пекине: стратегическое сотрудничество, меняющее глобальный баланс",
    subtitle:
      "После приема Трампа Китай вновь подтвердил координацию с Россией. Эта дипломатическая последовательность показывает: Пекин не выбирает между Вашингтоном и Москвой, а ведет переговоры с обоими, чтобы расширить собственный маневр.",
    excerpt:
      "Визит Владимира Путина в Пекин подтвердил, что Китай хочет управлять соперничеством с Соединенными Штатами, не отказываясь от стратегического партнерства с Россией. Именно эта комбинация помогает объяснить новый глобальный баланс.",
    tags: [
      "Си Цзиньпин",
      "Владимир Путин",
      "Китай",
      "Россия",
      "Пекин",
      "энергия",
      "многополярность",
      "дипломатия",
    ],
    bodySections: [
      {
        paragraphs: [
          "Встреча Си Цзиньпина и Владимира Путина в Пекине не была очередным двусторонним визитом. Она стала публичным подтверждением стратегического сотрудничества, которое Китай и Россия хотят представить как устойчивое, долговременное и полезное для международного порядка, менее сосредоточенного на Западе.",
          "Последовательность важна. Сначала Пекин принял Дональда Трампа, чтобы управлять соперничеством с Соединенными Штатами, а спустя несколько дней принял Путина, чтобы подчеркнуть: любая стабилизация с Вашингтоном не означает отказа от координации с Москвой.",
          "Главный тезис ясен: Китай не выбирает между Трампом и Путиным. Он использует отношения с обоими для расширения собственного дипломатического, экономического и стратегического пространства. С США он управляет конкуренцией. С Россией укрепляет координацию. Для Глобального Юга он проецирует образ лидера многополярности.",
        ],
        callouts: [
          "Пекин хочет показать, что может разговаривать с Вашингтоном, не ослабляя стратегическую связку с Москвой.",
        ],
      },
      {
        heading: "Два визита, два сигнала",
        paragraphs: [
          "Сопоставление визитов Трампа и Путина помогает понять китайскую стратегию. В случае Трампа логика была логикой управляемого соперничества: дипломатические жесты, бизнес-делегация, торговые ожидания и необходимость снизить неопределенность.",
          "С Путиным плотность была иной: широкое совместное заявление, документы о сотрудничестве, более длинные двусторонние переговоры и постановка, направленная на подтверждение стратегической непрерывности.",
          "Это не значит, что Трамп для Китая менее важен, чем Путин. Это значит, что Пекин использует разные форматы в зависимости от собеседника. С Соединенными Штатами нужно избежать разрыва. С Россией нужно показать, что стратегическое партнерство остается целым.",
        ],
      },
      {
        heading: "Дипломатия близости",
        paragraphs: [
          "Визит Путина имел особое символическое измерение. Помимо протокола, в нем присутствовали жесты личной близости: чаепитие, ссылки на долговременную дружбу, культурная программа и нарратив доверия между лидерами.",
          "В китайской дипломатии такие детали не являются украшением. Чай, совместная кухня и исторические символы передают спокойствие, преемственность и политическую близость. С Трампом Пекин управлял соперничеством. С Путиным он инсценировал отношения доверия.",
          "Этот контраст усиливает мысль о том, что Китай говорит на разных стратегических языках в зависимости от доски. С Вашингтоном он сочетает переговоры и сдерживание. С Москвой добавляет политическую память, личную связь и долгосрочную проекцию.",
        ],
        callouts: [
          "С Трампом преобладала транзакционная логика; с Путиным — логика отношений и стратегии.",
        ],
      },
      {
        heading: "Официальный китайский нарратив",
        paragraphs: [
          "С китайской точки зрения визит был представлен как подтверждение дружбы, политического доверия и стратегической координации. Пекин подчеркнул историческую непрерывность связи, продление двустороннего договора и намерение углублять сотрудничество.",
          "Язык здесь важен. Китай описывает отношения с Россией не как тактический ответ на Запад, а как устойчивую архитектуру с собственной институциональной базой.",
          "Это ключевой элемент внешней проекции Пекина: показать, что связь с Москвой не зависит только от Украины, санкций или ухудшения отношений с Соединенными Штатами.",
        ],
      },
      {
        heading: "Российский нарратив: Москва не изолирована",
        paragraphs: [
          "Для России визит имел очевидную стратегическую ценность. Путин приехал в Пекин, чтобы показать: у Москвы сохраняется прямой доступ к китайскому руководству, а западная изоляция не равна глобальной изоляции.",
          "В интерпретации Кремля отношения с Китаем являются ключом к поддержанию энергетического экспорта, углублению технологического сотрудничества и укреплению нарратива о многополярном мире.",
          "Послание Западу прямое: Россия могла потерять часть доступа к европейским рынкам, но усилила евразийскую ориентацию и по-прежнему имеет партнера огромного экономического и дипломатического веса.",
        ],
        callouts: [
          "Открытый вопрос состоит в том, укрепляет ли Россия сбалансированное партнерство или становится все более зависимой от Китая.",
        ],
      },
      {
        heading: "Энергетика: глубокое сотрудничество, но не симметрия",
        paragraphs: [
          "У отношений Китая и России есть очень конкретная материальная основа: энергия, торговля, инфраструктура и надежность поставок. России нужно продавать нефть и газ в Азию. Китаю нужны диверсифицированные поставщики и стабильные энергетические потоки.",
          "Именно эта взаимодополняемость объясняет, почему энергетика и торговля остаются в центре связи. Но эта связь несимметрична: России Китай нужен срочнее, чем Китаю Россия.",
          "Поэтому даже в стратегических газовых проектах Пекин ведет переговоры с более сильной позиции. Китай покупает, но способен задавать сроки, условия и параметры сделки в большей степени, чем Москва.",
        ],
        callouts: [
          "Энергетическое сотрудничество глубоко, но переговорная сила внутри отношений распределена неравномерно.",
        ],
      },
      {
        heading: "Технологии, искусственный интеллект и стратегическая автономия",
        paragraphs: [
          "Координация Китая и России не ограничивается энергетикой. Она распространяется и на технологии, искусственный интеллект, цифровые инновации, кибербезопасность и оборонные возможности.",
          "Это важно, потому что напрямую связано с конкуренцией с Соединенными Штатами. Вашингтон сохраняет преимущества в передовых полупроводниках, программном обеспечении, цифровых платформах и финансовом капитале. Китай стремится к технологической автономии. Россия, несмотря на санкции, все еще сохраняет потенциал в обороне, кибербезопасности и стратегических системах.",
          "Такое технологическое сотрудничество не означает, что они быстро заменят западную экосистему, но оно может сократить уязвимости перед санкциями, экспортным контролем и зависимостью от инфраструктуры, контролируемой США.",
        ],
      },
      {
        heading: "Оборона, безопасность и Golden Dome",
        paragraphs: [
          "Одна из самых распространенных аналитических ошибок — описывать отношения Китая и России как классический военный союз. Это не так. Китай избегает формальных обязательств, которые ограничили бы свободу маневра. Но и чисто экономическими эти отношения не являются.",
          "Самая точная формула — глубокая стратегическая координация без полноценного формального союза. Это особенно заметно в вопросах противоракетной обороны, ядерной стабильности, Индо-Тихоокеанского региона и западного давления.",
          "Американский проект Golden Dome хорошо отражает эту конвергенцию. Для Вашингтона это ставка на усиление национальной защиты. Для Москвы и Пекина система такого масштаба способна затронуть стратегический баланс, повлияв на достоверность ядерного сдерживания.",
        ],
        callouts: [
          "Китаю и России не нужен формальный военный союз, чтобы координироваться там, где они видят общие угрозы.",
        ],
      },
      {
        heading: "Ближний Восток и Иран",
        paragraphs: [
          "Эту встречу также нужно читать через Ближний Восток. Китай и Россия имеют связи с Ираном, энергетические интересы в Персидском заливе и прямую заинтересованность в стабильности Ормузского пролива.",
          "Китай не хочет полностью брать на себя роль гаранта региональной безопасности, но хочет влиять на исходы. Россия, со своей стороны, стремится сохранить дипломатическую значимость в регионе, где Соединенные Штаты долгое время обладали доминирующим весом.",
          "Обе стороны сходятся в том, что региональный порядок не должен определяться исключительно западным давлением, и связывают региональную стабильность с глобальной энергетической безопасностью. Для Пекина это часть дипломатии влияния без чрезмерного самововлечения.",
        ],
      },
      {
        heading: "Последствия для Латинской Америки",
        paragraphs: [
          "Для Латинской Америки эта встреча не является далеким вопросом. Координация Китая и России влияет на энергетику, продовольствие, удобрения, финансы, технологии, оборону и глобальное управление.",
          "Китай — ключевой торговый партнер для ряда стран региона. Россия сохраняет присутствие в энергетике, обороне, удобрениях и дипломатии. Соединенные Штаты остаются финансовым, политическим и технологическим центром полушария.",
          "Если соперничество между этими полюсами углубится, регион может получить больше пространства для торга, но также столкнуться с более сильным давлением в пользу выравнивания. Многополярность не гарантирует автономию, если у региона нет собственной стратегии.",
        ],
        callouts: [
          "Шанс Латинской Америки — в более широком пространстве для переговоров, а не в том, чтобы оказаться зажатой между чужими повестками.",
        ],
      },
      {
        heading: "БРИКС и Глобальный Юг",
        paragraphs: [
          "Встреча Си и Путина усиливает многополярный нарратив. Китай и Россия стремятся представить себя защитниками более сбалансированного международного порядка, с большим весом Глобального Юга и меньшим западным доминированием.",
          "Но одного нарратива недостаточно. Вызов для БРИКС и Глобального Юга состоит в том, чтобы превратить дискурс в институты: платежные системы, финансирование, инфраструктуру, технологическое сотрудничество и механизмы управления.",
          "Связка Китай-Россия может продвинуть эту повестку, но одновременно порождает вопросы. Многополярность может открыть пространство для новых игроков, но также способна воспроизводить новые иерархии, если будет слишком сильно вращаться вокруг Пекина и Москвы.",
        ],
      },
      {
        heading: "Возможные сценарии",
        subsections: [
          {
            heading: "1. Более глубокая координация Китая и России",
            paragraphs: [
              "Пекин и Москва усиливают сотрудничество в энергетике, обороне, технологиях, альтернативных платежах и глобальной дипломатии. Ось Китай-Россия приобретает структурный вес внутри многополярного порядка.",
            ],
          },
          {
            heading: "2. Прагматичное сотрудничество с ограничениями",
            paragraphs: [
              "Отношения укрепляются, но Китай избегает чрезмерных обязательств перед Россией и сохраняет пространство для переговоров с США, Европой и другими полюсами.",
            ],
          },
          {
            heading: "3. Усиление западного давления и ускоренное сближение",
            paragraphs: [
              "Если Вашингтон и его союзники ужесточат санкции, технологический контроль или военное давление, Китай и Россия могут еще быстрее углубить стратегическую координацию.",
            ],
          },
          {
            heading: "4. Китай как посредник между блоками",
            paragraphs: [
              "Пекин поддерживает диалог и с Вашингтоном, и с Москвой, проецируя себя как центр баланса между крупными державами, не разрывая связи ни с одной из сторон.",
            ],
          },
          {
            heading: "5. Фрагментированная многополярность",
            paragraphs: [
              "Международная система движется к частично разделенным технологическим, финансовым и военным блокам. На страны с формирующимися рынками оказывается более сильное давление при выборе партнеров и моделей встраивания.",
            ],
          },
        ],
      },
      {
        heading: "Заключение",
        paragraphs: [
          "Встреча Си и Путина в Пекине стала подтверждением стратегического сотрудничества. Это было не просто проявление личной дружбы и не временная реакция на Соединенные Штаты. Это был сигнал институционализации отношений, которые обе страны хотят представить как опору нового глобального баланса.",
          "Но это был и сигнал асимметрии. России нужен Китай, чтобы продавать энергию, поддерживать рынки и сопротивляться изоляции. Китаю нужна Россия как стратегический партнер, энергетический поставщик и противовес Западу, но у него сохраняется большая свобода маневра.",
          "Дипломатическая последовательность показательная: сначала Трамп, затем Путин. Пекин управляет соперничеством с Вашингтоном и подтверждает координацию с Москвой. Китай не выбирает между ними. Он ведет переговоры с обоими.",
        ],
      },
      {
        heading: "Открытые вопросы",
        bullets: [
          "Посредничает ли Китай между великими державами или просто максимизирует собственный маневр?",
          "Является ли Россия стратегическим партнером Китая или все более зависимым партнером?",
          "Могут ли Соединенные Штаты стабилизировать отношения с Китаем, не принимая долговременность оси Китай-Россия?",
          "Сможет ли Глобальный Юг выиграть от этой многополярности или получит лишь больше давления?",
        ],
      },
    ],
  },

  zh: {
    title: "习近平与普京在北京：重塑全球格局的战略协作",
    subtitle:
      "在接待特朗普之后，中国再次确认了与俄罗斯的协调。这一外交顺序表明，北京并未在华盛顿与莫斯科之间二选一，而是在与两方同时谈判，以扩大自身的战略回旋空间。",
    excerpt:
      "普京对北京的访问表明，中国希望在管理与美国竞争的同时，不放弃与俄罗斯的战略伙伴关系。正是这种组合，解释了新的全球平衡正在如何形成。",
    tags: ["习近平", "普京", "中国", "俄罗斯", "北京", "能源", "多极化", "外交"],
    bodySections: [
      {
        paragraphs: [
          "习近平与普京在北京的会晤，并不是一次普通的双边访问，而是一次公开确认：中俄希望把双方合作呈现为稳定、持久，并且适用于一个不再完全以西方为中心的国际秩序。",
          "这一时间顺序非常重要。北京先接待特朗普，以管理与美国的竞争；几天后又接待普京，以强调与华盛顿关系的阶段性稳定，并不意味着放弃与莫斯科的战略协调。",
          "核心判断很清楚：中国并不是在特朗普与普京之间做选择。它是在利用与两方的关系来扩大自身的外交、经济与战略空间。对美国，它管理竞争；对俄罗斯，它巩固协调；对全球南方，它投射多极领导力。",
        ],
        callouts: [
          "北京想要展示的是：它可以同华盛顿对话，而不必削弱与莫斯科的战略联系。",
        ],
      },
      {
        heading: "两次访问，两种信号",
        paragraphs: [
          "比较特朗普与普京的访问，有助于理解中国的战略。面对特朗普，北京采取的是“受控竞争”的逻辑：外交姿态、企业随行、经贸预期，以及降低不确定性的需要。",
          "而面对普京，整场访问的密度完全不同：更完整的联合声明、合作文件、更长时间的双边会谈，以及一套旨在确认战略连续性的外交舞台。",
          "这并不意味着特朗普对中国不如普京重要，而是说明北京会根据谈判对象使用不同格式。对美国，中国要避免断裂；对俄罗斯，中国要证明战略伙伴关系依然牢固。",
        ],
      },
      {
        heading: "亲近外交",
        paragraphs: [
          "普京此次访华具有明显的象征维度。除了正式礼宾之外，还出现了更多“亲密”元素：共饮茶、关于长期友谊的表述、文化安排，以及关于领导人互信的叙事。",
          "在中国外交中，这些细节并非装饰。茶、共餐与历史性象征，传递的是平静、连续性与政治亲近。面对特朗普，北京管理的是竞争；面对普京，北京展现的是信任关系。",
          "这种对比进一步说明，中国会根据不同战略场景使用不同语言。对华盛顿，它结合谈判与约束；对莫斯科，它则加入政治记忆、个人纽带与长期投射。",
        ],
        callouts: [
          "面对特朗普，逻辑更偏交易性；面对普京，则更偏关系性与战略性。",
        ],
      },
      {
        heading: "中国官方叙事",
        paragraphs: [
          "从中国视角看，这次访问被定义为友谊、政治信任与战略协调的再次确认。北京强调了双边关系的历史连续性、条约延续以及进一步深化合作的意愿。",
          "这里的语言非常关键。中国并不把对俄关系描述为对西方的临时回应，而是描述为一套拥有自身制度基础的稳定架构。",
          "这一点对北京的外部投射至关重要：它要表明，中俄关系并不只是由乌克兰、制裁或中美关系恶化所决定。",
        ],
      },
      {
        heading: "俄罗斯的叙事：莫斯科并未被孤立",
        paragraphs: [
          "对俄罗斯而言，这次访问具有明显的战略价值。普京前往北京，是为了表明莫斯科仍然能够直接接触中国最高领导层，而西方孤立并不等于全球孤立。",
          "在克里姆林宫的叙事中，对华关系是维持能源出口、深化技术合作以及强化多极世界论述的关键支柱。",
          "它向西方传递的信息很直接：俄罗斯或许失去了部分欧洲市场，但它强化了欧亚转向，同时仍然拥有一个经济和外交分量都极大的伙伴。",
        ],
        callouts: [
          "真正的问题在于：俄罗斯是在巩固一段相对平衡的伙伴关系，还是正变得越来越依赖中国？",
        ],
      },
      {
        heading: "能源：合作很深，但并不对称",
        paragraphs: [
          "中俄关系有着非常具体的物质基础：能源、贸易、基础设施与供应安全。俄罗斯需要把石油和天然气卖向亚洲，中国则需要更分散的供应来源与更稳定的能源流。",
          "正是这种互补性，使能源与贸易始终处于双边关系的中心。但这种关系并不对称：俄罗斯对中国的需要，比中国对俄罗斯的需要更迫切。",
          "因此，即便是在重大战略性天然气项目上，北京也往往处于更强势的位置。中国购买资源，但在时间、条件与节奏设定上拥有更大空间。",
        ],
        callouts: [
          "能源合作确实很深，但关系内部的议价权并没有被平均分配。",
        ],
      },
      {
        heading: "技术、人工智能与战略自主",
        paragraphs: [
          "中俄协调并不局限于能源，还延伸到技术、人工智能、数字创新、网络安全与防务能力。",
          "这一维度之所以重要，是因为它直接连接到与美国的竞争。华盛顿仍然在先进芯片、软件、数字平台和金融资本方面占据优势。中国追求技术自主。俄罗斯虽受制裁限制，但在防务、网络安全与战略系统上仍保有能力。",
          "这种合作并不意味着中俄可以迅速替代西方技术生态，但它确实能够降低双方在制裁、出口管制以及对美主导基础设施依赖上的脆弱性。",
        ],
      },
      {
        heading: "防务、安全与 Golden Dome",
        paragraphs: [
          "一个常见误判，是把中俄关系描述成传统意义上的军事同盟。事实并非如此。中国并不愿接受会压缩自身回旋余地的正式军事承诺，但这种关系也绝非纯经济关系。",
          "更准确的定义是：深度战略协调，但尚未形成完整的正式同盟。这一点在导弹防御、核稳定、亚太格局与西方压力等议题上表现得尤为清楚。",
          "美国的 Golden Dome 计划正好反映了这种共同关切。对华盛顿而言，它是强化本土防御的项目；对北京和莫斯科而言，这种规模的系统可能改变战略平衡，因为它会影响核威慑的可信度。",
        ],
        callouts: [
          "中俄并不需要正式军事同盟，也能在感知到共同威胁时形成协同立场。",
        ],
      },
      {
        heading: "中东与伊朗",
        paragraphs: [
          "这次会晤也必须放在中东背景下理解。中国和俄罗斯都与伊朗保持联系，在海湾拥有能源利益，并直接关切霍尔木兹海峡的稳定。",
          "中国不愿完全承担地区安全担保者的角色，但它确实希望影响局势。俄罗斯则希望维持自己在这个长期由美国主导的地区中的外交分量。",
          "双方都倾向于推动一种不完全由西方压力定义的地区秩序，并把地区稳定与全球能源安全联系起来。对北京而言，这是一种“有影响力但不过度暴露”的外交方式。",
        ],
      },
      {
        heading: "对拉丁美洲的影响",
        paragraphs: [
          "对拉丁美洲而言，这次会晤绝不是遥远议题。中俄协调会影响能源、粮食、化肥、融资、技术、防务以及全球治理。",
          "中国已是多个拉美国家的关键贸易伙伴。俄罗斯在能源、防务、化肥和外交方面仍保有存在。美国则继续是本半球的金融、政治与技术中心。",
          "如果这些权力中心之间的竞争继续加深，拉丁美洲可能获得更大的谈判空间，但也会承受更强的选边压力。没有自身战略，多极化并不自动等于自主性。",
        ],
        callouts: [
          "拉丁美洲真正的机会，在于利用竞争扩大谈判空间，而不是被困在外部力量的议程之间。",
        ],
      },
      {
        heading: "金砖国家与全球南方",
        paragraphs: [
          "习近平与普京的会晤强化了多极化叙事。中国和俄罗斯希望把自己呈现为更平衡国际秩序的支持者，让全球南方拥有更大权重，并减少西方的单边主导。",
          "但叙事本身并不够。对金砖国家和全球南方而言，真正的挑战在于把话语转化为制度：支付系统、融资安排、基础设施、技术合作与治理机制。",
          "中俄关系可以推动这条议程，但也会带来疑问。多极化可能为新兴行为体打开空间，但如果其结构过度围绕北京和莫斯科，也可能复制新的等级关系。",
        ],
      },
      {
        heading: "可能情景",
        subsections: [
          {
            heading: "1. 中俄协调进一步加深",
            paragraphs: [
              "北京与莫斯科在能源、防务、技术、替代支付与全球外交上的合作继续加深，中俄轴心在多极秩序中的结构性分量进一步上升。",
            ],
          },
          {
            heading: "2. 有边界的务实合作",
            paragraphs: [
              "双边关系持续加强，但中国避免对俄罗斯承担过度承诺，同时保留与美国、欧洲及其他力量谈判的空间。",
            ],
          },
          {
            heading: "3. 西方压力加大，中俄靠拢加速",
            paragraphs: [
              "如果华盛顿及其盟友进一步加强制裁、技术限制或军事压力，中俄可能更快推进战略协调。",
            ],
          },
          {
            heading: "4. 中国成为板块之间的调节者",
            paragraphs: [
              "北京同时保持与华盛顿和莫斯科的对话，把自己投射为大国之间的平衡中心，而不与任何一方决裂。",
            ],
          },
          {
            heading: "5. 碎片化的多极秩序",
            paragraphs: [
              "国际体系向部分分离的技术、金融和军事板块演变，新兴国家在选择伙伴和嵌入框架时面临更大压力。",
            ],
          },
        ],
      },
      {
        heading: "结论",
        paragraphs: [
          "习近平与普京在北京的会晤，是对战略合作的再次确认。它不仅是个人友谊的展示，也不是对美国的临时性反应，而是双方试图把这段关系制度化，并将其塑造成新全球平衡的支柱。",
          "但它同时也暴露出不对称性。俄罗斯需要中国来出售能源、维持市场并抵抗孤立；中国需要俄罗斯作为战略伙伴、能源供应者和对冲西方的力量，但它保留着更大的战略回旋空间。",
          "这组外交顺序本身已经说明问题：先是特朗普，后是普京。北京一边管理与华盛顿的竞争，一边确认与莫斯科的协调。中国并不在两者之间做选择，而是在与两者同时谈判。",
        ],
      },
      {
        heading: "开放问题",
        bullets: [
          "中国是在大国之间进行调解，还是在最大化自身的战略机动空间？",
          "俄罗斯对中国而言是战略伙伴，还是一个越来越依赖北京的伙伴？",
          "美国能否在不接受中俄轴心持续存在的前提下稳定对华关系？",
          "全球南方能否从这种多极化中获益，还是只会承受更多压力？",
        ],
      },
    ],
  },
};

export const contentTranslations = {
  en: {
    site: {
      tagline:
        "Strategic analysis on geopolitics, technology, economics, and the new global order.",
      description:
        "An editorial platform and digital think tank for interpreting global change with depth, judgment, and clarity.",
    },
    navigation: {
      home: "Home",
      analysis: "Analysis",
      opinion: "Opinion",
      radar: "Weekly radar",
      regions: "Regions",
      sectors: "Sectors",
      experts: "Experts",
      about: "About Geo Scope",
      contact: "Contact",
      subscription: "Subscribe",
    },
    newsletterInterests: [
      "Geopolitics",
      "International economics",
      "Technology and geopolitics",
      "Energy",
      "Trade and supply chains",
      "Defense and security",
      "Diplomacy",
      "Strategic infrastructure",
      "Artificial intelligence and global power",
      "Multipolarity and global governance",
    ],
    about: {
      mission:
        "Interpret global change with editorial rigor, a strategic lens, and clear language.",
      vision:
        "To become a reference platform for decision-makers, analysts, business leaders, academia, and readers seeking to understand global reordering beyond the news cycle.",
      manifesto: [
        "Geo Scope begins from a simple premise: the world does not need more noise, it needs better frameworks for thinking.",
        "The platform combines deep reading, comparative judgment, and international sensitivity to explain geoeconomic, technological, and political trends with a sober and precise voice.",
        "We do not chase immediate reaction. We privilege context, implications, and the right questions.",
      ],
      principles: [
        "Analysis before alarm.",
        "Depth before speed.",
        "Regional context with a global lens.",
        "Clear language without losing strategic density.",
      ],
    },
    authors: {
      "javier-salazar-segales": {
        role: "General Director & Founder",
        specialty:
          "Specialist in Geopolitics, Diplomacy, BRICS, Latin America, AI & Technology, Energy, and International Trade",
        summary:
          "Bolivian international analyst and founder of Geo Scope, focused on geopolitics, diplomacy, BRICS, technology, and the transformation of global order.",
        affiliations: ["General Directorate", "Founder", "Geo Scope"],
        expertise: [
          "Geopolitics",
          "Diplomacy",
          "BRICS",
          "Latin America",
          "AI & Technology",
          "Energy",
          "International Trade",
        ],
        languages: ["Spanish", "English", "Russian", "Chinese"],
        education:
          "Training in computer science, information technologies, international business, and business management, with experience in diplomacy, international cooperation, applied political analysis, and geopolitics.",
        biography: [
          "Javier Jonathan Salazar Segales is a Bolivian international analyst and founder of Geo Scope, a platform dedicated to geopolitical analysis, strategic intelligence, the BRICS, Latin America, technology, energy, and the transformation of global order. With training and experience in diplomacy, international business, and technology, his work examines how emerging powers, new economic blocs, artificial intelligence, and geopolitical competition are reshaping global governance and international relations.",
          "Javier Salazar Segales has professional experience in diplomatic affairs, the drafting of political and economic reports, institutional coordination, and international cooperation. His areas of interest include the role of the BRICS in the Global South, Latin America's position in a multipolar world, technological sovereignty, energy security, and the impact of artificial intelligence on state power and strategic decision-making.",
          "Through Geo Scope, he seeks to offer clear, accessible, and future-oriented analysis of the main forces shaping the twenty-first century, with particular attention to the intersection of geopolitics, economics, technology, and regional development.",
        ],
      },
      "tomas-velez": {
        role: "Geoeconomics editor",
        specialty: "Geoeconomics and international finance",
        summary:
          "Tracks value chains, financial flows, and currency competition across the international board.",
        affiliations: ["Geoeconomics Desk", "Geo Scope"],
        expertise: ["Global geoeconomics", "Financial markets", "Trade", "Currencies"],
        education:
          "International economics, political finance, and systemic-risk analysis.",
        biography: [
          "Tomas Velez examines the interaction between trade, debt, liquidity, and geoeconomic rivalry. At Geo Scope he follows the evolution of the dollar system, monetary diversification strategies, and shocks affecting the international financial architecture.",
          "His editorial work aims to connect market readings with the logic of state power, explaining how rates, bonds, logistics chains, and industrial policy belong to the same strategic competition.",
        ],
      },
      "clara-ibanez": {
        role: "Technology and power analyst",
        specialty: "Strategic technology, AI, and regulatory competition",
        summary:
          "Works on digital standards, artificial intelligence, and state power within the platform economy.",
        affiliations: ["Technology and Power Lab", "Geo Scope"],
        expertise: [
          "Technology and geopolitics",
          "Artificial intelligence",
          "Semiconductors",
          "Digital regulation",
        ],
        education:
          "Technology policy, digital governance, and comparative innovation analysis.",
        biography: [
          "Clara Ibanez covers technological competition among major powers, with special attention to semiconductors, artificial intelligence, digital infrastructure, and regulation. Her central interest is how technology becomes both an instrument of state capacity and a lever of international projection.",
          "At Geo Scope she develops analytical frameworks to understand the relationship between innovation, economic security, and global governance, comparing the United States, China, Europe, and industrial Asia.",
        ],
      },
      "adrian-rivas": {
        role: "Senior international security researcher",
        specialty: "International security, defense, and deterrence",
        summary:
          "Analyzes security architecture, military industry, and strategic rivalry among major powers.",
        affiliations: ["International Security Program", "Geo Scope"],
        expertise: ["Defense and security", "Deterrence", "Russia and Eurasia", "Alliances"],
        education:
          "Security studies, comparative defense, and contemporary military strategy.",
        biography: [
          "Adrian Rivas follows the transformation of the global security architecture, from alliance competition to deterrence dynamics, military doctrines, and the defense industrial base. At Geo Scope he contributes a strategic reading of conflicts, capabilities, and balances of power.",
          "His work emphasizes Eurasia, European security, and institutional adaptation in a more fragmented, militarized, and technologically demanding international environment.",
        ],
      },
      "lucia-ferrer": {
        role: "Regions and diplomacy editor",
        specialty: "Comparative diplomacy and regional analysis",
        summary:
          "Coordinates regional coverage and analyzes diplomatic positioning, mediation, and strategic autonomy.",
        affiliations: ["Regions and Diplomacy Desk", "Geo Scope"],
        expertise: ["Diplomacy", "Latin America", "Middle East", "Strategic autonomy"],
        education:
          "Foreign policy, multilateral diplomacy, and comparative regional studies.",
        biography: [
          "Lucia Ferrer coordinates Geo Scope's comparative regional coverage and works on diplomacy, flexible alignments, and autonomy strategies. Her approach identifies how middle and regional actors negotiate room for maneuver inside a more competitive international order.",
          "Her work connects regional scenarios with global implications, especially in Latin America, the Middle East, and mediation spaces where diplomacy is again becoming a central instrument of power and adaptation.",
        ],
      },
    },
    regions: {
      global: {
        name: "Global",
        strap: "Systemic flows, financial power, and international reordering.",
        description:
          "Cross-cutting reads on the forces linking major powers, global liquidity, trade, technology, and the architecture of power at a worldwide scale.",
        tags: ["dollar", "liquidity", "flows", "international system"],
      },
      brics: {
        name: "BRICS",
        strap: "Flexible coordination, industrial weight, and parallel architecture.",
        description:
          "Tracking the political, financial, and technological evolution of the BRICS space and its impact on the global institutional balance.",
        tags: ["currencies", "standards", "Global South", "finance"],
      },
      "america-latina": {
        name: "Latin America",
        strap: "Resources, autonomy-oriented diplomacy, and strategic positioning.",
        description:
          "Reads on Latin America's place in the race for value chains, energy, critical minerals, and medium-term alliances.",
        tags: ["nearshoring", "raw materials", "autonomy", "ports"],
      },
      "rusia-eurasia": {
        name: "Russia and Eurasia",
        strap: "Corridors, extended security, and continental reorganization.",
        description:
          "Analysis of Russia and Eurasia's strategic projection on a board shaped by sanctions, logistics routes, and military-industrial competition.",
        tags: ["sanctions", "deterrence", "corridors", "energy"],
      },
      "china-asia": {
        name: "China and Asia",
        strap: "Productive scale, technical standards, and competition for manufacturing.",
        description:
          "Tracking Asia's centrality in technology, trade, infrastructure, and the financial architecture of the twenty-first century.",
        tags: ["semiconductors", "connectivity", "manufacturing", "digital"],
      },
      europa: {
        name: "Europe",
        strap: "Strategic autonomy, industry, and high-density regulatory security.",
        description:
          "Coverage of the tensión between openness, economic security, defense, and industrial reconstruction in the European agenda.",
        tags: ["energy", "regulation", "defense", "Arctic"],
      },
      "medio-oriente": {
        name: "Middle East",
        strap: "Capital, energy, and new geographies of regional power.",
        description:
          "Analysis of energy, corridors, sovereign finance, and diplomatic reconfiguration in the Middle East.",
        tags: ["Gulf", "oil", "sovereign funds", "straits"],
      },
      africa: {
        name: "Africa",
        strap: "Critical minerals, infrastructure, and bargaining power.",
        description:
          "Tracking Africa's role in the energy transition, new industrial chains, and the contest over connectivity and resources.",
        tags: ["copper", "lithium", "ports", "industrialization"],
      },
      "estados-unidos-occidente": {
        name: "United States and the West",
        strap: "Technological power, alliances, and second-generation industrial policy.",
        description:
          "Reads on the redesign of Western power through subsidies, economic security, sanctions, and alliance rebuilding.",
        tags: ["chips", "alliances", "subsidies", "techno-politics"],
      },
    },
    sectors: {
      "geoeconomia-global": {
        name: "Global geoeconomics",
        description:
          "Interaction among trade, debt, currencies, financial power, and international strategy.",
      },
      "mercados-financieros": {
        name: "Financial markets",
        description:
          "Liquidity, rates, bonds, equities, and mechanisms for absorbing global savings.",
      },
      "china-estados-unidos": {
        name: "China and the United States",
        description:
          "Structural competition across manufacturing, finance, technology, and state capacity.",
      },
      geopolítica: {
        name: "Geopolitics",
        description:
          "Competition among powers, regional balance, and the reordering of power.",
      },
      "economia-internacional": {
        name: "International economics",
        description:
          "Financial flows, industrial policy, debt, currencies, and global architecture.",
      },
      "tecnologia-geopolitica": {
        name: "Technology and geopolitics",
        description:
          "Digital infrastructure, standards, chips, platforms, and state capacity.",
      },
      energía: {
        name: "Energy",
        description:
          "Oil, gas, renewables, critical minerals, and security of supply.",
      },
      "comercio-cadenas-logisticas": {
        name: "Trade and supply chains",
        description:
          "Maritime routes, reshoring, nearshoring, and the reorganization of productive nodes.",
      },
      "defensa-seguridad": {
        name: "Defense and security",
        description:
          "Military capacity, deterrence, defense industry, and security architecture.",
      },
      diplomacia: {
        name: "Diplomacy",
        description:
          "Alignments, mediation, regional forums, and strategic relationship management.",
      },
      "infraestructura-estrategica": {
        name: "Strategic infrastructure",
        description:
          "Corridors, ports, telecommunications, and critical connectivity nodes.",
      },
      "inteligencia-artificial-poder-global": {
        name: "Artificial intelligence and global power",
        description:
          "AI as a vector of competitiveness, surveillance, productivity, and state projection.",
      },
      "multipolaridad-gobernanza-global": {
        name: "Multipolarity and global governance",
        description:
          "Institutions, flexible coalitions, and emerging rules of the international system.",
      },
    },
    articles: {
      "china-produce-estados-unidos-se-endeuda-y-wall-street-gana": {
        title: "China produces, the United States borrows, and Wall Street wins",
        subtitle:
          "The global economy runs on a paradox: imbalances in production, debt, and liquidity sustain part of the international financial order.",
        excerpt:
          "China exports surpluses, the United States absorbs global savings through debt, and Wall Street captures a meaningful share of international liquidity. The question is how long this model can hold.",
        tags: [
          "China",
          "United States",
          "Wall Street",
          "dollar",
          "BRICS",
          "global liquidity",
        ],
        bodySections: [
          {
            paragraphs: [
              "The global economy runs on a paradox: the system's main imbalances do not necessarily weaken it in the short term; many times they sustain it.",
              "China maintains enormous export capacity and accumulates trade surpluses. The United States sustains large fiscal deficits and finances its spending through debt. Between these two dynamics, an international liquidity circuit emerges that ultimately favors financial markets, especially Wall Street.",
              "The central question is not only economic. It is geopolitical: can the world keep depending on a model in which one power produces surpluses while another absorbs capital by issuing debt?",
            ],
          },
          {
            heading: "Two imbalances driving the global system",
            paragraphs: [
              "The first imbalance is China's export model. China sells more to the world than it buys. Its manufacturing strength, industrial scale, and ability to produce competitive goods allow it to accumulate large trade surpluses.",
              "The second imbalance is the U.S. fiscal deficit. The United States spends more than it collects and finances the gap by issuing public debt. Unlike other countries, it can do so on favorable terms because it issues the world's main reserve currency: the dollar.",
              "These two processes are connected. The surpluses generated by exporting economies look for safe, liquid, and profitable assets. The United States offers the deepest financial market in the world. As a result, part of global savings is channeled into Treasuries, U.S. equities, technology, investment funds, and major corporations.",
            ],
            callouts: [
              "In other words: China exports goods, the United States exports debt, and Wall Street absorbs liquidity.",
            ],
          },
          {
            heading: "The S&P 500 as a reflection of American financial power",
            paragraphs: [
              "The S&P 500 is not just a stock index. It represents the corporate, technological, and financial center of the United States. Many of the companies dominating key sectors are there: artificial intelligence, software, semiconductors, defense, healthcare, energy, consumption, and financial services.",
              "When global liquidity is abundant, an important share flows into U.S. assets. This helps sustain market valuations, especially for companies seen as strategic or long-term leaders.",
              "That is why the U.S. stock market should not be analyzed only through corporate earnings or technological innovation. It should also be understood as part of a global financial architecture in which the dollar, U.S. public debt, and international capital flows all play a central role.",
              "Does Wall Street rise because the U.S. economy is strong, or because the global financial system has no equivalent alternative?",
            ],
          },
          {
            heading: "The paradox of imbalances",
            paragraphs: [
              "In theory, a large fiscal deficit should be a warning sign. So should a persistent trade surplus accompanied by weak domestic consumption. Yet in practice these imbalances have helped sustain the system.",
              "China needs exports to maintain production, employment, and industrial influence. The United States needs debt to sustain spending, consumption, strategic investment, and global presence. Both models contain internal tensions, but they also complement each other.",
              "The result is an uncomfortable relationship: two powers compete geopolitically while remaining tied together by trade, financial, and monetary flows.",
            ],
            callouts: [
              "This does not mean permanent stability. It means mutual dependence.",
            ],
          },
          {
            heading: "Economic war does not always look like war",
            paragraphs: [
              "The rivalry between China and the United States is often explained through tariffs, sanctions, technology restrictions, semiconductors, Taiwan, or supply chains. But there is another, less visible dimension: the international financial architecture.",
              "China competes through production, infrastructure, advanced manufacturing, and trade. The United States competes through the dollar, capital markets, public debt, technological innovation, and its ability to attract global savings.",
              "The competition of the twenty-first century will not be defined only by who produces more, but by who controls the channels through which capital circulates.",
            ],
            callouts: [
              "One power dominates the factory. The other dominates the currency and the markets.",
            ],
          },
          {
            heading: "What does this mean for Latin America?",
            paragraphs: [
              "For Latin America, this global dynamic has direct consequences. The region is sensitive to global liquidity cycles, commodity prices, U.S. interest rates, and Chinese demand.",
              "When liquidity is abundant, emerging markets can receive more investment, improve access to financing, and benefit from better prices for some goods. But when liquidity shrinks, the region tends to face capital outflows, currency depreciation, imported inflation, and higher debt costs.",
              "Latin America sits between two forces: China as a buyer of raw materials and investor in infrastructure, and the United States as the hemisphere's financial, political, and monetary center.",
              "Can Latin America use this rivalry to diversify its development, or will it keep reacting passively to cycles defined elsewhere?",
            ],
          },
          {
            heading: "And what does it imply for the BRICS?",
            paragraphs: [
              "The BRICS seek to expand their influence in the global economy, promote the use of national currencies, and reduce dependence on the dollar. Yet the challenge is considerable.",
              "The international financial system remains deeply tied to the dollar. Reserves, debt markets, global trade, international payments, and the liquidity of U.S. assets continue to give the United States a structural advantage.",
              "The paradox is that many countries wishing to reduce dependence on the dollar still operate within a system where the most liquid and safest assets are denominated in dollars.",
              "That is why a multipolar financial architecture will not be built through political declarations alone. It requires deep markets, institutional trust, efficient payment mechanisms, monetary stability, and the capacity to absorb large volumes of capital.",
              "The question for the BRICS is not only whether they can challenge the dollar. It is whether they can build an alternative reliable enough for the world to use.",
            ],
          },
          {
            heading: "Long-term risks",
            paragraphs: [
              "The current model can last for years, but it accumulates risks.",
              "The system will not necessarily collapse because of its imbalances. But it can become more vulnerable the more it depends on them.",
            ],
            bullets: [
              "Fiscal risk: if U.S. debt keeps growing, interest payments may limit the government's room to maneuver and increase pressure on bond markets.",
              "Trade risk: if China maintains high industrial surpluses, other countries may respond with more barriers, tariffs, or technology restrictions.",
              "Financial risk: if markets get used to abundant liquidity, excessive valuations may form in certain sectors.",
              "Geopolitical risk: as competition between the United States and China intensifies, any break in their trade or financial links could generate global effects.",
            ],
          },
          {
            heading: "Possible scenarios",
            subsections: [
              {
                heading: "1. Continuity of the current model",
                paragraphs: [
                  "China maintains export strength, the United States continues to finance deficits through debt, and financial markets keep receiving global liquidity. In this scenario, Wall Street retains a dominant position.",
                ],
              },
              {
                heading: "2. Trade fragmentation",
                paragraphs: [
                  "Tensions between China and the United States grow. More tariffs, sanctions, and technology restrictions appear. Supply chains are reorganized and global trade becomes more expensive.",
                ],
              },
              {
                heading: "3. Pressure on U.S. debt",
                paragraphs: [
                  "Investors begin demanding higher yields to finance U.S. public debt. This raises the cost of credit, affects equity valuations, and reduces appetite for risk.",
                ],
              },
              {
                heading: "4. Gradual rise of a multipolar system",
                paragraphs: [
                  "The BRICS and other emerging countries develop alternative payment mechanisms, more trade in national currencies, and new financing channels. The dollar does not disappear, but its relative dominance slowly begins to decline.",
                ],
              },
            ],
          },
          {
            heading: "Conclusion",
            paragraphs: [
              "The world economy does not function only through productivity, trade, or innovation. It also functions through imbalances.",
              "China produces surpluses. The United States issues debt. Wall Street absorbs liquidity. Latin America receives the effects of these cycles. The BRICS try to build alternatives. And the dollar remains at the center of the system.",
              "The deeper question is whether this model represents a form of stability or a gradual accumulation of fragility.",
              "Can a global economy based on debt, surpluses, and liquidity keep sustaining itself indefinitely?",
              "Are emerging countries prepared for a sudden change in international financial conditions?",
              "Can Latin America turn this global rivalry into a strategic opportunity?",
              "And will the BRICS be able to build an alternative financial architecture that does not depend on the same mechanisms they criticize today?",
              "These questions will define an important part of the economic and geopolitical debate in the coming years.",
            ],
          },
        ],
      },
      "la-nueva-carrera-lunar-ya-comenzo": {
        title: "The new lunar race has already begun",
        subtitle:
          "The United States and China are competing for the Moon, but the real objective is to control the next strategic infrastructure of space.",
        excerpt:
          "The Moon has returned to the center of international politics. The question is no longer only who arrives first, but who stays, builds infrastructure, secures strategic positions, and helps define the rules of the future space economy.",
        tags: ["Moon", "United States", "China", "Artemis", "space", "BRICS"],
        bodySections: [
          {
            paragraphs: [
              "For decades, lunar exploration was presented as a scientific victory, a technological demonstration, or a symbol of national prestige. Today the Moon is returning to the center of international politics under a different logic. The point is no longer only to arrive first. The point is to stay, build infrastructure, secure strategic positions, and define the rules of the space economy.",
              "The United States and China are entering a decisive phase of lunar competition. Washington is advancing with the Artemis program, designed to restore a sustainable human presence on the Moon. Beijing, for its part, is pursuing a gradual strategy that combines robotic missions, exploration of the lunar south pole, international cooperation, and the declared goal of carrying out a crewed landing before 2030.",
              "The question is no longer whether humanity will return to the Moon. The question is who will build there the first long-term rules, routes, alliances, and infrastructure.",
            ],
          },
          {
            heading: "The Moon as strategic space",
            paragraphs: [
              "The Moon has stopped being only a scientific destination. It is becoming a space of geoeconomic competition.",
              "The main interest is concentrated in the lunar south pole. This area matters because it may contain deposits of water ice in permanently shadowed craters. Water could sustain future human missions, produce oxygen, and eventually generate hydrogen for fuel. That is why controlling access to zones with lunar resources may become a strategic advantage.",
              "China plans to launch the Chang'e-7 mission to explore the lunar south pole, study surface conditions, and search for water, ice, and volatile elements in the lunar soil. The United States, meanwhile, is advancing with Artemis as a broader architecture aimed at future surface missions and sustained presence.",
              "The Moon, then, is not only a celestial body. It is a laboratory of power.",
            ],
          },
          {
            heading: "Artemis and the American return to the Moon",
            paragraphs: [
              "The Artemis program seeks far more than repeating Apollo. Its objective is to build a more durable presence, with the participation of private companies, international partners, and a technological architecture linking Earth orbit, lunar orbit, and the lunar surface.",
              "Unlike the twentieth century, current competition does not depend only on state agencies. Companies such as SpaceX, Blue Origin, Lockheed Martin, Boeing, and other firms in the U.S. aerospace ecosystem are part of a public-private network seeking to reduce costs, accelerate innovation, and turn space into a new economic frontier.",
              "This changes the nature of the lunar race. The competition is not only between flags. It is also between supply chains, contracts, patents, satellites, launch systems, software, communications, space mining, energy, and commercial platforms.",
            ],
            callouts: [
              "The central question is whether the United States can turn technological and financial leadership into a sustainable lunar presence.",
            ],
          },
          {
            heading: "China and the strategy of gradual advance",
            paragraphs: [
              "China is not improvising its space policy. Its lunar program has advanced through a progressive logic: orbiters, robotic landings, sample return, exploration of the far side of the Moon, and now missions oriented toward the south pole.",
              "The Chinese strategy combines three dimensions. First, internal technological development. China seeks to reduce external dependence in rockets, landing modules, crewed spacecraft, robotics, communications, and life-support systems. Second, cumulative scientific presence. Each lunar mission makes it possible to gather information, test technologies, and prepare more complex operations. Third, alliance building. The International Lunar Research Station, promoted by China with Russian participation and other partners, aims to create an alternative platform for space cooperation.",
              "The question is not whether China can match the United States in every dimension. The question is whether it can build an alternative architecture attractive enough for countries that do not want to depend exclusively on the Western ecosystem.",
            ],
          },
          {
            heading: "The race is not only about arriving first",
            paragraphs: [
              "The language of a space race can be useful, but it can also oversimplify the problem. The current competition will not be settled only by a landing date.",
              "Arriving first matters. Staying matters more.",
              "The power that manages to deploy infrastructure, guarantee communications, operate regularly, mobilize partners, finance repeated missions, and establish technical standards will hold an advantage greater than that of an isolated symbolic mission. The competition will unfold in infrastructure, resources, norms, alliances, and narrative.",
              "The lunar race will look less like a sporting contest and more like the construction of a new international architecture.",
            ],
          },
          {
            heading: "The lunar south pole as a point of friction",
            paragraphs: [
              "The lunar south pole could become one of the first spaces of functional territorial competition beyond Earth.",
              "This is not necessarily about sovereignty in the classical sense. The Outer Space Treaty prohibits national appropriation of celestial bodies. But in practice, the installation of bases, scientific equipment, safety zones, and operational corridors can generate indirect forms of control.",
              "If a power deploys infrastructure first in a strategic zone, it can condition the access of other actors. It does not need to declare sovereignty. It can exercise influence through presence, technical standards, logistics, and operational capacity.",
            ],
            callouts: [
              "This raises a delicate question: how will scientific cooperation be prevented from evolving into competition over privileged zones of access?",
            ],
          },
          {
            heading: "The United States, China, and the military dimension",
            paragraphs: [
              "The Moon will not necessarily become a battlefield. But it can become a space of strategic advantage.",
              "Technologies developed for lunar exploration have dual uses: communications, navigation, robotics, artificial intelligence, sensors, cybersecurity, advanced materials, and autonomous systems. Many of these capabilities can serve both civilian and military purposes.",
              "In addition, control over cislunar space, the region between Earth and the Moon, will become increasingly important. Satellites, stations, communication systems, sensors, and logistical platforms could operate there.",
            ],
            callouts: [
              "The deeper question is whether space governance will advance at the same pace as technology, or whether rules will once again arrive late.",
            ],
          },
          {
            heading: "What does it mean for Europe?",
            paragraphs: [
              "Europe participates in Artemis, especially through the European Space Agency, which contributes the European service module for the Orion spacecraft. This allows Europe to remain within the lunar architecture led by the United States and preserve access to high-value missions.",
              "At the same time, Europe faces a dilemma: it has relevant scientific capabilities, but it depends heavily on external partners for heavy launchers, crewed access, and strategic platforms. If it wants its own weight in the space economy, it will need to turn scientific excellence into industrial autonomy and operational capacity.",
              "Europe does not need to compete head-on with the United States or China. But it does need to avoid becoming a secondary partner inside architectures designed by others.",
            ],
          },
          {
            heading: "What does it mean for Latin America?",
            paragraphs: [
              "Latin America may seem distant from the lunar race, but it is not. The new space economy can open opportunities in satellite services, precision agriculture, climate monitoring, telecommunications, scientific education, mining, disaster management, and geospatial data.",
              "The region does not need to send astronauts to the Moon in order to participate in the space economy. It can develop capacities in data analysis, ground stations, satellite applications, university research, scientific cooperation, and regulation.",
              "But there is also a risk: becoming a mere consumer of foreign space services. If Latin America does not invest in human capital, digital infrastructure, and regional cooperation, it will depend on platforms designed outside the region.",
            ],
            callouts: [
              "The regional question is whether Latin America can use the space economy to improve productivity and technological sovereignty.",
            ],
          },
          {
            heading: "What does it imply for the BRICS?",
            paragraphs: [
              "The lunar race also carries implications for the BRICS. China is the most advanced space actor in the expanded bloc. Russia retains historical experience, even though it faces financial, technological, and geopolitical constraints. India has shown significant capabilities through its lunar missions and low operating costs. Brazil and South Africa hold potential in satellite applications, Earth observation, and scientific cooperation.",
              "The challenge for the BRICS is to move from multipolar rhetoric to concrete space projects. A space agenda for the bloc could include satellite-data exchange, launcher cooperation, scientific education, climate monitoring, agriculture, resource management, and participation in lunar infrastructure.",
              "Coordination, however, will not be simple. Capabilities are asymmetric, national priorities differ, and not every member wants to fall under an architecture dominated by China.",
            ],
            callouts: [
              "The question for the BRICS is whether they can build a real multipolar space agenda or whether space will reproduce the same technological hierarchies that exist on Earth.",
            ],
          },
          {
            heading: "Possible scenarios",
            subsections: [
              {
                heading: "1. Sustained American leadership",
                paragraphs: [
                  "The United States consolidates Artemis, achieves new lunar missions, strengthens alliances with Europe, Japan, Canada, and emerging partners, and maintains an advantage in the private space ecosystem.",
                ],
              },
              {
                heading: "2. Accelerated Chinese advance",
                paragraphs: [
                  "China meets its goal of a crewed lunar landing before 2030, consolidates robotic missions at the south pole, and strengthens the International Lunar Research Station.",
                ],
              },
              {
                heading: "3. Limited cooperation and managed competition",
                paragraphs: [
                  "The United States and China compete, but avoid direct confrontation. Minimum rules remain in place to reduce incidents and preserve certain operational frameworks.",
                ],
              },
              {
                heading: "4. Fragmentation of the space order",
                paragraphs: [
                  "Separate space blocs emerge, with incompatible norms, standards, partners, and technological systems.",
                ],
              },
              {
                heading: "5. Accelerated commercialization",
                paragraphs: [
                  "Private firms gain a larger role in transport, communications, mining, energy, and lunar services.",
                ],
              },
            ],
          },
          {
            heading: "Conclusion",
            paragraphs: [
              "The new lunar race is not a repetition of the Cold War. It is a more complex, more commercial, more technological, and more multipolar competition.",
              "The United States holds advantages in alliances, private capital, institutional experience, and financial depth. China has state planning, strategic continuity, industrial capacity, and a clear roadmap toward 2030. Europe is trying not to fall behind. Latin America must decide whether it will watch from the periphery or build useful capabilities inside the emerging space economy.",
              "The Moon will not be only a scientific destination. It will be a platform for testing technologies, building alliances, defining norms, and projecting power.",
              "Who will control the critical infrastructure of cislunar space? Can international cooperation prevent the lunar south pole from becoming a new arena of strategic rivalry? Is Latin America prepared to participate in the space economy or will it remain dependent on external capabilities? Will the BRICS be able to build a space agenda of their own, or will lunar competition reinforce the leadership of a few actors?",
              "The answer will not be defined only in laboratories or launch centers. It will be defined in budgets, alliances, international rules, industrial chains, and political decisions. The lunar race has already begun, but its outcome is still open.",
            ],
          },
        ],
      },
      "estamos-ante-una-burbuja-puntocom-2-0": {
        title: "Are we facing a dot-com bubble 2.0?",
        subtitle:
          "Artificial intelligence is reshaping markets, but it is also testing the limits of financial confidence.",
        excerpt:
          "Artificial intelligence may be a real technological revolution and, at the same time, generate a partial market bubble. The question is not whether AI matters, but how much of current value already depends on excessively perfect expectations.",
        tags: ["AI", "markets", "Nvidia", "dot-com", "productivity", "BRICS"],
        bodySections: [
          {
            paragraphs: [
              "Every major technological revolution tends to arrive with a promise: to change the economy, transform productivity, and open a new phase of growth. It happened with the internet in the 1990s. It is happening now with artificial intelligence.",
              "The comparison with the dot-com bubble is inevitable. In both cases, an emerging technology captured the imagination of investors, companies, governments, and consumers. In both cases, markets began pricing in a future of accelerated growth. And in both cases an uncomfortable question appeared: are we investing in a real transformation or in a narrative that still has not demonstrated its returns?",
              "Artificial intelligence is not a passing fad. Its impact on productivity, defense, education, health, financial services, automation, and trade will be profound. But a real technology can also generate a financial bubble. History shows that both things can be true at the same time.",
            ],
          },
          {
            heading: "The lesson of the dot-com bubble",
            paragraphs: [
              "The dot-com bubble did not burst because the internet was irrelevant. It burst because markets valued too quickly companies that still lacked sustainable business models.",
              "Many firms promised to dominate the new digital economy, but they did not generate enough revenue, they had no profitability, and they depended on future expectations. When capital stopped financing promises and started demanding results, the market corrected abruptly.",
              "And yet the internet did transform the world. After the collapse, companies survived that had built infrastructure, real business models, and durable competitive advantages. Amazon, Google, and other platforms did not deny the bubble; they showed that future winners can also be born inside a bubble.",
            ],
            callouts: [
              "The current question is similar: will artificial intelligence follow the path of the internet as a productive revolution, or the path of the dot-com era as financial excess?",
            ],
          },
          {
            heading: "What makes the current artificial intelligence cycle different",
            paragraphs: [
              "The comparison with the year 2000 has limits. Unlike many dot-com companies, the main actors in the current cycle are not startups without revenue. They are companies with cash, profits, infrastructure, global clients, and dominant positions.",
              "Microsoft, Alphabet, Amazon, Meta, Nvidia, and other major technology players do not depend only on promises. They already have profitable businesses. In addition, they are financing much of their spending on artificial intelligence with their own resources, not only with debt or speculative capital.",
              "This point matters. The current investment wave in artificial intelligence is supported by firms with real financial capacity. The cycle is not built only on fragile companies, but on corporations that are already part of the economic and technological core of the United States.",
              "But this does not remove the risk. It shifts it. The problem is not whether artificial intelligence exists or whether it will matter. The problem is whether the economic returns will arrive as quickly as markets are already pricing in.",
            ],
          },
          {
            heading: "The new center of risk: capital spending and data centers",
            paragraphs: [
              "Artificial intelligence requires expensive infrastructure: chips, data centers, energy, cooling, networks, talent, and large-scale models. This has turned capital spending into one of the main indicators for understanding the cycle.",
              "Artificial intelligence is no longer only software. It is physical, energy, and financial infrastructure. The problem is that this investment must generate returns. Companies are building capacity before there is full clarity about monetization.",
              "If business and consumer demand grows at the expected pace, the spending may be justified. If not, the market may begin questioning the profitability of the infrastructure.",
            ],
            callouts: [
              "The key question is whether we are looking at a long-term strategic investment or at a spending race in which everyone invests out of fear of being left behind.",
            ],
          },
          {
            heading: "The difference between a technological bubble and a financial bubble",
            paragraphs: [
              "A technological bubble does not mean the technology is false. It means the price of assets separates from real economic results.",
              "Artificial intelligence can transform industries and, at the same time, generate excessive valuations in certain companies. It can increase productivity in the long term and, at the same time, produce stock-market corrections in the short term. It can be a real revolution and a partial bubble at the same time.",
              "This distinction is fundamental. The issue is not deciding whether artificial intelligence is real or whether it is a bubble. The right question is more precise: what part of current value is backed by real profits, and what part depends on future expectations?",
            ],
          },
          {
            heading: "The role of Nvidia and semiconductors",
            paragraphs: [
              "No company symbolizes this cycle better than Nvidia. Its position in chips for artificial intelligence turned it into a central actor in the new digital infrastructure. Demand for GPUs, accelerators, and specialized hardware boosted its revenue, margins, and market valuation.",
              "But this concentration also creates vulnerability. When one company, or a very small group of companies, concentrates a large share of market enthusiasm, any change in expectations can generate amplified effects.",
              "The history of technology shows that selling picks and shovels during an investment frenzy can be extremely profitable. But it also shows that, when the expansion phase slows, infrastructure providers can face sharp revisions in demand, margins, and valuation.",
            ],
            callouts: [
              "The question is not whether Nvidia matters. It does. The question is whether the market's current price already discounts a future that is too perfect.",
            ],
          },
          {
            heading: "Artificial intelligence, productivity, and political time",
            paragraphs: [
              "One of the main arguments in favor of the current cycle is that artificial intelligence can generate productivity gains. If companies reduce costs, automate processes, improve decisions, and create new products, economic growth could accelerate.",
              "But there is a problem of timing. Financial markets tend to move faster than the real economy. Stock markets price expectations in months; productivity takes years to materialize. Infrastructure is built first; benefits are captured later.",
              "This gap between financial expectations and economic adoption is one of the biggest risks in the current cycle. If benefits take longer than expected, markets may correct even if the technology keeps advancing.",
              "Artificial intelligence may be in a phase similar to the internet before maturity: an inevitable technology, but with an uneven distribution of winners and losers.",
            ],
          },
          {
            heading: "Geopolitical implications",
            paragraphs: [
              "Artificial intelligence is not only a business phenomenon. It is a central dimension of global power.",
              "The United States retains an advantage because of its capital ecosystem, universities, technology companies, advanced semiconductors, and digital platforms. China is trying to reduce technological dependence, develop its own models, strengthen its chip industry, and apply artificial intelligence to manufacturing, security, logistics, and services.",
              "Europe is trying to regulate without losing competitiveness. Latin America observes the process from a more vulnerable position: as a consumer of technology, a provider of data, a recipient of investment, and a region with relatively low capacity in advanced digital infrastructure.",
              "The dispute will not be only over language models or applications. It will be over data centers, energy, chips, standards, talent, cloud infrastructure, intellectual property, and the ability to integrate artificial intelligence into productive sectors.",
            ],
            callouts: [
              "The geopolitical question is clear: who will capture the value of artificial intelligence - those who use it, those who regulate it, or those who control its infrastructure?",
            ],
          },
          {
            heading: "What does it mean for Latin America",
            paragraphs: [
              "Latin America faces both an opportunity and a risk.",
              "The opportunity lies in using artificial intelligence for productivity, education, health, agriculture, public services, mining, logistics, energy, and state transparency. The region can leap stages if it adopts AI tools strategically.",
              "The risk is being trapped as a simple user of foreign platforms. If Latin America does not develop its own capabilities, it will depend on infrastructure, models, cloud services, and standards designed outside the region. That will limit its technological sovereignty and reduce its ability to capture economic value.",
              "The region does not need to compete directly with the United States or China in foundational models. But it can develop sectoral applications, local data, technical talent, smart regulation, and strategic alliances.",
            ],
            callouts: [
              "The regional question is whether Latin America will use artificial intelligence to transform its productive structure, or only to consume imported technology.",
            ],
          },
          {
            heading: "What does it imply for the BRICS",
            paragraphs: [
              "For the BRICS, artificial intelligence is a test of strategic coordination.",
              "China and India have scale, talent, and digital ecosystems. Russia retains scientific, mathematical, and cybersecurity capabilities. Brazil can play an important role in agriculture, energy, climate data, and digital services. South Africa and new members can contribute regional positions, strategic resources, and emerging markets.",
              "The bloc, however, faces a difficulty: there is still no integrated technological architecture. There are common interests, but also asymmetries, rivalries, and very different levels of digital development.",
              "The challenge for the BRICS is not only to declare technological cooperation. It is to build concrete mechanisms: research centers, financing for digital infrastructure, payment interoperability, data standards, talent formation, and cooperation in mature semiconductors.",
            ],
            callouts: [
              "The question is whether the BRICS can turn demographic and economic weight into coordinated technological capacity.",
            ],
          },
          {
            heading: "Possible scenarios",
            subsections: [
              {
                heading: "1. Artificial intelligence consolidates a new productivity phase",
                paragraphs: [
                  "In this scenario, massive infrastructure spending is justified by rapid business adoption. Companies manage to monetize AI, cut costs, expand margins, and create new markets. Current valuations hold up at least partially.",
                ],
              },
              {
                heading: "2. Selective correction, not systemic collapse",
                paragraphs: [
                  "Some AI-linked firms keep their value, while others fall because they lack real revenue. The market distinguishes between critical infrastructure, profitable applications, and purely speculative projects.",
                ],
              },
              {
                heading: "3. Financial bubble with real technology",
                paragraphs: [
                  "AI keeps advancing, but market prices correct because expectations were excessive. It is a scenario similar to the internet: the technology survives, but many investors lose money.",
                ],
              },
              {
                heading: "4. Geotechnological fragmentation",
                paragraphs: [
                  "The United States, China, Europe, and other blocs develop separate technological ecosystems. AI becomes a tool of geopolitical competition, differentiated regulation, and strategic control of data and infrastructure.",
                ],
              },
            ],
          },
          {
            heading: "Conclusion",
            paragraphs: [
              "Artificial intelligence should not be analyzed as a fad or as an automatic guarantee of growth. It is a transformative technology, but it is also a powerful financial narrative.",
              "The comparison with the dot-com bubble serves to recall one lesson: a technological revolution can be real and, at the same time, overvalued in markets. The internet changed the world, but not every internet company survived. Artificial intelligence may follow the same pattern.",
              "The core issue is not whether AI matters. It does. The real question is who will capture the value, when returns will arrive, and which actors will be exposed if expectations outrun reality.",
              "Are we at the beginning of a new era of productivity or in a phase of financial euphoria? Will big tech firms be able to justify massive infrastructure spending? Is Latin America prepared to capture value or will it only import outside solutions? Will the BRICS manage to build a technological agenda of their own or remain dependent on platforms dominated by others?",
              "The answer will depend not only on technology. It will depend on investment, regulation, energy, talent, infrastructure, and geopolitical strategy. That is where it will be decided whether artificial intelligence becomes a shared productive revolution or a new concentration of global economic power.",
            ],
          },
        ],
      },
      "la-visita-de-trump-a-china-y-la-rivalidad-administrada": {
        title:
          "Trump in Beijing: the rivalry no one can win, but everyone needs to manage",
        subtitle:
          "The visit showed that the relationship between the United States and China is no longer negotiated only by diplomats: CEOs, banks, technology firms, energy companies, industrial chains, and powers seeking to redefine the global order are also part of the conversation.",
        excerpt:
          "The visit to Beijing did not resolve the structural competition between Washington and China. It showed instead that the most important relationship in the international system needs management channels even while technology, trade, security, and global legitimacy remain contested.",
        tags: [
          "Trump",
          "China",
          "United States",
          "Beijing",
          "Xi Jinping",
          "Taiwan",
          "Iran",
          "Russia",
          "diplomacy",
        ],
        bodySections: [
          {
            paragraphs: [
              "Donald Trump's visit to China did not resolve the structural rivalry between Washington and Beijing. But it did send a more important signal: both powers need to manage it.",
              "The relationship between the United States and China has become the most sensitive axis of international politics. Trade, technology, artificial intelligence, Taiwan, Iran, energy, supply chains, financial markets, and the China-Russia relationship are no longer separate topics. They form part of a single strategic equation.",
              "The visit was not a reconciliation. It was a calculated pause inside a long-term competition. Trump needed to show economic results, business access, and direct negotiating capacity with Xi Jinping. China needed to project stability, international recognition, and message control.",
              "The central thesis is clear: the visit did not solve the rivalry, but it showed that both countries need to administer it. Neither side is willing to yield on the issues that define power in the twenty-first century, yet both understand that an open rupture would carry global costs.",
            ],
            callouts: [
              "Washington wants to preserve technological leadership, financial centrality, and military power; China wants recognition, external stability, and room to consolidate its industrial rise.",
            ],
          },
          {
            heading: "The Thucydides Trap and the deeper risk",
            paragraphs: [
              "The visit can be read through a concept that has gained traction in strategic debate: the Thucydides Trap. The idea describes the risk of conflict when a rising power challenges the position of an established power.",
              "Applied to the twenty-first century, the question is whether China's rise generates a defensive reaction in the United States strong enough to push both powers toward structural confrontation. The problem is not that they compete. They will. The problem is whether that competition can remain within manageable limits.",
              "History shows that many wars do not begin because actors want to destroy one another, but because fear, distrust, and miscalculation shrink the space for negotiation. In that sense, the visit to Beijing was also an attempt to contain that logic.",
            ],
            callouts: [
              "The deeper question is whether an established power can accept the rise of another without turning it into an existential threat.",
            ],
          },
          {
            heading: "The diplomacy of symbols: how China received Trump",
            paragraphs: [
              "China did not leave the staging to chance. The visit was designed to communicate historical continuity, political authority, and civilizational confidence. In Chinese diplomacy, places, gestures, and rituals matter as much as official communiques.",
              "Beijing sought to present the visit not as a concession to Washington, but as a meeting between two great powers. The message was clear: China does not receive the United States from a defensive position, but from awareness of its own historical, economic, and strategic weight.",
              "The use of symbolic spaces, high-level protocol, and a narrative of stability reinforced one idea: China wants to be treated as an equivalent power, not only as a trade partner or technological rival, but as a central actor in defining international order.",
            ],
            callouts: ["China did not negotiate only with words. It negotiated with symbols."],
          },
          {
            heading: "A diplomatic summit with a corporate face",
            paragraphs: [
              "One of the most relevant aspects of the visit was the composition of the U.S. delegation. It did not include only cabinet officials, national security advisers, or diplomats. The group also included CEOs and senior executives from major American companies.",
              "Among the most visible figures were Elon Musk, Tim Cook, Jensen Huang, Larry Fink, and Stephen Schwarzman, alongside representatives from Boeing, ExxonMobil, Mastercard, Visa, Qualcomm, Citigroup, and Meta. The visit therefore became a high-level political-business summit.",
              "This changes how the visit should be read. U.S. foreign policy no longer travels alone: it travels with technology platforms, banks, asset managers, manufacturers, energy firms, and industrial giants. The negotiation was between two states, but also between two models of power.",
            ],
            callouts: [
              "The underlying question is who has more power in this relationship: the country that controls global financial and technological platforms, or the country that remains indispensable for production, consumption, and industrial scale.",
            ],
          },
          {
            heading: "Technology and CEOs: the real terms of negotiation",
            paragraphs: [
              "The presence of CEOs was not a decorative detail. It was a signal of the real terms of the negotiation. The U.S.-China rivalry is no longer defined mainly by tariffs. It is defined by artificial intelligence, semiconductors, data, cloud services, electric vehicles, batteries, robotics, payment systems, aviation, energy, and supply chains.",
              "Each company present represented a dimension of new global power. Nvidia embodies the dispute over advanced chips and AI; Apple reflects dependence on supply chains and access to the Chinese consumer; Tesla represents electric vehicles, software, and advanced manufacturing; BlackRock and Blackstone represent global financial capital.",
              "The visit highlighted a central contradiction: Washington wants to limit China's technological rise, yet many of its most important companies still need the Chinese market, Chinese production, or Chinese scale.",
              "Technology war is not fought only with sanctions and export controls. It is also fought in meetings where CEOs seek access, states impose limits, and China decides which foreign companies can continue operating inside its economic ecosystem.",
            ],
            callouts: [
              "The unavoidable question is whether the United States can contain China technologically while its own leading firms still depend on the Chinese market.",
            ],
          },
          {
            heading: "Who really won the visit?",
            paragraphs: [
              "The question of who won the visit is appealing, but it can be misleading. In a relationship as interdependent as that between the United States and China, absolute victories are unlikely. What existed was a partial distribution of gains.",
              "Trump gained an image of direct negotiation. He could present himself as the leader able to sit with Xi in Beijing, bring the top American CEOs, and seek visible economic results for firms, markets, and voters.",
              "Xi also gained. He received Trump on Chinese soil, under carefully designed staging, and projected China as an equivalent power. He also showed that major U.S. companies remain interested in China even while Washington pushes technological restrictions.",
              "CEOs gained political access, visibility, and space to defend their interests. Markets gained a temporary signal of relief. China gained symbolic recognition. The United States gained a narrative of negotiation. But no one secured a definitive victory. The visit bought time, and in this relationship buying time can itself be a temporary victory.",
            ],
          },
          {
            heading: "The Chinese narrative: stability, parity, and message control",
            paragraphs: [
              "From the Chinese perspective, the visit was presented as a sign of diplomatic maturity. Official language emphasized stability, mutual respect, cooperation, and responsible management of differences.",
              "Beijing sought to convey that it does not want direct confrontation with the United States, but it also does not accept a subordinate relationship. It wants dialogue, but from parity. It wants stability, but without giving up its red lines. It wants economic cooperation, but without abandoning technological autonomy.",
              "For Beijing, the visit served to send several messages: to Washington, that China is willing to negotiate but not to yield to unilateral pressure; to the domestic audience, that Xi deals with the United States from a position of strength; and to the Global South, that China can engage the leading Western power without abandoning its language of autonomy.",
            ],
            callouts: [
              "The Chinese narrative does not seek to deny rivalry. It seeks to manage it without appearing weak.",
            ],
          },
          {
            heading: "The American narrative: access, results, and pressure",
            paragraphs: [
              "For Trump, the visit followed a different logic. His goal was to show visible results: access for American companies, commercial commitments, signals of investment, and a personal image of leadership vis-a-vis Xi.",
              "The business delegation reinforced that message. U.S. firms did not travel to China for symbolism. They traveled because China remains too large a market, too important an industrial base, and too relevant an economic space to be replaced easily.",
              "The American contradiction is evident. Washington wants to contain China in technology, semiconductors, artificial intelligence, and strategic chains. But its corporations want to sell, produce, invest, and defend their positions inside the Chinese market.",
            ],
            callouts: [
              "The core tension is how to compete without fully breaking interdependence.",
            ],
          },
          {
            heading: "Taiwan: the limit of any stabilization",
            paragraphs: [
              "Taiwan remains the point where managed competition can become open crisis. For China, it is a question of sovereignty, political legitimacy, and national reunification. For the United States, it is a pillar of Indo-Pacific security architecture and a strategic node because of its role in the global semiconductor industry.",
              "Stability between Washington and Beijing has a clear limit: if the Taiwan dispute escalates, the rest of the agenda can become subordinated to military security. That is why any commercial, technological, or diplomatic advance must be read cautiously.",
              "Such advances can reduce tension in the short term, but they do not remove the structural risk. Taiwan remains the line where management of rivalry could fail most quickly.",
            ],
            callouts: [
              "Can a stable relationship exist between the United States and China while Taiwan remains a red line for Beijing and a strategic asset for Washington?",
            ],
          },
          {
            heading: "Iran: China as a necessary but cautious mediator",
            paragraphs: [
              "The visit must also be analyzed through the Middle East. Iran, energy security, and the Strait of Hormuz form part of both countries' strategic calculations. China is not an external actor to the region: it is one of the main buyers of Gulf energy and has a direct interest in the stability of maritime routes.",
              "It also maintains channels with Iran and seeks to present itself as an actor capable of contributing to regional de-escalation. Here a key dimension appears: China may be a mediating factor, but it does not necessarily want to bear the full cost of becoming a security guarantor in the Middle East.",
              "Beijing has incentives to promote stability because a prolonged crisis would affect energy prices, maritime trade, and economic growth. But it also avoids becoming trapped in highly complex regional conflicts. Its style remains cautious: influence without overexposure.",
            ],
            callouts: [
              "The question is whether China can become an effective mediator in the Middle East without abandoning its traditional principle of direct nonintervention.",
            ],
          },
          {
            heading: "Russia, Putin, and the triangular dimension",
            paragraphs: [
              "Although the visit was bilateral, its meaning was triangular. Russia was not at the table, but it was present in the strategic calculation. The China-Russia relationship limits Washington's ability to treat Beijing and Moscow as separate challenges.",
              "China will not negotiate with the United States while ignoring its relationship with Russia, and Russia watches any U.S.-China rapprochement as a move that may affect the Eurasian balance. Simultaneous pressure on both tends to push them closer together.",
              "Vladimir Putin's upcoming visit to Beijing reinforces this reading. It allows China to show that it can speak with Washington without abandoning its strategic partnership with Moscow. It also allows Russia to display that it is not isolated, even under Western pressure.",
              "The Trump-Xi-Putin sequence reveals something deeper: China does not want to be only a power reacting to others' decisions. It wants to be the space where other actors negotiate, seek recognition, and adjust positions.",
            ],
            callouts: [
              "The strategic question is whether Washington can stabilize its link with China without pushing it even further toward Russia.",
            ],
          },
          {
            heading: "Trade and markets: partial relief, structural uncertainty",
            paragraphs: [
              "The visit had an obvious commercial dimension. U.S. companies were seeking opportunities, access, and signals of stability. China, for its part, sought to reduce uncertainty, attract investment, and display selective openness without giving up its strategic priorities.",
              "Trade can generate positive announcements: purchases, contracts, sectoral agreements, regulatory permissions, or business cooperation. But those outcomes do not change the substance of the rivalry. The relationship will remain shaped by export controls, industrial competition, subsidies, investment screening, and disputes over intellectual property.",
              "Markets can react favorably to any sign of stabilization because the global economy depends on the relationship between its two largest economies. Reduced tensions can benefit technology stocks, industrial firms, commodities, energy, emerging-market currencies, and investment expectations.",
              "But markets also know that the structural problems remain open. The presence of CEOs in the delegation indicates that the private sector wants less uncertainty, not that the rivalry has been resolved.",
            ],
            callouts: [
              "A limited trade agreement can reduce volatility. It does not change the structure of competition.",
            ],
          },
          {
            heading: "Latin America, the BRICS, and the Global South",
            paragraphs: [
              "Latin America should watch this visit closely. The region stands between two structural forces: China as a trade partner, buyer of raw materials, and investor in infrastructure; and the United States as the hemisphere's financial, political, technological, and monetary center.",
              "An improvement in the U.S.-China relationship can reduce volatility, support commodity prices, and improve investment expectations. A rupture, by contrast, can affect trade, exchange rates, financing, logistics, energy, and supply chains.",
              "For the BRICS and the Global South, the visit carries an additional meaning. China seeks to project itself as a power able to negotiate with the United States on equal footing. Russia watches whether Washington is trying to separate Beijing from Moscow. India, Brazil, South Africa, and other emerging actors assess how to benefit from a more competitive world without becoming subordinated to a single power.",
              "The visit confirms that the world no longer functions under a fully unipolar logic. But it does not mean the multipolar order is already consolidated. Multipolarity requires institutions, financing, payment mechanisms, technological coordination, governance, and capacity for execution.",
            ],
            callouts: [
              "Multipolarity benefits only those who have strategy; without it, it can remain a narrative rather than a real architecture.",
            ],
          },
          {
            heading: "Possible scenarios",
            subsections: [
              {
                heading: "1. Managed competition",
                paragraphs: [
                  "The United States and China preserve their rivalry, but keep diplomatic channels active to avoid a rupture. This reduces immediate risks without eliminating structural competition.",
                ],
              },
              {
                heading: "2. Limited trade and technology deal",
                paragraphs: [
                  "Purchases, investments, or partial market-access mechanisms are announced. Trump gets visible results and Xi gains stability, but the underlying disputes remain open.",
                ],
              },
              {
                heading: "3. Accelerated technological fragmentation",
                paragraphs: [
                  "The dispute over artificial intelligence, chips, data, standards, and platforms deepens. U.S. companies become trapped between Washington's rules and the opportunities of the Chinese market.",
                ],
              },
              {
                heading: "4. Partial Chinese mediation on Iran",
                paragraphs: [
                  "China helps create diplomatic conditions to reduce tensions in the Middle East, but avoids assuming the full role of regional security guarantor.",
                ],
              },
              {
                heading: "5. Deeper China-Russia alignment",
                paragraphs: [
                  "If the United States keeps simultaneous pressure on Beijing and Moscow, both can deepen energy, financial, technological, and military cooperation.",
                ],
              },
              {
                heading: "6. A contained but unresolved Thucydides Trap",
                paragraphs: [
                  "Both countries avoid an immediate crisis, but the logic of rivalry between an established power and a rising power remains active. Managing the conflict does not equal resolving it.",
                ],
              },
              {
                heading: "7. Triangular diplomacy from Beijing",
                paragraphs: [
                  "China receives Trump first and Putin afterward, projecting itself as a balancing center between Washington and Moscow. In this scenario, Beijing does not break with either side, but uses both relationships to widen its diplomatic, economic, and strategic margin.",
                ],
              },
            ],
          },
          {
            heading: "Conclusion",
            paragraphs: [
              "Trump's visit to China did not resolve the rivalry. It managed it. That is precisely its meaning. Washington and Beijing know that a rupture would be too costly, yet neither is willing to yield on the issues that define twenty-first century power: technology, security, energy, trade, finance, supply chains, Taiwan, and control of strategic regions.",
              "The visit also showed that world politics is no longer negotiated only by diplomats. It is negotiated by presidents, CEOs, banks, chipmakers, energy companies, asset managers, technological platforms, and nuclear powers. The presence of figures such as Elon Musk, Tim Cook, Jensen Huang, Larry Fink, and Stephen Schwarzman was not a minor detail. It was a snapshot of the new global power structure.",
              "But the background is deeper. The U.S.-China relationship is shaped by the classic Thucydides Trap dilemma: an established power fears losing primacy; a rising power demands recognition and room. Stability will depend on whether both can turn competition into managed rivalry rather than irreversible confrontation.",
              "The United States needs access, stability, and results. China needs time, markets, and recognition. Russia conditions the balance from outside the room. Iran shows that Beijing is already necessary to discuss energy stability. Latin America and the Global South observe a rivalry that may open opportunities, but also multiply pressures. The final question is not whether the United States and China can cooperate. The question is whether they can compete without destroying the minimum conditions for global stability.",
            ],
          },
          {
            heading: "Open questions",
            bullets: [
              "Does the visit represent real stabilization, or only a tactical pause?",
              "Can the United States avoid the Thucydides Trap without accepting a redistribution of global power?",
              "Can China negotiate with Washington without weakening its strategic partnership with Russia?",
              "Who really won the visit: Trump, Xi, American corporations, or simply temporary stability?",
              "Will China become an effective mediator on Iran, or only an actor trying to protect its energy interests?",
              "What does Putin's visit to Beijing mean for the triangular balance among the United States, China, and Russia?",
              "What should Latin America do to avoid getting trapped between centers of power?",
              "Will multipolarity give the Global South more autonomy, or simply multiply the pressures on emerging countries?",
            ],
          },
        ],
      },
      "brics-y-el-nuevo-equilibrio-tecnológico-global": {
        title: "BRICS and the new global technological balance",
        subtitle:
          "Competition over standards, industrial platforms, and computing capacity is redefining the bloc's relative weight.",
        excerpt:
          "The BRICS debate no longer revolves only around currencies or institutional representation. The new question is who controls the technological nodes shaping the next phase of global power.",
        tags: ["BRICS", "AI", "standards", "industrial capacity"],
        thesis:
          "Technological competition among powers has shifted away from bloc rhetoric toward the construction of concrete ecosystems: data centers, talent, advanced manufacturing, and technical norms.",
        whyItMatters: [
          "For the BRICS bloc, technological coordination acts as a multiplier of geopolitical weight even without a fully integrated architecture.",
          "Access to digital infrastructure, mature semiconductors, cloud services, and industrial value chains now defines a growing part of strategic autonomy.",
        ],
        regionalLens:
          "The central question is not whether the BRICS act as a closed alliance, but whether they can synchronize enough priorities to build scale, reduce dependence, and negotiate from a stronger position.",
        outlook:
          "In the short term we will see variable coalitions and partial agreements. In the medium term, the key will be whether the bloc can turn economic volume into durable institutional capacity.",
      },
      "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina": {
        title: "What global trade fragmentation means for Latin America",
        subtitle:
          "Nearshoring, friendshoring, and economic security open opportunities, but they also require industrial strategy and regional coordination.",
        excerpt:
          "Global trade fragmentation does not imply total deglobalization. It implies a more political geography of trade, where Latin America can gain relevance if it avoids a purely extractive insertion.",
        tags: ["nearshoring", "Latin America", "logistics", "industry"],
        thesis:
          "Trade fragmentation does not mean the end of global exchange, but a reorganization based on resilience, political proximity, and risk control.",
        whyItMatters: [
          "For Latin America, the scenario opens room in manufacturing, agribusiness, minerals, and services, but only if there is public-private coordination capacity and logistics improvements.",
          "The region risks becoming a contingency supplier without capturing higher-value segments if it does not strengthen infrastructure, talent, and stable rules.",
        ],
        regionalLens:
          "Mexico, Brazil, Chile, Colombia, and the Southern Cone corridor face different opportunities. The common point is the need to turn a geopolitical moment into consistent economic policy.",
        outlook:
          "The next cycle will reward those offering regulatory predictability, competitive energy, and reliable logistics nodes. Geographic advantage alone is no longer enough.",
      },
      "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global": {
        title: "Russia and Eurasia in the reconfiguration of global power",
        subtitle:
          "Between sanctions, land corridors, and military-industrial capacity, Eurasia is once again occupying a structural place on the international board.",
        excerpt:
          "Eurasia can no longer be read only through the lens of conflict. It must also be analyzed as a logistical, energy, and political space undergoing reordering.",
        tags: ["Eurasia", "security", "sanctions", "corridors"],
        thesis:
          "Eurasian centrality emerges from the convergence of geography, security, and connectivity. Even under pressure, the region continues to shape routes, energy, and diplomatic positions.",
        whyItMatters: [
          "Sanctions accelerated financial and logistical adjustments that altered trade flows, transport nodes, and tactical alliances.",
          "Military-industrial capacity and territorial depth remain decisive variables in any reading of European and Asian security.",
        ],
        regionalLens:
          "From the Caspian to the Arctic, the region combines operational vulnerabilities with geographic advantages that no outside actor can ignore.",
        outlook:
          "The next phase will depend less on communiques and more on productive resilience, the opening of alternative corridors, and the density of agreements with Asia, the Middle East, and the Global South.",
      },
      "energia-corredores-logisticos-y-competencia-geoeconomica": {
        title: "Energy, logistics corridors, and geoeconomic competition",
        subtitle:
          "Supply bottlenecks are no longer a technical matter: they are about power, financing, and anticipatory capacity.",
        excerpt:
          "Corridors, ports, straits, and energy terminals form a single strategic geography. Whoever reduces logistical friction gains political room.",
        tags: ["energy", "corridors", "geoeconomics", "ports"],
        thesis:
          "Current geoeconomic competition is organized around concrete physical infrastructure: ports, electric grids, pipelines, cables, and logistics platforms.",
        whyItMatters: [
          "Actors able to combine financing, security, and operating capacity around those nodes gain influence far beyond their nominal weight.",
          "Energy remains the common language linking national security, industrial policy, and economic diplomacy.",
        ],
        regionalLens:
          "The Middle East remains central not only because of hydrocarbons, but because of its role as a hinge between Asia, Europe, and Africa.",
        outlook:
          "Future disputes will be measured less by aggregate trade volumes and more by control over bottlenecks, redundancies, and response time in crises.",
      },
      "la-inteligencia-artificial-como-herramienta-de-poder-estatal": {
        title: "Artificial intelligence as a tool of state power",
        subtitle:
          "The race for AI is not only a corporate competition. It is a struggle over administration, defense, productivity, and governing capacity.",
        excerpt:
          "AI is moving into the core of the state apparatus: intelligence, fiscal management, industry, defense, and public services. The point is not only to innovate, but to govern better and faster.",
        tags: ["AI", "state", "governance", "productivity"],
        thesis:
          "The dominant narrative presents artificial intelligence as market disruption, when its deepest impact is actually being played out in state capacity.",
        whyItMatters: [
          "Those who integrate AI into bureaucracies, defense, financial supervisión, and strategic planning will raise institutional productivity and expand their external room for action.",
          "The future gap will not be only between leading and lagging firms, but between states capable of absorbing technology and states that merely consume it.",
        ],
        regionalLens:
          "The United States and its allies retain an advantage in capital, compute, and innovative ecosystems, but that advantage requires finer regulatory coordination and public deployment.",
        outlook:
          "The next major debate will be about interoperability, oversight, and doctrine. The geopolitically relevant AI is the one entering real systems, not the one dominating headlines.",
      },
      "tres-señales-que-están-redefiniendo-la-multipolaridad": {
        title: "Three signals redefining multipolarity",
        subtitle:
          "A brief reading of the moves showing where the architecture of global power may shift.",
        excerpt:
          "Multipolarity does not arrive all at once. It shows up in small financial, diplomatic, and technological adjustments that, combined, change the playing field.",
        tags: ["radar", "multipolarity", "BRICS", "governance"],
        signals: [
          {
            title: "More agreements in local currencies",
            detail:
              "They do not replace the dollar in the short term, but they do widen room for maneuver in bilateral trade and selective financing.",
          },
          {
            title: "Parallel institutions gain density",
            detail:
              "Flexible forums, regional banks, and payment platforms are ceasing to be symbolic and are becoming mechanisms of concrete coordination.",
          },
          {
            title: "Sectoral diplomacy weighs more than grand blocs",
            detail:
              "Minerals, energy, connectivity, and artificial intelligence generate partial coalitions that reorder priorities faster than traditional ideological alignments.",
          },
        ],
        outlook:
          "Multipolarity advances when it becomes operational. The relevant question is which agreements produce capacity, not which speeches promise change.",
      },
      "por-que-el-ártico-importa-cada-vez-más": {
        title: "Why the Arctic matters more and more",
        subtitle:
          "New routes, resources, security, and climate are turning the far north into one of the most sensitive strategic frontiers.",
        excerpt:
          "The Arctic is becoming a zone of simultaneous competition in energy, trade, military affairs, and science. That overlap explains its growing relevance.",
        tags: ["Arctic", "routes", "energy", "security"],
        thesis:
          "The Arctic concentrates a strategic rarity: it is at once a climate frontier, an energy reserve, a potential corridor, and a space of military competition.",
        whyItMatters: [
          "Changes in navigability, dual-use infrastructure, and resource extraction alter calculations of cost, time, and military presence.",
          "Europe, Russia, North América, and Asia look at the Arctic through different lenses, but all agree its relative importance is increasing.",
        ],
        regionalLens:
          "For Europe, the Arctic combines energy security, route protection, and the need to coordinate with allies without losing regulatory autonomy.",
        outlook:
          "This is not a new gold rush. It is a space forcing a rethink of infrastructure, deterrence, and governance before the pressure grows even more.",
      },
      "china-y-asia-estándares-digitales-y-rutas-industriales": {
        title: "China and Asia: digital standards and industrial routes",
        subtitle:
          "The region is consolidating a less visible but deeper advantage: defining how technology is produced, connected, and scaled.",
        excerpt:
          "Asia is no longer only the world's factory. It is also a laboratory of standards, industrial coordination, and digital infrastructure with global impact.",
        tags: ["Asia", "standards", "digital", "industry"],
        thesis:
          "Asian influence is growing because it combines productive scale, financing, and the ability to define operating rules in strategic sectors.",
        whyItMatters: [
          "Whoever sets technical standards also sets entry costs, interoperability, and future dependency.",
          "The integration of manufacturing, logistics, and digital connectivity gives Asia a systemic depth that is hard to replicate elsewhere.",
        ],
        regionalLens:
          "China stands at the center of the board, but the regional ecosystem also depends on India, ASEAN, Korea, Japan, and multiple functional arrangements.",
        outlook:
          "The next battle over technology chains will not be only about brand leadership, but about the capacity to impose practical rules for production and adoption.",
      },
      "europa-seguridad-industrial-y-autonomía-estratégica": {
        title: "Europe: industrial security and strategic autonomy",
        subtitle:
          "The European agenda is trying to reconcile open markets, defense, energy, and productive reconstruction without losing political cohesion.",
        excerpt:
          "Europe faces a structural dilemma: it needs to become more resilient without ceasing to be open. That tensión is redesigning its economic policy and geopolitical language.",
        tags: ["Europe", "strategic autonomy", "industry", "regulation"],
        thesis:
          "European strategic autonomy is not a sudden ideological turn. It is the accumulated response to energy shocks, technological pressure, and industrial vulnerability.",
        whyItMatters: [
          "Europe is redefining subsidies, competition rules, and economic security policies to reduce dependence in critical sectors.",
          "The challenge is to do so without fragmenting the internal market or weakening diplomatic capacity with key partners.",
        ],
        regionalLens:
          "The European discussion is less binary than it often appears: it is not about choosing autonomy over alliance, but about finding a sustainable combination of both.",
        outlook:
          "Success will depend on executing selective industrial policies with credible financing and coordinating regulation with a more geopolitical vision of the common market.",
      },
      "africa-minerales-críticos-manufactura-y-poder-negociador": {
        title: "Africa: critical minerals, manufacturing, and bargaining power",
        subtitle:
          "The continent is gaining centrality in the energy transition, but the real question is how much value capture it will be able to retain.",
        excerpt:
          "Africa has become indispensable for critical minerals, corridors, and future demand. The challenge is turning that centrality into indigenous industrial capacity.",
        tags: ["Africa", "critical minerals", "manufacturing", "bargaining"],
        thesis:
          "Africa's new centrality is not explained only by resources. It is explained by the combination of minerals, urban markets, connectivity, and geographic position.",
        whyItMatters: [
          "The energy transition and the competition for batteries increase the strategic value of cobalt, copper, manganese, and rare earths.",
          "The real opportunity lies in turning extractive contracts into platforms for processing, skills formation, and shared infrastructure.",
        ],
        regionalLens:
          "African governments now negotiate with somewhat greater room because there is more competition among providers of financing, technology, and security.",
        outlook:
          "The inflection point will come if that external competition translates into national industrialization agendas backed by institutions capable of sustaining them.",
      },
      "estados-unidos-alianzas-y-política-industrial-de-segunda-ola": {
        title: "The United States, alliances, and second-wave industrial policy",
        subtitle:
          "Washington is trying to move from reaction to a more durable strategy based on industry, economic security, and coordination with allies.",
        excerpt:
          "U.S. industrial policy is no longer a parenthesis. It is becoming the economic grammar of a new phase of systemic competition.",
        tags: ["United States", "alliances", "industry", "economic security"],
        thesis:
          "The new U.S. industrial policy seeks to rebuild domestic capacity while organizing productive alliances around critical sectors.",
        whyItMatters: [
          "The shift affects supply chains, investment incentives, trade rules, and room for maneuver for partners and competitors.",
          "Coordination with allies is no longer measured only in defense, but also in subsidies, minerals, chips, and the protection of sensitive technology.",
        ],
        regionalLens:
          "The West is moving toward a less naive model of interdependence. The question is whether it can coordinate priorities without multiplying internal frictions.",
        outlook:
          "The second industrial wave will be judged by tangible results: construction times, access to inputs, political stability, and the ability to generate full ecosystems.",
      },
      "diplomacia-de-media-potencia-en-america-latina": {
        title: "Middle-power diplomacy in Latin America",
        subtitle:
          "The region can gain influence if it combines selective ambition, institutional consistency, and a realistic reading of its environment.",
        excerpt:
          "In a more fragmented world, middle powers have an advantage: they can negotiate with flexibility. The disadvantage appears when that flexibility lacks strategy.",
        tags: ["Latin America", "diplomacy", "middle powers", "autonomy"],
        thesis:
          "Latin American diplomacy can be more influential if it abandons the false choice between rhetorical neutrality and passive alignment.",
        whyItMatters: [
          "There is room to negotiate, but it requires clear national priorities, consistent technical teams, and an agenda of concrete interests.",
          "The region holds valuable assets in food, energy, minerals, and geographic position, yet it still communicates and coordinates them in fragmented ways.",
        ],
        regionalLens:
          "Brazil, Mexico, Chile, Colombia, and other middle actors do not need to speak identically to generate weight. They need to know where to cooperate and where to differentiate themselves.",
        outlook:
          "The next decade will reward countries capable of offering diplomatic reliability and strategic clarity, not only rhetoric of autonomy.",
      },
      "medio-oriente-finanzas-energia-y-el-orden-postpetrolero": {
        title: "Middle East: finance, energy, and the post-oil order",
        subtitle:
          "The region is using sovereign capital, infrastructure, and economic diplomacy to prepare a broader influence than oil alone can provide.",
        excerpt:
          "Speaking of a post-oil order does not mean oil is losing relevance. It means the region is trying to diversify its power before the market changes completely.",
        tags: ["Middle East", "sovereign funds", "energy", "logistics"],
        thesis:
          "The major Gulf actors are transforming energy rents into financial capacity, connectivity, and diplomatic projection.",
        whyItMatters: [
          "This conversion of liquidity into strategic position changes investment routes, logistics chains, and alliances with Asia, Europe, and Africa.",
          "The region no longer competes only through energy production, but through control of infrastructure, services, and capital platforms.",
        ],
        regionalLens:
          "The Middle East moves both as a bridge between regions and as an actor with its own agenda. That duality raises its ability to arbitrate.",
        outlook:
          "Future influence will depend on how quickly diversification visions are translated into resilient productive sectors and advanced human capital.",
      },
      "infraestructura-corredores-y-poder-en-eurasia": {
        title: "Infrastructure, corridors, and power in Eurasia",
        subtitle:
          "Rail routes, dry ports, and new land connections are changing the strategic calculations of public and private actors.",
        excerpt:
          "Infrastructure is not neutral. In Eurasia, every corridor reorganizes costs, dependencies, and alliances with effects that go well beyond trade.",
        tags: ["Eurasia", "corridors", "infrastructure", "logistics"],
        thesis:
          "Eurasian corridors are devices of power because they connect markets, financing, physical security, and diplomatic options.",
        whyItMatters: [
          "Every alternative route reduces vulnerability to sanctions, bottlenecks, or maritime crises.",
          "Companies also adjust their strategies when politics alters transit times, insurance, costs, and infrastructure availability.",
        ],
        regionalLens:
          "From the Caspian Sea to connections with China, India, and the Middle East, Eurasia combines competing projects and tactical complementarities.",
        outlook:
          "The big variable will be operational continuity. In volatile environments, the most valuable corridor is not the shortest one, but the most reliable.",
      },
      "radar-semanal-estrechos-estándares-y-alimentos": {
        title: "Weekly radar: straits, standards, and food",
        subtitle:
          "Four discreet moves that help read broader logistical and political tensions.",
        excerpt:
          "This week leaves signals connecting maritime security, technological regulation, and food supply. None of them stands alone.",
        tags: ["radar", "straits", "food", "regulation"],
        signals: [
          {
            title: "More pressure on sensitive maritime routes",
            detail:
              "Diversions increase transit times, insurance costs, and fuel use, with a direct impact on final prices.",
          },
          {
            title: "New technical rules reshape market access",
            detail:
              "Standards on traceability and data already work as competitive filters in industrial and agro-food sectors.",
          },
          {
            title: "Food security returns to the center",
            detail:
              "Climate, financing, and logistics are tightly connected. Tensions on one front quickly spill over into the others.",
          },
          {
            title: "Africa gains bargaining room",
            detail:
              "The mix of ports, minerals, and domestic demand gives several African countries a more relevant voice in multilateral conversations.",
          },
        ],
        outlook:
          "This week's radar reinforces one idea: technical frictions often anticipate larger strategic shifts.",
      },
      "radar-semanal-ia-sanciones-y-monedas": {
        title: "Weekly radar: AI, sanctions, and currencies",
        subtitle:
          "Three brief signals for reading how technology, finance, and state capacity are coupling together.",
        excerpt:
          "In the short term, global transformations filter through apparently technical measures. Over the long term, those measures redefine hierarchies.",
        tags: ["radar", "AI", "sanctions", "currencies"],
        signals: [
          {
            title: "AI enters sectoral regulation",
            detail:
              "The debate is no longer abstract. Governments are beginning to demand traceability, risk assessment, and concrete governance by sector.",
          },
          {
            title: "Sanctions generate redundancy systems",
            detail:
              "Payments, insurance, suppliers, and logistics networks adapt in order to survive in environments of greater political friction.",
          },
          {
            title: "Local currencies gain tactical use",
            detail:
              "They do not replace the dominant system, but they do open transactional and financing spaces that are less exposed to geopolitical volatility.",
          },
        ],
        outlook:
          "The common lesson is clear: technology and finance already operate as part of the same strategic board.",
      },
    },
  },
  ru: {
    site: {
      tagline:
        "Strategicheskaya analitika po geopolitike, tekhnologiyam, ekonomike i novomu mirovomu poryadku.",
      description:
        "Redaktsionnaya platforma i tsifrovoy think tank dlya interpretatsii globalnykh izmeneniy s glubinoy, suzhdeniem i yasnostyu.",
    },
    navigation: {
      home: "Glavnaya",
      analysis: "Analitika",
      opinion: "Mnenie",
      radar: "Radar nedeli",
      regions: "Regiony",
      sectors: "Sektory",
      experts: "Eksperty",
      about: "O Geo Scope",
      contact: "Kontakt",
      subscription: "Podpiska",
    },
    newsletterInterests: [
      "Geopolitika",
      "Mezhdunarodnaya ekonomika",
      "Tekhnologii i geopolitika",
      "Energetika",
      "Torgovlya i tsepochki postavok",
      "Oborona i bezopasnost",
      "Diplomatiya",
      "Strategicheskaya infrastruktura",
      "Iskusstvennyy intellekt i globalnaya vlast",
      "Mnogopolyarnost i globalnoe upravlenie",
    ],
    about: {
      mission:
        "Interpretirivat globalnye izmeneniya s redaktsionnoy strogostyu, strategicheskim vzglyadom i yasnym yazykom.",
      vision:
        "Stat referentnoy platformoy dlya prinimayushchikh resheniya, analitikov, biznesa, akademicheskoy sredy i chitateley, kotorye khotyat ponyat globalnuyu perestroiku za predelami novostnogo tsikla.",
      manifesto: [
        "Geo Scope iskhodit iz prostoy posylki: miru nuzhen ne dopolnitelnyy shum, a luchshie ramki dlya myshleniya.",
        "Platforma sochetaet glubokoe chtenie, sravnitelnoe suzhdenie i mezhdunarodnuyu chuvstvitelnost, chtoby obyasnyat geoekonomicheskie, tekhnologicheskie i politicheskie trendy strogo i tochno.",
        "My ne gonymsya za mgnovennoy reaktsiey. My otdaem prioritet kontekstu, posledstviyam i pravilnym voprosam.",
      ],
      principles: [
        "Analitika prevyshe trevogi.",
        "Glubina prevyshe skorosti.",
        "Regionalnyy kontekst s globalnym vzglyadom.",
        "Yasnyy yazyk bez poteri strategicheskoy plotnosti.",
      ],
    },
    authors: {
      "javier-salazar-segales": {
        role: "Generalnyy direktor i osnovatel",
        specialty:
          "Spetsialist po geopolitike, diplomatii, BRICS, Latinskoy Amerike, AI & Technology, energetike i mezhdunarodnoy torgovle",
        summary:
          "Boliviyskiy mezhdunarodnyy analitik i osnovatel Geo Scope, s fokusom na geopolitiku, diplomatiyu, BRICS, tekhnologii i transformatsiyu globalnogo poryadka.",
        affiliations: ["Generalnaya direktsiya", "Osnovatel", "Geo Scope"],
        expertise: [
          "Geopolitika",
          "Diplomatiya",
          "BRICS",
          "Latinskaya Amerika",
          "AI & Technology",
          "Energetika",
          "Mezhdunarodnaya torgovlya",
        ],
        languages: ["Ispanskiy", "Angliyskiy", "Russkiy", "Kitayskiy"],
        education:
          "Podgotovka v oblasti informatiki, informatsionnykh tekhnologiy, mezhdunarodnogo biznesa i upravleniya biznesom, a takzhe opyt v diplomatii, mezhdunarodnom sotrudnichestve, prikladnom politicheskom analize i geopolitike.",
        biography: [
          "Khavier Dzhonatan Salazar Segales - boliviyskiy mezhdunarodnyy analitik i osnovatel Geo Scope, platformy, posvyashchennoy geopoliticheskomu analizu, strategicheskomu intellektu, BRICS, Latinskoy Amerike, tekhnologiyam, energetike i transformatsii globalnogo poryadka. Imeia podgotovku i opyt v oblasti diplomatii, mezhdunarodnogo biznesa i tekhnologiy, on izuchaet, kak voznikayushchie derzhavy, novye ekonomicheskie bloki, iskusstvennyy intellekt i geopoliticheskaya konkurentsiya perestraivayut globalnoe upravlenie i mezhdunarodnye otnosheniya.",
          "Khavier Salazar Segales imeet professionalnyy opyt v diplomaticheskikh voprosakh, podgotovke politicheskikh i ekonomicheskikh dokladov, institutsionalnoy koordinatsii i mezhdunarodnom sotrudnichestve. V krug ego interesov vkhodyat rol BRICS v Globalnom Yuge, polozhenie Latinskoy Ameriki v mnogopolyarnom mire, tekhnologicheskiy suverenitet, energeticheskaya bezopasnost i vliyanie iskusstvennogo intellekta na gosudarstvennuyu vlast i strategicheskoe prinyatie resheniy.",
          "Cherez Geo Scope on stremitsya predlagat yasnyy, dostupnyy i orientirovannyy na budushchee analiz glavnykh sil, formiruyushchikh XXI vek, s osobym vnimaniem k peresecheniyu geopolitiki, ekonomiki, tekhnologiy i regionalnogo razvitiya.",
        ],
      },
      "tomas-velez": {
        role: "Redaktor po geoekonomike",
        specialty: "Geoekonomika i mezhdunarodnye finansy",
        summary:
          "Otslezhivaet tsepochki stoimosti, finansovye potoki i valyutnuyu konkurentsiyu v mezhdunarodnom prostranstve.",
        affiliations: ["Geoekonomicheskaya redaktsiya", "Geo Scope"],
        expertise: ["Globalnaya geoekonomika", "Finansovye rynki", "Torgovlya", "Valyuty"],
        education:
          "Mezhdunarodnaya ekonomika, politicheskie finansy i analiz sistemnykh riskov.",
        biography: [
          "Tomas Veles analiziruet vzaimodeystvie mezhdu torgovley, dolgom, likvidnostyu i geoekonomicheskim sopernichestvom. V Geo Scope on sledit za evolyutsiey dollarovoy sistemy, strategiyami monetarnoy diversifikatsii i shokami, vliyayushchimi na mezhdunarodnuyu finansovuyu arkhitekturu.",
          "Ego redaktsionnaya rabota svyazyvaet chtenie rynkov s logikoy gosudarstvennoy vlasti, obyasnyaya, kak stavki, obligatsii, logisticheskie tsepochki i promyshlennaya politika prinadlezhat odnoi i toy zhe strategicheskoy konkurentsii.",
        ],
      },
      "clara-ibanez": {
        role: "Analitik po tekhnologiyam i vlasti",
        specialty: "Strategicheskie tekhnologii, II i normativnaya konkurentsiya",
        summary:
          "Rabotaet nad tsifrovymi standartami, iskusstvennym intellektom i gosudarstvennoy vlastyu v ekonomike platform.",
        affiliations: ["Laboratoriya tekhnologiy i vlasti", "Geo Scope"],
        expertise: [
          "Tekhnologii i geopolitika",
          "Iskusstvennyy intellekt",
          "Poluprovodniki",
          "Tsifrovoe regulirovanie",
        ],
        education:
          "Tekhnologicheskaya politika, tsifrovoe upravlenie i sravnitelnyy analiz innovatsiy.",
        biography: [
          "Klara Ibanyes osveshchaet tekhnologicheskuyu konkurentsiyu mezhdu krupnymi derzhavami, osobenno v sferakh poluprovodnikov, iskusstvennogo intellekta, tsifrovoy infrastruktury i regulirovaniya. Ee osnovnoy interes v tom, kak tekhnologiya stanovitsya instrumentom gosudarstvennoy moshchi i mezhdunarodnogo proektirovaniya.",
          "V Geo Scope ona razrabatyvaet analiticheskie ramki dlya ponimaniya svyazi mezhdu innovatsiyami, ekonomicheskoy bezopasnostyu i globalnym upravleniem, sravnivaya SShA, Kitay, Evropu i industrialnuyu Aziyu.",
        ],
      },
      "adrian-rivas": {
        role: "Starshiy issledovatel mezhdunarodnoy bezopasnosti",
        specialty: "Mezhdunarodnaya bezopasnost, oborona i sderzhivanie",
        summary:
          "Analiziruet arkhitekturu bezopasnosti, voennuyu promyshlennost i strategicheskoe sopernichestvo mezhdu derzhavami.",
        affiliations: ["Programma mezhdunarodnoy bezopasnosti", "Geo Scope"],
        expertise: ["Oborona i bezopasnost", "Sderzhivanie", "Rossiya i Evraziya", "Soyuzy"],
        education:
          "Issledovaniya bezopasnosti, sravnitelnaya oborona i sovremennaya voennaya strategiya.",
        biography: [
          "Adrian Rivas sledit za transformatsiey globalnoy arkhitektury bezopasnosti: ot konkurentsii alyansov do dinamiki sderzhivaniya, voennykh doktrin i oboronno-promyshlennoy bazy. V Geo Scope on predlagaet strategicheskoe chtenie konfliktov, vozmozhnostey i balansov sily.",
          "Ego rabota osobenno podcherkivaet Evraziyu, evropeyskuyu bezopasnost i institutsionalnuyu adaptatsiyu v bolee fragmentirovannoy, militarizovannoy i tekhnologicheski slozhnoy mezhdunarodnoy srede.",
        ],
      },
      "lucia-ferrer": {
        role: "Redaktor po regionam i diplomatii",
        specialty: "Sravnitelnaya diplomatiya i regionalnyy analiz",
        summary:
          "Koordiniruet regionalnye pokrytiya i analiziruet diplomaticheskoe pozitsionirovanie, mediatsiyu i strategicheskuyu avtonomiyu.",
        affiliations: ["Redaktsiya regionov i diplomatii", "Geo Scope"],
        expertise: ["Diplomatiya", "Latinskaya Amerika", "Blizhniy Vostok", "Strategicheskaya avtonomiya"],
        education:
          "Vneshnyaya politika, mnogostoronnyaya diplomatiya i sravnitelnye regionalnye issledovaniya.",
        biography: [
          "Lusiya Ferrer koordiniruet sravnitelnoe regionalnoe osveshchenie v Geo Scope i rabotaet nad diplomatiey, gibkimi vyravnivaniyami i strategiyami avtonomii. Ee podkhod pokazyvaet, kak srednie i regionalnye aktery vyigryvayut prostranstvo dlya manevra v bolee konkurentnom mezhdunarodnom poryadke.",
          "Ee rabota svyazyvaet regionalnye stszenarii s globalnymi posledstviyami, osobenno v Latinskoy Amerike, na Blizhnem Vostoke i v prostranstvakh mediatsii, gde diplomatiya snova stanovitsya tsentralnym instrumentom vlasti i adaptatsii.",
        ],
      },
    },
    regions: {
      global: {
        name: "Globalnyy uroven",
        strap: "Sistemnye potoki, finansovaya vlast i mezhdunarodnaya perestroika.",
        description:
          "Skvoznye materialy o silakh, svyazyvayushchikh krupnye derzhavy, globalnuyu likvidnost, torgovlyu, tekhnologii i arkhitekturu vlasti v mirovom masshtabe.",
        tags: ["dollar", "likvidnost", "potoki", "mezhdunarodnaya sistema"],
      },
      brics: {
        name: "BRICS",
        strap: "Gibkaya koordinatsiya, promyshlennyy ves i parallelnaia arkhitektura.",
        description:
          "Otslezhivanie politicheskoy, finansovoy i tekhnologicheskoy evolyutsii prostranstva BRICS i ego vliyaniya na globalnyy institutsionalnyy balans.",
        tags: ["valyuty", "standarty", "Globalnyy Yug", "finansy"],
      },
      "america-latina": {
        name: "Latinskaya Amerika",
        strap: "Resursy, diplomatiya avtonomii i strategicheskoe pozitsionirovanie.",
        description:
          "Materialy o meste Latinskoy Ameriki v konkurentsii za tsepochki stoimosti, energetiku, kriticheskie mineraly i srednesrochnye alyansy.",
        tags: ["nearshoring", "syrie", "avtonomiya", "porty"],
      },
      "rusia-eurasia": {
        name: "Rossiya i Evraziya",
        strap: "Koridory, rasshirennaya bezopasnost i kontinentalnaya reorganizatsiya.",
        description:
          "Analiz strategicheskoy proektsii Rossii i Evrazii na pole, prokhodyashchem cherez sanktsii, logisticheskie marshruty i voenno-promyshlennuyu konkurentsiyu.",
        tags: ["sanktsii", "sderzhivanie", "koridory", "energetika"],
      },
      "china-asia": {
        name: "Kitay i Aziya",
        strap: "Proizvodstvennyy masshtab, tekhnicheskie standarty i konkurentsiya za manufakturu.",
        description:
          "Otslezhivanie tsentralnosti Azii v tekhnologiyakh, torgovle, infrastrukture i finansovoy arkhitekture XXI veka.",
        tags: ["poluprovodniki", "svyaznost", "proizvodstvo", "tsifrovaya sfera"],
      },
      europa: {
        name: "Evropa",
        strap: "Strategicheskaya avtonomiya, industriya i bezopasnost s vysokoy regulativnoy plotnostyu.",
        description:
          "Pokrytie napryazheniya mezhdu otkrytostyu, ekonomicheskoy bezopasnostyu, oboronoy i promyshlennoy rekonstruktsiey v evropeyskoy povestke.",
        tags: ["energetika", "regulirovanie", "oborona", "Arktika"],
      },
      "medio-oriente": {
        name: "Blizhniy Vostok",
        strap: "Kapital, energetika i novye geografii regionalnoy vlasti.",
        description:
          "Analiz energetiki, koridorov, suverennykh finansov i diplomaticheskoy rekonfiguratsii na Blizhnem Vostoke.",
        tags: ["Zaliv", "neft", "suverennye fondy", "prolivy"],
      },
      africa: {
        name: "Afrika",
        strap: "Kriticheskie mineraly, infrastruktura i peregovornaya sila.",
        description:
          "Otslezhivanie afrikanskoy roli v energeticheskom perekhode, novykh promyshlennykh tsepochkakh i borbe za svyaznost i resursy.",
        tags: ["med", "litiy", "porty", "industrializatsiya"],
      },
      "estados-unidos-occidente": {
        name: "SSHA i Zapad",
        strap: "Tekhnologicheskaya vlast, alyansy i promyshlennaya politika vtorogo pokoleniya.",
        description:
          "Materialy o pereproektirovanii zapadnoy vlasti cherez subsidii, ekonomicheskuyu bezopasnost, sanktsii i vosstanovlenie alyansov.",
        tags: ["chipy", "alyansy", "subsidii", "tekhnopolitika"],
      },
    },
    sectors: {
      "geoeconomia-global": {
        name: "Globalnaya geoekonomika",
        description:
          "Vzaimodeystvie torgovli, dolga, valyut, finansovoy vlasti i mezhdunarodnoy strategii.",
      },
      "mercados-financieros": {
        name: "Finansovye rynki",
        description:
          "Likvidnost, stavki, obligatsii, fondovye rynki i mekhanizmy pogloshcheniya mirovykh sberezheniy.",
      },
      "china-estados-unidos": {
        name: "Kitay i Soedinennye Shtaty",
        description:
          "Strukturnaya konkurentsiya mezhdu proizvodstvom, finansami, tekhnologiyami i gosudarstvennoy sposobnostyu.",
      },
      geopolítica: {
        name: "Geopolitika",
        description:
          "Konkurentsiya derzhav, regionalnyy balans i pereuporyadochenie vlasti.",
      },
      "economia-internacional": {
        name: "Mezhdunarodnaya ekonomika",
        description:
          "Finansovye potoki, promyshlennaya politika, dolg, valyuty i globalnaya arkhitektura.",
      },
      "tecnologia-geopolitica": {
        name: "Tekhnologii i geopolitika",
        description:
          "Tsifrovaya infrastruktura, standarty, chipy, platformy i gosudarstvennaya sposobnost.",
      },
      energía: {
        name: "Energetika",
        description:
          "Neft, gaz, vozobnovlyaemye istochniki, kriticheskie mineraly i bezopasnost postavok.",
      },
      "comercio-cadenas-logisticas": {
        name: "Torgovlya i tsepochki postavok",
        description:
          "Morskie marshruty, reshoring, nearshoring i reorganizatsiya proizvodstvennykh uzlov.",
      },
      "defensa-seguridad": {
        name: "Oborona i bezopasnost",
        description:
          "Voennaya sposobnost, sderzhivanie, oboronno-promyshlennyy kompleks i arkhitektura bezopasnosti.",
      },
      diplomacia: {
        name: "Diplomatiya",
        description:
          "Vyravnivaniya, mediatsiya, regionalnye fory i strategicheskoe upravlenie otnosheniyami.",
      },
      "infraestructura-estrategica": {
        name: "Strategicheskaya infrastruktura",
        description:
          "Koridory, porty, telekommunikatsii i uzly kriticheskoy svyaznosti.",
      },
      "inteligencia-artificial-poder-global": {
        name: "Iskusstvennyy intellekt i globalnaya vlast",
        description:
          "II kak vektor konkurentosposobnosti, nablyudeniya, proizvoditelnosti i gosudarstvennoy proektsii.",
      },
      "multipolaridad-gobernanza-global": {
        name: "Mnogopolyarnost i globalnoe upravlenie",
        description:
          "Instituty, gibkie koalitsii i voznikayushchie pravila mezhdunarodnoy sistemy.",
      },
    },
    articles: {
      "china-produce-estados-unidos-se-endeuda-y-wall-street-gana": {
        title: "Kitay proizvodit, Soedinennye Shtaty zanimayut, a Uoll-strit vyigryvaet",
        subtitle:
          "Globalnaya ekonomika rabotaet na paradokse: disbalansy mezhdu proizvodstvom, dolgom i likvidnostyu podderzhivayut chast mezhdunarodnogo finansovogo poryadka.",
        excerpt:
          "Kitay eksportiruet profitsity, Soedinennye Shtaty pogloshchayut mirovye sberezheniya cherez dolg, a Uoll-strit poluchaet znachimuyu chast mezhdunarodnoy likvidnosti. Vopros v tom, kak dolgo etot model mozhet sokhranyatsya.",
        tags: ["Kitay", "SSHA", "Uoll-strit", "dollar", "BRICS", "globalnaya likvidnost"],
        bodySections: [
          {
            paragraphs: [
              "Globalnaya ekonomika rabotaet na paradokse: osnovnye disbalansy sistemy ne obyazatelno oslablyayut ee v kratkosrochnoy perspektive; vo mnogikh sluchayakh oni ee podderzhivayut.",
              "Kitay sokhranyaet ogromnye eksportnye vozmozhnosti i nakaplivayet torgovye profitsity. Soedinennye Shtaty podderzhivayut vysokie fiskalnye defitsity i finansiruyut svoi rashody cherez dolg. Mezhdu etimi dvumya yavleniyami voznikayet mezhdunarodnyy kontur likvidnosti, kotoryy v itoge blagopriyatstvuet finansovym rynkam, osobenno Uoll-strit.",
              "Tsentralnyy vopros ne tolko ekonomicheskiy. On geopoliticheskiy: mozhet li mir i dalshe zaviset ot modeli, v kotoroy odna derzhava proizvodit profitsity, a drugaya pogloshchayet kapital, vypuskaya dolg?",
            ],
          },
          {
            heading: "Dva disbalansa, dvigayushchie globalnuyu sistemu",
            paragraphs: [
              "Pervyy disbalans - kitayskaya eksportnaya model. Kitay prodaet miru bolshe, chem pokupayet. Ego proizvodstvennaya sila, promyshlennyy masshtab i sposobnost proizvodit konkurentosposobnye tovary pozvolyayut emu nakaplivat krupnye torgovye profitsity.",
              "Vtoroy disbalans - amerikanskiy fiskalnyy defitsit. SSHA tratyat bolshe, chem sobirayut, i finansiruyut raznitsu vypuskom gosudarstvennogo dolga. V otlichie ot mnogikh drugikh stran, oni mogut delat eto na blagopriyatnykh usloviyakh, potomu chto vypuskayut glavnuyu rezervnuyu valyutu mira: dollar.",
              "Eti dva protsessa svyazany. Profitsity eksportiruyushchikh ekonomik ishchut bezopasnye, likvidnye i dokhodnye aktivy. SSHA predlagayut samyy glubokiy finansovyy rynok v mire. V rezulstate chast mirovykh sberezheniy perenapravlyaetsya v kaznacheyskie obligatsii, amerikanskie aktsii, tekhnologii, investitsionnye fondy i krupnye korporatsii.",
            ],
            callouts: [
              "Inymi slovami: Kitay eksportiruet tovary, SSHA eksportiruyut dolg, a Uoll-strit pogloshchaet likvidnost.",
            ],
          },
          {
            heading: "S&P 500 kak otrazhenie amerikanskoy finansovoy vlasti",
            paragraphs: [
              "S&P 500 - eto ne prosto fondovyy indeks. Eto reprezentatsiya korporativnogo, tekhnologicheskogo i finansovogo tsentra Soedinennykh Shtatov. Tam nakhodyatsya kompanii, dominiruyushchie v klyuchevykh sektorakh: iskusstvennyy intellekt, software, poluprovodniki, oborona, zdravookhranenie, energetika, potreblenie i finansovye uslugi.",
              "Kogda globalnaya likvidnost obilna, vazhnaya chast ee napravlyaetsya v amerikanskie aktivy. Eto pomogaet podderzhivat rynochnye otsenki, osobenno kompanii, schitayushchiesya strategicheskimi ili dolgosrochnymi liderami.",
              "Poetomu amerikanskiy fondovyy rynok sleduet analizirovat ne tolko cherez korporativnye pribyli ili tekhnologicheskie innovatsii. Ego nuzhno ponyat i kak chast globalnoy finansovoy arkhitektury, v kotoroy dollar, gosdolg SSHA i mezhdunarodnye potoki kapitala igraut tsentralnuyu rol.",
              "Rastet li Uoll-strit potomu, chto amerikanskaya ekonomika silna, ili potomu, chto u globalnoy finansovoy sistemy net ravnoy alternativy?",
            ],
          },
          {
            heading: "Paradoks disbalansov",
            paragraphs: [
              "Teoreticheski vysokiy fiskalnyy defitsit dolzhen byt signalom trevogi. Takim zhe dolzhen byt i ustoichivyy torgovyy profitsit pri slabom vnutrennem sprose. No na praktike eti disbalansy pomogali podderzhivat sistemu.",
              "Kitayu nuzhen eksport, chtoby podderzhivat proizvodstvo, zanyatost i promyshlennoe vliyanie. SSHA nuzhen dolg, chtoby podderzhivat rashody, potreblenie, strategicheskie investitsii i globalnoe prisutstvie. V oboikh modelyakh est vnutrennie napryazheniya, no oni takzhe dopolnyayut drug druga.",
              "Rezultat - neudobnaya svyaz: dve derzhavy geopoliticheski konkuriruyut, no vse eshche ostayutsya svyazannymi torgovymi, finansovymi i valyutnymi potokami.",
            ],
            callouts: [
              "Eto ne znachit postoyannuyu stabilnost. Eto znachit vzaimnuyu zavisimost.",
            ],
          },
          {
            heading: "Ekonomicheskaya voyna ne vsegda vyglyadit kak voyna",
            paragraphs: [
              "Sopernichestvo mezhdu Kitaem i Soedinennymi Shtatami chasto obyasnyayut tarifami, sanktsiyami, tekhnologicheskimi ogranicheniyami, poluprovodnikami, Tayvanem ili tsepochkami postavok. No sushchestvuet i drugoe, menee vidimoe izmerenie: mezhdunarodnaya finansovaya arkhitektura.",
              "Kitay konkuriruet cherez proizvodstvo, infrastrukturu, prodvinutuyu manufakturu i torgovlyu. Soedinennye Shtaty konkuriruyut cherez dollar, rynki kapitala, gosdolg, tekhnologicheskie innovatsii i sposobnost prityagivat globalnye sberezheniya.",
              "Konkurentsiya XXI veka budet opredelyatsya ne tolko tem, kto proizvodit bolshe, no i tem, kto kontroliruet kanaly dvizheniya kapitala.",
            ],
            callouts: [
              "Odna derzhava kontroliruet fabriku. Drugaya - valyutu i rynki.",
            ],
          },
          {
            heading: "Chto eto znachit dlya Latinskoy Ameriki?",
            paragraphs: [
              "Dlya Latinskoy Ameriki eta globalnaya dinamika imeet pryamye posledstviya. Region chuvstvitelen k tsiklam globalnoy likvidnosti, tsenam na syrye tovary, amerikanskim protsentnym stavkam i kitayskomu sprosu.",
              "Kogda likvidnost obilna, razvivayushchiesya rynki mogut poluchat bolshe investitsiy, uluchshat dostup k finansirovaniyu i vyigryvat ot luchshikh tsen na nekotorye tovary. No kogda likvidnost sokrashchaetsya, region stolknovitsya s ottekom kapitala, obestseneniem valyuty, importiruemoy inflyatsiey i rostom stoimosti dolga.",
              "Latinskaya Amerika nakhoditsya mezhdu dvumya silami: Kitay kak pokupatel syria i investor v infrastrukturu i Soedinennye Shtaty kak finansovyy, politicheskiy i monetarnyy tsentr polushariya.",
              "Mozhet li Latinskaya Amerika ispolzovat eto sopernichestvo dlya diversifikatsii razvitiya, ili ona budet pasivno reagirovat na tsikly, opredelyaemye drugimi?",
            ],
          },
          {
            heading: "I chto eto oznachaet dlya BRICS?",
            paragraphs: [
              "Strany BRICS stremyatsya rasshirit svoe vliyanie v globalnoy ekonomike, prodvigat ispolzovanie natsionalnykh valyut i snizit zavisimost ot dollara. Odnako zadacha ochen slozhnaya.",
              "Mezhdunarodnaya finansovaya sistema vse eshche gluboko privyazana k dollaru. Rezervy, dolgovye rynki, mirovaya torgovlya, mezhdunarodnye platezhi i likvidnost amerikanskikh aktivov prodolzhayut dat SSHA strukturnoe preimushchestvo.",
              "Paradoks v tom, chto mnogie strany, zhelayushchie snizit zavisimost ot dollara, vse eshche deystvuyut v sisteme, gde samye likvidnye i bezopasnye aktivy nominiruyutsya v dollarakh.",
              "Poetomu mnogopolyarnaya finansovaya arkhitektura ne mozhet byt postroena odnimi politicheskimi deklaratsiyami. Trebuyutsya glubokie rynki, institutsionalnoe doverie, effektivnye platezhnye mekhanizmy, valyutnaya stabilnost i sposobnost pogloshchat bolshie obemy kapitala.",
              "Vopros dlya BRICS ne tolko v tom, mogut li oni brosit vyzov dollaru. Vopros v tom, mogut li oni postroit dostatochno nadezhnuyu alternativu, chtoby mir zahotel ee ispolzovat.",
            ],
          },
          {
            heading: "Dolgosrochnye riski",
            paragraphs: [
              "Tekushchaya model mozhet derzhatsya godami, no ona nakaplivayet riski.",
              "Sistema ne obyazatelno rukhnet iz-za svoikh disbalansov. No ona mozhet stat bolee uyazvimoy po mere rosta zavisimosti ot nikh.",
            ],
            bullets: [
              "Fiskalnyy risk: esli amerikanskiy dolg budet i dalshe rasti, platezhi po protsentam mogut ogranichit manevr pravitelstva i usilit davlenie na rynki obligatsiy.",
              "Torgovyy risk: esli Kitay sokhranit vysokie promyshlennye profitsity, drugie strany mogut otvetit novymi barerami, tarifami ili tekhnologicheskimi ogranicheniyami.",
              "Finansovyy risk: esli rynki privykli k obilnoy likvidnosti, v opredelennykh sektorakh mogut sformirovatsya zavishennye otsenki.",
              "Geopoliticheskiy risk: po mere usileniya konkurentsii mezhdu SSHA i Kitaem lyuboy razryv v ikh torgovykh ili finansovykh svyazyakh mozhet imet globalnye posledstviya.",
            ],
          },
          {
            heading: "Vozmozhnye stsenarii",
            subsections: [
              {
                heading: "1. Prodolzhenie tekushchey modeli",
                paragraphs: [
                  "Kitay sokhranyaet eksportnuyu silu, Soedinennye Shtaty prodolzhayut finansirovat defitsity cherez dolg, a finansovye rynki prodolzhayut poluchat globalnuyu likvidnost. V etom stsenarii Uoll-strit sokhranyaet dominiruyushchee polozhenie.",
                ],
              },
              {
                heading: "2. Torgovaya fragmentatsiya",
                paragraphs: [
                  "Napryazhenie mezhdu Kitaem i Soedinennymi Shtatami usilivaetsya. Poyavlyayutsya novye tarify, sanktsii i tekhnologicheskie ogranicheniya. Tsepochki postavok reorganizuyutsya, a mirovaya torgovlya stanovitsya dorozhe.",
                ],
              },
              {
                heading: "3. Davlenie na amerikanskiy dolg",
                paragraphs: [
                  "Investory nachinayut trebovat bolee vysokuyu dohodnost dlya finansirovaniya amerikanskogo gosdolga. Eto udozhaet kredit, b'et po fondovym otsenkam i sokrashchaet appetit k risku.",
                ],
              },
              {
                heading: "4. Postepennyy rost mnogopolyarnoy sistemy",
                paragraphs: [
                  "BRICS i drugie razvivayushchiesya strany razvivaet alternativnye platezhnye mekhanizmy, bolshiy obem torgovli v natsionalnykh valyutakh i novye kanaly finansirovaniya. Dollar ne ischezaet, no ego otnositelnoye dominirovanie nachinaet medlenno snizhatsya.",
                ],
              },
            ],
          },
          {
            heading: "Zaklyuchenie",
            paragraphs: [
              "Mirovaya ekonomika funktsioniruet ne tolko cherez proizvoditelnost, torgovlyu ili innovatsii. Ona takzhe funktsioniruet cherez disbalansy.",
              "Kitay proizvodit profitsity. Soedinennye Shtaty vypuskayut dolg. Uoll-strit pogloshchaet likvidnost. Latinskaya Amerika poluchaet effekty etikh tsiklov. Strany BRICS pytayutsya postroit alternativy. A dollar vse eshche ostayetsya v tsentre sistemy.",
              "Glubokiy vopros zaklyuchaetsya v tom, yavlyaetsya li eta model formoy stabilnosti ili postepennym nakopleniem khrupkosti.",
              "Mozhet li globalnaya ekonomika, osnovannaya na dolge, profitsitakh i likvidnosti, sokhranyatsya beskonechno?",
              "Gotovy li razvivayushchiesya strany k rezkomu izmeneniyu mezhdunarodnykh finansovykh usloviy?",
              "Mozhet li Latinskaya Amerika prevratit eto globalnoe sopernichestvo v strategicheskuyu vozmozhnost?",
              "I smogut li BRICS postroit alternativnuyu finansovuyu arkhitekturu, ne zavisyashchuyu ot tekh zhe mekhanizmov, kotorye oni segodnya kritikuut?",
              "Eti voprosy opredelyat znachitelnuyu chast ekonomicheskikh i geopoliticheskikh debatov v blizhayshie gody.",
            ],
          },
        ],
      },
      "la-nueva-carrera-lunar-ya-comenzo": {
        title: "Novaya lunnaya gonka uzhe nachalas",
        subtitle:
          "Soedinennye Shtaty i Kitay konkuriruyut za Lunu, no nastoyashchaya tsel - kontrolirovat sleduyushchuyu strategicheskuyu infrastrukturu kosmosa.",
        excerpt:
          "Luna vernulas v tsentr mezhdunarodnoy politiki. Vopros uzhe ne tolko v tom, kto pribudet pervym, a v tom, kto ostanetsya, postroit infrastrukturu, zakrepit strategicheskie pozitsii i pomozhet opredelit pravila budushchey kosmicheskoy ekonomiki.",
        tags: ["Luna", "SSHA", "Kitay", "Artemis", "kosmos", "BRICS"],
        bodySections: [
          {
            paragraphs: [
              "Desyatiletiyami lunnaya eksploratsiya predstavlyalas kak nauchnaya pobeda, tekhnologicheskaya demonstratsiya ili simvol natsionalnogo prestizha. Segodnya Luna vozvrashchaetsya v tsentr mezhdunarodnoy politiki, no uzhe po drugoy logike. Vopros bolshe ne tolko v tom, chtoby priletet pervym. Vopros v tom, chtoby ostatsya, postroit infrastrukturu, obespechit strategicheskie pozitsii i opredelit pravila kosmicheskoy ekonomiki.",
              "Soedinennye Shtaty i Kitay vstupayut v reshayushchuyu fazu lunnoy konkurentsii. Vashington dvigaetsya vpered s programmoy Artemis, zadumannoy dlya vosstanovleniya ustoichivogo prisutstviya cheloveka na Lune. Pekin, so svoey storony, razvivayet postepennuyu strategiyu, sochetayushchuyu roboticheskie missii, issledovanie yuzhnogo polyusa Luny, mezhdunarodnoe sotrudnichestvo i zayavlennuyu tsel osushchestvit pilotiruemuyu posadku do 2030 goda.",
              "Vopros bolshe ne v tom, vernetsya li chelovechestvo na Lunu. Vopros v tom, kto postroit tam pervye dolgosrochnye pravila, marshruty, soyuzy i infrastrukturu.",
            ],
          },
          {
            heading: "Luna kak strategicheskoe prostranstvo",
            paragraphs: [
              "Luna perestala byt tolko nauchnym punktom naznacheniya. Ona prevrashchaetsya v prostranstvo geoekonomicheskoy konkurentsii.",
              "Osnovnoy interés sosredotochen na yuzhnom polyuse Luny. Etot rayon vazhen, potomu chto mozhet soderzhat zalezhi vodyanogo lda v postoyanno zatemnennykh kraterakh. Voda mozhet sluzhit dlya podderzhaniya budushchikh pilotiruemykh missiy, proizvodstva kisloroda i, v perspektive, vodoroda dlya topliva. Poetomu kontrol dostupa k zonam s lunnymi resursami mozhet prevratitsya v strategicheskoe preimushchestvo.",
              "Kitay planiruet zapustit missiyu Chang'e-7 dlya issledovaniya yuzhnogo polyusa Luny, izucheniya usloviy poverkhnosti i poiska vody, lda i letuchikh elementov v lunnom grunte. Soedinennye Shtaty, v svoyu ochered, prodvigayutsya s Artemis kak s bolee shirokoy arkhitekturoy, orientirovannoy na budushchie missii na poverkhnosti i ustoichivoe prisutstvie.",
              "Luna, takim obrazom, - eto ne prosto nebesnoe telo. Eto laboratoriya vlasti.",
            ],
          },
          {
            heading: "Artemis i amerikanskoe vozvrashchenie na Lunu",
            paragraphs: [
              "Programma Artemis stremitsya k gorazdo bolshemu, chem povtor uspeha Apollo. Ee tsel - postroit bolee dolgovechnoe prisutstvie s uchastiem chastnykh kompaniy, mezhdunarodnykh partnerov i tekhnologicheskoy arkhitektury, svyazyvayushchey orbitu Zemli, lunnuyu orbitu i poverkhnost Luny.",
              "V otlichie ot dvadtsatogo veka, segodnyashnyaya konkurentsiya zavisit ne tolko ot gosudarstvennykh agentstv. Takie kompanii, kak SpaceX, Blue Origin, Lockheed Martin, Boeing i drugie uchastniki amerikanskogo aerokosmicheskogo ekosistema, yavlyayutsya chastyu gosudarstvenno-chastnoy seti, kotoraya pytaetsya snizit izderzhki, uskorit innovatsii i prevratit kosmos v novyy ekonomicheskiy rubezh.",
              "Eto menyaet prirodu lunnoy gonki. Konkurentsiya idet ne tolko mezhdu flagami. Ona idet takzhe mezhdu tsepochkami postavok, kontraktami, patentami, sputnikami, raketami-nositelyami, software, kommunikatsiyami, kosmicheskoy dobychey, energiyey i kommercheskimi platformami.",
            ],
            callouts: [
              "Tsentralnyy vopros v tom, smogut li Soedinennye Shtaty prevratit tekhnologicheskoe i finansovoe liderstvo v ustoichivoe lunnoye prisutstvie.",
            ],
          },
          {
            heading: "Kitay i strategiya postepennogo prodvizheniya",
            paragraphs: [
              "Kitay ne improviziruet svoyu kosmicheskuyu politiku. Ego lunnaya programma razvivaetsya po posledovatelnoy logike: orbitalnye apparaty, roboticheskie posadki, vozvrat obraztsov, issledovanie obratnoy storony Luny, a teper missii, orientirovannye na yuzhnyy polyus.",
              "Kitayskaya strategiya sochetayet tri izmereniya. Pervoe - vnutrennee tekhnologicheskoe razvitie. Kitay stremitsya sokratit vneshnyuyu zavisimost v raketakh, posadochnykh modulakh, pilotiruemykh apparatakh, robototekhnike, kommunikatsiyakh i sistemakh zhizneobespecheniya. Vtoroe - nakopitelnoe nauchnoe prisutstvie. Kazhdaya lunnaya missiya pozvolyaet sobirat informatsiyu, testirovat tekhnologii i podgotavlivat bolee slozhnye operatsii. Trete - postroenie soyuzov. Mezhdunarodnaya lunnaya issledovatelskaya stantsiya, prodvigaemaya Kitaem pri uchastii Rossii i drugikh partnerov, stremitsya sozdat alternativnuyu platformu kosmicheskogo sotrudnichestva.",
              "Vopros ne v tom, mozhet li Kitay doognat Soedinennye Shtaty vo vsekh izmereniyakh. Vopros v tom, mozhet li on postroit alternativnuyu arkhitekturu, dostatochno privlekatelnuyu dlya stran, kotorye ne khotyat polnostyu zaviset ot zapadnogo ekosistema.",
            ],
          },
          {
            heading: "Gonka ne svoditsya tolko k tomu, chtoby pribyt pervym",
            paragraphs: [
              "Yazyk kosmicheskoy gonki mozhet byt poleznym, no on takzhe mozhet slishkom uproshchat problemu. Segodnyashnyaya konkurentsiya ne reshitsya tolko datoy posadki.",
              "Pribyt pervym vazhno. Ostatsya - eshche vazhnee.",
              "Derzhava, kotoraya smozhet razvernut infrastrukturu, garantirovat kommunikatsii, regulyarno operirovat, mobilizovat partnerov, finansirovat povtoryaemye missii i ustanavlivat tekhnicheskie standarty, poluchit preimushchestvo, prevoskhodyashchee preimushchestvo odinochnoy simvolicheskoy missii. Konkurentsiya budet razvorachivatsya v infrastrukture, resursakh, normakh, soyuzakh i narrative.",
              "Lunnaya gonka budet menshe pokhozha na sportivnoe sorevnovanie i bolshe - na stroitelstvo novoy mezhdunarodnoy arkhitektury.",
            ],
          },
          {
            heading: "Yuzhnyy polyus Luny kak tochka treniya",
            paragraphs: [
              "Yuzhnyy polyus Luny mozhet stat odnim iz pervykh prostranstv funktsionalnoy territorialnoy konkurentsii za predelami Zemli.",
              "Rech ne obyazatelno o suverenitete v klassicheskom smysle. Dogovor o kosmose zapreshchaet natsionalnoe prisvoenie nebesnykh tel. No na praktike ustanovka baz, nauchnogo oborudovaniya, zon bezopasnosti i operatsionnykh koridorov mozhet porozhdat kosvennye formy kontrolya.",
              "Esli derzhava pervoy razvernet infrastrukturu v strategicheskoy zone, ona mozhet uslovlivat dostup drugikh akterov. Ey ne nuzhno obyavlyat suverenitet. Ona mozhet osushchestvlyat vliyanie cherez prisutstvie, tekhnicheskie standarty, logistiku i operatsionnuyu sposobnost.",
            ],
            callouts: [
              "Eto porozhdaet tonkiy vopros: kak ne dopustit, chtoby nauchnoe sotrudnichestvo prevratilos v konkurentsiyu za privilegirovannye zony dostupa?",
            ],
          },
          {
            heading: "Soedinennye Shtaty, Kitay i voennoe izmerenie",
            paragraphs: [
              "Luna ne obyazatelno stanet polem boya. No ona mozhet stat prostranstvom strategicheskogo preimushchestva.",
              "Tekhnologii, razrabatyvaemye dlya lunnoy eksploratsii, imeyut dvoinoe primenenie: kommunikatsii, navigatsiya, robototekhnika, iskusstvennyy intellekt, sensory, kibyerbezopasnost, prodvinutye materialy i avtonomnye sistemy. Mnogie iz etikh vozmozhnostey mogut sluzhit kak grazhdanskim, tak i voennym tselam.",
              "Krome togo, kontrol nad cislunarnym prostranstvom, regionom mezhdu Zemley i Lunoy, budet stanovitsya vse bolee vazhnym. Tam mogut rabotat sputniki, stantsii, sistemy svyazi, sensory i logisticheskie platformy.",
            ],
            callouts: [
              "Glubokiy vopros zaklyuchaetsya v tom, budet li kosmicheskoe upravlenie razvivat'sya tem zhe tempom, chto i tekhnologiya, ili pravila snova opazdayut.",
            ],
          },
          {
            heading: "Chto eto znachit dlya Evropy?",
            paragraphs: [
              "Evropa uchastvuet v Artemis, osobenno cherez Yevropeyskoe kosmicheskoe agentstvo, kotoroe postavlyaet evropeyskiy servisnyy modul dlya korablya Orion. Eto pozvolyaet Evrope ostavatsya vnutri lunnoy arkhitektury, vozglavlyaemoy Soedinennymi Shtatami, i sokhranyat dostup k missiyam vysokoy tekhnologicheskoy tsennosti.",
              "Vmeste s tem Evropa stalkivayetsya s dilemmoj: u nee est vazhnye nauchnye vozmozhnosti, no ona v znachitelnoy stepeni zavisit ot vneshnikh partnerov v tyazhelykh nositelyakh, pilotiruemom dostupe i strategicheskikh platformakh. Esli ona khochet imet sobstvennyy ves v kosmicheskoy ekonomike, yey nuzhno prevratit nauchnoe prevoskhodstvo v promyshlennuyu avtonomiyu i operatsionnuyu sposobnost.",
              "Evrope ne obyazatelno frontalno konkurirovat s Soedinennymi Shtatami ili Kitaem. No yey nuzhno izbezhat prevrashcheniya vo vtorostepennogo partnera v arkhitekturakh, sozdannykh drugimi.",
            ],
          },
          {
            heading: "Chto eto znachit dlya Latinskoy Ameriki?",
            paragraphs: [
              "Latinskaya Amerika mozhet kazatsya dalekoy ot lunnoy gonki, no eto ne tak. Novaya kosmicheskaya ekonomika otkryvaet vozmozhnosti v sputnikovykh servisakh, tochnom selskom khozyaystve, klimaticheskom monitoringe, telekommunikatsiyakh, nauchnom obrazovanii, dobyche, upravlenii katastrofami i geoprostranstvennykh dannykh.",
              "Regionu ne nuzhno posylat astronautov na Lunu, chtoby uchastvovat v kosmicheskoy ekonomike. On mozhet razvivat sposobnosti v analize dannykh, nazemnykh stantsiyakh, sputnikovykh prilozheniyakh, universitetskikh issledovaniyakh, nauchnom sotrudnichestve i regulirovanii.",
              "No sushchestvuet i risk: ostatsya prostym potrebitelyem inostrannykh kosmicheskikh uslug. Esli Latinskaya Amerika ne budet investirovat v chelovecheskiy kapital, tsifrovuyu infrastrukturu i regionalnoe sotrudnichestvo, ona budet zaviset ot platform, razrabotannykh za predelami regiona.",
            ],
            callouts: [
              "Regionalnyy vopros v tom, mozhet li Latinskaya Amerika ispolzovat kosmicheskuyu ekonomiku dlya rosta proizvoditelnosti i tekhnologicheskogo suvereniteta.",
            ],
          },
          {
            heading: "Chto eto oznachaet dlya BRICS?",
            paragraphs: [
              "Lunnaya gonka takzhe imeet posledstviya dlya BRICS. Kitay - samyy prodvinutyy kosmicheskiy akter rasshirennogo bloka. Rossiya sokhranyaet istoricheskiy opyt, khotya stalkivayetsya s finansovymi, tekhnologicheskimi i geopoliticheskimi ogranicheniyami. Indiya pokazala znachitelnye vozmozhnosti v svoikh lunnykh missiyakh i nizkoy stoimosti operatsiy. Braziliya i Yuzhnaya Afrika imeyut potentsial v sputnikovykh prilozheniyakh, nablyudenii Zemli i nauchnom sotrudnichestve.",
              "Vyzov dlya BRICS - pereyti ot mnogopolyarnoy ritoriki k konkretnym kosmicheskim proektam. Kosmicheskaya agenda bloka mogla by vklyuchat obmen sputnikovymi dannymi, sotrudnichestvo po nositelyam, nauchnoe obrazovanie, klimaticheskiy monitoring, selskoe khozyaystvo, upravlenie resursami i uchastie v lunnoy infrastrukture.",
              "Odnako koordinatsiya ne budet prostoy. Vozmozhnosti asimmetrichny, natsionalnye prioritety raznyatsya, i ne kazhdyy uchastnik khochet okazatsya pod arkhitekturoy, dominiruemoy Kitaem.",
            ],
            callouts: [
              "Vopros dlya BRICS v tom, mogut li oni postroit realnuyu mnogopolyarnuyu kosmicheskuyu povestku ili kosmos vosproizvedet te zhe tekhnologicheskie ierarkhii, kotorye uzhe sushchestvuyut na Zemle.",
            ],
          },
          {
            heading: "Vozmozhnye stsenarii",
            subsections: [
              {
                heading: "1. Ustoichivoe amerikanskoe liderstvo",
                paragraphs: [
                  "Soedinennye Shtaty ukreplyayut Artemis, dostigayut novykh lunnykh missiy, ukreplyayut soyuzy s Evropoy, Yaponiyey, Kanadoy i novymi partnerami i sokhranyayut preimushchestvo v chastnom kosmicheskom ekosisteme.",
                ],
              },
              {
                heading: "2. Uskorennoe kitayskoe prodvizhenie",
                paragraphs: [
                  "Kitay dostigaet tseli po pilotiruemoy posadke na Lunu do 2030 goda, ukreplyaet roboticheskie missii na yuzhnom polyuse i usilivaet Mezhdunarodnuyu lunnuyu issledovatelskuyu stantsiyu.",
                ],
              },
              {
                heading: "3. Ogranichennoe sotrudnichestvo i upravlyaemaya konkurentsiya",
                paragraphs: [
                  "Soedinennye Shtaty i Kitay konkuriruyut, no izbegayut pryamogo stolknoveniya. Sokhranyayutsya minimalnye pravila dlya snizheniya riskov i sokhraneniya chastichnykh operatsionnykh ramok.",
                ],
              },
              {
                heading: "4. Fragmentatsiya kosmicheskogo poryadka",
                paragraphs: [
                  "Voznikayut otdelnye kosmicheskie bloki s nesovmestimymi normami, standartami, partnerami i tekhnologicheskimi sistemami.",
                ],
              },
              {
                heading: "5. Uskorennaya kommercializatsiya",
                paragraphs: [
                  "Chastnye kompanii poluchayut bolshuyu rol v transporte, kommunikatsiyakh, dobyche, energetike i lunnykh servisakh.",
                ],
              },
            ],
          },
          {
            heading: "Zaklyuchenie",
            paragraphs: [
              "Novaya lunnaya gonka - eto ne povtorenie kholodnoy voyny. Eto bolee slozhnaya, bolee kommercheskaya, bolee tekhnologicheskaya i bolee mnogopolyarnaya konkurentsiya.",
              "U Soedinennykh Shtatov est preimushchestva v soyuzakh, chastnom kapitale, institutsionalnom opyte i finansovoy glubine. U Kitaya est gosudarstvennoe planirovanie, strategicheskaya nepreryvnost, promyshlennaya sposobnost i yasnaya dorozhnaya karta do 2030 goda. Evropa pytaetsya ne otstat. Latinskaya Amerika dolzhna reshit, budet li ona nablyudat s periferii ili nachnet stroitelstvo poleznykh vozmozhnostey v voznikayushchey kosmicheskoy ekonomike.",
              "Luna budet ne tolko nauchnym punktom naznacheniya. Ona stanet platformoy dlya testirovaniya tekhnologiy, postroeniya soyuzov, opredeleniya norm i proektsii vlasti.",
              "Kto budet kontrolirovat kriticheskuyu infrastrukturu cislunarnogo prostranstva? Smogut li mezhdunarodnoe sotrudnichestvo predotvratit prevrashchenie yuzhnogo polyusa Luny v novuyu arenu strategicheskogo sopernichestva? Gotova li Latinskaya Amerika uchastvovat v kosmicheskoy ekonomike ili ostanetsya zavisimoy ot vneshnikh vozmozhnostey? Smogut li BRICS sozdat sobstvennuyu kosmicheskuyu agendu ili lunnaya konkurentsiya tolko ukrepit liderstvo neskolkikh akterov?",
              "Otvet budet opredelyatsya ne tolko v laboratoriyakh ili tsentrakh zapuska. On budet opredelyatsya byudzhetami, soyuzami, mezhdunarodnymi pravilami, promyshlennymi tsepochkami i politicheskimi resheniyami. Lunnaya gonka uzhe nachalas, no ee itog vse eshche otkryt.",
            ],
          },
        ],
      },
      "estamos-ante-una-burbuja-puntocom-2-0": {
        title: "My pered puzyrem dotkom 2.0?",
        subtitle:
          "Iskusstvennyy intellekt pereustraivayet rynki, no odnovremenno proverayet predely finansovogo doveriya.",
        excerpt:
          "Iskusstvennyy intellekt mozhet byt realnoy tekhnologicheskoy revolyutsiey i odnovremenno sozdat chastichnyy rynochnyy puzyr. Vopros ne v tom, vazhen li II, a v tom, kakaya chast nyneshney stoimosti uzhe zavisit ot slishkom idealnykh ozhidaniy.",
        tags: ["II", "rynki", "Nvidia", "dotkom", "proizvoditelnost", "BRICS"],
        bodySections: [
          {
            paragraphs: [
              "Kazhdaya krupnaya tekhnologicheskaya revolyutsiya obychno prikhodit s obeshchaniem: izmenit ekonomiku, preobrazit proizvoditelnost i otkryt novuyu fazu rosta. Tak bylo s internetom v devyanostykh. Tak proiskhodit seychas s iskusstvennym intellektom.",
              "Sravnenie s puzyrem dotkom neizbezhno. V oboikh sluchayakh novaya tekhnologiya zakhvatila voobrazhenie investorov, kompaniy, pravitelstv i potrebitelyey. V oboikh sluchayakh rynki nachali zakladyvat budushchee uskorennogo rosta. I v oboikh sluchayakh voznik neudobnyy vopros: investiruem li my v realnuyu transformatsiyu ili v narativ, kotoryy vse eshche ne dokazal svoyu okupaemost?",
              "Iskusstvennyy intellekt - eto ne prokhodyashchaya moda. Ego vliyanie na proizvoditelnost, oboronu, obrazovanie, zdravookhranenie, finansovye uslugi, avtomatizatsiyu i torgovlyu budet glubokim. No realnaya tekhnologiya mozhet takzhe sozdat finansovyy puzyr. Istoriya pokazyvaet, chto obe veshchi mogut byt pravdoy odnovremenno.",
            ],
          },
          {
            heading: "Urok puzyrya dotkom",
            paragraphs: [
              "Puzyr dotkom lopnul ne potomu, chto internet byl neznachitelen. On lopnul potomu, chto rynki slishkom bystro otsenili kompanii, kotorye eshche ne imali ustoichivykh biznes-modeley.",
              "Mnogie firmy obeshchali dominirovat v novoy tsifrovoy ekonomike, no ne generirovali dostatochnuyu vyruchku, ne imali rentabelnosti i zaviseli ot budushchikh ozhidaniy. Kogda kapital perestal finansirovat obeshchaniya i nachal trebovat rezultaty, rynok rezko otkorrektirovalsya.",
              "I vse zhe internet deystvitelno preobrazil mir. Posle krakha vyzhili kompanii, kotorye postroili infrastrukturu, realnye biznes-modeli i dolgovechnye konkurentnye preimushchestva. Amazon, Google i drugie platformy ne oprovergli puzyr; oni pokazali, chto dazhe vnutri puzyrya mogut roditsya budushchie pobediteli.",
            ],
            callouts: [
              "Segodnyashniy vopros pokhozh: poydet li iskusstvennyy intellekt po puti interneta kak produktivnoy revolyutsii ili po puti dotkom-era kak finansovogo peregreva?",
            ],
          },
          {
            heading: "Chto otlichaet tekushchiy tsikl iskusstvennogo intellekta",
            paragraphs: [
              "Sravnenie s 2000 godom imeet svoi predely. V otlichie ot mnogikh kompaniy epokhi dotkom, glavnymi uchastnikami nyneshnego tsikla yavlyayutsya ne startapy bez vyruchki. Eto kompanii s nalichnostyu, pribylyu, infrastrukturou, globalnymi klientami i dominiruyushchimi pozitsiyami.",
              "Microsoft, Alphabet, Amazon, Meta, Nvidia i drugie krupnye tekhnologicheskie igroki zavisyat ne tolko ot obeshchaniy. U nikh uzhe est pribylnye biznesy. Krome togo, oni finansiruyut znachitelnuyu chast raskhodov na iskusstvennyy intellekt za schet sobstvennykh resursov, a ne tolko dolga ili spekulyativnogo kapitala.",
              "Eto vazhno. Tekushchaya volna investitsiy v iskusstvennyy intellekt opiraetsya na kompanii s realnoy finansovoy sposobnostyu. Tsikl postroen ne tolko na khrupkikh firmakh, a na korporatsiyakh, kotorye uzhe prinadlezhat k ekonomicheskomu i tekhnologicheskomu yadra SSHA.",
              "No eto ne ubiraet risk. Eto ego sdvigaet. Problema ne v tom, sushchestvuet li iskusstvennyy intellekt i vazhen li on. Problema v tom, pridyut li ekonomicheskie vozvraty tak zhe bystro, kak ikh uzhe zakladyvayut rynki.",
            ],
          },
          {
            heading: "Novyy tsentr riska: kapitalnye zatraty i data-tsentry",
            paragraphs: [
              "Iskusstvennyy intellekt trebuet dorogoy infrastruktury: chipov, data-tsentrov, energii, okhlazhdeniya, setey, talanta i modeley bolshogo masshtaba. Eto prevratilo kapitalnye zatraty v odin iz glavnykh indikatorov ponimaniya tsikla.",
              "Iskusstvennyy intellekt bolshe ne tolko software. Eto fizicheskaya, energeticheskaya i finansovaya infrastruktura. Problema v tom, chto eti investitsii dolzhny prinosit vozvrat. Kompanii narashchivayut moshchnosti eshche do polnoy yasnosti v voprose monetizatsii.",
              "Esli spros so storony biznesa i potrebitelyey budet rasti s ozhidaemoy skorostyu, eti raskhody mogut byt opravdany. Esli net, rynok mozhet nachat stavit pod vopros rentabelnost etoy infrastruktury.",
            ],
            callouts: [
              "Klyuchevoy vopros v tom, yavlyaetsya li eto strategicheskoy investitsiyey na dolgyy srok ili gonkoy rashodov, v kotoroy vse investiruet iz strakha otstat.",
            ],
          },
          {
            heading: "Raznitsa mezhdu tekhnologicheskim puzyrem i finansovym puzyrem",
            paragraphs: [
              "Tekhnologicheskiy puzyr ne oznachaet, chto tekhnologiya lozhna. On oznachaet, chto tsena aktivov otdelyaetsya ot realnykh ekonomicheskikh rezultatov.",
              "Iskusstvennyy intellekt mozhet transformirovat otrasli i odnovremenno generirovat zavyshennye otsenki v opredelennykh kompaniyakh. On mozhet povysit proizvoditelnost v dolgosrochnoy perspektive i odnovremenno vyzvat birzhevye korrektsii v kratkosrochnoy. On mozhet byt realnoy revolyutsiyey i chastichnym puzyrem odnovremenno.",
              "Eto razlichie printsipialno. Rech ne o tom, chtoby reshit, realen li iskusstvennyy intellekt ili yavlyaetsya li on puzyrem. Pravilnyy vopros toche: kakaya chast segodnyashney stoimosti podkreplena realnoy pribylyu, a kakaya zavisit ot budushchikh ozhidaniy?",
            ],
          },
          {
            heading: "Rol Nvidia i poluprovodnikov",
            paragraphs: [
              "Nikakaya kompaniya ne simvoliziruet etot tsikl luchshe, chem Nvidia. Ee pozitsiya v chipakh dlya iskusstvennogo intellekta sdelala ee tsentralnym akterom novoy tsifrovoy infrastruktury. Spros na GPU, uskoriteli i spetsializirovannoe zhelezo podtolknul ee vyruchku, marzhi i rynochnuyu otsenku.",
              "No takaya kontsentratsiya takzhe sozdaet uyazvimost. Kogda odna kompaniya ili ochen nebolshaya gruppa kompaniy kontsentriruet znachimuyu chast rynochnogo entuziazma, lyuboe izmenenie ozhidaniy mozhet porozhdat usilennye effekty.",
              "Istoriya tekhnologiy pokazyvaet, chto prodazha kirki i lopaty vo vremya investitsionnoy likhoradki mozhet byt chrezvychayno pribylna. No ona takzhe pokazyvaet, chto kogda faza ekspansii zamedlyaetsya, postavshchiki infrastruktury mogut stolknutsya s silnymi peresmotrami sprosa, marzhi i otsenok.",
            ],
            callouts: [
              "Vopros ne v tom, vazhna li Nvidia. Ona vazhna. Vopros v tom, zakladyvaet li tekushchaya tsena rynka slishkom idealnoe budushchee.",
            ],
          },
          {
            heading: "Iskusstvennyy intellekt, proizvoditelnost i politicheskoe vremya",
            paragraphs: [
              "Odnim iz glavnykh argumentov v polzu nyneshnego tsikla yavlyaetsya to, chto iskusstvennyy intellekt mozhet prinesti rost proizvoditelnosti. Esli kompanii sokrashchayut izderzhki, avtomatiziruyut protsessy, uluchshayut resheniya i sozdaut novye produkty, ekonomicheskiy rost mozhet uskoritsya.",
              "No sushchestvuet problema vremeni. Finansovye rynki dvigayutsya bystree, chem realnaya ekonomika. Fondovye rynki zakladyvayut ozhidaniya v mesyatsakh; proizvoditelnost materializuetsya godami. Infrastruktura stroitsya snachala; vyigody zahvatyvayutsya potom.",
              "Etot razryv mezhdu finansovymi ozhidaniyami i ekonomicheskim vnedreniem - odin iz krupneyshikh riskov tekushchego tsikla. Esli vyigody pridut pozhe ozhidayemogo, rynki mogut otkorrektirovatsya, dazhe esli tekhnologiya prodolzhit prodvigatsya.",
              "Iskusstvennyy intellekt mozhet nakhoditsya v faze, pokhozhey na internet do ego zrelosti: neizbezhnaya tekhnologiya, no s neravnomernym raspredeleniem pobediteley i proigravshikh.",
            ],
          },
          {
            heading: "Geopoliticheskie posledstviya",
            paragraphs: [
              "Iskusstvennyy intellekt - eto ne tolko biznes-fenomen. Eto tsentralnoe izmerenie globalnoy vlasti.",
              "Soedinennye Shtaty sokhranyayut preimushchestvo blagodarya svoemu kapitalnomu ekosistemu, universitetam, tekhnologicheskim kompaniyam, prodvinutym poluprovodnikam i tsifrovym platformam. Kitay pytaetsya snizit tekhnologicheskuyu zavisimost, razrabatyvat sobstvennye modeli, ukreplyat chipovuyu industriyu i vnedryat iskusstvennyy intellekt v proizvodstvo, bezopasnost, logistiku i uslugi.",
              "Evropa pytaetsya regulirovat, ne teryaya konkurentosposobnost. Latinskaya Amerika nablyudaet protsess s bolee uyazvimoy pozitsii: kak potrebitel tekhnologiy, postavshchik dannykh, poluchatel investitsiy i region s otnositelno nizkoy sposobnostyu v prodvinutoy tsifrovoy infrastrukture.",
              "Borba budet idti ne tolko za yazykovye modeli ili prilozheniya. Ona budet idti za data-tsentry, energiyu, chipy, standarty, talant, oblachnuyu infrastrukturu, intellektualnuyu sobstvennost i sposobnost integrirovat iskusstvennyy intellekt v proizvodstvennye sektory.",
            ],
            callouts: [
              "Geopoliticheskiy vopros yasen: kto budet zahvatyvat tsennost iskusstvennogo intellekta - te, kto ego ispolzuyut, te, kto ego reguliruyut, ili te, kto kontrolirovat ego infrastrukturu?",
            ],
          },
          {
            heading: "Chto eto znachit dlya Latinskoy Ameriki",
            paragraphs: [
              "Latinskaya Amerika stalkivayetsya i s vozmozhnostyu, i s riskom.",
              "Vozmozhnost zaklyuchaetsya v ispolzovanii iskusstvennogo intellekta dlya proizvoditelnosti, obrazovaniya, zdravookhraneniya, selskogo khozyaystva, gosudarstvennykh uslug, dobychi, logistiki, energetiki i gosudarstvennoy prozrachnosti. Region mozhet pereshagnut etapy, esli budet strategicheski vnedryat instrumenty II.",
              "Risk v tom, chtoby okazatsya prostym polzovatelem inostrannykh platform. Esli Latinskaya Amerika ne budet razvivat sobstvennye vozmozhnosti, ona budet zaviset ot infrastruktury, modeley, oblaka i standartov, sozdannykh za predelami regiona. Eto ogranichit ee tekhnologicheskiy suverenitet i umenshit sposobnost zahvatyvat ekonomicheskuyu tsennost.",
              "Regionu ne nuzhno napryamuyu konkurirovat s Soedinennymi Shtatami ili Kitaem v bazovykh modelyakh. No on mozhet razvivat sektoralnye prilozheniya, lokalnye dannye, tekhnicheskiy talant, umnoe regulirovanie i strategicheskie soyuzy.",
            ],
            callouts: [
              "Regionalnyy vopros v tom, budet li Latinskaya Amerika ispolzovat iskusstvennyy intellekt dlya transformatsii svoey proizvodstvennoy struktury ili lish dlya potrebleniya importnoy tekhnologii.",
            ],
          },
          {
            heading: "Chto eto oznachaet dlya BRICS",
            paragraphs: [
              "Dlya BRICS iskusstvennyy intellekt - eto proverka strategicheskoy koordinatsii.",
              "Kitay i Indiya imeyut masshtab, talant i tsifrovye ekosistemy. Rossiya sokhranyaet nauchnye, matematicheskie i kibyerbezopasnostnye vozmozhnosti. Braziliya mozhet sygrat vazhnuyu rol v selskom khozyaystve, energetike, klimaticheskikh dannykh i tsifrovykh servisakh. Yuzhnaya Afrika i novye uchastniki mogut dobavit regionalnye pozitsii, strategicheskie resursy i rynki razvitiya.",
              "No blok stalkivayetsya s trudnostyu: integrirovannoy tekhnologicheskoy arkhitektury vse eshche net. Est obshchie interesy, no takzhe est asimmetrii, sopernichestvo i ochen raznye urovni tsifrovogo razvitiya.",
              "Vyzov dlya BRICS - ne tolko deklariruemoe tekhnologicheskoe sotrudnichestvo. Vyzov - postroit konkretnye mekhanizmy: issledovatelskie tsentry, finansirovanie tsifrovoy infrastruktury, interoperabelnost platezhey, standarty dannykh, podgotovku talanta i sotrudnichestvo po zrelym poluprovodnikam.",
            ],
            callouts: [
              "Vopros v tom, mogut li BRICS prevratit demograficheskiy i ekonomicheskiy ves v koordiniruyemuyu tekhnologicheskuyu sposobnost.",
            ],
          },
          {
            heading: "Vozmozhnye stsenarii",
            subsections: [
              {
                heading: "1. Iskusstvennyy intellekt ukreplyaet novuyu fazu proizvoditelnosti",
                paragraphs: [
                  "V etom stsenarii massivnye investitsii v infrastrukturu opravdyvayutsya bystrym vnedreniem so storony biznesa. Kompanii uspevayut monetizirovat II, sokrashchat izderzhki, rasshiryat marzhi i sozdavat novye rynki. Nyneshnie otsenki sokhranyayutsya khotya by chastichno.",
                ],
              },
              {
                heading: "2. Selektivnaya korrektsiya, a ne sistemnyy krakh",
                paragraphs: [
                  "Nekotorye kompanii, svyazannye s II, sokhranyayut tsennost, v to vremya kak drugie padaut iz-za otsutstviya realnoy vyruchki. Rynok nachinaet otlichat kriticheskuyu infrastrukturu, pribylnye prilozheniya i chisto spekulyativnye proekty.",
                ],
              },
              {
                heading: "3. Finansovyy puzyr pri realnoy tekhnologii",
                paragraphs: [
                  "II prodolzhaet razvivat'sya, no rynochnye tseny korrektiruyutsya, potomu chto ozhidaniya okazalis chrezmernimi. Eto stsenariy, pokhozhiy na internet: tekhnologiya vyzhivaet, no mnogie investory teryayut dengi.",
                ],
              },
              {
                heading: "4. Geotekhnologicheskaya fragmentatsiya",
                paragraphs: [
                  "Soedinennye Shtaty, Kitay, Evropa i drugie bloki razvivayut razdelnye tekhnologicheskie ekosistemy. II stanovitsya instrumentom geopoliticheskoy konkurentsii, differentsirovannogo regulirovaniya i strategicheskogo kontrolya dannykh i infrastruktury.",
                ],
              },
            ],
          },
          {
            heading: "Zaklyuchenie",
            paragraphs: [
              "Iskusstvennyy intellekt ne sleduet analizirovat kak modu ili kak avtomaticheskuyu garantiyu rosta. Eto transformiruyushchaya tekhnologiya, no eto takzhe moshchnyy finansovyy narativ.",
              "Sravnenie s puzyrem dotkom napominaet odin urok: tekhnologicheskaya revolyutsiya mozhet byt realnoy i odnovremenno pereotsenennoy rynkami. Internet izmenil mir, no ne kazhdaya internet-kompaniya vyzhila. Iskusstvennyy intellekt mozhet poyti po tomu zhe shablonu.",
              "Klyuchevaya tema ne v tom, vazhen li II. On vazhen. Nastoyashchiy vopros v tom, kto zakhvatit tsennost, kogda pridut vozvraty i kakie aktery okazhutsya uyazvimymi, esli ozhidaniya obgonyat realnost.",
              "Stoyim li my v nachale novoy epokhi proizvoditelnosti ili v faze finansovoy eyforii? Smogut li krupnye tekhnologicheskie firmy opravdat massivnye rashody na infrastrukturu? Gotova li Latinskaya Amerika zakhvatyvat tsennost ili budet lish importirovat vneshnie resheniya? Smogut li BRICS postroit sobstvennuyu tekhnologicheskuyu agendu ili ostanutsya zavisimymi ot platform, dominiruyemykh drugimi?",
              "Otvet budet zaviset ne tolko ot tekhnologii. On budet zaviset ot investitsiy, regulirovaniya, energii, talanta, infrastruktury i geopoliticheskoy strategii. Tam i reshitsya, stanet li iskusstvennyy intellekt sovmestnoy produktivnoy revolyutsiey ili novoy kontsentratsiyey globalnoy ekonomicheskoy vlasti.",
            ],
          },
        ],
      },
      "la-visita-de-trump-a-china-y-la-rivalidad-administrada": {
        title:
          "Трамп в Пекине: соперничество, которое никто не может выиграть, но всем приходится управлять",
        subtitle:
          "Визит показал, что отношения между Соединенными Штатами и Китаем больше не ведут только дипломаты: в них также участвуют CEO, банки, технологические и энергетические компании, промышленные цепочки и державы, стремящиеся переопределить мировой порядок.",
        excerpt:
          "Визит в Пекин не снял структурное соперничество между Вашингтоном и Китаем. Он показал другое: важнейшим отношениям международной системы нужны каналы управления даже тогда, когда спор идет о технологиях, торговле, безопасности и глобальной легитимности.",
        tags: [
          "Трамп",
          "Китай",
          "США",
          "Пекин",
          "Си Цзиньпин",
          "Тайвань",
          "Иран",
          "Россия",
          "дипломатия",
        ],
        bodySections: [
          {
            paragraphs: [
              "Визит Дональда Трампа в Китай не устранил структурное соперничество между Вашингтоном и Пекином. Но он дал более важный сигнал: обеим державам необходимо им управлять.",
              "Отношения между США и Китаем превратились в самую чувствительную ось международной политики. Торговля, технологии, искусственный интеллект, Тайвань, Иран, энергия, цепочки поставок, финансовые рынки и связка Китай-Россия больше не являются отдельными темами. Это элементы одного стратегического уравнения.",
              "Визит не был примирением. Это была просчитанная пауза внутри долгосрочной конкуренции. Трампу нужно было показать экономические результаты, доступ для бизнеса и способность к прямому торгу с Си Цзиньпином. Китаю нужно было проецировать стабильность, международное признание и контроль над посланием.",
              "Главный тезис ясен: визит не решил соперничество, но показал, что обеим странам приходится им управлять. Ни одна сторона не готова уступать по вопросам, которые определяют власть XXI века, однако обе понимают, что открытый разрыв слишком дорог для мира.",
            ],
            callouts: [
              "Вашингтон хочет сохранить технологическое лидерство, финансовую центральность и военную мощь; Китай ищет признание, внешнюю стабильность и пространство для закрепления своего промышленного подъема.",
            ],
          },
          {
            heading: "Ловушка Фукидида и базовый риск",
            paragraphs: [
              "Этот визит можно читать через концепт, который укрепился в стратегических дебатах: ловушка Фукидида. Она описывает риск конфликта, когда восходящая держава бросает вызов положению уже утвердившейся державы.",
              "Применительно к XXI веку вопрос звучит так: вызывает ли подъем Китая у США защитную реакцию, способную подтолкнуть обе державы к структурной конфронтации? Проблема не в том, что они конкурируют. Они будут конкурировать. Проблема в том, можно ли удержать эту конкуренцию в управляемых пределах.",
              "История показывает, что многие войны начинаются не потому, что стороны хотят взаимного уничтожения, а потому, что страх, недоверие и ошибки расчета сужают пространство для переговоров. В этом смысле поездка в Пекин была попыткой удержать именно такую логику.",
            ],
            callouts: [
              "Базовый вопрос в том, может ли устоявшаяся держава принять подъем другой, не превращая его в экзистенциальную угрозу.",
            ],
          },
          {
            heading: "Дипломатия символов: как Китай принимал Трампа",
            paragraphs: [
              "Китай не оставил постановку на волю случая. Визит был выстроен так, чтобы передать историческую непрерывность, политический авторитет и цивилизационную уверенность. В китайской дипломатии места, жесты и ритуалы значат не меньше, чем официальные формулировки.",
              "Пекин стремился представить визит не как уступку Вашингтону, а как встречу двух больших держав. Послание было простым: Китай принимает США не из оборонительной позиции, а из осознания собственного исторического, экономического и стратегического веса.",
              "Символические пространства, высокий протокол и язык стабильности усиливали одну идею: Китай хочет, чтобы с ним обращались как с равной державой, а не только как с торговым партнером или технологическим соперником.",
            ],
            callouts: ["Китай вел переговоры не только словами. Он вел их и символами."],
          },
          {
            heading: "Дипломатический саммит с корпоративным лицом",
            paragraphs: [
              "Одним из самых важных аспектов визита стал состав американской делегации. В нее вошли не только чиновники кабинета, советники по национальной безопасности и дипломаты, но и CEO и старшие руководители крупных американских компаний.",
              "Среди наиболее заметных фигур были Илон Маск, Тим Кук, Дженсен Хуан, Ларри Финк и Стивен Шварцман, а также представители Boeing, ExxonMobil, Mastercard, Visa, Qualcomm, Citigroup и Meta. Визит фактически превратился в саммит высокого уровня на стыке политики и бизнеса.",
              "Это меняет саму интерпретацию поездки. Американская внешняя политика больше не путешествует одна: вместе с ней едут технологические платформы, банки, управляющие активами, производители, энергетические компании и промышленные гиганты. Переговоры шли между двумя государствами, но также между двумя моделями власти.",
            ],
            callouts: [
              "Главный вопрос в том, кто обладает большей силой: страна, контролирующая глобальные финансовые и технологические платформы, или страна, остающаяся незаменимой для производства, потребления и промышленного масштаба.",
            ],
          },
          {
            heading: "Технологии и CEO: реальные условия торга",
            paragraphs: [
              "Присутствие CEO не было декоративной деталью. Оно обозначило реальные условия переговоров. Соперничество США и Китая сегодня определяется не столько тарифами, сколько искусственным интеллектом, полупроводниками, данными, облачной инфраструктурой, электромобилями, батареями, робототехникой, платежными системами, авиацией, энергетикой и цепочками поставок.",
              "Каждая компания в делегации представляла отдельное измерение новой глобальной власти. Nvidia символизирует спор вокруг продвинутых чипов и ИИ; Apple - зависимость от цепочек поставок и доступ к китайскому потребителю; Tesla - электромобили, software и продвинутое производство; BlackRock и Blackstone - глобальный финансовый капитал.",
              "Визит высветил фундаментальное противоречие: Вашингтон стремится ограничить технологический подъем Китая, но многие его важнейшие компании по-прежнему нуждаются в китайском рынке, китайском производстве или китайском масштабе.",
              "Технологическая война ведется не только санкциями и экспортным контролем. Она ведется и в переговорах, где CEO ищут доступ, государства вводят ограничения, а Китай решает, каким иностранным компаниям разрешено оставаться внутри его экономической экосистемы.",
            ],
            callouts: [
              "Неизбежный вопрос: может ли США технологически сдерживать Китай, если его собственные ведущие компании продолжают зависеть от китайского рынка?",
            ],
          },
          {
            heading: "Кто на самом деле выиграл от визита?",
            paragraphs: [
              "Вопрос о том, кто выиграл от визита, выглядит привлекательным, но он обманчив. В настолько взаимозависимых отношениях, как между США и Китаем, абсолютные победы маловероятны. Произошло лишь частичное распределение выгод.",
              "Трамп получил образ лидера прямых переговоров. Он смог представить себя как политика, который садится с Си в Пекине, привозит крупнейших американских CEO и ищет видимые экономические результаты для компаний, рынков и избирателей.",
              "Си также получил свое. Он принимал Трампа на китайской территории в тщательно поставленной обстановке и тем самым проецировал Китай как равную державу. Кроме того, он показал, что крупный американский бизнес по-прежнему заинтересован в Китае, несмотря на ограничения из Вашингтона.",
              "CEO получили политический доступ и пространство для защиты интересов. Рынки получили временный сигнал облегчения. Китай получил символическое признание. США получили переговорочную нарративную победу. Но окончательной победы не получил никто. Визит купил время, а в этих отношениях время само по себе может быть формой временной победы.",
            ],
          },
          {
            heading: "Китайский нарратив: стабильность, паритет и контроль послания",
            paragraphs: [
              "С китайской точки зрения визит подавался как знак дипломатической зрелости. Официальная риторика подчеркивала стабильность, взаимное уважение, сотрудничество и ответственное управление разногласиями.",
              "Пекин стремился показать, что не хочет прямой конфронтации с США, но и не принимает подчиненное положение. Он хочет диалога, но на основе паритета. Он хочет стабильности, но без отказа от красных линий. Он хочет экономического сотрудничества, но без отказа от технологической автономии.",
              "Для Пекина визит стал способом направить несколько сигналов: Вашингтону - что Китай готов говорить, но не уступать одностороннему давлению; внутренней аудитории - что Си ведет разговор с США с позиции силы; Глобальному Югу - что Китай способен разговаривать с ведущей западной державой, не отказываясь от языка автономии.",
            ],
            callouts: [
              "Китайский нарратив не пытается отрицать соперничество. Он стремится управлять им, не выглядя слабым.",
            ],
          },
          {
            heading: "Американский нарратив: доступ, результаты и давление",
            paragraphs: [
              "Для Трампа визит строился по другой логике. Его целью было показать видимые результаты: доступ для американских компаний, коммерческие обязательства, сигналы инвестиций и личное лидерство по отношению к Си.",
              "Бизнес-делегация усиливала этот месседж. Американские компании приехали в Китай не ради символизма. Они приехали потому, что Китай остается слишком крупным рынком, слишком важной промышленной базой и слишком значимым экономическим пространством, чтобы его можно было легко заменить.",
              "Американское противоречие очевидно. Вашингтон хочет сдерживать Китай в технологиях, полупроводниках, искусственном интеллекте и стратегических цепочках. Но его корпорации хотят продавать, производить, инвестировать и защищать свои позиции внутри китайского рынка.",
            ],
            callouts: [
              "Ключевое напряжение состоит в том, как конкурировать, не разрушая полностью взаимозависимость.",
            ],
          },
          {
            heading: "Тайвань: предел любой стабилизации",
            paragraphs: [
              "Тайвань остается точкой, где управляемая конкуренция может перейти в открытую кризисную фазу. Для Китая это вопрос суверенитета, политической легитимности и национального воссоединения. Для США это опора их архитектуры безопасности в Индо-Тихоокеанском регионе и стратегический узел из-за роли Тайваня в мировой полупроводниковой промышленности.",
              "Стабильность между Вашингтоном и Пекином имеет ясный предел: если спор вокруг Тайваня обострится, остальная повестка может быстро подчиниться военной логике. Поэтому любые коммерческие, технологические или дипломатические продвижения нужно читать осторожно.",
              "Они могут снизить напряжение в краткосрочной перспективе, но не устраняют структурный риск. Тайвань остается линией, на которой управление соперничеством может сорваться быстрее всего.",
            ],
            callouts: [
              "Возможны ли стабильные отношения между США и Китаем, пока Тайвань остается красной линией для Пекина и стратегическим активом для Вашингтона?",
            ],
          },
          {
            heading: "Иран: Китай как необходимый, но осторожный посредник",
            paragraphs: [
              "Визит необходимо рассматривать и через Ближний Восток. Иран, энергетическая безопасность и Ормузский пролив входят в стратегические расчеты обеих стран. Китай не является внешним для региона игроком: он один из крупнейших покупателей энергии Персидского залива и напрямую заинтересован в стабильности морских маршрутов.",
              "У Пекина есть каналы к Ирану, и он стремится представлять себя как актора, способного содействовать региональной деэскалации. Здесь возникает важное измерение: Китай может играть посредническую роль, но не обязательно хочет брать на себя полную цену гаранта безопасности на Ближнем Востоке.",
              "У Пекина есть стимулы продвигать стабильность, потому что затяжной кризис ударит по ценам на энергию, морской торговле и экономическому росту. Но он также избегает втягивания в слишком сложные региональные конфликты. Его стиль остается осторожным: влияние без чрезмерной экспозиции.",
            ],
            callouts: [
              "Вопрос в том, способен ли Китай стать эффективным посредником на Ближнем Востоке, не отказываясь от традиционного принципа прямого невмешательства.",
            ],
          },
          {
            heading: "Россия, Путин и треугольное измерение",
            paragraphs: [
              "Хотя визит был двусторонним, его смысл был треугольным. Россия не сидела за столом, но присутствовала в стратегическом расчете. Отношения Китая и России ограничивают способность Вашингтона рассматривать Пекин и Москву как полностью раздельные вызовы.",
              "Китай не будет вести переговоры с США, игнорируя свою связь с Россией, а Россия наблюдает любое сближение Вашингтона и Пекина как движение, способное изменить евразийский баланс. Одновременное давление на обе страны лишь толкает их ближе друг к другу.",
              "Предстоящий визит Владимира Путина в Пекин усиливает это прочтение. Он позволяет Китаю показать, что тот может говорить с Вашингтоном, не отказываясь от стратегического партнерства с Москвой. А России - продемонстрировать, что она не изолирована даже под западным давлением.",
              "Связка Трамп-Си-Путин показывает нечто более глубокое: Китай не хочет быть лишь державой, реагирующей на чужие решения. Он хочет быть пространством, где другие акторы торгуются, ищут признание и корректируют позиции.",
            ],
            callouts: [
              "Стратегический вопрос в том, может ли Вашингтон стабилизировать отношения с Китаем, не подталкивая его еще сильнее к России.",
            ],
          },
          {
            heading: "Торговля и рынки: частичное облегчение, структурная неопределенность",
            paragraphs: [
              "У визита было очевидное торговое измерение. Американские компании искали возможности, доступ и сигналы стабильности. Китай, со своей стороны, стремился снизить неопределенность, привлечь инвестиции и показать выборочную открытость, не отказываясь от своих стратегических приоритетов.",
              "Торговля может дать позитивные объявления: закупки, контракты, отраслевые соглашения, регуляторные разрешения или деловое сотрудничество. Но эти результаты не меняют сущность соперничества. Отношения по-прежнему будут определяться экспортным контролем, промышленной конкуренцией, субсидиями, проверкой инвестиций и спорами об интеллектуальной собственности.",
              "Рынки могут благожелательно реагировать на любой сигнал стабилизации, потому что мировая экономика зависит от отношений двух крупнейших экономик планеты. Снижение напряженности способно поддержать технологические акции, промышленные компании, сырьевые товары, энергетику, валюты развивающихся стран и инвестиционные ожидания.",
              "Но рынки также понимают, что структурные проблемы остаются открытыми. Присутствие CEO в делегации показывает, что частный сектор хочет меньшей неопределенности, а не то, что соперничество уже решено.",
            ],
            callouts: [
              "Ограниченное торговое соглашение может снизить волатильность. Оно не меняет структуру конкуренции.",
            ],
          },
          {
            heading: "Латинская Америка, БРИКС и Глобальный Юг",
            paragraphs: [
              "Латинской Америке стоит внимательно следить за этим визитом. Регион находится между двумя структурными силами: Китаем как торговым партнером, покупателем сырья и инвестором в инфраструктуру, и США как финансовым, политическим, технологическим и денежным центром полушария.",
              "Улучшение отношений между США и Китаем может снизить волатильность, поддержать цены на сырье и улучшить инвестиционные ожидания. Разрыв, напротив, может ударить по торговле, курсам валют, финансированию, логистике, энергетике и цепочкам поставок.",
              "Для БРИКС и Глобального Юга визит имеет дополнительное значение. Китай стремится проецировать себя как державу, способную договариваться с США на равных. Россия наблюдает, пытается ли Вашингтон отделить Пекин от Москвы. Индия, Бразилия, Южная Африка и другие растущие акторы оценивают, как извлечь пользу из более конкурентного мира, не становясь подчиненными одной силе.",
              "Визит подтверждает, что мир больше не живет по полностью униполярной логике. Но это еще не означает, что многополярный порядок уже сложился. Многополярность требует институтов, финансирования, платежных механизмов, технологической координации, управления и способности к исполнению.",
            ],
            callouts: [
              "Многополярность приносит выгоду только тем, у кого есть стратегия; без нее она может остаться лишь нарративом, а не реальной архитектурой.",
            ],
          },
          {
            heading: "Возможные сценарии",
            subsections: [
              {
                heading: "1. Управляемая конкуренция",
                paragraphs: [
                  "США и Китай сохраняют соперничество, но поддерживают активные дипломатические каналы, чтобы избежать разрыва. Такой сценарий снижает краткосрочные риски, не устраняя структурную конкуренцию.",
                ],
              },
              {
                heading: "2. Ограниченная торгово-технологическая сделка",
                paragraphs: [
                  "Объявляются закупки, инвестиции или механизмы частичного доступа на китайский рынок. Трамп получает видимые результаты, Си - стабильность, но базовые споры остаются открытыми.",
                ],
              },
              {
                heading: "3. Ускоренная технологическая фрагментация",
                paragraphs: [
                  "Углубляется спор вокруг искусственного интеллекта, чипов, данных, стандартов и платформ. Американские компании оказываются зажаты между правилами Вашингтона и возможностями китайского рынка.",
                ],
              },
              {
                heading: "4. Частичное китайское посредничество по Ирану",
                paragraphs: [
                  "Китай помогает сформировать дипломатические условия для снижения напряженности на Ближнем Востоке, но избегает роли полного гаранта региональной безопасности.",
                ],
              },
              {
                heading: "5. Более глубокое сближение Китая и России",
                paragraphs: [
                  "Если США сохраняют одновременное давление на Пекин и Москву, обе страны могут усилить энергетическое, финансовое, технологическое и военное сотрудничество.",
                ],
              },
              {
                heading: "6. Сдержанная, но не преодоленная ловушка Фукидида",
                paragraphs: [
                  "Обе страны избегают немедленного кризиса, но логика соперничества между устоявшейся и восходящей державами остается активной. Управление конфликтом не равнозначно его решению.",
                ],
              },
              {
                heading: "7. Треугольная дипломатия из Пекина",
                paragraphs: [
                  "Китай сначала принимает Трампа, а затем Путина, проецируя себя как центр баланса между Вашингтоном и Москвой. В этом сценарии Пекин не разрывает ни с одной стороной, а использует обе связи для расширения своего дипломатического, экономического и стратегического пространства.",
                ],
              },
            ],
          },
          {
            heading: "Заключение",
            paragraphs: [
              "Визит Трампа в Китай не решил соперничество. Он им управлял. Именно в этом его смысл. Вашингтон и Пекин понимают, что разрыв был бы слишком дорогим, но ни один из них не готов уступать по вопросам, определяющим власть XXI века: технологии, безопасность, энергия, торговля, финансы, цепочки поставок, Тайвань и контроль стратегических регионов.",
              "Визит также показал, что мировая политика больше не обсуждается только дипломатами. Ее обсуждают президенты, CEO, банки, производители чипов, энергетические компании, управляющие активами, технологические платформы и ядерные державы. Присутствие Илона Маска, Тима Кука, Дженсена Хуана, Ларри Финка и Стивена Шварцмана было не второстепенной деталью, а снимком новой структуры мировой власти.",
              "Но фон глубже. Отношения США и Китая отмечены классической дилеммой ловушки Фукидида: устоявшаяся держава боится потерять первенство, а восходящая требует признания и пространства. Стабильность будет зависеть от того, смогут ли обе стороны превратить конкуренцию в управляемое соперничество, а не в необратимую конфронтацию.",
              "США нужны доступ, стабильность и результаты. Китаю нужны время, рынки и признание. Россия воздействует на баланс извне. Иран показывает, что Пекин уже необходим для разговора об энергетической стабильности. Латинская Америка и Глобальный Юг наблюдают за соперничеством, которое может открыть возможности, но также усилить давление. Финальный вопрос не в том, могут ли США и Китай сотрудничать. Вопрос в том, могут ли они конкурировать, не разрушая минимальные условия мировой стабильности.",
            ],
          },
          {
            heading: "Открытые вопросы",
            bullets: [
              "Означает ли этот визит реальную стабилизацию или только тактическую паузу?",
              "Могут ли США избежать ловушки Фукидида, не приняв перераспределение глобальной власти?",
              "Может ли Китай договариваться с Вашингтоном, не ослабляя стратегическое партнерство с Россией?",
              "Кто на самом деле выиграл визит: Трамп, Си, американские корпорации или просто временная стабильность?",
              "Станет ли Китай эффективным посредником по Ирану или лишь актором, защищающим свои энергетические интересы?",
              "Что означает визит Путина в Пекин для треугольного баланса между США, Китаем и Россией?",
              "Что должна делать Латинская Америка, чтобы не оказаться зажатой между центрами силы?",
              "Даст ли многополярность Глобальному Югу больше автономии или просто умножит давление на развивающиеся страны?",
            ],
          },
        ],
      },
      "brics-y-el-nuevo-equilibrio-tecnológico-global": {
        title: "BRICS i novyy globalnyy tekhnologicheskiy balans",
        subtitle:
          "Konkurentsiya za standarty, promyshlennye platformy i vychislitelnuyu moshchnost pereopredelyaet otnositelnyy ves bloka.",
        excerpt:
          "Debaty o BRICS bolshe ne vrashchayutsya tolko vokrug valyut ili institutsionalnogo predstavitelstva. Novyy vopros - kto kontroliruet tekhnologicheskie uzly, strukturiruyushchie sleduyushchuyu fazu globalnoy vlasti.",
        tags: ["BRICS", "II", "standarty", "promyshlennaya sposobnost"],
        thesis:
          "Tekhnologicheskoe sopernichestvo mezhdu derzhavami smestilos ot ritoriki blokov k postroeniyu konkretnykh ekosistem: data-tsentrov, talanta, prodvinutogo proizvodstva i tekhnicheskikh norm.",
        whyItMatters: [
          "Dlya bloka BRICS tekhnologicheskaya koordinatsiya rabotaet kak usilitel geopoliticheskogo vesa dazhe pri otsutstvii polnostyu integrirovannoy arkhitektury.",
          "Dostup k tsifrovoy infrastrukture, zrelym poluprovodnikam, oblachnym servisam i promyshlennym tsepochkam stoimosti vse bolshe opredelyaet strategicheskuyu avtonomiyu.",
        ],
        regionalLens:
          "Klyuchevoy vopros ne v tom, deystvuyut li BRICS kak zakrytyy alyans, a v tom, mogut li oni sinkhronizirovat dostatochno prioritetov dlya nabora masshtaba, snizheniya zavisimosti i peregovorov s bolee silnoy pozitsii.",
        outlook:
          "V kratkosrochnom plane my uvidim peremennye koalitsii i chastichnye soglasheniya. V srednesrochnom plane glavnoe - smozhet li blok prevratit ekonomicheskiy obem v ustoichivuyu institutsionalnuyu sposobnost.",
      },
      "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina": {
        title: "Chto oznachaet fragmentatsiya mirovoy torgovli dlya Latinskoy Ameriki",
        subtitle:
          "Nearshoring, friendshoring i ekonomicheskaya bezopasnost otkryvayut vozmozhnosti, no trebuyut promyshlennoy strategii i regionalnoy koordinatsii.",
        excerpt:
          "Fragmentatsiya globalnoy torgovli ne oznachaet polnuyu deglobalizatsiyu. Ona oznachaet bolee politicheskuyu geografiyu torgovli, v kotoroy Latinskaya Amerika mozhet usilit svoe znachenie, esli izbezhit chisto ekstraktivnogo vstraivaniya.",
        tags: ["nearshoring", "Latinskaya Amerika", "logistika", "promyshlennost"],
        thesis:
          "Torgovaya fragmentatsiya ne oznachaet konets globalnogo obmena, a ego reorganizatsiyu na osnove ustoichivosti, politicheskoy blizosti i kontrolya riskov.",
        whyItMatters: [
          "Dlya Latinskoy Ameriki eto otkryvaet prostor v proizvodstve, agropromyshlennosti, mineralakh i uslugakh, no tolko pri nalichii publichno-chastnoy koordinatsii i uluchshenii logistiki.",
          "Region riskuet stat rezervnym postavshchikom bez zakhvata bolee dorogikh zvenyev, esli ne ukrepit infrastrukturu, talant i stabilnye pravila.",
        ],
        regionalLens:
          "Meksika, Braziliya, Chili, Kolumbiya i koridor Yuzhnogo konusa stalkivayutsya s raznymi vozmozhnostyami. Obshchaya tochka - neobkhodimost prevratit geopoliticheskiy moment v posledovatelnuyu ekonomicheskuyu politiku.",
        outlook:
          "Sleduyushchiy tsikl voznagradit tekh, kto predlozhit predskazuemoe regulirovanie, konkurentosposobnuyu energiyu i nadezhnye logisticheskie uzly. Odnogo geograficheskogo preimushchestva uzhe nedostatochno.",
      },
      "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global": {
        title: "Rossiya i Evraziya v perekonfiguratsii globalnoy vlasti",
        subtitle:
          "Mezhdu sanktsiyami, sukhoputnymi koridorami i voenno-promyshlennoy sposobnostyu Evraziya snova zanimaet strukturnoe mesto na mezhdunarodnoy doske.",
        excerpt:
          "Evraziyu bolshe nelzya chitat tolko cherez prizmu konflikta. Ee nuzhno analizirovat i kak logisticheskoe, energeticheskoe i politicheskoe prostranstvo v protsesse pereuporyadocheniya.",
        tags: ["Evraziya", "bezopasnost", "sanktsii", "koridory"],
        thesis:
          "Evraziyskaya tsentralnost vytekaet iz skhozhdeniya geografii, bezopasnosti i svyaznosti. Dazhe pod davleniem region prodolzhaet opredelyat marshruty, energetiku i diplomaticheskie pozitsii.",
        whyItMatters: [
          "Sanktsii uskorili finansovye i logisticheskie adaptatsii, kotorye izmenili torgovye potoki, transportnye uzly i takticheskie alyansy.",
          "Voenno-promyshlennaya sposobnost i territorialnaya glubina ostayutsya reshayushchimi peremennymi pri lyubom chtenii evropeyskoy i aziatskoy bezopasnosti.",
        ],
        regionalLens:
          "Ot Kaspiya do Arktiki region sochetaet operatsionnye uyazvimosti s geograficheskimi preimushchestvami, kotorye ni odin vneshniy igrok ne mozhet ignorirovat.",
        outlook:
          "Sleduyushchiy etap budet zaviset menshe ot zayavleniy i bolshe ot proizvodstvennoy ustoichivosti, otkrytiya alternativnykh koridorov i plotnosti soglasheniy s Aziey, Blizhnim Vostokom i Globalnym Yugom.",
      },
      "energia-corredores-logisticos-y-competencia-geoeconomica": {
        title: "Energetika, logisticheskie koridory i geoekonomicheskaya konkurentsiya",
        subtitle:
          "Uzkiye mesta v postavkakh bolshe ne tekhnicheskiy vopros: eto vopros vlasti, finansirovaniya i sposobnosti predvidet.",
        excerpt:
          "Koridory, porty, prolivy i energeticheskie terminaly obrazuyut edinuyu strategicheskuyu geografiyu. Tot, kto sokrashchaet logisticheskoe trenie, poluchaet politicheskiy manevr.",
        tags: ["energetika", "koridory", "geoekonomika", "porty"],
        thesis:
          "Sovremennaya geoekonomicheskaya konkurentsiya organizovana vokrug konkretnoy fizicheskoy infrastruktury: portov, elektrosetey, truboprovodov, kabel ey i logisticheskikh platform.",
        whyItMatters: [
          "Aktory, kotorye sochetayut finansirovanie, bezopasnost i operatsionnuyu sposobnost vokrug etikh uzlov, poluchayut vliyanie namnogo bolshe svoego nominalnogo vesa.",
          "Energetika ostayetsya obshchim yazykom mezhdu natsionalnoy bezopasnostyu, promyshlennoy politikoy i ekonomicheskoy diplomatiey.",
        ],
        regionalLens:
          "Blizhniy Vostok sokhranyaet tsentralnost ne tolko iz-za uglevodorodov, no i iz-za svoey roli svyazki mezhdu Aziey, Evropoy i Afrikoy.",
        outlook:
          "Budushchie spory budut otsenivatsya menshe po obshchim obemam torgovli i bolshe po kontrolyu uzkikh mest, redundantsiy i vremeni reaktsii v krizisakh.",
      },
      "la-inteligencia-artificial-como-herramienta-de-poder-estatal": {
        title: "Iskusstvennyy intellekt kak instrument gosudarstvennoy vlasti",
        subtitle:
          "Gonka za II - eto ne tolko korporativnaya konkurentsiya. Eto borba za upravlenie, oboronu, proizvoditelnost i gosudarstvennuyu sposobnost pravit.",
        excerpt:
          "II vstraivaetsya v yadro gosudarstvennogo apparata: razvedku, fiskalnoe upravlenie, promyshlennost, oboronu i gosudarstvennye uslugi. Vopros ne tolko v innovatsii, no i v tom, chtoby upravlyat luchshe i bystree.",
        tags: ["II", "gosudarstvo", "upravlenie", "proizvoditelnost"],
        thesis:
          "Dominiruyushchiy narativ predstavlyaet iskusstvennyy intellekt kak rynochnuyu disrupciyu, khotya ego naibolee glubokoe vliyanie razygraetsya v sferakh gosudarstvennoy sposobnosti.",
        whyItMatters: [
          "Te, kto integriruyut II v byurokratiyu, oboronu, finansovyy nadzor i strategicheskoe planirovanie, podnimut institutsionalnuyu proizvoditelnost i rasshiryat vneshniy manevr.",
          "Budushchiy razryv proydet ne tolko mezhdu lidiruyushchimi i otstayushchimi kompaniyami, no i mezhdu gosudarstvami, sposobnymi absorbirovat tekhnologiyu, i gosudarstvami, kotorye lish ee potreblayut.",
        ],
        regionalLens:
          "SSHA i ikh soyuzniki sokhranyayut preimushchestvo v kapitale, vychisleniyakh i innovatsionnykh ekosistemakh, no eto preimushchestvo trebuet bolee tonkoy regulativnoy koordinatsii i publichnogo razvertyvaniya.",
        outlook:
          "Sleduyushchaya bolshaya diskussiya budet o sovmestimosti, nadzore i doktrine. Geopoliticheski vazhen tot II, kotoryy vklyuchaetsya v realnye sistemy, a ne tot, kto dominiroet v zagolovkakh.",
      },
      "tres-señales-que-están-redefiniendo-la-multipolaridad": {
        title: "Tri signala, pereopredelyayushchie mnogopolyarnost",
        subtitle:
          "Kratkoe chtenie dvizheniy, pokazyvayushchikh, kuda mozhet smestitsya arkhitektura globalnoy vlasti.",
        excerpt:
          "Mnogopolyarnost ne poyavlyaetsya mgnovenno. Ona proyavlyaetsya v nebolshikh finansovykh, diplomaticheskikh i tekhnologicheskikh podstroykakh, kotorye vmeste menyayut pravila igry.",
        tags: ["radar", "mnogopolyarnost", "BRICS", "upravlenie"],
        signals: [
          {
            title: "Bolshe soglasheniy v natsionalnykh valyutakh",
            detail:
              "Oni ne zamenyayut dollar v kratkosrochnoy perspektive, no rasshiryayut prostor manevra v dvustoronney torgovle i selektivnom finansirovanii.",
          },
          {
            title: "Parallelnye instituty stanovitsya plotnee",
            detail:
              "Gibkie forumy, regionalnye banki i platezhnye platformy perestayut byt simvolicheskimi i prevrashchayutsya v mekhanizmy konkretnoy koordinatsii.",
          },
          {
            title: "Sektoralnaya diplomatiya vesit bolshe, chem bolshie bloki",
            detail:
              "Mineraly, energetika, svyaznost i iskusstvennyy intellekt formiruyut chastichnye koalitsii, kotorye perestavlyayut prioritety bystree, chem traditsionnye ideologicheskie vyravnivaniya.",
          },
        ],
        outlook:
          "Mnogopolyarnost prodvigaetsya togda, kogda stanovitsya operatsionnoy. Vazhen vopros ne o tom, kakie rechi obeshchayut peremeny, a o tom, kakie soglasheniya sozdayut sposobnost.",
      },
      "por-que-el-ártico-importa-cada-vez-más": {
        title: "Pochemu Arktika stanovitsya vse bolee vazhnoy",
        subtitle:
          "Novye marshruty, resursy, bezopasnost i klimat prevrashchayut dalniy sever v odnu iz samykh chuvstvitelnykh strategicheskikh granits.",
        excerpt:
          "Arktika stanovitsya zonoy odnovremennoy energeticheskoy, torgovoy, voennoy i nauchnoy konkurentsii. Eto nalozhenie i obyasnyaet ee rastushchuyu znachimost.",
        tags: ["Arktika", "marshruty", "energetika", "bezopasnost"],
        thesis:
          "Arktika kontsentriruet strategicheskuyu redkost: ona odnovremenno klimaticheskaya granitsa, energeticheskiy rezerv, potentsialnyy koridor i prostranstvo voennoy konkurentsii.",
        whyItMatters: [
          "Izmeneniya v sudokhodnosti, dual-use infrastrukture i dobyche resursov menyayut raschety stoimosti, vremeni i voennogo prisutstviya.",
          "Evropa, Rossiya, Severnaya Amerika i Aziya smotryat na Arktiku po-raznomu, no vse soglasny, chto ee otnositelnaya znachimost rastet.",
        ],
        regionalLens:
          "Dlya Evropy Arktika sochetaet energeticheskuyu bezopasnost, zashchitu marshrutov i neobkhodimost koordinatsii s soyuznikami bez poteri regulativnoy avtonomii.",
        outlook:
          "Rech ne o novoy zolotoy likhoradke. Rech o prostranstve, kotoroe vynuzhdaet pereosmyslit infrastrukturu, sderzhivanie i upravlenie, poka davlenie ne vyroslo eshche silnee.",
      },
      "china-y-asia-estándares-digitales-y-rutas-industriales": {
        title: "Kitay i Aziya: tsifrovye standarty i promyshlennye marshruty",
        subtitle:
          "Region ukreplyaet menee vidimoe, no bolee glubokoe preimushchestvo: opredelyat, kak proizvoditsya, svyazyvaetsya i masshtabiruetsya tekhnologiya.",
        excerpt:
          "Aziya - uzhe ne tolko fabrika mira. Eto takzhe laboratoriya standartov, promyshlennoy koordinatsii i tsifrovoy infrastruktury s globalnym vliyaniem.",
        tags: ["Aziya", "standarty", "tsifra", "promyshlennost"],
        thesis:
          "Aziatskoe vliyanie rastet, potomu chto region sochetaet proizvodstvennyy masshtab, finansirovanie i sposobnost opredelyat rabochie pravila v strategicheskikh sektorakh.",
        whyItMatters: [
          "Tot, kto ustanavlivaet tekhnicheskie standarty, opredelyaet takzhe stoimost vkhoda, sovmestimost i budushchuyu zavisimost.",
          "Integratsiya proizvodstva, logistiki i tsifrovoy svyaznosti daet Azii sistemnuyu glubinu, kotoruyu trudno vosproizvesti v drugih regionakh.",
        ],
        regionalLens:
          "Kitay zanimaet tsentralnoe mesto na doske, no regionalnaya ekosistema takzhe zavisit ot Indii, ASEAN, Korei, Yaponii i mnozhestva funktsionalnykh svyazok.",
        outlook:
          "Sleduyushchaya bitva za tekhnologicheskie tsepochki budet ne tolko o liderstve brenda, no i o sposobnosti navyazyvat prakticheskie pravila proizvodstva i vnedreniya.",
      },
      "europa-seguridad-industrial-y-autonomía-estratégica": {
        title: "Evropa: promyshlennaya bezopasnost i strategicheskaya avtonomiya",
        subtitle:
          "Evropeyskaya povestka pytayetsya sovmestit otkrytost rynka, oboronu, energetiku i proizvodstvennuyu rekonstruktsiyu bez utraty politicheskogo edinogo fronta.",
        excerpt:
          "Evropa stalkivayetsya so strukturnoy dilemoy: ey nuzhno stat bolee ustoichivoy, ne perestav byt otkrytoy. Eto napryazhenie perestroivaet ee ekonomicheskuyu politiku i geopoliticheskiy yazyk.",
        tags: ["Evropa", "strategicheskaya avtonomiya", "promyshlennost", "regulirovanie"],
        thesis:
          "Evropeyskaya strategicheskaya avtonomiya - eto ne vnezapnyy ideologicheskiy povorot. Eto nakoplennaia reaktsiya na energeticheskie shoki, tekhnologicheskoe davlenie i promyshlennuyu uyazvimost.",
        whyItMatters: [
          "Evropa pereopredelyaet subsidii, pravila konkurentsii i politiku ekonomicheskoy bezopasnosti, chtoby snizit zavisimost v kriticheskikh sektorakh.",
          "Zadacha v tom, chtoby sdelat eto, ne fragmentiruya vnutrenniy rynok i ne oslablyaya diplomaticheskuyu sposobnost v otnoshenii klyuchevykh partnerov.",
        ],
        regionalLens:
          "Evropeyskaya diskussiya menee binarna, chem kazhetsya: rechi ne o vybore mezhdu avtonomiey i alyansom, a o poiske ustoichivoy kombinatsii oboikh.",
        outlook:
          "Uspekh budet zaviset ot realizatsii selektivnoy promyshlennoy politiki s nadezhnym finansirovaniem i koordinatsii regulirovaniya s bolee geopoliticheskim vzglyadom na obshchiy rynok.",
      },
      "africa-minerales-críticos-manufactura-y-poder-negociador": {
        title: "Afrika: kriticheskie mineraly, proizvodstvo i peregovornaya vlast",
        subtitle:
          "Kontinent poluchaet tsentralnost v energeticheskom perekhode, no nastoyashchiy vopros - skolko dobavlennoy stoimosti on smozhet uderzhat.",
        excerpt:
          "Afrika stala neobkhodimoy dlya kriticheskikh mineralov, koridorov i budushchego sprosa. Vyzov v tom, chtoby prevratit etu tsentralnost v sobstvennuyu promyshlennuyu sposobnost.",
        tags: ["Afrika", "kriticheskie mineraly", "proizvodstvo", "peregovory"],
        thesis:
          "Novaya tsentralnost Afriki obyasnyaetsya ne tolko resursami. Ona vytekaet iz kombinatsii mineralov, gorodskikh rynkov, svyaznosti i geograficheskogo polozheniya.",
        whyItMatters: [
          "Energeticheskiy perekhod i konkurentsiya za batarei povyshayut strategicheskuyu tsennost kobalta, medi, margantsa i redkozemelnykh metallov.",
          "Realnaya vozmozhnost zaklyuchaetsya v prevrashchenii ekstraktivnykh kontraktov v platformy pererabotki, podgotovki kadrov i obshchey infrastruktury.",
        ],
        regionalLens:
          "Afrikanskie pravitelstva segodnya vedut peregovory s neskolko bolshim manevrom, potomu chto sushchestvuet bolshaya konkurentsiya mezhdu postavshchikami finansirovaniya, tekhnologiy i bezopasnosti.",
        outlook:
          "Tochka pereloma nastupit, esli vneshnyaya konkurentsiya prevratitsya v natsionalnye programmy industrializatsii, podderzhannye institutami, sposobnymi ikh udershat.",
      },
      "estados-unidos-alianzas-y-política-industrial-de-segunda-ola": {
        title: "Soedinennye Shtaty, alyansy i promyshlennaya politika vtoroy volny",
        subtitle:
          "Vashington pytaetsya pereyti ot reaktsii k bolee ustoichivoy strategii, osnovannoy na promyshlennosti, ekonomicheskoy bezopasnosti i koordinatsii s soyuznikami.",
        excerpt:
          "Amerikanskaya promyshlennaya politika bolshe ne epizod. Ona stanovitsya ekonomicheskoy grammatiko y novogo etapa sistemnoy konkurentsii.",
        tags: ["SSHA", "alyansy", "promyshlennost", "ekonomicheskaya bezopasnost"],
        thesis:
          "Novaya amerikanskaya promyshlennaya politika stremitsya vosstanovit vnutrennyuyu sposobnost i odnovremenno uporyadochit proizvodstvennye alyansy vokrug kriticheskikh sektorov.",
        whyItMatters: [
          "Etot sdvig vliyaet na tsepochki postavok, investitsionnye stymuly, torgovye normy i prostor manevra dlya partnerov i konkurentov.",
          "Koordinatsiya s soyuznikami bolshe izmeryaetsya ne tolko oboronoy, no i subsidiyami, mineralami, chipami i zashchitoy chuvstvitelnykh tekhnologiy.",
        ],
        regionalLens:
          "Zapad dvizhetsya k menee naivnoy modeli vzaimozavisimosti. Vopros v tom, smozhet li on koordiniruvat prioritety, ne umnozhaya vnutrennie tren iya.",
        outlook:
          "Vtoraya promyshlennaya volna budet otsenivatsya po osyazayemym rezultatam: sroki stroitelstva, dostup k syryu, politicheskaya stabilnost i sposobnost sozdavat polnye ekosistemy.",
      },
      "diplomacia-de-media-potencia-en-america-latina": {
        title: "Diplomatiya srednikh derzhav v Latinskoy Amerike",
        subtitle:
          "Region mozhet usilit svoe vliyanie, esli sochetaet selektivnye ambitsii, institutsionalnuyu posledovatelnost i realistichnoe chtenie sredy.",
        excerpt:
          "V bolee fragmentirovannom mire srednie derzhavy imeyut preimushchestvo: oni mogut gibko vesti peregovory. Nedostatok voznikayet togda, kogda etoy gibkosti ne khvataet strategii.",
        tags: ["Latinskaya Amerika", "diplomatiya", "srednie derzhavy", "avtonomiya"],
        thesis:
          "Latinoamerikanskaya diplomatiya mozhet byt bolee vliyatelnoy, esli otkazhetsya ot lozhnogo vybora mezhdu ritoricheskim neytralitetom i passivnym vyravnivaniem.",
        whyItMatters: [
          "Prostranstvo dlya peregovorov est, no ono trebuet yasnykh natsionalnykh prioritetov, posledovatelnykh tekhnicheskikh komand i povestki konkretnykh interesov.",
          "Region raspolagaet tsennymi aktivami v prodovolstvii, energetike, mineralakh i geografii, no vse eshche kommunikuyet i koordiniruet ikh fragmentarno.",
        ],
        regionalLens:
          "Brazilii, Meksike, Chili, Kolumbii i drugim srednim aktoram ne nuzhno govorit odinakovo, chtoby imet ves. Im nuzhno ponimat, gde sotrudnichat, a gde differentsirovatsya.",
        outlook:
          "Sleduyushchee desyatiletie voznagradit strany, sposobnye predlagat diplomaticheskuyu nadezhnost i strategicheskuyu yasnost, a ne tolko ritoriku avtonomii.",
      },
      "medio-oriente-finanzas-energia-y-el-orden-postpetrolero": {
        title: "Blizhniy Vostok: finansy, energetika i postneftyanoy poryadok",
        subtitle:
          "Region ispolzuet suverennyy kapital, infrastrukturu i ekonomicheskuyu diplomatiyu, chtoby podgotovit bolee shirokoe vliyanie, chem odna neft.",
        excerpt:
          "Govorit o postneftyanom poryadke ne znachit, chto neft teryaet znachenie. Eto znachit, chto region pytaetsya diversifitsirovat svoiu vlast do togo, kak rynok izmenitsya okonchatelno.",
        tags: ["Blizhniy Vostok", "suverennye fondy", "energetika", "logistika"],
        thesis:
          "Krupneyshie aktery Zaliva prevrashchayut energeticheskuyu rentu v finansovuyu sposobnost, svyaznost i diplomaticheskuyu proektsiyu.",
        whyItMatters: [
          "Takoe prevrashchenie likvidnosti v strategicheskoe polozhenie izmenyaet investitsionnye marshruty, logisticheskie tsepochki i alyansy s Aziey, Evropoy i Afrikoy.",
          "Region bolshe ne konkuriruet tolko proizvodstvom energii, no i kontrolem infrastruktury, uslug i kapitalovykh platform.",
        ],
        regionalLens:
          "Blizhniy Vostok deystvuet i kak most mezhdu regionami, i kak igrok so sobstvennoy povestkoy. Eta dualnost povyshaet ego arbitrazhnye vozmozhnosti.",
        outlook:
          "Budushchee vliyanie budet zaviset ot togo, naskolko bystro vizii diversifikatsii budut perevedeny v ustoichivye proizvodstvennye sektory i razvityy chelovecheskiy kapital.",
      },
      "infraestructura-corredores-y-poder-en-eurasia": {
        title: "Infrastruktura, koridory i vlast v Evrazii",
        subtitle:
          "Zheleznodorozhnye marshruty, sukhiye porty i novye sukhoputnye svyazi menyayut strategicheskie raschety publichnykh i chastnykh aktorov.",
        excerpt:
          "Infrastruktura ne neytralna. V Evrazii kazhdyy koridor reorganizuet izderzhki, zavisimosti i alyansy s effektami, vykhodyashchimi daleko za predely torgovli.",
        tags: ["Evraziya", "koridory", "infrastruktura", "logistika"],
        thesis:
          "Evraziyskie koridory - eto instrumenty vlasti, potomu chto oni soedinyayut rynki, finansirovanie, fizicheskuyu bezopasnost i diplomaticheskie varianty.",
        whyItMatters: [
          "Kazhdyy alternativnyy marshrut snizhaet uyazvimost pered sanktsiyami, uzkimi mestami ili morskimi krizisami.",
          "Kompanii takzhe perestraivayut strategii, kogda politika menyaet sroki, strakhovku, izderzhki i dostupnost infrastruktury.",
        ],
        regionalLens:
          "Ot Kaspiyskogo morya do svyazey s Kitaem, Indiey i Blizhnim Vostokom Evraziya sochetaet konkuriruyushchie proekty i takticheskie dopolneniya.",
        outlook:
          "Klyuchevaya peremennaya - operatsionnaya nepreryvnost. V volatilnykh usloviyakh samyy tsennyy koridor ne samyy korotkiy, a samyy nadezhnyy.",
      },
      "radar-semanal-estrechos-estándares-y-alimentos": {
        title: "Ezhenedelnyy radar: prolivy, standarty i prodovolstvie",
        subtitle:
          "Chetyre nebolshikh dvizheniya, pomogayushchikh chitat bolee shirokie logisticheskie i politicheskie napryazheniya.",
        excerpt:
          "Nedelya ostavila signaly, svyazyvayushchie morskuyu bezopasnost, tekhnologicheskoe regulirovanie i prodovolstvennoe obespechenie. Ni odin iz nikh ne izolirovan.",
        tags: ["radar", "prolivy", "prodovolstvie", "regulirovanie"],
        signals: [
          {
            title: "Bolshoe davlenie na chuvstvitelnye morskie marshruty",
            detail:
              "Obkhody uvelichivayut vremya puti, strakhovye tarify i raskhod topliva, chto napryamuyu vliyaet na konechnye tseny.",
          },
          {
            title: "Novye tekhnicheskie pravila menyayut dostup k rynkam",
            detail:
              "Normy po proslezhivaemosti i dannym uzhe rabotayut kak konkurentnye filtry v promyshlennykh i agroprodovolstvennykh sektorakh.",
          },
          {
            title: "Prodovolstvennaya bezopasnost vozvrashchaetsya v tsentr",
            detail:
              "Klimat, finansirovanie i logistika tesno svyazany. Napryazhenie na odnom iz etikh frontov bystro peredayotsya drugim.",
          },
          {
            title: "Afrika poluchaet bolshe peregovornogo prostranstva",
            detail:
              "Sochetenie portov, mineralov i vnutrennego sprosa daet neskolkim afrikanskim stranam bolee znachimyy golos v mnogo storonnikh peregovorakh.",
          },
        ],
        outlook:
          "Radar etoy nedeli usilivaet odnu mysl: tekhnicheskie treniya chasto predvoshchayut bolee krupnye strategicheskie sdvigi.",
      },
      "radar-semanal-ia-sanciones-y-monedas": {
        title: "Ezhenedelnyy radar: II, sanktsii i valyuty",
        subtitle:
          "Tri kratkikh signala dlya chteniya togo, kak sparivayutsya tekhnologii, finansy i gosudarstvennaya sposobnost.",
        excerpt:
          "V kratkosrochnom plane globalnye transformatsii prosachivayutsya cherez kazhushchiesya tekhnicheskimi mery. V dolgosrochnom plane eti mery pereopredelyayut ierarkhii.",
        tags: ["radar", "II", "sanktsii", "valyuty"],
        signals: [
          {
            title: "II vhodit v sektoralnoe regulirovanie",
            detail:
              "Debaty uzhe ne abstraktny. Pravitelstva nachinayut trebovat proslezhivaemost, otsenku riska i konkretnuyu sistemy upravleniya po sektoram.",
          },
          {
            title: "Sanktsii porozhdayut sistemy redundantsii",
            detail:
              "Platezhi, strakhovka, postavshchiki i logisticheskie seti adaptiruyutsya, chtoby vyzhivat v sredakh s bolee vysokim politicheskim treniem.",
          },
          {
            title: "Lokalnye valyuty poluchayut takticheskoe ispolzovanie",
            detail:
              "Oni ne zamenyayut dominiruyushchuyu sistemu, no otkryvayut transaktsionnye i finansovye prostranstva, menee podverzhennye geopoliticheskoy volatilnosti.",
          },
        ],
        outlook:
          "Obshchiy vyvod yasen: tekhnologii i finansy uzhe rabotayut kak chast odnoi strategicheskoy doski.",
      },
    },
  },
};

contentTranslations.zh = mergeLocaleData(contentTranslations.en, {
  site: {
    tagline: "关于地缘政治、技术、经济与全球新秩序的战略分析。",
    description: "一个以深度、判断力与清晰度解读全球变化的编辑平台与数字智库。",
  },
  navigation: {
    home: "首页",
    analysis: "分析",
    opinion: "观点",
    radar: "每周雷达",
    regions: "地区",
    sectors: "板块",
    experts: "专家",
    about: "关于 Geo Scope",
    contact: "联系",
    subscription: "订阅",
  },
  newsletterInterests: [
    "地缘政治",
    "国际经济",
    "技术与地缘政治",
    "能源",
    "贸易与供应链",
    "国防与安全",
    "外交",
    "战略基础设施",
    "人工智能与全球权力",
    "多极化与全球治理",
  ],
  about: {
    mission: "以编辑严谨性、战略视角和清晰语言解读全球变化。",
    vision:
      "成为决策者、分析师、企业界、学术界和希望超越新闻周期理解全球重组的读者的重要参考平台。",
    manifesto: [
      "Geo Scope 基于一个简单前提：世界不需要更多噪音，而需要更好的思考框架。",
      "平台以深度阅读、比较判断和国际敏感性，克制而精准地解释地缘经济、技术与政治趋势。",
      "我们不追逐即时反应，而是优先呈现背景、影响与真正值得提出的问题。",
    ],
    principles: ["分析优先于警报。", "深度优先于速度。", "地区背景结合全球视角。", "语言清晰但不牺牲战略密度。"],
  },
  authors: {
    "javier-salazar-segales": {
      role: "总经理兼创始人",
      specialty:
        "地缘政治、外交、BRICS、拉丁美洲、AI & Technology、能源与国际贸易专家",
      summary:
        "玻利维亚国际问题分析师、Geo Scope 创始人，聚焦地缘政治、外交、BRICS、技术与全球秩序转型。",
      affiliations: ["总管理处", "创始人", "Geo Scope"],
      expertise: ["地缘政治", "外交", "BRICS", "拉丁美洲", "AI & Technology", "能源", "国际贸易"],
      languages: ["西班牙语", "英语", "俄语", "中文"],
      education:
        "拥有计算机科学、信息技术、国际商务与企业管理方面的教育背景，并具备外交、国际合作、应用政治分析和地缘政治方面的实践经验。",
      biography: [
        "Javier Jonathan Salazar Segales 是玻利维亚国际问题分析师，也是 Geo Scope 的创始人。Geo Scope 致力于地缘政治分析、战略情报、BRICS、拉丁美洲、技术、能源以及全球秩序转型研究。凭借在外交、国际商务和技术领域的学习与实践经验，他的工作关注新兴大国、新经济集团、人工智能以及地缘政治竞争如何重塑全球治理与国际关系。",
        "Javier Salazar Segales 在外交事务、政治与经济报告撰写、机构协调以及国际合作方面拥有专业经验。他的重点兴趣包括 BRICS 在全球南方中的作用、拉丁美洲在多极世界中的位置、技术主权、能源安全，以及人工智能对国家权力和战略决策的影响。",
        "通过 Geo Scope，他希望就塑造二十一世纪的关键力量提供清晰、易懂并面向未来的分析，尤其关注地缘政治、经济、技术与区域发展之间的交汇。",
      ],
    },
    "tomas-velez": {
      role: "地缘经济编辑",
      specialty: "地缘经济与国际金融",
      summary:
        "跟踪价值链、金融流动与国际格局中的货币竞争。",
      affiliations: ["地缘经济编辑台", "Geo Scope"],
      expertise: ["全球地缘经济", "金融市场", "贸易", "货币"],
      education:
        "国际经济、政治金融与系统性风险分析。",
      biography: [
        "Tomas Velez 研究贸易、债务、流动性与地缘经济竞争之间的相互作用。在 Geo Scope，他重点追踪美元体系的演变、货币多元化战略，以及冲击国际金融架构的关键变化。",
        "他的编辑工作致力于把市场逻辑与国家权力联系起来，解释利率、债券、物流链与产业政策如何共同构成同一场战略竞争。",
      ],
    },
    "clara-ibanez": {
      role: "技术与权力分析师",
      specialty: "战略技术、人工智能与监管竞争",
      summary:
        "研究数字标准、人工智能以及平台经济中的国家能力与权力投射。",
      affiliations: ["技术与权力实验室", "Geo Scope"],
      expertise: ["技术与地缘政治", "人工智能", "半导体", "数字监管"],
      education:
        "技术政策、数字治理与比较创新分析。",
      biography: [
        "Clara Ibanez 关注大国之间的技术竞争，重点涉及半导体、人工智能、数字基础设施与监管。她的核心问题是：技术如何同时成为国家能力建设的工具，以及国际投射的杠杆。",
        "在 Geo Scope，她构建分析框架，以理解创新、经济安全与全球治理之间的关系，并比较美国、中国、欧洲与工业化亚洲的不同路径。",
      ],
    },
    "adrian-rivas": {
      role: "国际安全高级研究员",
      specialty: "国际安全、国防与威慑",
      summary:
        "分析安全架构、军工体系以及大国之间的战略竞争。",
      affiliations: ["国际安全项目", "Geo Scope"],
      expertise: ["国防与安全", "威慑", "俄罗斯与欧亚", "联盟体系"],
      education:
        "安全研究、比较国防与当代军事战略。",
      biography: [
        "Adrian Rivas 跟踪全球安全架构的转型，从联盟竞争到威慑动态、军事 doctrine 与国防工业基础。在 Geo Scope，他提供关于冲突、能力与力量平衡的战略性解读。",
        "他的工作特别强调欧亚、欧洲安全，以及在一个更碎片化、更军事化、也更依赖技术的国际环境中，制度如何进行调整与适应。",
      ],
    },
    "lucia-ferrer": {
      role: "地区与外交编辑",
      specialty: "比较外交与地区分析",
      summary:
        "统筹地区报道，分析外交定位、调解机制与战略自主。",
      affiliations: ["地区与外交编辑台", "Geo Scope"],
      expertise: ["外交", "拉丁美洲", "中东", "战略自主"],
      education:
        "外交政策、多边外交与比较地区研究。",
      biography: [
        "Lucia Ferrer 负责 Geo Scope 的比较地区报道，并研究外交、灵活结盟与自主战略。她的分析重点在于，中等规模与地区性行为体如何在更具竞争性的国际秩序中争取更大回旋空间。",
        "她的工作将地区场景与全球影响连接起来，尤其聚焦拉丁美洲、中东以及那些使外交重新成为权力与适应核心工具的调解空间。",
      ],
    },
  },
  regions: {
    global: {
      name: "全球",
      strap: "系统性流动、金融权力与国际重组。",
      description:
        "关注连接大国、全球流动性、贸易、技术与全球权力架构的跨区域议题。",
      tags: ["美元", "流动性", "流向", "国际体系"],
    },
    brics: {
      name: "金砖",
      strap: "灵活协调、工业分量与平行架构。",
      description:
        "追踪金砖空间在政治、金融与技术层面的演变，以及其对全球制度平衡的影响。",
      tags: ["货币", "标准", "全球南方", "金融"],
    },
    "america-latina": {
      name: "拉丁美洲",
      strap: "资源、战略自主外交与全球定位。",
      description:
        "关注拉丁美洲在价值链、能源、关键矿产与中长期联盟竞争中的位置。",
      tags: ["近岸外包", "大宗资源", "自主性", "港口"],
    },
    "rusia-eurasia": {
      name: "俄罗斯与欧亚",
      strap: "走廊、延展安全与大陆重组。",
      description:
        "分析俄罗斯与欧亚在制裁、物流路线与军工竞争交织下的战略投射。",
      tags: ["制裁", "威慑", "走廊", "能源"],
    },
    "china-asia": {
      name: "中国与亚洲",
      strap: "生产规模、技术标准与制造竞争。",
      description:
        "追踪亚洲在技术、贸易、基础设施与二十一世纪金融架构中的中心性。",
      tags: ["半导体", "互联互通", "制造业", "数字化"],
    },
    europa: {
      name: "欧洲",
      strap: "战略自主、产业能力与高密度监管安全。",
      description:
        "关注欧洲议程中开放、安全经济、国防与产业重建之间的张力。",
      tags: ["能源", "监管", "防务", "北极"],
    },
    "medio-oriente": {
      name: "中东",
      strap: "资本、能源与区域权力新地理。",
      description:
        "分析中东的能源、走廊、主权金融与外交重组。",
      tags: ["海湾", "石油", "主权基金", "海峡"],
    },
    africa: {
      name: "非洲",
      strap: "关键矿产、基础设施与谈判能力。",
      description:
        "追踪非洲在能源转型、新工业链条以及围绕互联互通与资源展开的竞争中的角色。",
      tags: ["铜", "锂", "港口", "工业化"],
    },
    "estados-unidos-occidente": {
      name: "美国与西方",
      strap: "技术权力、联盟体系与第二波产业政策。",
      description:
        "关注西方权力如何在补贴、安全经济、制裁与联盟重组之间重新设计。",
      tags: ["芯片", "联盟", "补贴", "技术政治"],
    },
  },
  sectors: {
    "geoeconomia-global": {
      name: "全球地缘经济",
      description: "贸易、债务、货币、金融权力与国际战略之间的互动。",
    },
    "mercados-financieros": {
      name: "金融市场",
      description: "流动性、利率、债券、股市与全球储蓄吸纳机制。",
    },
    "china-estados-unidos": {
      name: "中国与美国",
      description: "制造、金融、技术与国家能力之间的结构性竞争。",
    },
    geopolítica: {
      name: "地缘政治",
      description: "大国竞争、地区平衡与权力重组。",
    },
    "economia-internacional": {
      name: "国际经济",
      description: "金融流动、产业政策、债务、货币与全球架构。",
    },
    "tecnologia-geopolitica": {
      name: "技术与地缘政治",
      description: "数字基础设施、标准、芯片、平台与国家能力。",
    },
    energía: {
      name: "能源",
      description: "石油、天然气、可再生能源、关键矿产与供应安全。",
    },
    "comercio-cadenas-logisticas": {
      name: "贸易与供应链",
      description: "海上航线、回流、近岸布局与生产节点重组。",
    },
    "defensa-seguridad": {
      name: "国防与安全",
      description: "军事能力、威慑、国防工业与安全架构。",
    },
    diplomacia: {
      name: "外交",
      description: "结盟、调解、区域论坛与战略关系管理。",
    },
    "infraestructura-estrategica": {
      name: "战略基础设施",
      description: "走廊、港口、电信与关键互联节点。",
    },
    "inteligencia-artificial-poder-global": {
      name: "人工智能与全球权力",
      description: "人工智能作为竞争力、监控、生产率与国家投射的向量。",
    },
    "multipolaridad-gobernanza-global": {
      name: "多极化与全球治理",
      description: "制度、灵活联盟与国际体系中新兴规则。",
    },
  },
  articles: {
    "china-produce-estados-unidos-se-endeuda-y-wall-street-gana": {
      title: "中国负责生产，美国负责负债，华尔街负责获利",
      subtitle:
        "全球经济运行在一个悖论之上：生产、债务与流动性之间的失衡支撑着国际金融秩序的重要部分。",
      excerpt:
        "中国输出顺差，美国通过债务吸收全球储蓄，而华尔街则接住了其中相当大的一部分流动性。关键问题在于，这一模式还能维持多久。",
      tags: ["中国", "美国", "华尔街", "美元", "金砖", "全球流动性"],
      bodySections: [
        {
          paragraphs: [
            "全球经济建立在一个悖论之上：系统中的主要失衡并不一定会在短期内削弱它，很多时候反而支撑了它。",
            "中国保持着强大的出口能力并持续积累贸易顺差。美国则维持高额财政赤字，并通过债务为支出融资。在这两种动态之间，形成了一条国际流动性回路，最终受益最多的往往是金融市场，尤其是华尔街。",
            "核心问题不仅是经济性的，更是地缘政治性的：世界能否继续依赖这样一种模式，即一个大国生产顺差，另一个大国通过发行债务吸收资本？",
          ],
        },
        {
          heading: "推动全球体系的两种失衡",
          paragraphs: [
            "第一种失衡是中国的出口型模式。中国向世界出售的商品多于其购买的商品。其制造实力、工业规模以及生产有竞争力商品的能力，使其能够积累大规模贸易顺差。",
            "第二种失衡是美国的财政赤字。美国支出大于收入，并通过发行公共债务来弥补缺口。与其他国家不同，美国可以在相对有利的条件下这样做，因为它发行的是全球最主要的储备货币：美元。",
            "这两种过程彼此相连。出口型经济体产生的顺差需要寻找安全、流动性强且有回报的资产，而美国恰好提供了全球最深的金融市场。因此，全球储蓄中的相当一部分最终流向美国国债、美股、科技公司、投资基金和大型企业。",
          ],
          callouts: [
            "换句话说：中国出口商品，美国出口债务，而华尔街吸收流动性。",
          ],
        },
        {
          heading: "标普500与美国金融权力",
          paragraphs: [
            "标普500不只是一个股指，它代表着美国企业、技术与金融中心。人工智能、软件、半导体、防务、医疗、能源、消费与金融服务等关键领域的主导企业，很多都集中在这里。",
            "当全球流动性充裕时，相当大的一部分资金会流向美国资产，这有助于维持市场估值，尤其是那些被视为长期战略性领袖的公司。",
            "因此，美国股市不能只从企业盈利或技术创新的角度来分析。它还必须被理解为全球金融架构的一部分，在这个架构中，美元、美国公共债务和国际资本流动共同扮演着中心角色。",
            "华尔街上涨，是因为美国经济足够强，还是因为全球金融体系尚不存在真正等价的替代方案？",
          ],
        },
        {
          heading: "失衡的悖论",
          paragraphs: [
            "从理论上讲，巨额财政赤字应当是一个警讯；长期贸易顺差配合疲弱内需，也同样如此。但在现实中，这些失衡却帮助支撑了现行体系。",
            "中国需要出口来维持生产、就业与工业影响力；美国需要债务来维持支出、消费、战略投资和全球存在。两种模式都充满内在张力，但也在某种程度上彼此补充。",
            "结果是一种别扭的关系：两个大国在地缘政治上激烈竞争，却依然通过贸易、金融和货币流动紧密相连。",
          ],
          callouts: ["这并不意味着永久稳定，而意味着相互依赖。"],
        },
        {
          heading: "经济战争并不总以战争的形式出现",
          paragraphs: [
            "中美竞争经常通过关税、制裁、技术限制、半导体、台湾或供应链来解释。但还有一个不那么显眼、却同样关键的层面：国际金融架构。",
            "中国通过生产、基础设施、先进制造与贸易来竞争；美国则通过美元、资本市场、公共债务、技术创新以及吸引全球储蓄的能力来竞争。",
            "二十一世纪的竞争，不仅取决于谁生产得更多，也取决于谁控制资本流动的通道。",
          ],
          callouts: ["一个大国掌握工厂，另一个大国掌握货币与市场。"],
        },
        {
          heading: "这对拉丁美洲意味着什么？",
          paragraphs: [
            "对拉丁美洲而言，这种全球动态带来直接影响。该地区对全球流动性周期、大宗商品价格、美国利率以及中国需求都高度敏感。",
            "当流动性充裕时，新兴市场可能获得更多投资、改善融资条件，并受益于部分商品更高的价格；但当流动性收缩时，地区往往面临资本外流、汇率贬值、输入型通胀和更高的债务成本。",
            "拉丁美洲处在两股力量之间：中国是原材料买家和基础设施投资者，美国则是半球的金融、政治与货币中心。",
            "拉丁美洲能否利用这种竞争实现发展多元化，还是仍将被动回应由他人定义的周期？",
          ],
        },
        {
          heading: "这对金砖国家又意味着什么？",
          paragraphs: [
            "金砖国家希望扩大其在全球经济中的影响力、推动本币使用并降低对美元的依赖，但这一挑战十分艰巨。",
            "国际金融体系依然深度绑定美元。储备、债务市场、全球贸易、国际支付以及美国资产的流动性，都继续赋予美国结构性优势。",
            "悖论在于，许多希望降低美元依赖的国家，仍在一个以美元资产作为最安全、最具流动性资产的体系中运作。",
            "因此，多极金融架构不会仅靠政治宣示建立起来。它需要更深的市场、制度信任、高效的支付机制、货币稳定性以及吸收大规模资本的能力。",
            "对金砖国家来说，问题不只是它们能否挑战美元，而是能否建立一个足够可信、足以让世界愿意使用的替代方案。",
          ],
        },
        {
          heading: "长期风险",
          paragraphs: [
            "现行模式可以持续多年，但也在不断累积风险。",
            "这个系统未必会因为失衡而突然崩塌，但它会随着对这些失衡的依赖加深而变得更脆弱。",
          ],
          bullets: [
            "财政风险：如果美国债务持续增长，利息支出可能压缩政府的政策空间，并加大债券市场压力。",
            "贸易风险：如果中国维持高额工业顺差，其他国家可能会以更多壁垒、关税或技术限制回应。",
            "金融风险：如果市场长期习惯于充裕流动性，某些板块可能形成过高估值。",
            "地缘政治风险：随着中美竞争加剧，任何贸易或金融联系的断裂都可能引发全球性冲击。",
          ],
        },
        {
          heading: "可能的情景",
          subsections: [
            {
              heading: "1. 现有模式延续",
              paragraphs: [
                "中国维持出口强势，美国继续通过债务为赤字融资，金融市场则持续吸收全球流动性。在这种情景下，华尔街依然保持主导地位。",
              ],
            },
            {
              heading: "2. 贸易碎片化加剧",
              paragraphs: [
                "中美紧张上升，更多关税、制裁与技术限制出现，供应链重组，全球贸易成本提高。",
              ],
            },
            {
              heading: "3. 美国债务承压",
              paragraphs: [
                "投资者开始要求更高收益率来为美国公共债务融资，从而推高信用成本、打压股市估值并削弱风险偏好。",
              ],
            },
            {
              heading: "4. 多极体系缓慢上升",
              paragraphs: [
                "金砖国家与其他新兴经济体发展替代支付机制、扩大本币贸易并形成新的融资渠道。美元不会消失，但其相对主导地位可能逐步下降。",
              ],
            },
          ],
        },
        {
          heading: "结论",
          paragraphs: [
            "世界经济并不只靠生产率、贸易或创新运转，它也靠失衡运转。",
            "中国生产顺差，美国发行债务，华尔街吸收流动性，拉丁美洲承受这些周期的外溢效应，金砖国家试图构建替代方案，而美元依然处在体系中心。",
            "更深层的问题在于：这种模式究竟是一种稳定形式，还是一种逐步累积的脆弱性？",
            "一个建立在债务、顺差与流动性之上的全球经济，真的能够无限期持续下去吗？",
            "新兴国家是否为国际金融条件的突然变化做好了准备？",
            "拉丁美洲能否把这种全球竞争转化为战略机会？",
            "金砖国家又能否建立一种不再依赖它们所批评机制的替代性金融架构？",
            "这些问题将定义未来几年全球经济与地缘政治讨论的重要部分。",
          ],
        },
      ],
    },
    "la-nueva-carrera-lunar-ya-comenzo": {
      title: "新的月球竞赛已经开始",
      subtitle:
        "美国与中国正在为月球展开竞争，但真正的目标是控制下一阶段的太空战略基础设施。",
      excerpt:
        "月球重新回到了国际政治中心。问题已不再只是“谁先到达”，而是“谁能留下来、建设基础设施、占据战略位置，并定义未来太空经济的规则”。",
      tags: ["月球", "美国", "中国", "阿耳忒弥斯", "太空", "金砖"],
      bodySections: [
        {
          paragraphs: [
            "几十年来，月球探索一直被视为科学胜利、技术展示或国家威望的象征。如今，月球重新回到国际政治的中心，但其逻辑已经不同。问题不再只是先到达，而是留下来、建设基础设施、确立战略位置，并参与塑造太空经济的规则。",
            "美国与中国正进入月球竞争的决定性阶段。华盛顿推进“阿耳忒弥斯计划”，目标是在月球上恢复可持续的人类存在。北京则采取渐进式战略，将机器人任务、月球南极探索、国际合作以及2030年前实现载人登月的公开目标结合起来。",
            "现在的问题不再是人类是否会重返月球，而是谁将在那里率先建立长期规则、航线、联盟与基础设施。",
          ],
        },
        {
          heading: "月球作为战略空间",
          paragraphs: [
            "月球已经不再只是科学目的地，它正在成为地缘经济竞争的新空间。",
            "月球南极是最受关注的区域，因为那里的永久阴影陨石坑中可能存在水冰。水可用于未来载人任务的维持、氧气生产，甚至最终用于制造氢燃料。因此，控制通往这些资源区的进入权，可能转化为一种战略优势。",
            "中国计划发射嫦娥七号任务，探索月球南极、研究表面环境，并寻找水、冰以及月壤中的挥发性元素。与此同时，美国则通过阿耳忒弥斯计划，搭建一个面向未来表面任务与持续存在的更大框架。",
            "因此，月球不只是一个天体，它还是一座权力实验室。",
          ],
        },
        {
          heading: "阿耳忒弥斯与美国重返月球",
          paragraphs: [
            "阿耳忒弥斯计划的目标远不只是重复阿波罗时代的成功。它想要建立的是更持久的存在，包括私营企业、国际伙伴以及连接地球轨道、月球轨道和月表的技术架构。",
            "与二十世纪不同，当前竞争并不只依赖国家机构。SpaceX、Blue Origin、Lockheed Martin、Boeing 等美国航天生态中的企业，构成了一张公私结合的网络，试图降低成本、加速创新，并把太空变成新的经济边疆。",
            "这改变了月球竞赛的性质。竞争不再只是国旗之间的竞争，也是在供应链、合同、专利、卫星、运载器、软件、通信、太空采矿、能源与商业平台之间展开的竞争。",
          ],
          callouts: ["关键问题在于，美国能否把技术与金融优势转化为可持续的月球存在。"],
        },
        {
          heading: "中国的渐进式推进战略",
          paragraphs: [
            "中国并非临时起意地推进其太空政策。其月球计划一直按照渐进逻辑展开：轨道器、机器人着陆、样本返回、月背探索，如今则进入面向南极的任务阶段。",
            "中国战略包含三层维度。第一是内部技术发展，减少在火箭、着陆模块、载人飞船、机器人、通信和生命保障系统上的外部依赖。第二是累积型科学存在，每次任务都在收集信息、测试技术并为更复杂的行动做准备。第三是联盟建设。由中国推动、俄罗斯等伙伴参与的国际月球科研站，正试图建立一个替代性的太空合作平台。",
            "问题不在于中国是否能在所有维度上赶上美国，而在于它是否能建立一个足够有吸引力的替代性架构，让那些不愿完全依赖西方生态的国家愿意加入。",
          ],
        },
        {
          heading: "竞争不只是“谁先到达”",
          paragraphs: [
            "“太空竞赛”这个表述固然有帮助，但也可能过度简化现实。今天的竞争不会仅靠一个着陆日期来决定胜负。",
            "先到达很重要，但留下来更重要。",
            "谁能部署基础设施、保证通信、维持规律运行、动员伙伴、持续融资并建立技术标准，谁获得的优势就会远远超过一次象征性的单独任务。竞争将围绕基础设施、资源、规范、联盟与叙事展开。",
            "新的月球竞赛将更像在建设一套新的国际架构，而不是一场体育比赛。",
          ],
        },
        {
          heading: "月球南极：新的摩擦点",
          paragraphs: [
            "月球南极可能成为地球之外最早出现功能性领土竞争的空间之一。",
            "这未必是传统意义上的主权问题。《外层空间条约》禁止国家占有天体，但在现实中，基地、科研设备、安全区和操作走廊的设置，可能形成间接控制。",
            "如果某个大国率先在关键区域部署基础设施，它就可以影响其他行为体的进入方式。它不需要宣告主权，也可以通过存在、技术标准、后勤与操作能力施加影响。",
          ],
          callouts: ["由此带来一个敏感问题：如何避免科学合作演变成对特权进入区的竞争？"],
        },
        {
          heading: "美国、中国与军事维度",
          paragraphs: [
            "月球未必会成为战场，但它完全可能成为战略优势空间。",
            "为月球探索而开发的技术往往具有双重用途：通信、导航、机器人、人工智能、传感器、网络安全、先进材料与自主系统。这些能力既可服务民用，也可服务军事目的。",
            "此外，地月空间，也就是地球与月球之间的区域，将日益重要。未来可能会有卫星、空间站、通信系统、传感器与后勤平台在这一空间运行。",
          ],
          callouts: ["更深层的问题在于，太空治理能否与技术进步保持同样的速度，还是规则又一次落后于现实。"],
        },
        {
          heading: "这对欧洲意味着什么？",
          paragraphs: [
            "欧洲通过欧洲航天局参与阿耳忒弥斯计划，尤其是为猎户座飞船提供欧洲服务舱。这让欧洲得以留在由美国主导的月球架构之内，并保持对高技术价值任务的参与权。",
            "但欧洲也面临两难：它有重要的科学能力，却在重型运载、载人进入和战略平台方面仍严重依赖外部伙伴。若想在太空经济中拥有自身分量，就必须把科学优势转化为工业自主与运行能力。",
            "欧洲不一定要与美国或中国正面对抗，但它必须避免在由他人设计的架构中沦为次级伙伴。",
          ],
        },
        {
          heading: "这对拉丁美洲意味着什么？",
          paragraphs: [
            "拉丁美洲看似离月球竞赛很远，但实际上并非如此。新的太空经济能够在卫星服务、精准农业、气候监测、电信、科学教育、采矿、灾害管理与地理空间数据等方面打开机会。",
            "该地区并不需要把宇航员送上月球，才能参与太空经济。它完全可以在数据分析、地面站、卫星应用、大学研究、科研合作与监管等环节建立能力。",
            "但风险同样存在：沦为外国太空服务的单纯消费者。如果拉丁美洲不投资于人才、数字基础设施和区域合作，它将继续依赖在域外设计的平台。",
          ],
          callouts: ["地区层面的关键问题是：拉丁美洲能否利用太空经济提升生产率与技术主权？"],
        },
        {
          heading: "这对金砖国家意味着什么？",
          paragraphs: [
            "月球竞赛同样对金砖国家具有重要意义。中国是扩员后金砖集团中最先进的太空行为体。俄罗斯仍拥有历史经验，尽管它面临资金、技术与地缘政治限制。印度通过月球任务与低成本运营能力展示了实力。巴西和南非则在卫星应用、地球观测与科研合作方面具备潜力。",
            "对金砖国家来说，挑战在于把多极化话语转化为具体的太空项目。一个金砖太空议程可以包括卫星数据交换、运载器合作、科学教育、气候监测、农业、资源管理以及参与月球基础设施建设。",
            "然而，这种协调并不容易。各国能力不对称、国家优先事项不同，而且并非所有成员都愿意置于由中国主导的架构之下。",
          ],
          callouts: ["真正的问题是：金砖国家能否建立一套真正多极化的太空议程，还是太空只会复制地球上已有的技术等级结构？"],
        },
        {
          heading: "可能情景",
          subsections: [
            {
              heading: "1. 美国领导地位延续",
              paragraphs: ["美国巩固阿耳忒弥斯计划，完成新的月球任务，强化与欧洲、日本、加拿大及新兴伙伴的联盟，并保持私营航天生态优势。"],
            },
            {
              heading: "2. 中国加速推进",
              paragraphs: ["中国在2030年前实现载人登月目标，巩固南极机器人任务，并加强国际月球科研站。"],
            },
            {
              heading: "3. 有限合作与受控竞争",
              paragraphs: ["中美继续竞争，但避免直接对抗，并维持最低限度的规则来降低摩擦与事故风险。"],
            },
            {
              heading: "4. 太空秩序碎片化",
              paragraphs: ["不同的太空集团逐渐形成，规范、标准、伙伴与技术系统相互不兼容。"],
            },
            {
              heading: "5. 商业化加速",
              paragraphs: ["私营企业在运输、通信、采矿、能源与月球服务中的角色快速上升。"],
            },
          ],
        },
        {
          heading: "结论",
          paragraphs: [
            "新的月球竞赛不是冷战的简单重演，而是一场更复杂、更商业化、更技术化，也更具多极特征的竞争。",
            "美国在联盟、私人资本、制度经验与金融深度方面拥有优势；中国则拥有国家规划、战略连续性、工业能力和清晰的2030路线图。欧洲试图避免掉队，而拉丁美洲必须决定，是继续在边缘旁观，还是在新兴太空经济中建立有用能力。",
            "月球不再只是科学目的地，它还将成为测试技术、构建联盟、定义规则与投射权力的平台。",
            "谁将控制地月空间的关键基础设施？国际合作能否防止月球南极变成新的战略对抗场？拉丁美洲是否准备好参与太空经济，还是仍将依赖外部能力？金砖国家能否建立自己的太空议程，还是月球竞争只会进一步强化少数行为体的领导地位？",
            "这些问题的答案不会只在实验室或发射中心中产生，还将在预算、联盟、国际规则、产业链与政治决策中被塑造。月球竞赛已经开始，但其结果仍未确定。",
          ],
        },
      ],
    },
    "estamos-ante-una-burbuja-puntocom-2-0": {
      title: "我们是否正站在 2.0 版互联网泡沫前？",
      subtitle:
        "人工智能正在重塑市场，但同时也在考验金融信心的边界。",
      excerpt:
        "人工智能既可能是一场真实的技术革命，也可能在市场中制造出局部泡沫。问题不在于它是否重要，而在于当前估值中有多少已经建立在过于完美的预期之上。",
      tags: ["人工智能", "市场", "英伟达", "互联网泡沫", "生产率", "金砖"],
      bodySections: [
        {
          paragraphs: [
            "每一次重大的技术革命都会伴随一种承诺：改变经济、重塑生产率，并开启新的增长阶段。九十年代的互联网如此，今天的人工智能亦如此。",
            "把当下与互联网泡沫相比较几乎是不可避免的。在这两种情况下，一项新兴技术都俘获了投资者、企业、政府和消费者的想象力；市场也都开始提前计入一个高速增长的未来。与此同时，也都会出现一个不舒服的问题：我们投资的是一场真实转型，还是一个尚未证明其回报的叙事？",
            "人工智能并不是一阵短暂的时尚。它对生产率、防务、教育、医疗、金融服务、自动化与贸易的影响都会非常深远。但真实技术同样可能制造金融泡沫，历史已经多次证明这两件事可以同时成立。",
          ],
        },
        {
          heading: "互联网泡沫留下的教训",
          paragraphs: [
            "互联网泡沫之所以破裂，并不是因为互联网不重要，而是因为市场过快地给那些尚未形成可持续商业模式的公司定出了过高估值。",
            "许多公司曾承诺主导数字新经济，但它们没有足够收入、没有盈利能力，而且依赖对未来的想象。当资本不再为承诺买单，而开始要求结果时，市场便出现了剧烈修正。",
            "然而，互联网确实改变了世界。泡沫破裂后存活下来的，是那些真正建起基础设施、形成现实商业模式并拥有持久竞争优势的企业。亚马逊、谷歌和其他平台并没有否认泡沫的存在，它们只是证明：未来赢家同样可能诞生在泡沫内部。",
          ],
          callouts: ["今天的问题类似：人工智能会像互联网一样成为生产力革命，还是会像互联网泡沫时期那样在金融层面出现过度膨胀？"],
        },
        {
          heading: "当前人工智能周期有何不同",
          paragraphs: [
            "与2000年相比，当前周期确实存在明显差异。今天的核心玩家并不是没有收入的初创公司，而是拥有现金、盈利、基础设施、全球客户和支配地位的大型企业。",
            "微软、Alphabet、亚马逊、Meta、英伟达等大型科技企业并不只靠承诺维持估值，它们本身已经拥有盈利业务，而且相当大一部分人工智能支出也是由自身资源而非纯粹的债务或投机资本提供。",
            "这点很重要：当前这波人工智能投资，建立在具备真实金融能力的公司之上。它不是单纯由脆弱企业构成的狂热，而是由已处于美国经济与技术核心位置的企业推动的周期。",
            "但这并不意味着风险消失了，而只是转移了。真正的问题不在于人工智能是否存在，或是否重要，而在于其经济回报能否以市场已经计入的速度实现。",
          ],
        },
        {
          heading: "新的风险中心：资本开支与数据中心",
          paragraphs: [
            "人工智能需要昂贵的基础设施：芯片、数据中心、能源、散热、网络、人才以及大规模模型。这使得资本开支成为理解这一周期最重要的指标之一。",
            "人工智能已经不再只是软件，它还是物理基础设施、能源基础设施和金融基础设施。问题在于，这些投资终究必须产生回报，而企业往往是在尚未完全看清商业化路径之前就开始大规模建设能力。",
            "如果企业和消费者需求按照预期速度增长，这些支出可以被合理化；如果不能，市场就可能开始质疑这些基础设施的盈利前景。",
          ],
          callouts: ["关键问题在于：我们看到的是一项长期战略投资，还是一场因为害怕落后而被迫展开的支出竞赛？"],
        },
        {
          heading: "技术泡沫与金融泡沫并不相同",
          paragraphs: [
            "技术泡沫并不意味着技术是虚假的，它意味着资产价格脱离了真实经济结果。",
            "人工智能完全可以一方面改变产业，另一方面又在某些公司中形成过高估值。它可以在长期提高生产率，同时在短期引发股市修正。换言之，它既可能是一场真实革命，也可能同时是一场局部泡沫。",
            "这一点至关重要。问题不是要在“人工智能是真实的”还是“人工智能是泡沫”之间二选一，而是要更精确地问：当前价值中，究竟有多少由真实利润支撑，又有多少建立在未来预期之上？",
          ],
        },
        {
          heading: "英伟达与半导体的角色",
          paragraphs: [
            "没有哪家公司比英伟达更能象征这一轮周期。其在人工智能芯片上的地位，使它成为新数字基础设施的核心行为体。GPU、加速器和专用硬件的需求，推高了它的收入、利润率和市场估值。",
            "但这种集中也带来脆弱性。当市场热情被一家公司或极少数几家公司高度吸收时，任何预期变化都可能被放大。",
            "技术史表明，在投资狂潮中卖“铲子和镐头”可以极其赚钱；但它也表明，一旦扩张阶段放缓，这些基础设施供应商同样可能面临需求、利润率和估值的剧烈重估。",
          ],
          callouts: ["问题不在于英伟达是否重要，而在于市场当下的价格是否已经提前假设了一个过于完美的未来。"],
        },
        {
          heading: "人工智能、生产率与政治时间",
          paragraphs: [
            "支持当前周期的核心论点之一，是人工智能有望带来生产率提升。如果企业能够降低成本、自动化流程、改善决策并创造新产品，经济增长就可能加快。",
            "但这里存在时间错位。金融市场往往快于实体经济：股市按月计入预期，而生产率通常要按年才能显现。基础设施先建设，收益后兑现。",
            "这种金融预期与经济采用之间的落差，是当前周期最大的风险之一。如果收益来得比市场预计更慢，即便技术继续进步，市场也仍可能发生修正。",
            "人工智能或许正处于类似互联网成熟前的阶段：一项不可避免的技术，但其赢家与输家分布极不均衡。",
          ],
        },
        {
          heading: "地缘政治含义",
          paragraphs: [
            "人工智能不只是企业现象，它也是全球权力的核心维度之一。",
            "美国凭借资本生态、大学体系、科技企业、先进半导体和数字平台保持领先。中国则试图减少技术依赖、发展本国模型、强化芯片产业，并把人工智能应用于制造、安全、物流和服务。",
            "欧洲试图在不失去竞争力的前提下进行监管。拉丁美洲则从更脆弱的位置观察这一过程：它更多是技术使用者、数据提供者和投资接受方，同时在先进数字基础设施上的相对能力较弱。",
            "这场竞争不仅围绕语言模型或应用，而是围绕数据中心、能源、芯片、标准、人才、云基础设施、知识产权以及将人工智能嵌入生产部门的能力展开。",
          ],
          callouts: ["地缘政治问题非常明确：谁将获得人工智能创造的价值？是使用它的人、监管它的人，还是控制其基础设施的人？"],
        },
        {
          heading: "这对拉丁美洲意味着什么",
          paragraphs: [
            "拉丁美洲同时面对机会与风险。",
            "机会在于，人工智能可以被用于提升生产率、教育、医疗、农业、公共服务、采矿、物流、能源与国家透明度。如果采用得当，该地区有机会实现“跨越式”进步。",
            "风险则在于沦为外国平台的单纯使用者。如果拉丁美洲不能发展自身能力，它将依赖在域外设计的基础设施、模型、云服务与标准。这将限制其技术主权，并削弱其捕获经济价值的能力。",
            "该地区不必直接在基础模型层面与美国或中国竞争，但完全可以在行业应用、本地数据、技术人才、智能监管和战略联盟方面建立自己的位置。",
          ],
          callouts: ["地区层面的关键问题是：拉丁美洲会利用人工智能改造自身生产结构，还是只是消费进口技术？"],
        },
        {
          heading: "这对金砖国家意味着什么",
          paragraphs: [
            "对金砖国家而言，人工智能是一场战略协同能力的测试。",
            "中国和印度拥有规模、人才与数字生态；俄罗斯保留了科学、数学和网络安全能力；巴西可在农业、能源、气候数据和数字服务中发挥重要作用；南非及新成员则可以提供区域位置、战略资源与新兴市场。",
            "然而，金砖集团也面临难题：目前仍不存在一套整合性的技术架构。它们有共同利益，但也存在不对称、竞争以及不同水平的数字化发展。",
            "对金砖国家来说，挑战不只是宣布技术合作，而是建设具体机制：研究中心、数字基础设施融资、支付互操作性、数据标准、人才培养以及成熟制程半导体合作。",
          ],
          callouts: ["真正的问题是，金砖国家能否把人口与经济分量转化为协同的技术能力。"],
        },
        {
          heading: "可能情景",
          subsections: [
            {
              heading: "1. 人工智能开启新的生产率阶段",
              paragraphs: ["在这一情景中，大规模基础设施支出因企业迅速采用而获得合理性。企业成功将人工智能商业化，降低成本、提高利润率并创造新市场。当前估值至少部分得到支撑。"],
            },
            {
              heading: "2. 选择性修正，而非系统性崩溃",
              paragraphs: ["部分与人工智能相关的企业维持价值，而另一些因缺乏真实收入而下跌。市场开始区分关键基础设施、可盈利应用与纯投机项目。"],
            },
            {
              heading: "3. 真实技术之上的金融泡沫",
              paragraphs: ["人工智能继续前进，但市场价格发生修正，因为预期过于乐观。这与互联网时代类似：技术存活下来，但许多投资者会亏损。"],
            },
            {
              heading: "4. 地缘技术碎片化",
              paragraphs: ["美国、中国、欧洲及其他集团发展出彼此分离的技术生态。人工智能成为地缘政治竞争、差异化监管以及数据与基础设施战略控制的工具。"],
            },
          ],
        },
        {
          heading: "结论",
          paragraphs: [
            "人工智能不应被当作一阵潮流，也不应被看作自动保证增长的工具。它确实具有变革性，但同时也是一种极具力量的金融叙事。",
            "与互联网泡沫的比较提醒我们一个教训：技术革命可以是真实的，同时也可能被市场高估。互联网改变了世界，但不是所有互联网公司都活了下来。人工智能也可能重复这种模式。",
            "核心问题不是人工智能是否重要，它当然重要。真正的问题是：谁会捕获价值，回报何时到来，以及当预期超过现实时，哪些行为体会暴露在风险之中。",
            "我们站在新一轮生产率时代的起点，还是一场金融狂热之中？大型科技公司能否证明其巨额基础设施支出是合理的？拉丁美洲是准备好获取价值，还是只会进口外部解决方案？金砖国家能否形成自己的技术议程，还是仍将依赖由他人主导的平台？",
            "答案不只取决于技术本身，还取决于投资、监管、能源、人才、基础设施与地缘政治战略。人工智能究竟会成为共享的生产力革命，还是全球经济权力的新一轮集中，就将在这里见分晓。",
          ],
        },
      ],
    },
    "la-visita-de-trump-a-china-y-la-rivalidad-administrada": {
      title: "特朗普在北京：一场无人能赢、却人人都必须管理的竞争",
      subtitle:
        "这次访问表明，中美关系已不再只是外交官之间的谈判议题：CEO、银行、科技公司、能源企业、产业链以及试图重塑全球秩序的大国，也都在其中。",
      excerpt:
        "这次北京之行并没有解决华盛顿与中国之间的结构性竞争，却清楚表明：即便围绕技术、贸易、安全与全球合法性的争夺仍在继续，这组国际体系中最重要的关系仍然需要被管理。",
      tags: ["特朗普", "中国", "美国", "北京", "习近平", "台湾", "伊朗", "俄罗斯", "外交"],
      bodySections: [
        {
          paragraphs: [
            "唐纳德·特朗普对中国的访问，并没有消除华盛顿与北京之间的结构性竞争。但它传递出一个更重要的信号：双方都必须学会管理这种竞争。",
            "中美关系已经成为当今国际政治最敏感的轴心。贸易、技术、人工智能、台湾、伊朗、能源、供应链、金融市场以及中俄关系，都不再是彼此分离的议题，而是同一套战略方程的一部分。",
            "这次访问不是和解，而是一场长期竞争中的一次经过计算的停顿。特朗普需要展示经济成果、企业准入以及与习近平直接谈判的能力；中国则需要投射稳定、国际承认与叙事控制。",
            "核心判断很清楚：这次访问没有解决竞争，却表明双方都需要对其进行管理。没有任何一方愿意在决定二十一世纪权力结构的议题上让步，但双方都明白，公开破裂的全球代价将极其高昂。",
          ],
          callouts: [
            "华盛顿希望维持技术领导、金融中心性与军事力量；中国则希望获得承认、外部稳定以及巩固工业上升空间。",
          ],
        },
        {
          heading: "修昔底德陷阱与更深层风险",
          paragraphs: [
            "这次访问可以通过一个在战略讨论中不断被提及的概念来理解：修昔底德陷阱。它描述的是当新兴大国挑战既有大国时，冲突风险如何上升。",
            "在二十一世纪的语境下，问题在于：中国的崛起是否会在美国内部引发足够强烈的防御性反应，从而把双方推向结构性对抗。问题不在于它们是否竞争，因为竞争一定会发生。真正的问题在于，这种竞争能否维持在可管理范围内。",
            "历史表明，许多战争并不是因为行为体一开始就想摧毁彼此，而是因为恐惧、不信任与误判压缩了谈判空间。从这个意义上说，北京会晤也是一次试图遏制这种逻辑的努力。",
          ],
          callouts: ["更深层的问题是，一个既有强国能否在不把对方视为生存威胁的前提下接受另一个强国的上升。"],
        },
        {
          heading: "象征外交：中国如何接待特朗普",
          paragraphs: [
            "中国没有把接待场景交给偶然。整个访问被精心设计，用来传达历史连续性、政治权威与文明型自信。在中国外交中，地点、仪式与姿态与官方声明同样重要。",
            "北京试图把这次访问呈现为两个大国之间的会面，而不是对华盛顿的让步。信息非常明确：中国不是以防守姿态接待美国，而是以对自身历史、经济和战略分量的清晰认识来接待它。",
            "象征性空间、高等级礼宾与稳定叙事共同强化了一个观念：中国希望被当作平等大国对待，而不仅仅是贸易伙伴或技术竞争者。",
          ],
          callouts: ["中国进行谈判的不只是语言，还有符号。"],
        },
        {
          heading: "一场带有企业面孔的外交峰会",
          paragraphs: [
            "这次访问最值得注意的一点，是美国代表团的组成。出访者不仅包括内阁官员、国家安全顾问和外交人员，还包括多家美国大型企业的 CEO 与高层管理者。",
            "伊隆·马斯克、蒂姆·库克、黄仁勋、拉里·芬克与史蒂芬·施瓦茨曼等人，是其中最醒目的名字；波音、埃克森美孚、万事达、Visa、高通、花旗与 Meta 的代表也都在列。因此，这次访问实际上成为一场高层政治-商业峰会。",
            "这改变了我们理解此次访问的方式。美国外交不再单独出行，而是与技术平台、银行、资产管理者、制造企业、能源公司和工业巨头一道出行。谈判在两个国家之间展开，同时也在两种权力模型之间展开。",
          ],
          callouts: [
            "根本问题是：究竟是掌握全球金融与技术平台的国家更有力量，还是在生产、消费与工业规模上依旧不可替代的国家更有力量？",
          ],
        },
        {
          heading: "技术与 CEO：谈判的真实条件",
          paragraphs: [
            "CEO 的出现并非装饰性细节，而是谈判真实条件的体现。中美竞争如今早已不只是关税问题，它围绕人工智能、半导体、数据、云服务、电动车、电池、机器人、支付系统、航空、能源与供应链展开。",
            "代表团中的每一家公司都对应着新全球权力的一条维度。英伟达代表先进芯片与人工智能之争；苹果代表供应链与中国消费者市场；特斯拉代表电动车、软件与先进制造；BlackRock 与 Blackstone 代表全球金融资本。",
            "这次访问揭示了一项核心矛盾：华盛顿希望限制中国的技术上升，但它自己最重要的一批企业仍然依赖中国市场、中国制造或中国规模。",
            "技术战争不仅靠制裁与出口管制来打，也在会议桌上打：CEO 寻求准入，国家设置边界，而中国则决定哪些外国企业还能继续嵌入其经济生态。",
          ],
          callouts: [
            "不可回避的问题是：当美国最重要的企业仍依赖中国市场时，美国是否真的能在技术上有效遏制中国？",
          ],
        },
        {
          heading: "究竟谁赢得了这次访问？",
          paragraphs: [
            "“谁赢了”这个问题很吸引人，但也很容易误导。在像中美这样高度相互依赖的关系中，绝对胜利几乎不可能。实际发生的是一种部分收益的分配。",
            "特朗普赢得的是直接谈判者的形象。他可以把自己塑造成那个能在北京与习近平会面、带着美国顶级 CEO 出访、并为企业、市场和选民争取可见成果的领导人。",
            "习近平同样有所收获。他在中国领土上、在精心设计的礼仪框架下接待特朗普，并借此把中国投射为一个平等的大国。同时，他也展示出：即便华盛顿不断推出技术限制，美国大型企业依旧不愿离开中国。",
            "CEO 获得了政治接触、可见度与捍卫利益的空间；市场得到了一次暂时的缓解信号；中国获得了象征性承认；美国获得了“能谈判”的叙事。但没有人取得决定性胜利。这次访问买来了时间，而在中美关系中，买到时间本身就是一种暂时的胜利。",
          ],
        },
        {
          heading: "中国叙事：稳定、平等与信息控制",
          paragraphs: [
            "从中国视角看，这次访问被呈现为一种外交成熟的表现。官方语言强调稳定、相互尊重、合作以及对分歧的负责任管理。",
            "北京试图传达的意思是：中国不寻求与美国正面冲突，但也不接受从属关系。它要的是平等基础上的对话，是不放弃红线的稳定，是不放弃技术自主的经济合作。",
            "对北京而言，这次访问同时面向多个受众发出信息：对华盛顿，表示中国愿意谈，但不会接受单边施压；对国内受众，显示习近平能以强势姿态与美国打交道；对全球南方，则展示中国能够在不放弃自主话语的前提下与主要西方强国对话。",
          ],
          callouts: ["中国叙事并不是要否认竞争，而是要在不显得软弱的情况下管理竞争。"],
        },
        {
          heading: "美国叙事：准入、结果与施压",
          paragraphs: [
            "对特朗普而言，这次访问遵循的是另一套逻辑。他要展示看得见的结果：美国企业获得准入、出现商业承诺、释放投资信号，并在习近平面前呈现个人领导力。",
            "企业代表团强化了这一信息。美国公司前往中国不是出于象征，而是因为中国依旧是一个过于庞大的市场、过于关键的工业基地和无法轻易替代的经济空间。",
            "美国面临的矛盾十分清楚。华盛顿希望在技术、半导体、人工智能和战略性供应链上遏制中国，但它自己的企业仍想在中国销售、生产、投资并维持地位。",
          ],
          callouts: ["真正的张力在于：如何竞争，而又不彻底打碎相互依赖。"],
        },
        {
          heading: "台湾：任何稳定化努力的边界",
          paragraphs: [
            "台湾仍然是管理型竞争最可能演变为公开危机的点。对中国来说，它涉及主权、政治合法性和国家统一；对美国来说，它是印太安全架构的重要支点，也是全球半导体体系中的关键战略节点。",
            "华盛顿与北京之间的稳定有非常清晰的边界：一旦台湾问题升级，其余议程都可能迅速让位于军事安全逻辑。这就是为什么所有商业、技术或外交进展都必须被谨慎解读。",
            "这些进展可以在短期内缓和紧张，但无法消除结构性风险。台湾仍然是中美竞争管理最容易失控的那条线。",
          ],
          callouts: ["当台湾仍是北京的红线、又是华盛顿的战略资产时，中美之间真的可能存在稳定关系吗？"],
        },
        {
          heading: "伊朗：必要但谨慎的中国调解角色",
          paragraphs: [
            "这次访问也必须放在中东背景下理解。伊朗、能源安全与霍尔木兹海峡，都属于中美双方的战略计算。中国并非该地区的外部旁观者，而是海湾能源的主要买家之一，并且直接依赖海上航线稳定。",
            "中国同时与伊朗保持渠道，并试图把自己塑造成有助于区域降温的行为体。这里出现了一个关键维度：中国可能成为调解因素，但它未必愿意承担中东安全担保者的全部成本。",
            "北京有推动稳定的动机，因为长期危机会冲击能源价格、海上贸易与经济增长。但它同样避免被卷入复杂的地区冲突。它的风格仍是谨慎的：发挥影响，但不过度暴露。",
          ],
          callouts: ["问题在于，中国能否在不放弃传统不直接干预原则的前提下，成为中东的有效调停者。"],
        },
        {
          heading: "俄罗斯、普京与三角维度",
          paragraphs: [
            "虽然这次访问是双边性的，但其含义却是三角性的。俄罗斯并不在会场上，却始终存在于战略计算之中。中俄关系限制了华盛顿把北京与莫斯科视为完全分离挑战的能力。",
            "中国不会在忽视对俄关系的前提下与美国谈判；而俄罗斯则把任何中美接近都看作可能影响欧亚平衡的动作。美国若同时对北京与莫斯科施压，往往只会促使两者靠得更近。",
            "普京随后对北京的访问进一步强化了这一点。它让中国能够表明：自己可以与华盛顿对话，而不必放弃与莫斯科的战略伙伴关系。它也让俄罗斯能够展示，即便在西方压力下，它仍未被隔绝。",
            "特朗普、习近平与普京的这一外交顺序，还揭示了更深层的事实：中国不想只是一个对他人决策作出反应的国家，它希望成为其他重要行为体谈判、寻求承认并调整立场的空间。",
          ],
          callouts: ["战略问题在于：华盛顿能否稳定对华关系，而又不把中国进一步推向俄罗斯？"],
        },
        {
          heading: "贸易与市场：局部缓解，结构性不确定",
          paragraphs: [
            "这次访问具有明显的贸易维度。美国企业寻求机会、准入与稳定信号；中国则希望降低不确定性、吸引投资，并在不放弃战略优先事项的前提下展示选择性开放。",
            "贸易可以带来一些积极宣布：采购、合同、部门性协议、监管许可或商业合作。但这些结果并不会改变竞争的本质。中美关系仍将被出口管制、产业竞争、补贴、投资审查以及知识产权争议所塑造。",
            "市场之所以会对任何稳定信号作出积极反应，是因为全球经济依赖于世界前两大经济体之间的关系。紧张缓和可以提振科技股、工业企业、大宗商品、能源、新兴市场货币与投资预期。",
            "但市场也清楚，结构性问题并未关闭。CEO 出现在代表团中，说明企业界想降低不确定性，而不是说明竞争已经被解决。",
          ],
          callouts: ["有限的贸易协议可以降低波动，但并不会改变竞争结构。"],
        },
        {
          heading: "拉丁美洲、金砖国家与全球南方",
          paragraphs: [
            "拉丁美洲应当密切关注这次访问。该地区处于两股结构性力量之间：中国是贸易伙伴、原材料买家和基础设施投资者；美国则是本半球的金融、政治、技术与货币中心。",
            "中美关系改善可能降低波动、支撑原材料价格并改善投资预期；反之，若关系破裂，则可能冲击贸易、汇率、融资、物流、能源与供应链。",
            "对金砖国家和全球南方来说，这次访问还有另一层意义。中国试图把自己投射为能够与美国平等谈判的大国。俄罗斯在观察华盛顿是否试图把北京与莫斯科分开。印度、巴西、南非及其他新兴行为体，则在评估如何从一个竞争加剧的世界中获益，而不被单一强权所支配。",
            "这次访问再次证明，世界已不再按照完全单极化的逻辑运转。但这并不意味着多极秩序已经稳固。多极化需要制度、融资、支付机制、技术协调、治理能力与执行能力。",
          ],
          callouts: ["多极化只会奖励那些拥有战略的人；若没有战略，它就可能只是一个叙事，而不是一套真实架构。"],
        },
        {
          heading: "可能情景",
          subsections: [
            {
              heading: "1. 竞争被继续管理",
              paragraphs: ["美国与中国继续竞争，但保持外交渠道活跃，以避免关系断裂。这会降低短期风险，却不会消除结构性竞争。"],
            },
            {
              heading: "2. 有限的贸易-技术协议",
              paragraphs: ["双方宣布采购、投资或部分市场准入机制。特朗普获得可见成果，习近平获得稳定，但核心争议依然存在。"],
            },
            {
              heading: "3. 技术碎片化加速",
              paragraphs: ["围绕人工智能、芯片、数据、标准与平台的争夺进一步加深。美国企业将被夹在华盛顿规则与中国市场机会之间。"],
            },
            {
              heading: "4. 中国对伊朗进行部分调停",
              paragraphs: ["中国有助于创造中东降温的外交条件，但避免承担完整的地区安全担保角色。"],
            },
            {
              heading: "5. 中俄进一步靠近",
              paragraphs: ["如果美国继续同时对北京与莫斯科施压，两国可能进一步深化能源、金融、技术与军事合作。"],
            },
            {
              heading: "6. 修昔底德陷阱被压住，但未被超越",
              paragraphs: ["双方避免了立即爆发危机，但既有强国与上升强国之间的竞争逻辑仍然存在。管理冲突并不等于解决冲突。"],
            },
            {
              heading: "7. 从北京展开的三角外交",
              paragraphs: ["中国先接待特朗普，再接待普京，把自己投射为华盛顿与莫斯科之间的平衡中心。在这一情景中，北京并不与任何一方决裂，而是利用双方关系扩大自身外交、经济与战略空间。"],
            },
          ],
        },
        {
          heading: "结论",
          paragraphs: [
            "特朗普访华并没有解决竞争，而是对竞争进行了管理。这正是其真正意义。华盛顿与北京都知道，彻底破裂的代价过于高昂，但双方都不愿在定义二十一世纪权力结构的议题上让步：技术、安全、能源、贸易、金融、供应链、台湾以及战略地区控制。",
            "这次访问也说明，世界政治已不再只是外交官之间的谈判。总统、CEO、银行、芯片制造商、能源企业、资产管理者、技术平台以及核大国，都在共同塑造谈判结果。马斯克、库克、黄仁勋、芬克和施瓦茨曼的在场，并非次要细节，而是新全球权力结构的一张照片。",
            "但更深层背景在于，中美关系仍被修昔底德陷阱式的经典困境所塑造：既有大国害怕失去主导地位，上升大国则要求承认与空间。未来稳定与否，取决于双方能否把竞争转化为可管理的对抗，而不是不可逆转的冲突。",
            "美国需要准入、稳定与结果；中国需要时间、市场与承认；俄罗斯在会场之外影响平衡；伊朗表明，北京已经成为讨论能源稳定时不可绕开的力量；拉丁美洲与全球南方则在观察一场既可能带来机会、也可能带来更大压力的竞争。最终的问题并不是中美能否合作，而是它们能否在不破坏全球最低稳定条件的情况下继续竞争。",
          ],
        },
        {
          heading: "开放问题",
          bullets: [
            "这次访问意味着真正的稳定化，还是仅仅是一场战术暂停？",
            "美国能否在不接受全球权力重新分配的前提下避免落入修昔底德陷阱？",
            "中国能否在不削弱对俄战略关系的情况下与华盛顿谈判？",
            "究竟是谁赢得了这次访问：特朗普、习近平、美国企业，还是仅仅是暂时的稳定？",
            "中国会成为伊朗问题上的有效调停者，还是只是在保护自身能源利益？",
            "普京访问北京，对美中俄三角平衡意味着什么？",
            "拉丁美洲应当如何避免被夹在不同权力中心之间？",
            "多极化会给全球南方带来更多自主性，还是只是带来更多压力？",
          ],
        },
      ],
    },
    "brics-y-el-nuevo-equilibrio-tecnológico-global": {
      title: "金砖国家与新的全球技术平衡",
      subtitle: "围绕标准、工业平台与算力的竞争，正在重新定义这一集团的相对分量。",
      excerpt:
        "关于金砖国家的讨论已不再只围绕货币或制度代表性，而是转向一个新问题：谁在控制塑造下一阶段全球权力的技术节点？",
      tags: ["金砖", "人工智能", "标准", "工业能力"],
    },
    "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina": {
      title: "全球贸易碎片化对拉丁美洲意味着什么",
      subtitle:
        "近岸外包、友岸外包与经济安全带来机会，但也要求产业战略与地区协调。",
      excerpt:
        "全球贸易碎片化并不意味着彻底去全球化，而是意味着一种更具政治性的贸易地理格局。在其中，如果避免陷入单纯的资源型嵌入，拉丁美洲就可能提升自身重要性。",
      tags: ["近岸外包", "拉丁美洲", "物流", "工业"],
    },
    "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global": {
      title: "俄罗斯与欧亚在全球权力重组中的位置",
      subtitle:
        "在制裁、陆上走廊与军工能力之间，欧亚重新占据国际棋盘上的结构性位置。",
      excerpt:
        "欧亚已不能只通过冲突来解读。它同样必须被视为一个正在重组中的物流、能源与政治空间。",
      tags: ["欧亚", "安全", "制裁", "走廊"],
    },
    "energia-corredores-logisticos-y-competencia-geoeconomica": {
      title: "能源、物流走廊与地缘经济竞争",
      subtitle:
        "供应瓶颈已不再只是技术问题，而是权力、融资与前瞻能力的问题。",
      excerpt:
        "走廊、港口、海峡与能源终端构成一个统一的战略地理。谁能减少物流摩擦，谁就能获得更大的政治回旋空间。",
      tags: ["能源", "走廊", "地缘经济", "港口"],
    },
    "la-inteligencia-artificial-como-herramienta-de-poder-estatal": {
      title: "人工智能作为国家权力工具",
      subtitle:
        "围绕人工智能的竞赛不仅是企业竞争，更是关于治理、国防、生产率与国家能力的竞争。",
      excerpt:
        "人工智能正被嵌入国家机器核心：情报、财政管理、产业、国防与公共服务。问题不只是创新，而是更好、更快地治理。",
      tags: ["人工智能", "国家", "治理", "生产率"],
    },
    "tres-señales-que-están-redefiniendo-la-multipolaridad": {
      title: "三大信号正在重新定义多极化",
      subtitle:
        "一份短读，用来把握那些正在改变全球权力架构方向的细小动态。",
      excerpt:
        "多极化不是突然降临的，而是通过一连串细小的金融、外交与技术调整逐步显现，并共同改变游戏规则。",
      tags: ["雷达", "多极化", "金砖", "治理"],
      signals: [
        {
          title: "更多本币协议正在出现",
          detail:
            "它们在短期内不会取代美元，但确实扩大了双边贸易与选择性融资中的操作空间。",
        },
        {
          title: "平行制度正在获得更高密度",
          detail:
            "灵活论坛、区域银行和支付平台不再只是象征，而开始变成实际协调机制。",
        },
        {
          title: "部门型外交比大集团叙事更有分量",
          detail:
            "矿产、能源、互联互通与人工智能正在催生局部联盟，其重排优先级的速度快于传统意识形态阵营。",
        },
      ],
      outlook:
        "多极化只有在变得可操作时才真正推进。关键不是谁在承诺变化，而是谁的安排正在产生真实能力。",
    },
    "por-que-el-ártico-importa-cada-vez-más": {
      title: "为什么北极越来越重要",
      subtitle:
        "新航线、资源、安全与气候，正在把极北地区变成最敏感的战略前沿之一。",
      excerpt:
        "北极正同时成为能源、贸易、军事与科学竞争区。这种叠加正是其重要性不断上升的原因。",
      tags: ["北极", "航线", "能源", "安全"],
    },
    "china-y-asia-estándares-digitales-y-rutas-industriales": {
      title: "中国与亚洲：数字标准与工业路径",
      subtitle:
        "这一地区正在巩固一种不那么显眼却更深层的优势：定义技术如何被生产、连接与规模化。",
      excerpt:
        "亚洲不再只是世界工厂，它同时也是一个具有全球影响力的标准、产业协调与数字基础设施实验室。",
      tags: ["亚洲", "标准", "数字化", "工业"],
    },
    "europa-seguridad-industrial-y-autonomía-estratégica": {
      title: "欧洲：产业安全与战略自主",
      subtitle:
        "欧洲议程正试图在保持政治凝聚力的同时，协调市场开放、国防、能源与产业重建。",
      excerpt:
        "欧洲面临一个结构性两难：它需要更强韧，同时又不能失去开放性。这种张力正在重塑其经济政策与地缘政治语言。",
      tags: ["欧洲", "工业", "自主", "安全"],
    },
    "africa-minerales-críticos-manufactura-y-poder-negociador": {
      title: "非洲：关键矿产、制造业与谈判能力",
      subtitle:
        "资源重要性上升的同时，也让基础设施、加工与产业政策成为新的战略问题。",
      excerpt:
        "非洲的重要性不仅在于它拥有什么资源，更在于它能否把资源禀赋转化为工业能力与更强的谈判地位。",
      tags: ["非洲", "矿产", "制造业", "谈判力"],
    },
    "estados-unidos-alianzas-y-política-industrial-de-segunda-ola": {
      title: "美国、联盟与第二波产业政策",
      subtitle:
        "补贴、友岸布局与技术安全正在塑造一种新的西方经济战略。",
      excerpt:
        "美国的当前战略并不是简单回到保护主义，而是试图在竞争、国家安全与联盟管理之间建立新的平衡。",
      tags: ["美国", "联盟", "产业政策", "技术"],
    },
    "diplomacia-de-media-potencia-en-america-latina": {
      title: "拉丁美洲的中等强国外交",
      subtitle:
        "在一个更碎片化的体系中，地区国家试图在不选边站的前提下扩大操作空间。",
      excerpt:
        "中等强国外交不追求宏大宣言，而是追求在供应链、融资、安全与多边空间中的可操作灵活性。",
      tags: ["外交", "拉丁美洲", "中等强国", "战略自主"],
    },
    "medio-oriente-finanzas-energia-y-el-orden-postpetrolero": {
      title: "中东：金融、能源与后石油秩序",
      subtitle:
        "该地区正在重新定位自身，不仅作为能源供应者，也作为资本、物流与技术节点。",
      excerpt:
        "后石油秩序并不意味着石油终结，而意味着海湾与更广泛中东正在重新安排其在全球体系中的角色。",
      tags: ["中东", "金融", "能源", "转型"],
    },
    "infraestructura-corredores-y-poder-en-eurasia": {
      title: "欧亚的基础设施、走廊与权力",
      subtitle:
        "连接性不是中性的；它决定谁运输更快、融资更稳、谈判更强。",
      excerpt:
        "在欧亚大陆，基础设施项目不仅是经济项目，也是关于影响力、标准与长期地缘位置的项目。",
      tags: ["基础设施", "欧亚", "走廊", "权力"],
    },
    "radar-semanal-estrechos-estándares-y-alimentos": {
      title: "每周雷达：海峡、标准与粮食",
      subtitle:
        "四个小变化，帮助理解更大的物流与政治紧张。",
      excerpt:
        "这一周留下的信号，把海上安全、技术监管与粮食保障连接在一起。它们没有一个是孤立的。",
      tags: ["雷达", "海峡", "粮食", "监管"],
      signals: [
        {
          title: "敏感海上航线承受更大压力",
          detail:
            "绕航正在增加航程时间、保险成本与燃料开支，并直接影响终端价格。",
        },
        {
          title: "新的技术规则正在改变市场准入",
          detail:
            "关于可追溯性与数据的规范，已经在工业和农食领域充当竞争性筛选器。",
        },
        {
          title: "粮食安全重新回到中心",
          detail:
            "气候、融资与物流彼此紧密相连，其中任何一条战线的紧张都会迅速传导至其他领域。",
        },
        {
          title: "非洲获得更大的谈判空间",
          detail:
            "港口、矿产与内需的结合，让若干非洲国家在多边谈判中拥有了更有分量的声音。",
        },
      ],
      outlook:
        "本周雷达强化了一个判断：技术性摩擦往往预示着更大的战略位移。",
    },
    "radar-semanal-ia-sanciones-y-monedas": {
      title: "每周雷达：人工智能、制裁与货币",
      subtitle:
        "三个简短信号，帮助理解技术、金融与国家能力如何相互叠加。",
      excerpt:
        "从短期看，全球转型常通过看似技术性的措施渗透出来；从长期看，这些措施会重新定义等级结构。",
      tags: ["雷达", "人工智能", "制裁", "货币"],
      signals: [
        {
          title: "人工智能正在进入行业监管",
          detail:
            "讨论已不再停留在抽象层面。政府开始要求可追溯性、风险评估以及按行业划分的具体治理系统。",
        },
        {
          title: "制裁正在催生冗余体系",
          detail:
            "支付、保险、供应商与物流网络正在调整，以便在更高政治摩擦环境中继续运作。",
        },
        {
          title: "本币正在获得更具战术性的使用",
          detail:
            "它们不会取代主导体系，但确实打开了更少受地缘政治波动影响的交易与融资空间。",
        },
      ],
      outlook:
        "总体结论很明确：技术与金融已经在同一张战略棋盘上运作。",
    },
  },
});

contentTranslations.en.articles["xi-y-putin-en-beijing-y-la-cooperacion-estrategica-global"] =
  xiPutinArticleTranslations.en;
contentTranslations.ru.articles["xi-y-putin-en-beijing-y-la-cooperacion-estrategica-global"] =
  xiPutinArticleTranslations.ru;
contentTranslations.zh.articles["xi-y-putin-en-beijing-y-la-cooperacion-estrategica-global"] =
  xiPutinArticleTranslations.zh;
contentTranslations.en.articles["america-latina-y-la-crisis-organica"] =
  americaLatinaCrisisOrganicaTranslations.en;
contentTranslations.ru.articles["america-latina-y-la-crisis-organica"] =
  americaLatinaCrisisOrganicaTranslations.ru;
contentTranslations.zh.articles["america-latina-y-la-crisis-organica"] =
  americaLatinaCrisisOrganicaTranslations.zh;
contentTranslations.en.articles["foro-de-seguridad-multipolar-en-moscu"] =
  foroSeguridadMultipolarMoscuTranslations.en;
contentTranslations.ru.articles["foro-de-seguridad-multipolar-en-moscu"] =
  foroSeguridadMultipolarMoscuTranslations.ru;
contentTranslations.zh.articles["foro-de-seguridad-multipolar-en-moscu"] =
  foroSeguridadMultipolarMoscuTranslations.zh;
