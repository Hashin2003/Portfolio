(function () {
  "use strict";

  /* ============ THEME ============ */
  function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  initTheme();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  /* ============ MOBILE NAV ============ */
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");
  const navBackdrop = document.getElementById("navBackdrop");
  const navbar = document.getElementById("navbar");

  function openNav() {
    navLinks.classList.add("open");
    navBackdrop.classList.add("active");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    navbar.classList.add("nav-open");
    document.body.classList.add("no-scroll");
  }
  function closeNav() {
    navLinks.classList.remove("open");
    navBackdrop.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    navbar.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
  }
  function toggleNav() {
    if (navLinks.classList.contains("open")) closeNav();
    else openNav();
  }
  navToggle.addEventListener("click", toggleNav);
  navBackdrop.addEventListener("click", closeNav);
  // Auto-close on link tap — this was dead code in the previous version
  navLinks.querySelectorAll("[data-navlink]").forEach(link => {
    link.addEventListener("click", closeNav);
  });
  // Close mobile nav on resize past breakpoint so it doesn't get stuck open
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeNav();
  });

  /* ============ MODALS (built on demand from PROJECTS data) ============ */
  const modalRoot = document.getElementById("modalRoot");
  let lastFocusedEl = null;

  function buildModal(id, data) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = id;
    overlay.setAttribute("role", "presentation");

    const techTags = data.tech.map(t => `<span class="skill-tag">${t}</span>`).join("");
    const repoHtml = data.repo.url
      ? `<a class="modal-github-link" href="${data.repo.url}" target="_blank" rel="noopener">
           <svg class="ico" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.45 9.45 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>
           View on GitHub
         </a>`
      : `<p class="meta-value-sub">${data.repo.label}</p>`;

    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
        <div class="modal-header">
          <button class="modal-close" type="button" aria-label="Close dialog">
            <svg class="ico" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <div class="modal-icon"><svg class="ico-lg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
          <h3 class="modal-title" id="${id}-title">${data.title}</h3>
        </div>
        <div class="modal-body">
          <div class="modal-aside-mobile-first">
            <div class="meta-card">
              <h4>Project Profile</h4>
              <div class="meta-row"><div class="meta-label">Project Type</div><div class="meta-value">${data.type}</div></div>
              <div class="meta-row"><div class="meta-label">Year</div><div class="meta-value">${data.year}</div></div>
              <div class="meta-row"><div class="meta-label">Core Technology Stack</div><div class="modal-tech-list">${techTags}</div></div>
              <div class="meta-row"><div class="meta-label">Repository</div>${repoHtml}</div>
            </div>
          </div>
          <div class="modal-main">
            <div class="modal-section">${data.body}</div>
            <div class="media-showcase">
              <div class="media-showcase-head">
                <svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                <span class="media-showcase-title">Project Media / CAD / Schematics</span>
              </div>
              <div class="media-showcase-grid">
                <div class="media-tile"><svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>Image</div>
                <div class="media-tile"><svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>Image</div>
                <div class="media-tile"><svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>Image</div>
              </div>
              <p class="media-showcase-hint">Insert images, CAD renders, or schematics here.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    modalRoot.appendChild(overlay);
    return overlay;
  }

  function getModal(id) {
    let modal = document.getElementById(id);
    if (!modal && PROJECTS[id]) {
      modal = buildModal(id, PROJECTS[id]);
    }
    return modal;
  }

  function openModal(id) {
    const modal = getModal(id);
    if (!modal) return;
    lastFocusedEl = document.activeElement;
    modal.classList.add("active");
    document.body.classList.add("no-scroll");
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal(id);
    });
    modal.querySelector(".modal-close").addEventListener("click", () => closeModal(id));
    modal.addEventListener("keydown", trapFocus);
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function trapFocus(e) {
    if (e.key !== "Tab") return;
    const modal = e.currentTarget;
    const focusables = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m.id));
      closeNav();
    }
  });

  // Wire up every trigger (project cards + featured cards) — works for click AND keyboard (Enter/Space on buttons is native)
  document.querySelectorAll("[data-modal]").forEach(trigger => {
    trigger.addEventListener("click", () => openModal(trigger.dataset.modal));
  });

  /* ============ PROJECT FILTER ============ */
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const cards = document.querySelectorAll(".project-card");
      const labels = document.querySelectorAll(".project-category-label");

      cards.forEach(c => {
        const match = category === "all" || c.dataset.category === category;
        c.style.transition = "opacity 0.3s ease";
        if (match) {
          c.classList.remove("hidden");
          c.style.opacity = "0";
          requestAnimationFrame(() => { c.style.opacity = "1"; });
        } else {
          c.style.opacity = "0";
          setTimeout(() => c.classList.add("hidden"), 200);
        }
      });

      labels.forEach(l => {
        const cat = l.dataset.catLabel;
        l.style.display = (category === "all" || cat === category) ? "" : "none";
      });
    });
  });

  /* ============ ACTIVE NAV LINK ON SCROLL ============ */
  const sections = ["about", "experience", "projects", "skills", "education", "achievements", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navLinkMap = {};
  navLinks.querySelectorAll("[data-navlink]").forEach(link => {
    const id = link.getAttribute("href").replace("#", "");
    navLinkMap[id] = link;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = navLinkMap[id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.values(navLinkMap).forEach(l => l.classList.remove("nav-link-active"));
        link.classList.add("nav-link-active");
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));

  /* ============ NAVBAR SHADOW ON SCROLL ============ */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }, { passive: true });

})();
