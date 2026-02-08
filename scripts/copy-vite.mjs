import { mkdir, cp } from "fs/promises";
import { resolve } from "path";

const root = resolve(process.cwd());
const viteDir = resolve(root, "dist-vite");
const outDir = resolve(root, "dist");

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  await cp(src, dest, { recursive: true });
}

async function run() {
  await copyDir(resolve(viteDir, "assets"), resolve(outDir, "assets"));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
