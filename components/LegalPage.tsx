import Link from "next/link";
import { legalLinks, legalUpdated } from "@/lib/site";
import PageHero from "./PageHero";

export default function LegalPage({
  title,
  href,
  intro,
  children,
}: {
  title: string;
  href: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} intro={intro} crumbs={[{ href, label: title }]} />
      <section className="section">
        <div className="container legal-grid">
          <article className="prose">
            <p className="updated">Last updated: {legalUpdated}</p>
            {children}
          </article>
          <aside className="detail-side">
            <div className="side-card">
              <h3>Legal</h3>
              <ul className="side-links">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={l.href === href ? "page" : undefined}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
