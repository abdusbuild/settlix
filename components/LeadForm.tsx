"use client";

import { FormEvent, useState } from "react";
import { amountRanges, emiRanges, loanTypes } from "@/lib/content";
import { site } from "@/lib/site";

type Variant = "hero" | "contact";

const labels: Record<string, string> = {
  name: "Name",
  phone: "Mobile",
  city: "City",
  type: "Loan type",
  amount: "Outstanding",
  emi: "EMIs missed",
  message: "Details",
};

function Select({ id, name, label, options, required }: { id: string; name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} required={required} defaultValue="">
        <option value="">Select</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </>
  );
}

// Names may only contain letters (any script, incl. Hindi matras), spaces, dots, apostrophes and hyphens
const nameDisallowed = new RegExp("[^\\p{L}\\p{M}\\s.'-]", "gu");
const nameLetters = new RegExp("\\p{L}.*\\p{L}", "u");

export default function LeadForm({ variant }: { variant: Variant }) {
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const p = variant === "hero" ? "h" : "f";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const failing = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[required]")).filter(
      (input) =>
        !input.checkValidity() || input.value.trim() === "" || (input.name === "name" && !nameLetters.test(input.value))
    );
    setInvalid(new Set(failing.map((input) => input.name)));
    if (failing.length) {
      failing[0].focus();
      return;
    }

    const data = new FormData(form);
    const lines = ["Hi Settlix, I'd like a free consultation."];
    for (const key of Object.keys(labels)) {
      const v = String(data.get(key) ?? "").trim();
      if (v) lines.push(`${labels[key]}: ${v}`);
    }
    if (data.get("harassment")) lines.push("I am facing harassment from recovery agents.");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    form.reset();
  }

  function onInput(e: FormEvent<HTMLFormElement>) {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    if (name === "name") {
      const clean = target.value.replace(nameDisallowed, "");
      if (clean !== target.value) target.value = clean;
    }
    if (name === "phone") {
      const clean = target.value.replace(/\D/g, "").slice(0, 10);
      if (clean !== target.value) target.value = clean;
    }
    if (invalid.has(name)) {
      const next = new Set(invalid);
      next.delete(name);
      setInvalid(next);
    }
  }

  const cls = (name: string) => `field${invalid.has(name) ? " invalid" : ""}`;

  const nameField = (
    <div className={cls("name")}>
      <label htmlFor={`${p}-name`}>Full name</label>
      <input id={`${p}-name`} name="name" type="text" autoComplete="name" required />
    </div>
  );
  const phoneField = (
    <div className={cls("phone")}>
      <label htmlFor={`${p}-phone`}>Mobile number</label>
      <input id={`${p}-phone`} name="phone" type="tel" inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" autoComplete="tel-national" required />
    </div>
  );
  const typeField = (
    <div className={cls("type")}>
      <Select id={`${p}-type`} name="type" label="Loan type" options={loanTypes} required />
    </div>
  );
  const amountField = (
    <div className={cls("amount")}>
      <Select id={`${p}-amount`} name="amount" label="Total outstanding" options={amountRanges} required />
    </div>
  );

  if (variant === "hero") {
    return (
      <form className="lead-form" noValidate onSubmit={onSubmit} onInput={onInput}>
        {nameField}
        {phoneField}
        <div className="field-row">
          {typeField}
          {amountField}
        </div>
        <label className="check">
          <input type="checkbox" name="harassment" />
          <span>I&apos;m facing harassment from recovery agents</span>
        </label>
        <button type="submit" className="btn btn-primary btn-block">Get My Free Consultation</button>
        <p className="form-note">Submitting opens WhatsApp with your details ready to send. Your information stays confidential.</p>
      </form>
    );
  }

  return (
    <form className="lead-form" noValidate onSubmit={onSubmit} onInput={onInput}>
      <div className="field-row">
        {nameField}
        {phoneField}
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-city">City</label>
          <input id="f-city" name="city" type="text" autoComplete="address-level2" />
        </div>
        {typeField}
      </div>
      <div className="field-row">
        {amountField}
        <div className="field">
          <Select id="f-emi" name="emi" label="EMIs missed" options={emiRanges} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Tell us briefly about your situation (optional)</label>
        <textarea id="f-msg" name="message" rows={3} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Send via WhatsApp</button>
      <p className="form-note">
        Prefer to talk? Call <a href={`tel:${site.phones[1].tel}`}>{site.phones[1].display}</a>.
      </p>
    </form>
  );
}
