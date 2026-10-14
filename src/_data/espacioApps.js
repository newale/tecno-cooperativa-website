// Aplicaciones de espacio que se muestran en /espacio/. Sale de LOCAL_APPS
// (apps/shell/src/App.tsx) y de packages/catalog/apps/ del repo de espacio.
// La captura de cada app es opcional: static/imagenes/apps/<id>.{png,jpg,webp}.
module.exports = {
  nativas: [
    { id: "archivos", name: "Archivos", description: "Navega, sube y descarga los archivos y carpetas de tu Pod, y compártelos con otras personas." },
    { id: "escribir", name: "escribir", description: "Procesador de texto en Markdown. Tus documentos quedan en la carpeta Documentos de tu Pod." },
    { id: "estudio", name: "Estudio", description: "Publica tu música desde tu Pod: proyectos, obras con portada y pistas, que se escuchan en musica.aebn.cl." },
    { id: "arbol", name: "arbol", description: "Tus enlaces en una página pública, servida en arbol.aebn.cl.", wip: true },
    { id: "calendario", name: "Calendario", description: "Tus eventos guardados en tu Pod, con vistas de mes, semana y día.", wip: true },
    { id: "hojas", name: "hojas", description: "Tablas enlazadas por fórmulas, guardadas junto a tus documentos.", wip: true },
  ],
  catalogo: [
    { id: "por-hacer", name: "Por Hacer", url: "https://por-hacer.aebn.cl", description: "Lista de tareas que se sincroniza con tu Pod." },
    { id: "notas", name: "Notas", url: "https://notas.aebn.cl", description: "Notas en Markdown enlazadas entre sí con [[corchetes dobles]]." },
    { id: "musica", name: "Música", url: "https://musica.aebn.cl", description: "Escucha la música de la cooperativa; tus playlists y artistas favoritos quedan en tu Pod." },
    { id: "archivador", name: "archivador", url: "https://archivador.aebn.cl", description: "Referencias y PDF al estilo de Zotero, con destacados y notas." },
  ],
};
