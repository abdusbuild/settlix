import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { legalLinks, navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    ...navLinks.map((l) => ({ path: l.href, priority: 0.8 })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
    ...legalLinks.map((l) => ({ path: l.href, priority: 0.3 })),
  ];
  return paths.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
