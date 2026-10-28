"use client";

import { useEffect, useState } from "react";

const INTERVAL_MS = 2800;

// Cycles through phrases in place; all phrases share one grid cell so the line never changes size.
// The first phrase is server-rendered and the only one exposed to screen readers.
export default function RotatingWords({ words, className }: { words: string[]; className?: string }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((a) => {
        setPrev(a);
        return (a + 1) % words.length;
      });
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="rotator">
      {words.map((w, i) => (
        <span
          key={w}
          className={`${className ?? ""} rotator-word${i === active ? " is-active" : i === prev ? " is-leaving" : ""}`}
          aria-hidden={i === 0 ? undefined : true}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
