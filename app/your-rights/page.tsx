import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { borrowerRights, complaintSteps, rights } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { primaryPhone } from "@/lib/site";

export const metadata: Metadata = pageMeta("Your Rights as a Borrower", "What recovery agents can and can't do under RBI rules, your rights as a borrower, and how to complain about harassment.", "/your-rights");

export default function RightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Know your rights"
        title="Owing money doesn't take away your dignity"
        intro="RBI rules on fair practices and recovery agents apply to every bank and NBFC. Here's what that means for you, and what to do if those rules are broken."
        crumbs={[{ href: "/your-rights", label: "Your Rights" }]}
      />

      <section className="section rights">
        <div className="container">
          <div className="section-head reveal">
            <h2>What recovery agents can&apos;t do</h2>
          </div>
          <div className="rights-grid">
            {rights.map((r, i) => (
              <div className="right reveal" key={i}>
                <span>✕</span>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Your protections</span>
            <h2>Your rights as a borrower</h2>
          </div>
          <div className="card-grid three">
            {borrowerRights.map((r) => (
              <div className="info-card reveal" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <div className="section-head reveal">
            <span className="eyebrow">Take action</span>
            <h2>How to complain about harassment</h2>
          </div>
          <ol className="timeline">
            {complaintSteps.map((s, i) => (
              <li className="reveal" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="note reveal">
            If you ever feel physically unsafe, call <b>112</b> immediately. For help with any of these steps,{" "}
            <a href={`tel:${primaryPhone.tel}`}>call us on {primaryPhone.display}</a> or see our{" "}
            <Link href="/services/anti-harassment-support">anti-harassment support</Link>.
          </p>
          <p className="fine-print reveal">
            This page is general information based on RBI guidelines and is not legal advice. Rules may change; for advice on your
            specific situation, please speak to a qualified advocate.
          </p>
        </div>
      </section>

      <CtaBand title="Being harassed right now?" text="Don't face it alone. Call or WhatsApp us and we'll help you take the right next step today." />
    </>
  );
}
