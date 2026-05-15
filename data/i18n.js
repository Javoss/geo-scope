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

export const supportedLocales = ["es", "en", "ru"];
export const defaultLocale = "es";

export const localeOptions = {
  es: {
    label: "ES",
    name: "Espanol",
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
};

export const uiCopy = {
  es: {
    articleTypes: {
      analysis: "Analisis",
      opinion: "Opinion",
      radar: "Radar semanal",
    },
    pageCopy: {
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
    },
    pageTitles: {
      home: "Analisis estrategico global",
      analysis: "Analisis",
      opinion: "Opinion",
      radar: "Radar semanal",
      regions: "Regiones",
      sectors: "Sectores",
      about: "Sobre Geo Scope",
      contact: "Contacto",
      subscription: "Suscripcion",
      editor: "Panel editorial",
      regionNotFound: "Region no encontrada",
      sectorNotFound: "Sector no encontrado",
      articleNotFound: "Articulo no encontrado",
    },
    header: {
      menu: "Menu",
      navAria: "Principal",
      utilityAria: "Accesos",
      search: "Buscar",
      subscription: "Suscripcion",
      languageAria: "Idioma",
    },
    footer: {
      sections: "Secciones",
      institutional: "Institucional",
      newsletter: "Newsletter",
      contactNote: "Informacion general y colaboraciones editoriales.",
      newsletterNote:
        "Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.",
      rightsReserved: "Todos los derechos reservados.",
      editorialPanel: "Panel editorial",
    },
    home: {
      heroLead: "Analisis estrategico",
      heroSubtitle:
        "Geopolitica, tecnologia, economia, energia y comercio internacional con una lectura clara, sobria y de largo plazo.",
      heroText:
        "Una plataforma para leer el sistema internacional con criterio, contexto y foco estrategico.",
      explore: "Explorar analisis",
      subscribe: "Suscribirse",
      trust: [
        "Plataforma editorial",
        "Centro de analisis",
        "Perspectiva internacional",
      ],
      focus: "En foco",
      edition: "Edicion",
      dossiers: "Dossiers",
      regions: "Regiones",
      sectors: "Sectores",
      globalRadar: "Radar global",
      weeklyPriority: "Lectura prioritaria de la semana",
      weeklyPriorityFallback:
        "Movimientos breves con impacto acumulativo sobre liquidez, comercio y competencia estrategica.",
      openWeeklyRadar: "Abrir radar semanal",
      frontpage: {
        eyebrow: "Portada",
        title: "Una lectura principal y tres ejes de contexto.",
        text:
          "La home combina un articulo destacado con piezas complementarias para construir una lectura mas completa del tablero global.",
      },
      latest: {
        eyebrow: "Ultimos analisis",
        title: "Lecturas recientes con densidad estrategica.",
        text:
          "Analisis de fondo para seguir la evolucion del poder, las cadenas de valor y la competencia tecnologica.",
        action: "Ver archivo",
      },
      radar: {
        eyebrow: "Radar global",
        title: "Senales breves con impacto estrategico.",
        text:
          "Seguimiento semanal para detectar cambios discretos con implicaciones geopoliticas y geoeconomicas.",
        action: "Ver radar semanal",
        quickRead: "Lectura rapida",
        open: "Abrir radar",
      },
      sectors: {
        eyebrow: "Temas / Sectores",
        title: "Una estructura editorial organizada por capacidades y tensiones.",
        text:
          "Sectores pensados para seguir la interseccion entre tecnologia, economia, energia, diplomacia y poder estatal.",
        action: "Ver sectores",
      },
      regionsSection: {
        eyebrow: "Regiones",
        title: "Cobertura regional con enfoque comparado.",
        text:
          "Cada region cuenta con portada propia, articulo destacado, ultimos textos y claves para interpretar sus movimientos.",
        action: "Explorar regiones",
      },
      newsletter: {
        title:
          "Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.",
        description:
          "Un newsletter curado para seguir geopolitica, economia internacional, tecnologia, energia y reordenamiento global sin ruido innecesario.",
      },
    },
    archive: {
      visibleResults: "resultados visibles con los filtros actuales.",
      structureSummary:
        "regiones y sectores en la estructura editorial.",
      openFeatured: "Abrir lectura destacada",
      search: "Buscar",
      searchPlaceholder: "Titulo, region, etiqueta o sector",
      format: "Formato",
      region: "Region",
      sector: "Sector",
      allRegions: "Todas las regiones",
      allSectors: "Todos los sectores",
      applyFilters: "Aplicar filtros",
      clear: "Limpiar",
      noResultsTitle: "No hay resultados para esta combinacion.",
      noResultsText:
        "Prueba con otra region, otro sector o un termino de busqueda mas amplio.",
      resetFilters: "Restablecer filtros",
      fullView: "Vista completa del archivo editorial.",
      searchLabel: "busqueda",
      lockedFormatLabel: "Formato",
    },
    radarPage: {
      demoDeliveries: "entregas demo del radar semanal para seguimiento editorial.",
      keySignals: "senales clave por entrega para una lectura rapida y util.",
      openReading: "Abrir lectura",
    },
    regionsPage: {
      eyebrow: "Mapa regional",
      title: "Regiones con portadas propias y enfoque estrategico.",
      text:
        "Navega por BRICS, America Latina, Rusia y Eurasia, China y Asia, Europa, Medio Oriente, Africa y Estados Unidos y Occidente.",
      mapped: "regiones trazadas para lectura comparada.",
      covers: "Portadas",
      coversText:
        "cada region combina descripcion, destacado, archivo y etiquetas.",
      region: "Region",
      regionArticles: "articulos demo relacionados con la region.",
      keySectors: "sectores clave conectados con esta cobertura.",
      strategicDescription: "Descripcion estrategica",
      latestEyebrow: "Ultimos articulos",
      latestTitle: (regionName) => `Lecturas recientes sobre ${regionName}.`,
      latestText:
        "Una seleccion de piezas para seguir tendencias, riesgos y oportunidades en esta region.",
    },
    sectorsPage: {
      eyebrow: "Sectores",
      title: "Categorias editoriales con lectura transversal.",
      text:
        "Organiza el archivo por geoeconomia, tecnologia, energia, seguridad, diplomacia e infraestructura para seguir el poder donde realmente opera.",
      curated:
        "sectores curados para una plataforma magazine + think tank.",
      filterLabel: "Filtro regional",
      filterText:
        "cada categoria permite leer el cruce entre tema y geografia.",
      filterByRegion: "Filtrar por region",
      apply: "Aplicar",
      applyFilter: "Aplicar filtro",
      clear: "Limpiar",
      sector: "Sector",
      sectorArticles: "articulos asociados con el filtro actual.",
      connectedRegions: "regiones conectadas con esta categoria.",
      viewAll: "Ver todo",
      noArticlesTitle: "No hay articulos para esta combinacion.",
      noArticlesText: "Prueba otra region o vuelve a la vista completa del sector.",
      resetView: "Restablecer vista",
    },
    articlePage: {
      back: "Volver",
      save: "Guardar",
      saved: "Guardado",
      copyLink: "Copiar enlace",
      relatedRegion: "Region relacionada",
      openRegionalCover: "Abrir portada regional",
      openRegionalMap: "Abrir mapa regional",
      tags: "Etiquetas",
      newsletterTitle: "Recibe nuevas lecturas estrategicas en tu inbox.",
      newsletterDescription:
        "Suscribete para seguir analisis, opinion y radar semanal con una cadencia editorial clara.",
      relatedEyebrow: "Relacionados",
      relatedTitle: "Sigue leyendo en esta misma agenda.",
      relatedText: "Articulos conectados por region, sector o formato editorial.",
      fallbackAuthorName: "Equipo editorial",
      fallbackAuthorRole: "Geo Scope",
      fallbackRegionName: "Cobertura global",
      fallbackRegionDescription:
        "Analisis vinculado a tendencias transversales del sistema internacional.",
      readArticle: "Leer articulo",
      openSector: "Abrir sector",
    },
    aboutPage: {
      eyebrow: "Sobre Geo Scope",
      title:
        "Un proyecto editorial para interpretar cambios globales con profundidad, criterio y claridad.",
      text: "Geo Scope combina la disciplina de un think tank independiente.",
      mission: "Mision",
      vision: "Vision",
      approach: "Enfoque",
      approachTitle: "Think tank independiente y plataforma de analisis.",
      approachText:
        "Geo Scope busca explicar el mundo con una voz analitica, sobria y profesional, evitando el tono sensacionalista y la logica de portal de noticias rapidas.",
      manifestoEyebrow: "Manifiesto editorial",
      manifestoTitle: "Por que existe Geo Scope.",
      manifestoText:
        "Un medio para pensar mejor el poder, no para amplificar ruido.",
      manifestoPoint: (index) => `Punto 0${index + 1}`,
    },
    contactPage: {
      eyebrow: "Contacto",
      title:
        "Colaboraciones, consultas institucionales y propuestas editoriales.",
      text:
        "Geo Scope esta pensado para crecer hacia una plataforma con mas autores, mas categorias y posibles capas premium. Este espacio sirve como punto de contacto inicial.",
      information: "Informacion y colaboraciones",
      approach: "Enfoque",
      approachText:
        "Analisis estrategico, opinion especializada y seguimiento internacional de alta claridad.",
      channels: "Canales",
      headline: "Hablemos.",
      body:
        "Puedes escribir por informacion general, colaboraciones, sindicacion de contenidos, alianzas institucionales o consultas sobre el desarrollo futuro de la plataforma.",
      form: "Formulario",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Tema de contacto",
      message: "Mensaje",
      messagePlaceholder: "Cuentanos en que podemos ayudarte.",
      send: "Enviar consulta",
    },
    subscriptionPage: {
      eyebrow: "Newsletter / Suscripcion",
      title:
        "Recibe analisis estrategicos y lecturas clave sobre el nuevo orden global.",
      text:
        "Una suscripcion pensada para lectores que necesitan claridad, profundidad y una mirada internacional sobre geopolitica, economia, tecnologia, energia y comercio.",
      format: "Formato",
      formatText: "Analisis, opinion y radar semanal.",
      value: "Valor",
      valueText: "Menos ruido, mas criterio y mejor arquitectura de lectura.",
      panelTitle: "Suscripcion editorial",
      panelDescription:
        "Elige tus intereses tematicos y construye una experiencia mas afin con tu agenda de lectura.",
    },
    editorPage: {
      eyebrow: "Panel editorial demo",
      title: "Una base simple para publicar nuevos contenidos en el futuro.",
      text:
        "Esta vista funciona como paso intermedio hacia un CMS: permite preparar un articulo, ver una previsualizacion local y generar una estructura base reutilizable.",
      today: "Hoy",
      todayText:
        "Metadatos en data/content.js y articulos modulares en data/articles/.",
      later: "Despues",
      laterText: "Futura migracion sencilla a headless CMS o panel multi-autor.",
      draft: "Nuevo borrador",
      titleLabel: "Titulo",
      subtitleLabel: "Subtitulo",
      typeLabel: "Formato",
      regionLabel: "Region",
      sectorLabel: "Sector",
      readTimeLabel: "Tiempo de lectura",
      excerptLabel: "Extracto",
      previewStructure: "Estructura sugerida",
      draftTitle: "Nuevo analisis sobre corredores energeticos",
      draftSubtitle:
        "Un borrador para medir tono, jerarquia visual y consistencia editorial.",
      draftExcerpt:
        "Una plantilla simple para convertir ideas editoriales en nuevas piezas dentro de la arquitectura de Geo Scope.",
      snippetIntro: "Apertura del articulo.",
      snippetHeading: "Primera seccion",
      snippetBody: "Desarrollo principal.",
    },
    notFound: {
      title: "La pagina que buscas no esta disponible.",
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
      interests: "Intereses tematicos",
      join: "Unirme",
      subscribe: "Suscribirme",
    },
    essaySections: {
      thesis: "Tesis central",
      why: "Por que importa",
      regional: "Lectura regional",
      outlook: "Lo que viene",
      signals: "Senales clave",
    },
    generic: {
      readingFallback: "Lectura",
      regionFallback: "Region",
      sectorFallback: "Sector",
    },
    toasts: {
      favoriteSaved: "Articulo guardado en favoritos.",
      favoriteRemoved: "Articulo eliminado de favoritos.",
      contactSaved:
        "Consulta registrada localmente. Lista para conectar con un backend.",
      newsletterSaved:
        "Suscripcion registrada localmente. Lista para integrar con newsletter real.",
      linkCopied: "Enlace copiado al portapapeles.",
      shareError: "No se pudo compartir el articulo en este dispositivo.",
    },
    meta: {
      readTime: (minutes) => `${minutes} min de lectura`,
      shortMinutes: (minutes) => `${minutes} min`,
      articles: (count) => `${count} ${count === 1 ? "articulo" : "articulos"}`,
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
      about: "About Geo Scope",
      contact: "Contact",
      subscription: "Subscribe",
      editor: "Editorial desk",
      regionNotFound: "Region not found",
      sectorNotFound: "Sector not found",
      articleNotFound: "Article not found",
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
      sectors: "Sectors",
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
      save: "Save",
      saved: "Saved",
      copyLink: "Copy link",
      relatedRegion: "Related region",
      openRegionalCover: "Open regional front",
      openRegionalMap: "Open regional map",
      tags: "Tags",
      newsletterTitle: "Receive new strategic reads in your inbox.",
      newsletterDescription:
        "Subscribe to follow analysis, opinion, and weekly radar with a clear editorial cadence.",
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
        "Strategic analysis, specialized opinion, and highly legible international tracking.",
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
      formatText: "Analysis, opinion, and weekly radar.",
      value: "Value",
      valueText: "Less noise, more judgment, and a better reading architecture.",
      panelTitle: "Editorial subscription",
      panelDescription:
        "Choose your thematic interests and build a reading experience better aligned with your agenda.",
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
      regionLabel: "Region",
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
      regionFallback: "Region",
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
      about: "O Geo Scope",
      contact: "Kontakt",
      subscription: "Podpiska",
      editor: "Redaktsionnaya panel",
      regionNotFound: "Region ne nayden",
      sectorNotFound: "Sektor ne nayden",
      articleNotFound: "Statya ne naydena",
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
      sectors: "Sektory",
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
      regionLabel: "Region",
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
      regionFallback: "Region",
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
        role: "General Director",
      },
      "tomas-velez": {
        role: "Geoeconomics editor",
      },
      "clara-ibanez": {
        role: "Technology and power analyst",
      },
      "adrian-rivas": {
        role: "Senior international security researcher",
      },
      "lucia-ferrer": {
        role: "Regions and diplomacy editor",
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
          "Coverage of the tension between openness, economic security, defense, and industrial reconstruction in the European agenda.",
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
      geopolitica: {
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
      energia: {
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
      "brics-y-el-nuevo-equilibrio-tecnologico-global": {
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
          "Those who integrate AI into bureaucracies, defense, financial supervision, and strategic planning will raise institutional productivity and expand their external room for action.",
          "The future gap will not be only between leading and lagging firms, but between states capable of absorbing technology and states that merely consume it.",
        ],
        regionalLens:
          "The United States and its allies retain an advantage in capital, compute, and innovative ecosystems, but that advantage requires finer regulatory coordination and public deployment.",
        outlook:
          "The next major debate will be about interoperability, oversight, and doctrine. The geopolitically relevant AI is the one entering real systems, not the one dominating headlines.",
      },
      "tres-senales-que-estan-redefiniendo-la-multipolaridad": {
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
      "por-que-el-artico-importa-cada-vez-mas": {
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
          "Europe, Russia, North America, and Asia look at the Arctic through different lenses, but all agree its relative importance is increasing.",
        ],
        regionalLens:
          "For Europe, the Arctic combines energy security, route protection, and the need to coordinate with allies without losing regulatory autonomy.",
        outlook:
          "This is not a new gold rush. It is a space forcing a rethink of infrastructure, deterrence, and governance before the pressure grows even more.",
      },
      "china-y-asia-estandares-digitales-y-rutas-industriales": {
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
      "europa-seguridad-industrial-y-autonomia-estrategica": {
        title: "Europe: industrial security and strategic autonomy",
        subtitle:
          "The European agenda is trying to reconcile open markets, defense, energy, and productive reconstruction without losing political cohesion.",
        excerpt:
          "Europe faces a structural dilemma: it needs to become more resilient without ceasing to be open. That tension is redesigning its economic policy and geopolitical language.",
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
      "africa-minerales-criticos-manufactura-y-poder-negociador": {
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
      "estados-unidos-alianzas-y-politica-industrial-de-segunda-ola": {
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
      "radar-semanal-estrechos-estandares-y-alimentos": {
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
        role: "Generalnyy direktor",
      },
      "tomas-velez": {
        role: "Redaktor po geoekonomike",
      },
      "clara-ibanez": {
        role: "Analitik po tekhnologiyam i vlasti",
      },
      "adrian-rivas": {
        role: "Starshiy issledovatel mezhdunarodnoy bezopasnosti",
      },
      "lucia-ferrer": {
        role: "Redaktor po regionam i diplomatii",
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
      geopolitica: {
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
      energia: {
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
              "Osnovnoy interes sosredotochen na yuzhnom polyuse Luny. Etot rayon vazhen, potomu chto mozhet soderzhat zalezhi vodyanogo lda v postoyanno zatemnennykh kraterakh. Voda mozhet sluzhit dlya podderzhaniya budushchikh pilotiruemykh missiy, proizvodstva kisloroda i, v perspektive, vodoroda dlya topliva. Poetomu kontrol dostupa k zonam s lunnymi resursami mozhet prevratitsya v strategicheskoe preimushchestvo.",
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
      "brics-y-el-nuevo-equilibrio-tecnologico-global": {
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
      "tres-senales-que-estan-redefiniendo-la-multipolaridad": {
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
      "por-que-el-artico-importa-cada-vez-mas": {
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
      "china-y-asia-estandares-digitales-y-rutas-industriales": {
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
      "europa-seguridad-industrial-y-autonomia-estrategica": {
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
      "africa-minerales-criticos-manufactura-y-poder-negociador": {
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
      "estados-unidos-alianzas-y-politica-industrial-de-segunda-ola": {
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
      "radar-semanal-estrechos-estandares-y-alimentos": {
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
