module.exports = {
  name: "Tecnocoop",
  legalName: "Cooperativa para el espacio digital público",
  tagline: "Software y hardware cooperativo, al servicio de las personas",
  contactEmail: "contacto@tecnocoop.aebn.cl", // TODO: reemplazar por el correo real
  url: "https://tecnocoop.aebn.cl",
  nav: [
    { text: "Inicio", url: "/" },
    {
      text: "Servicios",
      dropdown: [{ text: "Pods", url: "/pods/" }],
    },
    { text: "Sobre nosotros", url: "/sobre/" },
    { text: "Documentación", url: "/docs/pods/" },
  ],
  // Siempre se renderiza al final del nav, ver partials/nav.njk.
  statusNavItem: { text: "Estado", url: "/estado/" },
};
