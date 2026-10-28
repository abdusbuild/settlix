"use client";

import { useEffect, useRef, useState } from "react";
import { primaryPhone, whatsappLink } from "@/lib/site";
import { Icon, icons } from "./Icons";

// Single floating "Enquire" button that opens the WhatsApp and call options above it
export default function FloatingEnquire() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={`enquire${open ? " open" : ""}`} ref={ref}>
      <div className="enquire-menu" id="enquire-menu" inert={!open}>
        <a href={whatsappLink()} className="enquire-option enquire-wa" target="_blank" rel="noopener" onClick={close}>
          <span className="enquire-ico"><Icon d={icons.whatsapp} /></span>
          WhatsApp us
        </a>
        <a href={`tel:${primaryPhone.tel}`} className="enquire-option enquire-call" onClick={close}>
          <span className="enquire-ico"><Icon d={icons.phone} /></span>
          Call {primaryPhone.display}
        </a>
      </div>
      <button
        type="button"
        className="enquire-toggle"
        aria-expanded={open}
        aria-controls="enquire-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <Icon d={open ? icons.close : icons.chat} />
        <span>{open ? "Close" : "Enquire"}</span>
      </button>
    </div>
  );
}
