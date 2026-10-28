import type { Metadata } from "next";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { notDo, trustItems, values, whyItems } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta("About Settlix – Debt Advisory in Noida", "Settlix is a Noida-based debt advisory helping borrowers across India settle personal loans and credit cards lawfully and live free from recovery agent harassment.", "/about", ["about Settlix", "debt advisory Noida", "loan settlement consultants", "debt counselling India"]);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Settlix"
        title={<>Debt is a problem to solve, <span className="accent">not a reason for shame.</span></>}
        intro="Settlix is a debt advisory and borrower support service based in Noida. We help people facing genuine financial hardship deal with their lenders honestly, lawfully and with dignity."
        crumbs={[{ href: "/about", label: "About Us" }]}
      />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2>Why we started Settlix</h2>
            <p>
              Every day, thousands of people across India fall behind on loans for reasons they never saw coming: a job
              loss, a hospital bill, a business that didn&apos;t recover. What follows is often worse than the debt
              itself: endless recovery calls, threats to family members, legal notices nobody explains, and the feeling
              of facing a large institution alone.
            </p>
            <p>
              Settlix was set up to change that. We sit on the borrower&apos;s side of the table, help them understand
              their real options, and deal with lenders and recovery agents on their behalf, within the rules that
              already exist to protect them.
            </p>
          </div>
          <div className="mission-card reveal reveal-right">
            <h3>Our mission</h3>
            <p>To help every distressed borrower reach a fair, affordable resolution with their lenders, without fear, harassment or false promises.</p>
            <h3>Our promise</h3>
            <p>We&apos;ll tell you the truth about your situation, explain every fee upfront, and stay with you until your accounts are closed.</p>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid">
          {trustItems.map((t) => (
            <div className="trust-item" key={t.value}>
              <strong><CountUp value={t.value} /></strong>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our values</span>
            <h2>How we work</h2>
          </div>
          <div className="card-grid">
            {values.map((v) => (
              <div className="info-card reveal" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">What you get</span>
            <h2>Working with Settlix</h2>
            <div className="why-list">
              {whyItems.map((w) => (
                <div className="why-item" key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Clear boundaries</span>
            <h2>What we don&apos;t do</h2>
            <p className="muted">Being clear about this protects you from false promises, including ones you might hear elsewhere.</p>
            <ul className="x-list">
              {notDo.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <p>
              See our <Link href="/disclaimer">full disclaimer</Link> for details.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Visit us</span>
            <h2>Our office</h2>
            <address className="office">
              {site.address.lines.map((line) => <span key={line}>{line}</span>)}
            </address>
            <p className="muted">{site.hours}</p>
            <Link href="/contact" className="btn btn-primary">Contact &amp; directions</Link>
          </div>
          <div className="reveal">
            <span className="eyebrow">Serving all of India</span>
            <h2>Help wherever you are</h2>
            <p>
              Most of our work with lenders happens over phone, email and WhatsApp, so we can help borrowers from any
              city or town in India. You&apos;re welcome to meet us in Noida if you prefer to talk in person.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Let's talk about your situation" />
    </>
  );
}
