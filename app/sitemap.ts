import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { legalLinks, navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number; lastModified?: string }[] = [
    { path: "", priority: 1 },
    ...navLinks.map((l) => ({ path: l.href, priority: 0.8 })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.7, lastModified: p.updated ?? p.published })),
    ...legalLinks.map((l) => ({ path: l.href, priority: 0.3 })),
  ];
  return paths.map(({ path, priority, lastModified }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
