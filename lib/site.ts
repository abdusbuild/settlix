// Public domain of the live site; set NEXT_PUBLIC_SITE_URL in production so share links and the sitemap use it
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://settlix.in");

export const site = {
  name: "Settlix",
  url: siteUrl.replace(/\/$/, ""),
  tagline: "Resolving Debt. Restoring Peace.",
  description:
    "Settlix helps borrowers settle personal loans, credit card dues and business loans, stop recovery agent harassment and reply to legal notices. Free consultation. Office in Noida.",
  phones: [
    { display: "+91 87558 99863", tel: "+918755899863" },
    { display: "+91 79850 22400", tel: "+917985022400" },
  ],
  whatsapp: "918755899863",
  address: {
    lines: [
      "Office No. 205, Building No. B-42, Sector 2,",
      "near Noida Sector 15 Metro Station,",
      "Noida, Uttar Pradesh 201301",
    ],
    short: "Office No. 205, B-42, Sector 2, Noida 201301",
    area: "Sector 2, Noida (near Sector 15 Metro)",
    mapQuery: "B-42 Sector 2 Noida 201301",
  },
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
};

export const primaryPhone = site.phones[0];

export function whatsappLink(text = "Hi Settlix, I need help with my loan settlement.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/settlement-calculator", label: "Estimate" },
  { href: "/your-rights", label: "Your Rights" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

// Date shown on the legal pages; update whenever their text changes
export const legalUpdated = "27 October 2026";
