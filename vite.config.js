const { resolve } = require("path");

module.exports = {
  root: ".",
  publicDir: false,
  build: {
    outDir: "dist/assets",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve("src/assets/main.js")
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
};
