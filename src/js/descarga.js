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

  // Ningún navegador dice directamente si un Mac es Intel. Chrome y Edge lo
  // dicen si se les pregunta (userAgentData); Firefox a veces lo deja ver en
  // el nombre de la GPU. Safari no: ahí queda Apple Silicon, que es lo más
  // común, y el menú ofrece Intel.
  function esMacIntel() {
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      return navigator.userAgentData
        .getHighEntropyValues(["architecture"])
        .then(function (v) { return v.architecture === "x86"; })
        .catch(function () { return false; });
    }
    try {
      var gl = document.createElement("canvas").getContext("webgl");
      var info = gl && gl.getExtension("WEBGL_debug_renderer_info");
      var gpu = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
      return Promise.resolve(/Intel|AMD|Radeon|NVIDIA/i.test(gpu) && !/Apple M/i.test(gpu));
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  function elegir(sistema) {
    var opcion = root.querySelector('[data-os="' + sistema + '"]');
    if (!opcion) return;
    var actual = root.querySelector('[aria-current="true"]');
    if (actual) actual.removeAttribute("aria-current");
    main.href = opcion.href;
    main.textContent = "Descargar para " + opcion.dataset.label;
    opcion.setAttribute("aria-current", "true");
  }

  var sistema = detectarSistema();
  elegir(sistema);
  if (sistema === "mac") {
    esMacIntel().then(function (intel) {
      if (intel) elegir("mac-intel");
    });
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
