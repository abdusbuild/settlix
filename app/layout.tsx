import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { baseKeywords, baseOpenGraph, baseTwitter, orgId, websiteId } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

const defaultTitle = "Settlix | Loan Settlement, Credit Card Settlement & Recovery Harassment Help in India";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s | Settlix",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "loan settlement",
    "personal loan settlement",
    "credit card settlement",
    "one time settlement",
    "OTS loan settlement",
    "business loan settlement",
    "recovery agent harassment",
    "stop recovery agent calls",
    "loan app harassment",
    "legal notice reply",
    "RBI ombudsman complaint",
    "unable to pay EMI",
    "CIBIL score after settlement",
    "debt relief India",
    "debt advisory Delhi NCR",
    ...baseKeywords,
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "finance",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    ...baseOpenGraph,
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    ...baseTwitter,
    title: defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Set these env vars to the codes from Google Search Console / Bing Webmaster Tools to verify ownership
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  appleWebApp: { title: site.name, statusBarStyle: "default" },
};

// Structured data so Google can show the business name, phone, address and hours
const business = {
  "@type": "FinancialService",
  "@id": orgId,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/settlix-logo.png`,
  image: `${site.url}/opengraph-image`,
  telephone: site.phones[0].tel,
  priceRange: "Free consultation",
  areaServed: { "@type": "Country", name: "India" },
  knowsLanguage: ["en", "hi"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Debt resolution services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.slug}` },
    })),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 205, Building No. B-42, Sector 2",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  contactPoint: site.phones.map((p) => ({ "@type": "ContactPoint", telephone: p.tel, contactType: "customer service", availableLanguage: ["en", "hi"] })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={jsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
