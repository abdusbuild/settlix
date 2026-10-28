type Faq = { q: string; a: string };

export default function FaqList({ items, openFirst = true }: { items: Faq[]; openFirst?: boolean }) {
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details className="reveal" key={f.q} open={openFirst && i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
