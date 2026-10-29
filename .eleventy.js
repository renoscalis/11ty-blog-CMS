const { HtmlBasePlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	// ΣΩΣΤΟ: Ενεργοποίηση του plugin για να φτιάξουν τα links σε localhost & GitHub Pages
	eleventyConfig.addPlugin(HtmlBasePlugin);

	// ΣΩΣΤΟ: Αντιγραφή των αρχείων χωρίς αρχικό slash "/"
	eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/admin");

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
    
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


	// Έλεγχος: Αν χτίζουμε στο Netlify (το Netlify βάζει αυτόματα τη μεταβλητή NETLIFY=true)
	// ή αν τρέχουμε τοπικά, το prefix θα είναι κενό. Αλλιώς, θα είναι του GitHub Pages.
	// const isNetlifyOrLocal = process.env.NETLIFY === "true" || !process.env.GITHUB_ACTIONS;
	// const myPathPrefix = isNetlifyOrLocal ? "/" : "/11ty-blog-CMS/";
	
	return {
		dir: {
			input: "src",
			output: "docs"
		}
		// pathPrefix: "/11ty-blog-CMS/"
	};
};