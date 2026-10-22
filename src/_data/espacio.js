// Datos de la última versión de espacio, leídos del mismo feed que usa la app para actualizarse.
const latest = require("../espacio/updates/latest.json");

// El .deb y el .exe viven junto a los dmg en el pod; el feed firmado solo describe los dmg.
const versiones = latest.dmg.url.slice(0, latest.dmg.url.lastIndexOf("/") + 1);

module.exports = {
  version: latest.version,
  // `dmg` es el de Apple Silicon; el de Intel (`dmgX64`) llega con espacio 1.14.0.
  dmgUrl: latest.dmg.url,
  dmgIntelUrl: latest.dmgX64 ? latest.dmgX64.url : null,
  ubuntuUrl: `${versiones}espacio-${latest.version}-amd64.deb`,
  windowsUrl: `${versiones}espacio-${latest.version}-setup-x64.exe`,
};
