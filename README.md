# Geo Scope

Sitio estático de [geo-scope.online](https://geo-scope.online), publicado con GitHub Pages desde la rama `main`.

## Cómo está hecho

| Carpeta / archivo | Qué contiene | ¿Se edita a mano? |
| --- | --- | --- |
| `data/content.js` | Regiones, sectores, autores y artículos antiguos (en español) | Sí |
| `data/articles/*.js` | Un archivo por artículo nuevo (en español); registro en `data/articles/index.js` | Sí |
| `data/i18n.js` | Textos de la interfaz y traducciones EN / RU / ZH | Sí |
| `data/article-translations/*.js` | Traducciones largas de algunos artículos | Sí |
| `assets/app.js`, `assets/styles.css` | Código y estilos del sitio | Sí |
| `data/i18n/*.js` | Traducciones separadas por idioma (cada visitante descarga solo la suya) | **No: las genera el build** |
| `*/index.html`, `404.html`, `sitemap.xml` | Páginas estáticas para buscadores y primera carga | **No: las genera el build** |
| `assets/og/` | Imágenes para compartir en redes (1200×630), una por artículo e idioma | **No: las genera el build** |

## Publicar un cambio

1. Edita los archivos de `data/` (o el código).
2. Genera el sitio:

   ```bash
   npm install                     # solo la primera vez
   npx playwright install chromium # solo la primera vez
   npm run build
   ```

   El build tarda unos 3 minutos: abre cada página en Chromium, guarda el HTML, regenera `sitemap.xml`, las traducciones por idioma y las imágenes para redes que hayan cambiado. Si alguna página lanza un error de JavaScript, lo muestra al final y termina con error.

3. Revisa en local con `npm run serve` y abre <http://localhost:8080>.
4. Haz commit de **todo** (incluidos los archivos generados) y push a `main`. GitHub Pages publica en unos minutos.

> Si cambias `data/i18n.js` y no ejecutas el build, el cambio no llega a la web: la página usa los archivos generados en `data/i18n/`.

## Añadir un artículo

1. Copia `data/articles/_template.js` a `data/articles/<slug>.js` y rellénalo.
2. Usa un **slug sin tildes ni eñes** (`la-nueva-carrera-lunar`, no `la-nueva-carrera-lúnar`): evita URLs con `%C3%A1` y problemas entre macOS y Git.
3. Impórtalo y añádelo a la lista en `data/articles/index.js`.
4. Opcional: añade la traducción en `data/i18n.js` (sección `contentTranslations`, por slug).
5. `npm run build`.

## Notas

- Las imágenes para redes usan las fuentes del sistema. Para que el chino se vea bien hace falta una fuente CJK (en Linux: `fonts-noto-cjk`).
- El build genera solo una ruta: `npm run build -- --only=/article/mi-slug/` (útil para probar; no actualiza el sitemap).
