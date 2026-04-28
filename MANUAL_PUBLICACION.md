# Manual de Publicacion de Articulos

Este manual explica como subir nuevos articulos a Geo Scope sin romper el diseno de la pagina.

## Idea general

La web ahora funciona con este sistema:

- El diseno vive en `assets/app.js` y `assets/styles.css`
- Los datos generales viven en `data/content.js`
- Los articulos nuevos viven en `data/articles/`

La regla mas importante es esta:

**Para publicar un articulo nuevo, no toques `article.html` ni el layout. Solo crea o edita archivos de contenido.**

---

## Archivos que si debes tocar

- `data/articles/_template.js`
- `data/articles/index.js`
- `data/content.js`

## Archivos que no debes tocar para publicar

- `article.html`
- `index.html`
- `assets/app.js`
- `assets/styles.css`

Solo deberias tocar esos archivos de diseno si quieres cambiar la apariencia del sitio.

---

## Paso 1. Crear el archivo del articulo

1. Ve a la carpeta `data/articles/`
2. Copia el archivo `data/articles/_template.js`
3. Pegalo con un nombre nuevo basado en el slug del articulo

Ejemplo:

`data/articles/brics-y-el-futuro-de-las-monedas-locales.js`

---

## Paso 2. Completar los datos basicos

Dentro del archivo nuevo veras una estructura asi:

```js
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
  bodySections: []
};
```

Debes cambiar:

- `slug`: la URL del articulo
- `title`: titulo principal
- `subtitle`: subtitulo
- `excerpt`: resumen corto
- `type`: `analysis`, `opinion` o `radar`
- `region`: una region existente
- `sectors`: uno o varios sectores existentes
- `author`: slug del autor
- `date`: fecha en formato `YYYY-MM-DD`
- `readTime`: minutos estimados
- `tone`: tono visual de portada
- `tags`: etiquetas del articulo

---

## Paso 3. Escribir el cuerpo del articulo

El contenido largo se escribe dentro de `bodySections`.

Este sistema soporta:

- `paragraphs`: parrafos normales
- `heading`: titulo de seccion
- `callouts`: frases destacadas o ideas fuertes
- `bullets`: listas
- `subsections`: subsecciones dentro de una seccion

### Ejemplo completo

```js
bodySections: [
  {
    paragraphs: [
      "Parrafo de apertura del articulo.",
      "Segundo parrafo de apertura."
    ]
  },
  {
    heading: "Primera seccion",
    paragraphs: [
      "Primer parrafo de esta seccion.",
      "Segundo parrafo de esta seccion."
    ],
    callouts: [
      "Frase destacada o idea central."
    ]
  },
  {
    heading: "Riesgos principales",
    bullets: [
      "Riesgo uno.",
      "Riesgo dos.",
      "Riesgo tres."
    ]
  },
  {
    heading: "Escenarios",
    subsections: [
      {
        heading: "1. Escenario base",
        paragraphs: [
          "Descripcion del escenario base."
        ]
      },
      {
        heading: "2. Escenario de ruptura",
        paragraphs: [
          "Descripcion del escenario de ruptura."
        ]
      }
    ]
  }
]
```

### Recomendacion practica

Si escribes primero en Word:

- convierte cada bloque grande en una seccion
- usa `paragraphs` para desarrollo normal
- usa `callouts` para frases potentes
- usa `bullets` para listas de riesgos, claves o puntos
- usa `subsections` para escenarios, casos o comparaciones

---

## Paso 4. Registrar el articulo en el indice

Despues de crear el archivo, debes importarlo en:

`data/articles/index.js`

Ejemplo:

```js
import { articleBricsMonedasLocales } from "./brics-y-el-futuro-de-las-monedas-locales.js?v=20260428b";

export const modularArticles = [
  articleChinaProduceEstadosUnidosWallStreetGana,
  articleBricsMonedasLocales,
];
```

Si no haces este paso, el articulo no aparecera en la web.

---

## Paso 5. Si hace falta, crear autor nuevo

Si el articulo lo firma otra persona, debes agregar el autor en:

`data/content.js`

Busca el bloque `export const authors = [...]`

Ejemplo:

```js
{
  slug: "ana-perez",
  name: "Ana Perez",
  role: "Analista de energia"
}
```

Luego usa ese `slug` en el articulo:

```js
author: "ana-perez"
```

---

## Paso 6. Si hace falta, crear region o sector nuevo

### Region nueva

Edita:

`data/content.js`

En el bloque:

`export const regions = [...]`

### Sector nuevo

Edita:

`data/content.js`

En el bloque:

`export const sectors = [...]`

Importante:

- si escribes una `region` o un `sector` en el articulo, ese slug debe existir en `data/content.js`
- si no existe, el articulo puede salir mal o perder datos visuales

---

## Paso 7. Destacar un articulo en la home

Si quieres que un articulo salga en la portada principal, usa:

```js
homeFeature: 1
```

Tambien puedes usar:

- `homeFeature: 2`
- `homeFeature: 3`
- `homeFeature: 4`

Cuanto menor el numero, mayor prioridad en la home.

Si no quieres que aparezca destacado, simplemente no pongas `homeFeature`.

---

## Paso 8. Elegir el tono visual

Puedes usar estos tonos ya existentes:

- `midnight`
- `steel`
- `bronze`
- `indigo`
- `jade`
- `silver`
- `gold`
- `forest`

Ejemplo:

```js
tone: "midnight"
```

Eso afecta la portada visual del articulo y sus tarjetas.

---

## Paso 9. Probarlo en local

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
python3 -m http.server 8000
```

Luego abre:

`http://127.0.0.1:8000/index.html`

Para probar el articulo directamente:

`http://127.0.0.1:8000/article.html?slug=tu-slug`

Ejemplo:

`http://127.0.0.1:8000/article.html?slug=china-produce-estados-unidos-se-endeuda-y-wall-street-gana`

Si no ves cambios:

- guarda los archivos
- recarga fuerte con `Cmd + Shift + R`
- prueba en ventana incognito

---

## Paso 10. Subirlo a tu web

Cuando ya lo hayas probado:

1. Sube los archivos modificados a tu hosting
2. Asegurate de subir:
   - `data/content.js` si cambiaste autores, sectores o regiones
   - `data/articles/` si agregaste articulos nuevos
   - `data/articles/index.js`
3. Sube tambien los HTML si hubo cambio de version de `app.js` o `styles.css`

---

## Errores comunes

### 1. El articulo no aparece

Normalmente pasa porque:

- no importaste el articulo en `data/articles/index.js`
- el `slug` no coincide

### 2. La pagina queda en blanco

Normalmente pasa porque:

- falta una coma en el archivo
- hay comillas mal cerradas
- pusiste una region o sector que no existe

### 3. No se ve el cambio en la web

Normalmente pasa por caché del navegador.

Solucion:

- recarga fuerte
- cambia la version del asset si hace falta

### 4. El articulo rompe el formato

Eso suele pasar si:

- intentaste meter HTML manual dentro del contenido
- tocaste `assets/app.js` o `article.html` sin necesidad

La solucion correcta es usar `bodySections`.

---

## Flujo recomendado de trabajo

La forma mas segura para publicar es esta:

1. Escribes el articulo en Word
2. Lo conviertes a bloques para `bodySections`
3. Creas el archivo en `data/articles/`
4. Lo registras en `data/articles/index.js`
5. Lo pruebas en local
6. Lo subes al hosting

---

## Tu ejemplo actual

Tu articulo actual ya esta montado aqui:

`data/articles/china-produce-estados-unidos-se-endeuda-y-wall-street-gana.js`

Puedes usarlo como modelo real para los siguientes articulos.

---

## Recomendacion final

Si vas a publicar con frecuencia, no metas nuevos articulos dentro de `data/content.js`.

Usa siempre este sistema:

- un archivo por articulo en `data/articles/`
- `data/articles/index.js` como indice
- `data/content.js` solo para autores, regiones, sectores y datos globales

Ese es el sistema mas ordenado, escalable y seguro para no poner en riesgo el formato de la pagina.
