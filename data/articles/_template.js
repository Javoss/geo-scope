export const articleTemplate = {
  slug: "titulo-del-articulo",
  title: "Título del artículo",
  subtitle: "Subtítulo del artículo",
  excerpt: "Resumen corto para tarjetas, portada y metadescripción.",
  type: "analysis",
  region: "global",
  sectors: ["geopolitica"],
  author: "javier-salazar-segales",
  date: "2026-04-28",
  readTime: 8,
  tone: "midnight",
  tags: ["tag-1", "tag-2"],
  bodySections: [
    {
      paragraphs: [
        "Apertura del artículo sin encabezado, ideal para uno o dos párrafos iniciales.",
      ],
    },
    {
      heading: "Primera sección",
      paragraphs: [
        "Primer párrafo de la sección.",
        "Segundo párrafo de la sección.",
      ],
      callouts: [
        "Frase destacada, idea de síntesis o bloque de alto impacto visual.",
      ],
    },
    {
      heading: "Segunda sección",
      bullets: [
        "Punto clave uno.",
        "Punto clave dos.",
      ],
      subsections: [
        {
          heading: "Subsección",
          paragraphs: [
            "Texto de apoyo dentro de una subsección.",
          ],
        },
      ],
    },
  ],
};
