export const articleTemplate = {
  slug: "titulo-del-articulo",
  title: "Título del articulo",
  subtitle: "Subtítulo del articulo",
  excerpt: "Resumen corto para tarjetas, portada y metadescripcion.",
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
        "Apertura del articulo sin encabezado, ideal para uno o dos parrafos iniciales.",
      ],
    },
    {
      heading: "Primera sección",
      paragraphs: [
        "Primer parrafo de la sección.",
        "Segundo parrafo de la sección.",
      ],
      callouts: [
        "Frase destacada, idea de sintesis o bloque de alto impacto visual.",
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
