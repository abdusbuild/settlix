import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("Settlement Estimator", "Estimate an indicative settlement range for your personal loan or credit card based on the outstanding amount and how long it has been overdue.", "/settlement-calculator");

const factors = [
  { title: "How long it's been overdue", text: "Accounts that have been in default longer often settle for a lower share of the outstanding." },
  { title: "Your documented hardship", text: "Clear proof of job loss, illness or business loss strengthens your case." },
  { title: "The lender's policy", text: "Every bank and NBFC has its own settlement rules and approval limits." },
  { title: "How you'll pay", text: "A one-time lump sum usually gets a better offer than a long instalment plan." },
];

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Settlement estimator"
        title="How much could you settle for?"
        intro="Move the sliders to see an indicative settlement range. It takes 10 seconds and you don't need to share any personal details."
        crumbs={[{ href: "/settlement-calculator", label: "Settlement Estimator" }]}
      />

      <section className="section calc">
        <div className="container calc-grid">
          <div className="calc-copy reveal">
            <h2>Your indicative range</h2>
            <p>The estimate is based on typical outcomes for unsecured loans and credit cards. Actual offers depend on your lender, how overdue the account is and your documented hardship.</p>
            <p className="calc-disclaimer">This is an estimate for guidance only, not an offer. The final settlement amount is decided solely by the lender.</p>
          </div>
          <Calculator />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What affects the amount</span>
            <h2>Four things lenders look at</h2>
          </div>
          <div className="card-grid">
            {factors.map((f) => (
              <div className="info-card reveal" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want an exact assessment?" text="Share your statements with us and we'll give you a realistic view of what your lender is likely to accept." />
    </>
  );
}
