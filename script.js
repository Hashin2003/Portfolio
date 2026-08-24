(function () {
  "use strict";

  /* ── THEME ────────────────────────────────────────────────── */
  function initTheme() {
    const saved = localStorage.getItem("theme");
    const dark  = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", saved || (dark ? "dark" : "light"));
  }
  function toggleTheme() {
    const cur  = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  initTheme();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  /* ── MOBILE NAV ───────────────────────────────────────────── */
  const navLinks   = document.getElementById("navLinks");
  const navToggle  = document.getElementById("navToggle");
  const navBackdrop= document.getElementById("navBackdrop");
  const navbar     = document.getElementById("navbar");

  function openNav() {
    navLinks.classList.add("open");
    navBackdrop.classList.add("active");
    navToggle.setAttribute("aria-expanded","true");
    navToggle.setAttribute("aria-label","Close menu");
    navbar.classList.add("nav-open");
    document.body.classList.add("no-scroll");
  }
  function closeNav() {
    navLinks.classList.remove("open");
    navBackdrop.classList.remove("active");
    navToggle.setAttribute("aria-expanded","false");
    navToggle.setAttribute("aria-label","Open menu");
    navbar.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
  }
  navToggle.addEventListener("click", () => navLinks.classList.contains("open") ? closeNav() : openNav());
  navBackdrop.addEventListener("click", closeNav);
  navLinks.querySelectorAll("[data-navlink]").forEach(l => l.addEventListener("click", closeNav));
  window.addEventListener("resize", () => { if (window.innerWidth > 768) closeNav(); });

  /* ── MODALS ───────────────────────────────────────────────── */
  const modalRoot    = document.getElementById("modalRoot");
  let   lastFocused  = null;

  function buildMediaHtml(media) {
    if (!media) {
      return `
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
            </div>`;
    }
    const galleryHtml = (media.images && media.images.length)
      ? `<div class="media-showcase-head">
              <svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span class="media-showcase-title">Gallery</span>
            </div>
            <div class="modal-gallery">${media.images.map(img => `
              <figure>
                <img src="${img.src}" alt="${img.alt}" loading="lazy">
                <figcaption>${img.caption}</figcaption>
              </figure>`).join("")}</div>`
      : "";
    const videoHtml = media.video
      ? `<div class="media-showcase-head">
              <svg class="ico" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              <span class="media-showcase-title">Demo Video</span>
            </div>
            ${buildVideoEmbed(media.video)}`
      : "";
    const pdfHtml = media.pdf
      ? `<div class="media-showcase-head">
              <svg class="ico" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              <span class="media-showcase-title">${media.pdf.title || "Report"}</span>
            </div>
            <div class="modal-pdf-embed">
              <iframe src="${media.pdf.src}#toolbar=0" title="${media.pdf.title || "Project report"}" loading="lazy"></iframe>
            </div>`
      : "";
    return galleryHtml + videoHtml + pdfHtml;
  }

  function buildVideoEmbed(video) {
    const label = video.title || "Demo video";
    if (video.src) {
      return `<div class="modal-video-embed">
              <video controls preload="metadata" playsinline${video.poster ? ` poster="${video.poster}"` : ""}>
                <source src="${video.src}" type="video/mp4">
              </video>
            </div>`;
    }
    const href = video.youtubeId ? `https://youtu.be/${video.youtubeId}` : video.url;
    if (video.poster) {
      return `<div class="modal-video-embed">
              <a class="video-play-trigger" href="${href}" target="_blank" rel="noopener" aria-label="Watch ${label}">
                <img src="${video.poster}" alt="${label} preview" loading="lazy">
                <span class="video-play-badge"><svg class="ico" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
              </a>
            </div>`;
    }
    return `<div class="modal-video-embed">
              <a class="video-link-card" href="${href}" target="_blank" rel="noopener">
                <svg class="ico" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                <span>Watch ${label}</span>
              </a>
            </div>`;
  }

  function buildModal(id, data) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = id;
    overlay.setAttribute("role","presentation");

    const techTags = data.tech.map(t =>
      `<span class="project-tech"><span class="project-tech-text">${t}</span></span>`
    ).join("");

    const githubIcon = `<svg class="ico" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.45 9.45 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>`;
    const externalIcon = `<svg class="ico" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`;
    const linkBtn = l => `<a class="modal-github-link" href="${l.url}" target="_blank" rel="noopener">
           ${/github\.com/i.test(l.url) ? githubIcon : externalIcon}
           ${l.label}
         </a>`;
    const repoHtml = data.repo.links && data.repo.links.length
      ? data.repo.links.map(linkBtn).join("")
      : data.repo.url
        ? linkBtn(data.repo)
        : `<p class="meta-value-sub">${data.repo.label}</p>`;

    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
        <div class="modal-header">
          <button class="modal-close" type="button" aria-label="Close dialog">
            <svg class="ico" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <div class="modal-icon">
            <svg class="ico-lg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          </div>
          <h3 class="modal-title" id="${id}-title">${data.title}</h3>
        </div>
        <div class="modal-body">
          <div class="modal-aside-mobile-first">
            <div class="meta-card">
              <h4>Project Profile</h4>
              <div class="meta-row"><div class="meta-label">Project Type</div><div class="meta-value">${data.type}</div></div>
              <div class="meta-row"><div class="meta-label">Year</div><div class="meta-value">${data.year}</div></div>
              <div class="meta-row"><div class="meta-label">Tech Stack</div><div class="modal-tech-list">${techTags}</div></div>
              <div class="meta-row"><div class="meta-label">Repository</div>${repoHtml}</div>
            </div>
          </div>
          <div class="modal-main">
            <div class="modal-section">${data.body}</div>
            ${buildMediaHtml(data.media)}
          </div>
        </div>
      </div>`;
    modalRoot.appendChild(overlay);
    return overlay;
  }

  function getModal(id) {
    let el = document.getElementById(id);
    if (!el && PROJECTS[id]) el = buildModal(id, PROJECTS[id]);
    return el;
  }

  function openModal(id) {
    const modal = getModal(id);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add("active");
    document.body.classList.add("no-scroll");
    const btn = modal.querySelector(".modal-close");
    if (btn) btn.focus();
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(id); });
    modal.querySelector(".modal-close").addEventListener("click", () => closeModal(id));
    modal.addEventListener("keydown", trapFocus);
  }
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
    if (lastFocused) lastFocused.focus();
  }
  function trapFocus(e) {
    if (e.key !== "Tab") return;
    const focusables = e.currentTarget.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m.id));
      closeNav();
    }
  });
  document.querySelectorAll("[data-modal]").forEach(t =>
    t.addEventListener("click", () => openModal(t.dataset.modal))
  );

  /* ── SKILL TAGS — wrap text in span for pip layout ────────── */
  document.querySelectorAll(".skill-tag").forEach(tag => {
    if (!tag.querySelector(".skill-tag-text")) {
      const txt = tag.textContent.trim();
      tag.textContent = "";
      const span = document.createElement("span");
      span.className = "skill-tag-text";
      span.textContent = txt;
      tag.appendChild(span);
    }
  });

  /* Project tech tags — same pip treatment in cards */
  document.querySelectorAll(".project-tech:not([data-enhanced])").forEach(tag => {
    tag.setAttribute("data-enhanced","1");
    const txt = tag.textContent.trim();
    tag.textContent = "";
    const span = document.createElement("span");
    span.className = "project-tech-text";
    span.textContent = txt;
    tag.appendChild(span);
  });

  /* ── PROJECT FILTER ───────────────────────────────────────── */
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("active"); btn.setAttribute("aria-selected","true");
      document.querySelectorAll(".project-card").forEach(c => {
        const match = cat === "all" || c.dataset.category === cat;
        c.style.transition = "opacity .3s ease";
        if (match) { c.classList.remove("hidden"); c.style.opacity="0"; requestAnimationFrame(() => { c.style.opacity="1"; }); }
        else { c.style.opacity="0"; setTimeout(() => c.classList.add("hidden"), 200); }
      });
      document.querySelectorAll(".project-category-label").forEach(l => {
        l.style.display = (cat === "all" || l.dataset.catLabel === cat) ? "" : "none";
      });
    });
  });

  /* ── ACTIVE NAV ON SCROLL ─────────────────────────────────── */
  const sectionIds = ["about","experience","projects","skills","education","achievements","contact"];
  const navMap = {};
  document.querySelectorAll("[data-navlink]").forEach(l => {
    const id = l.getAttribute("href").replace("#","");
    navMap[id] = l;
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        Object.values(navMap).forEach(l => l.classList.remove("nav-link-active"));
        if (navMap[e.target.id]) navMap[e.target.id].classList.add("nav-link-active");
      }
    });
  }, { rootMargin:"-40% 0px -50% 0px" });
  sectionIds.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });

  /* ── NAVBAR SCROLL SHADOW ─────────────────────────────────── */
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive:true });

  /* ── STATS COUNT-UP ───────────────────────────────────────── */
  const statNums = document.querySelectorAll(".stat-num");
  let statsAnimated = false;
  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    statNums.forEach(el => {
      const target  = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g,""));
      const suffix  = el.dataset.suffix || "";
      const isFloat = target % 1 !== 0;
      const dur = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
        const val = target * ease;
        el.innerHTML = (isFloat ? val.toFixed(2) : Math.round(val)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  // Prep data-target attributes from rendered text
  statNums.forEach(el => {
    if (!el.dataset.target) {
      const num = el.textContent.replace(/[^0-9.]/g,"");
      const small = el.querySelector("small");
      el.dataset.target = num;
      el.dataset.suffix = small ? small.outerHTML : "";
    }
  });
  const statsEl = document.querySelector(".stats-strip");
  if (statsEl) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateStats(); statsObserver.disconnect(); }
    }, { threshold:0.4 });
    statsObserver.observe(statsEl);
  }

})();

(function initSplashAndGlobe(){
  const splash=document.getElementById('splashScreen');
  if(splash){
    setTimeout(()=>{
      splash.classList.add('splash-out');
      splash.addEventListener('animationend',()=>{splash.style.display='none';},{once:true});
    },2400);
  }
  const canvas=document.getElementById('globeCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W,H,animId,tick=0;
  let mouseX=.5,mouseY=.5,rotY=0,rotX=.28;
  function resize(){const h=canvas.parentElement;W=canvas.width=h.offsetWidth;H=canvas.height=h.offsetHeight;}
  function rX(p,a){return{x:p.x,y:p.y*Math.cos(a)-p.z*Math.sin(a),z:p.y*Math.sin(a)+p.z*Math.cos(a)};}
  function rY(p,a){return{x:p.x*Math.cos(a)+p.z*Math.sin(a),y:p.y,z:-p.x*Math.sin(a)+p.z*Math.cos(a)};}
  function proj(p,cx,cy,R){const f=2.2,s=f/(f+p.z/R);return{x:cx+p.x*s,y:cy+p.y*s,z:p.z};}
  function sph(lat,lon,R){const φ=lat*Math.PI/180,λ=lon*Math.PI/180;return{x:R*Math.cos(φ)*Math.sin(λ),y:-R*Math.sin(φ),z:R*Math.cos(φ)*Math.cos(λ)};}
  function dark(){return document.documentElement.getAttribute('data-theme')==='dark';}
  function draw(){
    ctx.clearRect(0,0,W,H);
    rotX+=((0.2+(mouseY-.5)*.5)-rotX)*.04;
    rotY+=0.003+(mouseX-.5)*.002;
    const cx=W*.72,cy=H*.5,R=Math.min(W,H)*.36;
    const dk=dark(),la=dk?.52:.38,da=dk?.75:.55;
    const grd=ctx.createRadialGradient(cx,cy,0,cx,cy,R*1.25);
    grd.addColorStop(0,`rgba(129,159,167,${dk?.06:.04})`);
    grd.addColorStop(1,'rgba(129,159,167,0)');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    const gs=36;
    ctx.strokeStyle=`rgba(91,110,116,${dk?.04:.06})`;ctx.lineWidth=.5;
    for(let x=0;x<W*.55;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W*.55,y);ctx.stroke();}
    const LATS=[-75,-60,-45,-30,-15,0,15,30,45,60,75];
    const LONS=Array.from({length:24},(_,i)=>i*15);
    const SEG=64;
    LATS.forEach(lat=>{
      const pts=[];
      for(let i=0;i<=SEG;i++){const lon=(i/SEG)*360-180;let p=sph(lat,lon,R);p=rX(p,rotX);p=rY(p,rotY);pts.push({...proj(p,cx,cy,R),rz:p.z});}
      for(let i=0;i<pts.length-1;i++){
        const a=pts[i],b=pts[i+1],al=Math.max(0,(a.rz+R)/(R*2))*la;
        if(al<.02)continue;
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(129,159,167,${al})`;ctx.lineWidth=lat===0?1.2:.55;ctx.stroke();
      }
    });
    LONS.forEach(lon=>{
      const pts=[];
      for(let i=0;i<=SEG;i++){const lat=-90+(i/SEG)*180;let p=sph(lat,lon,R);p=rX(p,rotX);p=rY(p,rotY);pts.push({...proj(p,cx,cy,R),rz:p.z});}
      for(let i=0;i<pts.length-1;i++){
        const a=pts[i],b=pts[i+1],al=Math.max(0,(a.rz+R)/(R*2))*la*.85;
        if(al<.02)continue;
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(129,159,167,${al})`;ctx.lineWidth=.5;ctx.stroke();
      }
    });
    [-60,-30,0,30,60].forEach(lat=>{
      Array.from({length:12},(_,i)=>i*30).forEach(lon=>{
        let p=sph(lat,lon,R);p=rX(p,rotX);p=rY(p,rotY);
        if(p.z<0)return;
        const pr=proj(p,cx,cy,R),al=(p.z+R)/(R*2)*da;
        ctx.beginPath();ctx.arc(pr.x,pr.y,1.5,0,Math.PI*2);
        ctx.fillStyle=`rgba(91,110,116,${al})`;ctx.fill();
      });
    });
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);
    ctx.strokeStyle=`rgba(129,159,167,${dk?.08:.05})`;ctx.lineWidth=1;ctx.stroke();
    tick++;animId=requestAnimationFrame(draw);
  }
  const hero=canvas.parentElement;
  hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();mouseX=(e.clientX-r.left)/r.width;mouseY=(e.clientY-r.top)/r.height;});
  hero.addEventListener('mouseleave',()=>{mouseX=.5;mouseY=.5;});
  window.addEventListener('resize',resize);
  setTimeout(()=>{resize();draw();},2600);
})();