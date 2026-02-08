// Simple scroll-triggered animations using IntersectionObserver.
// Elements with the class `.animate-on-scroll` will fade up when they enter the viewport.

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-apply animations site-wide to key elements.
  // Keeps markup clean and avoids over-animating tiny UI details.
  const selectors = [
    '.hero-card',
    '.trust-item',
    '.section h2',
    '.section .lead',
    '.card.card-soft',
    '.card.pricing',
    '.callout',
    '.step',
    '.mini',
    '.project-header',
    '.faq-item'
  ];

  const unique = new Set();
  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => unique.add(el));
  });

  // Stagger within each section for a slick, handcrafted feel.
  // We keep delays small so it stays snappy.
  const bySection = new Map();
  [...unique].forEach((el) => {
    const section = el.closest('.section') || document.body;
    const arr = bySection.get(section) || [];
    arr.push(el);
    bySection.set(section, arr);
  });

  bySection.forEach((els) => {
    els.forEach((el, idx) => {
      el.classList.add('animate-on-scroll');
      const delay = Math.min(idx * 60, 240); // cap delay
      el.style.transitionDelay = `${delay}ms`;
    });
  });

  if (prefersReducedMotion) {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
});