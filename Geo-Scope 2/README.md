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
- `data/content.js`: datos demo de articulos, regiones, sectores y autores

## Caracteristicas

- Diseno editorial moderno, elegante y responsive
- Home tipo magazine + think tank
- Filtros por region, sector y formato
- Buscador de articulos
- Articulos relacionados
- Favoritos guardados en `localStorage`
- Formularios demo de newsletter y contacto
- Base simple para evolucionar a CMS o plataforma multi-autor

## Como abrir el sitio

Puedes abrir `index.html` directamente en el navegador o levantar un servidor local simple.

Ejemplo:

```bash
python3 -m http.server 4173
```

Luego abre:

```text
http://127.0.0.1:4173/index.html
```

## Nota

El proyecto esta construido como sitio estatico multipagina con datos centralizados para facilitar su escalado futuro.
