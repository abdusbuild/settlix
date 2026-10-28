import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { formatDate, posts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("Loan Settlement & Borrower Rights Blog", "Plain-language guides on loan settlement, CIBIL scores, recovery agent harassment, legal notices and your rights as a borrower in India.", "/blog", ["loan settlement blog", "debt advice India", "borrower rights guide", "recovery agent harassment help", "CIBIL score tips"]);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for borrowers under pressure"
        intro="Clear, honest answers on loan settlement, credit scores, recovery harassment and your rights, written by the team that handles these cases every day."
        crumbs={[{ href: "/blog", label: "Blog" }]}
      />

      <section className="section">
        <div className="container">
          <div className="post-grid">
            {posts.map((p) => (
              <Link href={`/blog/${p.slug}`} className="post-card reveal" key={p.slug}>
                <div className="post-thumb">
                  <Image src={`/images/blog/${p.slug}.jpg`} alt={p.imageAlt} fill sizes="(max-width: 640px) 100vw, 560px" />
                </div>
                <span className="post-cat">{p.category}</span>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <span className="post-meta">
                  <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.readMinutes} min read
                </span>
                <span className="more">Read article <span className="arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need help with your own case?" text="Every situation is different. Talk to us for free and we'll explain your options in plain language." />
    </>
  );
}
