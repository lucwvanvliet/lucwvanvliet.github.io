const markdownLinkAttributes = require("markdown-it-link-attributes")

module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownLinkAttributes, [{
    pattern: /^https?:\/\//,
    attrs: {
      class: 'external-link',
      target: '_blank',
    }
  }]))
};

