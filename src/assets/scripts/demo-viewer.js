import { Modal } from "bootstrap";
import demosData from "../../content/demos.json";

const demos = demosData || {};

function getDemoByKey(key) {
  if (!key) return null;
  return demos[key] || null;
}

function safeText(el, value) {
  if (!el) return;
  el.textContent = value || "";
}

function setIframeSrc(iframe, src) {
  if (!iframe) return;
  iframe.src = src || "about:blank";
}

function renderTags(container, tags) {
  if (!container) return;
  container.innerHTML = "";
  (tags || []).forEach((t) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = t;
    container.appendChild(span);
  });
}

function renderNotes(listEl, notes) {
  if (!listEl) return;
  listEl.innerHTML = "";
  (notes || []).forEach((n) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="bi bi-check2 me-2"></i>${escapeHtml(n)}`;
    listEl.appendChild(li);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setMode(container, mode) {
  if (!container) return;
  container.setAttribute("data-mode", mode);
}

function attachModeButtons(scope) {
  scope.querySelectorAll("[data-ff-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-ff-mode");
      const wrap = scope.querySelector("[data-ff-viewer]");
      setMode(wrap, mode);

      scope.querySelectorAll("[data-ff-mode]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function initModal() {
  const modalEl = document.getElementById("ffDemoModal");
  if (!modalEl) return;

  const modal = Modal.getOrCreateInstance(modalEl);
  const titleEl = modalEl.querySelector("[data-ff-title]");
  const subtitleEl = modalEl.querySelector("[data-ff-subtitle]");
  const tagsEl = modalEl.querySelector("[data-ff-tags]");
  const overviewEl = modalEl.querySelector("[data-ff-overview]");
  const notesEl = modalEl.querySelector("[data-ff-notes]");
  const iframeDesktop = modalEl.querySelector("iframe[data-ff-iframe-desktop]");
  const iframeMobile = modalEl.querySelector("iframe[data-ff-iframe-mobile]");
  const openLink = modalEl.querySelector("[data-ff-open-link]");

  modalEl.addEventListener("hidden.bs.modal", () => {
    setIframeSrc(iframeDesktop, "about:blank");
    setIframeSrc(iframeMobile, "about:blank");
  });

  document.querySelectorAll("[data-ff-demo-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-demo-key");
      const demo = getDemoByKey(key);
      if (!demo) return;

      safeText(titleEl, demo.title);
      safeText(subtitleEl, demo.subtitle);
      safeText(overviewEl, demo.overview);
      renderTags(tagsEl, demo.tags);
      renderNotes(notesEl, demo.notes);

      setIframeSrc(iframeDesktop, demo.url);
      setIframeSrc(iframeMobile, demo.url);

      if (openLink) {
        openLink.href = demo.url;
      }

      const viewerWrap = modalEl.querySelector("[data-ff-viewer]");
      setMode(viewerWrap, "desktop");
      modalEl.querySelectorAll("[data-ff-mode]").forEach((b) => b.classList.remove("active"));
      const desktopBtn = modalEl.querySelector('[data-ff-mode="desktop"]');
      if (desktopBtn) desktopBtn.classList.add("active");

      modal.show();

      try {
        const isSmall = window.matchMedia("(max-width: 768px)").matches;
        if (isSmall) {
          const viewer = modalEl.querySelector("[data-ff-viewer]");
          setMode(viewer, "mobile");
          modalEl.querySelectorAll("[data-ff-mode]").forEach((b) => {
            b.style.display = "none";
          });
        }
      } catch {
        // ignore
      }
    });
  });

  attachModeButtons(modalEl);
}

function initEmbedded() {
  const embed = document.querySelector("[data-ff-demo-embed]");
  if (!embed) return;

  const params = new URLSearchParams(window.location.search);
  const key = params.get("demo") || "trades";
  const demo = getDemoByKey(key);

  if (!demo) {
    embed.innerHTML = `
      <div class="card card-soft">
        <div class="card-body p-4">
          <h1 class="h3 fw-semibold mb-2">Demo not found</h1>
          <p class="text-muted mb-0">That demo key doesn’t exist yet. Go back to <a href="/demos.html">all demos</a>.</p>
        </div>
      </div>
    `;
    return;
  }

  embed.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="card card-soft">
          <div class="card-body p-4">
            <p class="text-uppercase small text-muted mb-2">Demo preview</p>
            <h1 class="h3 fw-semibold mb-1" data-ff-title></h1>
            <p class="text-muted mb-3" data-ff-subtitle></p>
            <div class="d-flex flex-wrap gap-2 mb-3" data-ff-tags></div>
            <p class="mb-3" data-ff-overview></p>
            <div class="small text-muted mb-2">Highlights</div>
            <ul class="list-unstyled mb-0" data-ff-notes></ul>
            <hr class="my-4" />
            <div class="d-flex flex-wrap gap-2">
              <a class="btn btn-outline-secondary" href="/demos.html"><i class="bi bi-arrow-left me-2"></i>All demos</a>
              <a class="btn btn-primary" target="_blank" rel="noopener" data-ff-open-link><i class="bi bi-box-arrow-up-right me-2"></i>Open</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="card card-soft">
          <div class="card-body p-3 p-md-4">
            <div class="d-flex flex-wrap align-items-center gap-2 justify-content-between mb-3">
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-outline-secondary active" type="button" data-ff-mode="desktop"><i class="bi bi-display me-2"></i>Desktop</button>
                <button class="btn btn-sm btn-outline-secondary" type="button" data-ff-mode="mobile"><i class="bi bi-phone me-2"></i>Mobile</button>
              </div>
              <div class="small text-muted">Embedded preview, some sites block iframes</div>
            </div>

            <div class="ff-demo-viewer" data-ff-viewer data-mode="desktop">
              <div class="ff-demo-desktop">
                <iframe title="Desktop preview" loading="lazy" referrerpolicy="no-referrer" data-ff-iframe-desktop></iframe>
              </div>
              <div class="ff-demo-mobile">
                <div class="ff-phone">
                  <div class="ff-phone-notch" aria-hidden="true"></div>
                  <iframe title="Mobile preview" loading="lazy" referrerpolicy="no-referrer" data-ff-iframe-mobile></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const scope = embed;
  safeText(scope.querySelector("[data-ff-title]"), demo.title);
  safeText(scope.querySelector("[data-ff-subtitle]"), demo.subtitle);
  safeText(scope.querySelector("[data-ff-overview]"), demo.overview);
  renderTags(scope.querySelector("[data-ff-tags]"), demo.tags);
  renderNotes(scope.querySelector("[data-ff-notes]"), demo.notes);
  setIframeSrc(scope.querySelector("iframe[data-ff-iframe-desktop]"), demo.url);
  setIframeSrc(scope.querySelector("iframe[data-ff-iframe-mobile]"), demo.url);
  const open = scope.querySelector("[data-ff-open-link]");
  if (open) open.href = demo.url;

  attachModeButtons(scope);

  try {
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (isSmall) {
      const wrap = scope.querySelector("[data-ff-viewer]");
      setMode(wrap, "mobile");
      scope.querySelectorAll("[data-ff-mode]").forEach((b) => {
        b.style.display = "none";
      });
    }
  } catch {
    // ignore
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initEmbedded();
});
