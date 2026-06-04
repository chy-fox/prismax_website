# PrismaX Website

Marketing site builds for [prismax.ai](https://prismax.ai) — *“The service layer for physical AI.”*

**Live preview (V6):** https://chy-fox.github.io/prismax_website/

## Structure

- **`PrismaX Website V6/`** — the current build. A single-page `index.html` with all styles inline (Tailwind via CDN for utilities), brand fonts, looping footage, and dev tooling.
- **`_shared/`** — brand assets, fonts, narrative copy, reference material, and **`HOMEPAGE.md`** (the canonical section-by-section spec). The version folder symlinks into this so assets aren’t duplicated.
- **`CLAUDE.md`** — build rules and brand tokens.

## Run locally

```sh
cd "PrismaX Website V6"
node serve.mjs            # http://localhost:3000
```

Capture screenshots while iterating:

```sh
node screenshot.mjs http://localhost:3000 "Hero Section V1"
```

## Sections (V6)

Hero · Backed by · VLA Foundry · Robotic Data · Plans · Console · **Field notes** · **Events** · Final CTA · Footer.
Full copy and layout intent live in [`_shared/HOMEPAGE.md`](_shared/HOMEPAGE.md).

## Brand

- **Palette:** Black `#202020` · Cream `#DFD8D0` · White `#FFFFFF`.
- **Type:** *Editorial New* (serif — H1/H3/H5) + *Catalogue* (sans — everything else). Never mixed.
- **Geometry:** 8px button radius; motion limited to `transform`/`opacity` (never `transition-all`).

## Deployment

Pushes to `main` trigger [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which assembles a
self-contained copy of the V6 build (resolving the `_shared` symlinks into real files) and publishes it to
GitHub Pages. Only the assets `index.html` actually references are published — internal reference material
and the brand guide stay out of the public site.
