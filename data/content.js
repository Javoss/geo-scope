import { modularArticles } from "./articles/index.js?v=20260428b";

export const site = {
  name: "Geo Scope",
  tagline:
    "Analisis estrategico sobre geopolitica, tecnologia, economia y el nuevo orden global.",
  description:
    "Plataforma editorial y think tank digital para interpretar los cambios globales con profundidad, criterio y claridad.",
  email: "info@geo-scope.online",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/geoscope" },
    { label: "X", href: "https://x.com/geoscope" },
    { label: "RSS", href: "#" },
  ],
};

export const navigation = [
  { label: "Inicio", href: "index.html", key: "home" },
  { label: "Analisis", href: "analysis.html", key: "analysis" },
  { label: "Opinion", href: "opinion.html", key: "opinion" },
  { label: "Radar semanal", href: "radar.html", key: "radar" },
  { label: "Regiones", href: "regions.html", key: "regions" },
  { label: "Sectores", href: "sectors.html", key: "sectors" },
  { label: "Sobre Geo Scope", href: "about.html", key: "about" },
  { label: "Contacto", href: "contact.html", key: "contact" },
  { label: "Suscripcion", href: "subscription.html", key: "subscription" },
];

export const newsletterInterests = [
  "Geopolitica",
  "Economia internacional",
  "Tecnologia y geopolitica",
  "Energia",
  "Comercio y cadenas logisticas",
  "Defensa y seguridad",
  "Diplomacia",
  "Infraestructura estrategica",
  "Inteligencia artificial y poder global",
  "Multipolaridad y gobernanza global",
];

export const about = {
  mission:
    "Interpretar los cambios globales con rigor editorial, mirada estrategica y lenguaje claro.",
  vision:
    "Convertirse en una plataforma de referencia para decisores, analistas, empresarios, academia y lectores que buscan comprender el reordenamiento global mas alla del ciclo noticioso.",
  manifesto: [
    "Geo Scope parte de una premisa simple: el mundo no necesita mas ruido, necesita mejores marcos para pensar.",
    "La plataforma combina lectura profunda, criterio comparado y sensibilidad internacional para explicar tendencias geoeconomicas, tecnologicas y politicas con una voz sobria y precisa.",
    "No perseguimos la reaccion inmediata. Privilegiamos el contexto, las implicaciones y las preguntas correctas.",
  ],
  principles: [
    "Analisis antes que alarma.",
    "Profundidad antes que velocidad.",
    "Contexto regional con mirada global.",
    "Lenguaje claro sin perder densidad estrategica.",
  ],
};

export const authors = [
  {
    slug: "javier-salazar-segales",
    name: "Javier Salazar Segales",
    role: "Director editorial",
  },
  {
    slug: "tomas-velez",
    name: "Tomas Velez",
    role: "Editor de geoeconomia",
  },
  {
    slug: "clara-ibanez",
    name: "Clara Ibanez",
    role: "Analista de tecnologia y poder",
  },
  {
    slug: "adrian-rivas",
    name: "Adrian Rivas",
    role: "Investigador senior de seguridad internacional",
  },
  {
    slug: "lucia-ferrer",
    name: "Lucia Ferrer",
    role: "Editora de regiones y diplomacia",
  },
];

export const regions = [
  {
    slug: "global",
    name: "Global",
    strap: "Flujos sistemicos, poder financiero y reordenamiento internacional.",
    description:
      "Lecturas transversales sobre las fuerzas que conectan grandes potencias, liquidez global, comercio, tecnologia y arquitectura de poder a escala mundial.",
    tags: ["dolar", "liquidez", "flujos", "sistema internacional"],
    accent: "midnight",
  },
  {
    slug: "brics",
    name: "BRICS",
    strap: "Coordinacion flexible, peso industrial y arquitectura paralela.",
    description:
      "Seguimiento de la evolucion politica, financiera y tecnologica del espacio BRICS y su impacto sobre el equilibrio institucional global.",
    tags: ["monedas", "estandares", "sur global", "finanzas"],
    accent: "steel",
  },
  {
    slug: "america-latina",
    name: "America Latina",
    strap: "Recursos, diplomacia de autonomia y posicionamiento estrategico.",
    description:
      "Lecturas sobre el lugar de America Latina en la competencia por cadenas de valor, energia, minerales criticos y alianzas de mediano plazo.",
    tags: ["nearshoring", "materias primas", "autonomia", "puertos"],
    accent: "bronze",
  },
  {
    slug: "rusia-eurasia",
    name: "Rusia y Eurasia",
    strap: "Corredores, seguridad extendida y reorganizacion continental.",
    description:
      "Analisis de la proyeccion estrategica de Rusia y Eurasia en un tablero atravesado por sanciones, rutas logisticas y competencia militar-industrial.",
    tags: ["sanciones", "disuasion", "corredores", "energia"],
    accent: "indigo",
  },
  {
    slug: "china-asia",
    name: "China y Asia",
    strap: "Escala productiva, estandares tecnicos y competencia por la manufactura.",
    description:
      "Seguimiento de la centralidad asiatica en tecnologia, comercio, infraestructura y arquitectura financiera del siglo XXI.",
    tags: ["semiconductores", "conectividad", "manufactura", "digital"],
    accent: "jade",
  },
  {
    slug: "europa",
    name: "Europa",
    strap: "Autonomia estrategica, industria y seguridad de alta densidad regulatoria.",
    description:
      "Cobertura de la tension entre apertura, seguridad economica, defensa y reconstruccion industrial en la agenda europea.",
    tags: ["energia", "regulacion", "defensa", "artico"],
    accent: "silver",
  },
  {
    slug: "medio-oriente",
    name: "Medio Oriente",
    strap: "Capital, energia y nuevas geografias del poder regional.",
    description:
      "Analisis de energia, corredores, finanzas soberanas y reconfiguracion diplomatica en Medio Oriente.",
    tags: ["golfo", "petroleo", "fondos soberanos", "estrechos"],
    accent: "gold",
  },
  {
    slug: "africa",
    name: "Africa",
    strap: "Minerales criticos, infraestructura y capacidad de negociacion.",
    description:
      "Seguimiento del rol africano en la transicion energetica, las nuevas cadenas industriales y la disputa por conectividad y recursos.",
    tags: ["cobre", "litio", "puertos", "industrializacion"],
    accent: "forest",
  },
  {
    slug: "estados-unidos-occidente",
    name: "Estados Unidos y Occidente",
    strap: "Poder tecnologico, alianzas y politica industrial de segunda generacion.",
    description:
      "Lecturas sobre el rediseno del poder occidental entre subsidios, seguridad economica, sanciones y reconstruccion de alianzas.",
    tags: ["chips", "alianzas", "subsidios", "tecnopolitica"],
    accent: "midnight",
  },
];

export const sectors = [
  {
    slug: "geoeconomia-global",
    name: "Geoeconomia global",
    description:
      "Interaccion entre comercio, deuda, monedas, poder financiero y estrategia internacional.",
    icon: "orbit",
    accent: "midnight",
  },
  {
    slug: "mercados-financieros",
    name: "Mercados financieros",
    description:
      "Liquidez, tasas, bonos, bolsas y mecanismos de absorcion del ahorro global.",
    icon: "bars",
    accent: "steel",
  },
  {
    slug: "china-estados-unidos",
    name: "China y Estados Unidos",
    description:
      "Competencia estructural entre manufactura, finanzas, tecnologia y capacidad estatal.",
    icon: "compass",
    accent: "indigo",
  },
  {
    slug: "geopolitica",
    name: "Geopolitica",
    description:
      "Competencia entre potencias, equilibrio regional y reordenamiento del poder.",
    icon: "compass",
    accent: "midnight",
  },
  {
    slug: "economia-internacional",
    name: "Economia internacional",
    description:
      "Flujos financieros, politica industrial, deuda, monedas y arquitectura global.",
    icon: "bars",
    accent: "steel",
  },
  {
    slug: "tecnologia-geopolitica",
    name: "Tecnologia y geopolitica",
    description:
      "Infraestructura digital, estandares, chips, plataformas y capacidad estatal.",
    icon: "circuit",
    accent: "indigo",
  },
  {
    slug: "energia",
    name: "Energia",
    description:
      "Petroleo, gas, renovables, minerales criticos y seguridad de suministro.",
    icon: "pulse",
    accent: "gold",
  },
  {
    slug: "comercio-cadenas-logisticas",
    name: "Comercio y cadenas logisticas",
    description:
      "Rutas maritimas, reshoring, nearshoring y reorganizacion de nodos productivos.",
    icon: "route",
    accent: "jade",
  },
  {
    slug: "defensa-seguridad",
    name: "Defensa y seguridad",
    description:
      "Capacidad militar, disuasion, industria de defensa y arquitectura de seguridad.",
    icon: "shield",
    accent: "bronze",
  },
  {
    slug: "diplomacia",
    name: "Diplomacia",
    description:
      "Alineamientos, mediacion, foros regionales y gestion estrategica de relaciones.",
    icon: "handshake",
    accent: "silver",
  },
  {
    slug: "infraestructura-estrategica",
    name: "Infraestructura estrategica",
    description:
      "Corredores, puertos, telecomunicaciones y nodos de conectividad critica.",
    icon: "grid",
    accent: "forest",
  },
  {
    slug: "inteligencia-artificial-poder-global",
    name: "Inteligencia artificial y poder global",
    description:
      "IA como vector de competitividad, vigilancia, productividad y proyeccion estatal.",
    icon: "spark",
    accent: "indigo",
  },
  {
    slug: "multipolaridad-gobernanza-global",
    name: "Multipolaridad y gobernanza global",
    description:
      "Instituciones, coaliciones flexibles y reglas emergentes del sistema internacional.",
    icon: "orbit",
    accent: "steel",
  },
];

const legacyArticles = [
  {
    slug: "brics-y-el-nuevo-equilibrio-tecnologico-global",
    title: "BRICS y el nuevo equilibrio tecnologico global",
    subtitle:
      "La competencia por estandares, plataformas industriales y capacidad de computo esta redefiniendo el peso relativo del bloque.",
    excerpt:
      "El debate sobre los BRICS ya no gira solo en torno a monedas o representacion institucional. La nueva pregunta es quien controla los nodos tecnologicos que estructuran la siguiente fase del poder global.",
    type: "analysis",
    region: "brics",
    sectors: [
      "tecnologia-geopolitica",
      "multipolaridad-gobernanza-global",
      "inteligencia-artificial-poder-global",
    ],
    author: "javier-salazar-segales",
    date: "2026-04-21",
    readTime: 11,
    homeFeature: 1,
    tone: "midnight",
    tags: ["BRICS", "IA", "estandares", "capacidad industrial"],
    thesis:
      "La disputa tecnologica entre potencias se ha desplazado de la retorica de bloques hacia la construccion de ecosistemas concretos: centros de datos, talento, manufactura avanzada y normas tecnicas.",
    whyItMatters: [
      "Para el bloque BRICS, la coordinacion tecnologica funciona como multiplicador de peso geopolitico incluso cuando no existe una arquitectura plenamente integrada.",
      "El acceso a infraestructura digital, semiconductores maduros, servicios en la nube y cadenas de valor industriales define hoy una parte creciente de la autonomia estrategica.",
    ],
    regionalLens:
      "La pregunta central no es si los BRICS operan como alianza cerrada, sino si pueden sincronizar prioridades suficientes para construir escala, reducir dependencia y negociar desde una mejor posicion.",
    outlook:
      "En el corto plazo veremos coaliciones variables y acuerdos parciales. En el mediano, la clave sera si el bloque transforma volumen economico en capacidad institucional durable.",
  },
  {
    slug: "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina",
    title: "Que significa la fragmentacion del comercio mundial para America Latina",
    subtitle:
      "Nearshoring, friendshoring y seguridad economica abren oportunidades, pero tambien exigen estrategia industrial y coordinacion regional.",
    excerpt:
      "La fragmentacion del comercio global no implica una desglobalizacion total. Implica una geografia mas politica del comercio, donde America Latina puede ganar relevancia si evita una insercion puramente extractiva.",
    type: "analysis",
    region: "america-latina",
    sectors: ["comercio-cadenas-logisticas", "economia-internacional"],
    author: "tomas-velez",
    date: "2026-04-20",
    readTime: 9,
    homeFeature: 2,
    tone: "jade",
    tags: ["nearshoring", "America Latina", "logistica", "industria"],
    thesis:
      "La fragmentacion comercial no significa el fin del intercambio global, sino una reorganizacion basada en resiliencia, proximidad politica y control de riesgos.",
    whyItMatters: [
      "Para America Latina, el escenario abre espacio en manufactura, agroindustria, minerales y servicios, pero solo si hay capacidad de coordinacion publico-privada y mejoras logisticas.",
      "La region corre el riesgo de convertirse en proveedor de contingencia sin capturar eslabones de mayor valor si no fortalece infraestructura, talento y reglas estables.",
    ],
    regionalLens:
      "Mexico, Brasil, Chile, Colombia y el corredor del Cono Sur enfrentan oportunidades distintas. El punto comun es la necesidad de traducir coyuntura geopolitica en politica economica consistente.",
    outlook:
      "El proximo ciclo premiara a quienes ofrezcan previsibilidad regulatoria, energia competitiva y nodos logisticos confiables. La ventaja geografica, por si sola, ya no alcanza.",
  },
  {
    slug: "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global",
    title: "Rusia y Eurasia en la reconfiguracion del poder global",
    subtitle:
      "Entre sanciones, corredores terrestres y capacidad militar-industrial, Eurasia vuelve a ocupar un lugar estructural en el tablero internacional.",
    excerpt:
      "Eurasia ya no puede leerse solo desde el lente del conflicto. Tambien debe analizarse como espacio logistico, energetico y politico en plena reordenacion.",
    type: "analysis",
    region: "rusia-eurasia",
    sectors: ["geopolitica", "defensa-seguridad"],
    author: "adrian-rivas",
    date: "2026-04-18",
    readTime: 10,
    homeFeature: 3,
    tone: "indigo",
    tags: ["Eurasia", "seguridad", "sanciones", "corredores"],
    thesis:
      "La centralidad eurasica surge de la convergencia entre geografia, seguridad y conectividad. Incluso bajo presion, la region sigue condicionando rutas, energia y posturas diplomaticas.",
    whyItMatters: [
      "Las sanciones aceleraron ajustes financieros y logisticos que alteraron flujos comerciales, nodos de transporte y alianzas tacticas.",
      "La capacidad militar-industrial y la profundidad territorial siguen siendo variables determinantes en cualquier lectura sobre seguridad europea y asiatica.",
    ],
    regionalLens:
      "Desde el Caspio hasta el Artico, la region combina vulnerabilidades operativas con ventajas de posicion geografico que ningun actor externo puede ignorar.",
    outlook:
      "La proxima etapa dependera menos de comunicados y mas de la resistencia productiva, la apertura de corredores alternativos y la densidad de acuerdos con Asia, Medio Oriente y el sur global.",
  },
  {
    slug: "energia-corredores-logisticos-y-competencia-geoeconomica",
    title: "Energia, corredores logisticos y competencia geoeconomica",
    subtitle:
      "Los cuellos de botella del suministro ya no son un asunto tecnico: son un tema de poder, financiamiento y capacidad de anticipacion.",
    excerpt:
      "Corredores, puertos, estrechos y terminales energeticas forman una sola geografia estrategica. Quien reduce friccion logistica gana margen politico.",
    type: "analysis",
    region: "medio-oriente",
    sectors: ["energia", "infraestructura-estrategica"],
    author: "lucia-ferrer",
    date: "2026-04-16",
    readTime: 8,
    homeFeature: 4,
    tone: "gold",
    tags: ["energia", "corredores", "geoeconomia", "puertos"],
    thesis:
      "La competencia geoeconomica actual se organiza alrededor de infraestructura fisica concreta: puertos, redes electricas, ductos, cables y plataformas logisticas.",
    whyItMatters: [
      "Los actores que combinan financiamiento, seguridad y capacidad operativa sobre esos nodos obtienen influencia muy superior a su peso nominal.",
      "La energia sigue siendo el lenguaje comun entre seguridad nacional, politica industrial y diplomacia economica.",
    ],
    regionalLens:
      "Medio Oriente conserva centralidad no solo por hidrocarburos, sino por su funcion como bisagra entre Asia, Europa y Africa.",
    outlook:
      "Las disputas futuras se mediran menos por volumen de comercio agregado y mas por control de cuellos de botella, redundancias y tiempo de respuesta ante crisis.",
  },
  {
    slug: "la-inteligencia-artificial-como-herramienta-de-poder-estatal",
    title: "La inteligencia artificial como herramienta de poder estatal",
    subtitle:
      "La carrera por la IA no es solo una competencia empresarial. Es una disputa por administracion, defensa, productividad y capacidad de gobierno.",
    excerpt:
      "La IA se esta integrando al corazon del aparato estatal: inteligencia, gestion fiscal, industria, defensa y servicios publicos. El punto no es solo innovar, sino gobernar mejor y mas rapido.",
    type: "opinion",
    region: "estados-unidos-occidente",
    sectors: [
      "inteligencia-artificial-poder-global",
      "tecnologia-geopolitica",
    ],
    author: "clara-ibanez",
    date: "2026-04-15",
    readTime: 7,
    tone: "midnight",
    tags: ["IA", "Estado", "gobernanza", "productividad"],
    thesis:
      "La narrativa dominante presenta la inteligencia artificial como disrupcion de mercado, cuando en realidad su impacto mas profundo se juega en la capacidad estatal.",
    whyItMatters: [
      "Quienes integren IA en burocracias, defensa, supervision financiera y planificacion estrategica elevaran su productividad institucional y su margen de accion exterior.",
      "La brecha futura no sera solo entre empresas lideres y rezagadas, sino entre Estados capaces de absorber tecnologia y Estados que solo la consumen.",
    ],
    regionalLens:
      "Estados Unidos y sus aliados conservan ventaja en capital, computo y ecosistema innovador, pero esa ventaja exige coordinacion regulatoria y despliegue publico mas fino.",
    outlook:
      "La siguiente gran discusion sera sobre interoperabilidad, supervision y doctrina. La IA que importa geopoliticamente es la que entra en sistemas reales, no la que domina titulares.",
  },
  {
    slug: "tres-senales-que-estan-redefiniendo-la-multipolaridad",
    title: "Tres senales que estan redefiniendo la multipolaridad",
    subtitle:
      "Una lectura breve de los movimientos que muestran por donde puede cambiar la arquitectura del poder global.",
    excerpt:
      "La multipolaridad no aparece de golpe. Se manifiesta en pequenos reajustes financieros, diplomaticos y tecnologicos que, combinados, cambian el terreno de juego.",
    type: "radar",
    region: "brics",
    sectors: ["multipolaridad-gobernanza-global", "diplomacia"],
    author: "javier-salazar-segales",
    date: "2026-04-14",
    readTime: 5,
    tone: "steel",
    tags: ["radar", "multipolaridad", "BRICS", "gobernanza"],
    signals: [
      {
        title: "Mas acuerdos en monedas locales",
        detail:
          "No sustituyen al dolar en el corto plazo, pero si amplian margen de maniobra en comercio bilateral y financiamiento selectivo.",
      },
      {
        title: "Instituciones paralelas ganan densidad",
        detail:
          "Foros flexibles, bancos regionales y plataformas de pago estan dejando de ser simbolicos para convertirse en mecanismos de coordinacion concreta.",
      },
      {
        title: "La diplomacia sectorial pesa mas que los grandes bloques",
        detail:
          "Minerales, energia, conectividad e inteligencia artificial generan coaliciones parciales que reordenan prioridades mas rapido que los alineamientos ideologicos tradicionales.",
      },
    ],
    outlook:
      "La multipolaridad avanza cuando se vuelve operativa. La pregunta relevante es que acuerdos producen capacidad, no que discursos prometen cambio.",
  },
  {
    slug: "por-que-el-artico-importa-cada-vez-mas",
    title: "Por que el Artico importa cada vez mas",
    subtitle:
      "Nuevas rutas, recursos, seguridad y clima convierten al norte extremo en una de las fronteras estrategicas mas sensibles.",
    excerpt:
      "El Artico se esta volviendo una zona de competencia simultaneamente energetica, comercial, militar y cientifica. Esa superposicion explica su creciente relevancia.",
    type: "analysis",
    region: "europa",
    sectors: ["geopolitica", "energia"],
    author: "adrian-rivas",
    date: "2026-04-13",
    readTime: 8,
    tone: "silver",
    tags: ["Artico", "rutas", "energia", "seguridad"],
    thesis:
      "El Artico concentra una rareza estrategica: es frontera climatica, reservorio energetico, corredor potencial y espacio de competencia militar al mismo tiempo.",
    whyItMatters: [
      "Cambios en navegabilidad, infraestructura dual y explotacion de recursos alteran calculos de costo, tiempo y presencia militar.",
      "Europa, Rusia, Norteamerica y Asia observan el Artico con lentes distintos, pero todos coinciden en que su importancia relativa esta aumentando.",
    ],
    regionalLens:
      "Para Europa, el Artico combina seguridad energetica, proteccion de rutas y necesidad de coordinarse con aliados sin perder autonomia regulatoria.",
    outlook:
      "No se trata de una nueva fiebre del oro. Se trata de un espacio que obliga a repensar infraestructura, disuasion y gobernanza antes de que la presion crezca aun mas.",
  },
  {
    slug: "china-y-asia-estandares-digitales-y-rutas-industriales",
    title: "China y Asia: estandares digitales y rutas industriales",
    subtitle:
      "La region consolida una ventaja menos visible pero mas profunda: definir como se produce, se conecta y se escala la tecnologia.",
    excerpt:
      "Asia ya no es solo la fabrica del mundo. Es tambien un laboratorio de estandares, coordinacion industrial e infraestructura digital con impacto global.",
    type: "analysis",
    region: "china-asia",
    sectors: ["tecnologia-geopolitica", "infraestructura-estrategica"],
    author: "clara-ibanez",
    date: "2026-04-12",
    readTime: 10,
    tone: "jade",
    tags: ["Asia", "estandares", "digital", "industria"],
    thesis:
      "La influencia asiatica crece porque combina escala productiva, financiamiento y capacidad para definir normas operativas en sectores estrategicos.",
    whyItMatters: [
      "Quien fija estandares tecnicos tambien fija costos de entrada, interoperabilidad y dependencia futura.",
      "La integracion entre manufactura, logistica y conectividad digital le da a Asia una profundidad sistemica dificil de replicar en otras regiones.",
    ],
    regionalLens:
      "China ocupa el centro del tablero, pero el ecosistema regional depende tambien de India, ASEAN, Corea, Japon y multiples arreglos funcionales.",
    outlook:
      "La proxima batalla por cadenas tecnologicas no sera solo por liderazgo de marca, sino por capacidad de imponer reglas practicas de produccion y adopcion.",
  },
  {
    slug: "europa-seguridad-industrial-y-autonomia-estrategica",
    title: "Europa: seguridad industrial y autonomia estrategica",
    subtitle:
      "La agenda europea intenta reconciliar apertura de mercado, defensa, energia y reconstruccion productiva sin perder cohesion politica.",
    excerpt:
      "Europa enfrenta un dilema estructural: necesita ser mas resiliente sin dejar de ser abierta. Esa tension esta redisenando su politica economica y su lenguaje geopolitico.",
    type: "opinion",
    region: "europa",
    sectors: ["economia-internacional", "diplomacia"],
    author: "lucia-ferrer",
    date: "2026-04-11",
    readTime: 7,
    tone: "silver",
    tags: ["Europa", "autonomia estrategica", "industria", "regulacion"],
    thesis:
      "La autonomia estrategica europea no es un giro ideologico repentino. Es la respuesta acumulada a choques energeticos, presion tecnologica y vulnerabilidad industrial.",
    whyItMatters: [
      "Europa esta redefiniendo subsidios, reglas de competencia y politicas de seguridad economica para reducir dependencia en sectores criticos.",
      "El desafio es hacerlo sin fragmentar el mercado interno ni deteriorar su capacidad diplomatica con socios clave.",
    ],
    regionalLens:
      "La discusion europea es menos binaria de lo que suele creerse: no se trata de elegir entre autonomia o alianza, sino de encontrar una combinacion sostenible de ambas.",
    outlook:
      "El exito dependera de ejecutar politicas industriales selectivas con financiamiento creible y de coordinar regulacion con una vision mas geopolitica del mercado comun.",
  },
  {
    slug: "africa-minerales-criticos-manufactura-y-poder-negociador",
    title: "Africa: minerales criticos, manufactura y poder negociador",
    subtitle:
      "El continente gana centralidad en la transicion energetica, pero la verdadera pregunta es cuanta captura de valor podra retener.",
    excerpt:
      "Africa se ha vuelto indispensable para minerales criticos, corredores y demanda futura. El desafio es convertir esa centralidad en capacidad industrial propia.",
    type: "analysis",
    region: "africa",
    sectors: ["infraestructura-estrategica", "economia-internacional"],
    author: "tomas-velez",
    date: "2026-04-10",
    readTime: 9,
    tone: "forest",
    tags: ["Africa", "minerales criticos", "manufactura", "negociacion"],
    thesis:
      "La nueva centralidad africana no se explica solo por recursos. Se explica por la combinacion entre minerales, mercados urbanos, conectividad y posicion geografica.",
    whyItMatters: [
      "La transicion energetica y la competencia por baterias aumentan el valor estrategico de cobalto, cobre, manganeso y tierras raras.",
      "La oportunidad real esta en transformar contratos extractivos en plataformas de procesamiento, formacion de talento e infraestructura compartida.",
    ],
    regionalLens:
      "Los gobiernos africanos negocian ahora con un margen algo mayor porque existe mas competencia entre oferentes de financiamiento, tecnologia y seguridad.",
    outlook:
      "El punto de inflexion vendra si esa competencia externa se traduce en agendas nacionales de industrializacion con instituciones capaces de sostenerlas.",
  },
  {
    slug: "estados-unidos-alianzas-y-politica-industrial-de-segunda-ola",
    title: "Estados Unidos, alianzas y politica industrial de segunda ola",
    subtitle:
      "Washington intenta pasar de la reaccion a una estrategia mas durable basada en industria, seguridad economica y coordinacion con aliados.",
    excerpt:
      "La politica industrial estadounidense ya no es un parenteis. Se esta convirtiendo en la gramatica economica de una nueva etapa de competencia sistemica.",
    type: "analysis",
    region: "estados-unidos-occidente",
    sectors: ["defensa-seguridad", "diplomacia"],
    author: "javier-salazar-segales",
    date: "2026-04-09",
    readTime: 8,
    tone: "midnight",
    tags: ["Estados Unidos", "alianzas", "industria", "seguridad economica"],
    thesis:
      "La nueva politica industrial estadounidense busca reconstruir capacidad domestica y al mismo tiempo ordenar alianzas productivas alrededor de sectores criticos.",
    whyItMatters: [
      "El cambio afecta cadenas de suministro, incentivos a la inversion, normas comerciales y margenes de accion para socios y competidores.",
      "La coordinacion con aliados ya no se mide solo en defensa, sino en subsidios, minerales, chips y proteccion de tecnologia sensible.",
    ],
    regionalLens:
      "Occidente avanza hacia un modelo menos ingenuo sobre interdependencia. La cuestion es si lograra coordinar prioridades sin multiplicar fricciones internas.",
    outlook:
      "La segunda ola industrial sera evaluada por resultados tangibles: tiempo de construccion, acceso a insumos, estabilidad politica y capacidad de generar ecosistemas completos.",
  },
  {
    slug: "diplomacia-de-media-potencia-en-america-latina",
    title: "Diplomacia de media potencia en America Latina",
    subtitle:
      "La region puede ganar influencia si combina ambicion selectiva, consistencia institucional y lectura realista del entorno.",
    excerpt:
      "En un mundo mas fragmentado, las potencias medianas tienen una ventaja: pueden negociar con flexibilidad. La desventaja aparece cuando esa flexibilidad carece de estrategia.",
    type: "opinion",
    region: "america-latina",
    sectors: ["diplomacia", "geopolitica"],
    author: "lucia-ferrer",
    date: "2026-04-08",
    readTime: 6,
    tone: "bronze",
    tags: ["America Latina", "diplomacia", "potencias medianas", "autonomia"],
    thesis:
      "La diplomacia latinoamericana puede ser mas influyente si abandona la falsa opcion entre neutralidad retorica y alineamiento pasivo.",
    whyItMatters: [
      "El espacio para negociar existe, pero requiere prioridades nacionales claras, equipos tecnicos consistentes y una agenda de intereses concretos.",
      "La region tiene activos valiosos en alimentos, energia, minerales y posicion geografica, aunque todavia los comunica y coordina de forma fragmentada.",
    ],
    regionalLens:
      "Brasil, Mexico, Chile, Colombia y otros actores medianos no necesitan hablar igual para generar peso. Necesitan saber donde cooperar y donde diferenciarse.",
    outlook:
      "La proxima decada premiara a los paises capaces de ofrecer confiabilidad diplomatica y claridad estrategica, no solo retorica de autonomia.",
  },
  {
    slug: "medio-oriente-finanzas-energia-y-el-orden-postpetrolero",
    title: "Medio Oriente: finanzas, energia y el orden postpetrolero",
    subtitle:
      "La region esta utilizando capital soberano, infraestructura y diplomacia economica para preparar una influencia mas amplia que la petrolera.",
    excerpt:
      "Hablar de un orden postpetrolero no implica que el petroleo pierda relevancia. Implica que la region busca diversificar su poder antes de que el mercado cambie del todo.",
    type: "analysis",
    region: "medio-oriente",
    sectors: ["energia", "comercio-cadenas-logisticas"],
    author: "tomas-velez",
    date: "2026-04-07",
    readTime: 8,
    tone: "gold",
    tags: ["Medio Oriente", "fondos soberanos", "energia", "logistica"],
    thesis:
      "Los grandes actores del Golfo estan transformando renta energetica en capacidad financiera, conectividad y proyeccion diplomatica.",
    whyItMatters: [
      "Esa conversion de liquidez en posicion estrategica altera rutas de inversion, cadenas logisticas y alianzas con Asia, Europa y Africa.",
      "La region ya no compite solo por produccion de energia, sino por control de infraestructura, servicios y plataformas de capital.",
    ],
    regionalLens:
      "Medio Oriente se mueve como puente entre regiones y como actor con agenda propia. Esa dualidad eleva su capacidad de arbitraje.",
    outlook:
      "La influencia futura dependera de cuan rapido pueda traducir visiones de diversificacion en sectores productivos resilientes y capital humano avanzado.",
  },
  {
    slug: "infraestructura-corredores-y-poder-en-eurasia",
    title: "Infraestructura, corredores y poder en Eurasia",
    subtitle:
      "Rutas ferroviarias, puertos secos y nuevas conexiones terrestres modifican los calculos estrategicos de actores publicos y privados.",
    excerpt:
      "La infraestructura no es neutra. En Eurasia, cada corredor reorganiza costos, dependencias y alianzas con efectos que van mucho mas alla del comercio.",
    type: "analysis",
    region: "rusia-eurasia",
    sectors: ["infraestructura-estrategica", "comercio-cadenas-logisticas"],
    author: "adrian-rivas",
    date: "2026-04-06",
    readTime: 9,
    tone: "indigo",
    tags: ["Eurasia", "corredores", "infraestructura", "logistica"],
    thesis:
      "Los corredores eurasiaticos son dispositivos de poder porque conectan mercados, financiamiento, seguridad fisica y opciones diplomaticas.",
    whyItMatters: [
      "Cada ruta alternativa reduce vulnerabilidad ante sanciones, cuellos de botella o crisis maritimas.",
      "Las empresas tambien ajustan sus estrategias cuando la politica altera tiempos, seguros, costos y disponibilidad de infraestructura.",
    ],
    regionalLens:
      "Desde el Mar Caspio hasta los enlaces con China, India y Medio Oriente, Eurasia combina proyectos competitivos y complementariedades tacticas.",
    outlook:
      "La gran variable sera la continuidad operativa. En entornos volatiles, el corredor mas valioso no es el mas corto, sino el mas confiable.",
  },
  {
    slug: "radar-semanal-estrechos-estandares-y-alimentos",
    title: "Radar semanal: estrechos, estandares y alimentos",
    subtitle:
      "Cuatro movimientos discretos que ayudan a leer tensiones logisticas y politicas mas amplias.",
    excerpt:
      "La semana deja senales que conectan seguridad maritima, regulacion tecnologica y abastecimiento alimentario. Ninguna es aislada.",
    type: "radar",
    region: "africa",
    sectors: ["energia", "comercio-cadenas-logisticas", "diplomacia"],
    author: "lucia-ferrer",
    date: "2026-04-05",
    readTime: 4,
    tone: "forest",
    tags: ["radar", "estrechos", "alimentos", "regulacion"],
    signals: [
      {
        title: "Mas presion sobre rutas maritimas sensibles",
        detail:
          "Los desvios elevan tiempos, seguros y consumo de combustible, con impacto directo sobre costos finales.",
      },
      {
        title: "Nuevas reglas tecnicas alteran acceso a mercados",
        detail:
          "Las normas sobre trazabilidad y datos ya funcionan como filtros competitivos en sectores industriales y agroalimentarios.",
      },
      {
        title: "Seguridad alimentaria vuelve al centro",
        detail:
          "Clima, financiamiento y logistica estan estrechamente vinculados. Las tensiones en uno de esos frentes contagian rapidamente al resto.",
      },
      {
        title: "Africa gana margen de negociacion",
        detail:
          "La combinacion de puertos, minerales y demanda interna otorga a varios paises africanos una voz mas relevante en conversaciones multilaterales.",
      },
    ],
    outlook:
      "El radar de esta semana refuerza una idea: las fricciones tecnicas suelen anticipar cambios estrategicos mayores.",
  },
  {
    slug: "radar-semanal-ia-sanciones-y-monedas",
    title: "Radar semanal: IA, sanciones y monedas",
    subtitle:
      "Tres senales breves para leer como se acoplan tecnologia, finanzas y capacidad estatal.",
    excerpt:
      "En el corto plazo, las transformaciones globales se filtran por medidas aparentemente tecnicas. En el largo, esas medidas redefinen jerarquias.",
    type: "radar",
    region: "china-asia",
    sectors: [
      "inteligencia-artificial-poder-global",
      "economia-internacional",
      "multipolaridad-gobernanza-global",
    ],
    author: "clara-ibanez",
    date: "2026-04-04",
    readTime: 4,
    tone: "jade",
    tags: ["radar", "IA", "sanciones", "monedas"],
    signals: [
      {
        title: "La IA entra en regulacion sectorial",
        detail:
          "El debate ya no es abstracto. Los gobiernos empiezan a exigir trazabilidad, evaluacion de riesgo y gobernanza concreta por sector.",
      },
      {
        title: "Las sanciones generan sistemas de redundancia",
        detail:
          "Pagos, seguros, proveedores y redes logisticas se adaptan para sobrevivir en entornos de mayor friccion politica.",
      },
      {
        title: "Las monedas locales ganan uso tactico",
        detail:
          "No reemplazan al sistema dominante, pero si abren espacios de transaccion y financiamiento menos expuestos a volatilidad geopolitica.",
      },
    ],
    outlook:
      "La leccion comun es clara: tecnologia y finanzas ya operan como parte del mismo tablero estrategico.",
  },
];

export const articles = [...modularArticles, ...legacyArticles];
