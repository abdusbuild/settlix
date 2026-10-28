import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import HowItWorksArt from "@/components/HowItWorksArt";
import PageHero from "@/components/PageHero";
import { documents, steps } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("How Loan Settlement Works", "Our 5-step loan settlement process: free consultation, case assessment, harassment protection, negotiation with your lender, and settlement with a written NOC.", "/how-it-works", ["loan settlement process", "how to settle a loan", "loan settlement steps", "settlement letter", "NOC after loan settlement"]);

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear, 5-step path to resolution"
        intro="No jargon and no surprises. Here's exactly what happens from your first call with us to the day you receive your no-dues letter."
        crumbs={[{ href: "/how-it-works", label: "How It Works" }]}
        art={<HowItWorksArt />}
      />

      <section className="section">
        <div className="container narrow">
          <ol className="timeline">
            {steps.map((s, i) => (
              <li className="reveal" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Be prepared</span>
            <h2>Documents that help</h2>
            <p className="muted">You don&apos;t need all of these to start. Bring what you have, and we&apos;ll tell you what else is useful.</p>
            <ul className="check-list">
              {documents.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <div className="reveal">
            <span className="eyebrow">Good to know</span>
            <h2>Before you begin</h2>
            <div className="why-list single">
              <div className="why-item">
                <h3>You stay in control</h3>
                <p>No offer is accepted without your written approval. You can stop at any time.</p>
              </div>
              <div className="why-item">
                <h3>Fees are explained upfront</h3>
                <p>Our service fee is agreed in writing before any work begins. There are no hidden charges.</p>
              </div>
              <div className="why-item">
                <h3>Payments go to the lender</h3>
                <p>Never pay a settlement amount to anyone other than your lender, and only against a written letter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Start with step one, it's free" />
    </>
  );
}
