const { demoDirs, demoAssetExts } = require("./scripts/demo-assets.config.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  demoDirs
    .map((dir) => `src/${dir}/**/*.{${demoAssetExts.join(",")}}`)
    .forEach((pattern) => {
    eleventyConfig.addPassthroughCopy(pattern);
  });
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html"],
    markdownTemplateEngine: "njk"
  };
};
