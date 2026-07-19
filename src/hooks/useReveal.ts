import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to every `.reveal` element when it enters the viewport.
 * Children with a `data-delay` (ms) get a transition-delay applied.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const root = rootRef.current ?? document.body;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    const applyDelay = (el: HTMLElement) => {
      const delay = el.dataset.delay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
    };
    nodes.forEach(applyDelay);

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return rootRef;
}
