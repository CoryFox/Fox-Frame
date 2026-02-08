const { demoDirs, demoAssetExts } = require("./scripts/demo-assets.config.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addFilter("urlFor", (src = "") => {
    if (!src) return "";
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (src.startsWith("/")) return src;
    return `/${src}`;
  });
  eleventyConfig.addFilter("absoluteUrlFor", (src = "", siteUrl = "") => {
    if (!src) return "";
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    const base = siteUrl ? siteUrl.replace(/\/$/, "") : "";
    const path = src.startsWith("/") ? src : `/${src}`;
    return `${base}${path}`;
  });
  demoDirs
    .map((dir) => `src/${dir}/**/*.{${demoAssetExts.join(",")}}`)
    .forEach((pattern) => {
    eleventyConfig.addPassthroughCopy(pattern);
  });

  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/content/blog/*.md")
      .filter((item) => !item.data.eleventyExcludeFromCollections)
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk"
  };
};
