# Fox & Frame Studio

Marketing site built with Eleventy, Nunjucks, Vite, and Bootstrap 5.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server (live reload)

```bash
npm run dev
```

- Eleventy serves the site at `http://localhost:8080`.
- Vite serves assets at `http://localhost:5173`.

3. Production build

```bash
npm run build
```

The production output is written to `dist/`.

## Capture Demo Screenshots

This repo includes a script to generate the demo showcase and hero images.

```bash
npm install -D playwright
npx playwright install chromium
npm run capture
```

Screenshots are written to `src/public/assets/`.

## Structure

- `src/` – templates, content, and source assets
- `src/_includes/` – Nunjucks layouts and partials
- `src/content/` – data sources (e.g., demos)
- `src/assets/` – Vite entry + JS + Sass
- `src/public/` – static assets copied to output
- `dist/` – build output (generated)

## Deployment

GitHub Pages is configured via `.github/workflows/deploy.yml`.
