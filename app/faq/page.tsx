import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import { faqGroups } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("FAQs", "Answers to common questions about loan settlement, credit scores, recovery agent harassment, legal notices and working with Settlix.", "/faq");

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions borrowers ask us"
        intro="Straight answers to the questions we hear most. Can't find yours? Call or WhatsApp us, we're happy to help."
        crumbs={[{ href: "/faq", label: "FAQs" }]}
      />

      <section className="section">
        <div className="container faq-wrap">
          <nav className="chip-nav reveal" aria-label="FAQ topics">
            {faqGroups.map((g) => (
              <a key={g.title} href={`#${slug(g.title)}`}>{g.title}</a>
            ))}
          </nav>
          {faqGroups.map((g, gi) => (
            <div className="faq-group" id={slug(g.title)} key={g.title}>
              <h2 className="reveal">{g.title}</h2>
              <FaqList items={g.items} openFirst={gi === 0} />
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have questions?" />
    </>
  );
}
