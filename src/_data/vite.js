const fs = require("fs");
const path = require("path");

const isDev = process.env.ELEVENTY_ENV !== "production";
const devServer = process.env.VITE_DEV_SERVER_URL || "http://localhost:5173";

let manifest = {};
if (!isDev) {
  const manifestPath = path.resolve("dist/manifest.json");
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  }
}

function asset(entry) {
  return manifest[entry] || {};
}

module.exports = {
  isDev,
  devServer,
  asset
};
