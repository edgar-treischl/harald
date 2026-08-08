# Copilot Instructions

## Project overview

This is a personal website built with Vue 3, TypeScript, Vite, Vuetify, and Vue Router. The app is a single SPA with a persistent navbar/footer shell, route-driven pages, and SEO meta updates on navigation. Content is organized mostly in `src/pages/`, `src/components/`, and small data modules under `src/data/`.

## Build, test, and lint

- `yarn dev` — start the Vite dev server.
- `yarn build` — type-check and production build.
- `yarn type-check` — run `vue-tsc` only.
- `yarn preview` — preview the production build locally.
- `yarn update-sitemap` — refresh `<lastmod>` values in `public/sitemap.xml`.

Single-test support is not present in this repo; there is no test runner or test script configured.

## Architecture and flow

- `src/main.ts` creates the Vue app, registers Vuetify through `src/plugins`, installs the router, and mounts `App.vue`.
- `src/App.vue` defines the global shell: `Navbar` is always visible, routed content renders in `<router-view />`, and `Footer` is hidden on the landing page.
- `src/router/index.ts` is the central page map. Routes are defined manually and include per-route SEO meta that is applied in `router.afterEach()`.
- `src/config/seo.ts` holds the canonical site metadata used by the router and SEO composables.
- `src/composables/useOwnSeo.ts` is the page-level helper for updating document/meta tags from components when route meta is not enough.
- `src/data/*.js` files hold mostly static content used by project and slide pages; companion `.d.ts` files provide TypeScript shape information.
- `scripts/update-sitemap.js` rewrites `public/sitemap.xml` last-modified dates and is part of the content maintenance workflow documented in `scripts/MAINTENANCE.md`.

## Conventions to follow

- Prefer route meta and `useOwnSeo()` for SEO updates instead of ad hoc DOM manipulation.
- Keep SEO constants centralized in `src/config/seo.ts`; update route-level titles/descriptions/keywords alongside page changes.
- Preserve the existing shell behavior: navbar always on, footer omitted on `/`.
- Use Vuetify for global layout/theme work and register app-wide plugins through `src/plugins/index.ts`.
- Keep data modules simple and static; the project uses plain exported arrays/objects rather than a separate state layer.
- Asset paths are mixed between absolute `/images/...` and base-relative `images/...`; match the surrounding file when editing existing data.
- `scripts/update-sitemap.js` is the canonical way to update sitemap timestamps after content changes.

