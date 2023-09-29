var markdownItAttrs = require('markdown-it-attrs')

module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAttrs))
};

