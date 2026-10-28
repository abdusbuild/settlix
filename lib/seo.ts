import type { Metadata } from "next";
import { site } from "@/lib/site";

// Next replaces (not merges) openGraph/twitter objects per page, which also drops the root share image,
// so every page spreads these shared defaults. Segments with their own opengraph-image file still override it.
const shareImage = { width: 1200, height: 630, alt: `${site.name} | Loan Settlement & Anti-Harassment Support in India` };
export const baseOpenGraph = {
  type: "website",
  locale: "en_IN",
  siteName: site.name,
  images: [{ url: "/opengraph-image", ...shareImage }],
} satisfies Metadata["openGraph"];
export const baseTwitter = {
  card: "summary_large_image",
  images: [{ url: "/twitter-image", ...shareImage }],
} satisfies Metadata["twitter"];

// Site-wide search terms; pages add their own on top since Next replaces the keywords list per page
export const baseKeywords = [
  "loan settlement",
  "debt settlement India",
  "loan settlement company",
  "loan settlement Noida",
  "loan settlement Delhi NCR",
  "Settlix",
];

// Builds per-page metadata so the canonical URL and social preview title/description match the page.
// Pass ownImage when the route has its own opengraph-image/twitter-image files.
export function pageMeta(title: string, description: string, path: string, keywords: string[] = [], ownImage = false): Metadata {
  const shareTitle = `${title} | ${site.name}`;
  const imageBase = ownImage ? path : "";
  return {
    title,
    description,
    keywords: [...keywords, ...baseKeywords],
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: shareTitle,
      description,
      url: path,
      images: [{ ...baseOpenGraph.images[0], url: `${imageBase}/opengraph-image`, alt: shareTitle }],
    },
    twitter: {
      ...baseTwitter,
      title: shareTitle,
      description,
      images: [{ ...baseTwitter.images[0], url: `${imageBase}/twitter-image`, alt: shareTitle }],
    },
  };
}

// Stable schema.org ids so page-level structured data can point back at the business and website
export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

export function breadcrumbJsonLd(crumbs: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Home" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
