import { modularArticles } from "./articles/index.js?v=20260603c";

export const site = {
  name: "Geo Scope",
  url: "https://geo-scope.online",
  tagline:
    "Análisis estratégico sobre geopolítica, tecnología, economía y el nuevo orden global.",
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
  { label: "Análisis", href: "analysis.html", key: "analysis" },
  { label: "Opinión", href: "opinion.html", key: "opinion" },
  { label: "Radar semanal", href: "radar.html", key: "radar" },
  { label: "Regiones", href: "regions.html", key: "regions" },
  { label: "Sectores", href: "sectors.html", key: "sectors" },
  { label: "Expertos", href: "experts.html", key: "experts" },
  { label: "Sobre Geo Scope", href: "about.html", key: "about" },
  { label: "Contacto", href: "contact.html", key: "contact" },
  { label: "Suscripción", href: "subscription.html", key: "subscription" },
];

export const newsletterInterests = [
  "Geopolítica",
  "Economía internacional",
  "Tecnología y geopolítica",
  "Energía",
  "Comercio y cadenas logísticas",
  "Defensa y seguridad",
  "Diplomacia",
  "Infraestructura estratégica",
  "Inteligencia artificial y poder global",
  "Multipolaridad y gobernanza global",
];

export const about = {
  mission:
    "Interpretar los cambios globales con rigor editorial, mirada estratégica y lenguaje claro.",
  vision:
    "Convertirse en una plataforma de referencia para decisores, analistas, empresarios, academia y lectores que buscan comprender el reordenamiento global más allá del ciclo noticioso.",
  manifesto: [
    "Geo Scope parte de una premisa simple: el mundo no necesita más ruido, necesita mejores marcos para pensar.",
    "La plataforma combina lectura profunda, criterio comparado y sensibilidad internacional para explicar tendencias geoeconómicas, tecnológicas y políticas con una voz sobria y precisa.",
    "No perseguimos la reacción inmediata. Privilegiamos el contexto, las implicaciones y las preguntas correctas.",
  ],
  principles: [
    "Análisis antes que alarma.",
    "Profundidad antes que velocidad.",
    "Contexto regional con mirada global.",
    "Lenguaje claro sin perder densidad estratégica.",
  ],
};

export const authors = [
  {
    slug: "javier-salazar-segales",
    name: "Javier Salazar Segales",
    role: "Director General & Fundador",
    specialty:
      "Especialista en Geopolítica, Diplomacia, BRICS, América Latina, AI & Technology, Energía y Comercio Internacional",
    summary:
      "Analista internacional boliviano y fundador de Geo Scope, con foco en geopolítica, diplomacia, BRICS, tecnología y transformación del orden global.",
    photo: "/assets/experts/javier-salazar-segales.jpeg",
    affiliations: ["Dirección General", "Fundador", "Geo Scope"],
    expertise: [
      "Geopolítica",
      "Diplomacia",
      "BRICS",
      "América Latina",
      "AI & Technology",
      "Energía",
      "Comercio Internacional",
    ],
    languages: ["Español", "Inglés", "Ruso", "Chino"],
    education:
      "Formación en informática, tecnologías de la información, negocios internacionales y gestión empresarial, con experiencia en diplomacia, cooperación internacional, análisis político aplicado y geopolítica.",
    biography: [
      "Javier Jonathan Salazar Segales es analista internacional boliviano y fundador de Geo Scope, una plataforma dedicada al análisis geopolítico, la inteligencia estratégica, los BRICS, América Latina, la tecnología, la energía y la transformación del orden global. Con formación y experiencia en diplomacia, negocios internacionales y tecnología, su trabajo examina cómo las potencias emergentes, los nuevos bloques económicos, la inteligencia artificial y la competencia geopolítica están reconfigurando la gobernanza global y las relaciones internacionales.",
      "Javier Salazar Segales cuenta con experiencia profesional en asuntos diplomáticos, elaboración de informes políticos y económicos, coordinación institucional y cooperación internacional. Sus áreas de interés incluyen el papel de los BRICS en el Sur Global, la posición de América Latina en un mundo multipolar, la soberanía tecnológica, la seguridad energética y el impacto de la inteligencia artificial en el poder estatal y la toma de decisiones estratégicas.",
      "A través de Geo Scope, busca ofrecer análisis claros, accesibles y orientados al futuro sobre las principales fuerzas que están moldeando el siglo XXI, con especial atención a la intersección entre geopolítica, economía, tecnología y desarrollo regional.",
    ],
  },
];

export const regions = [
  {
    slug: "global",
    name: "Global",
    strap: "Flujos sistémicos, poder financiero y reordenamiento internacional.",
    description:
      "Lecturas transversales sobre las fuerzas que conectan grandes potencias, liquidez global, comercio, tecnología y arquitectura de poder a escala mundial.",
    tags: ["dólar", "liquidez", "flujos", "sistema internacional"],
    accent: "midnight",
  },
  {
    slug: "brics",
    name: "BRICS",
    strap: "Coordinación flexible, peso industrial y arquitectura paralela.",
    description:
      "Seguimiento de la evolución política, financiera y tecnológica del espacio BRICS y su impacto sobre el equilibrio institucional global.",
    tags: ["monedas", "estándares", "sur global", "finanzas"],
    accent: "steel",
  },
  {
    slug: "america-latina",
    name: "América Latina",
    strap: "Recursos, diplomacia de autonomía y posicionamiento estratégico.",
    description:
      "Lecturas sobre el lugar de América Latina en la competencia por cadenas de valor, energía, minerales críticos y alianzas de mediano plazo.",
    tags: ["nearshoring", "materias primas", "autonomía", "puertos"],
    accent: "bronze",
  },
  {
    slug: "rusia-eurasia",
    name: "Rusia y Eurasia",
    strap: "Corredores, seguridad extendida y reorganización continental.",
    description:
      "Análisis de la proyección estratégica de Rusia y Eurasia en un tablero atravesado por sanciones, rutas logísticas y competencia militar-industrial.",
    tags: ["sanciones", "disuasión", "corredores", "energía"],
    accent: "indigo",
  },
  {
    slug: "china-asia",
    name: "China y Asia",
    strap: "Escala productiva, estándares técnicos y competencia por la manufactura.",
    description:
      "Seguimiento de la centralidad asiática en tecnología, comercio, infraestructura y arquitectura financiera del siglo XXI.",
    tags: ["semiconductores", "conectividad", "manufactura", "digital"],
    accent: "jade",
  },
  {
    slug: "europa",
    name: "Europa",
    strap: "Autonomía estratégica, industria y seguridad de alta densidad regulatoria.",
    description:
      "Cobertura de la tensión entre apertura, seguridad económica, defensa y reconstrucción industrial en la agenda europea.",
    tags: ["energía", "regulación", "defensa", "ártico"],
    accent: "silver",
  },
  {
    slug: "medio-oriente",
    name: "Medio Oriente",
    strap: "Capital, energía y nuevas geografías del poder regional.",
    description:
      "Análisis de energía, corredores, finanzas soberanas y reconfiguración diplomática en Medio Oriente.",
    tags: ["golfo", "petróleo", "fondos soberanos", "estrechos"],
    accent: "gold",
  },
  {
    slug: "africa",
    name: "África",
    strap: "Minerales críticos, infraestructura y capacidad de negociación.",
    description:
      "Seguimiento del rol africano en la transición energética, las nuevas cadenas industriales y la disputa por conectividad y recursos.",
    tags: ["cobre", "litio", "puertos", "industrialización"],
    accent: "forest",
  },
  {
    slug: "estados-unidos-occidente",
    name: "Estados Unidos y Occidente",
    strap: "Poder tecnológico, alianzas y política industrial de segunda generación.",
    description:
      "Lecturas sobre el rediseño del poder occidental entre subsidios, seguridad económica, sanciones y reconstrucción de alianzas.",
    tags: ["chips", "alianzas", "subsidios", "tecnopolítica"],
    accent: "midnight",
  },
];

export const sectors = [
  {
    slug: "geoeconomia-global",
    name: "Geoeconomía global",
    description:
      "Interacción entre comercio, deuda, monedas, poder financiero y estrategia internacional.",
    icon: "orbit",
    accent: "midnight",
  },
  {
    slug: "mercados-financieros",
    name: "Mercados financieros",
    description:
      "Liquidez, tasas, bonos, bolsas y mecanismos de absorción del ahorro global.",
    icon: "bars",
    accent: "steel",
  },
  {
    slug: "china-estados-unidos",
    name: "China y Estados Unidos",
    description:
      "Competencia estructural entre manufactura, finanzas, tecnología y capacidad estatal.",
    icon: "compass",
    accent: "indigo",
  },
  {
    slug: "geopolitica",
    name: "Geopolítica",
    description:
      "Competencia entre potencias, equilibrio regional y reordenamiento del poder.",
    icon: "compass",
    accent: "midnight",
  },
  {
    slug: "economia-internacional",
    name: "Economía internacional",
    description:
      "Flujos financieros, política industrial, deuda, monedas y arquitectura global.",
    icon: "bars",
    accent: "steel",
  },
  {
    slug: "tecnologia-geopolitica",
    name: "Tecnología y geopolítica",
    description:
      "Infraestructura digital, estándares, chips, plataformas y capacidad estatal.",
    icon: "circuit",
    accent: "indigo",
  },
  {
    slug: "energia",
    name: "Energía",
    description:
      "Petróleo, gas, renovables, minerales críticos y seguridad de suministro.",
    icon: "pulse",
    accent: "gold",
  },
  {
    slug: "comercio-cadenas-logisticas",
    name: "Comercio y cadenas logísticas",
    description:
      "Rutas marítimas, reshoring, nearshoring y reorganización de nodos productivos.",
    icon: "route",
    accent: "jade",
  },
  {
    slug: "defensa-seguridad",
    name: "Defensa y seguridad",
    description:
      "Capacidad militar, disuasión, industria de defensa y arquitectura de seguridad.",
    icon: "shield",
    accent: "bronze",
  },
  {
    slug: "diplomacia",
    name: "Diplomacia",
    description:
      "Alineamientos, mediación, foros regionales y gestión estratégica de relaciones.",
    icon: "handshake",
    accent: "silver",
  },
  {
    slug: "infraestructura-estrategica",
    name: "Infraestructura estratégica",
    description:
      "Corredores, puertos, telecomunicaciones y nodos de conectividad crítica.",
    icon: "grid",
    accent: "forest",
  },
  {
    slug: "inteligencia-artificial-poder-global",
    name: "Inteligencia artificial y poder global",
    description:
      "IA como vector de competitividad, vigilancia, productividad y proyección estatal.",
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
    slug: "brics-y-el-nuevo-equilibrio-tecnológico-global",
    title: "BRICS y el nuevo equilibrio tecnológico global",
    subtitle:
      "La competencia por estándares, plataformas industriales y capacidad de cómputo esta redefiniendo el peso relativo del bloque.",
    excerpt:
      "El debate sobre los BRICS ya no gira solo en torno a monedas o representacion institucional. La nueva pregunta es quien controla los nodos tecnológicos que estructuran la siguiente fase del poder global.",
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
    homeFeature: 7,
    tone: "midnight",
    tags: ["BRICS", "IA", "estándares", "capacidad industrial"],
    thesis:
      "La disputa tecnologica entre potencias se ha desplazado de la retórica de bloques hacia la construcción de ecosistemas concretos: centros de datos, talento, manufactura avanzada y normas técnicas.",
    whyItMatters: [
      "Para el bloque BRICS, la coordinación tecnologica funciona como multiplicador de peso geopolitico incluso cuando no existe una arquitectura plenamente integrada.",
      "El acceso a infraestructura digital, semiconductores maduros, servicios en la nube y cadenas de valor industriales define hoy una parte creciente de la autonomía estratégica.",
    ],
    regionalLens:
      "La pregunta central no es si los BRICS operan como alianza cerrada, sino si pueden sincronizar prioridades suficientes para construir escala, reducir dependencia y negociar desde una mejor posición.",
    outlook:
      "En el corto plazo veremos coaliciones variables y acuerdos parciales. En el mediano, la clave será si el bloque transforma volumen económico en capacidad institucional durable.",
  },
  {
    slug: "que-significa-la-fragmentacion-del-comercio-mundial-para-america-latina",
    title: "Qué significa la fragmentacion del comercio mundial para América Latina",
    subtitle:
      "Nearshoring, friendshoring y seguridad económica abren oportunidades, pero también exigen estrategia industrial y coordinación regional.",
    excerpt:
      "La fragmentacion del comercio global no implica una desglobalizacion total. Implica una geografía más política del comercio, donde América Latina puede ganar relevancia si evita una insercion puramente extractiva.",
    type: "analysis",
    region: "america-latina",
    sectors: ["comercio-cadenas-logisticas", "economia-internacional"],
    author: "javier-salazar-segales",
    date: "2026-04-20",
    readTime: 9,
    homeFeature: 8,
    tone: "jade",
    tags: ["nearshoring", "América Latina", "logística", "industria"],
    thesis:
      "La fragmentacion comercial no significa el fin del intercambio global, sino una reorganizacion basada en resiliencia, proximidad política y control de riesgos.",
    whyItMatters: [
      "Para América Latina, el escenario abre espacio en manufactura, agroindustria, minerales y servicios, pero solo si hay capacidad de coordinación público-privada y mejoras logísticas.",
      "La region corre el riesgo de convertirse en proveedor de contingencia sin capturar eslabones de mayor valor si no fortalece infraestructura, talento y reglas estables.",
    ],
    regionalLens:
      "Mexico, Brasil, Chile, Colombia y el corredor del Cono Sur enfrentan oportunidades distintas. El punto comun es la necesidad de traducir coyuntura geopolítica en política económica consistente.",
    outlook:
      "El proximo ciclo premiara a quienes ofrezcan previsibilidad regulatoria, energía competitiva y nodos logísticos confiables. La ventaja geografica, por si sola, ya no alcanza.",
  },
  {
    slug: "rusia-y-eurasia-en-la-reconfiguracion-del-poder-global",
    title: "Rusia y Eurasia en la reconfiguracion del poder global",
    subtitle:
      "Entre sanciones, corredores terrestres y capacidad militar-industrial, Eurasia vuelve a ocupar un lugar estructural en el tablero internacional.",
    excerpt:
      "Eurasia ya no puede leerse solo desde el lente del conflicto. Tambien debe analizarse como espacio logístico, energético y político en plena reordenacion.",
    type: "analysis",
    region: "rusia-eurasia",
    sectors: ["geopolitica", "defensa-seguridad"],
    author: "javier-salazar-segales",
    date: "2026-04-18",
    readTime: 10,
    homeFeature: 9,
    tone: "indigo",
    tags: ["Eurasia", "seguridad", "sanciones", "corredores"],
    thesis:
      "La centralidad eurasica surge de la convergencia entre geografía, seguridad y conectividad. Incluso bajo presión, la region sigue condicionando rutas, energía y posturas diplomáticas.",
    whyItMatters: [
      "Las sanciones aceleraron ajustes financieros y logísticos que alteraron flujos comerciales, nodos de transporte y alianzas tacticas.",
      "La capacidad militar-industrial y la profundidad territorial siguen siendo variables determinantes en cualquier lectura sobre seguridad europea y asiática.",
    ],
    regionalLens:
      "Desde el Caspio hasta el Ártico, la region combina vulnerabilidades operativas con ventajas de posición geográfico que ningún actor externo puede ignorar.",
    outlook:
      "La proxima etapa dependerá menos de comunicados y más de la resistencia productiva, la apertura de corredores alternativos y la densidad de acuerdos con Asia, Medio Oriente y el sur global.",
  },
  {
    slug: "energia-corredores-logisticos-y-competencia-geoeconomica",
    title: "Energía, corredores logísticos y competencia geoeconómica",
    subtitle:
      "Los cuellos de botella del suministro ya no son un asunto técnico: son un tema de poder, financiamiento y capacidad de anticipacion.",
    excerpt:
      "Corredores, puertos, estrechos y terminales energéticas forman una sola geografía estratégica. Quien reduce friccion logística gana margen político.",
    type: "analysis",
    region: "medio-oriente",
    sectors: ["energia", "infraestructura-estrategica"],
    author: "javier-salazar-segales",
    date: "2026-04-16",
    readTime: 8,
    homeFeature: 10,
    tone: "gold",
    tags: ["energia", "corredores", "geoeconomía", "puertos"],
    thesis:
      "La competencia geoeconómica actual se organiza alrededor de infraestructura física concreta: puertos, redes eléctricas, ductos, cables y plataformas logísticas.",
    whyItMatters: [
      "Los actores que combinan financiamiento, seguridad y capacidad operativa sobre esos nodos obtienen influencia muy superior a su peso nominal.",
      "La energía sigue siendo el lenguaje comun entre seguridad nacional, política industrial y diplomacia económica.",
    ],
    regionalLens:
      "Medio Oriente conserva centralidad no solo por hidrocarburos, sino por su función como bisagra entre Asia, Europa y Africa.",
    outlook:
      "Las disputas futuras se medirán menos por volumen de comercio agregado y más por control de cuellos de botella, redundancias y tiempo de respuesta ante crisis.",
  },
  {
    slug: "la-inteligencia-artificial-como-herramienta-de-poder-estatal",
    title: "La inteligencia artificial como herramienta de poder estatal",
    subtitle:
      "La carrera por la IA no es solo una competencia empresarial. Es una disputa por administracion, defensa, productividad y capacidad de gobierno.",
    excerpt:
      "La IA se está integrando al corazón del aparato estatal: inteligencia, gestión fiscal, industria, defensa y servicios publicos. El punto no es solo innovar, sino gobernar mejor y más rápido.",
    type: "opinión",
    region: "estados-unidos-occidente",
    sectors: [
      "inteligencia-artificial-poder-global",
      "tecnologia-geopolitica",
    ],
    author: "javier-salazar-segales",
    date: "2026-04-15",
    readTime: 7,
    tone: "midnight",
    tags: ["IA", "Estado", "gobernanza", "productividad"],
    thesis:
      "La narrativa dominante presenta la inteligencia artificial como disrupcion de mercado, cuando en realidad su impacto más profundo se juega en la capacidad estatal.",
    whyItMatters: [
      "Quienes integren IA en burocracias, defensa, supervisión financiera y planificación estratégica elevaran su productividad institucional y su margen de acción exterior.",
      "La brecha futura no será solo entre empresas lideres y rezagadas, sino entre Estados capaces de absorber tecnología y Estados que solo la consumen.",
    ],
    regionalLens:
      "Estados Unidos y sus aliados conservan ventaja en capital, cómputo y ecosistema innovador, pero esa ventaja exige coordinación regulatoria y despliegue público más fino.",
    outlook:
      "La siguiente gran discusión será sobre interoperabilidad, supervisión y doctrina. La IA que importa geopoliticamente es la que entra en sistemas reales, no la que domina titulares.",
  },
  {
    slug: "tres-señales-que-están-redefiniendo-la-multipolaridad",
    title: "Tres señales que están redefiniendo la multipolaridad",
    subtitle:
      "Una lectura breve de los movimientos que muestran por donde puede cambiar la arquitectura del poder global.",
    excerpt:
      "La multipolaridad no aparece de golpe. Se manifiesta en pequeños reajustes financieros, diplomáticos y tecnológicos que, combinados, cambian el terreno de juego.",
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
          "Foros flexibles, bancos regionales y plataformas de pago están dejando de ser simbólicos para convertirse en mecanismos de coordinación concreta.",
      },
      {
        title: "La diplomacia sectorial pesa más que los grandes bloques",
        detail:
          "Minerales, energía, conectividad e inteligencia artificial generan coaliciones parciales que reordenan prioridades más rápido que los alineamientos ideologicos tradicionales.",
      },
    ],
    outlook:
      "La multipolaridad avanza cuando se vuelve operativa. La pregunta relevante es que acuerdos producen capacidad, no que discursos prometen cambio.",
  },
  {
    slug: "por-que-el-ártico-importa-cada-vez-más",
    title: "Por qué el Ártico importa cada vez más",
    subtitle:
      "Nuevas rutas, recursos, seguridad y clima convierten al norte extremo en una de las fronteras estratégicas más sensibles.",
    excerpt:
      "El Ártico se está volviendo una zona de competencia simultáneamente energetica, comercial, militar y científica. Esa superposición explica su creciente relevancia.",
    type: "analysis",
    region: "europa",
    sectors: ["geopolitica", "energia"],
    author: "javier-salazar-segales",
    date: "2026-04-13",
    readTime: 8,
    tone: "silver",
    tags: ["Ártico", "rutas", "energia", "seguridad"],
    thesis:
      "El Ártico concentra una rareza estratégica: es frontera climatica, reservorio energético, corredor potencial y espacio de competencia militar al mismo tiempo.",
    whyItMatters: [
      "Cambios en navegabilidad, infraestructura dual y explotacion de recursos alteran calculos de costo, tiempo y presencia militar.",
      "Europa, Rusia, Norteamérica y Asia observan el Ártico con lentes distintos, pero todos coinciden en que su importancia relativa esta aumentando.",
    ],
    regionalLens:
      "Para Europa, el Ártico combina seguridad energetica, protección de rutas y necesidad de coordinarse con aliados sin perder autonomía regulatoria.",
    outlook:
      "No se trata de una nueva fiebre del oro. Se trata de un espacio que obliga a repensar infraestructura, disuasión y gobernanza antes de que la presión crezca aún más.",
  },
  {
    slug: "china-y-asia-estándares-digitales-y-rutas-industriales",
    title: "China y Asia: estándares digitales y rutas industriales",
    subtitle:
      "La region consolida una ventaja menos visible pero más profunda: definir como se produce, se conecta y se escala la tecnología.",
    excerpt:
      "Asia ya no es solo la fabrica del mundo. Es también un laboratorio de estándares, coordinación industrial e infraestructura digital con impacto global.",
    type: "analysis",
    region: "china-asia",
    sectors: ["tecnologia-geopolitica", "infraestructura-estrategica"],
    author: "javier-salazar-segales",
    date: "2026-04-12",
    readTime: 10,
    tone: "jade",
    tags: ["Asia", "estándares", "digital", "industria"],
    thesis:
      "La influencia asiática crece porque combina escala productiva, financiamiento y capacidad para definir normas operativas en sectores estratégicos.",
    whyItMatters: [
      "Quien fija estándares técnicos también fija costos de entrada, interoperabilidad y dependencia futura.",
      "La integración entre manufactura, logística y conectividad digital le da a Asia una profundidad sistémica difícil de replicar en otras regiones.",
    ],
    regionalLens:
      "China ocupa el centro del tablero, pero el ecosistema regional depende también de India, ASEAN, Corea, Japón y múltiples arreglos funcionales.",
    outlook:
      "La proxima batalla por cadenas tecnológicas no será solo por liderazgo de marca, sino por capacidad de imponer reglas practicas de producción y adopción.",
  },
  {
    slug: "europa-seguridad-industrial-y-autonomía-estratégica",
    title: "Europa: seguridad industrial y autonomía estratégica",
    subtitle:
      "La agenda europea intenta reconciliar apertura de mercado, defensa, energía y reconstruccion productiva sin perder cohesion política.",
    excerpt:
      "Europa enfrenta un dilema estructural: necesita ser más resiliente sin dejar de ser abierta. Esa tensión esta redisenando su política económica y su lenguaje geopolitico.",
    type: "opinión",
    region: "europa",
    sectors: ["economia-internacional", "diplomacia"],
    author: "javier-salazar-segales",
    date: "2026-04-11",
    readTime: 7,
    tone: "silver",
    tags: ["Europa", "autonomía estratégica", "industria", "regulacion"],
    thesis:
      "La autonomía estratégica europea no es un giro ideológico repentino. Es la respuesta acumulada a choques energéticos, presión tecnologica y vulnerabilidad industrial.",
    whyItMatters: [
      "Europa esta redefiniendo subsidios, reglas de competencia y políticas de seguridad económica para reducir dependencia en sectores críticos.",
      "El desafio es hacerlo sin fragmentar el mercado interno ni deteriorar su capacidad diplomática con socios clave.",
    ],
    regionalLens:
      "La discusión europea es menos binaria de lo que suele creerse: no se trata de elegir entre autonomía o alianza, sino de encontrar una combinacion sostenible de ambas.",
    outlook:
      "El exito dependerá de ejecutar políticas industriales selectivas con financiamiento creible y de coordinar regulacion con una visión más geopolítica del mercado comun.",
  },
  {
    slug: "africa-minerales-críticos-manufactura-y-poder-negociador",
    title: "Africa: minerales críticos, manufactura y poder negociador",
    subtitle:
      "El continente gana centralidad en la transición energetica, pero la verdadera pregunta es cuanta captura de valor podrá retener.",
    excerpt:
      "Africa se ha vuelto indispensable para minerales críticos, corredores y demanda futura. El desafio es convertir esa centralidad en capacidad industrial propia.",
    type: "analysis",
    region: "africa",
    sectors: ["infraestructura-estrategica", "economia-internacional"],
    author: "javier-salazar-segales",
    date: "2026-04-10",
    readTime: 9,
    tone: "forest",
    tags: ["Africa", "minerales críticos", "manufactura", "negociacion"],
    thesis:
      "La nueva centralidad africana no se explica solo por recursos. Se explica por la combinacion entre minerales, mercados urbanos, conectividad y posición geografica.",
    whyItMatters: [
      "La transición energetica y la competencia por baterías aumentan el valor estratégico de cobalto, cobre, manganeso y tierras raras.",
      "La oportunidad real está en transformar contratos extractivos en plataformas de procesamiento, formación de talento e infraestructura compartida.",
    ],
    regionalLens:
      "Los gobiernos africanos negocian ahora con un margen algo mayor porque existe más competencia entre oferentes de financiamiento, tecnología y seguridad.",
    outlook:
      "El punto de inflexion vendra si esa competencia externa se traduce en agendas nacionales de industrializacion con instituciones capaces de sostenerlas.",
  },
  {
    slug: "estados-unidos-alianzas-y-política-industrial-de-segunda-ola",
    title: "Estados Unidos, alianzas y política industrial de segunda ola",
    subtitle:
      "Washington intenta pasar de la reaccion a una estrategia más durable basada en industria, seguridad económica y coordinación con aliados.",
    excerpt:
      "La política industrial estadounidense ya no es un paréntesis. Se está convirtiendo en la gramática económica de una nueva etapa de competencia sistémica.",
    type: "analysis",
    region: "estados-unidos-occidente",
    sectors: ["defensa-seguridad", "diplomacia"],
    author: "javier-salazar-segales",
    date: "2026-04-09",
    readTime: 8,
    tone: "midnight",
    tags: ["Estados Unidos", "alianzas", "industria", "seguridad económica"],
    thesis:
      "La nueva política industrial estadounidense busca reconstruir capacidad domestica y al mismo tiempo ordenar alianzas productivas alrededor de sectores críticos.",
    whyItMatters: [
      "El cambio afecta cadenas de suministro, incentivos a la inversión, normas comerciales y márgenes de acción para socios y competidores.",
      "La coordinación con aliados ya no se mide solo en defensa, sino en subsidios, minerales, chips y protección de tecnología sensible.",
    ],
    regionalLens:
      "Occidente avanza hacia un modelo menos ingenuo sobre interdependencia. La cuestion es si lograra coordinar prioridades sin multiplicar fricciones internas.",
    outlook:
      "La segunda ola industrial será evaluada por resultados tangibles: tiempo de construcción, acceso a insumos, estabilidad política y capacidad de generar ecosistemas completos.",
  },
  {
    slug: "diplomacia-de-media-potencia-en-america-latina",
    title: "Diplomacia de media potencia en América Latina",
    subtitle:
      "La region puede ganar influencia si combina ambición selectiva, consistencia institucional y lectura realista del entorno.",
    excerpt:
      "En un mundo más fragmentado, las potencias medianas tienen una ventaja: pueden negociar con flexibilidad. La desventaja aparece cuando esa flexibilidad carece de estrategia.",
    type: "opinión",
    region: "america-latina",
    sectors: ["diplomacia", "geopolitica"],
    author: "javier-salazar-segales",
    date: "2026-04-08",
    readTime: 6,
    tone: "bronze",
    tags: ["América Latina", "diplomacia", "potencias medianas", "autonomía"],
    thesis:
      "La diplomacia latinoamericana puede ser más influyente si abandona la falsa opcion entre neutralidad retórica y alineamiento pasivo.",
    whyItMatters: [
      "El espacio para negociar existe, pero requiere prioridades nacionales claras, equipos técnicos consistentes y una agenda de intereses concretos.",
      "La region tiene activos valiosos en alimentos, energía, minerales y posición geografica, aunque todavía los comunica y coordina de forma fragmentada.",
    ],
    regionalLens:
      "Brasil, Mexico, Chile, Colombia y otros actores medianos no necesitan hablar igual para generar peso. Necesitan saber donde cooperar y donde diferenciarse.",
    outlook:
      "La proxima decada premiara a los países capaces de ofrecer confiabilidad diplomática y claridad estratégica, no solo retórica de autonomía.",
  },
  {
    slug: "medio-oriente-finanzas-energia-y-el-orden-postpetrolero",
    title: "Medio Oriente: finanzas, energía y el orden postpetrolero",
    subtitle:
      "La region está utilizando capital soberano, infraestructura y diplomacia económica para preparar una influencia más amplia que la petrolera.",
    excerpt:
      "Hablar de un orden postpetrolero no implica que el petróleo pierda relevancia. Implica que la región busca diversificar su poder antes de que el mercado cambie del todo.",
    type: "analysis",
    region: "medio-oriente",
    sectors: ["energia", "comercio-cadenas-logisticas"],
    author: "javier-salazar-segales",
    date: "2026-04-07",
    readTime: 8,
    tone: "gold",
    tags: ["Medio Oriente", "fondos soberanos", "energia", "logística"],
    thesis:
      "Los grandes actores del Golfo están transformando renta energetica en capacidad financiera, conectividad y proyección diplomática.",
    whyItMatters: [
      "Esa conversion de liquidez en posición estratégica altera rutas de inversión, cadenas logísticas y alianzas con Asia, Europa y Africa.",
      "La region ya no compite solo por producción de energía, sino por control de infraestructura, servicios y plataformas de capital.",
    ],
    regionalLens:
      "Medio Oriente se mueve como puente entre regiones y como actor con agenda propia. Esa dualidad eleva su capacidad de arbitraje.",
    outlook:
      "La influencia futura dependerá de cuan rápido pueda traducir visiones de diversificación en sectores productivos resilientes y capital humano avanzado.",
  },
  {
    slug: "infraestructura-corredores-y-poder-en-eurasia",
    title: "Infraestructura, corredores y poder en Eurasia",
    subtitle:
      "Rutas ferroviarias, puertos secos y nuevas conexiones terrestres modifican los calculos estratégicos de actores publicos y privados.",
    excerpt:
      "La infraestructura no es neutra. En Eurasia, cada corredor reorganiza costos, dependencias y alianzas con efectos que van mucho más allá del comercio.",
    type: "analysis",
    region: "rusia-eurasia",
    sectors: ["infraestructura-estrategica", "comercio-cadenas-logisticas"],
    author: "javier-salazar-segales",
    date: "2026-04-06",
    readTime: 9,
    tone: "indigo",
    tags: ["Eurasia", "corredores", "infraestructura", "logística"],
    thesis:
      "Los corredores eurasiaticos son dispositivos de poder porque conectan mercados, financiamiento, seguridad física y opciones diplomáticas.",
    whyItMatters: [
      "Cada ruta alternativa reduce vulnerabilidad ante sanciones, cuellos de botella o crisis maritimas.",
      "Las empresas también ajustan sus estrategias cuando la política altera tiempos, seguros, costos y disponibilidad de infraestructura.",
    ],
    regionalLens:
      "Desde el Mar Caspio hasta los enlaces con China, India y Medio Oriente, Eurasia combina proyectos competitivos y complementariedades tacticas.",
    outlook:
      "La gran variable será la continuidad operativa. En entornos volatiles, el corredor más valioso no es el más corto, sino el más confiable.",
  },
  {
    slug: "radar-semanal-estrechos-estándares-y-alimentos",
    title: "Radar semanal: estrechos, estándares y alimentos",
    subtitle:
      "Cuatro movimientos discretos que ayudan a leer tensiones logísticas y políticas más amplias.",
    excerpt:
      "La semana deja señales que conectan seguridad maritima, regulacion tecnologica y abastecimiento alimentario. Ninguna es aislada.",
    type: "radar",
    region: "africa",
    sectors: ["energia", "comercio-cadenas-logisticas", "diplomacia"],
    author: "javier-salazar-segales",
    date: "2026-04-05",
    readTime: 4,
    tone: "forest",
    tags: ["radar", "estrechos", "alimentos", "regulacion"],
    signals: [
      {
        title: "Mas presión sobre rutas maritimas sensibles",
        detail:
          "Los desvios elevan tiempos, seguros y consumo de combustible, con impacto directo sobre costos finales.",
      },
      {
        title: "Nuevas reglas técnicas alteran acceso a mercados",
        detail:
          "Las normas sobre trazabilidad y datos ya funcionan como filtros competitivos en sectores industriales y agroalimentarios.",
      },
      {
        title: "Seguridad alimentaria vuelve al centro",
        detail:
          "Clima, financiamiento y logística están estrechamente vinculados. Las tensiones en uno de esos frentes contagian rapidamente al resto.",
      },
      {
        title: "Africa gana margen de negociacion",
        detail:
          "La combinacion de puertos, minerales y demanda interna otorga a varios países africanos una voz más relevante en conversaciones multilaterales.",
      },
    ],
    outlook:
      "El radar de esta semana refuerza una idea: las fricciones técnicas suelen anticipar cambios estratégicos mayores.",
  },
  {
    slug: "radar-semanal-ia-sanciones-y-monedas",
    title: "Radar semanal: IA, sanciones y monedas",
    subtitle:
      "Tres señales breves para leer como se acoplan tecnología, finanzas y capacidad estatal.",
    excerpt:
      "En el corto plazo, las transformaciones globales se filtran por medidas aparentemente técnicas. En el largo, esas medidas redefinen jerarquias.",
    type: "radar",
    region: "china-asia",
    sectors: [
      "inteligencia-artificial-poder-global",
      "economia-internacional",
      "multipolaridad-gobernanza-global",
    ],
    author: "javier-salazar-segales",
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
          "Pagos, seguros, proveedores y redes logísticas se adaptan para sobrevivir en entornos de mayor friccion política.",
      },
      {
        title: "Las monedas locales ganan uso tactico",
        detail:
          "No reemplazan al sistema dominante, pero si abren espacios de transaccion y financiamiento menos expuestos a volatilidad geopolítica.",
      },
    ],
    outlook:
      "La leccion comun es clara: tecnología y finanzas ya operan como parte del mismo tablero estratégico.",
  },
];

export const articles = [...modularArticles, ...legacyArticles];
