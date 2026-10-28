type Faq = { q: string; a: string };

// Native <details> accordion; the shared name makes opening one question close the others in the same list
export default function FaqList({ items, openFirst = true }: { items: Faq[]; openFirst?: boolean }) {
  const group = `faq-${items[0]?.q.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`;
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details className="reveal" key={f.q} name={group} open={openFirst && i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
