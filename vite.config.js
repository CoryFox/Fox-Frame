const { resolve } = require("path");

module.exports = {
  root: ".",
  publicDir: false,
  esbuild: {
    target: "es2018"
  },
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
    target: "es2018",
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
