module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addPassthroughCopy({ "src/ff_nyf_demo": "ff_nyf_demo" });
  eleventyConfig.addPassthroughCopy({ "src/ff_trades_demo": "ff_trades_demo" });
  eleventyConfig.addPassthroughCopy({ "src/QuoteHound1_demo": "QuoteHound1_demo" });
  eleventyConfig.addPassthroughCopy({ "src/savewise_demo": "savewise_demo" });
  eleventyConfig.addPassthroughCopy({ "src/mypmicover_demo": "mypmicover_demo" });
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
