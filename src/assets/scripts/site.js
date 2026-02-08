import { Collapse } from "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navContent");
      if (!nav || !nav.classList.contains("show")) return;
      Collapse.getOrCreateInstance(nav).hide();
    });
  });
});
