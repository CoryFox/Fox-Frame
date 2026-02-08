# Fox & Frame Studio

Marketing site and demo showcase built with Eleventy (Nunjucks) + Vite + Bootstrap 5. Vite bundles the front-end assets and Eleventy renders pages into the final `dist/` output.

**Stack**
- Eleventy + Nunjucks for templates
- Vite for asset bundling (Sass + JS)
- Bootstrap 5 and Bootstrap Icons

**Requirements**
- Node.js + npm (CI uses Node 20)

**Quick Start**
1. Install dependencies
```bash
npm install
```
2. Start the dev servers (live reload)
```bash
npm run dev
```
3. Open the site
- Eleventy: `http://localhost:8080`
- Vite assets: `http://localhost:5173`

**Build**
```bash
npm run build
```
Build flow:
- `vite build` outputs to `dist-vite/` and writes a manifest
- `scripts/check-manifest.mjs` ensures the Vite manifest exists
- Eleventy renders to `dist/`
- `scripts/copy-vite.mjs` copies bundled assets into `dist/assets/`

**Vite + Eleventy Integration**
- `src/_data/vite.js` loads the Vite manifest in production and exposes `vite.isDev`, `vite.devServer`, and `vite.asset()`
- `src/_includes/partials/head.njk` switches between Vite dev server scripts and production bundles
- Asset entry: `src/assets/main.js`
- Dev server URL can be overridden with `VITE_DEV_SERVER_URL`

**Project Structure**
- `src/` templates, content, and source assets
- `src/_includes/` Nunjucks layouts and partials
- `src/_data/` Eleventy data files (including Vite manifest helper)
- `src/content/` JSON content (demos, site data, work items)
- `src/assets/` Vite entry, JS modules, Sass
- `src/public/` static assets copied to output
- `dist/` final build output (generated)
- `dist-vite/` Vite build output (generated)

**Pages, Layouts, and Data**
- Page templates are `.njk` files in `src/` (for example `src/index.njk`, `src/demos.njk`, `src/demo.njk`)
- Layouts and partials live in `src/_includes/` and are referenced with Nunjucks `{% extends %}` and `{% include %}`
- Global data is provided by `src/_data/*.js` and `src/_data/*.json`
- Site-wide settings live in `src/_data/site.json`
- Demo and work content lives in `src/content/` and is loaded by data helpers

**Demo Content**
Demo metadata lives in `src/content/demos.json` and is grouped for templates by `src/_data/demos.js`.
To add a new demo:
1. Add the HTML in a new `src/<demo>_demo/` folder
2. Add a matching entry in `src/content/demos.json`
3. Add a passthrough copy entry in `eleventy.config.js` for the demo folder
4. Optionally run the screenshot capture script to update showcase imagery

**Capture Demo Screenshots**
The capture script opens local demo HTML with Playwright and writes showcase/hero images to `src/public/assets/`.
```bash
npm install -D playwright
npx playwright install chromium
npm run capture
```

**Scripts**
- `npm run dev` start Eleventy + Vite dev servers
- `npm run build` build Vite, run Eleventy, copy bundled assets
- `npm run clean` remove `dist/`
- `npm run capture` generate demo screenshots via Playwright

**Troubleshooting**
- Missing Vite manifest error during build: run `npm run build` (or at least `vite build`) before Eleventy. The build checks for `dist-vite/.vite/manifest.json`.
- Styles or scripts not loading in production: confirm `dist-vite/` exists and `scripts/copy-vite.mjs` ran (it copies Vite assets into `dist/assets/`).
- Dev server assets not loading: confirm the Vite server is running at `http://localhost:5173` or set `VITE_DEV_SERVER_URL`.
- Port already in use: Vite requires port `5173` and Eleventy uses `8080` by default. Stop the conflicting process or change the port and update `VITE_DEV_SERVER_URL`.

**Architecture**
Build flow overview:
```text
src/assets/main.js ──► Vite build ──► dist-vite/.vite/manifest.json
                         │
                         └──► dist-vite/assets/* (bundled CSS/JS)

src/**/*.njk ───────────► Eleventy ──► dist/ (HTML output)
                                         │
                                         └──► scripts/copy-vite.mjs
                                               copies dist-vite/assets/*
                                               into dist/assets/
```

**Contributing**
- Use `npm install` and `npm run dev` for local development
- Keep demo content updated in `src/content/` when adding or changing demos
- Run `npm run build` before opening a PR to verify the production pipeline
- CI targets Node 20 (see `.github/workflows/deploy.yml`)

**Local URLs**
| Route | Description |
| --- | --- |
| `http://localhost:8080/` | Eleventy dev site |
| `http://localhost:8080/demos/` | Demo listing page |
| `http://localhost:8080/demo/` | Demo detail page (uses data from `src/content/demos.json`) |
| `http://localhost:5173/` | Vite dev server (assets only) |

**Content Glossary**
- `src/content/demos.json` demo metadata used by the demos pages
- `src/content/work.json` work/portfolio items (if present)
- `src/_data/site.json` site-wide configuration (nav, titles, metadata)

**Deployment**
- GitHub Pages deploys on push to `main` via `.github/workflows/deploy.yml`
- Pull requests run a build check via `.github/workflows/pr-check.yml`
