"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

// Counts the number inside a value like "100%", "3,000+" or "₹25 Cr" up from zero when it scrolls into view.
// Values without a number render unchanged. The server renders the final value, so it's correct without JS.
export default function CountUp({ value }: { value: string }) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^(\D*)([\d,]+)(.*)$/);
    const el = ref.current;
    if (!match || !el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const format = (n: number) => `${prefix}${Math.round(n).toLocaleString("en-IN")}${suffix}`;

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        // Ease-out cubic so the count slows as it lands on the final value
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setShown(format(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref} className="count-up">{shown}</span>;
}
