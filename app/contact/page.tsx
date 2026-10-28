import type { Metadata } from "next";
import { Icon, icons } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { primaryPhone, site } from "@/lib/site";

export const metadata: Metadata = pageMeta("Contact Us", "Call, WhatsApp or visit Settlix in Sector 2, Noida. Free and confidential first consultation for loan settlement and harassment support.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Take the first step today"
        intro="Talk to us in Hindi or English. The first consultation is free and completely confidential."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="section contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h2>Get in touch</h2>
            <p>Call us, send a WhatsApp message, or fill the form and we&apos;ll get back to you during office hours.</p>
            <ul className="contact-list">
              <li>
                <span className="ci-ico"><Icon d={icons.phone} /></span>
                <div>
                  <b>Call us</b>
                  {site.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>)}
                </div>
              </li>
              <li>
                <span className="ci-ico"><Icon d={icons.whatsapp} /></span>
                <div>
                  <b>WhatsApp</b>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">Chat on {primaryPhone.display}</a>
                </div>
              </li>
              <li>
                <span className="ci-ico"><Icon d={icons.pin} /></span>
                <div>
                  <b>Office</b>
                  <address>
                    {site.address.lines.map((line) => <span key={line}>{line}</span>)}
                  </address>
                </div>
              </li>
              <li>
                <span className="ci-ico"><Icon d={icons.clock} /></span>
                <div>
                  <b>Office hours</b>
                  <span>{site.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-card reveal">
            <h3>Book your free consultation</h3>
            <LeadForm variant="contact" />
          </div>
        </div>

        <div className="container map reveal">
          <iframe
            title="Settlix office location on Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
