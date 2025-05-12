export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/css/");
    eleventyConfig.addPassthroughCopy("assets/img/");
    eleventyConfig.addPassthroughCopy("_redirects");
};