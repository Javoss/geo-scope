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
    analysis: "Analitika",
    opinion: "Mnenie",
    radar: "Ezhenedelnyy radar",
  },
  pageCopy: {
    analysis: {
      eyebrow: "Redaktsionnyy arkhiv",
      title: "Analitika s kontekstom, masshtabom i strategicheskim suzhdeniem.",
      description: "Izuchayte polnyy arkhiv Geo Scope s filtrami po regionam, sektoram i formatam, chtoby videt ne tolko zagolovki, no i povtoryayushchiesya uzory.",
    },
    opinion: {
      eyebrow: "Tochka zreniya",
      title: "Strategicheskoe mnenie s sobstvennym golosom.",
      description: "Kolonki i argumenty dlya chteniya mezhdunarodnoy sistemy cherez interesy, vozmozhnosti i posledstviya.",
    },
    radar: {
      eyebrow: "Ezhenedelnoe nablyudenie",
      title: "Globalnyy radar dlya poiska signalov do togo, kak slozhitsya konsensus.",
      description: "Kratkie materialy o dvizheniyakh, kotorye predvoshchayut geopoliticheskie, geoekonomicheskie i tekhnologicheskie sdvigi.",
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
    newsletterNote: "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
    rightsReserved: "Vse prava zashchishcheny.",
    editorialPanel: "Redaktsionnaya panel",
  },
  home: {
    heroLead: "Strategicheskaya analitika",
    heroSubtitle: "Geopolitika, tekhnologii, ekonomika, energetika i mezhdunarodnaya torgovlya v yasnoy, strogo vyderzhannoy i dolgoy perspektive.",
    heroText: "Platforma dlya chteniya mezhdunarodnoy sistemy s kontekstom, suzhdeniem i strategicheskim fokusom.",
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
    weeklyPriorityFallback: "Kratkie dvizheniya s nakopitelnym vliyaniem na likvidnost, torgovlyu i strategicheskuyu konkurentsiyu.",
    openWeeklyRadar: "Otkryt radar nedeli",
    frontpage: {
      eyebrow: "Pervaya polosa",
      title: "Odin glavniy material i tri linii konteksta.",
      text: "Начните с главного материала, а затем прочитайте тексты, которые дают ему контекст.",
    },
    latest: {
      eyebrow: "Poslednyaya analitika",
      title: "Nedavnie materialy so strategicheskoy plotnostyu.",
      text: "Glubokaya analitika dlya otslezhivaniya sdvigov vo vlasti, tsepochkakh stoimosti i tekhnologicheskoy konkurentsii.",
      action: "Smotret arkhiv",
    },
    radar: {
      eyebrow: "Globalnyy radar",
      title: "Kratkie signaly so strategicheskim effektom.",
      text: "Ezhenedelnoe nablyudenie za tonkimi sdvigami s geopoliticheskimi i geoekonomicheskimi posledstviyami.",
      action: "Smotret ezhenedelnyy radar",
      quickRead: "Bystroe chtenie",
      open: "Otkryt radar",
    },
    sectors: {
      eyebrow: "Temy / Sektory",
      title: "Redaktsionnaya struktura, organizovannaya po vozmozhnostyam i napryazheniyam.",
      text: "Sektory, sozdannye dlya otslezhivaniya peresecheniya tekhnologiy, ekonomiki, energetiki, diplomatii i gosudarstvennoy vlasti.",
      action: "Smotret sektory",
    },
    regionsSection: {
      eyebrow: "Regiony",
      title: "Regionalnoe pokrytie so sravnitelnym podkhodom.",
      text: "U kazhdogo regiona est sobstvennaya pervaya stranitsa, vedushchiy material, poslednie teksty i klyuchevye metki dlya interpretatsii ego dvizheniy.",
      action: "Izuchit regiony",
    },
    newsletter: {
      title: "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
      description: "Kuriruemaya rassylka po geopolitike, mezhdunarodnoy ekonomike, tekhnologiyam, energetike i globalnoy perestroike bez lishnego shuma.",
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
    noResultsText: "Poprobuyte drugoy region, drugoy sektor ili bolee shirokiy poiskovyy zapros.",
    resetFilters: "Sbrosit filtry",
    fullView: "Polnyy vid redaktsionnogo arkhiva.",
    searchLabel: "poisk",
    lockedFormatLabel: "Format",
  },
  radarPage: {
    demoDeliveries: "demo-vypuskov ezhenedelnogo radara dlya redaktsionnogo monitoringa.",
    keySignals: "klyuchevykh signalov v kazhdom vypuske dlya bystrogo i poleznogo chteniya.",
    openReading: "Otkryt material",
  },
  regionsPage: {
    eyebrow: "Regionalnaya karta",
    title: "Regiony so svoimi pervymi stranitsami i strategicheskim fokusom.",
    text: "Perekhodite po BRICS, Latinskoy Amerike, Rossii i Evrazii, Kitayu i Azii, Evrope, Blizhnemu Vostoku, Afrike i SSHA i Zapadu.",
    mapped: "regionov, vystroennykh dlya sravnitelnogo chteniya.",
    covers: "Pervye stranitsy",
    coversText: "kazhdyy region sochetaet opisanie, vedushchiy material, arkhiv i metki.",
    region: "Region",
    regionArticles: "demo-statey, svyazannykh s regionom.",
    keySectors: "klyuchevykh sektorov, svyazannykh s etim pokrytiem.",
    strategicDescription: "Strategicheskoe opisanie",
    latestEyebrow: "Poslednie stati",
    latestTitle: (regionName) => `Nedavnie materialy o ${regionName}.`,
    latestText: "Podborka tekstov dlya otslezhivaniya trendov, riskov i vozmozhnostey v etom regione.",
  },
  sectorsPage: {
    eyebrow: "Sektory",
    title: "Redaktsionnye kategorii s skvoznym vzglyadom.",
    text: "Organizuyte arkhiv po geoekonomike, tekhnologiyam, energetike, bezopasnosti, diplomatii i infrastrukture, chtoby sledit za siloy tam, gde ona deystvitelno rabotaet.",
    curated: "kuriruemykh sektorov dlya platformy formata magazine + think tank.",
    filterLabel: "Regionalnyy filtr",
    filterText: "kazhdaya kategoriya pozvolyaet chitat peresechenie temy i geografii.",
    filterByRegion: "Filter po regionu",
    apply: "Primenit",
    applyFilter: "Primenit filtr",
    clear: "Sbrosit",
    sector: "Sektor",
    sectorArticles: "statey, svyazannykh s tekushchim filtrom.",
    connectedRegions: "regionov, svyazannykh s etoy kategoriyey.",
    viewAll: "Pokazat vse",
    noArticlesTitle: "Dlya etoy kombinatsii net statey.",
    noArticlesText: "Poprobuyte drugoy region ili vernites k polnomu vidu sektora.",
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
    newsletterDescription: "Podpisyvaytes, chtoby poluchat analitiku, mneniya i ezhenedelnyy radar v yasnom redaktsionnom ritme.",
    relatedEyebrow: "Svyazannoe",
    relatedTitle: "Prodolzhayte chtenie v ramkakh toy zhe povestki.",
    relatedText: "Materialy, svyazannye regionom, sektorom ili redaktsionnym formatom.",
    fallbackAuthorName: "Redaktsionnaya komanda",
    fallbackAuthorRole: "Geo Scope",
    fallbackRegionName: "Globalnoe pokrytie",
    fallbackRegionDescription: "Analitika, svyazannaya so skvoznymi tendentsiyami mezhdunarodnoy sistemy.",
    readArticle: "Chitat statyu",
    openSector: "Otkryt sektor",
  },
  aboutPage: {
    eyebrow: "O Geo Scope",
    title: "Redaktsionnyy proekt dlya interpretatsii globalnykh peremen s glubinoy, strategicheskim suzhdeniem i yasnostyu.",
    text: "Geo Scope сочетает дисциплину независимого аналитического центра с ясностью редакционного издания: анализ с опорой на источники, исторический контекст и долгосрочное стратегическое видение.",
    mission: "Missiya",
    vision: "Videnie",
    approach: "Podkhod",
    approachTitle: "Nezavisimyy think tank i platforma analitiki.",
    approachText: "Geo Scope stremitsya obyasnyat mir analitichnym, sderzhannym i professionalnym golosom, izbegaya sensatsionnosti i logiki novostnogo portala bystrogo tsikla.",
    manifestoEyebrow: "Redaktsionnyy manifest",
    manifestoTitle: "Zachem sushchestvuet Geo Scope.",
    manifestoText: "Izdatelskiy proekt dlya bolee glubokogo ponimaniya vlasti, a ne dlya usileniya shuma.",
    manifestoPoint: (index) => `Punkt 0${index + 1}`,
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Sotrudnichestvo, institutsionalnye zaprosy i redaktsionnye predlozheniya.",
    text: "Geo Scope zaduman kak platforma, kotoraya mozhet vyrasti v proekt s bolshim kolichestvom avtorov, kategoriy i vozmozhnymi premium-urovnyami. Eto prostranstvo sluzhit nachalnoy tochkoy kontakta.",
    information: "Informatsiya i sotrudnichestvo",
    approach: "Podkhod",
    approachText: "Strategicheskaya analitika, spetsializirovannoe mnenie i mezhdunarodnyy monitoring s vysokoy yasnostyu.",
    channels: "Kanaly",
    headline: "Davaite pogovorim.",
    body: "Napishite nam po voprosam obshchey informatsii, sotrudnichestva, sindikatsii kontenta, institutsionalnykh partnerstv ili budushchego razvitiya platformy.",
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
    title: "Poluchayte strategicheskuyu analitiku i klyuchevye teksty o novom mirovom poryadke.",
    text: "Podpiska dlya chitateley, kotorym nuzhny yasnost, glubina i mezhdunarodnyy vzglyad na geopolitiku, ekonomiku, tekhnologii, energetiku i torgovlyu.",
    format: "Format",
    formatText: "Analitika, mnenie i ezhenedelnyy radar.",
    value: "Tsennost",
    valueText: "Menshe shuma, bolshe strategicheskogo suzhdeniya i luchshaya arkhitektura chteniya.",
    panelTitle: "Redaktsionnaya podpiska",
    panelDescription: "Vyberite tematicheskie interesy i soberite chtenie, luchshe sootvetstvuyushchee vashey povestke.",
  },
  expertsPage: {
    eyebrow: "Eksperty",
    title: "Osnovnoy ekspert i redaktsionnoe videnie Geo Scope.",
    text: "Poznakomtes s Khavierom Salazarom Segalesom, generalnym direktorom i osnovatelem Geo Scope, a takzhe s oblastyami, na kotorykh sosredotochena ego analitika.",
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
    text: "Eta stranitsa sluzhit promyuzhutochnym shagom k CMS: ona pozvolyaet podgotovit statyu, posmotret lokalnyy prevyu i sozdavat povtoryaemuyu bazovuyu strukturu.",
    today: "Segodnya",
    todayText: "Metadannye v data/content.js i modulnye stati v data/articles/.",
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
    draftSubtitle: "Chernovik dlya otsenki tona, vizualnoy ierarkhii i redaktsionnoy posledovatelnosti.",
    draftExcerpt: "Prostoy shablon dlya prevrashcheniya redaktsionnykh idey v novye materialy v arkhitekture Geo Scope.",
    snippetIntro: "Vstuplenie k state.",
    snippetHeading: "Pervyy razdel",
    snippetBody: "Osnovnaya razrabotka.",
  },
  notFound: {
    title: "Stranitsa, kotoruyu vy ishchete, nedostupna.",
    text: "Vernites na glavnuyu ili otkroyte redaktsionnyy arkhiv, chtoby prodolzhit znakomstvo s Geo Scope.",
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
    contactSaved: "Zapros sokhranen lokalno. Gotovo k podklyucheniyu backend.",
    newsletterSaved: "Podpiska sokhranena lokalno. Gotovo k integratsii s realnoy rassylkoy.",
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
};

export const content = {
  site: {
    tagline: "Strategicheskaya analitika po geopolitike, tekhnologiyam, ekonomike i novomu mirovomu poryadku.",
    description: "Redaktsionnaya platforma i tsifrovoy think tank dlya interpretatsii globalnykh izmeneniy s glubinoy, suzhdeniem i yasnostyu.",
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
    mission: "Interpretirivat globalnye izmeneniya s redaktsionnoy strogostyu, strategicheskim vzglyadom i yasnym yazykom.",
    vision: "Stat referentnoy platformoy dlya prinimayushchikh resheniya, analitikov, biznesa, akademicheskoy sredy i chitateley, kotorye khotyat ponyat globalnuyu perestroiku za predelami novostnogo tsikla.",
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
      specialty: "Spetsialist po geopolitike, diplomatii, BRICS, Latinskoy Amerike, AI & Technology, energetike i mezhdunarodnoy torgovle",
      summary: "Boliviyskiy mezhdunarodnyy analitik i osnovatel Geo Scope, s fokusom na geopolitiku, diplomatiyu, BRICS, tekhnologii i transformatsiyu globalnogo poryadka.",
      affiliations: [
        "Generalnaya direktsiya",
        "Osnovatel",
        "Geo Scope",
      ],
      expertise: [
        "Geopolitika",
        "Diplomatiya",
        "BRICS",
        "Latinskaya Amerika",
        "AI & Technology",
        "Energetika",
        "Mezhdunarodnaya torgovlya",
      ],
      languages: [
        "Ispanskiy",
        "Angliyskiy",
        "Russkiy",
        "Kitayskiy",
      ],
      education: "Podgotovka v oblasti informatiki, informatsionnykh tekhnologiy, mezhdunarodnogo biznesa i upravleniya biznesom, a takzhe opyt v diplomatii, mezhdunarodnom sotrudnichestve, prikladnom politicheskom analize i geopolitike.",
      biography: [
        "Khavier Dzhonatan Salazar Segales - boliviyskiy mezhdunarodnyy analitik i osnovatel Geo Scope, platformy, posvyashchennoy geopoliticheskomu analizu, strategicheskomu intellektu, BRICS, Latinskoy Amerike, tekhnologiyam, energetike i transformatsii globalnogo poryadka. Imeia podgotovku i opyt v oblasti diplomatii, mezhdunarodnogo biznesa i tekhnologiy, on izuchaet, kak voznikayushchie derzhavy, novye ekonomicheskie bloki, iskusstvennyy intellekt i geopoliticheskaya konkurentsiya perestraivayut globalnoe upravlenie i mezhdunarodnye otnosheniya.",
        "Khavier Salazar Segales imeet professionalnyy opyt v diplomaticheskikh voprosakh, podgotovke politicheskikh i ekonomicheskikh dokladov, institutsionalnoy koordinatsii i mezhdunarodnom sotrudnichestve. V krug ego interesov vkhodyat rol BRICS v Globalnom Yuge, polozhenie Latinskoy Ameriki v mnogopolyarnom mire, tekhnologicheskiy suverenitet, energeticheskaya bezopasnost i vliyanie iskusstvennogo intellekta na gosudarstvennuyu vlast i strategicheskoe prinyatie resheniy.",
        "Cherez Geo Scope on stremitsya predlagat yasnyy, dostupnyy i orientirovannyy na budushchee analiz glavnykh sil, formiruyushchikh XXI vek, s osobym vnimaniem k peresecheniyu geopolitiki, ekonomiki, tekhnologiy i regionalnogo razvitiya.",
      ],
    },
    "maria-luisa-ramos-urzagaste": {
      role: "Analitik-sotrudnik",
      specialty: "Spetsialist po Rossii i Evrazii, ASEAN, diplomatii i mnogopolyarnosti",
      summary: "Avtor-sotrudnik Geo Scope s fokusom na Rossii i Evrazii, ASEAN, diplomatii i mnogopolyarnom pereustroystve.",
      affiliations: [
        "Sotrudnik",
        "Geo Scope",
      ],
      expertise: [
        "Rossiya i Evraziya",
        "ASEAN",
        "Diplomatiya",
        "Mnogopolyarnost",
      ],
      languages: [
        "Ispanskiy",
      ],
      education: "Biograficheskiy profil nakhoditsya v protsesse obnovleniya.",
      biography: [
        "Maria Luisa Ramos Urzagaste - sotrudnik Geo Scope i avtor analizov o Rossii, Evrazii, ASEAN, diplomatii i mnogopolyarnosti.",
        "Ee redaktsionnyy profil nakhoditsya v protsesse obnovleniya i budet rasshiren dopolnitelnoy biograficheskoy informatsiey.",
      ],
    },
    "tomas-velez": {
      role: "Redaktor po geoekonomike",
      specialty: "Geoekonomika i mezhdunarodnye finansy",
      summary: "Otslezhivaet tsepochki stoimosti, finansovye potoki i valyutnuyu konkurentsiyu v mezhdunarodnom prostranstve.",
      affiliations: [
        "Geoekonomicheskaya redaktsiya",
        "Geo Scope",
      ],
      expertise: [
        "Globalnaya geoekonomika",
        "Finansovye rynki",
        "Torgovlya",
        "Valyuty",
      ],
      education: "Mezhdunarodnaya ekonomika, politicheskie finansy i analiz sistemnykh riskov.",
      biography: [
        "Tomas Veles analiziruet vzaimodeystvie mezhdu torgovley, dolgom, likvidnostyu i geoekonomicheskim sopernichestvom. V Geo Scope on sledit za evolyutsiey dollarovoy sistemy, strategiyami monetarnoy diversifikatsii i shokami, vliyayushchimi na mezhdunarodnuyu finansovuyu arkhitekturu.",
        "Ego redaktsionnaya rabota svyazyvaet chtenie rynkov s logikoy gosudarstvennoy vlasti, obyasnyaya, kak stavki, obligatsii, logisticheskie tsepochki i promyshlennaya politika prinadlezhat odnoi i toy zhe strategicheskoy konkurentsii.",
      ],
    },
    "clara-ibanez": {
      role: "Analitik po tekhnologiyam i vlasti",
      specialty: "Strategicheskie tekhnologii, II i normativnaya konkurentsiya",
      summary: "Rabotaet nad tsifrovymi standartami, iskusstvennym intellektom i gosudarstvennoy vlastyu v ekonomike platform.",
      affiliations: [
        "Laboratoriya tekhnologiy i vlasti",
        "Geo Scope",
      ],
      expertise: [
        "Tekhnologii i geopolitika",
        "Iskusstvennyy intellekt",
        "Poluprovodniki",
        "Tsifrovoe regulirovanie",
      ],
      education: "Tekhnologicheskaya politika, tsifrovoe upravlenie i sravnitelnyy analiz innovatsiy.",
      biography: [
        "Klara Ibanyes osveshchaet tekhnologicheskuyu konkurentsiyu mezhdu krupnymi derzhavami, osobenno v sferakh poluprovodnikov, iskusstvennogo intellekta, tsifrovoy infrastruktury i regulirovaniya. Ee osnovnoy interes v tom, kak tekhnologiya stanovitsya instrumentom gosudarstvennoy moshchi i mezhdunarodnogo proektirovaniya.",
        "V Geo Scope ona razrabatyvaet analiticheskie ramki dlya ponimaniya svyazi mezhdu innovatsiyami, ekonomicheskoy bezopasnostyu i globalnym upravleniem, sravnivaya SShA, Kitay, Evropu i industrialnuyu Aziyu.",
      ],
    },
    "adrian-rivas": {
      role: "Starshiy issledovatel mezhdunarodnoy bezopasnosti",
      specialty: "Mezhdunarodnaya bezopasnost, oborona i sderzhivanie",
      summary: "Analiziruet arkhitekturu bezopasnosti, voennuyu promyshlennost i strategicheskoe sopernichestvo mezhdu derzhavami.",
      affiliations: [
        "Programma mezhdunarodnoy bezopasnosti",
        "Geo Scope",
      ],
      expertise: [
        "Oborona i bezopasnost",
        "Sderzhivanie",
        "Rossiya i Evraziya",
        "Soyuzy",
      ],
      education: "Issledovaniya bezopasnosti, sravnitelnaya oborona i sovremennaya voennaya strategiya.",
      biography: [
        "Adrian Rivas sledit za transformatsiey globalnoy arkhitektury bezopasnosti: ot konkurentsii alyansov do dinamiki sderzhivaniya, voennykh doktrin i oboronno-promyshlennoy bazy. V Geo Scope on predlagaet strategicheskoe chtenie konfliktov, vozmozhnostey i balansov sily.",
        "Ego rabota osobenno podcherkivaet Evraziyu, evropeyskuyu bezopasnost i institutsionalnuyu adaptatsiyu v bolee fragmentirovannoy, militarizovannoy i tekhnologicheski slozhnoy mezhdunarodnoy srede.",
      ],
    },
    "lucia-ferrer": {
      role: "Redaktor po regionam i diplomatii",
      specialty: "Sravnitelnaya diplomatiya i regionalnyy analiz",
      summary: "Koordiniruet regionalnye pokrytiya i analiziruet diplomaticheskoe pozitsionirovanie, mediatsiyu i strategicheskuyu avtonomiyu.",
      affiliations: [
        "Redaktsiya regionov i diplomatii",
        "Geo Scope",
      ],
      expertise: [
        "Diplomatiya",
        "Latinskaya Amerika",
        "Blizhniy Vostok",
        "Strategicheskaya avtonomiya",
      ],
      education: "Vneshnyaya politika, mnogostoronnyaya diplomatiya i sravnitelnye regionalnye issledovaniya.",
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
      description: "Skvoznye materialy o silakh, svyazyvayushchikh krupnye derzhavy, globalnuyu likvidnost, torgovlyu, tekhnologii i arkhitekturu vlasti v mirovom masshtabe.",
      tags: [
        "dollar",
        "likvidnost",
        "potoki",
        "mezhdunarodnaya sistema",
      ],
    },
    brics: {
      name: "BRICS",
      strap: "Gibkaya koordinatsiya, promyshlennyy ves i parallelnaia arkhitektura.",
      description: "Otslezhivanie politicheskoy, finansovoy i tekhnologicheskoy evolyutsii prostranstva BRICS i ego vliyaniya na globalnyy institutsionalnyy balans.",
      tags: [
        "valyuty",
        "standarty",
        "Globalnyy Yug",
        "finansy",
      ],
    },
    "america-latina": {
      name: "Latinskaya Amerika",
      strap: "Resursy, diplomatiya avtonomii i strategicheskoe pozitsionirovanie.",
      description: "Materialy o meste Latinskoy Ameriki v konkurentsii za tsepochki stoimosti, energetiku, kriticheskie mineraly i srednesrochnye alyansy.",
      tags: [
        "nearshoring",
        "syrie",
        "avtonomiya",
        "porty",
      ],
    },
    "rusia-eurasia": {
      name: "Rossiya i Evraziya",
      strap: "Koridory, rasshirennaya bezopasnost i kontinentalnaya reorganizatsiya.",
      description: "Analiz strategicheskoy proektsii Rossii i Evrazii na pole, prokhodyashchem cherez sanktsii, logisticheskie marshruty i voenno-promyshlennuyu konkurentsiyu.",
      tags: [
        "sanktsii",
        "sderzhivanie",
        "koridory",
        "energetika",
      ],
    },
    "china-asia": {
      name: "Kitay i Aziya",
      strap: "Proizvodstvennyy masshtab, tekhnicheskie standarty i konkurentsiya za manufakturu.",
      description: "Otslezhivanie tsentralnosti Azii v tekhnologiyakh, torgovle, infrastrukture i finansovoy arkhitekture XXI veka.",
      tags: [
        "poluprovodniki",
        "svyaznost",
        "proizvodstvo",
        "tsifrovaya sfera",
      ],
    },
    europa: {
      name: "Evropa",
      strap: "Strategicheskaya avtonomiya, industriya i bezopasnost s vysokoy regulativnoy plotnostyu.",
      description: "Pokrytie napryazheniya mezhdu otkrytostyu, ekonomicheskoy bezopasnostyu, oboronoy i promyshlennoy rekonstruktsiey v evropeyskoy povestke.",
      tags: [
        "energetika",
        "regulirovanie",
        "oborona",
        "Arktika",
      ],
    },
    "medio-oriente": {
      name: "Blizhniy Vostok",
      strap: "Kapital, energetika i novye geografii regionalnoy vlasti.",
      description: "Analiz energetiki, koridorov, suverennykh finansov i diplomaticheskoy rekonfiguratsii na Blizhnem Vostoke.",
      tags: [
        "Zaliv",
        "neft",
        "suverennye fondy",
        "prolivy",
      ],
    },
    africa: {
      name: "Afrika",
      strap: "Kriticheskie mineraly, infrastruktura i peregovornaya sila.",
      description: "Otslezhivanie afrikanskoy roli v energeticheskom perekhode, novykh promyshlennykh tsepochkakh i borbe za svyaznost i resursy.",
      tags: [
        "med",
        "litiy",
        "porty",
        "industrializatsiya",
      ],
    },
    "estados-unidos-occidente": {
      name: "SSHA i Zapad",
      strap: "Tekhnologicheskaya vlast, alyansy i promyshlennaya politika vtorogo pokoleniya.",
      description: "Materialy o pereproektirovanii zapadnoy vlasti cherez subsidii, ekonomicheskuyu bezopasnost, sanktsii i vosstanovlenie alyansov.",
      tags: [
        "chipy",
        "alyansy",
        "subsidii",
        "tekhnopolitika",
      ],
    },
  },
  sectors: {
    "geoeconomia-global": {
      name: "Globalnaya geoekonomika",
      description: "Vzaimodeystvie torgovli, dolga, valyut, finansovoy vlasti i mezhdunarodnoy strategii.",
    },
    "mercados-financieros": {
      name: "Finansovye rynki",
      description: "Likvidnost, stavki, obligatsii, fondovye rynki i mekhanizmy pogloshcheniya mirovykh sberezheniy.",
    },
    "china-estados-unidos": {
      name: "Kitay i Soedinennye Shtaty",
      description: "Strukturnaya konkurentsiya mezhdu proizvodstvom, finansami, tekhnologiyami i gosudarstvennoy sposobnostyu.",
    },
    "geopolítica": {
      name: "Geopolitika",
      description: "Konkurentsiya derzhav, regionalnyy balans i pereuporyadochenie vlasti.",
    },
    "economia-internacional": {
      name: "Mezhdunarodnaya ekonomika",
      description: "Finansovye potoki, promyshlennaya politika, dolg, valyuty i globalnaya arkhitektura.",
    },
    "tecnologia-geopolitica": {
      name: "Tekhnologii i geopolitika",
      description: "Tsifrovaya infrastruktura, standarty, chipy, platformy i gosudarstvennaya sposobnost.",
    },
    "energía": {
      name: "Energetika",
      description: "Neft, gaz, vozobnovlyaemye istochniki, kriticheskie mineraly i bezopasnost postavok.",
    },
    "comercio-cadenas-logisticas": {
      name: "Torgovlya i tsepochki postavok",
      description: "Morskie marshruty, reshoring, nearshoring i reorganizatsiya proizvodstvennykh uzlov.",
    },
    "defensa-seguridad": {
      name: "Oborona i bezopasnost",
      description: "Voennaya sposobnost, sderzhivanie, oboronno-promyshlennyy kompleks i arkhitektura bezopasnosti.",
    },
    diplomacia: {
      name: "Diplomatiya",
      description: "Vyravnivaniya, mediatsiya, regionalnye fory i strategicheskoe upravlenie otnosheniyami.",
    },
    "infraestructura-estrategica": {
      name: "Strategicheskaya infrastruktura",
      description: "Koridory, porty, telekommunikatsii i uzly kriticheskoy svyaznosti.",
    },
    "inteligencia-artificial-poder-global": {
      name: "Iskusstvennyy intellekt i globalnaya vlast",
      description: "II kak vektor konkurentosposobnosti, nablyudeniya, proizvoditelnosti i gosudarstvennoy proektsii.",
    },
    "multipolaridad-gobernanza-global": {
      name: "Mnogopolyarnost i globalnoe upravlenie",
      description: "Instituty, gibkie koalitsii i voznikayushchie pravila mezhdunarodnoy sistemy.",
    },
  },
  articles: {
    "china-produce-estados-unidos-se-endeuda-y-wall-street-gana": {
      title: "Kitay proizvodit, Soedinennye Shtaty zanimayut, a Uoll-strit vyigryvaet",
      subtitle: "Globalnaya ekonomika rabotaet na paradokse: disbalansy mezhdu proizvodstvom, dolgom i likvidnostyu podderzhivayut chast mezhdunarodnogo finansovogo poryadka.",
      excerpt: "Kitay eksportiruet profitsity, Soedinennye Shtaty pogloshchayut mirovye sberezheniya cherez dolg, a Uoll-strit poluchaet znachimuyu chast mezhdunarodnoy likvidnosti. Vopros v tom, kak dolgo etot model mozhet sokhranyatsya.",
      tags: [
        "Kitay",
        "SSHA",
        "Uoll-strit",
        "dollar",
        "BRICS",
        "globalnaya likvidnost",
      ],
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
      subtitle: "Soedinennye Shtaty i Kitay konkuriruyut za Lunu, no nastoyashchaya tsel - kontrolirovat sleduyushchuyu strategicheskuyu infrastrukturu kosmosa.",
      excerpt: "Luna vernulas v tsentr mezhdunarodnoy politiki. Vopros uzhe ne tolko v tom, kto pribudet pervym, a v tom, kto ostanetsya, postroit infrastrukturu, zakrepit strategicheskie pozitsii i pomozhet opredelit pravila budushchey kosmicheskoy ekonomiki.",
      tags: [
        "Luna",
        "SSHA",
        "Kitay",
        "Artemis",
        "kosmos",
        "BRICS",
      ],
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
      subtitle: "Iskusstvennyy intellekt pereustraivayet rynki, no odnovremenno proverayet predely finansovogo doveriya.",
      excerpt: "Iskusstvennyy intellekt mozhet byt realnoy tekhnologicheskoy revolyutsiey i odnovremenno sozdat chastichnyy rynochnyy puzyr. Vopros ne v tom, vazhen li II, a v tom, kakaya chast nyneshney stoimosti uzhe zavisit ot slishkom idealnykh ozhidaniy.",
      tags: [
        "II",
        "rynki",
        "Nvidia",
        "dotkom",
        "proizvoditelnost",
        "BRICS",
      ],
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
      title: "Трамп в Пекине: соперничество, которое никто не может выиграть, но всем приходится управлять",
      subtitle: "Визит показал, что отношения между Соединенными Штатами и Китаем больше не ведут только дипломаты: в них также участвуют CEO, банки, технологические и энергетические компании, промышленные цепочки и державы, стремящиеся переопределить мировой порядок.",
      excerpt: "Визит в Пекин не снял структурное соперничество между Вашингтоном и Китаем. Он показал другое: важнейшим отношениям международной системы нужны каналы управления даже тогда, когда спор идет о технологиях, торговле, безопасности и глобальной легитимности.",
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
          callouts: [
            "Китай вел переговоры не только словами. Он вел их и символами.",
          ],
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
      subtitle: "Konkurentsiya za standarty, promyshlennye platformy i vychislitelnuyu moshchnost pereopredelyaet otnositelnyy ves bloka.",
      excerpt: "Debaty o BRICS bolshe ne vrashchayutsya tolko vokrug valyut ili institutsionalnogo predstavitelstva. Novyy vopros - kto kontroliruet tekhnologicheskie uzly, strukturiruyushchie sleduyushchuyu fazu globalnoy vlasti.",
      tags: [
        "BRICS",
        "II",
        "standarty",
        "promyshlennaya sposobnost",
      ],
      thesis: "Tekhnologicheskoe sopernichestvo mezhdu derzhavami smestilos ot ritoriki blokov k postroeniyu konkretnykh ekosistem: data-tsentrov, talanta, prodvinutogo proizvodstva i tekhnicheskikh norm.",
      whyItMatters: [
        "Dlya bloka BRICS tekhnologicheskaya koordinatsiya rabotaet kak usilitel geopoliticheskogo vesa dazhe pri otsutstvii polnostyu integrirovannoy arkhitektury.",
        "Dostup k tsifrovoy infrastrukture, zrelym poluprovodnikam, oblachnym servisam i promyshlennym tsepochkam stoimosti vse bolshe opredelyaet strategicheskuyu avtonomiyu.",
      ],
      regionalLens: "Klyuchevoy vopros ne v tom, deystvuyut li BRICS kak zakrytyy alyans, a v tom, mogut li oni sinkhronizirovat dostatochno prioritetov dlya nabora masshtaba, snizheniya zavisimosti i peregovorov s bolee silnoy pozitsii.",
      outlook: "V kratkosrochnom plane my uvidim peremennye koalitsii i chastichnye soglasheniya. V srednesrochnom plane glavnoe - smozhet li blok prevratit ekonomicheskiy obem v ustoichivuyu institutsionalnuyu sposobnost.",
    },
    "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina": {
      title: "Chto oznachaet fragmentatsiya mirovoy torgovli dlya Latinskoy Ameriki",
      subtitle: "Nearshoring, friendshoring i ekonomicheskaya bezopasnost otkryvayut vozmozhnosti, no trebuyut promyshlennoy strategii i regionalnoy koordinatsii.",
      excerpt: "Fragmentatsiya globalnoy torgovli ne oznachaet polnuyu deglobalizatsiyu. Ona oznachaet bolee politicheskuyu geografiyu torgovli, v kotoroy Latinskaya Amerika mozhet usilit svoe znachenie, esli izbezhit chisto ekstraktivnogo vstraivaniya.",
      tags: [
        "nearshoring",
        "Latinskaya Amerika",
        "logistika",
        "promyshlennost",
      ],
      thesis: "Torgovaya fragmentatsiya ne oznachaet konets globalnogo obmena, a ego reorganizatsiyu na osnove ustoichivosti, politicheskoy blizosti i kontrolya riskov.",
      whyItMatters: [
        "Dlya Latinskoy Ameriki eto otkryvaet prostor v proizvodstve, agropromyshlennosti, mineralakh i uslugakh, no tolko pri nalichii publichno-chastnoy koordinatsii i uluchshenii logistiki.",
        "Region riskuet stat rezervnym postavshchikom bez zakhvata bolee dorogikh zvenyev, esli ne ukrepit infrastrukturu, talant i stabilnye pravila.",
      ],
      regionalLens: "Meksika, Braziliya, Chili, Kolumbiya i koridor Yuzhnogo konusa stalkivayutsya s raznymi vozmozhnostyami. Obshchaya tochka - neobkhodimost prevratit geopoliticheskiy moment v posledovatelnuyu ekonomicheskuyu politiku.",
      outlook: "Sleduyushchiy tsikl voznagradit tekh, kto predlozhit predskazuemoe regulirovanie, konkurentosposobnuyu energiyu i nadezhnye logisticheskie uzly. Odnogo geograficheskogo preimushchestva uzhe nedostatochno.",
    },
    "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global": {
      title: "Rossiya i Evraziya v perekonfiguratsii globalnoy vlasti",
      subtitle: "Mezhdu sanktsiyami, sukhoputnymi koridorami i voenno-promyshlennoy sposobnostyu Evraziya snova zanimaet strukturnoe mesto na mezhdunarodnoy doske.",
      excerpt: "Evraziyu bolshe nelzya chitat tolko cherez prizmu konflikta. Ee nuzhno analizirovat i kak logisticheskoe, energeticheskoe i politicheskoe prostranstvo v protsesse pereuporyadocheniya.",
      tags: [
        "Evraziya",
        "bezopasnost",
        "sanktsii",
        "koridory",
      ],
      thesis: "Evraziyskaya tsentralnost vytekaet iz skhozhdeniya geografii, bezopasnosti i svyaznosti. Dazhe pod davleniem region prodolzhaet opredelyat marshruty, energetiku i diplomaticheskie pozitsii.",
      whyItMatters: [
        "Sanktsii uskorili finansovye i logisticheskie adaptatsii, kotorye izmenili torgovye potoki, transportnye uzly i takticheskie alyansy.",
        "Voenno-promyshlennaya sposobnost i territorialnaya glubina ostayutsya reshayushchimi peremennymi pri lyubom chtenii evropeyskoy i aziatskoy bezopasnosti.",
      ],
      regionalLens: "Ot Kaspiya do Arktiki region sochetaet operatsionnye uyazvimosti s geograficheskimi preimushchestvami, kotorye ni odin vneshniy igrok ne mozhet ignorirovat.",
      outlook: "Sleduyushchiy etap budet zaviset menshe ot zayavleniy i bolshe ot proizvodstvennoy ustoichivosti, otkrytiya alternativnykh koridorov i plotnosti soglasheniy s Aziey, Blizhnim Vostokom i Globalnym Yugom.",
    },
    "energia-corredores-logisticos-y-competencia-geoeconomica": {
      title: "Energetika, logisticheskie koridory i geoekonomicheskaya konkurentsiya",
      subtitle: "Uzkiye mesta v postavkakh bolshe ne tekhnicheskiy vopros: eto vopros vlasti, finansirovaniya i sposobnosti predvidet.",
      excerpt: "Koridory, porty, prolivy i energeticheskie terminaly obrazuyut edinuyu strategicheskuyu geografiyu. Tot, kto sokrashchaet logisticheskoe trenie, poluchaet politicheskiy manevr.",
      tags: [
        "energetika",
        "koridory",
        "geoekonomika",
        "porty",
      ],
      thesis: "Sovremennaya geoekonomicheskaya konkurentsiya organizovana vokrug konkretnoy fizicheskoy infrastruktury: portov, elektrosetey, truboprovodov, kabel ey i logisticheskikh platform.",
      whyItMatters: [
        "Aktory, kotorye sochetayut finansirovanie, bezopasnost i operatsionnuyu sposobnost vokrug etikh uzlov, poluchayut vliyanie namnogo bolshe svoego nominalnogo vesa.",
        "Energetika ostayetsya obshchim yazykom mezhdu natsionalnoy bezopasnostyu, promyshlennoy politikoy i ekonomicheskoy diplomatiey.",
      ],
      regionalLens: "Blizhniy Vostok sokhranyaet tsentralnost ne tolko iz-za uglevodorodov, no i iz-za svoey roli svyazki mezhdu Aziey, Evropoy i Afrikoy.",
      outlook: "Budushchie spory budut otsenivatsya menshe po obshchim obemam torgovli i bolshe po kontrolyu uzkikh mest, redundantsiy i vremeni reaktsii v krizisakh.",
    },
    "la-inteligencia-artificial-como-herramienta-de-poder-estatal": {
      title: "Iskusstvennyy intellekt kak instrument gosudarstvennoy vlasti",
      subtitle: "Gonka za II - eto ne tolko korporativnaya konkurentsiya. Eto borba za upravlenie, oboronu, proizvoditelnost i gosudarstvennuyu sposobnost pravit.",
      excerpt: "II vstraivaetsya v yadro gosudarstvennogo apparata: razvedku, fiskalnoe upravlenie, promyshlennost, oboronu i gosudarstvennye uslugi. Vopros ne tolko v innovatsii, no i v tom, chtoby upravlyat luchshe i bystree.",
      tags: [
        "II",
        "gosudarstvo",
        "upravlenie",
        "proizvoditelnost",
      ],
      thesis: "Dominiruyushchiy narativ predstavlyaet iskusstvennyy intellekt kak rynochnuyu disrupciyu, khotya ego naibolee glubokoe vliyanie razygraetsya v sferakh gosudarstvennoy sposobnosti.",
      whyItMatters: [
        "Te, kto integriruyut II v byurokratiyu, oboronu, finansovyy nadzor i strategicheskoe planirovanie, podnimut institutsionalnuyu proizvoditelnost i rasshiryat vneshniy manevr.",
        "Budushchiy razryv proydet ne tolko mezhdu lidiruyushchimi i otstayushchimi kompaniyami, no i mezhdu gosudarstvami, sposobnymi absorbirovat tekhnologiyu, i gosudarstvami, kotorye lish ee potreblayut.",
      ],
      regionalLens: "SSHA i ikh soyuzniki sokhranyayut preimushchestvo v kapitale, vychisleniyakh i innovatsionnykh ekosistemakh, no eto preimushchestvo trebuet bolee tonkoy regulativnoy koordinatsii i publichnogo razvertyvaniya.",
      outlook: "Sleduyushchaya bolshaya diskussiya budet o sovmestimosti, nadzore i doktrine. Geopoliticheski vazhen tot II, kotoryy vklyuchaetsya v realnye sistemy, a ne tot, kto dominiroet v zagolovkakh.",
    },
    "tres-señales-que-están-redefiniendo-la-multipolaridad": {
      title: "Tri signala, pereopredelyayushchie mnogopolyarnost",
      subtitle: "Kratkoe chtenie dvizheniy, pokazyvayushchikh, kuda mozhet smestitsya arkhitektura globalnoy vlasti.",
      excerpt: "Mnogopolyarnost ne poyavlyaetsya mgnovenno. Ona proyavlyaetsya v nebolshikh finansovykh, diplomaticheskikh i tekhnologicheskikh podstroykakh, kotorye vmeste menyayut pravila igry.",
      tags: [
        "radar",
        "mnogopolyarnost",
        "BRICS",
        "upravlenie",
      ],
      signals: [
        {
          title: "Bolshe soglasheniy v natsionalnykh valyutakh",
          detail: "Oni ne zamenyayut dollar v kratkosrochnoy perspektive, no rasshiryayut prostor manevra v dvustoronney torgovle i selektivnom finansirovanii.",
        },
        {
          title: "Parallelnye instituty stanovitsya plotnee",
          detail: "Gibkie forumy, regionalnye banki i platezhnye platformy perestayut byt simvolicheskimi i prevrashchayutsya v mekhanizmy konkretnoy koordinatsii.",
        },
        {
          title: "Sektoralnaya diplomatiya vesit bolshe, chem bolshie bloki",
          detail: "Mineraly, energetika, svyaznost i iskusstvennyy intellekt formiruyut chastichnye koalitsii, kotorye perestavlyayut prioritety bystree, chem traditsionnye ideologicheskie vyravnivaniya.",
        },
      ],
      outlook: "Mnogopolyarnost prodvigaetsya togda, kogda stanovitsya operatsionnoy. Vazhen vopros ne o tom, kakie rechi obeshchayut peremeny, a o tom, kakie soglasheniya sozdayut sposobnost.",
    },
    "por-que-el-ártico-importa-cada-vez-más": {
      title: "Pochemu Arktika stanovitsya vse bolee vazhnoy",
      subtitle: "Novye marshruty, resursy, bezopasnost i klimat prevrashchayut dalniy sever v odnu iz samykh chuvstvitelnykh strategicheskikh granits.",
      excerpt: "Arktika stanovitsya zonoy odnovremennoy energeticheskoy, torgovoy, voennoy i nauchnoy konkurentsii. Eto nalozhenie i obyasnyaet ee rastushchuyu znachimost.",
      tags: [
        "Arktika",
        "marshruty",
        "energetika",
        "bezopasnost",
      ],
      thesis: "Arktika kontsentriruet strategicheskuyu redkost: ona odnovremenno klimaticheskaya granitsa, energeticheskiy rezerv, potentsialnyy koridor i prostranstvo voennoy konkurentsii.",
      whyItMatters: [
        "Izmeneniya v sudokhodnosti, dual-use infrastrukture i dobyche resursov menyayut raschety stoimosti, vremeni i voennogo prisutstviya.",
        "Evropa, Rossiya, Severnaya Amerika i Aziya smotryat na Arktiku po-raznomu, no vse soglasny, chto ee otnositelnaya znachimost rastet.",
      ],
      regionalLens: "Dlya Evropy Arktika sochetaet energeticheskuyu bezopasnost, zashchitu marshrutov i neobkhodimost koordinatsii s soyuznikami bez poteri regulativnoy avtonomii.",
      outlook: "Rech ne o novoy zolotoy likhoradke. Rech o prostranstve, kotoroe vynuzhdaet pereosmyslit infrastrukturu, sderzhivanie i upravlenie, poka davlenie ne vyroslo eshche silnee.",
    },
    "china-y-asia-estándares-digitales-y-rutas-industriales": {
      title: "Kitay i Aziya: tsifrovye standarty i promyshlennye marshruty",
      subtitle: "Region ukreplyaet menee vidimoe, no bolee glubokoe preimushchestvo: opredelyat, kak proizvoditsya, svyazyvaetsya i masshtabiruetsya tekhnologiya.",
      excerpt: "Aziya - uzhe ne tolko fabrika mira. Eto takzhe laboratoriya standartov, promyshlennoy koordinatsii i tsifrovoy infrastruktury s globalnym vliyaniem.",
      tags: [
        "Aziya",
        "standarty",
        "tsifra",
        "promyshlennost",
      ],
      thesis: "Aziatskoe vliyanie rastet, potomu chto region sochetaet proizvodstvennyy masshtab, finansirovanie i sposobnost opredelyat rabochie pravila v strategicheskikh sektorakh.",
      whyItMatters: [
        "Tot, kto ustanavlivaet tekhnicheskie standarty, opredelyaet takzhe stoimost vkhoda, sovmestimost i budushchuyu zavisimost.",
        "Integratsiya proizvodstva, logistiki i tsifrovoy svyaznosti daet Azii sistemnuyu glubinu, kotoruyu trudno vosproizvesti v drugih regionakh.",
      ],
      regionalLens: "Kitay zanimaet tsentralnoe mesto na doske, no regionalnaya ekosistema takzhe zavisit ot Indii, ASEAN, Korei, Yaponii i mnozhestva funktsionalnykh svyazok.",
      outlook: "Sleduyushchaya bitva za tekhnologicheskie tsepochki budet ne tolko o liderstve brenda, no i o sposobnosti navyazyvat prakticheskie pravila proizvodstva i vnedreniya.",
    },
    "europa-seguridad-industrial-y-autonomía-estratégica": {
      title: "Evropa: promyshlennaya bezopasnost i strategicheskaya avtonomiya",
      subtitle: "Evropeyskaya povestka pytayetsya sovmestit otkrytost rynka, oboronu, energetiku i proizvodstvennuyu rekonstruktsiyu bez utraty politicheskogo edinogo fronta.",
      excerpt: "Evropa stalkivayetsya so strukturnoy dilemoy: ey nuzhno stat bolee ustoichivoy, ne perestav byt otkrytoy. Eto napryazhenie perestroivaet ee ekonomicheskuyu politiku i geopoliticheskiy yazyk.",
      tags: [
        "Evropa",
        "strategicheskaya avtonomiya",
        "promyshlennost",
        "regulirovanie",
      ],
      thesis: "Evropeyskaya strategicheskaya avtonomiya - eto ne vnezapnyy ideologicheskiy povorot. Eto nakoplennaia reaktsiya na energeticheskie shoki, tekhnologicheskoe davlenie i promyshlennuyu uyazvimost.",
      whyItMatters: [
        "Evropa pereopredelyaet subsidii, pravila konkurentsii i politiku ekonomicheskoy bezopasnosti, chtoby snizit zavisimost v kriticheskikh sektorakh.",
        "Zadacha v tom, chtoby sdelat eto, ne fragmentiruya vnutrenniy rynok i ne oslablyaya diplomaticheskuyu sposobnost v otnoshenii klyuchevykh partnerov.",
      ],
      regionalLens: "Evropeyskaya diskussiya menee binarna, chem kazhetsya: rechi ne o vybore mezhdu avtonomiey i alyansom, a o poiske ustoichivoy kombinatsii oboikh.",
      outlook: "Uspekh budet zaviset ot realizatsii selektivnoy promyshlennoy politiki s nadezhnym finansirovaniem i koordinatsii regulirovaniya s bolee geopoliticheskim vzglyadom na obshchiy rynok.",
    },
    "africa-minerales-críticos-manufactura-y-poder-negociador": {
      title: "Afrika: kriticheskie mineraly, proizvodstvo i peregovornaya vlast",
      subtitle: "Kontinent poluchaet tsentralnost v energeticheskom perekhode, no nastoyashchiy vopros - skolko dobavlennoy stoimosti on smozhet uderzhat.",
      excerpt: "Afrika stala neobkhodimoy dlya kriticheskikh mineralov, koridorov i budushchego sprosa. Vyzov v tom, chtoby prevratit etu tsentralnost v sobstvennuyu promyshlennuyu sposobnost.",
      tags: [
        "Afrika",
        "kriticheskie mineraly",
        "proizvodstvo",
        "peregovory",
      ],
      thesis: "Novaya tsentralnost Afriki obyasnyaetsya ne tolko resursami. Ona vytekaet iz kombinatsii mineralov, gorodskikh rynkov, svyaznosti i geograficheskogo polozheniya.",
      whyItMatters: [
        "Energeticheskiy perekhod i konkurentsiya za batarei povyshayut strategicheskuyu tsennost kobalta, medi, margantsa i redkozemelnykh metallov.",
        "Realnaya vozmozhnost zaklyuchaetsya v prevrashchenii ekstraktivnykh kontraktov v platformy pererabotki, podgotovki kadrov i obshchey infrastruktury.",
      ],
      regionalLens: "Afrikanskie pravitelstva segodnya vedut peregovory s neskolko bolshim manevrom, potomu chto sushchestvuet bolshaya konkurentsiya mezhdu postavshchikami finansirovaniya, tekhnologiy i bezopasnosti.",
      outlook: "Tochka pereloma nastupit, esli vneshnyaya konkurentsiya prevratitsya v natsionalnye programmy industrializatsii, podderzhannye institutami, sposobnymi ikh udershat.",
    },
    "estados-unidos-alianzas-y-política-industrial-de-segunda-ola": {
      title: "Soedinennye Shtaty, alyansy i promyshlennaya politika vtoroy volny",
      subtitle: "Vashington pytaetsya pereyti ot reaktsii k bolee ustoichivoy strategii, osnovannoy na promyshlennosti, ekonomicheskoy bezopasnosti i koordinatsii s soyuznikami.",
      excerpt: "Amerikanskaya promyshlennaya politika bolshe ne epizod. Ona stanovitsya ekonomicheskoy grammatiko y novogo etapa sistemnoy konkurentsii.",
      tags: [
        "SSHA",
        "alyansy",
        "promyshlennost",
        "ekonomicheskaya bezopasnost",
      ],
      thesis: "Novaya amerikanskaya promyshlennaya politika stremitsya vosstanovit vnutrennyuyu sposobnost i odnovremenno uporyadochit proizvodstvennye alyansy vokrug kriticheskikh sektorov.",
      whyItMatters: [
        "Etot sdvig vliyaet na tsepochki postavok, investitsionnye stymuly, torgovye normy i prostor manevra dlya partnerov i konkurentov.",
        "Koordinatsiya s soyuznikami bolshe izmeryaetsya ne tolko oboronoy, no i subsidiyami, mineralami, chipami i zashchitoy chuvstvitelnykh tekhnologiy.",
      ],
      regionalLens: "Zapad dvizhetsya k menee naivnoy modeli vzaimozavisimosti. Vopros v tom, smozhet li on koordiniruvat prioritety, ne umnozhaya vnutrennie tren iya.",
      outlook: "Vtoraya promyshlennaya volna budet otsenivatsya po osyazayemym rezultatam: sroki stroitelstva, dostup k syryu, politicheskaya stabilnost i sposobnost sozdavat polnye ekosistemy.",
    },
    "diplomacia-de-media-potencia-en-america-latina": {
      title: "Diplomatiya srednikh derzhav v Latinskoy Amerike",
      subtitle: "Region mozhet usilit svoe vliyanie, esli sochetaet selektivnye ambitsii, institutsionalnuyu posledovatelnost i realistichnoe chtenie sredy.",
      excerpt: "V bolee fragmentirovannom mire srednie derzhavy imeyut preimushchestvo: oni mogut gibko vesti peregovory. Nedostatok voznikayet togda, kogda etoy gibkosti ne khvataet strategii.",
      tags: [
        "Latinskaya Amerika",
        "diplomatiya",
        "srednie derzhavy",
        "avtonomiya",
      ],
      thesis: "Latinoamerikanskaya diplomatiya mozhet byt bolee vliyatelnoy, esli otkazhetsya ot lozhnogo vybora mezhdu ritoricheskim neytralitetom i passivnym vyravnivaniem.",
      whyItMatters: [
        "Prostranstvo dlya peregovorov est, no ono trebuet yasnykh natsionalnykh prioritetov, posledovatelnykh tekhnicheskikh komand i povestki konkretnykh interesov.",
        "Region raspolagaet tsennymi aktivami v prodovolstvii, energetike, mineralakh i geografii, no vse eshche kommunikuyet i koordiniruet ikh fragmentarno.",
      ],
      regionalLens: "Brazilii, Meksike, Chili, Kolumbii i drugim srednim aktoram ne nuzhno govorit odinakovo, chtoby imet ves. Im nuzhno ponimat, gde sotrudnichat, a gde differentsirovatsya.",
      outlook: "Sleduyushchee desyatiletie voznagradit strany, sposobnye predlagat diplomaticheskuyu nadezhnost i strategicheskuyu yasnost, a ne tolko ritoriku avtonomii.",
    },
    "medio-oriente-finanzas-energia-y-el-orden-postpetrolero": {
      title: "Blizhniy Vostok: finansy, energetika i postneftyanoy poryadok",
      subtitle: "Region ispolzuet suverennyy kapital, infrastrukturu i ekonomicheskuyu diplomatiyu, chtoby podgotovit bolee shirokoe vliyanie, chem odna neft.",
      excerpt: "Govorit o postneftyanom poryadke ne znachit, chto neft teryaet znachenie. Eto znachit, chto region pytaetsya diversifitsirovat svoiu vlast do togo, kak rynok izmenitsya okonchatelno.",
      tags: [
        "Blizhniy Vostok",
        "suverennye fondy",
        "energetika",
        "logistika",
      ],
      thesis: "Krupneyshie aktery Zaliva prevrashchayut energeticheskuyu rentu v finansovuyu sposobnost, svyaznost i diplomaticheskuyu proektsiyu.",
      whyItMatters: [
        "Takoe prevrashchenie likvidnosti v strategicheskoe polozhenie izmenyaet investitsionnye marshruty, logisticheskie tsepochki i alyansy s Aziey, Evropoy i Afrikoy.",
        "Region bolshe ne konkuriruet tolko proizvodstvom energii, no i kontrolem infrastruktury, uslug i kapitalovykh platform.",
      ],
      regionalLens: "Blizhniy Vostok deystvuet i kak most mezhdu regionami, i kak igrok so sobstvennoy povestkoy. Eta dualnost povyshaet ego arbitrazhnye vozmozhnosti.",
      outlook: "Budushchee vliyanie budet zaviset ot togo, naskolko bystro vizii diversifikatsii budut perevedeny v ustoichivye proizvodstvennye sektory i razvityy chelovecheskiy kapital.",
    },
    "infraestructura-corredores-y-poder-en-eurasia": {
      title: "Infrastruktura, koridory i vlast v Evrazii",
      subtitle: "Zheleznodorozhnye marshruty, sukhiye porty i novye sukhoputnye svyazi menyayut strategicheskie raschety publichnykh i chastnykh aktorov.",
      excerpt: "Infrastruktura ne neytralna. V Evrazii kazhdyy koridor reorganizuet izderzhki, zavisimosti i alyansy s effektami, vykhodyashchimi daleko za predely torgovli.",
      tags: [
        "Evraziya",
        "koridory",
        "infrastruktura",
        "logistika",
      ],
      thesis: "Evraziyskie koridory - eto instrumenty vlasti, potomu chto oni soedinyayut rynki, finansirovanie, fizicheskuyu bezopasnost i diplomaticheskie varianty.",
      whyItMatters: [
        "Kazhdyy alternativnyy marshrut snizhaet uyazvimost pered sanktsiyami, uzkimi mestami ili morskimi krizisami.",
        "Kompanii takzhe perestraivayut strategii, kogda politika menyaet sroki, strakhovku, izderzhki i dostupnost infrastruktury.",
      ],
      regionalLens: "Ot Kaspiyskogo morya do svyazey s Kitaem, Indiey i Blizhnim Vostokom Evraziya sochetaet konkuriruyushchie proekty i takticheskie dopolneniya.",
      outlook: "Klyuchevaya peremennaya - operatsionnaya nepreryvnost. V volatilnykh usloviyakh samyy tsennyy koridor ne samyy korotkiy, a samyy nadezhnyy.",
    },
    "radar-semanal-estrechos-estándares-y-alimentos": {
      title: "Ezhenedelnyy radar: prolivy, standarty i prodovolstvie",
      subtitle: "Chetyre nebolshikh dvizheniya, pomogayushchikh chitat bolee shirokie logisticheskie i politicheskie napryazheniya.",
      excerpt: "Nedelya ostavila signaly, svyazyvayushchie morskuyu bezopasnost, tekhnologicheskoe regulirovanie i prodovolstvennoe obespechenie. Ni odin iz nikh ne izolirovan.",
      tags: [
        "radar",
        "prolivy",
        "prodovolstvie",
        "regulirovanie",
      ],
      signals: [
        {
          title: "Bolshoe davlenie na chuvstvitelnye morskie marshruty",
          detail: "Obkhody uvelichivayut vremya puti, strakhovye tarify i raskhod topliva, chto napryamuyu vliyaet na konechnye tseny.",
        },
        {
          title: "Novye tekhnicheskie pravila menyayut dostup k rynkam",
          detail: "Normy po proslezhivaemosti i dannym uzhe rabotayut kak konkurentnye filtry v promyshlennykh i agroprodovolstvennykh sektorakh.",
        },
        {
          title: "Prodovolstvennaya bezopasnost vozvrashchaetsya v tsentr",
          detail: "Klimat, finansirovanie i logistika tesno svyazany. Napryazhenie na odnom iz etikh frontov bystro peredayotsya drugim.",
        },
        {
          title: "Afrika poluchaet bolshe peregovornogo prostranstva",
          detail: "Sochetenie portov, mineralov i vnutrennego sprosa daet neskolkim afrikanskim stranam bolee znachimyy golos v mnogo storonnikh peregovorakh.",
        },
      ],
      outlook: "Radar etoy nedeli usilivaet odnu mysl: tekhnicheskie treniya chasto predvoshchayut bolee krupnye strategicheskie sdvigi.",
    },
    "radar-semanal-ia-sanciones-y-monedas": {
      title: "Ezhenedelnyy radar: II, sanktsii i valyuty",
      subtitle: "Tri kratkikh signala dlya chteniya togo, kak sparivayutsya tekhnologii, finansy i gosudarstvennaya sposobnost.",
      excerpt: "V kratkosrochnom plane globalnye transformatsii prosachivayutsya cherez kazhushchiesya tekhnicheskimi mery. V dolgosrochnom plane eti mery pereopredelyayut ierarkhii.",
      tags: [
        "radar",
        "II",
        "sanktsii",
        "valyuty",
      ],
      signals: [
        {
          title: "II vhodit v sektoralnoe regulirovanie",
          detail: "Debaty uzhe ne abstraktny. Pravitelstva nachinayut trebovat proslezhivaemost, otsenku riska i konkretnuyu sistemy upravleniya po sektoram.",
        },
        {
          title: "Sanktsii porozhdayut sistemy redundantsii",
          detail: "Platezhi, strakhovka, postavshchiki i logisticheskie seti adaptiruyutsya, chtoby vyzhivat v sredakh s bolee vysokim politicheskim treniem.",
        },
        {
          title: "Lokalnye valyuty poluchayut takticheskoe ispolzovanie",
          detail: "Oni ne zamenyayut dominiruyushchuyu sistemu, no otkryvayut transaktsionnye i finansovye prostranstva, menee podverzhennye geopoliticheskoy volatilnosti.",
        },
      ],
      outlook: "Obshchiy vyvod yasen: tekhnologii i finansy uzhe rabotayut kak chast odnoi strategicheskoy doski.",
    },
    "xi-y-putin-en-beijing-y-la-cooperacion-estrategica-global": {
      title: "Си и Путин в Пекине: стратегическое сотрудничество, меняющее глобальный баланс",
      subtitle: "После приема Трампа Китай вновь подтвердил координацию с Россией. Эта дипломатическая последовательность показывает: Пекин не выбирает между Вашингтоном и Москвой, а ведет переговоры с обоими, чтобы расширить собственный маневр.",
      excerpt: "Визит Владимира Путина в Пекин подтвердил, что Китай хочет управлять соперничеством с Соединенными Штатами, не отказываясь от стратегического партнерства с Россией. Именно эта комбинация помогает объяснить новый глобальный баланс.",
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
    "america-latina-y-la-crisis-organica": {
      title: "Латинская Америка и органический кризис: когда государство уже не в состоянии управлять социальным конфликтом",
      subtitle: "Регион переживает не просто череду политических кризисов. Во многих странах проблема глубже: утрата институциональной легитимности, экономическое истощение, социальная фрагментация и отсутствие национальных проектов, способных упорядочить будущее.",
      excerpt: "Латинская Америка переживает этап устойчивого недовольства. Социальные протесты, слабые правительства, электоральная поляризация, экономические кризисы, небезопасность, коррупция, неформальная занятость и институциональное недоверие снова и снова проявляются в разных странах региона.",
      tags: [
        "Латинская Америка",
        "органический кризис",
        "государство",
        "управляемость",
        "коррупция",
        "Бразилия",
        "Боливия",
        "Перу",
        "многополярность",
      ],
      bodySections: [
        {
          paragraphs: [
            "Латинская Америка переживает этап устойчивого недовольства. Социальные протесты, слабые правительства, электоральная поляризация, экономические кризисы, небезопасность, коррупция, неформальная занятость и институциональное недоверие снова и снова проявляются в разных странах региона. На первый взгляд эти проблемы кажутся отдельными кризисами. Но если смотреть на них вместе, они показывают нечто более глубокое: органический кризис.",
            "Органический кризис - это не просто кризис правительства. Это кризис исторического направления. Он возникает тогда, когда институты уже не могут канализировать социальные требования, экономика перестает давать ожидания социальной мобильности, партии теряют способность представлять общество, а само общество перестает верить, что политическая система может разрешить свои противоречия.",
            "В Латинской Америке этот кризис проявляется не одинаково во всех странах. В Боливии он выражается в политическом расколе, споре о легитимности и истощении государственной модели, которая долгие годы умела управлять социальными конфликтами и править через пакты, балансы и переговоры с различными социальными группами. В Перу он проявляется как постоянная институциональная нестабильность. В Эквадоре - как кризис безопасности и расширение организованной преступности. В Аргентине - как разрыв экономического консенсуса и неприятие традиционных элит. В Бразилии - как структурная поляризация между противоположными проектами страны. В Чили и Колумбии - как трудность превратить социальные требования в устойчивые политические пакты.",
            "Центральный тезис ясен: Латинская Америка переживает не только кризис управляемости. Она переживает кризис посредничества между государством, обществом и будущим.",
          ],
        },
        {
          heading: "Что такое органический кризис",
          paragraphs: [
            "Понятие органического кризиса связано с мыслью Антонио Грамши. Оно описывает момент, когда старый порядок теряет легитимность, но новый проект, способный его заменить, еще не появляется. Речь идет не о временном кризисе и не об административной проблеме. Это более глубокий разрыв между политическими, экономическими и социальными структурами, которые прежде обеспечивали стабильность страны.",
            "Во время органического кризиса правительства могут меняться, но недовольство сохраняется. Выборы могут приносить сменяемость, но не обязательно выход. Институты формально продолжают работать, но утрачивают общественный авторитет. Партии конкурируют за власть, но все меньше представляют общество. Государство сохраняет законность, но теряет способность к арбитражу.",
            "Классическая формула, которая резюмирует этот тип кризиса, состоит в том, что \"старое не умирает до конца, а новое еще не рождается\". В Латинской Америке это напряжение видно в растущей дистанции между гражданами и институтами, в фрагментации партийных систем и в постоянном поиске лидеров-разрушителей.",
            "Проблема не только в том, что правительства теряют популярность. Проблема в том, что общества перестают верить, что система способна разрешать свои противоречия.",
          ],
        },
        {
          heading: "Органический кризис: за пределами левых и правых",
          paragraphs: [
            "Органический кризис не является исключительной проблемой левого или правого правительства. Он может проявляться при прогрессивных, консервативных, националистических, либеральных или технократических администрациях. Его корень заключается не только в идеологической ориентации правительства, а в потере политической системой способности организовывать социальный конфликт, производить легитимность и предлагать горизонт будущего.",
            "Для Латинской Америки это различие принципиально. Правительства противоположных идеологических знаков сталкивались с похожими проблемами: институциональным недоверием, низкой способностью к реформам, социальной фрагментацией, экономическим давлением, небезопасностью, неформальностью, ухудшением государственных услуг и утратой ожиданий социальной мобильности. Это показывает, что проблема не решается простой заменой одной политической силы другой, если базовые структуры остаются нетронутыми.",
            "Электоральная сменяемость может менять дискурс, приоритеты или международных союзников страны. Но сама по себе она не решает органический кризис. Если государство не восстанавливает управленческую способность, если экономика не создает социальную мобильность, если институты не канализируют требования и если общество не видит проекта будущего, кризис возвращается в новых формах.",
            "В этом контексте коррупция действует как ускоритель кризиса. Она не принадлежит одной идеологии или одной партии. Она может расти при правительствах левых, правых или центра, когда контрольные институты слабы, правосудие политизировано, государственное управление захвачено частными или партийными интересами, а власть используется для распределения выгод между элитами вместо решения коллективных проблем.",
            "Коррупция усугубляет почти все симптомы органического кризиса. Она снижает доверие к институтам, ослабляет государственные инвестиции, ухудшает базовые услуги, подпитывает антисистемные дискурсы, облегчает продвижение организованной преступности и превращает политику в борьбу за доступ к государственным рентам. Когда граждане воспринимают, что система защищает своих участников раньше общественного интереса, демократическая легитимность размывается изнутри.",
            "Именно поэтому органический кризис нельзя преодолеть только победой на выборах. Его можно преодолеть лишь восстановлением легитимности, государственной способности, политического представительства, институционального контроля и национального проекта, способного соединить общественные ожидания с конкретными результатами.",
          ],
        },
        {
          heading: "Боливия как региональный симптом",
          paragraphs: [
            "Боливия - один из тех случаев, где идея органического кризиса особенно помогает понять текущий политический момент. Страна сталкивается не только с электоральным спором или краткосрочным экономическим кризисом. Она сталкивается с сочетанием политического раскола, институционального истощения, социального давления, политических противоречий и потери государственной способности упорядочивать конфликт.",
            "На протяжении многих лет боливийская политическая модель держалась на сочетании народной легитимности, расширения государства, перераспределения ренты от добывающего сектора и переговоров с социальными, профсоюзными, крестьянскими, коренными и территориальными организациями. Эта модель обеспечивала стабильность в течение важного периода. Но она также создала зависимость от природных ресурсов, политическую концентрацию, региональные напряжения и трудности в построении институтов за пределами персональных лидерств или доминирующих партийных структур.",
            "Сегодня MAS уже не контролирует государственную власть так, как это было почти два десятилетия. Однако его ослабление не привело автоматически к формированию новой управляемости. Правительство Родриго Паса, спустя почти семь месяцев у власти, сталкивается с кризисом, отмеченным протестами, блокадами, социальным давлением, экономическими трудностями, политическими спорами и потерей поддержки со стороны тех секторов, которые изначально поддержали его приход к власти.",
            "В этом контексте говорить лишь о \"возвращении MAS\" было бы недостаточно. На поверхность выходит нечто более широкое: устойчивость социальных, территориальных и политических структур, которые ни одно правительство не смогло полностью реорганизовать. Старый блок власти потерял центральность, но новое правительство еще не построило устойчивую архитектуру управляемости.",
            "Конфликт больше не обрабатывается только в Конгрессе, партиях или на выборах. Он проявляется также на улицах, дорогах, в регионах, социальных организациях, коренных секторах, профессиональных объединениях и территориальных структурах.",
            "Боливия показывает центральную черту латиноамериканского органического кризиса: когда политический блок перестает упорядочивать публичную жизнь, а новое правительство не может выстроить достаточную легитимность, социальный конфликт фрагментируется и возвращается в множестве форм.",
          ],
        },
        {
          heading: "Перу, Эквадор и политика без центра",
          paragraphs: [
            "Перу представляет собой крайнюю форму институциональной фрагментации. Президентская нестабильность, слабость партий, низкое доверие к Конгрессу и трудность формирования устойчивых большинств показывают политическую систему, которая формально функционирует, но не способна производить направление. Есть выборы, институты и формальная законность. Но нет способности к руководству.",
            "Второй тур президентских выборов подтвердил этот кризис представительства. Соперничество между Кейко Фухимори и Роберто Санчесом пришло к сценарию практически технической ничьей, с крайне узким подсчетом и все еще открытым итогом. При примерно 94,9% подсчитанных голосов Санчес имел минимальное преимущество 50,10% против 49,90%, тогда как зарубежное голосование - традиционно более благоприятное для правых - могло изменить финальный результат. Разница всего в несколько тысяч голосов и сложность подсчета отражают глубину политического раскола в Перу.",
            "Независимо от того, кто победит, выборы показывают политически разделенное общество. Фухимори выражает запрос на порядок, безопасность и консервативную преемственность, отмеченный историческим весом фухиморизма. Санчес канализирует запрос на перемены со стороны сельских, народных и неформальных секторов, имея политические связи с пространством Педро Кастильо. Поляризация объясняется не только идеологией: она выражает разлом между Лимой и регионами, между безопасностью и реформой, между институциональной преемственностью и отказом от традиционной политической системы.",
            "То, что следующий президент станет уже девятым за одно десятилетие, подтверждает: проблема Перу не только электоральная. Проблема в том, что политическая система больше не способна стабилизировать власть и производить минимальные соглашения управляемости. В условиях органического кризиса политический центр ослабевает. Партии перестают организовывать конфликт и превращаются во временные электоральные машины. Граждане голосуют, но не обязательно чувствуют себя представленными. Правительства приходят к власти, но не консолидируют авторитет. Политика превращается в управление выживанием.",
            "Эквадор показывает другое измерение: кризис безопасности. Расширение организованной преступности, насилие и борьба за территории демонстрируют, что государство сталкивается уже не только с проблемами управляемости, но и с вызовами своему внутреннему суверенитету. Когда преступные организации контролируют маршруты, тюрьмы, районы или нелегальные экономики, кризис перестает быть только политическим. Он становится территориальным.",
            "Перу и Эквадор показывают, что органический кризис может выражаться в двух разных формах: как институциональная блокировка или как потеря государственного контроля над безопасностью.",
          ],
        },
        {
          heading: "Аргентина: корректировка, инфляция и разрыв общественного консенсуса",
          paragraphs: [
            "Аргентина представляет другую разновидность органического кризиса: истощение экономической модели и разрыв доверия между обществом, государством и политическими элитами.",
            "Устойчивая инфляция, задолженность, падение покупательной способности, разочарование в традиционном политическом классе и неприятие прежних консенсусов открыли пространство для лидеров разрыва. В этом контексте общество ищет не просто смену правительства. Оно ищет разрыв с тем способом ведения политики, который воспринимается как неспособный решить накопившиеся проблемы.",
            "Аргентинский опыт показывает, что органический кризис может порождать спрос на порядок, шок или радикальную трансформацию. Когда традиционная система теряет доверие, общество может принять выходы, которые раньше казались политически невозможными.",
            "Главный вопрос не в том, окажутся ли эти выходы успешными. Главное в том, что само их появление показывает степень истощения прежнего пакта.",
          ],
        },
        {
          heading: "Бразилия: поляризация, управляемость и спор о региональном курсе",
          paragraphs: [
            "Бразилия представляет одно из самых явных выражений структурной политической поляризации в Латинской Америке. Спор между прогрессивным лагерем, связанным с Лулой да Силвой, и консервативным блоком, ассоциированным с болсонаризмом, - это не просто электоральная конкуренция. Это более глубокий разлом по поводу модели государства, экономической политики, отношений с Китаем и Соединенными Штатами, экологической повестки, общественной безопасности, роли вооруженных сил и международной позиции страны.",
            "Бразилия выражает не органический кризис из-за отсутствия государства, а частичный или латентный органический кризис из-за блокировки консенсусов. Страна сохраняет институты, диверсифицированную экономику, дипломатическую способность и региональный вес. Но поляризация превращает каждые выборы в спор между национальными проектами, которые трудно примирить.",
            "Президентские выборы 2026 года отражают это разделение. Разные опросы показывали плотную конкуренцию между Лулой и Флавиу Болсонару, периоды технической ничьей и сценарии, в которых Лула возвращал себе преимущество в возможном втором туре. Это подтверждает, что Бразилия по-прежнему организована вокруг двух крупных и сильно поляризованных политических лагерей.",
            "Этот сценарий подтверждает, что Бразилия переживает не только спор между правительством и оппозицией. Она переживает конкуренцию между двумя социальными, культурными и геополитическими коалициями. Одна часть страны делает ставку на активное государство, интеграцию Юг-Юг, экологическую повестку и более автономную внешнюю политику. Другая часть ставит на безопасность, культурный консерватизм, экономический либерализм, выравнивание с США и неприятие традиционной политической системы.",
            "Поляризация также влияет на способность управлять. Даже победив на выборах, президент сталкивается с фрагментированным Конгрессом, региональным давлением, силой губернаторов, влиянием агробизнеса, судебными напряжениями и сильно разделенным общественным мнением. В этом контексте электоральная сменяемость не решает автоматически кризис представительства. Она может даже углубить его, если каждые выборы воспринимаются как экзистенциальная битва между несовместимыми моделями.",
            "Бразилия важна потому, что ее внутренний кризис оказывает региональное воздействие. Если ей удастся выстроить управляемость, она сможет действовать как латиноамериканский артикулятор в рамках BRICS, CELAC, Mercosur и глобальной климатической повестки. Если же она застрянет в постоянной поляризации, Латинская Америка потеряет один из своих главных центров координации.",
            "Сможет ли Бразилия превратить свою поляризацию в устойчивую демократическую конкуренцию, или спор между проектами страны будет и дальше блокировать ее способность к региональному лидерству?",
          ],
        },
        {
          heading: "Колумбия и Чили: трудные реформы и сменяемость без устойчивого консенсуса",
          paragraphs: [
            "Колумбия и Чили показывают, что органический кризис затрагивает не только страны со слабыми институтами. Он появляется и в обществах с более консолидированными государственными структурами, но охваченных требованиями перемен, которые политическая система не умеет легко перерабатывать.",
            "Чили пережила сильный запрос на социальную и институциональную трансформацию. После периода правого правительства страна повернула влево с Габриэлем Боричем, но затем вновь сместилась вправо с Хосе Антонио Кастом. Этот поворот отражает тревогу по поводу безопасности, миграции и истощения прогрессивного цикла, но также и более глубокую трудность построения долгосрочных консенсусов.",
            "Чилийский случай важен потому, что он показывает кризис консенсуса, а не обязательно кризис коллапса. Общество может соглашаться с тем, что что-то должно измениться, но не обязательно соглашается, чем именно это должно быть заменено. Конституционный процесс продемонстрировал эту трудность: запрос на реформу существовал, но прочного согласия по поводу нового политического пакта не было.",
            "Колумбия сталкивается с аналогичным напряжением. Страна идет ко второму туру президентских выборов между левым сенатором Иваном Сепедой и правым юристом Абелардо де ла Эсприэлья после того, как ни один кандидат не получил достаточного большинства в первом туре. Кампания отмечена поляризацией, безопасностью, антиинкумбентным голосованием и жестким спором о направлении страны после прогрессивного цикла.",
            "Кандидатура де ла Эсприэлья отражает более широкую региональную тенденцию: жестких правых outsiders, дискурс порядка, критику традиционных элит и обещания радикальных мер против преступности. Сепеда, напротив, пытается удержать левое пространство в условиях усталости от уходящего правительства.",
            "Чили и Колумбия показывают, что органический кризис не всегда ведет к коллапсу. Иногда он производит заблокированный переход: все признают необходимость перемен, но ни одному проекту не удается упорядочить целое. Электоральная сменяемость существует, но не обязательно создает долгосрочный консенсус.",
          ],
        },
        {
          heading: "Экономика недовольства",
          paragraphs: [
            "Органический кризис имеет материальную основу. Латинская Америка много лет находится в ловушке модели низкого роста, высокой неформальности, устойчивого неравенства, низкой производительности и зависимости от сырьевых товаров.",
            "ЭКЛАК предупреждала, что регион переживает затяжной период низкого роста. Ее оценки указывают на расширение примерно на 2,4% в 2025 году и около 2,3% в 2026 году - траекторию, недостаточную для поглощения социальных требований, создания формальной занятости и поддержания ожиданий мобильности.",
            "Этот показатель является ключевым. Демократия может выдерживать напряжения, если она предлагает ожидания социальной мобильности. Но когда рост низок, занятость нестабильна, зарплаты недостаточны, государственные услуги ухудшаются, а молодежь не видит будущего, институциональная легитимность ослабевает.",
            "Регион растет, но не трансформируется. Он экспортирует сырье, но импортирует технологии. Он производит продукты питания, но сосуществует с бедностью. У него есть выборы, но не всегда есть эффективное представительство. У него есть природные ресурсы, но не всегда есть государственная способность превращать их в развитие.",
            "Латиноамериканское недовольство рождается не только из политических дискурсов. Оно рождается из дистанции между обещаниями включения и недостаточными материальными результатами.",
          ],
        },
        {
          heading: "Слабые институты и эрозия доверия",
          paragraphs: [
            "Органический кризис подпитывается и потерей доверия. Когда граждане перестают доверять партиям, парламентам, правосудию, полиции, СМИ и правительствам, система теряет способность к посредничеству.",
            "Этот парадокс принципиален: многие граждане по-прежнему ценят демократию как идеал, но не доверяют конкретным институтам, которые должны обеспечивать ее работу. Они хотят прав, участия и стабильности, но не верят, что партии, парламенты или суды могут это гарантировать.",
            "Когда этот разрыв растет, появляются два риска. Первый - апатия: граждане отходят от политики, потому что не ждут результатов. Второй - разрыв: граждане ищут решения вне системы, даже если эти решения ослабляют демократические сдержки.",
            "Органический кризис возникает именно тогда, когда формальная демократия сохраняется, но ее способность производить легитимность ухудшается.",
          ],
        },
        {
          heading: "Безопасность, преступность и фрагментированное государство",
          paragraphs: [
            "Расширение организованной преступности - один из самых серьезных признаков органического кризиса. Когда государство не гарантирует безопасность, занятость, правосудие или базовые услуги, вакуум заполняют другие акторы.",
            "Это заметно в частях Мексики, Эквадора, Центральной Америки, Колумбии, Бразилии и Гаити. Организованная преступность - это уже не только полицейская проблема. Во многих случаях она действует как территориальная власть, экономический актор, неформальный поставщик порядка и конкурент государства.",
            "Безопасность перестает быть отраслевой повесткой и превращается в спор о внутреннем суверенитете. Государство может иметь флаг, Конституцию и выборы, но если оно не контролирует тюрьмы, границы, порты, районы или логистические маршруты, его реальная власть становится ограниченной.",
            "Органический кризис углубляется, когда граждане воспринимают государство как неспособное их защитить. В таком контексте могут расти запросы на жесткую руку, милитаризацию или чрезвычайные решения.",
            "Проблема в том, что безопасность без легитимности может дать временный порядок, но не обязательно восстанавливает государство.",
          ],
        },
        {
          heading: "Геополитика латиноамериканского кризиса",
          paragraphs: [
            "Латиноамериканский органический кризис развивается в мире, который становится все более конкурентным. Соединенные Штаты, Китай, Россия, Европа и BRICS рассматривают регион как пространство природных ресурсов, продовольствия, критически важных минералов, энергии, рынков, инфраструктуры, портов, данных и дипломатических позиций.",
            "Латинская Америка располагает литием, медью, пресной водой, биоразнообразием, газом, нефтью, продовольствием и потенциалом возобновляемой энергетики. Но фрагментированный регион ведет переговоры с более слабой позиции. Без общей стратегии страны могут подвергаться давлению разных центров силы и в итоге конкурировать друг с другом за инвестиции, финансирование, доступ к рынкам или политическую поддержку.",
            "Геополитическая конкуренция за влияние в Латинской Америке не является главной причиной регионального органического кризиса, но может углублять его последствия. Внутренние расколы рождаются из собственных проблем - слабых институтов, коррупции, низкого роста, небезопасности, неформальности и отсутствия представительства, - но внешние державы могут работать на этих уязвимостях через финансирование, дипломатическое давление, торговые соглашения, стратегические инвестиции, технологии, военное сотрудничество или контроль над ключевыми ресурсами.",
            "Это происходит по-разному. Одна держава может предложить финансирование инфраструктуры; другая - обусловить доступ к рынкам; третья - давить санкциями, военным сотрудничеством или технологиями; четвертая - позиционировать себя как энергетического партнера, покупателя сырья или поставщика безопасности. Для стран с низкой государственной способностью, высокой поляризацией и экономическими неотложностями такие предложения могут расширять выбор, но также создавать новые зависимости.",
            "Спор за регион выражается не только в военных базах или формальных альянсах. Он проявляется также в портах, сетях 5G, литии, меди, продовольствии, газе, нефти, логистических коридорах, торговых соглашениях, финансировании, цифровых платформах, искусственном интеллекте, спутниках и голосах в международных организациях.",
            "В условиях соперничества между Соединенными Штатами и Китаем, торговой фрагментации, энергетического перехода и конкуренции за критические минералы Латинская Америка могла бы получить больше пространства для маневра. Но для этого ей нужны государственная способность, региональная интеграция и стратегическое видение.",
            "Без собственного проекта многополярность не производит автономию. Она лишь умножает внешнее давление.",
          ],
        },
        {
          heading: "Коррупция как симптом и ускоритель",
          paragraphs: [
            "Коррупция - это не отдельное явление по отношению к органическому кризису. Это один из его симптомов и одновременно один из его ускорителей.",
            "Когда коррупция нормализуется, граждане перестают видеть в государстве инструмент общего блага и начинают воспринимать его как добычу. Политика интерпретируется как доступ к привилегиям, должностям, контрактам, судебной защите или государственным рентам. Это восприятие разрушает легитимность.",
            "Коррупция также ослабляет государственную способность. Она снижает качество государственных инвестиций, удорожает проекты, ухудшает услуги, облегчает криминальные сети и уменьшает доверие граждан и инвесторов. В условиях низкого роста каждый коррупционный случай имеет больший политический эффект, потому что подтверждает ощущение, что социальные жертвы не разделяются элитами.",
            "Именно поэтому борьба с коррупцией - это не только моральная повестка. Это условие восстановления государства.",
            "Но борьба с коррупцией также может использоваться инструментально. В ряде стран антикоррупционный дискурс применяется для уничтожения противников, судебного преследования политики или оправдания авторитарных проектов. Реальный выход требует независимых контрольных институтов, заслуживающего доверия правосудия, прозрачности и профессионализации государственного управления.",
          ],
        },
        {
          heading: "Каков выход из органического кризиса?",
          paragraphs: [
            "Органический кризис не решается только выборами. Выборы необходимы, но недостаточны. Они могут обновить власть, но не восстанавливают автоматически легитимность, государственную способность или национальный проект.",
            "Выход требует нового пакта. Не обязательно формального пакта, подписанного всеми акторами, а новой формы организации ожиданий, ресурсов, институтов и приоритетов.",
            "Латинской Америке необходимо восстановить государственную способность. Это означает лучшие государственные услуги, надежное правосудие, территориальную безопасность, профессиональное управление, эффективные государственные инвестиции и реальное присутствие государства в периферийных регионах.",
            "Региону также нужна производственная стратегия. Без роста, формальной занятости, избирательной индустриализации, технологической интеграции и социальной мобильности демократия теряет свою материальную опору.",
            "Региону необходимы и новые формы представительства. Партии должны вновь соединиться с неформальными работниками, молодежью, регионами, коренными народами, закредитованными средними классами, производительным бизнесом и городскими народными секторами. Без представительства конфликт перемещается на улицу, в насилие или в антисистемный отказ.",
            "Наконец, Латинская Америка должна мыслить геополитически. Она не может сталкиваться с органическим кризисом так, словно живет в стабильном мире. Конкуренция за энергию, технологии, продовольствие, критические минералы и цепочки поставок требует национальной и региональной стратегии.",
          ],
        },
        {
          heading: "Возможные сценарии",
          subsections: [
            {
              heading: "1. Демократическая реорганизация",
              paragraphs: [
                "Страны добиваются восстановления институциональной легитимности через реформы, социальные пакты, улучшение государственных услуг, эффективную борьбу с коррупцией и долгосрочные производственные стратегии.",
              ],
            },
            {
              heading: "2. Сменяемость без трансформации",
              paragraphs: [
                "Левые и правые правительства чередуются у власти, но ни одно из них не способно изменить структуры низкого роста, неформальности, небезопасности и недоверия. Кризис возвращается под новыми дискурсами.",
              ],
            },
            {
              heading: "3. Авторитарные или жесткие выходы",
              paragraphs: [
                "Социальная фрустрация открывает пространство для лидеров, обещающих быстрый порядок, снижение преступности и разрыв с элитами. Они могут дать временную стабильность, но ценой демократических ограничений.",
              ],
            },
            {
              heading: "4. Территориальная фрагментация государства",
              paragraphs: [
                "Организованная преступность, клиентелистские сети, нелегальные экономики или региональные силы занимают пространства, куда не доходит государство. Внутренний суверенитет становится неравномерным.",
              ],
            },
            {
              heading: "5. Многополярность без стратегии",
              paragraphs: [
                "Латинская Америка получает предложения от Китая, Соединенных Штатов, Европы, России и BRICS, но без региональной координации и собственного проекта. Регион получает больше вариантов, но и больше новых зависимостей.",
              ],
            },
            {
              heading: "6. Новый производственный и региональный пакт",
              paragraphs: [
                "Некоторые страны смогут превратить природные ресурсы, энергию, продовольствие и критические минералы в промышленное развитие, региональную интеграцию и стратегическую автономию.",
              ],
            },
          ],
        },
        {
          heading: "Заключение",
          paragraphs: [
            "Латинская Америка переживает не просто череду политических кризисов. Она живет в органическом кризисе. Проблема состоит не только в слабости правительства, непопулярности президента или поляризации выборов. Проблема глубже: институты теряют легитимность, экономика не создает достаточной мобильности, партии не представляют общество, коррупция разъедает доверие, а государство не может управлять социальным конфликтом.",
            "Этот кризис не принадлежит ни левым, ни правым. Он проходит через правительства разных знаков, потому что его причины структурны. Смена власти может изменить курс, но этого недостаточно, если не восстанавливаются государственные способности, институты контроля, безопасность, формальная занятость и горизонт будущего.",
            "Боливия, Перу, Эквадор, Аргентина, Бразилия, Чили и Колумбия показывают разные симптомы одного и того же регионального кризиса: трудность восстановить управляемость, превратить социальные требования в устойчивые национальные проекты и поддерживать легитимность за пределами электоральной сменяемости.",
            "Протест возникает тогда, когда институты не канализируют требования. Жесткая рука возникает тогда, когда государство не защищает. Лидеры-разрушители появляются тогда, когда традиционные элиты теряют доверие. Поляризация возникает тогда, когда общества уже не разделяют даже минимального горизонта будущего.",
            "Органический кризис не означает неизбежного коллапса. Он означает переход. Но в любом переходе существует один центральный вопрос: кто окажется способен построить новый консенсус?",
            "Латинская Америка обладает ресурсами, населением, энергией, продовольствием, критическими минералами и геополитическим положением. Но эти активы не превращаются автоматически во власть. Без государства, без институтов, без производственной стратегии и без региональной интеграции регион может и дальше оставаться территорией спора между великими державами.",
            "Выход не будет ни ностальгическим, ни чисто идеологическим. Он будет институциональным, производственным, социальным и геополитическим. Латинской Америке нужен новый пакт, способный восстановить легитимность и превратить ресурсы в будущее.",
          ],
        },
        {
          heading: "Открытые вопросы",
          bullets: [
            "Сможет ли Латинская Америка выйти из органического кризиса, не построив новую модель развития?",
            "Являются ли лидеры-разрушители решением или симптомом институционального истощения?",
            "Может ли регион восстановить государственную способность, не скатываясь к авторитаризму?",
            "Может ли региональная интеграция стать выходом, или национальная фрагментация и дальше будет блокировать любой общий проект?",
            "Станет ли Латинская Америка стратегическим актором нового мирового порядка, или останется территорией спора между великими державами?",
          ],
        },
      ],
    },
    "foro-de-seguridad-multipolar-en-moscu": {
      title: "Форум многополярной безопасности в Москве: мировое большинство перед меняющейся глобальной повесткой",
      subtitle: "Международный форум по безопасности утвердил альтернативную повестку о стабильности, суверенитете и многополярном порядке, где мировое большинство выступает центральным собеседником.",
      excerpt: "Форум, прошедший в Московской области, закрепил Россию в роли организатора альтернативного разговора о международной безопасности, в центре которого находится мировое большинство.",
      tags: [
        "Москва",
        "Россия",
        "Путин",
        "международная безопасность",
        "мировое большинство",
        "БРИКС",
        "кибербезопасность",
        "искусственный интеллект",
      ],
      bodySections: [
        {
          paragraphs: [
            "Первый Международный форум по безопасности, прошедший в Московской области, стал не просто технической встречей по глобальным угрозам. Это была политическая демонстрация. Россия стремилась показать, что сохраняет способность собирать партнеров, что западная изоляция не равна глобальной изоляции и что существует круг стран, заинтересованных в обсуждении международной безопасности с иной точки зрения, чем у Вашингтона, Брюсселя или НАТО.",
            "Форум проходил с 26 по 29 мая 2026 года, и одним из его ключевых моментов стала XIV международная встреча высоких представителей, отвечающих за вопросы безопасности, состоявшаяся 28 мая. В этом контексте Владимир Путин обратился к участникам, подчеркнув важность международного сотрудничества перед лицом общих угроз и необходимость укрепления региональной и глобальной стабильности.",
            "Повестка форума была широкой. Она не ограничивалась военной обороной или терроризмом. В нее вошли международная безопасность, региональная стабильность, сотрудничество против транснациональных угроз, кибербезопасность, искусственный интеллект, критические технологии, вода, энергия, продовольствие, инфраструктура, традиционные ценности, неоколониализм, реформа глобального управления и роль так называемого мирового большинства.",
            "Главный тезис ясен: Россия превратила международную безопасность в платформу многополярной легитимности. Речь идет не только о разговорах об угрозах. Речь идет о споре о том, кто имеет право их определять, какие акторы участвуют в этом определении и по каким правилам будет организована глобальная безопасность.",
          ],
        },
        {
          heading: "Послание Путина: взаимозависимая безопасность и глобальное сотрудничество",
          paragraphs: [
            "Владимир Путин обратился к участникам Международного форума по безопасности 28 мая 2026 года. Этот жест выполнял политическую функцию: вписать форум в более широкую повестку международного сотрудничества, региональной стабильности и глобальной безопасности.",
            "Центральная идея послания состоит в том, что безопасность больше нельзя понимать изолированно. Региональный кризис, террористическая угроза, технологическая эскалация, разрыв цепочек поставок или продовольственный кризис способны затронуть всю международную систему. Современная безопасность взаимозависима.",
            "Такое рамочное понимание позволяет России сместить разговор. Москва не хочет, чтобы международная дискуссия о безопасности сводилась к Украине, санкциям или конфронтации с Западом. Она стремится расширить дебаты в сторону транснациональных угроз: терроризма, экстремизма, организованной преступности, наркотрафика, ядерного распространения, киберпреступности, информационной безопасности, медийной манипуляции и уязвимости критической инфраструктуры.",
            "В этом прочтении безопасность не является только военной. Она также технологическая, информационная, биологическая, продовольственная, водная, культурная, энергетическая и цивилизационная.",
          ],
        },
        {
          heading: "От технической встречи к стратегической платформе",
          paragraphs: [
            "Международный форум по безопасности был задуман как широкая платформа. XIV встреча высоких представителей не была изолированным событием, а частью более крупной рамки, объединявшей официальные встречи, политические дебаты, тематические конференции и обсуждения новых угроз.",
            "Эта разница важна. Техническая встреча обменивается диагнозами. Международный форум стремится выстроить язык, сеть контактов, повестку и легитимность.",
            "Москва пытается представить это пространство как платформу, где незападные акторы могут обсуждать вопросы безопасности, не проходя обязательно через институты, доминируемые Соединенными Штатами или Европой. Это не означает, что Россия создает полноценную альтернативу ООН, ОБСЕ или евроатлантической архитектуре. Но это означает попытку выстроить параллельные пространства стратегического разговора.",
            "Международная безопасность обсуждается уже не только на западных площадках. Москва хочет быть принимающей стороной, модератором и центральным участником альтернативного разговора.",
          ],
        },
        {
          heading: "Российский нарратив: безопасность против гегемонии",
          paragraphs: [
            "Российский нарратив о международной безопасности строится вокруг одного центрального противопоставления: гегемония против многополярности.",
            "С точки зрения Москвы порядок, возглавляемый Западом, основан на расширении военных альянсов, санкциях, политическом давлении, информационном контроле, выборочном вмешательстве и инструментальном использовании международных норм. В ответ Россия пытается предложить альтернативное видение, основанное на суверенитете, невмешательстве, балансе сил, неделимой безопасности и уважении к различным цивилизационным моделям.",
            "Этот нарратив направлен прежде всего не на Вашингтон или Брюссель. Он обращен к странам Азии, Африки, Ближнего Востока и Латинской Америки, имеющим исторический опыт колониализма, зависимости, финансового давления или внешнего вмешательства.",
            "Российский язык стремится связать современную безопасность с более широкими проблемами: неоколониализмом, культурным суверенитетом, контролем информации, защитой традиционных ценностей, манипулированием нарративами и исторической памятью.",
            "Безопасность в таком понимании — это не только вопрос оружия. Это спор о самом смысле международного порядка.",
          ],
        },
        {
          heading: "Мировое большинство и коллективная ответственность за безопасность",
          paragraphs: [
            "Одним из самых важных понятий форума стала идея коллективной ответственности за мировую безопасность. Встреча была представлена как пространство, где страны мирового большинства признали неизбежность изменений в международных отношениях и выразили готовность участвовать в формировании новой среды на условиях равенства.",
            "Эта идея центральна для понимания российской стратегии. Москва не хочет представлять многополярную безопасность как исключительно российскую повестку. Она стремится показать ее как общий запрос развивающихся стран, требующих более широкого участия в глобальном управлении.",
            "Присутствие представителей России, Китая, Индии, Южной Африки, Бразилии, Казахстана, Вьетнама и других акторов позволило спроецировать более широкую картину: международная система уже не может управляться узкой группой западных держав. Экономическая, демографическая, технологическая и политическая сила смещается, и это изменение должно отразиться и в правилах безопасности.",
            "Этот пункт позволяет рассматривать форум как нечто большее, чем просто встречу по вопросам безопасности. Это предложение порядка: коллективная безопасность, а не безопасность за счет других; многополярность, а не однополярная иерархия; сотрудничество между площадками вроде БРИКС и ШОС, а не исключительная зависимость от западных институтов.",
          ],
          callouts: [
            "Может ли мировое большинство выстроить общую повестку безопасности, не превратившись в новую жесткую блоковую структуру?",
          ],
        },
        {
          heading: "БРИКС, мировое большинство и многополярная безопасность",
          paragraphs: [
            "Форум показал, что разговор о многополярной безопасности не ограничивается Россией. XIV международная встреча высоких представителей, отвечающих за вопросы безопасности, собрала представителей России, Китая, Индии, Южной Африки, Бразилии, Казахстана и Вьетнама, которые обсуждали формирование многополярного мира, укрепление доверия между государствами и выработку общих правил для новых технологий.",
            "Это позволяет рассматривать форум как платформу так называемого мирового большинства. Речь шла не только о российской критике западного порядка, но и о пространстве, где разные акторы представили собственные приоритеты по вопросам суверенитета, безопасности, технологий, развития и реформы международного управления.",
            "Россия продвигала повестку координации между странами Глобального Юга и Востока. Сергей Шойгу предложил укреплять центральную роль ООН, поддерживать группу друзей в защиту Устава ООН, избегать провоцирования противоречий между странами Глобального Юга и Востока, продвигать Большое Евразийское партнерство, строить архитектуру коллективной безопасности в Евразии и работать над резервами ресурсов, включая сельскохозяйственную продукцию, удобрения и углеводороды. Он также призвал не укреплять собственную безопасность за счет безопасности других государств и углублять координацию в БРИКС, ШОС и других форматах мирового большинства.",
            "Китай, через Чэнь Вэньцина, связал форум с глобальными инициативами Си Цзиньпина: развитием, безопасностью, цивилизацией и управлением. Китайская позиция отстаивала многосторонность, уважение к международному праву, пять принципов мирного сосуществования и идею сообщества общей судьбы человечества. В этой рамке Пекин стремится представить безопасность как процесс адаптации к меняющейся международной архитектуре, где традиционные и нетрадиционные угрозы должны преодолеваться через сотрудничество, а не через закрытые блоки.",
            "Индия, представленная Аджитом Довалом, сделала акцент на реформе ООН, борьбе с терроризмом и необходимости признания нового веса развивающихся экономик. Ее послание состояло в том, что власть больше не сосредоточена в небольшой группе стран и что Глобальный Юг требует равноправного участия в управлении мировыми делами. Эта позиция важна, поскольку Индия не хочет ни однополярного порядка, ни многополярности, доминируемой одним альтернативным центром. Ее ставка — на более представительную архитектуру, в которой у развивающихся держав будет реальный голос.",
            "Южная Африка связала безопасность с суверенитетом, искусственным интеллектом, кибербезопасностью, энергетикой и африканской интеграцией. Хумбудзо Нтшавхени заявила, что формирование многополярного мира открывает новые возможности для стран Глобального Юга, но эти возможности должны быть превращены в конкретные способности: модернизацию безопасности, развитие искусственного интеллекта, укрепление кибербезопасности, энергетическую безопасность и расширение экономических связей через Африканскую континентальную зону свободной торговли. Это прочтение связывает безопасность с развитием, инфраструктурой и региональной способностью Африки.",
            "Значение африканского компонента состоит в том, что эти вопросы прозвучали с необычной центральностью для форумов, обычно формируемых западной повесткой. В этом пространстве африканские страны смогли представить собственные тревоги по поводу энергетической безопасности, связности, кибербезопасности, индустриализации, региональной интеграции, продовольствия и инфраструктуры не как второстепенные темы, а как часть глобальной архитектуры стабильности. Это существенное отличие: на многих традиционных площадках Африка обычно рассматривается как объект помощи или пространство кризиса; здесь она выступает как актор, формирующий приоритеты и заявляющий о собственных возможностях.",
            "Бразилия, через Селсу Аморима, внесла ключевую идею: многополярность не должна превращаться в простое разделение мира на сферы влияния. Его подход указывает на многополярность, основанную на праве суверенных государств диверсифицировать свои союзы, защищать национальные интересы и участвовать в устойчивом развитии. Эта позиция особенно важна для Латинской Америки, потому что она не сводит многополярность к автоматическому выравниванию с одним блоком против другого.",
            "Казахстан представил современную повестку безопасности, сочетающую межгосударственные отношения, экономику, природную среду и цифровое пространство. Его предложение создать международную организацию по водной безопасности под эгидой ООН показывает, что пресная вода входит в центр стратегической безопасности. Казахстан также выступил за универсальные нормы ответственного поведения в киберпространстве и предупредил, что искусственный интеллект переходит из разряда вспомогательных инструментов в разряд активного субъекта в современных системах принятия решений и безопасности.",
            "Малайзия добавила к дискуссии технологическое измерение, предупредив, что мир, похоже, движется к разделению высоких технологий, особенно в области искусственного интеллекта. Ее предложение создать общую платформу между странами БРИКС для содействия сотрудничеству в сфере ИИ напрямую связано с обсуждением технологического суверенитета, цифровой фрагментации и закрытых технологических экосистем. В таком подходе безопасность больше не зависит только от обороны или дипломатии, а от способности сотрудничать в критических технологиях до того, как мир окончательно разделится на несовместимые системы.",
            "Это разнообразие позиций показывает, что форум был не только российской площадкой критики Запада. Он также стал пространством, где страны мирового большинства пытались вынести на первый план собственные приоритеты: реформу ООН, коллективную безопасность, ИИ, кибербезопасность, воду, энергию, региональную интеграцию, технологическое сотрудничество и многополярность без жестких сфер влияния.",
            "Потенциал существует, но он будет зависеть от способности превращать декларации в проекты, институты, нормы и практическое сотрудничество.",
          ],
          callouts: [
            "Может ли мировое большинство выстроить общую повестку безопасности, не воспроизводя новые иерархии между развивающимися державами?",
          ],
        },
        {
          heading: "Искусственный интеллект и безопасность: новое поле уязвимости",
          paragraphs: [
            "Одной из важнейших осей современной безопасности является искусственный интеллект. ИИ больше не является только экономическим или технологическим инструментом. Он становится инфраструктурой силы.",
            "ИИ может усиливать оборону, контроль границ, обнаружение угроз, анализ данных, кибербезопасность и управление кризисами. Но он также способен усиливать риски: информационные манипуляции, автоматизацию кибератак, массовое распознавание лиц, предиктивное наблюдение, автоматизированную дезинформацию, подделку изображений и видео, а также создание искусственных нарративов в крупных масштабах.",
            "Предупреждение Казахстана об ИИ как об активном субъекте отражает важный концептуальный сдвиг: искусственный интеллект больше не понимается только как вспомогательное программное обеспечение, а как фактор, способный влиять на решения, критические системы, кибербезопасность, оборону, экономику и управление.",
            "Для России, Китая, Соединенных Штатов, Европы и Глобального Юга ИИ уже стал частью архитектуры национальной безопасности. Тот, кто контролирует данные, модели, вычислительные центры, облако и аналитические системы, будет иметь преимущество не только в экономическом, но и в военном и информационном смысле.",
            "Безопасность XXI века будет зависеть не только от ракет и армий, но и от алгоритмов, спутников, данных и цифровых платформ.",
          ],
          callouts: [
            "Может ли существовать национальная безопасность без суверенитета над данными, цифровой инфраструктурой и искусственным интеллектом?",
          ],
        },
        {
          heading: "Фейковые новости, манипуляция и когнитивная война",
          paragraphs: [
            "Дискуссия об информационной безопасности занимает центральное место в российском нарративе. Москва считает, что современные войны ведутся не только на военном поле, но и в сознании обществ.",
            "Фейковые новости, дипфейки, координированные кампании в социальных сетях, эмоциональная манипуляция, использование алгоритмов для усиления нарративов и медийное вмешательство являются частью того, что можно описать как когнитивную войну.",
            "С этой точки зрения национальная безопасность включает способность защищать население от психологических операций, социальной дестабилизации, электоральных манипуляций, наведенной поляризации и утраты доверия к институтам.",
            "Такой подход не является исключительно российским. Соединенные Штаты, Европейский союз, Китай и другие акторы также разрабатывают политики для борьбы с дезинформацией, цифровой манипуляцией и рисками генеративного ИИ.",
            "Проблема в том, что борьба с дезинформацией может превратиться в дилемму: как защитить информационное пространство, не скатываясь к цензуре, чрезмерному контролю или криминализации публичной дискуссии.",
          ],
          callouts: [
            "Где заканчивается защита от манипуляции и где начинается политический контроль над информацией?",
          ],
        },
        {
          heading: "Starlink, OneWeb и спор о спутниковых системах",
          paragraphs: [
            "Форум также позволяет наблюдать ключевую тему: безопасность спутниковых систем.",
            "В последние годы платформы вроде Starlink и OneWeb показали, что низкоорбитальные спутниковые созвездия могут играть решающую роль в коммуникациях, войне, разведке, гражданской связности и чрезвычайных операциях. Но они также создают риски для государств.",
            "Спутниковая связность уже не является только гражданской инфраструктурой. Это стратегический инструмент. Она может поддерживать коммуникации во время конфликтов, помогать военным операциям, передавать информацию, соединять изолированные территории и одновременно бросать вызов способности государств контролировать собственное информационное пространство.",
            "Спор вокруг спутниковой связности станет одной из важнейших границ глобальной безопасности.",
          ],
          callouts: [
            "Кто должен контролировать спутниковую инфраструктуру, поддерживающую критически важные коммуникации: государства, частные компании или международные консорциумы?",
          ],
        },
        {
          heading: "Европа: милитаризация, миграция и кризис легитимности",
          paragraphs: [
            "С точки зрения российского нарратива Европа переживает стратегическую трансформацию. Милитаризация континента, рост военных расходов, расширение НАТО, миграционное давление и кризис социальной сплоченности подаются как признаки модели, находящейся в напряжении.",
            "Москва трактует европейскую милитаризацию как стратегическое подчинение Соединенным Штатам и как часть архитектуры конфронтации с Россией. В то же время она нередко представляет европейскую миграционную политику как внутреннее противоречие: Европа продвигает универсальные ценности, но сталкивается с трудностями интеграции мигрантов, контроля границ и поддержания общественного консенсуса.",
            "Такой подход может быть спорным с западной точки зрения, но он имеет аналитическую ценность, потому что показывает, как Россия пытается оспорить нарратив о Европе. Для Москвы европейская проблема не является только военной. Она цивилизационная, демографическая, социальная и идентификационная.",
            "Европейская безопасность в этой рамке измеряется не только танками, ракетами или военными бюджетами. Она также измеряется внутренней сплоченностью, политической легитимностью, управлением миграцией, культурной идентичностью и стратегической автономией.",
          ],
          callouts: [
            "Строит ли Европа большую безопасность или усиливает свою стратегическую зависимость и внутренние разломы?",
          ],
        },
        {
          heading: "Пропаганда, традиционные ценности и духовный спор",
          paragraphs: [
            "Российская повестка безопасности включает культурное измерение. Москва настаивает, что безопасность государств зависит также от защиты традиционных ценностей, исторической памяти, национальной идентичности и культурного суверенитета.",
            "Этот язык является частью более широкого спора. Россия представляет Запад как носителя культурных моделей, которые она считает чуждыми, индивидуалистическими или оторванными от корней, и одновременно пытается позиционировать себя как защитника традиционных ценностей, семьи, религии, исторической преемственности и цивилизационного многообразия.",
            "Этот пункт следует понимать как борьбу за легитимность. Россия обсуждает не только военную мощь. Она обсуждает, кто определяет, что является правильным, современным, приемлемым и универсальным.",
            "Для некоторых стран Глобального Юга дискурс о традиционных ценностях может звучать как защита от западной культурной унификации. Для других он может выглядеть как политический инструмент, оправдывающий внутренний контроль.",
          ],
          callouts: [
            "Является ли защита традиционных ценностей формой культурного суверенитета или инструментом политического контроля?",
          ],
        },
        {
          heading: "Пресная вода, продовольствие и биотехнологии: материальная безопасность XXI века",
          paragraphs: [
            "Международная безопасность меняется еще и потому, что материальные угрозы множатся.",
            "Доступ к источникам пресной воды, продовольствию, удобрениям, семенам, биотехнологиям, пищевым добавкам, аграрным цепочкам и общественному здравоохранению будет становиться все более важным. Климатические кризисы, рост населения, войны, санкции, торговые ограничения и санитарные риски могут превратить эти сектора в поля стратегического спора.",
            "Предложение Казахстана создать международную организацию по водной безопасности под эгидой ООН подтверждает, что пресная вода перестает быть второстепенной экологической темой и становится вопросом стратегической безопасности. Этот подход включает мониторинг трансграничных бассейнов, водосберегающие технологии и мирное разрешение водных споров.",
            "Биотехнология, в частности, имеет двойственный характер. Она может улучшать здравоохранение, производство продуктов питания, вакцины, сельское хозяйство, эпидемиологическую профилактику и адаптацию к климату. Но она также создает риски: генетические манипуляции, злоупотребление патогенами, зависимость от внешних биологических ресурсов и уязвимости в медицинских цепочках.",
            "Дроны добавляют еще один уровень сложности. Они могут использоваться для мониторинга сельского хозяйства, реагирования на стихийные бедствия, санитарного наблюдения или доставки снабжения. Но они также могут стать векторами риска, если используются для перевозки опасных веществ, загрязнения инфраструктуры или создания социальной паники. С этим риском следует работать через биобезопасность, регулирование и профилактику.",
            "Продовольственная, водная и биологическая безопасность больше не являются второстепенной повесткой. Они входят в ядро национальной безопасности.",
          ],
          callouts: [
            "Готовы ли государства к эпохе, в которой угрозы могут исходить от вирусов, данных, дронов, воды или семян не меньше, чем от обычных армий?",
          ],
        },
        {
          heading: "Глобальный Юг как основная аудитория",
          paragraphs: [
            "Форум рассчитан прежде всего не на Запад. Он рассчитан на остальной мир.",
            "Москва стремится говорить с акторами, которые не хотят оказаться зажатыми между жесткими блоками, которые хотят диверсифицировать отношения или которые не доверяют международному порядку, определяемому исключительно западными державами.",
            "Азия, Африка, Ближний Восток и Латинская Америка являются ключевыми аудиториями. Для этих пространств Россия пытается транслировать три сообщения.",
            "Во-первых, что она остается значимой державой.",
            "Во-вторых, что она может предложить сотрудничество в сфере безопасности, обороны, разведки, энергетики, продовольственной безопасности, кибербезопасности и борьбы с транснациональными угрозами.",
            "В-третьих, что многополярность может открыть пространство для маневра перед лицом структур, доминируемых Западом.",
            "Проблема в том, что многие страны Глобального Юга не хотят заменять одну зависимость другой. Они не обязательно стремятся выровняться по Москве. Они ищут варианты.",
          ],
        },
        {
          heading: "Последствия для Латинской Америки",
          paragraphs: [
            "Латинская Америка должна наблюдать за подобными форумами прагматично.",
            "Региону не нужно принимать российский нарратив или автоматически выравниваться с Москвой. Но он также не может игнорировать, что глобальная безопасность становится более плюральной. Соединенные Штаты, Китай, Россия, Европа и региональные акторы конкурируют за право определять, какие угрозы важны и какие ответы считаются легитимными.",
            "Для Латинской Америки это имеет конкретные последствия: кибербезопасность, транснациональная преступность, наркотрафик, искусственный интеллект, критическая инфраструктура, энергетика, оборона, санкции, информация, медиа, миграция, вода, продовольствие и военное сотрудничество.",
            "Если регион не определит собственные приоритеты, другие акторы определят их за него.",
            "Стратегический вопрос состоит в том, способна ли Латинская Америка выстроить автономную политику безопасности, способную разговаривать с разными центрами силы, не подчиняясь их повесткам.",
          ],
        },
        {
          heading: "Возможные сценарии",
          subsections: [
            {
              heading: "1. Консолидация альтернативных форумов безопасности",
              paragraphs: [
                "Россия сможет поддерживать подобные мероприятия, такие как Международный форум по безопасности, как регулярные платформы для незападных стран. Эти пространства не заменяют существующие глобальные институты, но предлагают параллельные каналы стратегического диалога.",
              ],
            },
            {
              heading: "2. Фрагментированная многополярная безопасность",
              paragraphs: [
                "Возникают параллельные пространства безопасности: НАТО и Европейский союз с одной стороны; Россия, Китай, ШОС, БРИКС и другие форматы с другой; а страны Глобального Юга движутся между ними без полного выравнивания.",
              ],
            },
            {
              heading: "3. Дипломатия безопасности Глобального Юга",
              paragraphs: [
                "Азия, Африка, Ближний Восток и Латинская Америка участвуют во множестве платформ, чтобы максимизировать автономию. Они не принимают единую повестку безопасности, а ведут переговоры по каждому случаю отдельно, исходя из национальных интересов.",
              ],
            },
            {
              heading: "4. Кибербезопасность, ИИ и спутники как новые поля спора",
              paragraphs: [
                "Повестка безопасности смещается в сторону данных, искусственного интеллекта, цифровых платформ, спутниковых систем, когнитивной войны, критической инфраструктуры и контроля над нарративами. Форумы по безопасности перестают быть только военными.",
              ],
            },
            {
              heading: "5. Биологическая, продовольственная и водная безопасность как стратегический приоритет",
              paragraphs: [
                "Пресная вода, продовольствие, биотехнологии, удобрения, общественное здравоохранение и биобезопасность становятся центральными полями конкуренции и сотрудничества. Государства стремятся защищать жизненно важные цепочки от климатических кризисов, конфликтов, санкций и гибридных угроз.",
              ],
            },
            {
              heading: "6. Россия как артикулятор с ограничениями",
              paragraphs: [
                "Москва сохраняет способность к координации и многополярный нарратив, но сталкивается с экономическими ограничениями, санкциями, западным давлением и растущей зависимостью от партнеров вроде Китая.",
              ],
            },
          ],
        },
        {
          heading: "Заключение",
          paragraphs: [
            "Московский Международный форум по безопасности был больше, чем встреча экспертов или чиновников. Он стал подтверждением того, что Россия закрепляется как организующий актор глобальной дискуссии о безопасности.",
            "Послание Путина, повестка Совета безопасности России и XIV встреча высоких представителей показывают ясную стратегию: Россия уже утвердила многополярную повестку безопасности, которая оспаривает само определение международной безопасности.",
            "Для России безопасность больше не может определяться исключительно Западом. Она должна включать суверенитет, невмешательство, региональную стабильность, информационную безопасность, защиту от манипуляции, традиционные ценности, борьбу с неоколониализмом, сотрудничество против транснациональных угроз и контроль над критической инфраструктурой.",
            "Но форум показал и нечто более широкое: многополярная безопасность не является исключительно российской повесткой. Китай, Индия, Южная Африка, Бразилия, Казахстан, Малайзия и другие акторы мирового большинства вынесли на стол собственные приоритеты: реформу ООН, многосторонность, борьбу с терроризмом, ИИ, кибербезопасность, воду, энергию, региональную интеграцию, новые технологии и многополярность без жестких сфер влияния.",
            "Вопрос не в том, может ли Москва заменить западную архитектуру безопасности. В одиночку — нет. Суть в том, что Россия уже запустила динамику альтернативного диалога и, если сумеет сохранить институциональную непрерывность, участие мирового большинства и связь с конкретными темами вроде ИИ, воды, продовольствия, энергии и кибербезопасности, она сможет поддерживать эту платформу как пространство переговоров, диверсификации и автономии для Глобального Юга.",
          ],
        },
        {
          heading: "Открытые вопросы",
          bullets: [
            "Строит ли Россия альтернативную архитектуру безопасности или платформу сопротивления Западу?",
            "Может ли Глобальный Юг извлечь выгоду из этих форумов, не оказавшись втянутым в соперничество великих держав?",
            "Увеличит ли многополярная безопасность автономию развивающихся стран или умножит давление на них?",
            "Может ли Латинская Америка определить собственные стратегические угрозы, не импортируя внешние повестки?",
            "Будет ли безопасность XXI века определяться больше на военном поле или через контроль над информацией, данными, биотехнологией и критической инфраструктурой?",
          ],
        },
      ],
    },
    "rusia-asean-unidad-diversidad-kazan": {
      title: "Россия и страны АСЕАН: единство в разнообразии — 35 лет вместе",
      subtitle: "Саммит Россия-АСЕАН в Казани показал, как многополярность стремится воплотиться в конкретное сотрудничество в энергетике, продовольственной безопасности, логистике, технологиях и стратегическом действии.",
      excerpt: "Представители России и стран АСЕАН собрались в Казани, чтобы углубить многомерные отношения, основанные на сотрудничестве в энергетике, продовольственной безопасности, логистике, технологиях и Всеобъемлющем плане действий на 2026-2030 годы.",
      tags: [
        "Россия",
        "АСЕАН",
        "Казань",
        "Многополярность",
        "Энергетика",
        "Продовольственная безопасность",
        "Евразия",
        "Азиатско-Тихоокеанский регион",
      ],
      bodySections: [
        {
          paragraphs: [
            "Общее стремление построить более справедливый многополярный мир, основанный на международном праве, Уставе Организации Объединенных Наций и взаимовыгодном сотрудничестве на основе взаимного уважения, собрало в Казани представителей России и стран АСЕАН. Однако важность саммита заключалась не только в его дипломатическом языке, но и в его практическом выражении: энергетика, продовольственная безопасность, логистика, технологии и Всеобъемлющий план действий по углублению стратегического партнерства между Россией и АСЕАН.",
            "В акте суверенитета и автономии страны Ассоциации государств Юго-Восточной Азии, АСЕАН, зафиксировали свое решение углублять многомерные отношения с Россией, и это отражено в Казанской декларации и прежде всего в ее «Всеобъемлющем плане действий по реализации стратегического партнерства между Российской Федерацией и Ассоциацией государств Юго-Восточной Азии (2026-2030) с целью содействия и расширения многопланового и взаимовыгодного сотрудничества».",
            "Важно подчеркнуть слова Генерального секретаря АСЕАН Као Кима Хорна, сказанные им во время Бизнес-форума АСЕАН-Россия, когда он отметил, что сегодня:",
            "«Экономическая устойчивость больше не определяется исключительно темпами роста. Она формируется энергетической безопасностью, продовольственной устойчивостью, надежностью цепочек поставок, технологическими возможностями и способностью поглощать турбулентность и потрясения, особенно в условиях все более сложной и динамичной мировой экономики».",
            "По словам секретаря, «по мере того как спрос АСЕАН на энергию продолжает расти, обеспечение надежных, доступных по цене, доступных и диверсифицированных поставок остается стратегическим императивом. Обширный опыт России в производстве энергии, развитии инфраструктуры и промышленных энергетических решениях, вместе с Евразийским экономическим союзом, хорошо позиционирует ее для поддержки региональных инициатив, таких как Энергетическая сеть АСЕАН, для которой, по оценкам, потребуется примерно 764 миллиарда долларов инвестиций. АСЕАН приветствует более активное участие российских компаний в СПГ и газовой инфраструктуре, возобновляемой энергетике, технологиях выработки электроэнергии и модернизации сетей».",
            "Говоря о продовольственной безопасности, он отметил, что она «стала экономическим, социальным и стратегическим приоритетом, а не только сельскохозяйственным. Надежный доступ к базовым продуктам, удобрениям, перерабатывающим мощностям и эффективной логистике становится все более важным для долгосрочной устойчивости».",
            "В этом смысле Генеральный секретарь АСЕАН ясно заявил, что «сильные стороны России в сельскохозяйственном производстве, поставках удобрений, агротехнологиях и логистике хорошо соответствуют растущим агропромышленным и пищеперерабатывающим секторам АСЕАН».",
            "Этот саммит вновь подтверждает тот факт, что Россия не изолирована, и что государственные лидеры этих стран, их образовательные, культурные и деловые институты понимают важность отношений с Россией, которые приносят взаимную выгоду.",
            "Примечательно, что страны подтвердили готовность продвигать отношения дружбы, взаимного доверия и уважения, а также общее видение мирного, стабильного и безопасного будущего для более широкого региона, включающего Азиатско-Тихоокеанский регион, Индийский океан и Евразию.",
            "Со своей стороны президент Филиппин Фердинанд Маркос в качестве сопредседателя саммита Россия-АСЕАН вместе с президентом России Владимиром Путиным заявил: «Нам необходимо наращивать сотрудничество в области мира и безопасности, чтобы наши совместные усилия способствовали миру и безопасности и своевременно отвечали на все угрозы».",
            "Во время основного мероприятия саммита 18 июня были подписаны несколько документов: Казанская декларация; Всеобъемлющий план действий на 2026-2030 годы; совместная декларация по энергетике.",
            "Отношения между Россией и АСЕАН восходят к 1991 году, а в 2018 году, во время саммита в Сингапуре, стороны повысили свои связи до уровня стратегического партнерства. Это показывает прочность и устойчивость этих отношений в «контексте все более сложных глобальных вызовов, возникающих из геополитических и геоэкономических изменений».",
            "В то время как во Франции на саммите G7 его лидеры били в барабаны войны, с другой стороны Саммит Россия-АСЕАН показывает нам, что необходимо говорить о сотрудничестве и дипломатии, чтобы вместе преодолевать проблемы и добиваться лучших дней для граждан этих стран.",
          ],
        },
        {
          heading: "Открытые вопросы",
          paragraphs: [
            "Действительно ли многополярность строится через политические декларации или через инфраструктуру, энергетику, продовольствие и технологии?",
            "Сможет ли АСЕАН сохранить свою стратегическую автономию на фоне одновременной конкуренции США, Китая, России, Японии и Индии?",
            "Станет ли энергетическая сеть АСЕАН новой архитектурой региональной силы?",
            "Чему Латинская Америка может научиться у региона, который стремится диверсифицировать партнеров, не попадая в логику блоков?",
          ],
        },
        {
          heading: "Источники",
          paragraphs: [
            "1. Казанская декларация 2026<br>https://asean.org/wp-content/uploads/2026/06/Kazan-Declaration-2026.pdf<br>http://kremlin.ru/supplement/6516",
            "2. ASEAN — Ассоциация государств Юго-Восточной Азии. АСЕАН была создана в 1967 году и включает 11 стран: Бруней, Камбоджу, Филиппины, Индонезию, Лаос, Малайзию, Мьянму, Сингапур, Таиланд и Вьетнам.<br>https://asean.org/",
            "3. Secretary-General of ASEAN delivers opening remarks at the ASEAN-Russia Business Forum 2026 in Kazan<br>https://asean.org/secretary-general-of-asean-delivers-opening-remarks-at-the-asean-russia-business-forum-2026-in-kazan/",
            "4. Russia-ASEAN<br>https://www.russia-asean.com",
            "5. Comprehensive Plan of Action to Implement ASEAN-Russian Federation Strategic Partnership 2026-2030<br>https://asean.org/comprehensive-plan-of-action-to-implement-asean-russian-federation-strategic-partnership-2026-2030/",
            "6. Kremlin<br>http://kremlin.ru/events/president/news/80057",
          ],
        },
      ],
    },
    "el-mundo-multipolar-el-paradigma-que-avanza-y-se-fortalece-con-el-brics": {
      title: "Многополярный мир: парадигма, которая продвигается и укрепляется с БРИКС",
      subtitle: "БРИКС укрепляет альтернативную рамку сотрудничества, суверенитета и глобального управления для расширяющегося многополярного мира.",
      excerpt: "Два десятилетия спустя БРИКС уже не просто новая аббревиатура: это архитектура сотрудничества, продвигающая национальные валюты, технологический суверенитет, продовольственную безопасность, энергетику и новые пространства принятия решений для Глобального Юга.",
      tags: [
        "БРИКС",
        "Многополярность",
        "Глобальный Юг",
        "Нью-Дели",
        "Суверенитет",
        "Технологии",
        "Энергетика",
      ],
      bodySections: [
        {
          paragraphs: [
            "Двадцать лет назад мир не представлял, что переживет столько преобразований. Самое обнадеживающее изменение, открывающее для человечества ощутимые и серьезные перспективы, — это существование, устойчивость, углубление и расширение БРИКС.",
            "Прошли два десятилетия, и страны, входящие в БРИКС, теперь торгуют в собственных валютах, а их транзакции больше не находятся под абсолютной опекой доллара. Страны активно используют взаимные расчеты в национальных валютах, а некоторые превышают 80 %, потому что поняли: чтобы быть суверенными, необходимо выйти из-под контроля своих транзакций, которые до недавнего времени находились под абсолютным наблюдением Соединенных Штатов.",
            "Россия и Китай с избытком продемонстрировали свою способность к устойчивости в обстоятельствах, когда держава, еще недавно доминировавшая, действует с абсолютным насилием, поскольку она смертельно ранена, и это делает ее более опасной.",
            "Верно, однако, что риски санкций и вторичных санкций (незаконных, вне рамок ООН) существуют, но БРИКС и его союзники показали, что могут менять эти правила игры. Можно твердо сказать, что мир, еще недавно подчиненный доллару, теперь имеет новые альтернативы.",
            "Но еще более обнадеживающим и реальным результатом в БРИКС является то, что социальная, деловая, университетская, институциональная и государственная ткань углубляется день за днем.",
            "Саммит БРИКС в Нью-Дели, его декларация и различные выступления лидеров выходят за рамки дискурса: эти 20 лет существования альянса с избытком показали его способность вести, моделировать и предлагать миру новую парадигму. Декларация Нью-Дели и, особенно, речи лидеров были в этом отношении ясны.",
            "Хозяин саммита БРИКС Нарендра Моди понимает, что импульс, достигнутый альянсом, должен продолжить свой путь, и обратился к нынешней пирамиде принятия решений в глобальном управлении, где Глобальный Юг, находящийся у основания пирамиды, не принимает решений, но глубоко затронут ими и, что еще хуже, не может влиять на эти решения. Он предложил сформировать в рамках БРИКС дорожную карту для преобразования этой пирамиды, где развитие человечества будет в центре каждого усилия ради более инклюзивного и процветающего мира.",
            "Этот более инклюзивный и процветающий мир — задача не только БРИКС, это задача всех.",
            "Вызовы, которые ставят перед нами лидеры БРИКС, подразумевают во всех сферах углубление отношений взаимного уважения, расширение сетей сотрудничества для решения вызовов и проблем, не имеющих границ. Это будет достигнуто только при более активном вовлечении государственных лидеров и гражданского общества в целом в странах Глобального Юга.",
            "Если мы хотим жить в мире, где есть место всем и где у всех есть достойная жизнь, абсолютно приоритетно преодолеть редукционизм воинственной, энергоемкой глобалистской модели, которая через свои социальные сети опустошает умы миллионов посредством механизмов алгоритмической манипуляции.",
            "Здесь стоит вспомнить книгу The Technological Republic: Hard Power, Soft Belief, and the future of the West Александра К. Карпа и Николаса Замиски. Карп, являющийся CEO Palantir Technologies, делает ставку на то, что «его республика», то есть Соединенные Штаты, добьется победы своих целей с помощью программ и искусственного интеллекта на войне. Кстати, Palantir в настоящее время предоставляет эти элементы для разрушения не только в Палестине, но и против лидеров в других странах.",
            "Неправильное использование искусственного интеллекта и в целом цифровых технологий уже является не только угрозой, но и суровой реальностью; по этой причине его нельзя недооценивать. БРИКС признает преимущества цифровых технологий для улучшения качества жизни людей и управления странами; тем не менее он предупреждает об опасностях и для этого создал институт по изучению сетей будущего, а специалисты обсуждали эту тему на цифровом форуме БРИКС.",
            "Еще одна ключевая актуальная тема в мире — здоровье. В то время как агонизирующая держава и ее последователи заняты войнами и разработкой программ для господства над миром, совокупность лидеров БРИКС заботится о вопросах здравоохранения, которые затрагивают миллионы людей за пределами их альянса и должны быть решены. Таков случай туберкулеза. Это не второстепенная тема, поскольку она влияет на здоровье, экономику пострадавших людей и общественное здоровье в целом.",
            "Две ключевые темы среди 140 пунктов декларации Нью-Дели — продовольственная безопасность и энергетическая безопасность. Для этого БРИКС создал механизмы их гарантирования и продолжает улучшать сотрудничество. Это еще более важно в нынешней ситуации, когда агонизирующая держава военным путем нападает, убивает, угрожает, вымогает и похищает, чтобы захватить ресурсы.",
            "Здесь также следует подчеркнуть одно из заметных событий саммита, прошедшего в Нью-Дели с 11 по 13 сентября 2026 года, а именно овацию, которую получил президент России Владимир Путин при входе на бизнес-форум БРИКС.",
            "Аплодисменты и эмоции присутствующих можно оценить как признание мужества и суверенитета России в целом. Россия никогда не уходила из пространств международного диалога, но предпринимались серьезные попытки аннулировать и унизить ее. Этот этап завершился. Россия вместе со странами БРИКС+ и их союзниками является маяком, который может и должен вести к этой парадигме, называемой многополярным миром.",
          ],
        },
      ],
    },
    "informe-mercado-de-alternativas-rusia-africa-2026": {
      title: "Рынок альтернатив: что саммит Россия–Африка говорит о новом мировом порядке",
      subtitle: "Россия превратила безопасность, продовольствие и атомную энергетику в дипломатический капитал в Африке. Континент, в свою очередь, превратил соперничество держав в пространство для переговоров.",
      tags: [
        "Саммит Россия–Африка 2026",
        "Россия в Африке",
        "Африканский союз",
        "Африканский корпус",
        "удобрения и Ормуз",
        "Росатом",
        "многополярность",
        "Латинская Америка",
      ],
      bodySections: [
        {
          heading: "Краткое резюме",
          paragraphs: [
            "Третий саммит Россия–Африка (Москва, 28–29 октября 2026 года) подтвердил, что Россия не изолирована на континенте, но и показал пределы её возможностей. Москва сосредоточивает своё влияние на трёх активах: безопасности, продовольствии и атомной энергетике. Все три дают ей политический вес, но ни один не отвечает в полной мере на главный запрос Африки — капитал для индустриализации. Двусторонняя торговля, около 27 млрд долларов, составляет менее десятой части объёма торговли Африки с Китаем или с Европейским союзом. Ормузский кризис временно усиливает аграрное преимущество России, но это преимущество зависит от чужого конфликта и может исчезнуть вместе с ним. Больше всех в Москве выиграла не Россия, а Африканский союз, который всё чаще ведёт переговоры единым блоком.",
          ],
        },
        {
          heading: "Тезис",
          paragraphs: [
            "Московский саммит следует понимать скорее как проявление рынка альтернатив, чем как консолидацию блока. Россия продаёт то, что может предложить её экономика, а африканские государства покупают это как ещё один вариант, а не как присоединение к лагерю. Устойчивость российского присутствия будет зависеть не столько от её дипломатического капитала, сколько от способности финансировать развитие.",
          ],
        },
        {
          heading: "Вступление",
          paragraphs: [
            "28 и 29 октября в Большом Кремлёвском дворце прошёл третий саммит Россия–Африка под девизом «За мир, безопасность и развитие». В нём участвовали делегации 48 из 54 стран континента и 21 глава государства — по подсчёту самого Владимира Путина; Кремль объявлял о 22. Сопредседателем саммита выступил Эварист Ндайишимие, президент Бурунди и действующий председатель Африканского союза. Важно подчеркнуть динамику этой цифры: 43 главы государств в Сочи в 2019 году, всего 17 в Санкт-Петербурге в 2023 году и частичное восстановление в 2026 году. Спад 2023 года отражал политическую цену поездки в Москву в первый полный год войны на Украине и после выхода России из черноморской зерновой сделки. Нынешнее восстановление говорит о том, что эта цена снизилась, но не исчезла.",
            "Официальная риторика настаивала на многополярном порядке, основанном на суверенитете и взаимной выгоде. Однако для стратегического анализа важен другой вопрос: что на самом деле предлагает каждая сторона, какими возможностями она располагает и какую часть объявленного можно проверить. Следующие разделы рассматривают этот вопрос в четырёх измерениях: экономическом, военно-политическом, продовольственно-энергетическом и институциональном африканском.",
          ],
        },
        {
          heading: "Арифметика асимметричных отношений",
          paragraphs: [
            "По словам Путина, товарооборот между Россией и Африкой в 2025 году превысил 27 млрд долларов, что на 50 % больше, чем в 2023 году. Министерство экономического развития России прогнозирует его рост в 1,5–2 раза к 2030 году, то есть до 40,5–54 млрд. Это цифры реального роста, но их стоит рассматривать в перспективе. Цель в 40 млрд, объявленная в Сочи на 2024 год, не была достигнута, а новый прогноз повторяет эту цифру с опозданием на шесть лет. За тот же период торговля Африки с Китаем достигла около 348 млрд долларов (2025), а с Европейским союзом — около 355 млрд евро (2024). Это показывает, что Россия — политический игрок первого ряда на континенте, но экономический партнёр второго ряда.",
            "Структура торговли обнаруживает асимметрию более глубокую, чем её объём. В 2023 году нефть, нефтепродукты, пшеница и металлы составили 90 % российского экспорта в Африку, тогда как российские закупки были сосредоточены на фруктах, какао и кофе. В результате Россия имеет профицит более 10 млрд долларов в год. К этому добавляется сильная географическая концентрация: на Египет приходится около 30 % всего товарооборота. Для большинства африканских стран Россия — поставщик базовых товаров, а не рынок для их экспорта и не источник производственных инвестиций.",
            "Финансовое измерение дополняет картину. Путин заявил, что 85 % торговых расчётов уже ведутся в национальных валютах, а другие источники оценивают долю рубля в операциях с Африкой в 84 %. Отключение России от SWIFT в 2022 году вынудило её выстроить альтернативные каналы: российскую систему передачи финансовых сообщений, китайскую CIPS, криптоактивы и платёжных агентов вроде A7, работающей в Нигерии и Зимбабве. Однако эти контуры навязывают африканским импортёрам двойную конвертацию валют, волатильность рубля и риск вторичных санкций. Поэтому ряд финансовых организаций континента отказывается проводить платежи, связанные с Россией. Примечательно, что дедолларизация российско-африканской торговли не превратилась в финансовую автономию Африки: во многих случаях риск просто переместился в её банки.",
          ],
        },
        {
          heading: "Безопасность в обмен на ресурсы",
          paragraphs: [
            "Если торговля показывает пределы России, то безопасность показывает её сравнительное преимущество. В 2020–2024 годах Россия обеспечила 21 % африканского импорта основных видов вооружений — больше, чем любой другой поставщик. «Рособоронэкспорт» имеет соглашения о военно-техническом сотрудничестве с 46 странами континента и, по данным, которые приводит teleSUR, с 2023 года подписал около 150 контрактов на сумму более 20 млрд долларов. После того как «Вагнер» перестал существовать как самостоятельная структура, оперативным инструментом этого присутствия в Мали, Буркина-Фасо, Нигере и Центральноафриканской Республике стал Африканский корпус, подчинённый Министерству обороны.",
            "Российскую модель отличает логика обмена. Защита уязвимых правительств увязывается с доступом к стратегическим ресурсам: золотоаффинажный завод в Мали с контрольным пакетом у малийского государства; бокситовые рудники «Русала» в Гвинее; новый меморандум с Ганой о добыче и переработке бокситов и переговоры об уране Нигера, где спор о продаже запасов до сих пор не урегулирован. В этом смысле безопасность служит для Москвы разменной монетой в условиях, когда её возможности финансировать инвестиции ограничены.",
            "Эффективность этой модели, однако, спорна. В Сахеле вооружённые группировки продолжают нападения, а Human Rights Watch обвинила бойцов Африканского корпуса в убийствах мирных жителей и пытках задержанных в Мали. Бывший российский офицер Сергей Елединов предложил показательную трактовку: военная поддержка позволяет правительствам выжить, но порождает не лояльность, а варианты. Режимы Сахеля используют российскую защиту, чтобы выиграть время и пространство для манёвра в отношениях с другими партнёрами, а не чтобы подчиниться.",
            "Саммит стремился распространить эту модель за пределы Сахеля. Итоговая декларация предложила постоянный диалог высокого уровня по борьбе с терроризмом, а Путин предложил посредничество между Эфиопией и Эритреей, лидеры которых присутствовали в Москве. Цель — чтобы Россия превратилась из поставщика оружия в регионального арбитра на Африканском Роге, где она конкурирует с Турцией, странами Залива и Западом.",
          ],
        },
        {
          heading: "Ормуз, зерно и атом: преимущество с ограниченным сроком",
          paragraphs: [
            "Саммит совпал с внешним шоком, который укрепил позиции России. Война с Ираном, начавшаяся в конце февраля 2026 года, держит почти закрытым Ормузский пролив, через который проходит около трети мировой морской торговли удобрениями. По данным Всемирного банка, только в марте карбамид подорожал на 53,7 %, до 725,6 доллара за тонну, а в среднем за 2026 год банк прогнозирует рост почти на 60 %. На континенте, где более половины населения зависит от сельского хозяйства и где сокращение внесения удобрений в одном сезоне оборачивается меньшим урожаем в следующем, этот шок не только торговый: он затрагивает продовольственную безопасность.",
            "Президент Путин заявил, что экспорт удобрений в Африку вырос примерно с 1,5 млн тонн в 2025 году до более чем 2,2 млн в текущем 2026 году, а поставки зерна за девять месяцев достигли 13 млн тонн после более чем 18 млн в 2025 году. Россия выигрывает от войны в Заливе дважды: за счёт доходов от цен на нефть и за счёт политической ценности своего аграрного предложения. Тем не менее это преимущество конъюнктурное. Оно зависит от конфликта, который Москва не контролирует, а возможное открытие Ормуза, которое сейчас прорабатывается при посредничестве Катара между Вашингтоном и Тегераном, вернуло бы на рынок удобрения из стран Залива. Кроме того, Египет и Алжир, африканские производители азотных удобрений, могли бы покрыть часть спроса при наличии финансирования и логистики.",
            "Атомная энергетика, напротив, даёт влияние на более длительную перспективу. АЭС «Эль-Дабаа», которую «Росатом» строит в Египте, включает четыре реактора по 1200 МВт, которые будут обеспечивать около 10 % электроэнергии страны. Её стоимость оценивалась в 28,75 млрд долларов, в основном за счёт российского государственного кредита, а первый энергоблок должен быть введён в эксплуатацию в 2028–2029 годах. Важно отличать этот проект — единственный, который реально строится, — от меморандумов и рабочих групп, подписанных с другими странами, как, например, объявленный в Москве с Того. Атомная станция создаёт отношения на несколько десятилетий, охватывающие топливо, обслуживание, подготовку специалистов и обращение с отходами. Для России это самая долговечная форма влияния, которую она может предложить; для принимающей страны — технологическая и финансовая зависимость, условия которой стоит обсуждать с самого начала. Египетский случай дополняет Российская промышленная зона в районе Суэцкого канала, согласованная в 2018 году на 50 лет, девелопер которой был выбран лишь в июле 2026 года. Разрыв между соглашением и его реализацией иллюстрирует темп российского экономического сотрудничества.",
          ],
        },
        {
          heading: "Африканская стратегия: переговоры единым блоком",
          paragraphs: [
            "Анализ, сосредоточенный исключительно на России, упустил бы игрока, который больше всех расширил своё пространство в Москве, — Африканский союз. В июле Комиссия АС и МИД России договорились в Аддис-Абебе институционализировать ежегодные политические консультации и пересмотреть план действий на 2023–2026 годы, чтобы выявить пробелы до принятия нового. На саммите председатель Комиссии Махмуд Али Юсуф и министр иностранных дел Сергей Лавров подписали план действий на 2027–2029 годы, охватывающий 19 направлений сотрудничества. По данным самой Комиссии, это рамочный документ, который не создаёт прав и обязательств по международному праву. Таким образом, АС получает структурированный канал взаимодействия с Москвой, не беря на себя обязывающих обязательств.",
            "Африканская риторика была столь же точной. «Мы можем сами выбирать себе партнёров», — заявил Ндайишимие, подчеркнув, что любое внешнее партнёрство должно укреплять АС и его региональные экономические сообщества. Юсуф, в свою очередь, выдвинул три требования: переработка ресурсов на месте, более справедливый доступ к рынкам капитала и равноправное представительство в Совете Безопасности. Это показывает, что континент приезжает в Москву в поисках ещё одной альтернативы, которая повышает цену безразличия для Китая, Европейского союза и Соединённых Штатов.",
            "У этой стратегии есть национальные оттенки. Для хунт Сахеля отношения с Россией — гарантия выживания; Египет использует их как путь к энергетике и промышленности; а экономики, сильнее интегрированные в западные рынки, такие как Кения, Гана или ЮАР, участвуют, чтобы не закрывать двери, не ставя под угрозу свой доступ к финансированию. Повестка-2063 и Африканская континентальная зона свободной торговли, уже ратифицированная 50 из 54 подписантов, дают критерий, по которому континент может оценивать эти отношения: не какая держава наращивает влияние, а какое партнёрство способствует интеграции, индустриализации и созданию местного потенциала. Предел этой стратегии — сплочённость: способность вести переговоры единым блоком сосуществует с реальностью двусторонних соглашений, в которых каждое государство договаривается отдельно и нередко в невыгодном положении.",
          ],
        },
        {
          heading: "Взгляд из Латинской Америки",
          paragraphs: [
            "Африканский пример служит для Латинской Америки непосредственным зеркалом. Российская модель сотрудничества, сочетающая государственные компании, стратегические ресурсы, государственное финансирование и политическую близость, — та же, что Uranium One, дочерняя компания «Росатома», применила к боливийскому литию. Её контракт предусматривает производство 14 000 тонн карбоната лития в год на солончаке Уюни методом прямой экстракции. Этот контракт, как и подписанный с китайской CBC, не был одобрен Законодательной ассамблеей и сейчас пересматривается правительством Родриго Паса, которое одновременно восстанавливает отношения с США. Это показывает, что сотрудничество, основанное на идеологической близости, обратимо: то, что одно правительство подписывает из симпатии, другое может пересмотреть по той же причине.",
            "Урок Африки состоит в том, что стратегическая автономия заключается не в замене одного доминирующего партнёра другим, а в одновременных переговорах с несколькими — по собственным правилам и, по возможности, единым блоком. Для стран с критически важными ресурсами, таких как Боливия с её литием, это означает прозрачные контракты, условия о местной индустриализации и институциональное одобрение, которое переживёт смену правительства.",
          ],
        },
        {
          heading: "Сценарии и индикаторы",
          paragraphs: [
            "В краткосрочной перспективе наиболее вероятный сценарий — преемственность с корректировками. Пока Ормуз остаётся ограниченным, российское аграрное предложение сохранит политическую ценность, а товарооборот может вырасти до 30 млрд долларов без изменения своей структуры. Индикаторы для отслеживания — цена карбамида, объёмы российских удобрений, поставляемых в Восточную и Западную Африку, и ход катарского посредничества между Вашингтоном и Тегераном.",
            "В среднесрочной перспективе открываются два пути. На первом соглашение по Украине высвободило бы военные ресурсы, и Москва расширила бы присутствие Африканского корпуса на Африканский Рог или Гвинейский залив. Это обострило бы конкуренцию с Западом, Турцией и странами Залива. Массированные удары по украинской энергосистеме говорят о том, что до выполнения этого условия ещё далеко; индикаторами станут новые оборонные соглашения, развёртывания и итог посредничества между Эфиопией и Эритреей. На втором пути — пути структурного предела — нехватка финансирования не позволяет реализовать большинство соглашений, оценка плана на 2027–2029 годы воспроизводит пробелы предыдущего, а российское влияние сосредоточивается в Египте и в ядре Сахеля, тогда как Китай, Европейский союз, Индия и страны Залива забирают африканский спрос на инвестиции. Здесь индикаторы — физический прогресс «Эль-Дабаа» и промышленной зоны в Суэце, публикация текстов и оценок плана действий и динамика голосования африканских стран в ООН.",
            "Менее вероятный, но значимый сценарий — финансовая фрагментация: платёжный контур на основе рубля, CIPS и агентов вроде A7, который закрепляется в узкой группе стран, тогда как банки более интегрированных экономик его избегают. Его индикатором станет появление вторичных санкций против африканских посредников.",
          ],
        },
        {
          heading: "Ограничения анализа",
          paragraphs: [
            "Этот доклад не утверждает, что Россия вытесняет Китай или Запад из Африки, и не утверждает, что участие в саммите равнозначно политическому присоединению. Его аргумент уже: Россия занимает реальную нишу в сфере безопасности, продовольствия и атомной энергетики, но её экономические возможности не дотягивают до её ожиданий. Основных ограничений три. Данные о торговле, зерне, удобрениях и платежах получены в основном из официальных российских источников без независимой проверки.",
          ],
        },
        {
          heading: "Заключение",
          paragraphs: [
            "Третий саммит Россия–Африка точно показал, что многополярность действительно существует: это рынок альтернатив, на котором каждая держава предлагает то, что у неё есть, а каждое африканское государство берёт то, что ему полезно. Россия приходит на этот рынок с ценными, но ограниченными продуктами — безопасностью, зерном, удобрениями и реакторами — и без того, на что спрос выше всего: капитала, открытых рынков и промышленности. Поэтому она незаменима для некоторых режимов и полезна для многих правительств, но не занимает центрального места в проекте развития континента.",
            "Пока на других площадках обсуждают, как сдержать российское влияние на Глобальном Юге, саммит выдвинул на первый план африканский блок. Если Африканскому союзу удастся вести переговоры единым блоком с Москвой, Пекином, Брюсселем и Вашингтоном, многополярность может превратиться в переговорную силу; если каждое государство будет договариваться отдельно, она останется рынком, на котором самый слабый покупатель платит дороже всех. Настоящая проверка партнёрства начинается сейчас, когда дипломатические обязательства должны превратиться в экономические результаты.",
          ],
        },
        {
          heading: "Открытые вопросы",
          bullets: [
            "Что произойдёт с российским влиянием в Африке, если Ормуз откроется и удобрения из стран Залива вернутся на рынок?",
            "Хватит ли Африканскому союзу сплочённости, чтобы вести переговоры единым блоком со всеми державами, или возобладают двусторонние соглашения?",
            "Какие институциональные гарантии нужны Латинской Америке, чтобы её соглашения о стратегических ресурсах переживали смену правительств?",
          ],
        },
        {
          heading: "Источники",
          paragraphs: [
            "1. <a href=\"http://en.kremlin.ru/events/president/news/81113\" target=\"_blank\" rel=\"noopener\">Kremlin — Third Russia–Africa Summit (29 oct 2026)</a>",
            "2. <a href=\"https://au.int/sites/default/files/20260707%20Final%20approved%20Joint%20Statement%20AU-Russia%20High-Level%20Consultations%20CLEAN.pdf\" target=\"_blank\" rel=\"noopener\">Unión Africana — Joint Statement AU–Russian Federation High-Level Consultations (7 jul 2026)</a>",
            "3. <a href=\"https://www.fertilizerdaily.com/20260623-world-bank-warns-fertilizer-prices-could-surge-more-than-30-in-2026-if-hormuz-disruption-persists/\" target=\"_blank\" rel=\"noopener\">Banco Mundial — Commodity Markets Outlook, abr 2026 (vía Fertilizer Daily)</a>",
            "4. <a href=\"https://www.chathamhouse.org/2026/10/russia-africa-summit-moscow-engaging-more-africa-its-delivery-limited\" target=\"_blank\" rel=\"noopener\">Chatham House — Russia–Africa Summit: Moscow is engaging more with Africa, but its delivery is limited</a>",
            "5. <a href=\"https://www.riotimesonline.com/burundi-president-co-chairs-moscow-russia-africa-summit/\" target=\"_blank\" rel=\"noopener\">The Rio Times — Burundi president co-chairs Moscow Russia-Africa summit (30 oct)</a>",
            "6. <a href=\"https://www.aljazeera.com/news/2026/10/28/russia-africa-summit-what-is-on-the-agenda-and-why-does-it-matter\" target=\"_blank\" rel=\"noopener\">Al Jazeera — Russia-Africa Summit: What is on the agenda, and why does it matter? (28 oct)</a>",
            "7. <a href=\"https://aljazeera.com/features/2026/10/29/wagners-shadow-looms-as-russia-reshapes-african-military-alliances\" target=\"_blank\" rel=\"noopener\">Al Jazeera — What does Russia really offer Africa? (29 oct)</a>",
            "8. <a href=\"https://www.deccanchronicle.com/amp/opinion/columnists/gurjit-singh-i-russias-africa-summit-is-a-win-but-no-breakthrough-2001522\" target=\"_blank\" rel=\"noopener\">Deccan Chronicle — Gurjit Singh: Russia’s Africa Summit Is A Win, But No Breakthrough (3 nov)</a>",
            "9. <a href=\"https://www.telesurtv.net/tercera-cumbre-rusia-africa-multipolar/\" target=\"_blank\" rel=\"noopener\">teleSUR — Moscú recibe al continente como pilar del mundo multipolar</a>",
            "10. <a href=\"https://www.bloomberglinea.com/latinoamerica/bolivia/el-nuevo-gobierno-de-bolivia-quiere-reescribir-las-reglas-del-litio-en-plena-crisis-economica/\" target=\"_blank\" rel=\"noopener\">Bloomberg Línea — El nuevo gobierno de Bolivia quiere reescribir las reglas del litio</a>",
            "11. <a href=\"https://eju.tv/?p=4790558\" target=\"_blank\" rel=\"noopener\">eju.tv — Contratos de litio con Rusia y China</a>",
          ],
        },
      ],
    },
    "ueno-bank-el-banco-que-derribo-a-un-presidente": {
      title: "UENO BANK: банк, который сверг президента",
      subtitle: "Крах банка с наибольшим числом клиентов в Парагвае был не просто финансовым банкротством. Он показал, что происходит, когда банк, тот, кто должен его контролировать, и политическая власть связаны между собой, и за четыре дня стоил Сантьяго Пеньи президентского поста.",
      tags: [
        "UENO BANK",
        "Парагвай",
        "Сантьяго Пенья",
        "Центральный банк Парагвая",
        "банковский кризис",
        "импичмент",
        "финтех в Латинской Америке",
        "Педро Альяна",
      ],
      bodySections: [
        {
          paragraphs: [
            "Вечером 2 ноября совет директоров Центрального банка Парагвая (BCP) единогласно проголосовал за начало процедуры урегулирования UENO BANK, убедившись, что его показатель достаточности капитала упал ниже половины установленного законом минимума. Объявление прозвучало в ночь на 3 ноября: приложение, карты и счета примерно 2,9 млн клиентов — около 60 % взрослого населения страны — были заблокированы. Через четыре дня Сенат отстранил от должности президента Сантьяго Пенью, который оказался под домашним арестом, а вице-президент Педро Альяна уже принёс присягу. Однако важнее скорости развязки вопрос, который она оставляет: как банк с такими серьёзными проблемами смог так вырасти, так быстро и под такой защитой?",
            "Истоки группы очень далеки от образа цифрового банка. В 1984 году Виктор Уго Васкес основал Credicentro — небольшую ссудную контору на Mercado 4 в Асунсьоне, крупнейшем народном рынке столицы, в том же помещении, где его мать вела торговлю с 1956 года. Примечательно, что менее чем за одно поколение эта кредитная стойка превратилась в банк с наибольшим числом клиентов в стране.",
            "История UENO подытоживает десятилетие финтеха в Латинской Америке. В 2021 году, после того как BCP заблокировал первую попытку слияния, Grupo Vázquez купила 65 % Financiera El Comercio, старейшей финансовой компании страны, и использовала её для поглощения собственной Credicentro, акционером которой Сантьяго Пенья был с 2019 года. В 2022 году компания стала брендом UENO, в 2023-м получила банковскую лицензию, а в 2024-м поглотила Visión Banco. К концу 2025 года на неё приходилось 8,9 % депозитов системы, и она была первой в стране по числу клиентов. В марте 2026 года банк разместил международные облигации на 350 млн долларов — крупнейший выпуск в истории парагвайских банков — и привлёк в качестве миноритарного акционера венгерский банк OTP. Важно подчеркнуть, что финансовая доступность была реальной: по данным самого банка, более миллиона человек открыли в нём свой первый счёт. Именно поэтому крах имел беспрецедентные социальные последствия для страны.",
            "У этого роста был очень заметный двигатель — кешбэк. Опубликованные самим банком условия акций показывают, что с 2024 года UENO возвращал 50 % первой покупки по своей кредитной карте — акция продлевалась снова и снова как минимум до августа 2026 года, — а кампании вроде «Día u» 5 ноября 2025 года распространяли эти 50 % на клиентов всех уровней. Во время «UENO black shopping week» 2024 года банк вернул новым клиентам половину стоимости всех покупок. В 2025 году он пообещал вернуть 100 % расходов по карте Albirroja, если сборная выиграет оба своих матча, и даже предлагал скидки до 40 % на топливо. По свидетельствам, собранным аргентинской La Nación, за несколько дней до вмешательства регулятора банк всё ещё предлагал кешбэк 50 % тем, кто замораживал на счёте 10 млн гуарани. Нынешний председатель BCP Хорхе Шрайнер признал, что регулятор ошибся, допустив банк с «безумными акциями», и заявил, что ещё в 2023 году предсказывал его крах. Важно подчеркнуть, что терять деньги ради привлечения клиентов — обычная стратегия финтех-компаний. Тем не менее это показывает, в какой мере рост UENO был куплен за деньги, и заставляет спросить, кто на самом деле платил за эти подарки.",
            "Проблема была не в технологиях, а в балансе. По данным прокуратуры и BCP, UENO чрезмерно кредитовал компании собственной контролирующей группы. В июне 2026 года, когда надзорный орган потребовал избавиться от этих кредитов, банк передал портфель на 74,4 млн долларов компании Vinanzas S.A. — связанному лицу, которое, по словам следователей, косвенно финансировалось средствами того же банка. Это знакомая схема: риск не исчезал, а лишь перемещался, чтобы не отражаться в показателях. Когда BCP скорректировал финансовую отчётность, реальная платёжеспособность банка стала очевидной.",
            "Банковский кризис превратился в государственный из-за связей между банком и властью. Пенья был акционером контролирующей компании до марта 2025 года. Карлос Карвальо возглавлял Financiera UENO до июля 2023 года, а затем перешёл на пост главы Центрального банка — того самого органа, который должен был её контролировать. Кроме того, UENO управлял примерно 850 млн долларов государственных структур, включая депозиты Института социального обеспечения (IPS), который, по данным расследования газеты ABC Color, смягчил свои внутренние правила в 2023–2024 годах. А Фернандо Риварола, начальник управления надзора BCP, предупреждавший об операциях банка, был отстранён от должности. В этом смысле речь идёт не о надзорном органе, который не заметил проблему, а о структуре, в которой надзор был неудобен.",
            "Финансовая реакция была быстрой. 4 ноября Конгресс принял закон 7745, ускоряющий выплаты из Фонда гарантирования вкладов в размере до 40 минимальных зарплат на вкладчика — около 19 800 долларов. К 9 ноября 93,1 % клиентов уже получили гарантированные средства, а Moody's оценивает, что 97 % вкладчиков будут покрыты полностью. Однако эта цифра скрывает другую: по данным того же агентства, около 40 % депозитов, не считая государственных, превышают сумму покрытия. Фонд защищает большинство людей, но не большинство денег. Компании, пенсионные фонды и само государство теперь зависят от того, что удастся вернуть в ходе ликвидации.",
            "Политическая реакция была ещё более резкой. Пенья подал в отставку 5 ноября, но Конгресс её не принял. Если бы отставка была принята, Пенья стал бы пожизненным сенатором с иммунитетом. Статья 189 Конституции исключает из этой должности тех, кто был осуждён в порядке импичмента. За обвинение проголосовали депутаты его собственной партии «Колорадо», бывший президент Орасио Картес лишил его поддержки, и 6 ноября Сенат отстранил его от должности за ненадлежащее исполнение обязанностей: 44 голоса «за» при одном отсутствующем. По словам депутата-обвинителя Росио Вальехо, Пенья «создал дыру в 1,2 млрд долларов» — цифра, которая пока не подтверждена официально. Через несколько минут прокуратура распорядилась задержать его и Карвальо по обвинению в злоупотреблении доверием. Защита утверждает, что импичмент недействителен, поскольку президент уже подал в отставку. Этот юридический спор не закрыт.",
            "Примечательно, что финансовая система выдержала удар лучше, чем политический класс. За восемь дней гуарани потерял около 12 % к доллару, а спред по суверенным облигациям вырос примерно на 25 базисных пунктов. Тем не менее Moody's (Baa3) и S&P (BBB-) сохраняют инвестиционный рейтинг, а ассоциация банков Asoban заявляет, что остальные банки работают в обычном режиме. Однако Moody's предупредило, что этот случай выявляет провалы надзора, проблемы коррупции и сомнения в независимости BCP и что это может сказаться на рейтинге, если политический кризис затянется. Для страны, которая только что получила второй инвестиционный рейтинг и позиционировала себя как надёжное место для капитала и новых резидентов, ущерб репутации может превысить фискальные издержки.",
            "Альяна потребовал отставки всего кабинета и предложил кандидатуру Риваролы в совет директоров BCP. Это сигнал к исправлению, но у него есть пределы: несколько законодателей упоминали Альяну в ходе импичмента, и он будет править до 2028 года вместе с той же партией, при правительстве которой вырос банк. Тем временем расследование уже выходит за пределы страны. Банк контролировался через U Holdings — компанию в Люксембурге, где Grupo Vázquez принадлежали 90 % капитала и 99 % голосов, а прокуратура запросила содействие у США, Люксембурга и Аргентины для отслеживания активов.",
            "Если аргентинский «корралито» 2001 года затронул всю систему, то дело UENO — кризис одного-единственного банка. И всё же оно показывает нечто более общее. Оно показывает, что цифровой банкинг в Латинской Америке рос быстрее, чем регулирование контролирующих его конгломератов. Для региона вопрос не в том, должны ли существовать финтех-компании, а в том, кто их контролирует, когда их владельцы имеют прямой доступ к политической власти. У Парагвая есть возможность превратить свой крупнейший финансовый скандал в реформу управления. Если этого не произойдёт, следующий кризис будет иметь ту же структуру и другой бренд.",
          ],
        },
        {
          heading: "Открытые вопросы",
          bullets: [
            "Во сколько процедура урегулирования обойдётся парагвайскому государству, когда активы будут ликвидированы и станет ясно, какая часть государственных и пенсионных средств не будет возвращена?",
            "Примет ли Парагвай правила, защищающие независимость Центрального банка, например обязательные паузы для руководителей, приходящих из поднадзорных организаций?",
            "Укрепляет ли импичмент, проведённый за два дня, подотчётность власти или создаёт прецедент институциональной нестабильности?",
            "Пересмотрят ли другие регуляторы Латинской Америки то, как они контролируют конгломераты, владеющие цифровыми банками с миллионами клиентов?",
          ],
        },
        {
          heading: "Источники",
          paragraphs: [
            "1. <a href=\"https://www.infobae.com/economia/2026/11/05/el-caso-ueno-bank-por-que-cayo-y-cual-es-su-impacto-sobre-la-economia-de-paraguay/\" target=\"_blank\" rel=\"noopener\">Infobae – El caso Ueno Bank: por qué cayó y cuál es su impacto sobre la economía de Paraguay</a>",
            "2. <a href=\"https://www.teletica.com/bbc-news-mundo/expresidente-de-paraguay-santiago-pena-bajo-arresto-domiciliario-tras-ser-destituido-por-congreso_420704\" target=\"_blank\" rel=\"noopener\">BBC News Mundo (vía Teletica) – Expresidente de Paraguay Santiago Peña bajo arresto domiciliario tras ser destituido</a>",
            "3. <a href=\"https://www.lanacion.com.py/politica/2026/11/06/imputan-a-pena-y-carvallo-ordenan-detencion/\" target=\"_blank\" rel=\"noopener\">La Nación (Paraguay) – Imputan a Peña y Carvallo: Fiscalía ordena detención</a>",
            "4. <a href=\"https://www.vaticannews.va/es/mundo/news/2026-11/paraguay-renuncia-presidente-quiebra-bancaria-impeachment.html\" target=\"_blank\" rel=\"noopener\">Vatican News – Paraguay: el presidente Peña renuncia tras quiebra bancaria</a>",
            "5. <a href=\"https://expansion.mx/economia/2026/11/06/quiebra-de-ueno-bank-exhibe-fallas-de-supervision-y-corrupcion-en-paraguay-advierte-moodys\" target=\"_blank\" rel=\"noopener\">Expansión – Quiebra de Ueno Bank exhibe fallas de supervisión y corrupción en Paraguay, advierte Moody's</a>",
            "6. <a href=\"https://www.riotimesonline.com/moodys-paraguay-governance-weakness-ueno-bank/\" target=\"_blank\" rel=\"noopener\">The Rio Times – Moody's: Paraguay governance weakness after Ueno Bank</a>",
            "7. <a href=\"https://www.riotimesonline.com/paraguay-guarani-bonds-banks-after-ueno/\" target=\"_blank\" rel=\"noopener\">The Rio Times – Paraguay: guaraní, bonds and banks after Ueno</a>",
            "8. <a href=\"https://www.bloomberglinea.com/latinoamerica/paraguay-nombra-nuevo-jefe-del-banco-central-tras-intervencion-de-ueno-bank/\" target=\"_blank\" rel=\"noopener\">Bloomberg Línea – Paraguay nombra nuevo jefe del Banco Central tras intervención de Ueno Bank</a>",
            "9. <a href=\"https://lapatilla.com/2026/11/09/banco-central-de-paraguay-anuncio-que-ueno-bank-comenzo-devoluciones-de-ahorros-a-los-clientes/\" target=\"_blank\" rel=\"noopener\">La Patilla (EFE) – 93,1 % de los clientes de Ueno Bank recibieron devoluciones</a>",
            "10. <a href=\"https://www.peru-retail.com/?p=426067\" target=\"_blank\" rel=\"noopener\">Perú Retail – Ley N.º 7745 y devolución de depósitos</a>",
            "11. <a href=\"https://www.abc.com.py/politica/2026/07/08/cambios-clave-en-el-ips-coincidieron-con-la-catarata-de-fondos-para-ueno-bank/\" target=\"_blank\" rel=\"noopener\">ABC Color – Cambios clave en el IPS coincidieron con la catarata de fondos para Ueno Bank</a>",
            "12. <a href=\"https://en.paperjam.lu/article/ueno-bank-the-paraguayan-bankruptcy-that-leads-to-luxembourg\" target=\"_blank\" rel=\"noopener\">Paperjam – Ueno Bank: the Paraguayan bankruptcy that leads to Luxembourg</a>",
            "13. <a href=\"https://www.elsalvador.com/?p=1302820\" target=\"_blank\" rel=\"noopener\">El Diario de Hoy – Ascenso y caída de Ueno Bank</a>",
            "14. <a href=\"https://www.diarioestrategia.cl/texto-diario/mostrar/6085177/presidente-propone-funcionario-alerto-sobre-ueno-bank-integrar-direccion-banco-central\" target=\"_blank\" rel=\"noopener\">Diario Estrategia – Alliana propone al funcionario que alertó sobre Ueno Bank para el Banco Central</a>",
            "15. <a href=\"https://www.vozpopuli.com/internacional/santiago-pena-es-destituido-como-presidente-de-paraguay-y-detenido-pedro-alliana-asume-el-liderazgo-del-pais.html\" target=\"_blank\" rel=\"noopener\">Vozpópuli – Santiago Peña es destituido y detenido; Pedro Alliana asume</a>",
            "16. <a href=\"https://www.perfil.com/noticias/amp/politica/santiago-pena-fue-destituido-y-quedo-arrestado-en-su-domicilio-ansWp2I2wHfz.phtml\" target=\"_blank\" rel=\"noopener\">Perfil – Santiago Peña fue destituido y quedó arrestado en su domicilio</a>",
            "17. <a href=\"https://www.minuto60.com/mundo/como-pedir-devolucion-extra-fondos-ueno-bank-paraguay/18639\" target=\"_blank\" rel=\"noopener\">Minuto60 – Fiscalía coordina con EE. UU., Luxemburgo y Argentina</a>",
            "18. <a href=\"https://www.latintimes.com/paraguay-alliana-cabinet-reset-ueno-bank-crisis-601075\" target=\"_blank\" rel=\"noopener\">Latin Times – Alliana orders cabinet reset after Ueno Bank crisis</a>",
            "19. <a href=\"https://www.ueno.com.py/?p=11894\" target=\"_blank\" rel=\"noopener\">ueno bank – Más de un millón de paraguayos acceden por primera vez al sistema bancario</a>",
            "20. <a href=\"https://www.ueno.com.py/wp-content/uploads/2026/07/Promocion-Reintegro-PRIMERA-COMPRA-_-AGO-2026v1.pdf\" target=\"_blank\" rel=\"noopener\">ueno bank – Bases y condiciones: Activa tu TC con 50 % de reintegro en la primera compra (agosto de 2026)</a>",
            "21. <a href=\"https://www.ueno.com.py/wp-content/uploads/2025/11/Reintegro_bolsa_dia-u_5-de-nov_V1.pdf\" target=\"_blank\" rel=\"noopener\">ueno bank – Bases y condiciones: Reintegro «Día u», 5 de noviembre de 2025</a>",
            "22. <a href=\"https://ueno.com.py/wp-content/uploads/2024/11/Reintegro-_-50_-Primera-Compra-_-DIC-24-V1.docx.pdf\" target=\"_blank\" rel=\"noopener\">ueno bank – Bases y condiciones: Primera compra y ueno black shopping week (diciembre de 2024)</a>",
            "23. <a href=\"https://www.abc.com.py/empresariales/2025/03/12/si-paraguay-gana-sus-dos-partidos-ueno-bank-reintegra-el-100-de-las-compras/\" target=\"_blank\" rel=\"noopener\">ABC Color – Si Paraguay gana sus dos partidos, ueno bank reintegrará el 100 % de las compras</a>",
            "24. <a href=\"https://www.montevideo.com.uy/Noticias/-Todos-sabiamos-que-iba-a-caer--las-alertas-sobre-Ueno-Bank-y-el-vinculo-con-Pena-uc981207\" target=\"_blank\" rel=\"noopener\">Montevideo Portal – “Todos sabíamos que iba a caer”: las alertas sobre Ueno Bank y el vínculo con Peña</a>",
            "25. <a href=\"https://www.lanacion.com.ar/economia/tuve-que-pedir-plata-prestada-el-drama-de-los-ahorristas-que-no-pueden-acceder-a-su-dinero-nid04112026/\" target=\"_blank\" rel=\"noopener\">La Nación (Argentina) – “Tuve que pedir plata prestada”: el drama de los ahorristas</a>",
            "26. <a href=\"https://www.hoy.com.py/nacionales/2026/11/12/bcp-confirma-hallazgo-de-usd-600-millones-en-activos-sanos-de-ueno-bank-y-priorizara-fondos-previsionales\" target=\"_blank\" rel=\"noopener\">Diario HOY – Titular del BCP dice que jamás confió en Ueno y que advirtió su caída hace más de dos años</a>",
            "27. <a href=\"https://www.grupovazquez.com/nuestra-historia/\" target=\"_blank\" rel=\"noopener\">Grupo Vázquez – Nuestra historia</a>",
            "28. <a href=\"https://elprisma.com.py/ueno-bank-de-la-usura-en-el-mercado-4-al-primer-banco-digital-que-acapara-dinero-del-estado/\" target=\"_blank\" rel=\"noopener\">El Prisma – Ueno Bank: de la usura en el Mercado 4 al primer banco digital que acapara dinero del Estado</a>",
            "29. <a href=\"https://www.abc.com.py/policiales/2026/11/10/caso-ueno-allanan-casa-de-creditos-en-el-mercado-4/\" target=\"_blank\" rel=\"noopener\">ABC Color – Caso Ueno: allanan casa de créditos en el Mercado 4</a>",
            "30. <a href=\"https://elnacional.com.py/economia/miguel-vazquez-zar-negocios-2024-n79056\" target=\"_blank\" rel=\"noopener\">El Nacional – Miguel Vázquez, el zar de los negocios en el 2024</a>",
            "31. <a href=\"https://www.ultimahora.com/como-fue-el-ascenso-y-la-caida-del-imperio-de-miguel-vazquez\" target=\"_blank\" rel=\"noopener\">Última Hora – Cómo fue el ascenso y la caída del imperio de Miguel Vázquez</a>",
            "32. <a href=\"https://www.abc.com.py/politica/2026/11/07/el-millonario-y-ostentoso-esquema-que-tumbo-a-pena-seis-hechos-clave/\" target=\"_blank\" rel=\"noopener\">ABC Color – El millonario y ostentoso esquema que tumbó a Peña: seis hechos clave</a>",
            "33. <a href=\"https://marketdata.com.py/noticias/grupo-vazquez-obtiene-aprobacion-del-banco-central-para-adquisicion-de-financiera-el-comercio-55770/\" target=\"_blank\" rel=\"noopener\">MarketData – Grupo Vázquez obtiene aprobación del Banco Central para adquisición de Financiera El Comercio</a>",
          ],
        },
      ],
    },
  },
};
