import Link from "next/link";
import { primaryPhone, whatsappLink } from "@/lib/site";

export default function CtaBand({
  title = "Ready to take the first step?",
  text = "Talk to us in Hindi or English. The first consultation is free and completely confidential.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner reveal">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-light btn-lg">Get Free Consultation</Link>
          <a href={whatsappLink()} className="btn btn-ghost btn-lg" target="_blank" rel="noopener">WhatsApp Us</a>
          <a href={`tel:${primaryPhone.tel}`} className="cta-phone">or call {primaryPhone.display}</a>
        </div>
      </div>
    </section>
  );
}
