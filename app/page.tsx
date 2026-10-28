import Link from "next/link";
import Calculator from "@/components/Calculator";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import Marquee from "@/components/Marquee";
import RotatingWords from "@/components/RotatingWords";
import { faqGroups, heroPoints, problems, rights, steps, trustItems, whyItems } from "@/lib/content";
import { faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { primaryPhone, whatsappLink } from "@/lib/site";

const homeFaqs = faqGroups.flatMap((g) => g.items).slice(0, 5);

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Loan Settlement · Anti-Harassment · Legal Support</span>
            <h1>
              Behind on EMIs and dreading the next call?{" "}
              <RotatingWords className="accent" words={["Let's settle it.", "Let's stop the calls.", "Let's end the stress."]} />
            </h1>
            <p className="lead">
              Settlix helps borrowers facing genuine financial hardship negotiate settlements on personal loans, credit
              cards and business loans, while protecting them from harassment by recovery agents.
            </p>
            <ul className="hero-points">
              {heroPoints.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
              <a href={whatsappLink()} className="btn btn-outline btn-lg" target="_blank" rel="noopener">WhatsApp Us</a>
            </div>
          </div>

          <div className="hero-card" id="consult">
            <h2>Request a callback</h2>
            <p className="muted">Share a few details and our team will call you back.</p>
            <LeadForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        <div className="container trust-grid">
          {trustItems.map((t) => (
            <div className="trust-item reveal reveal-scale" key={t.value}>
              <strong><CountUp value={t.value} /></strong>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))} />

      {/* Problems */}
      <section className="section problems">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Sound familiar?</span>
            <h2>You&apos;re not alone, and you have options</h2>
            <p>Job loss, medical emergencies, business losses or too many EMIs can happen to anyone. What matters is handling it the right way.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem reveal" key={p.text}>
                <span className="problem-ico"><Icon d={p.icon} /></span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our services</span>
            <h2>End-to-end help for distressed borrowers</h2>
            <p>From the first harassment call to the final settlement letter, Settlix supports you at every step.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="service reveal" key={s.slug}>
                <div className="service-ico"><Icon d={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="more">Learn more <span className="arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section how">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2>A clear, 5-step path to resolution</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li className="step reveal reveal-scale" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="section-more reveal">
            <Link href="/how-it-works" className="btn btn-outline">See the full process</Link>
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section calc">
        <div className="container calc-grid">
          <div className="calc-copy reveal reveal-left">
            <span className="eyebrow eyebrow-light">Settlement estimator</span>
            <h2>How much could you settle for?</h2>
            <p>Move the sliders to see an indicative settlement range. Actual offers depend on your lender, how overdue the account is and your documented hardship.</p>
            <p className="calc-disclaimer">This is an estimate for guidance only, not an offer. The final settlement amount is decided solely by the lender.</p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* Why us */}
      <section className="section why">
        <div className="container why-grid">
          <div className="why-copy reveal reveal-left">
            <span className="eyebrow">Why Settlix</span>
            <h2>Resolving debt. Restoring peace.</h2>
            <p>We know debt stress affects your health, family and work. Our approach is honest, lawful and focused on a solution you can actually afford.</p>
            <Link href="/about" className="btn btn-primary">About Settlix</Link>
          </div>
          <div className="why-list">
            {whyItems.map((w) => (
              <div className="why-item reveal reveal-right" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="section rights">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Know your rights</span>
            <h2>What recovery agents can&apos;t do</h2>
            <p>Under RBI guidelines on fair practices and recovery agents, lenders and their agents must treat borrowers with dignity.</p>
          </div>
          <div className="rights-grid">
            {rights.map((r, i) => (
              <div className="right reveal" key={i}>
                <span>✕</span>
                <p>{r}</p>
              </div>
            ))}
          </div>
          <p className="rights-cta reveal">
            Facing any of this? <a href={`tel:${primaryPhone.tel}`}>Call {primaryPhone.display}</a> or{" "}
            <Link href="/your-rights">read your full rights &amp; how to complain</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <div className="container faq-wrap">
          <div className="section-head reveal">
            <span className="eyebrow">FAQs</span>
            <h2>Questions borrowers ask us</h2>
          </div>
          <FaqList items={homeFaqs} />
          <p className="section-more reveal">
            <Link href="/faq" className="btn btn-outline">View all FAQs</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
