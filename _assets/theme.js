/* Shared theme toggle + mobile nav — JEDI Bureau Heritage Edition */
(function() {
  try {
    var t = localStorage.getItem("jedi-theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}

  function init() {
    // Theme toggle
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function() {
        var html = document.documentElement;
        var current = html.getAttribute("data-theme") || "light";
        var next = current === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        try { localStorage.setItem("jedi-theme", next); } catch (e) {}
      });
    }

    // Mobile nav toggle
    var navToggle = document.getElementById("navToggle");
    var navMenu = document.getElementById("navMenu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", navMenu.classList.contains("is-open"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
