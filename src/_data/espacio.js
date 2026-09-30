// Datos de la última versión de espacio, leídos del mismo feed que usa la app para actualizarse.
const latest = require("../espacio/updates/latest.json");

module.exports = {
  version: latest.version,
  dmgUrl: latest.dmg.url,
  // TODO: agregar el enlace de Ubuntu cuando esté publicado.
  ubuntuUrl: null,
};
