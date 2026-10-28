import { ogSize, renderOgImage } from "@/lib/og";
import { getService, services } from "@/lib/services";

export const alt = "Settlix loan settlement and borrower support services";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug)!;
  return renderOgImage({ eyebrow: "Settlix Services", title: service.title, subtitle: service.short });
}
