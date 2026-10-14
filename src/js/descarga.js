(function () {
  "use strict";

  var root = document.querySelector("[data-descarga]");
  if (!root) return;

  var main = root.querySelector("[data-descarga-main]");
  var toggle = root.querySelector(".split-btn__toggle");

  function detectarSistema() {
    var plataforma = (navigator.userAgentData && navigator.userAgentData.platform) || "";
    var ua = plataforma + " " + navigator.userAgent;
    if (/Android|iPhone|iPad|iPod/i.test(ua)) return null;
    if (/Mac/i.test(ua)) return "mac";
    if (/Windows/i.test(ua)) return "windows";
    if (/Linux|X11|Ubuntu/i.test(ua)) return "ubuntu";
    return null;
  }

  var opcion = root.querySelector('[data-os="' + detectarSistema() + '"]');
  if (opcion) {
    main.href = opcion.href;
    main.textContent = "Descargar para " + opcion.dataset.label;
    opcion.setAttribute("aria-current", "true");
  }

  function cerrar() {
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function (e) {
    toggle.setAttribute("aria-expanded", String(toggle.getAttribute("aria-expanded") !== "true"));
    e.stopPropagation();
  });

  document.addEventListener("click", function (e) {
    if (!root.contains(e.target)) cerrar();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrar();
  });
})();
