module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addCollection("docsSections", (collectionApi) => {
    const docs = collectionApi
      .getFilteredByTag("docs")
      .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

    const sections = [];
    for (const doc of docs) {
      const name = doc.data.section || "Documentación";
      let section = sections.find((s) => s.name === name);
      if (!section) {
        section = { name, items: [] };
        sections.push(section);
      }
      section.items.push({ title: doc.data.title, url: doc.url });
    }
    return sections;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/",
  };
};
