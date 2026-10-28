"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, primaryPhone, site } from "@/lib/site";
import { Icon, icons } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-item">
            <Icon d={icons.pin} />
            {site.address.area}
          </span>
          <span className="topbar-links">
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>
            ))}
          </span>
        </div>
      </div>

      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Settlix home" onClick={close}>
            <Image src="/settlix-logo.png" alt={`Settlix — ${site.tagline}`} width={764} height={203} priority />
          </Link>
          <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className={isActive(l.href) ? "active" : undefined}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${primaryPhone.tel}`} className="btn btn-primary nav-cta" onClick={close}>Call Now</a>
          </nav>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
