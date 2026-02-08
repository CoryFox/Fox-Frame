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

  document.querySelectorAll("[data-showcase]").forEach((wrap) => {
    const tabs = wrap.querySelectorAll("[data-showcase-tab]");
    const panes = wrap.querySelectorAll("[data-showcase-pane]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-showcase-target");
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        panes.forEach((pane) => {
          const isActive = pane.getAttribute("data-showcase-pane") === target;
          pane.classList.toggle("is-active", isActive);
        });
      });
    });
  });
});
