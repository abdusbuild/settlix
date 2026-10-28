import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMeta("Our Services", "Personal loan and credit card settlement, anti-harassment support, legal notice replies, RBI Ombudsman complaints and credit score rebuilding.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="End-to-end help for distressed borrowers"
        intro="From the first harassment call to the final settlement letter, we support you at every step. Choose a service to see exactly how we can help."
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <div className="service-list">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="service-row reveal" key={s.slug}>
                <div className="service-ico"><Icon d={s.icon} /></div>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.short}</p>
                </div>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" text="Tell us about your situation and we'll recommend the right approach. The first consultation is free." />
    </>
  );
}
