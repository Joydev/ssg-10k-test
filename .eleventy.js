module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  // Filter to retrieve a random blog post
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
