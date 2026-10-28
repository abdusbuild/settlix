import { Icon, icons } from "@/components/Icons";

const journey = [
  { label: "Free consultation", done: true },
  { label: "Recovery calls handled", done: true },
  { label: "Negotiation with lender", done: true },
  { label: "Settlement letter & NOC", done: false },
];

// Home hero illustration: an example case card with floating status chips, built from site UI rather than stock art
export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-card">
        <div className="hv-head">
          <span className="hv-tag">Illustrative example</span>
          <span className="hv-type"><Icon d={icons.card} /> Personal loan</span>
        </div>

        <div className="hv-amounts">
          <div>
            <small>Outstanding</small>
            <s>₹4,80,000</s>
          </div>
          <span className="hv-arrow">→</span>
          <div>
            <small>Settled for</small>
            <strong>₹2,16,000</strong>
          </div>
        </div>

        <div className="hv-bar"><span /></div>

        <ol className="hv-steps">
          {journey.map((s) => (
            <li key={s.label} className={s.done ? "done" : "now"}>{s.label}</li>
          ))}
        </ol>
      </div>

      <div className="hv-chip hv-chip-calls">
        <span className="hv-chip-ico hv-red"><Icon d={icons.phone} /></span>
        <div><b>Harassing calls</b><small>Stopped lawfully</small></div>
      </div>

      <div className="hv-chip hv-chip-noc">
        <span className="hv-chip-ico"><Icon d={icons.trendDown} /></span>
        <div><b>55% lower payout</b><small>Lender agreed</small></div>
      </div>

      <div className="hv-chip hv-chip-safe">
        <Icon d={icons.shield} /> 100% confidential
      </div>
    </div>
  );
}
