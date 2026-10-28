import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import { faqJsonLd, orgId, pageMeta } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { primaryPhone, site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? pageMeta(service.title, service.short, `/services/${service.slug}`, service.keywords, true) : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.intro,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@id": orgId },
          areaServed: { "@type": "Country", name: "India" },
        }}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <PageHero
        eyebrow="Our services"
        title={service.title}
        intro={service.intro}
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.title },
        ]}
      />

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <div className="reveal">
              <h2>Is this for you?</h2>
              <ul className="check-list">
                {service.forWhom.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div className="reveal">
              <h2>How we help</h2>
              <ol className="numbered">
                {service.help.map((h) => (
                  <li key={h.title}>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {service.note && <p className="note reveal">{service.note}</p>}

            <div>
              <h2 className="reveal">Common questions</h2>
              <FaqList items={service.faqs} />
            </div>
          </div>

          <aside className="detail-side">
            <div className="side-card">
              <div className="service-ico"><Icon d={service.icon} /></div>
              <h3>Get help with this</h3>
              <p className="muted">Free, confidential first consultation in Hindi or English.</p>
              <Link href="/contact" className="btn btn-primary btn-block">Book Free Consultation</Link>
              <a
                href={whatsappLink(`Hi Settlix, I need help with ${service.title}.`)}
                className="btn btn-outline btn-block"
                target="_blank"
                rel="noopener"
              >
                WhatsApp Us
              </a>
              <a href={`tel:${primaryPhone.tel}`} className="side-phone">Call {primaryPhone.display}</a>
            </div>
            <div className="side-card">
              <h3>Other services</h3>
              <ul className="side-links">
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.title}</Link></li>
                ))}
                <li><Link href="/services">All services →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
