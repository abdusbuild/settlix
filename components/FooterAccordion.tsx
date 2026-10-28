"use client";

import { MouseEvent, ReactNode, useEffect, useRef } from "react";

const PHONE = "(max-width: 640px)";

// Footer link column: a plain open list on larger screens, a collapsible section on phones.
// Server-rendered open so nothing is hidden before hydration or without JS.
export default function FooterAccordion({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(PHONE);
    const sync = () => {
      if (ref.current) ref.current.open = !mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function onToggleClick(e: MouseEvent) {
    if (!window.matchMedia(PHONE).matches) e.preventDefault();
  }

  return (
    <details ref={ref} className="footer-col" open>
      <summary onClick={onToggleClick}>
        <h4>{title}</h4>
      </summary>
      {children}
    </details>
  );
}
