// Simple scroll-triggered animations using IntersectionObserver.
// Elements with the class `.animate-on-scroll` will fade up when they enter the viewport.

document.addEventListener('DOMContentLoaded', () => {
  // Respect prefers-reduced-motion: if user prefers reduced motion, don't animate
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('show');
    });
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});