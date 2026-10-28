"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;

// Once revealed, drop the reveal classes so the element's own transitions (hover lifts etc.) apply again
function finish(el: HTMLElement) {
  el.classList.remove("reveal", "reveal-left", "reveal-right", "reveal-scale", "visible");
  el.style.removeProperty("--reveal-delay");
}

export default function RevealObserver() {
  const pathname = usePathname();

  // Re-scan on every route change, since the layout (and this component) persists across pages
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(finish);
      return;
    }

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        // Siblings that enter together (grid cards, list items) cascade in one after another
        const counts = new Map<Element | null, number>();
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const i = counts.get(el.parentElement) ?? 0;
          counts.set(el.parentElement, i + 1);
          const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS;

          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("visible");
          io.unobserve(el);
          timers.push(window.setTimeout(() => finish(el), delay + 900));
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
