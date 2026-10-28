import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>We couldn&apos;t find that page</h1>
        <p className="lead">The page may have moved, or the link may be wrong.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">Go to home page</Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
