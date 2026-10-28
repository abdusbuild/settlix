import { icons } from "@/components/Icons";

export const heroPoints = [
  "Free, confidential consultation",
  "Stop abusive recovery calls",
  "Legal notice replies by advocates",
  "Settle with banks & NBFCs",
];

export const trustItems = [
  { value: "Free", label: "First consultation" },
  { value: "100%", label: "Confidential" },
  { value: "All banks", label: "& NBFCs covered" },
  { value: "Noida", label: "Office, serving all India" },
];

export const problems = [
  { icon: icons.phone, text: "Recovery agents calling you, your family or your office at all hours" },
  { icon: icons.document, text: "Legal notices, arbitration or Section 138 cheque bounce notices" },
  { icon: icons.card, text: "Credit card dues growing every month with interest and late fees" },
  { icon: icons.trendDown, text: "Multiple EMIs taking more than half of your monthly income" },
  { icon: icons.chatAlert, text: "Threats and abusive messages from instant loan apps" },
  { icon: icons.sad, text: "Stress, sleepless nights and no idea where to start" },
];

export const steps = [
  {
    title: "Free consultation",
    text: "Call, WhatsApp or fill the form. We understand your loans, income and what you're going through.",
    detail: "A short call in Hindi or English where you tell us about your loans, your income and any harassment you're facing. We tell you honestly whether we can help, and how. There's no charge and no obligation.",
  },
  {
    title: "Case assessment",
    text: "We go through your statements and income to work out what you can realistically afford.",
    detail: "We review your loan statements, credit report and proof of hardship. You get a clear written plan covering which accounts to settle, restructure or regularise, the likely timeline, and our fee.",
  },
  {
    title: "Harassment protection",
    text: "If agents cross the line, we help you record what's happening and raise it formally with the lender.",
    detail: "If recovery agents are crossing the line, we help you record evidence and file formal complaints with the lender and, if needed, the RBI Ombudsman or police, so you can deal with the debt without fear.",
  },
  {
    title: "Negotiation",
    text: "We present your case to the bank or NBFC and negotiate a settlement amount and timeline.",
    detail: "We present your hardship case to the lender and negotiate the settlement amount and payment schedule. Every offer is shared with you, and nothing is accepted without your approval.",
  },
  {
    title: "Settlement & closure",
    text: "You pay the agreed amount directly to the lender and receive a written settlement / NOC letter.",
    detail: "Once you have the settlement letter on the lender's letterhead, you pay the lender directly. We follow up until you receive the NOC and the account is updated with credit bureaus.",
  },
];

export const documents = [
  "PAN and Aadhaar card",
  "Latest loan / credit card statements",
  "Any notices or letters received from the lender",
  "Bank statements for the last 6 months",
  "Proof of hardship: termination letter, medical bills, business loss records",
  "Screenshots, call recordings or messages from recovery agents (if any)",
];

export const whyItems = [
  { title: "Transparent process", text: "We explain every option, fee and likely outcome in writing before you commit." },
  { title: "Legal backing", text: "Advocates handle notices and complaints, so you're never facing lenders alone." },
  { title: "Pay the lender directly", text: "Settlement money always goes straight to your bank or NBFC, never through us." },
  { title: "Dedicated case manager", text: "One point of contact who keeps you updated through WhatsApp and calls." },
];

export const values = [
  { title: "Honesty first", text: "We tell you what's realistic, even when it isn't what you hoped to hear. We never promise a guaranteed outcome." },
  { title: "Dignity always", text: "Debt is a financial problem, not a moral failing. Every client is treated with respect and complete confidentiality." },
  { title: "Lawful methods only", text: "We work within RBI rules and Indian law. We never ask you to hide assets, give false information or ignore the courts." },
  { title: "Your money stays yours", text: "Settlement payments go directly to your lender against a written letter. We never collect them on your behalf." },
];

export const notDo = [
  "Lend money or arrange new loans",
  "Collect settlement amounts on behalf of lenders",
  "Guarantee any discount, waiver or outcome",
  "Advise you to stop paying when you can afford to pay",
  "Promise to \"remove\" accurate entries from your credit report",
];

export const rights = [
  <>Call you before <b>8 AM</b> or after <b>7 PM</b></>,
  "Use abusive language, threats or intimidation",
  "Contact or shame your relatives, friends or colleagues",
  "Share your debt details publicly or on social media",
  "Visit without identity proof and an authorisation letter",
  "Use physical force or seize property without due legal process",
];

export const borrowerRights = [
  { title: "Right to be informed", text: "The lender must give you the details of the recovery agency assigned to your account, and the agent must carry identification and the lender's authorisation." },
  { title: "Right to privacy", text: "Your debt is between you and your lender. Agents should not disclose it to family, friends, neighbours or colleagues, or post it online." },
  { title: "Right to fair notice", text: "Before secured assets are taken, the lender must follow due process, including written notice and time to respond." },
  { title: "Right to complain", text: "Every regulated lender must have a grievance redressal officer. If you're not satisfied within 30 days, you can go to the RBI Ombudsman for free." },
  { title: "Right to data protection", text: "Digital lending apps may only access your phone data with your explicit consent and for a clear purpose, and they cannot misuse your contacts or photos." },
  { title: "Right to a settlement letter", text: "If you settle, you're entitled to the terms in writing and a no-dues letter once you've paid." },
];

export const complaintSteps = [
  { title: "Document everything", text: "Note the date, time, phone number and what was said. Save messages and call recordings." },
  { title: "Complain to the lender", text: "Write to the lender's grievance redressal officer by email, and keep the complaint reference number." },
  { title: "Escalate to the RBI Ombudsman", text: "If there's no reply in 30 days or you aren't satisfied, file at cms.rbi.org.in. It's free." },
  { title: "Report crimes to the police", text: "Threats, extortion or morphed images are crimes. File an FIR, or report online at cybercrime.gov.in or call 1930." },
];

export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "About loan settlement",
    items: [
      {
        q: "What is loan settlement?",
        a: "If genuine hardship means you can't clear an overdue account in full, a lender may agree to close it for a smaller amount, paid at once or over a few months. Once you've paid, the lender gives you a settlement letter confirming the account is closed.",
      },
      {
        q: "Which loans can be settled?",
        a: "Mainly unsecured loans: personal loans, credit cards, unsecured business loans and app-based loans from banks and NBFCs. Secured loans such as home or car loans are usually handled through restructuring rather than settlement.",
      },
      {
        q: "Is settlement guaranteed?",
        a: "No one can guarantee a settlement. The decision and the amount rest entirely with the lender. What we do is present your case properly and negotiate on your behalf to give you the best possible chance.",
      },
      {
        q: "How long does the process take?",
        a: "It varies by lender and case. Some accounts settle within a few weeks; others take a few months, especially if you need time to arrange the settlement amount.",
      },
      {
        q: "Is settlement right for everyone?",
        a: "No. If you can afford to repay with a revised schedule, restructuring or regularising the account is usually better for your credit. We recommend settlement only where it genuinely makes sense.",
      },
    ],
  },
  {
    title: "Credit score",
    items: [
      {
        q: "What happens to my CIBIL score after settlement?",
        a: "It will dip. Your report will show the account with a \"Settled\" status, and new lenders read that as a partial repayment. An account left in default for years does more damage, though. We help you rebuild afterwards, and if you later pay the waived balance, the lender can change the status to \"Closed\".",
      },
      {
        q: "Will I ever be able to borrow again?",
        a: "Yes. Lenders tend to be cautious for a while, but a record of on-time payments wins them back. Most people restart with a card backed by a fixed deposit or a small loan they repay without fail.",
      },
    ],
  },
  {
    title: "Harassment & legal",
    items: [
      {
        q: "Can you stop recovery agents from harassing me?",
        a: "We take up abusive recovery behaviour with the lender, file formal complaints, and escalate to the RBI Ombudsman or police where needed. Lenders are bound by RBI rules on fair recovery, and documented complaints are usually effective.",
      },
      {
        q: "I received a legal notice. What should I do?",
        a: "Don't ignore it. Note the date you received it and contact us right away. Notices usually come with deadlines, and a proper reply drafted by an advocate keeps your options open.",
      },
      {
        q: "Can the bank put me in jail for not paying?",
        a: "Defaulting on a loan is generally a civil matter. A bounced cheque under Section 138 of the Negotiable Instruments Act is a criminal offence, but it's usually resolved through payment or settlement. An advocate can explain your exact position.",
      },
    ],
  },
  {
    title: "Fees & working with us",
    items: [
      {
        q: "Do I pay the settlement amount to Settlix?",
        a: "No. The settlement amount is always paid directly to your lender, against a written settlement letter on the lender's letterhead. Settlix only charges a service fee for its advisory and support, which we explain before you sign up.",
      },
      {
        q: "Is the first consultation really free?",
        a: "Yes. The first consultation is free and there's no obligation to sign up afterwards.",
      },
      {
        q: "Do I need to visit your office?",
        a: "No. Most clients work with us entirely over phone and WhatsApp. You're welcome to visit our Noida office if you prefer to meet in person.",
      },
      {
        q: "Which cities do you serve?",
        a: "We're based in Noida and help borrowers across India, since most of the work is done remotely with lenders.",
      },
    ],
  },
];

export const loanTypes = ["Personal Loan", "Credit Card", "Business / MSME Loan", "App-based Loan", "Multiple Loans"];
export const amountRanges = ["Below ₹1 Lakh", "₹1 – 3 Lakh", "₹3 – 5 Lakh", "₹5 – 10 Lakh", "Above ₹10 Lakh"];
export const emiRanges = ["None yet", "1 – 3", "4 – 6", "More than 6"];
