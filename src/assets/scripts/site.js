import { Collapse } from "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    loader.classList.add("is-hidden");
    window.setTimeout(() => loader.remove(), 500);
  }

  document.body.classList.add("is-ready");

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
