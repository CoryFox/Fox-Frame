import { access } from "fs/promises";
import { resolve } from "path";

const manifestPath = resolve(process.cwd(), "dist-vite/.vite/manifest.json");

try {
  await access(manifestPath);
} catch {
  console.error(`Missing Vite manifest at ${manifestPath}. Run 'vite build' before Eleventy.`);
  process.exit(1);
}
