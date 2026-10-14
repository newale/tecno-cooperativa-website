const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });

  // "apps/notas" -> "/static/imagenes/apps/notas.png" si existe la imagen (png, jpg o webp), o "" si no.
  // Así las capturas se pueden ir sumando sin tocar las plantillas.
  eleventyConfig.addFilter("imagen", (nombre) => {
    for (const ext of ["png", "jpg", "webp"]) {
      const ruta = `static/imagenes/${nombre}.${ext}`;
      if (fs.existsSync(path.join("src", ruta))) return `/${ruta}`;
    }
    return "";
  });
  // Feed de actualizaciones de espacio: latest.json + su firma, tal cual.
  eleventyConfig.addPassthroughCopy({ "src/espacio/updates": "espacio/updates" });

  // "2026-09-20" -> "20 de septiembre de 2026". Mismo formato que src/js/status.js.
  eleventyConfig.addFilter("fechaLarga", (iso) => {
    const [y, m, d] = String(iso).split("-").map(Number);
    return new Intl.DateTimeFormat("es-CL", { dateStyle: "long", timeZone: "UTC" }).format(
      new Date(Date.UTC(y, m - 1, d))
    );
  });

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
