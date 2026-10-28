import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { formatDate, getPost, posts } from "@/lib/posts";
import { orgId, pageMeta, websiteId } from "@/lib/seo";
import { getService } from "@/lib/services";
import { primaryPhone, site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMeta(post.title, post.description, `/blog/${post.slug}`, post.keywords, true);
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.published, modifiedTime: post.updated ?? post.published },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const service = getService(post.service);
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          keywords: post.keywords.join(", "),
          articleSection: post.category,
          datePublished: post.published,
          dateModified: post.updated ?? post.published,
          url,
          mainEntityOfPage: url,
          image: `${url}/opengraph-image`,
          inLanguage: "en-IN",
          author: { "@id": orgId },
          publisher: { "@id": orgId },
          isPartOf: { "@id": websiteId },
        }}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.description}
        crumbs={[
          { href: "/blog", label: "Blog" },
          { href: `/blog/${post.slug}`, label: post.title },
        ]}
      />

      <section className="section">
        <div className="container legal-grid">
          <article className="prose">
            <p className="updated">
              By {site.name} Team · <time dateTime={post.published}>{formatDate(post.published)}</time>
              {post.updated && <> · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></>} · {post.readMinutes} min read
            </p>
            {post.body}
            <p className="fine-print">
              This article is general information based on Indian law and RBI guidelines and is not legal or financial advice. Rules
              change; for advice on your situation, please speak to a qualified professional.
            </p>
          </article>

          <aside className="detail-side">
            <div className="side-card">
              <h3>Talk to us for free</h3>
              <p className="muted">Free, confidential first consultation in Hindi or English.</p>
              <Link href="/contact" className="btn btn-primary btn-block">Book Free Consultation</Link>
              <a href={whatsappLink(`Hi Settlix, I read "${post.title}" and need help.`)} className="btn btn-outline btn-block" target="_blank" rel="noopener">
                WhatsApp Us
              </a>
              <a href={`tel:${primaryPhone.tel}`} className="side-phone">Call {primaryPhone.display}</a>
            </div>
            <div className="side-card">
              <h3>Related</h3>
              <ul className="side-links">
                {service && <li><Link href={`/services/${service.slug}`}>{service.title}</Link></li>}
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/blog/${o.slug}`}>{o.title}</Link></li>
                ))}
                <li><Link href="/blog">All articles →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
