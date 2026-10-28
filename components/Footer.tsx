import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { legalLinks, site } from "@/lib/site";
import FloatingEnquire from "./FloatingEnquire";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/settlement-calculator", label: "Settlement Estimator" },
  { href: "/your-rights", label: "Your Rights" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/settlix-logo-light.png" alt="Settlix" width={764} height={203} />
            <p>Helping borrowers across India resolve unmanageable debt lawfully, and live free from harassment.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              {site.phones.map((p) => (
                <li key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></li>
              ))}
              <li>{site.address.short}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
        <div className="container footer-disclaimer">
          <p>
            <b>Disclaimer:</b> Settlix is a debt advisory and support service. We are not a bank, NBFC or lender and do not
            provide loans. Settlement, waiver or any relief is entirely at the discretion of the lender, and no particular
            outcome is guaranteed. Settlement payments are made directly to the lender. Settling a loan may be reported to
            credit bureaus and can affect your credit score. Legal services are provided by independent advocates.
          </p>
          <div className="footer-bottom">
            <p className="copy">© {new Date().getFullYear()} Settlix. All rights reserved.</p>
            <ul className="legal-links">
              {legalLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <FloatingEnquire />
    </>
  );
}
