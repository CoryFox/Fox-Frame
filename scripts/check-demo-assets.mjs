import { readdir } from "fs/promises";
import { resolve, extname, basename } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { demoDirs, demoAssetExts } = require("./demo-assets.config.js");

const allowedExts = new Set([".html", ...demoAssetExts.map((ext) => `.${ext}`)]);

async function walk(dir, out) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, out);
    } else {
      out.push(fullPath);
    }
  }
}

async function run() {
  const invalid = [];
  for (const dir of demoDirs) {
    const files = [];
    await walk(resolve(process.cwd(), "src", dir), files);
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      if (!ext || !allowedExts.has(ext)) {
        invalid.push(file);
      }
    }
  }

  if (invalid.length) {
    console.error("Found demo files with unsupported extensions:");
    for (const file of invalid) {
      console.error(`- ${basename(file)} (${file})`);
    }
    console.error(
      "Update scripts/check-demo-assets.mjs and eleventy.config.js passthrough globs if needed."
    );
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
