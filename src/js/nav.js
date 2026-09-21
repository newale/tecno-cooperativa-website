(function () {
  "use strict";

  function closeAll() {
    document.querySelectorAll(".nav-dropdown-toggle").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  document.querySelectorAll(".nav-dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var wasOpen = btn.getAttribute("aria-expanded") === "true";
      closeAll();
      btn.setAttribute("aria-expanded", String(!wasOpen));
      e.stopPropagation();
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item--dropdown")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll();
    }
  });
})();
