import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevealObserver from "@/components/RevealObserver";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

const defaultTitle = "Settlix | Loan Settlement & Anti-Harassment Support in India";

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
    "recovery agent harassment",
    "stop recovery calls",
    "legal notice reply",
    "RBI ombudsman complaint",
    "debt settlement India",
    "loan settlement Noida",
    "debt advisory Delhi NCR",
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
  appleWebApp: { title: site.name, statusBarStyle: "default" },
};

// Structured data so Google can show the business name, phone, address and hours
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/settlix-logo.png`,
  image: `${site.url}/opengraph-image`,
  telephone: site.phones[0].tel,
  priceRange: "Free consultation",
  areaServed: "IN",
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

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
