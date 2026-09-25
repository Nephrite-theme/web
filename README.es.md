<div align="center">

<img src="public/logo.svg" alt="Logo de Nephrite" width="96" height="96">

# Sitio web de Nephrite

[English](README.md) · **Español**

La landing de [Nephrite](https://getnephrite.dev), un tema jade sereno y sin deslumbramientos para Chrome, con Firefox y VS Code en camino.

[![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-3db87a)](LICENSE.es.md)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-1f6b45)](https://tanstack.com/start)
[![Deploy: Vercel](https://img.shields.io/badge/deploy-Vercel-0c130f)](https://vercel.com)

[Sitio](https://getnephrite.dev) · [Tema para Chrome](https://github.com/Nephrite-theme/chrome) · [Reportar un problema](https://github.com/Nephrite-theme/web/issues)

</div>

## Resumen

Una landing de una sola página, renderizada en el servidor, que presenta cada variante de Nephrite, enlaza cada una a su ficha en la Chrome Web Store y muestra el roadmap hacia otras apps. Está en inglés y español, con scroll inercial y animaciones ligadas al scroll que se desactivan para quien prefiere reducir el movimiento.

## Características

- **Selector de variantes.** Cada variante (Forest, Mint, Jade) con sus colores reales del manifiesto y enlace directo a la tienda. Agregar una es solo un cambio de datos.
- **Bilingüe.** Inglés en `/` y español en `/es/`, con metadatos traducidos y alternativas `hreflang`.
- **Movimiento con mesura.** ScrollSmoother de GSAP, roadmap horizontal fijado y apariciones al hacer scroll, todo desactivado con `prefers-reduced-motion`.
- **Listo para SEO.** URLs canónicas, tarjetas Open Graph y X, JSON-LD de la organización y de cada ficha, `robots.txt` y `sitemap.xml`.
- **Diseño jade oscuro.** Tipografía Geist, un solo acento jade e íconos Solar.

## Stack

| Área | Herramientas |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router), React 19, Vite |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com), Geist vía Fontsource |
| Animación | [GSAP](https://gsap.com) con ScrollTrigger y ScrollSmoother |
| i18n | [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) |
| Íconos | [Solar Icons](https://solar-icons.vercel.app), [Simple Icons](https://simpleicons.org) para marcas |
| Herramientas | TypeScript, [Biome](https://biomejs.dev), pnpm |
| Hosting | [Vercel](https://vercel.com) a través de Nitro |

## Primeros pasos

### Requisitos

- [Node.js](https://nodejs.org) 22 o superior
- [pnpm](https://pnpm.io) (`corepack enable` instala la versión correcta)

### Correr en local

```sh
git clone https://github.com/Nephrite-theme/web.git
cd web
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para inglés o [http://localhost:3000/es/](http://localhost:3000/es/) para español.

> [!NOTE]
> Paraglide compila los mensajes en `src/paraglide/` al iniciar el servidor de desarrollo o un build. Esa carpeta se genera sola y Git la ignora.

### Scripts

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo en el puerto 3000 |
| `pnpm build` | Genera el build de producción |
| `pnpm preview` | Previsualiza el build de producción |
| `pnpm check` | Revisa lint y formato con Biome |
| `pnpm format` | Formatea el código con Biome |

## Estructura del proyecto

```text
messages/            Textos de cada idioma (en.json, es.json)
project.inlang/      Configuración de Paraglide y lista de idiomas
public/              Logo, favicons, imagen OG, robots.txt, sitemap.xml
src/
  components/
    sections/        Nav, Hero, Variants, Details, Roadmap, Closing
    ui/              Logo, PillLink, InstallMenu, Shot, Swatch
  lib/
    site.ts          Enlaces y lista de variantes
    gsap.ts          Configuración de GSAP y easing compartido
  routes/            __root.tsx (head, SEO) e index.tsx (la página)
  styles.css         Tokens de diseño y estilos globales
```

## Cambios frecuentes

### Agregar una variante del tema

1. Agrega una entrada a `VARIANTS` en [`src/lib/site.ts`](src/lib/site.ts) con su nombre, URL de la Web Store y colores del manifiesto.
2. Agrega un mensaje `variant_<key>_desc` en cada archivo de [`messages/`](messages).

Las pestañas, el menú de instalación, el menú móvil y los datos estructurados la toman solos.

### Agregar capturas

Pon las capturas en `public/shots/<key>.webp` (1188×640, solo la ventana del navegador) y completa `shot` en la variante correspondiente. Mientras tanto, cada hueco muestra un marcador con los colores de la variante.

### Agregar un idioma

Agrega el idioma a `locales` en [`project.inlang/settings.json`](project.inlang/settings.json), crea `messages/<idioma>.json` y suma la URL a [`public/sitemap.xml`](public/sitemap.xml).

> [!TIP]
> Mantén las mismas claves en todos los archivos de idioma para que cada página salga completa.

## Despliegue

El sitio se despliega en Vercel. [`vercel.json`](vercel.json) define el preset de TanStack Start, así que basta con importar el repositorio. Cada push a `main` genera un deploy de producción.
