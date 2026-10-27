const { HtmlBasePlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	// ΣΩΣΤΟ: Ενεργοποίηση του plugin για να φτιάξουν τα links σε localhost & GitHub Pages
	eleventyConfig.addPlugin(HtmlBasePlugin);

	// ΣΩΣΤΟ: Αντιγραφή των αρχείων χωρίς αρχικό slash "/"
	eleventyConfig.addPassthroughCopy("src/style.css");
	eleventyConfig.addPassthroughCopy("src/assets");

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
    
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	
	return {
		dir: {
			input: "src",
			output: "docs"
		},
		pathPrefix: "/11ty-blog-CMS/"
	};
};