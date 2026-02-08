const { resolve } = require("path");

module.exports = {
  root: ".",
  publicDir: false,
  optimizeDeps: {
    include: [
      "bootstrap",
      "bootstrap/js/dist/collapse",
      "bootstrap/js/dist/carousel",
      "bootstrap/js/dist/scrollspy",
      "bootstrap/js/dist/modal"
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  build: {
    outDir: "dist-vite",
    emptyOutDir: true,
    manifest: true,
    assetsDir: "assets",
    rollupOptions: {
      input: resolve("src/assets/main.js")
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
};
