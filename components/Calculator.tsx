"use client";

import { useState } from "react";
import Link from "next/link";

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const roundTo = (n: number, step: number) => Math.round(n / step) * step;

// Older defaults typically settle for a lower share of the outstanding
function settlementShare(months: number): [number, number] {
  if (months < 3) return [0.6, 0.75];
  if (months < 6) return [0.5, 0.65];
  if (months < 12) return [0.4, 0.55];
  if (months < 24) return [0.3, 0.45];
  return [0.25, 0.4];
}

export default function Calculator() {
  const [amount, setAmount] = useState(300000);
  const [months, setMonths] = useState(6);
  const [low, high] = settlementShare(months);

  return (
    <div className="calc-card reveal reveal-right">
      <div className="calc-field">
        <div className="calc-label">
          <label htmlFor="c-amount">Total outstanding</label>
          <output htmlFor="c-amount">{inr(amount)}</output>
        </div>
        <input type="range" id="c-amount" min={50000} max={5000000} step={10000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </div>
      <div className="calc-field">
        <div className="calc-label">
          <label htmlFor="c-months">Months since last EMI paid</label>
          <output htmlFor="c-months">{months} {months === 1 ? "month" : "months"}</output>
        </div>
        <input type="range" id="c-months" min={0} max={36} step={1} value={months} onChange={(e) => setMonths(Number(e.target.value))} />
      </div>
      <div className="calc-result">
        <span>Indicative settlement range</span>
        <strong>{inr(roundTo(amount * low, 1000))} – {inr(roundTo(amount * high, 1000))}</strong>
        <span className="calc-save">Potential saving up to <b>{inr(roundTo(amount * (1 - low), 1000))}</b></span>
      </div>
      <Link href="/contact" className="btn btn-primary btn-block">Get an Exact Assessment</Link>
    </div>
  );
}
