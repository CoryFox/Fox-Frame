(() => {
  const navBtn = document.getElementById('navBtn');
  const nav = document.getElementById('nav');
  const year = document.getElementById('year');
  const toast = document.getElementById('toast');
  const form = document.getElementById('quoteForm');

  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const closeNav = () => {
    if (!navBtn || !nav) return;
    nav.classList.remove('is-open');
    navBtn.setAttribute('aria-expanded', 'false');
  };

  const openNav = () => {
    if (!navBtn || !nav) return;
    nav.classList.add('is-open');
    navBtn.setAttribute('aria-expanded', 'true');
  };

  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const isOpen = nav.classList.contains('is-open');
      isOpen ? closeNav() : openNav();
    });

    // Close when clicking a link
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => closeNav());
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      const target = e.target;
      if (target === nav || nav.contains(target) || target === navBtn || navBtn.contains(target)) return;
      closeNav();
    });
  }

  // Reveal on scroll
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }

  // Demo form behaviour
  const showToast = (msg) => {
    if (!toast) return;
    const inner = toast.querySelector('.toast__inner');
    if (inner && msg) inner.textContent = msg;
    toast.classList.add('is-on');
    window.setTimeout(() => toast.classList.remove('is-on'), 2600);
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach((el) => {
        if (!el.value || !String(el.value).trim()) ok = false;
      });
      if (!ok) {
        showToast('Please complete the required fields.');
        return;
      }
      form.reset();
      showToast('Thanks! Your enquiry has been sent (demo).');
    });
  }
})();
