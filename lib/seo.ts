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

// Builds per-page metadata so the canonical URL and social preview title/description match the page.
// Pass ownImage when the route has its own opengraph-image/twitter-image files.
export function pageMeta(title: string, description: string, path: string, ownImage = false): Metadata {
  const shareTitle = `${title} | ${site.name}`;
  const imageBase = ownImage ? path : "";
  return {
    title,
    description,
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
