/* ============================================================
   Universal Reborn — front.js
   Carousel, nav, scroll progress, dark mode, search, testimonials
   ============================================================ */

(function () {
  "use strict";

  /* ─── Nav: sticky shadow + mobile toggle ─── */
  const nav = document.getElementById("ur-nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
      const prog = document.getElementById("ur-progress");
      if (prog) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (Math.min(1, window.scrollY / Math.max(max, 1)) * 100) + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector(".ur-nav__toggle");
    const menu = nav.querySelector(".ur-nav__menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    /* ─── Search drawer ─── */
    const searchBtn = document.getElementById("ur-search-btn");
    const searchBox = document.getElementById("ur-search");
    if (searchBtn && searchBox) {
      searchBtn.addEventListener("click", () => {
        const hidden = searchBox.hasAttribute("hidden");
        if (hidden) {
          searchBox.removeAttribute("hidden");
          const inp = searchBox.querySelector("input");
          if (inp) setTimeout(() => inp.focus(), 50);
        } else {
          searchBox.setAttribute("hidden", "");
        }
      });
    }
  }

  /* ─── Dark-mode toggle ─── */
  const themeBtn = document.getElementById("ur-theme-toggle");
  if (themeBtn) {
    const setIcon = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const icon = themeBtn.querySelector("i");
      if (icon) icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    };
    setIcon();
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.removeAttribute("data-theme");
      try { localStorage.setItem("ur-theme", next); } catch (e) {}
      setIcon();
    });
  }

  /* ─── Reveal on scroll (auto-applied to any [data-reveal]) ─── */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
      else io.observe(el);
    });
  }

  /* ─── Hero carousel ─── */
  const slider = document.querySelector(".ur-slider");
  if (slider) {
    const slides = slider.querySelectorAll(".ur-slide");
    const dotsWrap = document.getElementById("ur-dots");
    const prev = document.getElementById("ur-prev");
    const next = document.getElementById("ur-next");
    let i = 0, timer = null;
    const autoplay = slider.getAttribute("data-autoplay") !== "false";
    const interval = parseInt(slider.getAttribute("data-interval"), 10) || 6500;

    if (slides.length <= 1) {
      if (dotsWrap) dotsWrap.style.display = "none";
      if (prev) prev.style.display = "none";
      if (next) next.style.display = "none";
    } else {
      if (dotsWrap) {
        slides.forEach((_, ix) => {
          const b = document.createElement("button");
          b.className = ix === 0 ? "is-on" : "";
          b.setAttribute("aria-label", `Slide ${ix + 1}`);
          b.addEventListener("click", () => go(ix, true));
          dotsWrap.appendChild(b);
        });
      }
      const go = (n, fromUser) => {
        slides[i].classList.remove("is-on");
        i = (n + slides.length) % slides.length;
        slides[i].classList.add("is-on");
        if (dotsWrap) [...dotsWrap.children].forEach((b, ix) => b.classList.toggle("is-on", ix === i));
        if (fromUser) restart();
      };
      const restart = () => {
        if (!autoplay) return;
        clearInterval(timer);
        timer = setInterval(() => go(i + 1), interval);
      };
      if (prev) prev.addEventListener("click", () => go(i - 1, true));
      if (next) next.addEventListener("click", () => go(i + 1, true));
      slider.addEventListener("mouseenter", () => clearInterval(timer));
      slider.addEventListener("mouseleave", restart);
      restart();
    }
  }

  /* ─── Testimonials pager ─── */
  const tRail = document.querySelector(".ur-testimonials__rail");
  if (tRail) {
    const list = tRail.querySelector(".ur-testimonials__list");
    const pager = document.getElementById("ur-tests-pager");
    const cards = list ? [...list.querySelectorAll(".ur-testimonial")] : [];
    const per = parseInt(tRail.getAttribute("data-per"), 10) || 3;
    const autoplay = tRail.getAttribute("data-autoplay") !== "false";
    const interval = parseInt(tRail.getAttribute("data-interval"), 10) || 8000;
    const pages = Math.ceil(cards.length / per);
    let page = 0;
    let timer = null;

    if (pages <= 1 || !pager) return;

    const renderPager = () => {
      pager.innerHTML = "";
      for (let p = 0; p < pages; p++) {
        const b = document.createElement("button");
        b.className = p === page ? "is-on" : "";
        b.setAttribute("aria-label", `Page ${p + 1}`);
        b.addEventListener("click", () => goPage(p, true));
        pager.appendChild(b);
      }
    };
    const renderPage = () => {
      list.classList.add("is-fading");
      setTimeout(() => {
        cards.forEach((c, ix) => {
          const inPage = (Math.floor(ix / per) === page);
          c.style.display = inPage ? "" : "none";
        });
        list.classList.remove("is-fading");
      }, 220);
      [...pager.children].forEach((b, p) => b.classList.toggle("is-on", p === page));
    };
    const goPage = (p, fromUser) => {
      page = (p + pages) % pages;
      renderPage();
      if (fromUser) restart();
    };
    const restart = () => {
      if (!autoplay) return;
      clearInterval(timer);
      timer = setInterval(() => goPage(page + 1), interval);
    };
    renderPager(); renderPage();
    tRail.addEventListener("mouseenter", () => clearInterval(timer));
    tRail.addEventListener("mouseleave", restart);
    restart();
  }

  /* ─── Clients marquee — duplicate track for seamless loop ─── */
  const track = document.getElementById("ur-clients-track");
  if (track && track.children.length > 0) {
    track.innerHTML += track.innerHTML;
  }
})();
