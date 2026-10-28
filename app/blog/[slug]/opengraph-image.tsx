import { ogSize, renderOgImage } from "@/lib/og";
import { getPost, posts } from "@/lib/posts";

export const alt = "Settlix blog article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)!;
  return renderOgImage({ eyebrow: `Settlix Blog · ${post.category}`, title: post.title, subtitle: `${post.readMinutes} min read · A plain-language guide for borrowers in India` });
}
