export const articleTemplate = {
  slug: "titulo-del-articulo",
  title: "Titulo del articulo",
  subtitle: "Subtitulo del articulo",
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
      heading: "Primera seccion",
      paragraphs: [
        "Primer parrafo de la seccion.",
        "Segundo parrafo de la seccion.",
      ],
      callouts: [
        "Frase destacada, idea de sintesis o bloque de alto impacto visual.",
      ],
    },
    {
      heading: "Segunda seccion",
      bullets: [
        "Punto clave uno.",
        "Punto clave dos.",
      ],
      subsections: [
        {
          heading: "Subseccion",
          paragraphs: [
            "Texto de apoyo dentro de una subseccion.",
          ],
        },
      ],
    },
  ],
};
