import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { href: string; label: string };

export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  art,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  // Optional illustration shown beside the text on wide screens
  art?: React.ReactNode;
}) {
  const copy = (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        {crumbs.map((c) => (
          <span key={c.href}>
            <span aria-hidden="true">/</span>
            <Link href={c.href}>{c.label}</Link>
          </span>
        ))}
      </nav>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {intro && <p className="lead">{intro}</p>}
    </>
  );

  return (
    <section className="page-hero">
      {crumbs.length > 0 && <JsonLd data={breadcrumbJsonLd(crumbs)} />}
      {art ? (
        <div className="container page-hero-grid">
          <div className="page-hero-copy">{copy}</div>
          <div className="page-hero-art">{art}</div>
        </div>
      ) : (
        <div className="container">{copy}</div>
      )}
    </section>
  );
}
