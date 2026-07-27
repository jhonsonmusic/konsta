/**
 * Scroll reveals + parallax.
 *
 * Reveals are driven by a rAF-throttled scroll sweep over getBoundingClientRect()
 * rather than IntersectionObserver: a clipped element's intersection rect is
 * zero-sized, so IO never fires on it. Reveals are one-shot (data-shown).
 */
const REVEAL_SELECTOR = '[data-reveal]:not([data-shown]), [data-reveal-clip]:not([data-shown])';
const REVEAL_THRESHOLD = 0.92;
const PARALLAX_RANGE = 190;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function showAll() {
  document
    .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    .forEach((el) => (el.dataset.shown = '1'));
}

function setupReveal() {
  const sweep = () => {
    const vh = window.innerHeight;
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      if (el.getBoundingClientRect().top < vh * REVEAL_THRESHOLD) el.dataset.shown = '1';
    });
  };

  let raf: number | null = null;
  const onScroll = () => {
    if (raf !== null) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      sweep();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  sweep();
}

function setupParallax() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!items.length) return;

  let raf: number | null = null;
  const onScroll = () => {
    if (raf !== null) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      const vh = window.innerHeight;
      items.forEach((el) => {
        const b = el.getBoundingClientRect();
        const p = (b.top + b.height / 2 - vh / 2) / vh;
        const offset = p * parseFloat(el.dataset.parallax || '0') * PARALLAX_RANGE;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function start() {
  if (reducedMotion.matches) {
    showAll();
    return;
  }
  setupReveal();
  setupParallax();
}

start();
reducedMotion.addEventListener('change', (e) => {
  if (e.matches) showAll();
});
