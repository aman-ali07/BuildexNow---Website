import { useEffect } from 'react';

/**
 * Scroll-driven "focus reveal" reproduced from the reference site.
 * Content resolves from blurred/dimmed to sharp as it scrolls into the
 * lower third of the viewport. Values mirror the reference site exactly:
 * blur 16px -> 0, opacity 0.10 -> 1, scale 0.997 -> 1, smoothstep easing,
 * start 0.96 * viewport height, finish 0.68 * viewport height.
 *
 * Elements opt in with the `focus-reveal` class. An element animated on
 * `transform` by CSS (the case-study strip) can carry `data-focus-opacity-only`
 * so this hook leaves its transform alone and only drives opacity/filter.
 */
export function useFocusReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const update = () => {
      const viewport = window.innerHeight;
      const start = viewport * 0.96;
      const finish = viewport * 0.68;

      document.querySelectorAll<HTMLElement>('.focus-reveal').forEach((el) => {
        const top = el.getBoundingClientRect().top;
        let progress = (start - top) / (start - finish);
        progress = Math.max(0, Math.min(1, progress));
        progress = progress * progress * (3 - 2 * progress);

        el.style.opacity = (0.1 + 0.9 * progress).toFixed(4);
        el.style.filter = `blur(${(16 - 16 * progress).toFixed(2)}px)`;
        if (!el.hasAttribute('data-focus-opacity-only')) {
          el.style.transform = `scale(${(0.997 + 0.003 * progress).toFixed(5)})`;
        }
      });

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      document.querySelectorAll<HTMLElement>('.focus-reveal').forEach((el) => {
        el.style.opacity = '';
        el.style.filter = '';
        el.style.transform = '';
      });
    };
  }, []);
}
