# Geo Scope

Geo Scope es una plataforma editorial / think tank digital enfocada en geopolitica, economia internacional, tecnologia, energia, comercio y reordenamiento global.

## Contenido del proyecto

- `index.html`: portada principal
- `analysis.html`: archivo general de analisis
- `opinion.html`: seccion de opinion
- `explainers.html`: seccion de explicadores
- `radar.html`: radar semanal
- `regions.html` y `region.html`: portadas y detalle por region
- `sectors.html` y `sector.html`: portadas y detalle por sector
- `article.html`: plantilla de articulo
- `about.html`: pagina institucional
- `contact.html`: contacto
- `subscription.html`: suscripcion / newsletter
- `editor.html`: panel editorial demo
- `assets/styles.css`: estilos principales
- `assets/app.js`: logica de render, filtros y navegacion
- `data/content.js`: metadatos globales, regiones, sectores, autores y archivo legado
- `data/articles/`: articulos modulares en archivos independientes
- `data/articles/_template.js`: plantilla base para publicar nuevos articulos
- `MANUAL_PUBLICACION.md`: guia paso a paso para subir articulos nuevos

## Caracteristicas

- Diseno editorial moderno, elegante y responsive
- Home tipo magazine + think tank
- Filtros por region, sector y formato
- Buscador de articulos
- Articulos relacionados
- Favoritos guardados en `localStorage`
- Formularios demo de newsletter y contacto
- Base simple para evolucionar a CMS o plataforma multi-autor

## Nuevo sistema editorial

La forma recomendada de publicar ahora es:

1. Copiar `data/articles/_template.js`
2. Crear un nuevo archivo dentro de `data/articles/`
3. Completar metadatos y `bodySections`
4. Importar ese archivo en `data/articles/index.js`

El formato `bodySections` permite escribir articulos largos sin tocar el layout:

```js
bodySections: [
  {
    paragraphs: ["Apertura del articulo."],
  },
  {
    heading: "Primera seccion",
    paragraphs: ["Parrafo uno.", "Parrafo dos."],
    callouts: ["Frase destacada."],
  },
  {
    heading: "Segunda seccion",
    bullets: ["Punto uno.", "Punto dos."],
    subsections: [
      {
        heading: "Escenario",
        paragraphs: ["Texto del escenario."],
      },
    ],
  },
];
```

Con este sistema:

- cambias contenido sin tocar diseno
- mantienes una estructura visual uniforme
- cada articulo puede tener secciones largas, listas, citas y subsecciones
- mas adelante sera facil migrar a CMS

## Como abrir el sitio

No abras `index.html` con doble clic directo. El sitio usa modulos JS y debe correr con servidor local.

Ejemplo:

```bash
python3 -m http.server 4173
```

Luego abre:

```text
http://127.0.0.1:4173/index.html
```

## Nota

El proyecto esta construido como sitio estatico multipagina con una separacion clara entre diseno y contenido para facilitar su escalado futuro.
