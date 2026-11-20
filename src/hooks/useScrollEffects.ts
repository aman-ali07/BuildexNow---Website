import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Central scroll choreography for the one-page site.
 * - reveals elements marked `.reveal` as they enter the viewport
 * All triggers are scoped and killed on unmount.
 */
export function useScrollEffects() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      document.documentElement.classList.remove('js-ready');
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
      return;
    }

    document.documentElement.classList.add('js-ready');
    const ctx = gsap.context(() => {
      // Section / element reveals
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          onStart: () => el.classList.add('is-in'),
        });
      });
    });

    // Layout can shift once fonts and the stageshow panel settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const timer = window.setTimeout(refresh, 600);

    return () => {
      window.removeEventListener('load', refresh);
      window.clearTimeout(timer);
      ctx.revert();
      document.documentElement.classList.remove('js-ready');
    };
  }, [reduced]);
}
