// Datos de la última versión de espacio, leídos del mismo feed que usa la app para actualizarse.
const latest = require("../espacio/updates/latest.json");

// El .deb vive junto al dmg en el pod; el feed firmado por ahora solo describe el dmg.
const versiones = latest.dmg.url.slice(0, latest.dmg.url.lastIndexOf("/") + 1);

module.exports = {
  version: latest.version,
  dmgUrl: latest.dmg.url,
  ubuntuUrl: `${versiones}espacio-${latest.version}-amd64.deb`,
};
