import Link from "next/link";

// Endless horizontal strip; the list is rendered twice so the loop is seamless, with the copy hidden from assistive tech
export default function Marquee({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-list" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {items.map((it) => (
              <li key={it.href}>
                <Link href={it.href} tabIndex={copy === 1 ? -1 : undefined}>{it.label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
