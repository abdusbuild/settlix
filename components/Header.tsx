"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navMenu, primaryPhone, site, type NavChild } from "@/lib/site";
import { Icon, icons } from "./Icons";

export default function Header({ serviceLinks }: { serviceLinks: NavChild[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Dropdown opened by click/tap; on desktop hover and keyboard focus also open it via CSS
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".nav-item")) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const close = () => {
    setOpen(false);
    setMenu(null);
  };
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const items = navMenu.map((item) => (item.label === "Services" ? { ...item, children: serviceLinks } : item));

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
            {items.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={close}
                    className={isActive(item.href!) ? "active" : undefined}
                    aria-current={isActive(item.href!) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }
              const id = `menu-${item.label.toLowerCase()}`;
              const expanded = menu === item.label;
              const active = (item.allHref && isActive(item.allHref)) || item.children.some((c) => isActive(c.href));
              const wide = item.children.length > 5;
              return (
                <div key={item.label} className={`nav-item${expanded ? " expanded" : ""}`}>
                  <button
                    type="button"
                    className={`nav-trigger${active ? " active" : ""}`}
                    aria-expanded={expanded}
                    aria-controls={id}
                    onClick={() => setMenu(expanded ? null : item.label)}
                  >
                    {item.label}
                    <svg className="nav-caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" /></svg>
                  </button>
                  <div className={`nav-menu${wide ? " wide" : ""}`} id={id}>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={close}
                            className={isActive(c.href) ? "active" : undefined}
                            aria-current={isActive(c.href) ? "page" : undefined}
                          >
                            <span className="nav-menu-label">{c.label}</span>
                            {c.desc && <span className="nav-menu-desc">{c.desc}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {item.allHref && (
                      <Link href={item.allHref} className="nav-menu-all" onClick={close}>
                        View all {item.label.toLowerCase()} <span className="arrow" aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
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
