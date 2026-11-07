// Archivo GENERADO por scripts/build.mjs a partir de data/i18n.js. No editar a mano.

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

export const ui = {
  articleTypes: {
    analysis: "Analysis",
    opinion: "Opinion",
    radar: "Weekly radar",
  },
  pageCopy: {
    analysis: {
      eyebrow: "Editorial archive",
      title: "Analysis with context, scale, and judgment.",
      description: "Explore the full Geo Scope archive with region, sector, and format filters to spot patterns, not just headlines.",
    },
    opinion: {
      eyebrow: "Point of view",
      title: "Strategic opinion with a clear voice.",
      description: "Columns and arguments for reading the international system through interests, capabilities, and consequences.",
    },
    radar: {
      eyebrow: "Weekly tracking",
      title: "Global radar to spot signals before consensus forms.",
      description: "Brief reads on moves that anticipate geopolitical, geoeconomic, and technological shifts.",
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
    newsletterNote: "Receive strategic analysis and key reads on the new global order.",
    rightsReserved: "All rights reserved.",
    editorialPanel: "Editorial desk",
  },
  home: {
    heroLead: "Strategic analysis",
    heroSubtitle: "Geopolitics, technology, economics, energy, and international trade through a clear, sober, long-range lens.",
    heroText: "A platform for reading the international system with judgment, context, and strategic focus.",
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
    weeklyPriorityFallback: "Brief moves with cumulative impact on liquidity, trade, and strategic competition.",
    openWeeklyRadar: "Open weekly radar",
    frontpage: {
      eyebrow: "Front page",
      title: "One lead read and three context lines.",
      text: "Start with the lead piece, then follow the related reads that put it in context.",
    },
    latest: {
      eyebrow: "Latest analysis",
      title: "Recent reads with strategic density.",
      text: "In-depth analysis to follow shifts in power, value chains, and technological competition.",
      action: "View archive",
    },
    radar: {
      eyebrow: "Global radar",
      title: "Brief signals with strategic impact.",
      text: "Weekly tracking to detect subtle changes with geopolitical and geoeconomic implications.",
      action: "View weekly radar",
      quickRead: "Quick read",
      open: "Open radar",
    },
    sectors: {
      eyebrow: "Themes / Sectors",
      title: "An editorial structure organized by capabilities and tensions.",
      text: "Sectors designed to follow the intersection of technology, economics, energy, diplomacy, and state power.",
      action: "View sectors",
    },
    regionsSection: {
      eyebrow: "Regions",
      title: "Regional coverage with a comparative lens.",
      text: "Each region has its own front page, featured article, latest texts, and key tags for interpreting its moves.",
      action: "Explore regions",
    },
    newsletter: {
      title: "Receive strategic analysis and key reads on the new global order.",
      description: "A curated newsletter for following geopolitics, international economics, technology, energy, and global reordering without unnecessary noise.",
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
    noResultsText: "Try another region, another sector, or a broader search term.",
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
    text: "Browse BRICS, Latin America, Russia and Eurasia, China and Asia, Europe, the Middle East, Africa, and the United States and the West.",
    mapped: "regions mapped for comparative reading.",
    covers: "Fronts",
    coversText: "each region combines description, featured reading, archive, and tags.",
    region: "Region",
    regionArticles: "demo articles related to the region.",
    keySectors: "key sectors connected to this coverage.",
    strategicDescription: "Strategic description",
    latestEyebrow: "Latest articles",
    latestTitle: (regionName) => `Recent reads on ${regionName}.`,
    latestText: "A selection of pieces to follow trends, risks, and opportunities in this region.",
  },
  sectorsPage: {
    eyebrow: "Sectors",
    title: "Editorial categories with a cross-cutting lens.",
    text: "Organize the archive by geoeconomics, technology, energy, security, diplomacy, and infrastructure to follow power where it actually operates.",
    curated: "curated sectors for a magazine + think tank platform.",
    filterLabel: "Regional filter",
    filterText: "each category lets you read the intersection between topic and geography.",
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
    newsletterDescription: "Subscribe to follow analysis, opinión, and weekly radar with a clear editorial cadence.",
    relatedEyebrow: "Related",
    relatedTitle: "Keep reading within the same agenda.",
    relatedText: "Articles connected by region, sector, or editorial format.",
    fallbackAuthorName: "Editorial team",
    fallbackAuthorRole: "Geo Scope",
    fallbackRegionName: "Global coverage",
    fallbackRegionDescription: "Analysis tied to cross-cutting trends in the international system.",
    readArticle: "Read article",
    openSector: "Open sector",
  },
  aboutPage: {
    eyebrow: "About Geo Scope",
    title: "An editorial project for interpreting global change with depth, judgment, and clarity.",
    text: "Geo Scope combines the discipline of an independent think tank with the clarity of an editorial publication: sourced analysis, historical context and long-term strategic reading.",
    mission: "Mission",
    vision: "Vision",
    approach: "Approach",
    approachTitle: "Independent think tank and analysis platform.",
    approachText: "Geo Scope seeks to explain the world with an analytical, sober, and professional voice, avoiding sensationalism and the logic of a breaking-news portal.",
    manifestoEyebrow: "Editorial manifesto",
    manifestoTitle: "Why Geo Scope exists.",
    manifestoText: "A publication designed to think about power better, not to amplify noise.",
    manifestoPoint: (index) => `Point 0${index + 1}`,
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Collaborations, institutional inquiries, and editorial proposals.",
    text: "Geo Scope is designed to grow into a platform with more authors, more categories, and possible premium layers. This space serves as the first point of contact.",
    information: "Information and collaborations",
    approach: "Approach",
    approachText: "Strategic analysis, specialized opinión, and highly legible international tracking.",
    channels: "Channels",
    headline: "Let's talk.",
    body: "Write to us about general information, collaborations, content syndication, institutional partnerships, or questions about the platform's future development.",
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
    title: "Receive strategic analysis and key reads on the new global order.",
    text: "A subscription for readers who need clarity, depth, and an international lens on geopolitics, economics, technology, energy, and trade.",
    format: "Format",
    formatText: "Analysis, opinión, and weekly radar.",
    value: "Value",
    valueText: "Less noise, more judgment, and a better reading architecture.",
    panelTitle: "Editorial subscription",
    panelDescription: "Choose your thematic interests and build a reading experience better aligned with your agenda.",
  },
  expertsPage: {
    eyebrow: "Experts",
    title: "The founding expert and editorial vision of Geo Scope.",
    text: "Meet Javier Salazar Segales, Geo Scope's General Director & Founder, and the areas where he concentrates his analysis.",
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
    text: "This view works as an intermediate step toward a CMS: it lets you prepare an article, preview it locally, and generate a reusable base structure.",
    today: "Today",
    todayText: "Metadata in data/content.js and modular articles in data/articles/.",
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
    draftSubtitle: "A draft for measuring tone, visual hierarchy, and editorial consistency.",
    draftExcerpt: "A simple template for turning editorial ideas into new pieces within the Geo Scope architecture.",
    snippetIntro: "Article opening.",
    snippetHeading: "First section",
    snippetBody: "Main development.",
  },
  notFound: {
    title: "The page you are looking for is not available.",
    text: "Return to the homepage or open the editorial archive to keep exploring Geo Scope.",
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
    contactSaved: "Inquiry stored locally. Ready to connect to a backend.",
    newsletterSaved: "Subscription stored locally. Ready to connect to a real newsletter.",
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
};

export const content = {
  site: {
    tagline: "Strategic analysis on geopolitics, technology, economics, and the new global order.",
    description: "An editorial platform and digital think tank for interpreting global change with depth, judgment, and clarity.",
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
    mission: "Interpret global change with editorial rigor, a strategic lens, and clear language.",
    vision: "To become a reference platform for decision-makers, analysts, business leaders, academia, and readers seeking to understand global reordering beyond the news cycle.",
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
      specialty: "Specialist in Geopolitics, Diplomacy, BRICS, Latin America, AI & Technology, Energy, and International Trade",
      summary: "Bolivian international analyst and founder of Geo Scope, focused on geopolitics, diplomacy, BRICS, technology, and the transformation of global order.",
      affiliations: [
        "General Directorate",
        "Founder",
        "Geo Scope",
      ],
      expertise: [
        "Geopolitics",
        "Diplomacy",
        "BRICS",
        "Latin America",
        "AI & Technology",
        "Energy",
        "International Trade",
      ],
      languages: [
        "Spanish",
        "English",
        "Russian",
        "Chinese",
      ],
      education: "Training in computer science, information technologies, international business, and business management, with experience in diplomacy, international cooperation, applied political analysis, and geopolitics.",
      biography: [
        "Javier Jonathan Salazar Segales is a Bolivian international analyst and founder of Geo Scope, a platform dedicated to geopolitical analysis, strategic intelligence, the BRICS, Latin America, technology, energy, and the transformation of global order. With training and experience in diplomacy, international business, and technology, his work examines how emerging powers, new economic blocs, artificial intelligence, and geopolitical competition are reshaping global governance and international relations.",
        "Javier Salazar Segales has professional experience in diplomatic affairs, the drafting of political and economic reports, institutional coordination, and international cooperation. His areas of interest include the role of the BRICS in the Global South, Latin America's position in a multipolar world, technological sovereignty, energy security, and the impact of artificial intelligence on state power and strategic decision-making.",
        "Through Geo Scope, he seeks to offer clear, accessible, and future-oriented analysis of the main forces shaping the twenty-first century, with particular attention to the intersection of geopolitics, economics, technology, and regional development.",
      ],
    },
    "maria-luisa-ramos-urzagaste": {
      role: "Contributing analyst",
      specialty: "Specialist in Russia and Eurasia, ASEAN, diplomacy, and multipolarity",
      summary: "Contributing author at Geo Scope, focused on Russia and Eurasia, ASEAN, diplomacy, and multipolar reordering.",
      affiliations: [
        "Contributor",
        "Geo Scope",
      ],
      expertise: [
        "Russia and Eurasia",
        "ASEAN",
        "Diplomacy",
        "Multipolarity",
      ],
      languages: [
        "Spanish",
      ],
      education: "Biographical profile currently being updated.",
      biography: [
        "Maria Luisa Ramos Urzagaste is a Geo Scope contributor and author of analysis on Russia, Eurasia, ASEAN, diplomacy, and multipolarity.",
        "Her editorial profile is currently being updated and will be expanded with additional biographical information.",
      ],
    },
    "tomas-velez": {
      role: "Geoeconomics editor",
      specialty: "Geoeconomics and international finance",
      summary: "Tracks value chains, financial flows, and currency competition across the international board.",
      affiliations: [
        "Geoeconomics Desk",
        "Geo Scope",
      ],
      expertise: [
        "Global geoeconomics",
        "Financial markets",
        "Trade",
        "Currencies",
      ],
      education: "International economics, political finance, and systemic-risk analysis.",
      biography: [
        "Tomas Velez examines the interaction between trade, debt, liquidity, and geoeconomic rivalry. At Geo Scope he follows the evolution of the dollar system, monetary diversification strategies, and shocks affecting the international financial architecture.",
        "His editorial work aims to connect market readings with the logic of state power, explaining how rates, bonds, logistics chains, and industrial policy belong to the same strategic competition.",
      ],
    },
    "clara-ibanez": {
      role: "Technology and power analyst",
      specialty: "Strategic technology, AI, and regulatory competition",
      summary: "Works on digital standards, artificial intelligence, and state power within the platform economy.",
      affiliations: [
        "Technology and Power Lab",
        "Geo Scope",
      ],
      expertise: [
        "Technology and geopolitics",
        "Artificial intelligence",
        "Semiconductors",
        "Digital regulation",
      ],
      education: "Technology policy, digital governance, and comparative innovation analysis.",
      biography: [
        "Clara Ibanez covers technological competition among major powers, with special attention to semiconductors, artificial intelligence, digital infrastructure, and regulation. Her central interest is how technology becomes both an instrument of state capacity and a lever of international projection.",
        "At Geo Scope she develops analytical frameworks to understand the relationship between innovation, economic security, and global governance, comparing the United States, China, Europe, and industrial Asia.",
      ],
    },
    "adrian-rivas": {
      role: "Senior international security researcher",
      specialty: "International security, defense, and deterrence",
      summary: "Analyzes security architecture, military industry, and strategic rivalry among major powers.",
      affiliations: [
        "International Security Program",
        "Geo Scope",
      ],
      expertise: [
        "Defense and security",
        "Deterrence",
        "Russia and Eurasia",
        "Alliances",
      ],
      education: "Security studies, comparative defense, and contemporary military strategy.",
      biography: [
        "Adrian Rivas follows the transformation of the global security architecture, from alliance competition to deterrence dynamics, military doctrines, and the defense industrial base. At Geo Scope he contributes a strategic reading of conflicts, capabilities, and balances of power.",
        "His work emphasizes Eurasia, European security, and institutional adaptation in a more fragmented, militarized, and technologically demanding international environment.",
      ],
    },
    "lucia-ferrer": {
      role: "Regions and diplomacy editor",
      specialty: "Comparative diplomacy and regional analysis",
      summary: "Coordinates regional coverage and analyzes diplomatic positioning, mediation, and strategic autonomy.",
      affiliations: [
        "Regions and Diplomacy Desk",
        "Geo Scope",
      ],
      expertise: [
        "Diplomacy",
        "Latin America",
        "Middle East",
        "Strategic autonomy",
      ],
      education: "Foreign policy, multilateral diplomacy, and comparative regional studies.",
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
      description: "Cross-cutting reads on the forces linking major powers, global liquidity, trade, technology, and the architecture of power at a worldwide scale.",
      tags: [
        "dollar",
        "liquidity",
        "flows",
        "international system",
      ],
    },
    brics: {
      name: "BRICS",
      strap: "Flexible coordination, industrial weight, and parallel architecture.",
      description: "Tracking the political, financial, and technological evolution of the BRICS space and its impact on the global institutional balance.",
      tags: [
        "currencies",
        "standards",
        "Global South",
        "finance",
      ],
    },
    "america-latina": {
      name: "Latin America",
      strap: "Resources, autonomy-oriented diplomacy, and strategic positioning.",
      description: "Reads on Latin America's place in the race for value chains, energy, critical minerals, and medium-term alliances.",
      tags: [
        "nearshoring",
        "raw materials",
        "autonomy",
        "ports",
      ],
    },
    "rusia-eurasia": {
      name: "Russia and Eurasia",
      strap: "Corridors, extended security, and continental reorganization.",
      description: "Analysis of Russia and Eurasia's strategic projection on a board shaped by sanctions, logistics routes, and military-industrial competition.",
      tags: [
        "sanctions",
        "deterrence",
        "corridors",
        "energy",
      ],
    },
    "china-asia": {
      name: "China and Asia",
      strap: "Productive scale, technical standards, and competition for manufacturing.",
      description: "Tracking Asia's centrality in technology, trade, infrastructure, and the financial architecture of the twenty-first century.",
      tags: [
        "semiconductors",
        "connectivity",
        "manufacturing",
        "digital",
      ],
    },
    europa: {
      name: "Europe",
      strap: "Strategic autonomy, industry, and high-density regulatory security.",
      description: "Coverage of the tensión between openness, economic security, defense, and industrial reconstruction in the European agenda.",
      tags: [
        "energy",
        "regulation",
        "defense",
        "Arctic",
      ],
    },
    "medio-oriente": {
      name: "Middle East",
      strap: "Capital, energy, and new geographies of regional power.",
      description: "Analysis of energy, corridors, sovereign finance, and diplomatic reconfiguration in the Middle East.",
      tags: [
        "Gulf",
        "oil",
        "sovereign funds",
        "straits",
      ],
    },
    africa: {
      name: "Africa",
      strap: "Critical minerals, infrastructure, and bargaining power.",
      description: "Tracking Africa's role in the energy transition, new industrial chains, and the contest over connectivity and resources.",
      tags: [
        "copper",
        "lithium",
        "ports",
        "industrialization",
      ],
    },
    "estados-unidos-occidente": {
      name: "United States and the West",
      strap: "Technological power, alliances, and second-generation industrial policy.",
      description: "Reads on the redesign of Western power through subsidies, economic security, sanctions, and alliance rebuilding.",
      tags: [
        "chips",
        "alliances",
        "subsidies",
        "techno-politics",
      ],
    },
  },
  sectors: {
    "geoeconomia-global": {
      name: "Global geoeconomics",
      description: "Interaction among trade, debt, currencies, financial power, and international strategy.",
    },
    "mercados-financieros": {
      name: "Financial markets",
      description: "Liquidity, rates, bonds, equities, and mechanisms for absorbing global savings.",
    },
    "china-estados-unidos": {
      name: "China and the United States",
      description: "Structural competition across manufacturing, finance, technology, and state capacity.",
    },
    "geopolítica": {
      name: "Geopolitics",
      description: "Competition among powers, regional balance, and the reordering of power.",
    },
    "economia-internacional": {
      name: "International economics",
      description: "Financial flows, industrial policy, debt, currencies, and global architecture.",
    },
    "tecnologia-geopolitica": {
      name: "Technology and geopolitics",
      description: "Digital infrastructure, standards, chips, platforms, and state capacity.",
    },
    "energía": {
      name: "Energy",
      description: "Oil, gas, renewables, critical minerals, and security of supply.",
    },
    "comercio-cadenas-logisticas": {
      name: "Trade and supply chains",
      description: "Maritime routes, reshoring, nearshoring, and the reorganization of productive nodes.",
    },
    "defensa-seguridad": {
      name: "Defense and security",
      description: "Military capacity, deterrence, defense industry, and security architecture.",
    },
    diplomacia: {
      name: "Diplomacy",
      description: "Alignments, mediation, regional forums, and strategic relationship management.",
    },
    "infraestructura-estrategica": {
      name: "Strategic infrastructure",
      description: "Corridors, ports, telecommunications, and critical connectivity nodes.",
    },
    "inteligencia-artificial-poder-global": {
      name: "Artificial intelligence and global power",
      description: "AI as a vector of competitiveness, surveillance, productivity, and state projection.",
    },
    "multipolaridad-gobernanza-global": {
      name: "Multipolarity and global governance",
      description: "Institutions, flexible coalitions, and emerging rules of the international system.",
    },
  },
  articles: {
    "china-produce-estados-unidos-se-endeuda-y-wall-street-gana": {
      title: "China produces, the United States borrows, and Wall Street wins",
      subtitle: "The global economy runs on a paradox: imbalances in production, debt, and liquidity sustain part of the international financial order.",
      excerpt: "China exports surpluses, the United States absorbs global savings through debt, and Wall Street captures a meaningful share of international liquidity. The question is how long this model can hold.",
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
      subtitle: "The United States and China are competing for the Moon, but the real objective is to control the next strategic infrastructure of space.",
      excerpt: "The Moon has returned to the center of international politics. The question is no longer only who arrives first, but who stays, builds infrastructure, secures strategic positions, and helps define the rules of the future space economy.",
      tags: [
        "Moon",
        "United States",
        "China",
        "Artemis",
        "space",
        "BRICS",
      ],
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
      subtitle: "Artificial intelligence is reshaping markets, but it is also testing the limits of financial confidence.",
      excerpt: "Artificial intelligence may be a real technological revolution and, at the same time, generate a partial market bubble. The question is not whether AI matters, but how much of current value already depends on excessively perfect expectations.",
      tags: [
        "AI",
        "markets",
        "Nvidia",
        "dot-com",
        "productivity",
        "BRICS",
      ],
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
      title: "Trump in Beijing: the rivalry no one can win, but everyone needs to manage",
      subtitle: "The visit showed that the relationship between the United States and China is no longer negotiated only by diplomats: CEOs, banks, technology firms, energy companies, industrial chains, and powers seeking to redefine the global order are also part of the conversation.",
      excerpt: "The visit to Beijing did not resolve the structural competition between Washington and China. It showed instead that the most important relationship in the international system needs management channels even while technology, trade, security, and global legitimacy remain contested.",
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
          callouts: [
            "China did not negotiate only with words. It negotiated with symbols.",
          ],
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
      subtitle: "Competition over standards, industrial platforms, and computing capacity is redefining the bloc's relative weight.",
      excerpt: "The BRICS debate no longer revolves only around currencies or institutional representation. The new question is who controls the technological nodes shaping the next phase of global power.",
      tags: [
        "BRICS",
        "AI",
        "standards",
        "industrial capacity",
      ],
      thesis: "Technological competition among powers has shifted away from bloc rhetoric toward the construction of concrete ecosystems: data centers, talent, advanced manufacturing, and technical norms.",
      whyItMatters: [
        "For the BRICS bloc, technological coordination acts as a multiplier of geopolitical weight even without a fully integrated architecture.",
        "Access to digital infrastructure, mature semiconductors, cloud services, and industrial value chains now defines a growing part of strategic autonomy.",
      ],
      regionalLens: "The central question is not whether the BRICS act as a closed alliance, but whether they can synchronize enough priorities to build scale, reduce dependence, and negotiate from a stronger position.",
      outlook: "In the short term we will see variable coalitions and partial agreements. In the medium term, the key will be whether the bloc can turn economic volume into durable institutional capacity.",
    },
    "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina": {
      title: "What global trade fragmentation means for Latin America",
      subtitle: "Nearshoring, friendshoring, and economic security open opportunities, but they also require industrial strategy and regional coordination.",
      excerpt: "Global trade fragmentation does not imply total deglobalization. It implies a more political geography of trade, where Latin America can gain relevance if it avoids a purely extractive insertion.",
      tags: [
        "nearshoring",
        "Latin America",
        "logistics",
        "industry",
      ],
      thesis: "Trade fragmentation does not mean the end of global exchange, but a reorganization based on resilience, political proximity, and risk control.",
      whyItMatters: [
        "For Latin America, the scenario opens room in manufacturing, agribusiness, minerals, and services, but only if there is public-private coordination capacity and logistics improvements.",
        "The region risks becoming a contingency supplier without capturing higher-value segments if it does not strengthen infrastructure, talent, and stable rules.",
      ],
      regionalLens: "Mexico, Brazil, Chile, Colombia, and the Southern Cone corridor face different opportunities. The common point is the need to turn a geopolitical moment into consistent economic policy.",
      outlook: "The next cycle will reward those offering regulatory predictability, competitive energy, and reliable logistics nodes. Geographic advantage alone is no longer enough.",
    },
    "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global": {
      title: "Russia and Eurasia in the reconfiguration of global power",
      subtitle: "Between sanctions, land corridors, and military-industrial capacity, Eurasia is once again occupying a structural place on the international board.",
      excerpt: "Eurasia can no longer be read only through the lens of conflict. It must also be analyzed as a logistical, energy, and political space undergoing reordering.",
      tags: [
        "Eurasia",
        "security",
        "sanctions",
        "corridors",
      ],
      thesis: "Eurasian centrality emerges from the convergence of geography, security, and connectivity. Even under pressure, the region continues to shape routes, energy, and diplomatic positions.",
      whyItMatters: [
        "Sanctions accelerated financial and logistical adjustments that altered trade flows, transport nodes, and tactical alliances.",
        "Military-industrial capacity and territorial depth remain decisive variables in any reading of European and Asian security.",
      ],
      regionalLens: "From the Caspian to the Arctic, the region combines operational vulnerabilities with geographic advantages that no outside actor can ignore.",
      outlook: "The next phase will depend less on communiques and more on productive resilience, the opening of alternative corridors, and the density of agreements with Asia, the Middle East, and the Global South.",
    },
    "energia-corredores-logisticos-y-competencia-geoeconomica": {
      title: "Energy, logistics corridors, and geoeconomic competition",
      subtitle: "Supply bottlenecks are no longer a technical matter: they are about power, financing, and anticipatory capacity.",
      excerpt: "Corridors, ports, straits, and energy terminals form a single strategic geography. Whoever reduces logistical friction gains political room.",
      tags: [
        "energy",
        "corridors",
        "geoeconomics",
        "ports",
      ],
      thesis: "Current geoeconomic competition is organized around concrete physical infrastructure: ports, electric grids, pipelines, cables, and logistics platforms.",
      whyItMatters: [
        "Actors able to combine financing, security, and operating capacity around those nodes gain influence far beyond their nominal weight.",
        "Energy remains the common language linking national security, industrial policy, and economic diplomacy.",
      ],
      regionalLens: "The Middle East remains central not only because of hydrocarbons, but because of its role as a hinge between Asia, Europe, and Africa.",
      outlook: "Future disputes will be measured less by aggregate trade volumes and more by control over bottlenecks, redundancies, and response time in crises.",
    },
    "la-inteligencia-artificial-como-herramienta-de-poder-estatal": {
      title: "Artificial intelligence as a tool of state power",
      subtitle: "The race for AI is not only a corporate competition. It is a struggle over administration, defense, productivity, and governing capacity.",
      excerpt: "AI is moving into the core of the state apparatus: intelligence, fiscal management, industry, defense, and public services. The point is not only to innovate, but to govern better and faster.",
      tags: [
        "AI",
        "state",
        "governance",
        "productivity",
      ],
      thesis: "The dominant narrative presents artificial intelligence as market disruption, when its deepest impact is actually being played out in state capacity.",
      whyItMatters: [
        "Those who integrate AI into bureaucracies, defense, financial supervisión, and strategic planning will raise institutional productivity and expand their external room for action.",
        "The future gap will not be only between leading and lagging firms, but between states capable of absorbing technology and states that merely consume it.",
      ],
      regionalLens: "The United States and its allies retain an advantage in capital, compute, and innovative ecosystems, but that advantage requires finer regulatory coordination and public deployment.",
      outlook: "The next major debate will be about interoperability, oversight, and doctrine. The geopolitically relevant AI is the one entering real systems, not the one dominating headlines.",
    },
    "tres-señales-que-están-redefiniendo-la-multipolaridad": {
      title: "Three signals redefining multipolarity",
      subtitle: "A brief reading of the moves showing where the architecture of global power may shift.",
      excerpt: "Multipolarity does not arrive all at once. It shows up in small financial, diplomatic, and technological adjustments that, combined, change the playing field.",
      tags: [
        "radar",
        "multipolarity",
        "BRICS",
        "governance",
      ],
      signals: [
        {
          title: "More agreements in local currencies",
          detail: "They do not replace the dollar in the short term, but they do widen room for maneuver in bilateral trade and selective financing.",
        },
        {
          title: "Parallel institutions gain density",
          detail: "Flexible forums, regional banks, and payment platforms are ceasing to be symbolic and are becoming mechanisms of concrete coordination.",
        },
        {
          title: "Sectoral diplomacy weighs more than grand blocs",
          detail: "Minerals, energy, connectivity, and artificial intelligence generate partial coalitions that reorder priorities faster than traditional ideological alignments.",
        },
      ],
      outlook: "Multipolarity advances when it becomes operational. The relevant question is which agreements produce capacity, not which speeches promise change.",
    },
    "por-que-el-ártico-importa-cada-vez-más": {
      title: "Why the Arctic matters more and more",
      subtitle: "New routes, resources, security, and climate are turning the far north into one of the most sensitive strategic frontiers.",
      excerpt: "The Arctic is becoming a zone of simultaneous competition in energy, trade, military affairs, and science. That overlap explains its growing relevance.",
      tags: [
        "Arctic",
        "routes",
        "energy",
        "security",
      ],
      thesis: "The Arctic concentrates a strategic rarity: it is at once a climate frontier, an energy reserve, a potential corridor, and a space of military competition.",
      whyItMatters: [
        "Changes in navigability, dual-use infrastructure, and resource extraction alter calculations of cost, time, and military presence.",
        "Europe, Russia, North América, and Asia look at the Arctic through different lenses, but all agree its relative importance is increasing.",
      ],
      regionalLens: "For Europe, the Arctic combines energy security, route protection, and the need to coordinate with allies without losing regulatory autonomy.",
      outlook: "This is not a new gold rush. It is a space forcing a rethink of infrastructure, deterrence, and governance before the pressure grows even more.",
    },
    "china-y-asia-estándares-digitales-y-rutas-industriales": {
      title: "China and Asia: digital standards and industrial routes",
      subtitle: "The region is consolidating a less visible but deeper advantage: defining how technology is produced, connected, and scaled.",
      excerpt: "Asia is no longer only the world's factory. It is also a laboratory of standards, industrial coordination, and digital infrastructure with global impact.",
      tags: [
        "Asia",
        "standards",
        "digital",
        "industry",
      ],
      thesis: "Asian influence is growing because it combines productive scale, financing, and the ability to define operating rules in strategic sectors.",
      whyItMatters: [
        "Whoever sets technical standards also sets entry costs, interoperability, and future dependency.",
        "The integration of manufacturing, logistics, and digital connectivity gives Asia a systemic depth that is hard to replicate elsewhere.",
      ],
      regionalLens: "China stands at the center of the board, but the regional ecosystem also depends on India, ASEAN, Korea, Japan, and multiple functional arrangements.",
      outlook: "The next battle over technology chains will not be only about brand leadership, but about the capacity to impose practical rules for production and adoption.",
    },
    "europa-seguridad-industrial-y-autonomía-estratégica": {
      title: "Europe: industrial security and strategic autonomy",
      subtitle: "The European agenda is trying to reconcile open markets, defense, energy, and productive reconstruction without losing political cohesion.",
      excerpt: "Europe faces a structural dilemma: it needs to become more resilient without ceasing to be open. That tensión is redesigning its economic policy and geopolitical language.",
      tags: [
        "Europe",
        "strategic autonomy",
        "industry",
        "regulation",
      ],
      thesis: "European strategic autonomy is not a sudden ideological turn. It is the accumulated response to energy shocks, technological pressure, and industrial vulnerability.",
      whyItMatters: [
        "Europe is redefining subsidies, competition rules, and economic security policies to reduce dependence in critical sectors.",
        "The challenge is to do so without fragmenting the internal market or weakening diplomatic capacity with key partners.",
      ],
      regionalLens: "The European discussion is less binary than it often appears: it is not about choosing autonomy over alliance, but about finding a sustainable combination of both.",
      outlook: "Success will depend on executing selective industrial policies with credible financing and coordinating regulation with a more geopolitical vision of the common market.",
    },
    "africa-minerales-críticos-manufactura-y-poder-negociador": {
      title: "Africa: critical minerals, manufacturing, and bargaining power",
      subtitle: "The continent is gaining centrality in the energy transition, but the real question is how much value capture it will be able to retain.",
      excerpt: "Africa has become indispensable for critical minerals, corridors, and future demand. The challenge is turning that centrality into indigenous industrial capacity.",
      tags: [
        "Africa",
        "critical minerals",
        "manufacturing",
        "bargaining",
      ],
      thesis: "Africa's new centrality is not explained only by resources. It is explained by the combination of minerals, urban markets, connectivity, and geographic position.",
      whyItMatters: [
        "The energy transition and the competition for batteries increase the strategic value of cobalt, copper, manganese, and rare earths.",
        "The real opportunity lies in turning extractive contracts into platforms for processing, skills formation, and shared infrastructure.",
      ],
      regionalLens: "African governments now negotiate with somewhat greater room because there is more competition among providers of financing, technology, and security.",
      outlook: "The inflection point will come if that external competition translates into national industrialization agendas backed by institutions capable of sustaining them.",
    },
    "estados-unidos-alianzas-y-política-industrial-de-segunda-ola": {
      title: "The United States, alliances, and second-wave industrial policy",
      subtitle: "Washington is trying to move from reaction to a more durable strategy based on industry, economic security, and coordination with allies.",
      excerpt: "U.S. industrial policy is no longer a parenthesis. It is becoming the economic grammar of a new phase of systemic competition.",
      tags: [
        "United States",
        "alliances",
        "industry",
        "economic security",
      ],
      thesis: "The new U.S. industrial policy seeks to rebuild domestic capacity while organizing productive alliances around critical sectors.",
      whyItMatters: [
        "The shift affects supply chains, investment incentives, trade rules, and room for maneuver for partners and competitors.",
        "Coordination with allies is no longer measured only in defense, but also in subsidies, minerals, chips, and the protection of sensitive technology.",
      ],
      regionalLens: "The West is moving toward a less naive model of interdependence. The question is whether it can coordinate priorities without multiplying internal frictions.",
      outlook: "The second industrial wave will be judged by tangible results: construction times, access to inputs, political stability, and the ability to generate full ecosystems.",
    },
    "diplomacia-de-media-potencia-en-america-latina": {
      title: "Middle-power diplomacy in Latin America",
      subtitle: "The region can gain influence if it combines selective ambition, institutional consistency, and a realistic reading of its environment.",
      excerpt: "In a more fragmented world, middle powers have an advantage: they can negotiate with flexibility. The disadvantage appears when that flexibility lacks strategy.",
      tags: [
        "Latin America",
        "diplomacy",
        "middle powers",
        "autonomy",
      ],
      thesis: "Latin American diplomacy can be more influential if it abandons the false choice between rhetorical neutrality and passive alignment.",
      whyItMatters: [
        "There is room to negotiate, but it requires clear national priorities, consistent technical teams, and an agenda of concrete interests.",
        "The region holds valuable assets in food, energy, minerals, and geographic position, yet it still communicates and coordinates them in fragmented ways.",
      ],
      regionalLens: "Brazil, Mexico, Chile, Colombia, and other middle actors do not need to speak identically to generate weight. They need to know where to cooperate and where to differentiate themselves.",
      outlook: "The next decade will reward countries capable of offering diplomatic reliability and strategic clarity, not only rhetoric of autonomy.",
    },
    "medio-oriente-finanzas-energia-y-el-orden-postpetrolero": {
      title: "Middle East: finance, energy, and the post-oil order",
      subtitle: "The region is using sovereign capital, infrastructure, and economic diplomacy to prepare a broader influence than oil alone can provide.",
      excerpt: "Speaking of a post-oil order does not mean oil is losing relevance. It means the region is trying to diversify its power before the market changes completely.",
      tags: [
        "Middle East",
        "sovereign funds",
        "energy",
        "logistics",
      ],
      thesis: "The major Gulf actors are transforming energy rents into financial capacity, connectivity, and diplomatic projection.",
      whyItMatters: [
        "This conversion of liquidity into strategic position changes investment routes, logistics chains, and alliances with Asia, Europe, and Africa.",
        "The region no longer competes only through energy production, but through control of infrastructure, services, and capital platforms.",
      ],
      regionalLens: "The Middle East moves both as a bridge between regions and as an actor with its own agenda. That duality raises its ability to arbitrate.",
      outlook: "Future influence will depend on how quickly diversification visions are translated into resilient productive sectors and advanced human capital.",
    },
    "infraestructura-corredores-y-poder-en-eurasia": {
      title: "Infrastructure, corridors, and power in Eurasia",
      subtitle: "Rail routes, dry ports, and new land connections are changing the strategic calculations of public and private actors.",
      excerpt: "Infrastructure is not neutral. In Eurasia, every corridor reorganizes costs, dependencies, and alliances with effects that go well beyond trade.",
      tags: [
        "Eurasia",
        "corridors",
        "infrastructure",
        "logistics",
      ],
      thesis: "Eurasian corridors are devices of power because they connect markets, financing, physical security, and diplomatic options.",
      whyItMatters: [
        "Every alternative route reduces vulnerability to sanctions, bottlenecks, or maritime crises.",
        "Companies also adjust their strategies when politics alters transit times, insurance, costs, and infrastructure availability.",
      ],
      regionalLens: "From the Caspian Sea to connections with China, India, and the Middle East, Eurasia combines competing projects and tactical complementarities.",
      outlook: "The big variable will be operational continuity. In volatile environments, the most valuable corridor is not the shortest one, but the most reliable.",
    },
    "radar-semanal-estrechos-estándares-y-alimentos": {
      title: "Weekly radar: straits, standards, and food",
      subtitle: "Four discreet moves that help read broader logistical and political tensions.",
      excerpt: "This week leaves signals connecting maritime security, technological regulation, and food supply. None of them stands alone.",
      tags: [
        "radar",
        "straits",
        "food",
        "regulation",
      ],
      signals: [
        {
          title: "More pressure on sensitive maritime routes",
          detail: "Diversions increase transit times, insurance costs, and fuel use, with a direct impact on final prices.",
        },
        {
          title: "New technical rules reshape market access",
          detail: "Standards on traceability and data already work as competitive filters in industrial and agro-food sectors.",
        },
        {
          title: "Food security returns to the center",
          detail: "Climate, financing, and logistics are tightly connected. Tensions on one front quickly spill over into the others.",
        },
        {
          title: "Africa gains bargaining room",
          detail: "The mix of ports, minerals, and domestic demand gives several African countries a more relevant voice in multilateral conversations.",
        },
      ],
      outlook: "This week's radar reinforces one idea: technical frictions often anticipate larger strategic shifts.",
    },
    "radar-semanal-ia-sanciones-y-monedas": {
      title: "Weekly radar: AI, sanctions, and currencies",
      subtitle: "Three brief signals for reading how technology, finance, and state capacity are coupling together.",
      excerpt: "In the short term, global transformations filter through apparently technical measures. Over the long term, those measures redefine hierarchies.",
      tags: [
        "radar",
        "AI",
        "sanctions",
        "currencies",
      ],
      signals: [
        {
          title: "AI enters sectoral regulation",
          detail: "The debate is no longer abstract. Governments are beginning to demand traceability, risk assessment, and concrete governance by sector.",
        },
        {
          title: "Sanctions generate redundancy systems",
          detail: "Payments, insurance, suppliers, and logistics networks adapt in order to survive in environments of greater political friction.",
        },
        {
          title: "Local currencies gain tactical use",
          detail: "They do not replace the dominant system, but they do open transactional and financing spaces that are less exposed to geopolitical volatility.",
        },
      ],
      outlook: "The common lesson is clear: technology and finance already operate as part of the same strategic board.",
    },
    "xi-y-putin-en-beijing-y-la-cooperacion-estrategica-global": {
      title: "Xi and Putin in Beijing: the strategic cooperation reshaping the global balance",
      subtitle: "After receiving Trump, China reaffirmed its coordination with Russia. The diplomatic sequence shows that Beijing is not choosing between Washington and Moscow: it negotiates with both to widen its room for maneuver.",
      excerpt: "Vladimir Putin's visit to Beijing confirmed that China wants to manage rivalry with the United States without abandoning its strategic partnership with Russia. That combination helps explain the new global balance.",
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
    "america-latina-y-la-crisis-organica": {
      title: "Latin America and the organic crisis: when the State can no longer manage social conflict",
      subtitle: "The region is not going through only a succession of political crises. In several countries, the problem is deeper: loss of institutional legitimacy, economic exhaustion, social fragmentation, and the absence of national projects capable of ordering the future.",
      excerpt: "Latin America is living through a period of persistent unease. Social protests, weak governments, electoral polarization, economic crises, insecurity, corruption, labor informality, and institutional distrust appear again and again across the region.",
      tags: [
        "Latin America",
        "organic crisis",
        "State",
        "governability",
        "corruption",
        "Brazil",
        "Bolivia",
        "Peru",
        "multipolarity",
      ],
      bodySections: [
        {
          paragraphs: [
            "Latin America is living through a period of persistent unease. Social protests, weak governments, electoral polarization, economic crises, insecurity, corruption, labor informality, and institutional distrust appear again and again in different countries across the region. At first glance, these problems seem like separate crises. But seen together, they reveal something deeper: an organic crisis.",
            "An organic crisis is not simply a crisis of government. It is a crisis of historical direction. It occurs when institutions can no longer channel social demands, when the economy stops offering expectations of mobility, when parties lose their capacity for representation, and when society stops believing that the political system can resolve its contradictions.",
            "In Latin America, this crisis does not unfold in the same way in every country. In Bolivia it appears as political fracture, disputes over legitimacy, and the exhaustion of a state model that for years managed social conflicts and governed through pacts, balances, and negotiations with different social groups. In Peru it appears as permanent institutional instability. In Ecuador, as a security crisis and the expansion of organized crime. In Argentina, as the breakdown of economic consensus and rejection of traditional elites. In Brazil, as structural polarization between opposing national projects. In Chile and Colombia, as difficulty turning social demands into lasting political pacts.",
            "The central thesis is clear: Latin America is not living only a crisis of governability. It is living a crisis of mediation between State, society, and future.",
          ],
        },
        {
          heading: "What is an organic crisis",
          paragraphs: [
            "The concept of organic crisis is associated with the thought of Antonio Gramsci. It describes a moment in which the old order loses legitimacy, but a new project capable of replacing it has not yet appeared. This is not a passing crisis or an administrative problem. It is a deeper rupture between the political, economic, and social structures that once gave stability to a country.",
            "In an organic crisis, governments may change, but the unease remains. Elections may produce alternation, but not necessarily a way out. Institutions continue to function formally, but they lose social authority. Parties compete for power, but they represent society less and less. The State keeps legality, but loses its capacity for arbitration.",
            "The classic phrase that summarizes this kind of crisis is that 'the old does not finish dying and the new does not finish being born.' In Latin America, that tension can be seen in the growing distance between citizens and institutions, in the fragmentation of party systems, and in the recurrent search for disruptive leaderships.",
            "The problem is not only that governments lose popularity. The problem is that societies stop believing that the system can resolve its contradictions.",
          ],
        },
        {
          heading: "Organic crisis: beyond left and right",
          paragraphs: [
            "An organic crisis is not the exclusive problem of a left-wing or right-wing government. It can appear under progressive, conservative, nationalist, liberal, or technocratic administrations. Its root lies not only in the ideological orientation of a government, but in the loss of the political system's capacity to organize social conflict, produce legitimacy, and offer a horizon for the future.",
            "In Latin America, this distinction is fundamental. Governments of opposite ideological signs have faced similar problems: institutional distrust, low reform capacity, social fragmentation, economic pressure, insecurity, informality, deterioration of public services, and the loss of expectations of social mobility. This shows that the problem is not solved simply by replacing one political force with another if the underlying structures remain intact.",
            "Electoral alternation can change a country's discourse, priorities, or international allies. But by itself it does not resolve an organic crisis. If the State does not recover management capacity, if the economy does not generate social mobility, if institutions do not channel demands, and if society does not perceive a project for the future, the crisis reappears in new forms.",
            "In this context, corruption acts as an accelerator of the crisis. It does not belong to a single ideology or a single party. It can grow in left, right, or center governments when oversight institutions are weak, justice is politicized, public administration is captured by private or partisan interests, and power is used to distribute benefits among elites instead of solving collective problems.",
            "Corruption aggravates almost every symptom of an organic crisis. It reduces trust in institutions, weakens public investment, deteriorates basic services, fuels anti-system discourses, facilitates the advance of organized crime, and turns politics into a struggle for access to state rents. When citizens perceive that the system protects its own actors before the public interest, democratic legitimacy erodes from within.",
            "That is why an organic crisis is not overcome simply by winning elections. It is overcome by rebuilding legitimacy, state capacity, political representation, institutional control, and a national project capable of connecting social expectations with concrete results.",
          ],
        },
        {
          heading: "Bolivia as a regional symptom",
          paragraphs: [
            "Bolivia is one of the cases in which the idea of an organic crisis helps explain the political moment more clearly. The country is not facing only an electoral dispute or a temporary economic crisis. It is facing a combination of political fracture, institutional exhaustion, social pressure, political controversies, and the loss of state capacity to order conflict.",
            "For years, the Bolivian political model rested on a combination of popular legitimacy, expansion of the State, redistribution of extractive rent, and negotiation with social, union, peasant, indigenous, and territorial organizations. That model allowed stability for an important period. But it also generated dependence on natural resources, political concentration, regional tensions, and difficulties in building institutions beyond personal leaderships or dominant party structures.",
            "Today, MAS no longer controls state power as it did for almost two decades. Yet its weakening has not automatically led to a new governability. Rodrigo Paz's government, after almost seven months in office, is facing a crisis marked by protests, blockades, social pressure, economic difficulties, political controversies, and the loss of support among sectors that initially backed his arrival in government.",
            "In this context, speaking of a simple 'resurgence of MAS' may be insufficient. What is emerging is something broader: the persistence of social, territorial, and political structures that no government has managed to fully reorganize. The old power bloc lost centrality, but the new government has not yet built a stable architecture of governability.",
            "Conflict is no longer processed only in Congress, parties, or elections. It is also expressed in streets, highways, regions, social organizations, indigenous sectors, guilds, and territorial structures.",
            "Bolivia shows a central feature of Latin America's organic crisis: when a political bloc stops organizing public life and the new government fails to build enough legitimacy, social conflict fragments and reappears in multiple forms.",
          ],
        },
        {
          heading: "Peru, Ecuador, and politics without a center",
          paragraphs: [
            "Peru represents an extreme form of institutional fragmentation. Presidential instability, weak parties, low trust in Congress, and the difficulty of building stable majorities show a political system that functions formally but fails to produce direction. There are elections, institutions, and formal legality. But there is no capacity for leadership.",
            "The presidential runoff confirmed that crisis of representation. The election between Keiko Fujimori and Roberto Sánchez ended in a scenario of virtual technical tie, with an extremely narrow count and a result that remained open. With around 94.9% of the votes counted, Sánchez held a minimal lead of 50.10% against 49.90%, while overseas voting - traditionally more favorable to the right - could still alter the final result. A difference of only a few thousand votes and the complexity of the count reflect the depth of Peru's political division.",
            "Beyond who wins, the election shows a politically divided society. Fujimori represents a demand for order, security, and conservative continuity, marked by the historical weight of Fujimorism. Sánchez channels a demand for change from rural, popular, and informal sectors, with political links to Pedro Castillo's space. The polarization cannot be explained only by ideology: it expresses a fracture between Lima and the regions, between security and reform, between institutional continuity and rejection of the traditional political system.",
            "The fact that the next president will be the country's ninth in a decade confirms that Peru's problem is not merely electoral. The problem is that the political system can no longer stabilize authority or produce minimum agreements of governability. In an organic crisis, the political center weakens. Parties stop organizing conflict and become temporary electoral vehicles. Citizens vote, but do not necessarily feel represented. Governments take office, but do not consolidate authority. Politics becomes the administration of survival.",
            "Ecuador shows another dimension: the security crisis. The expansion of organized crime, violence, and territorial disputes reveal that the State no longer faces only governability problems, but challenges to its internal sovereignty. When criminal organizations control routes, prisons, neighborhoods, or illegal economies, the crisis stops being only political. It becomes territorial.",
            "Peru and Ecuador show that the organic crisis can be expressed in two different ways: as institutional blockage or as the loss of state control over security.",
          ],
        },
        {
          heading: "Argentina: adjustment, inflation, and the breakdown of social consensus",
          paragraphs: [
            "Argentina represents another variant of the organic crisis: the exhaustion of an economic model and the breakdown of trust between society, the State, and political elites.",
            "Persistent inflation, indebtedness, falling purchasing power, frustration with the traditional political class, and rejection of previous consensuses opened space for rupture leaderships. In that context, society is not only seeking a change of government. It is seeking a rupture with a way of doing politics that it perceives as incapable of solving accumulated problems.",
            "The Argentine experience shows that an organic crisis can produce a demand for order, shock, or radical transformation. When the traditional system loses credibility, society can accept exits that previously seemed politically unviable.",
            "The key point is not whether those exits will be successful or not. The point is that their emergence reveals the level of exhaustion of the previous pact.",
          ],
        },
        {
          heading: "Brazil: polarization, governability, and the dispute over the regional course",
          paragraphs: [
            "Brazil represents one of the clearest expressions of structural political polarization in Latin America. The dispute between the progressive camp linked to Lula da Silva and the conservative bloc associated with Bolsonarism is not only an electoral competition. It is a deeper fracture over the model of State, economic policy, the relationship with China and the United States, the environmental agenda, public security, the role of the Armed Forces, and the country's international position.",
            "Brazil does not express an organic crisis because of the absence of the State. It expresses a partial or latent organic crisis because of blocked consensuses. The country retains institutions, a diversified economy, diplomatic capacity, and regional weight. But polarization turns every election into a dispute between national projects that are difficult to reconcile.",
            "The 2026 presidential election reflects that division. Different polls showed a close competition between Lula and Flávio Bolsonaro, with moments of technical tie and scenarios in which Lula regained the lead in a possible runoff. This confirms that Brazil remains organized around two major and highly polarized political camps.",
            "This scenario confirms that Brazil is not living only a dispute between government and opposition. It is living a competition between two social, cultural, and geopolitical coalitions. One part of the country bets on an active State, South-South integration, an environmental agenda, and a more autonomous foreign policy. Another part prioritizes security, cultural conservatism, economic liberalism, alignment with the United States, and rejection of the traditional political system.",
            "Polarization also affects the ability to govern. Even when a president wins, he faces a fragmented Congress, regional pressures, the power of governors, the influence of agribusiness, judicial tensions, and a highly divided public opinion. In that context, electoral alternation does not automatically resolve the crisis of representation. It can even deepen it if each election is interpreted as an existential battle between incompatible models.",
            "Brazil matters because its internal crisis has a regional impact. If it manages to build governability, it can act as a Latin American articulator within BRICS, CELAC, Mercosur, and the global climate agenda. If it remains trapped in permanent polarization, Latin America loses one of its main centers of coordination.",
            "Can Brazil transform its polarization into stable democratic competition, or will the dispute between projects of country continue blocking its capacity for regional leadership?",
          ],
        },
        {
          heading: "Colombia and Chile: difficult reforms and alternation without stable consensus",
          paragraphs: [
            "Colombia and Chile show that the organic crisis does not affect only countries with weak institutions. It also appears in societies with more consolidated state structures, but crossed by demands for change that the political system cannot process easily.",
            "Chile experienced a strong demand for social and institutional transformation. After a cycle of right-wing government, the country shifted to the left with Gabriel Boric, but later tilted back to the right with José Antonio Kast. This turn reflects concerns over security, migration, and exhaustion with the progressive cycle, but also a deeper difficulty in building long-term consensuses.",
            "The Chilean case matters because it shows a crisis of consensus, not necessarily a crisis of collapse. Society may agree that something must change, but it does not necessarily agree on what should replace it. The constitutional process showed that difficulty: there was demand for reform, but no solid agreement on the new political pact.",
            "Colombia faces a similar tension. The country is heading toward a presidential runoff between left-wing senator Iván Cepeda and right-wing lawyer Abelardo de la Espriella, after no candidate obtained a sufficient majority in the first round. The campaign is marked by polarization, security, anti-incumbent voting, and an intense dispute over the direction after the progressive cycle.",
            "De la Espriella's candidacy reflects a broader regional trend: hard-right outsiders, a discourse of order, criticism of traditional elites, and promises of drastic measures against crime. Cepeda, by contrast, seeks to preserve a left-wing space in a context of weariness with the outgoing government.",
            "Chile and Colombia show that the organic crisis does not always produce collapse. Sometimes it produces a blocked transition: everyone recognizes the need for change, but no project manages to order the whole. Electoral alternation exists, but it does not necessarily generate a long-term consensus.",
          ],
        },
        {
          heading: "The economy of discontent",
          paragraphs: [
            "The organic crisis has a material basis. Latin America has spent years trapped in a pattern of low growth, high informality, persistent inequality, low productivity, and dependence on raw materials.",
            "ECLAC has warned that the region is going through a prolonged period of low growth. Its estimates point to an expansion close to 2.4% in 2025 and around 2.3% in 2026, a trajectory insufficient to absorb social demands, create formal employment, and sustain expectations of mobility.",
            "This point is crucial. A democracy can withstand tensions if it offers expectations of social mobility. But when growth is low, employment is precarious, wages are insufficient, public services deteriorate, and young people see no future, institutional legitimacy weakens.",
            "The region grows, but it does not transform. It exports raw materials, but imports technology. It produces food, but coexists with poverty. It has elections, but not always effective representation. It has natural resources, but not always the state capacity to turn them into development.",
            "Latin American discontent does not arise only from political discourses. It comes from the distance between promises of inclusion and insufficient material outcomes.",
          ],
        },
        {
          heading: "Weak institutions and eroded trust",
          paragraphs: [
            "The organic crisis is also fueled by the loss of trust. When citizens stop trusting parties, congresses, courts, police, media, and governments, the system loses its capacity for mediation.",
            "This paradox is central: many citizens still value democracy as an ideal, but distrust the concrete institutions that should make it work. They want rights, participation, and stability, but do not believe that parties, parliaments, or courts can guarantee them.",
            "When that gap widens, two risks appear. The first is apathy: citizens withdraw from politics because they expect no results. The second is rupture: citizens look for solutions outside the system, even if those solutions weaken democratic checks and balances.",
            "The organic crisis occurs precisely when formal democracy still exists, but its capacity to produce legitimacy deteriorates.",
          ],
        },
        {
          heading: "Security, crime, and the fragmented State",
          paragraphs: [
            "The expansion of organized crime is one of the most serious signs of an organic crisis. When the State does not guarantee security, employment, justice, or basic services, other actors occupy the vacuum.",
            "This is visible in parts of Mexico, Ecuador, Central America, Colombia, Brazil, and Haiti. Organized crime is no longer only a policing problem. In many cases it functions as a territorial power, an economic actor, an informal provider of order, and a competitor to the State.",
            "Security ceases to be a sectoral agenda and becomes a dispute over internal sovereignty. A State may have a flag, a Constitution, and elections, but if it does not control prisons, borders, ports, neighborhoods, or logistical routes, its real authority becomes limited.",
            "The organic crisis deepens when citizens perceive that the State is incapable of protecting them. In that context, demands for hardline policies, militarization, or exceptional solutions can grow.",
            "The problem is that security without legitimacy may produce temporary order, but it does not necessarily rebuild the State.",
          ],
        },
        {
          heading: "The geopolitics of the Latin American crisis",
          paragraphs: [
            "The Latin American organic crisis unfolds in an increasingly competitive world. The United States, China, Russia, Europe, and BRICS view the region as a space of natural resources, food, critical minerals, energy, markets, infrastructure, ports, data, and diplomatic positions.",
            "Latin America has lithium, copper, fresh water, biodiversity, gas, oil, food, and renewable potential. But a fragmented region negotiates from a weaker position. Without a common strategy, countries can be pressured by different centers of power and end up competing with one another for investment, financing, access to markets, or political backing.",
            "Geopolitical competition for influence in Latin America is not the main cause of the region's organic crisis, but it can deepen its effects. Internal fractures arise from domestic problems - weak institutions, corruption, low growth, insecurity, informality, and lack of representation - but external powers can operate on those vulnerabilities through financing, diplomatic pressure, trade agreements, strategic investments, technology, military cooperation, or control over key resources.",
            "This happens in different ways. One power may offer infrastructure financing; another may condition access to markets; another may apply pressure through sanctions, military cooperation, or technology; another may position itself as an energy partner, buyer of raw materials, or provider of security. For countries with low state capacity, high polarization, and urgent economic needs, these offers can expand options, but they can also generate new dependencies.",
            "The dispute over the region is not expressed only through military bases or formal alliances. It also appears in ports, 5G networks, lithium, copper, food, gas, oil, logistical corridors, trade agreements, financing, digital platforms, artificial intelligence, satellites, and votes in international organizations.",
            "In a context of rivalry between the United States and China, trade fragmentation, energy transition, and competition for critical minerals, Latin America could gain room for maneuver. But to do so it needs state capacity, regional integration, and strategic vision.",
            "Without its own project, multipolarity does not produce autonomy. It only multiplies pressures.",
          ],
        },
        {
          heading: "Corruption as symptom and accelerator",
          paragraphs: [
            "Corruption is not a phenomenon separate from the organic crisis. It is one of its symptoms and, at the same time, one of its accelerators.",
            "When corruption becomes normalized, citizens stop seeing the State as an instrument of the common good and begin to see it as spoils. Politics is interpreted as access to privileges, offices, contracts, judicial protection, or public rents. That perception destroys legitimacy.",
            "Corruption also weakens state capacity. It reduces the quality of public investment, raises the cost of projects, deteriorates services, facilitates criminal networks, and diminishes the trust of citizens and investors. In contexts of low growth, each corruption case has a greater political effect because it confirms the perception that social sacrifices are not shared by elites.",
            "For that reason, fighting corruption is not only a moral agenda. It is a condition for rebuilding the State.",
            "But the fight against corruption can also be instrumentalized. In several countries, anti-corruption discourse is used to destroy opponents, judicialize politics, or justify authoritarian projects. A real solution requires independent oversight institutions, credible justice, public transparency, and professionalized administration.",
          ],
        },
        {
          heading: "What way out does an organic crisis have?",
          paragraphs: [
            "An organic crisis is not resolved only through elections. Elections are necessary, but not sufficient. They can renew authorities, but they do not automatically rebuild legitimacy, state capacity, or a national project.",
            "The way out requires a new pact. Not necessarily a formal pact signed by all actors, but a new way of organizing expectations, resources, institutions, and priorities.",
            "Latin America needs to rebuild state capacity. That means better public services, reliable justice, territorial security, professional administration, efficient public investment, and a real state presence in peripheral regions.",
            "It also needs a productive strategy. Without growth, formal employment, selective industrialization, technological integration, and social mobility, democracy loses its material foundation.",
            "The region also needs new forms of representation. Parties must reconnect with informal workers, young people, regions, indigenous peoples, indebted middle classes, productive business sectors, and urban popular sectors. Without representation, conflict shifts to the streets, violence, or anti-system rejection.",
            "Finally, Latin America needs to think geopolitically. It cannot face the organic crisis as if it lived in a stable world. Competition over energy, technology, food, critical minerals, and supply chains requires both national and regional strategy.",
          ],
        },
        {
          heading: "Possible scenarios",
          subsections: [
            {
              heading: "1. Democratic reorganization",
              paragraphs: [
                "Countries manage to rebuild institutional legitimacy through reforms, social pacts, improved public services, effective anti-corruption efforts, and long-term productive strategies.",
              ],
            },
            {
              heading: "2. Alternation without transformation",
              paragraphs: [
                "Left-wing and right-wing governments alternate in power, but none manages to modify the structures of low growth, informality, insecurity, and distrust. The crisis reappears under new discourses.",
              ],
            },
            {
              heading: "3. Authoritarian or hardline exits",
              paragraphs: [
                "Social frustration opens space for leaderships that promise quick order, lower crime, and rupture with elites. They may offer temporary stability, but at the cost of democratic checks.",
              ],
            },
            {
              heading: "4. Territorial fragmentation of the State",
              paragraphs: [
                "Organized crime, clientelist networks, illegal economies, or regional powers occupy spaces where the State does not reach. Internal sovereignty becomes uneven.",
              ],
            },
            {
              heading: "5. Multipolarity without strategy",
              paragraphs: [
                "Latin America receives offers from China, the United States, Europe, Russia, and BRICS, but without regional coordination or a project of its own. The region gains options, but also new dependencies.",
              ],
            },
            {
              heading: "6. A new productive and regional pact",
              paragraphs: [
                "Some countries manage to turn natural resources, energy, food, and critical minerals into industrial development, regional integration, and strategic autonomy.",
              ],
            },
          ],
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Latin America is not going through only a succession of political crises. It is living an organic crisis. The problem is not only the weakness of a government, the unpopularity of a president, or the polarization of an election. The problem is deeper: institutions lose legitimacy, the economy does not generate enough mobility, parties do not represent, corruption erodes trust, and the State fails to manage social conflict.",
            "This crisis does not belong to the left or the right. It cuts across governments of different signs because its causes are structural. Changing governments can alter the course, but it is not enough if state capacities, oversight institutions, security, formal employment, and a horizon of future are not rebuilt.",
            "Bolivia, Peru, Ecuador, Argentina, Brazil, Chile, and Colombia show different symptoms of the same regional crisis: the difficulty of rebuilding governability, turning social demands into sustainable national projects, and sustaining legitimacy beyond electoral alternation.",
            "Protest appears when institutions do not channel demands. Hardline politics appears when the State does not protect. Disruptive leadership appears when traditional elites lose credibility. Polarization appears when societies no longer share even a minimal horizon for the future.",
            "Organic crisis does not mean inevitable collapse. It means transition. But every transition has one central question: who will be capable of building the new consensus?",
            "Latin America has resources, population, energy, food, critical minerals, and geopolitical position. But those assets do not automatically become power. Without State, without institutions, without a productive strategy, and without regional integration, the region can remain a territory of dispute between powers.",
            "The way out will not be nostalgic or purely ideological. It will be institutional, productive, social, and geopolitical. Latin America needs a new pact capable of rebuilding legitimacy and turning resources into future.",
          ],
        },
        {
          heading: "Open questions",
          bullets: [
            "Can Latin America emerge from the organic crisis without building a new model of development?",
            "Are disruptive leaderships a solution or a symptom of institutional exhaustion?",
            "Can the region recover state capacity without falling into authoritarianism?",
            "Can regional integration be a way out, or will national fragmentation continue blocking any common project?",
            "Will Latin America become a strategic actor in the new world order, or will it remain a territory disputed by major powers?",
          ],
        },
      ],
    },
    "foro-de-seguridad-multipolar-en-moscu": {
      title: "Multipolar Security Forum in Moscow: the majority world facing a changing global agenda",
      subtitle: "The International Security Forum installed an alternative agenda on stability, sovereignty, and multipolar order, with the majority world as its central interlocutor.",
      excerpt: "The forum held in the Moscow region consolidated Russia as an articulator of an alternative conversation on international security, with the majority world at the center of the debate.",
      tags: [
        "Moscow",
        "Russia",
        "Putin",
        "international security",
        "majority world",
        "BRICS",
        "cybersecurity",
        "artificial intelligence",
      ],
      bodySections: [
        {
          paragraphs: [
            "The First International Security Forum held in the Moscow region was more than a technical meeting on global threats. It was a political demonstration. Russia sought to show that it retains convening capacity, that Western isolation does not amount to global isolation, and that there is a space of countries interested in discussing international security from a perspective different from that of Washington, Brussels, or NATO.",
            "The forum took place between May 26 and May 29, 2026, and one of its central moments was the 14th international meeting of high representatives responsible for security affairs, held on May 28. In that context, Vladimir Putin addressed the participants, emphasizing the importance of international cooperation in the face of common threats and the need to strengthen regional and global stability.",
            "The forum's agenda was broad. It did not stop at military defense or terrorism. It included international security, regional stability, cooperation against transnational threats, cybersecurity, artificial intelligence, critical technologies, water, energy, food, infrastructure, traditional values, neocolonialism, reform of global governance, and the role of the so-called majority world.",
            "The central thesis is clear: Russia has installed international security as a platform of multipolar legitimacy. This is not only about talking about threats. It is about disputing who has the right to define them, which actors participate in that definition, and under what rules global security will be organized.",
          ],
        },
        {
          heading: "Putin's message: interdependent security and global cooperation",
          paragraphs: [
            "Vladimir Putin addressed the participants of the International Security Forum on May 28, 2026. The gesture served a political function: to place the forum within a broader agenda of international cooperation, regional stability, and global security.",
            "The central idea of the message is that security can no longer be understood in isolation. A regional crisis, a terrorist threat, a technological escalation, a rupture in supply chains, or a food crisis can affect the entire international system. Contemporary security is interdependent.",
            "That framing allows Russia to shift the conversation. The international discussion on security is no longer reduced to Ukraine, sanctions, or confrontation with the West; it broadens toward transnational threats: terrorism, extremism, organized crime, drug trafficking, nuclear proliferation, cybercrime, information security, media manipulation, and the vulnerability of critical infrastructure.",
            "Security, in this reading, is not only military. It is also technological, informational, biological, food-related, water-related, cultural, energy-related, and civilizational.",
          ],
        },
        {
          heading: "From technical meeting to strategic platform",
          paragraphs: [
            "The International Security Forum was designed as a broad platform. The 14th meeting of high representatives was not an isolated event, but part of a larger framework that combined official meetings, political debates, thematic conferences, and discussions on new threats.",
            "That difference matters. A technical meeting exchanges diagnoses. An international forum seeks to build language, networks, agenda, and legitimacy.",
            "This space functions as a platform where non-Western actors can debate security issues without necessarily going through institutions dominated by the United States or Europe. This does not mean that Russia is creating a complete alternative to the UN, the OSCE, or the Euro-Atlantic architecture. But it does consolidate parallel spaces of strategic conversation.",
            "International security is no longer discussed only in Western forums. Moscow acts as host, moderator, and central actor of an alternative conversation.",
          ],
        },
        {
          heading: "The Russian narrative: security versus hegemony",
          paragraphs: [
            "The Russian narrative on international security is organized around one central opposition: hegemony versus multipolarity.",
            "From Moscow's reading, the order led by the West is based on the expansion of military alliances, sanctions, political pressure, information control, selective intervention, and the instrumental use of international norms. Against that, Russia seeks to present an alternative vision based on sovereignty, non-interference, balance of power, indivisible security, and respect for diverse civilizational models.",
            "This narrative is not primarily aimed at convincing Washington or Brussels. It is aimed at countries in Asia, Africa, the Middle East, and Latin America that have historical experiences of colonialism, dependency, financial pressure, or external intervention.",
            "Russian language seeks to connect contemporary security with broader problems: neocolonialism, cultural sovereignty, information control, defense of traditional values, manipulation of narratives, and historical memory.",
            "Security, in this reading, is not only a problem of weapons. It is a dispute over the very meaning of international order.",
          ],
        },
        {
          heading: "The majority world and collective responsibility for security",
          paragraphs: [
            "One of the forum's most important concepts was the idea of collective responsibility for world security. The meeting was presented as a space where the countries of the majority world recognized the inevitability of changes in international relations and expressed a willingness to participate in shaping that new environment on equal terms.",
            "This idea is central to understanding Russian strategy. Multipolar security appears here as a shared demand from emerging countries claiming greater participation in global governance, not only as a specifically Russian national agenda.",
            "The presence of representatives from Russia, China, India, South Africa, Brazil, Kazakhstan, Vietnam, and other actors made it possible to project a broader narrative: the international system can no longer be managed by a small group of Western powers. Economic, demographic, technological, and political power is shifting, and that change should also be reflected in the rules of security.",
            "This point allows the forum to be read as something more than a security meeting. It is a proposal for order: collective security, not security at the expense of others; multipolarity, not unipolar hierarchy; cooperation between platforms such as BRICS and the Shanghai Cooperation Organization, not exclusive dependence on Western institutions.",
          ],
          callouts: [
            "Can the majority world build a common security agenda without turning into a new rigid bloc structure?",
          ],
        },
        {
          heading: "BRICS, the majority world, and multipolar security",
          paragraphs: [
            "The forum showed that the discussion on multipolar security is not limited to Russia. The 14th international meeting of high representatives responsible for security affairs brought together representatives from Russia, China, India, South Africa, Brazil, Kazakhstan, and Vietnam, who discussed the formation of a multipolar world, the strengthening of trust among states, and the elaboration of common rules for new technologies.",
            "This allows the forum to be read as a platform of the so-called majority world. It was not merely a Russian critique of the Western order, but a space where different actors presented their own priorities on sovereignty, security, technology, development, and reform of international governance.",
            "Russia presented an agenda of coordination among the countries of the Global South and the East. Sergei Shoigu proposed strengthening the UN's central role, supporting the group of friends in defense of the UN Charter, avoiding the provocation of contradictions among the countries of the Global South and the East, advancing the Greater Eurasian Partnership, building a collective security architecture in Eurasia, and working on resource reserves, including agricultural products, fertilizers, and hydrocarbons. He also called for not strengthening one's own security at the expense of the security of other states, and for deepening coordination in BRICS, the Shanghai Cooperation Organization, and other majority-world formats.",
            "China, through Chen Wenqing, linked the forum to Xi Jinping's global initiatives on development, security, civilization, and governance. The Chinese position defended multilateralism, respect for international law, the five principles of peaceful coexistence, and the idea of a shared future for humanity. In that framework, Beijing seeks to present security as a process of adaptation to an international architecture in transformation, where traditional and non-traditional threats must be confronted through cooperation rather than closed blocs.",
            "India, represented by Ajit Doval, placed the emphasis on UN reform, the fight against terrorism, and the need to recognize the new weight of emerging economies. Its message was that power is no longer concentrated in a small group of countries and that the Global South demands equal participation in the management of world affairs. This position is relevant because India does not want a unipolar order, but neither does it want a multipolarity dominated by a single alternative center. Its bet is on a more representative architecture in which emerging powers have a real voice.",
            "South Africa linked security to sovereignty, artificial intelligence, cybersecurity, energy, and African integration. Khumbudzo Ntshavheni argued that the formation of a multipolar world opens new opportunities for Global South countries, but that those opportunities must be translated into concrete capabilities: modernization of security, development of artificial intelligence, strengthening of cybersecurity, energy security, and expansion of economic ties through the African Continental Free Trade Area. This reading connects security with development, infrastructure, and African regional capacity.",
            "The importance of the African component is that these concerns appeared with an unusual centrality in forums dominated by Western agendas. In this space, African countries could present their own concerns about energy security, connectivity, cybersecurity, industrialization, regional integration, food, and infrastructure not as secondary themes, but as part of the global architecture of stability. That difference matters: in many traditional forums, Africa is usually treated as an object of assistance or a scene of crisis; here it appears as an actor that defines priorities and claims its own capacities.",
            "Brazil, through Celso Amorim, introduced a key idea: multipolarity must not become a simple division of the world into spheres of influence. His approach points to a multipolarity based on the right of sovereign states to diversify their alliances, defend their national interests, and participate in processes of sustainable development. This position is especially important for Latin America because it avoids presenting multipolarity as automatic alignment with one bloc against another.",
            "Kazakhstan presented a modern security agenda that combines interstate relations, the economy, the natural environment, and the digital environment. Its proposal to create an international water security organization under UN auspices shows that fresh water is entering the center of strategic security. It also defended universal norms of responsible behavior in cyberspace and warned that artificial intelligence is moving from being an auxiliary tool to becoming an active subject within contemporary systems of decision and security.",
            "Malaysia added a technological dimension to the debate by warning that the world appears to be moving toward a division of high technologies, especially in artificial intelligence. Its proposal for a common platform among BRICS countries to facilitate cooperation in AI connects directly with the discussion on technological sovereignty, digital fragmentation, and closed technological systems. In this approach, security no longer depends only on defense or diplomacy, but on the ability to cooperate in critical technologies before the world becomes divided into incompatible ecosystems.",
            "This diversity of positions shows that the forum was not only a Russian platform of denunciation against the West. It was also a space where the countries of the majority world tried to place their own priorities: UN reform, collective security, AI, cybersecurity, water, energy, regional integration, technological cooperation, and multipolarity without rigid spheres of influence.",
            "The potential exists, but it will depend on the ability to turn declarations into projects, institutions, norms, and practical cooperation.",
          ],
          callouts: [
            "Can the majority world build a common security agenda without reproducing new hierarchies among emerging powers?",
          ],
        },
        {
          heading: "Artificial intelligence and security: the new field of vulnerability",
          paragraphs: [
            "One of the most important axes of contemporary security is artificial intelligence. AI is no longer only an economic or technological tool. It is an infrastructure of power.",
            "AI can strengthen defense, border surveillance, threat detection, data analysis, cybersecurity, and crisis management. But it can also amplify risks: information manipulation, automation of cyberattacks, mass facial recognition, predictive surveillance, automated disinformation, falsification of images and videos, and the creation of artificial narratives at scale.",
            "Kazakhstan's warning about AI as an active subject reflects an important conceptual shift: artificial intelligence is no longer understood only as auxiliary software, but as a factor capable of influencing decisions, critical systems, cybersecurity, defense, the economy, and governance.",
            "For Russia, China, the United States, Europe, and the Global South, AI is already part of the national security architecture. Whoever controls data, models, computing centers, the cloud, and analytical systems will have an advantage not only in economic terms, but also in military and informational terms.",
            "Twenty-first-century security will depend as much on missiles and armies as on algorithms, satellites, data, and digital platforms.",
          ],
          callouts: [
            "Can national security exist without sovereignty over data, digital infrastructure, and artificial intelligence?",
          ],
        },
        {
          heading: "Fake news, manipulation, and cognitive warfare",
          paragraphs: [
            "The discussion on information security is central in the Russian narrative. Moscow considers that contemporary wars are not fought only on the military field, but also in the minds of societies.",
            "Fake news, deepfakes, coordinated social media campaigns, emotional manipulation, the use of algorithms to amplify narratives, and media interference form part of what can be described as cognitive warfare.",
            "From this perspective, national security includes the capacity to protect the population against psychological operations, social destabilization, electoral manipulation, induced polarization, and the loss of trust in institutions.",
            "This approach is not exclusive to Russia. The United States, the European Union, China, and other actors are also developing policies to confront disinformation, digital manipulation, and the risks of generative AI.",
            "The problem is that the struggle against disinformation can become a dilemma: to protect the information space without falling into censorship, excessive control, or the criminalization of public debate.",
          ],
          callouts: [
            "Where does defense against manipulation end, and where does political control of information begin?",
          ],
        },
        {
          heading: "Starlink, OneWeb, and the dispute over satellite systems",
          paragraphs: [
            "The forum also makes it possible to observe a key issue: the security of satellite systems.",
            "In recent years, platforms such as Starlink and OneWeb have shown that low-Earth-orbit satellite constellations can be decisive in communications, warfare, intelligence, civil connectivity, and emergency operations. But they also pose risks for states.",
            "Satellite connectivity is no longer only civil infrastructure. It is a strategic tool. It can maintain communications during conflicts, support military operations, transmit information, connect isolated territories, and at the same time challenge the ability of states to control their information space.",
            "The dispute over satellite connectivity will be one of the most important frontiers of global security.",
          ],
          callouts: [
            "Who should control the satellite infrastructure that sustains critical communications: states, private companies, or international consortia?",
          ],
        },
        {
          heading: "Europe: militarization, migration, and crisis of legitimacy",
          paragraphs: [
            "From the Russian narrative, Europe is going through a strategic transformation. The militarization of the continent, the increase in defense spending, the expansion of NATO, migratory pressure, and the crisis of social cohesion are presented as signs of a model under tension.",
            "Moscow interprets European militarization as strategic subordination to the United States and as part of an architecture of confrontation with Russia. At the same time, it tends to present European migration policy as an internal contradiction: Europe promotes universal values, but faces difficulties integrating migrants, controlling borders, and sustaining social consensus.",
            "This approach can be debatable from the West, but it has analytical value because it shows how Russia is trying to dispute the narrative about Europe. For Moscow, the European problem is not only military. It is civilizational, demographic, social, and identitarian.",
            "European security, in this framework, is not measured only by tanks, missiles, or military budgets. It is also measured by internal cohesion, political legitimacy, migration management, cultural identity, and strategic autonomy.",
          ],
          callouts: [
            "Is Europe building greater security, or increasing its strategic dependence and internal fractures?",
          ],
        },
        {
          heading: "Propaganda, traditional values, and spiritual dispute",
          paragraphs: [
            "The Russian security agenda includes a cultural dimension. Moscow insists that the security of states also depends on the protection of traditional values, historical memory, national identity, and cultural sovereignty.",
            "This language is part of a broader dispute. Russia presents the West as a promoter of cultural models that it considers alien, individualistic, or uprooted, while trying to position itself as a defender of traditional values, family, religion, historical continuity, and civilizational plurality.",
            "This point must be understood as a battle for legitimacy. Russia is not only discussing military power. It is discussing who defines what is correct, modern, acceptable, and universal.",
            "For some countries of the Global South, the discourse on traditional values may resonate as a defense against Western cultural homogenization. For others, it may be seen as a political tool to justify internal control.",
          ],
          callouts: [
            "Is the defense of traditional values a form of cultural sovereignty or a tool of political control?",
          ],
        },
        {
          heading: "Fresh water, food, and biotechnology: the material security of the twenty-first century",
          paragraphs: [
            "International security is also changing because material threats are multiplying.",
            "Access to sources of fresh water, food, fertilizers, seeds, biotechnology, food supplements, agricultural chains, and public health will become increasingly important. Climate crises, population growth, wars, sanctions, trade restrictions, and health risks can turn these sectors into fields of strategic dispute.",
            "Kazakhstan's proposal to create an international water security organization under the auspices of the UN confirms that fresh water is ceasing to be a secondary environmental issue and is becoming a matter of strategic security. Its approach includes monitoring transboundary basins, water-saving technologies, and the peaceful resolution of water disputes.",
            "Biotechnology, in particular, has a dual dimension. It can improve health, food production, vaccines, agriculture, epidemiological prevention, and climate adaptation. But it also poses risks: genetic manipulation, misuse of pathogens, dependence on external biological inputs, and vulnerabilities in health chains.",
            "Drones add another layer of complexity. They can be used for agricultural monitoring, disaster response, health surveillance, or the delivery of supplies. But they can also become vectors of risk if they are used to transport dangerous substances, contaminate infrastructure, or generate social panic. This risk must be addressed through biosafety, regulation, and prevention.",
            "Food, water, and biological security are no longer a secondary agenda. They are part of the core of national security.",
          ],
          callouts: [
            "Are states prepared for an era in which threats may come from viruses, data, drones, water, or seeds as much as from conventional armies?",
          ],
        },
        {
          heading: "The Global South as the main audience",
          paragraphs: [
            "The forum is not designed primarily for the West. It is designed for the rest of the world.",
            "The forum speaks to actors who do not want to be trapped between rigid blocs, who want to diversify relations, or who distrust an international order defined exclusively by Western powers.",
            "Asia, Africa, the Middle East, and Latin America are key audiences. For those spaces, Russia seeks to project three messages.",
            "First, that it remains a relevant power.",
            "Second, that it can offer cooperation in security, defense, intelligence, energy, food security, cybersecurity, and the fight against transnational threats.",
            "Third, that multipolarity can open room for maneuver in the face of structures dominated by the West.",
            "The challenge is that many Global South countries do not want to replace one dependency with another. They do not necessarily seek to align with Moscow. They seek options.",
          ],
        },
        {
          heading: "Implications for Latin America",
          paragraphs: [
            "Latin America must observe this kind of forum with pragmatism.",
            "The region does not need to adopt the Russian narrative or align automatically with Moscow. But neither can it ignore that global security is becoming more plural. The United States, China, Russia, Europe, and regional actors compete to define which threats matter and which responses are legitimate.",
            "For Latin America, this has concrete implications: cybersecurity, transnational crime, drug trafficking, artificial intelligence, critical infrastructure, energy, defense, sanctions, information, media, migration, water, food, and military cooperation.",
            "If the region does not define its own priorities, other actors will define them for it.",
            "The strategic question is whether Latin America can build an autonomous security policy capable of engaging with different centers of power without becoming subordinated to their agendas.",
          ],
        },
        {
          heading: "Possible scenarios",
          subsections: [
            {
              heading: "1. Consolidation of alternative security forums",
              paragraphs: [
                "Russia manages to sustain events such as the International Security Forum as recurring platforms for non-Western countries. These spaces do not replace existing global institutions, but they offer parallel channels of strategic dialogue.",
              ],
            },
            {
              heading: "2. Fragmented multipolar security",
              paragraphs: [
                "Parallel security spaces emerge: NATO and the European Union on one side; Russia, China, the SCO, BRICS, and other formats on the other; and Global South countries moving between both without total alignment.",
              ],
            },
            {
              heading: "3. Global South security diplomacy",
              paragraphs: [
                "Asia, Africa, the Middle East, and Latin America participate in multiple platforms to maximize autonomy. They do not accept a single security agenda, but negotiate case by case according to national interests.",
              ],
            },
            {
              heading: "4. Cybersecurity, AI, and satellites as new fields of dispute",
              paragraphs: [
                "The security agenda shifts toward data, artificial intelligence, digital platforms, satellite systems, cognitive warfare, critical infrastructure, and control of narratives. Security forums cease to be only military.",
              ],
            },
            {
              heading: "5. Biological, food, and water security as a strategic priority",
              paragraphs: [
                "Fresh water, food, biotechnology, fertilizers, public health, and biosafety become central fields of competition and cooperation. States seek to protect vital chains against climate crises, conflicts, sanctions, and hybrid threats.",
              ],
            },
            {
              heading: "6. Russia as an articulator with limits",
              paragraphs: [
                "Moscow retains convening power and a multipolar narrative, but faces economic constraints, sanctions, Western pressure, and growing dependence on partners such as China.",
              ],
            },
          ],
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "The International Security Forum in Moscow was more than a meeting of experts or officials. It was the consolidation of Russia as an organizing actor in the global debate on security.",
            "Putin's message, the agenda of the Russian Security Council, and the 14th meeting of high representatives show a clear strategy: Russia has installed a multipolar security agenda that disputes the very definition of international security.",
            "For Russia, security can no longer be defined solely by the West. It must include sovereignty, non-interference, regional stability, information security, protection against manipulation, traditional values, the struggle against neocolonialism, cooperation against transnational threats, and control over critical infrastructure.",
            "But the forum also showed something broader: multipolar security is not an exclusively Russian agenda. China, India, South Africa, Brazil, Kazakhstan, Malaysia, and other actors of the majority world placed on the table their own priorities: UN reform, multilateralism, counterterrorism, AI, cybersecurity, water, energy, regional integration, new technologies, and multipolarity without rigid spheres of influence.",
            "The question is not whether Moscow can replace the Western security architecture. It cannot do so alone. The issue is that Russia has already installed a dynamic of alternative dialogue and, if it maintains institutional continuity, participation by the majority world, and links to concrete issues such as AI, water, food, energy, and cybersecurity, it has the conditions to sustain it over time as a platform of negotiation, diversification, and autonomy for the Global South.",
          ],
        },
        {
          heading: "Open questions",
          bullets: [
            "Is Russia building an alternative security architecture or a platform of resistance against the West?",
            "Can the Global South benefit from these forums without becoming trapped in great-power rivalries?",
            "Will multipolar security increase the autonomy of emerging countries or multiply the pressures on them?",
            "Can Latin America define its own strategic threats without importing external agendas?",
            "Will twenty-first-century security be decided more on the military field or through control of information, data, biotechnology, and critical infrastructure?",
          ],
        },
      ],
    },
    "rusia-asean-unidad-diversidad-kazan": {
      title: "Russia-ASEAN countries: unity in diversity - 35 years together",
      subtitle: "The Russia-ASEAN Summit in Kazan showed how multipolarity seeks to translate itself into concrete cooperation on energy, food security, logistics, technology, and strategic action.",
      excerpt: "Representatives of Russia and ASEAN countries met in Kazan to deepen a multidimensional relationship based on energy cooperation, food security, logistics, technology, and a Comprehensive Plan of Action for 2026-2030.",
      tags: [
        "Russia",
        "ASEAN",
        "Kazan",
        "Multipolarity",
        "Energy",
        "Food security",
        "Eurasia",
        "Asia-Pacific",
      ],
      bodySections: [
        {
          paragraphs: [
            "The shared desire to build a fairer multipolar world, based on international law, the Charter of the United Nations, and mutually beneficial cooperation founded on mutual respect, brought together in Kazan representatives of Russia and ASEAN countries. However, the importance of the summit lay not only in its diplomatic language, but also in its practical translation: energy, food security, logistics, technology, and a Comprehensive Plan of Action to deepen the strategic partnership between Russia and ASEAN.",
            "In an act of sovereignty and autonomy, the countries of the Association of Southeast Asian Nations, ASEAN, made clear their decision to deepen their multidimensional relationship with Russia, and this is reflected in the Kazan Declaration and fundamentally in its “Comprehensive Plan of Action for the implementation of the strategic partnership between the Russian Federation and the Association of Southeast Asian Nations (2026-2030) with the objective of promoting and expanding multifaceted and mutually beneficial cooperation.”",
            "It is important to underline what Kao Kim Hourn, Secretary-General of ASEAN, said during the ASEAN-Russia Business Forum, when he stressed that today:",
            "“Economic resilience is no longer defined solely by growth rates. It is shaped by energy security, food resilience, supply chain reliability, technological capability, and the ability to absorb turbulence and disruption, especially in an increasingly complex and dynamic global economy.”",
            "In the Secretary-General's words, “As ASEAN's energy demand continues to rise, ensuring reliable, affordable, accessible, and diversified supply remains a strategic imperative. Russia's extensive experience in energy production, infrastructure development, and industrial energy solutions, together with the Eurasian Economic Union, positions it well to support regional initiatives such as the ASEAN Power Grid, which is estimated to require approximately USD 764 billion in investment. ASEAN welcomes greater engagement with Russian companies in LNG and gas infrastructure, renewable energy, power generation technologies, and grid modernization.”",
            "Regarding food security, he stated that it “has become an economic, social, and strategic priority, not merely an agricultural one. Reliable access to staple products, fertilizers, processing capacity, and efficient logistics are increasingly important for long-term resilience.”",
            "In this sense, the ASEAN Secretary-General made clear that “Russia's strengths in agricultural production, fertilizer supply, agricultural technology, and logistics align well with ASEAN's growing agro-industrial and food-processing sectors.”",
            "This summit once again underscores the fact that Russia is not isolated, and that the governmental leaders of those countries, along with their educational, cultural, and business institutions, understand the importance of their relationship with Russia as one of mutual benefit.",
            "It is noteworthy that the countries confirmed their willingness to promote relations of friendship, mutual trust, and respect, as well as a shared vision of a peaceful, stable, and secure future for a wider region that includes the Asia-Pacific, the Indian Ocean, and Eurasia.",
            "For his part, Philippine President Ferdinand Marcos, as co-chair of the Russia-ASEAN summit together with Russian President Vladimir Putin, stated that “We need to increase cooperation in the field of peace and security so that our joint efforts contribute to peace and security and respond in a timely manner to all threats.”",
            "During the main summit event on June 18, several documents were signed: the Kazan Declaration; the Comprehensive Plan of Action for 2026-2030; and the joint declaration on energy.",
            "Relations between Russia and ASEAN date back to 1991, and in 2018, during the Singapore summit, the parties elevated their ties to the level of a strategic partnership. This shows the solidity and stability of this relationship in a “context of increasingly complex global challenges arising from geopolitical and geoeconomic changes.”",
            "While, in France, at the G7 summit, its leaders were beating the drums of war, on the other hand the Russia-ASEAN Summit shows us that it is necessary to speak of cooperation and diplomacy in order to overcome problems together and achieve better days for the citizens of these countries.",
          ],
        },
        {
          heading: "Open questions",
          paragraphs: [
            "Is multipolarity really being built through political declarations, or through infrastructure, energy, food, and technology?",
            "Can ASEAN maintain its strategic autonomy amid simultaneous competition from the United States, China, Russia, Japan, and India?",
            "Will the ASEAN power grid become a new architecture of regional power?",
            "What can Latin America learn from a region that seeks to diversify partners without becoming trapped in a bloc logic?",
          ],
        },
        {
          heading: "Sources",
          paragraphs: [
            "1. Kazan Declaration 2026<br>https://asean.org/wp-content/uploads/2026/06/Kazan-Declaration-2026.pdf<br>http://kremlin.ru/supplement/6516",
            "2. ASEAN — Association of Southeast Asian Nations. ASEAN was established in 1967 and is made up of 11 countries: Brunei, Cambodia, the Philippines, Indonesia, Laos, Malaysia, Myanmar, Singapore, Thailand, and Viet Nam.<br>https://asean.org/",
            "3. Secretary-General of ASEAN delivers opening remarks at the ASEAN-Russia Business Forum 2026 in Kazan<br>https://asean.org/secretary-general-of-asean-delivers-opening-remarks-at-the-asean-russia-business-forum-2026-in-kazan/",
            "4. Russia-ASEAN<br>https://www.russia-asean.com",
            "5. Comprehensive Plan of Action to Implement ASEAN-Russian Federation Strategic Partnership 2026-2030<br>https://asean.org/comprehensive-plan-of-action-to-implement-asean-russian-federation-strategic-partnership-2026-2030/",
            "6. Kremlin<br>http://kremlin.ru/events/president/news/80057",
          ],
        },
      ],
    },
    "el-mundo-multipolar-el-paradigma-que-avanza-y-se-fortalece-con-el-brics": {
      title: "THE MULTIPOLAR WORLD: THE PARADIGM THAT ADVANCES AND STRENGTHENS WITH BRICS",
      subtitle: "BRICS is consolidating an alternative framework of cooperation, sovereignty, and global governance for an expanding multipolar world.",
      excerpt: "Two decades later, BRICS is no longer only an emerging acronym: it is an architecture of cooperation that promotes national currencies, technological sovereignty, food security, energy, and new spaces for decision-making in the Global South.",
      tags: [
        "BRICS",
        "Multipolarity",
        "Global South",
        "New Delhi",
        "Sovereignty",
        "Technology",
        "Energy",
      ],
      bodySections: [
        {
          paragraphs: [
            "Twenty years ago, the world did not imagine it would undergo so many transformations. The most hopeful change, one that opens tangible and serious prospects for humanity, is the existence, permanence, deepening, and expansion of BRICS.",
            "Two decades have passed and the countries that make up BRICS now trade in their own currencies, and their transactions are no longer under the absolute tutelage of the dollar. Countries are actively using mutual payments in national currencies, and some exceed 80 percent because they understood that, in order to be sovereign, they must escape the scrutiny of their transactions, which until recently were under the absolute surveillance of the United States.",
            "Russia and China have amply demonstrated their capacity for resilience in circumstances where the power that was dominant until recently acts with absolute violence, because it is mortally wounded and that makes it more dangerous.",
            "It is true, nevertheless, that the risks of sanctions and secondary sanctions (illegal, outside the UN framework) exist, but BRICS and its allies have shown that they can change those rules of the game. It can be said firmly that the world that until recently was subjected to the dollar now has new alternatives.",
            "But an even more hopeful and real result within BRICS is that the social, business, university, institutional, and governmental fabric is deepening day by day.",
            "The BRICS summit in New Delhi, its declaration, and the various interventions by its leaders go beyond discourse: these 20 years of the alliance's existence have amply shown its capacity to lead, shape, and propose a new paradigm to the world. The New Delhi Declaration and, especially, the speeches of the leaders have been clear in this regard.",
            "The host of the BRICS summit, Narendra Modi, knows that the momentum achieved by the alliance must continue its path and referred to the current pyramid of global governance decision-making, where the Global South, located at the base of the pyramid, does not make decisions, but is deeply affected by them and, even worse, cannot influence those decisions. He proposed generating, as BRICS, a road map to transform this pyramid, where human development is at the center of every effort, for a more inclusive and prosperous world.",
            "That more inclusive and prosperous world is not only the task of BRICS; it is everyone's task.",
            "The challenges posed by the BRICS leaders imply, from every sphere, deepening relations of mutual respect and expanding cooperation networks to face challenges and problems that have no borders. That will only be achieved with greater involvement by government leaders and civil society as a whole in the countries of the Global South.",
            "If we want to live in a world where everyone fits and can have a dignified life, it is absolutely essential to overcome the reductionism of the warmongering, energy-hungry globalist model, which through its social networks empties the minds of millions through mechanisms of algorithmic manipulation.",
            "It is worth recalling here the book The Technological Republic: Hard Power, Soft Belief, and the future of the West, by Aleksandr C. Karp and Nicholas Zamiska. Karp, who is CEO of Palantir Technologies, bets that “his republic”, that is, the United States, will achieve the triumph of its objectives through the use of software and artificial intelligence in war. Incidentally, Palantir currently provides those elements for destruction not only in Palestine, but also of leaders in other countries.",
            "The misuse of artificial intelligence and, in general, of digital technology is no longer only a threat, but a raw reality; for that reason, it cannot be underestimated. BRICS recognizes the benefits of digital technology to improve people's quality of life and improve countries' governance; nevertheless, it warns about the dangers and, for that purpose, has created an institute for the study of future networks, while specialists discussed the topic at the BRICS digital forum.",
            "Another crucial current issue in the world is health. While the agonizing power and its followers occupy themselves with making wars and designing programs to dominate the world, the group of BRICS leaders is concerned with health issues that affect millions beyond the borders of their alliance and that must be solved. Such is the case of tuberculosis. This is not a minor issue, because it affects health, the economy of affected people, and public health in general.",
            "Two key issues among the 140 points of the New Delhi declaration are those related to food security and energy security. To that end, BRICS created the mechanisms to guarantee them and continues to improve cooperation. This is even more important in the current situation, when the agonizing power attacks militarily, kills, threatens, extorts, and kidnaps in order to seize resources.",
            "It is also worth underlining here one of the outstanding events of the summit held in New Delhi from September 11 to 13, 2026, namely the ovation received by Russian President Vladimir Putin when he entered the BRICS business forum.",
            "The applause and emotion of those present can be described as recognition of Russia's courage and sovereignty as a whole. Russia never left the spaces of international dialogue, but there were serious attempts to cancel and humiliate it. That stage has ended. Russia, together with the BRICS+ countries and their allies, is the beacon that can and must lead toward that paradigm called the multipolar world.",
          ],
        },
      ],
    },
  },
};
