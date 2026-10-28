export type Service = {
  slug: string;
  title: string;
  short: string;
  keywords: string[];
  // Photo lives at /images/services/<slug>.jpg
  imageAlt: string;
  icon: string;
  intro: string;
  forWhom: string[];
  help: { title: string; text: string }[];
  note?: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "personal-loan-settlement",
    title: "Personal Loan Settlement",
    short: "We present your hardship case to the lender and negotiate a one-time or structured settlement you can realistically pay.",
    keywords: ["personal loan settlement", "personal loan settlement process", "one time settlement personal loan", "personal loan OTS", "unable to pay personal loan EMI", "personal loan settlement company", "personal loan settlement NOC"],
    imageAlt: "Indian ₹500 banknotes",
    icon: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5z",
    intro:
      "When a job loss, medical emergency or drop in income makes your personal loan EMIs impossible to keep up with, a negotiated settlement can close the account for less than the full outstanding. We help you prepare an honest hardship case and negotiate with the bank or NBFC on your behalf.",
    forWhom: [
      "You have missed one or more personal loan EMIs and can't catch up",
      "Your income has dropped or stopped due to job loss, illness or business failure",
      "Penal interest and charges have pushed the outstanding far beyond what you borrowed",
      "You can arrange a lump sum or a few instalments, but not the full amount",
    ],
    help: [
      { title: "Hardship documentation", text: "We help you organise salary slips, bank statements, medical records or termination letters that show genuine hardship." },
      { title: "Realistic offer", text: "We work out what you can actually pay, so you don't agree to a settlement you'll default on again." },
      { title: "Negotiation with the lender", text: "We present your case to the lender's collections or settlement team and negotiate the amount and timeline." },
      { title: "Written settlement letter", text: "We make sure you get the offer in writing on the lender's letterhead before you pay a single rupee." },
      { title: "NOC & closure", text: "After payment, we follow up until you receive the No Objection / No Dues certificate." },
    ],
    note: "Your credit report will show a settled loan with the status \"Settled\", and your score will take a hit for a while. We go through this with you before you decide.",
    faqs: [
      { q: "How much discount can I expect on a personal loan?", a: "It depends on the lender, how long the account has been overdue and your documented hardship. There is no fixed percentage, and the final amount is always the lender's decision." },
      { q: "Can I settle if I've only missed one or two EMIs?", a: "Lenders rarely agree to settle accounts that are only slightly overdue. In such cases we usually first explore restructuring, a payment holiday or a revised EMI plan." },
      { q: "Do I need to stop paying EMIs to get a settlement?", a: "No. We never advise anyone to stop paying deliberately. Settlement is meant for borrowers who genuinely cannot pay, not as a shortcut for those who can." },
    ],
  },
  {
    slug: "credit-card-settlement",
    title: "Credit Card Settlement",
    short: "Stop the cycle of interest and penalties. We negotiate with card issuers to close outstanding dues for a reduced amount.",
    keywords: ["credit card settlement", "credit card debt settlement India", "credit card one time settlement", "unable to pay credit card bill", "credit card dues settlement", "credit card closure letter"],
    imageAlt: "Hand holding a credit card next to a laptop",
    icon: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H4v-6h16zm0-10H4V6h16z",
    intro:
      "Credit card interest of 3–4% a month, plus late fees and GST, can make a small balance grow out of control. If paying the minimum due no longer works, we help you negotiate a settlement with the card issuer and finally close the card.",
    forWhom: [
      "You're paying only the minimum due and the balance keeps growing",
      "You hold several cards and use one to pay another",
      "The card is blocked and you're getting recovery calls",
      "You've received a legal or arbitration notice from the card issuer",
    ],
    help: [
      { title: "Statement review", text: "We go through your statements to separate the principal from interest, late fees and other charges." },
      { title: "Card prioritisation", text: "If you have several cards, we plan which to settle first based on your cash flow and the pressure from each issuer." },
      { title: "Negotiation", text: "We take up your hardship case with the issuer and negotiate a reduced closure amount or an instalment plan." },
      { title: "Written confirmation", text: "Every offer is confirmed in writing by the issuer before you pay." },
      { title: "Card closure", text: "We follow up until the card account is closed and you receive the closure or no-dues letter." },
    ],
    faqs: [
      { q: "Can I keep using the card after settlement?", a: "No. A settled card is closed permanently. You may be able to get a new card later once your credit score improves." },
      { q: "Will interest keep adding up during negotiation?", a: "Usually yes, until a settlement is agreed. That's why we try to move quickly once your documents are ready." },
      { q: "Is a credit card settlement different from a loan settlement?", a: "The process is similar, but card dues often include more fees and interest, which can leave more room to negotiate." },
    ],
  },
  {
    slug: "anti-harassment-support",
    title: "Anti-Harassment Support",
    short: "We address abusive recovery agents directly and help you raise complaints so calls, threats and visits stay within the law.",
    keywords: ["recovery agent harassment", "stop recovery agent calls", "loan recovery harassment complaint", "loan app harassment", "RBI rules for recovery agents", "complaint against recovery agent"],
    imageAlt: "Man looking anxiously at his phone",
    icon: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z",
    intro:
      "Owing money doesn't take away your right to dignity. RBI rules require lenders and their recovery agents to follow fair practices. If you're being threatened, abused or shamed, we help you document it, complain formally and make it stop.",
    forWhom: [
      "Recovery agents are calling at odd hours or many times a day",
      "Agents are contacting your family, friends, neighbours or employer",
      "You're receiving abusive language, threats or morphed images",
      "Agents have visited your home or office without proper identification",
    ],
    help: [
      { title: "Evidence collection", text: "We show you how to record calls, save messages and keep a log of every incident in a way that holds up in a complaint." },
      { title: "Complaint to the lender", text: "We draft a formal complaint to the lender's grievance redressal officer, citing the specific rules being broken." },
      { title: "RBI Ombudsman escalation", text: "If the lender doesn't respond properly within 30 days, we help you escalate under the RBI Integrated Ombudsman Scheme." },
      { title: "Police & cybercrime support", text: "For criminal intimidation, extortion or online threats, we guide you on filing a police complaint or reporting at cybercrime.gov.in." },
      { title: "Loan app threats", text: "For harassment by digital lending apps, we help you report the app and protect your contacts and photos." },
    ],
    note: "If you ever feel physically unsafe, call 112 immediately. For cyber fraud or online threats, you can call the national cybercrime helpline 1930.",
    faqs: [
      { q: "Can recovery agents call my family?", a: "Recovery agents should not harass or humiliate your family members, friends or colleagues, or share your debt details with them. Doing so breaks RBI's fair practice rules." },
      { q: "What hours can agents call me?", a: "Under RBI directions, recovery agents should not call borrowers before 8 AM or after 7 PM." },
      { q: "Will complaining make the lender take legal action?", a: "A lender can pursue lawful recovery whether or not you complain. A complaint only ensures they do it within the law. We help you handle both together." },
    ],
  },
  {
    slug: "legal-notice-replies",
    title: "Legal Notice Replies",
    short: "Received a legal, arbitration or cheque bounce notice? Advocates we work with draft timely, proper replies on your behalf.",
    keywords: ["legal notice reply loan", "reply to bank legal notice", "loan arbitration notice", "section 138 cheque bounce", "credit card legal notice reply", "advocate for loan legal notice"],
    imageAlt: "Wooden gavel on a white surface",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z",
    intro:
      "A legal notice from a bank or NBFC is frightening, but ignoring it is usually the worst option. Independent advocates we work with review the notice, explain what it means for you and send a proper, timely reply that protects your position.",
    forWhom: [
      "You've received a demand or legal notice from a lender",
      "You've received a Section 138 (cheque bounce) notice",
      "You've been told about arbitration proceedings or an award",
      "You've received a SARFAESI or court summons and don't know what to do",
    ],
    help: [
      { title: "Notice review", text: "An advocate reads the notice and explains in plain language what it claims, what the deadlines are and what can happen next." },
      { title: "Drafted reply", text: "A reply is drafted and sent within the time allowed, putting your side and hardship on record." },
      { title: "Arbitration guidance", text: "If arbitration has started, we explain your options and help you participate rather than let an award pass without your side being heard." },
      { title: "Section 138 support", text: "For cheque bounce matters, we guide you on settlement or defence before or after a complaint is filed." },
      { title: "Linked settlement", text: "Wherever possible, we use the legal process to open a settlement conversation with the lender." },
    ],
    note: "Legal services are provided by independent advocates. Settlix itself is not a law firm.",
    faqs: [
      { q: "How quickly must I reply to a legal notice?", a: "The notice usually mentions a deadline, often 15 days. A Section 138 notice gives you 15 days from receipt to pay before a complaint can be filed, so contact us as soon as you receive it." },
      { q: "Can I be arrested for not paying a loan?", a: "Not paying a loan is generally a civil matter, not a crime. A cheque bounce under Section 138 is a criminal offence, but it's usually resolved through payment or settlement. An advocate can explain your specific case." },
      { q: "What if I ignore the notice?", a: "Ignoring it can lead to proceedings or an arbitration award without your side being heard. A timely reply keeps your options open." },
    ],
  },
  {
    slug: "business-loan-settlement",
    title: "Business & MSME Loans",
    short: "Business loans and overdrafts under stress? We help restructure or settle unsecured business credit with your lenders.",
    keywords: ["business loan settlement", "MSME loan settlement", "business loan restructuring", "unsecured business loan OTS", "guarantor liability business loan"],
    imageAlt: "Shopkeeper writing in his accounts book",
    icon: "M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4z",
    intro:
      "Lost orders, delayed payments from customers or a slow season can leave a small business unable to service its loans. We help proprietors and MSMEs approach lenders for restructuring or settlement of unsecured business credit before things get worse.",
    forWhom: [
      "Proprietors and partners with unsecured business loans",
      "MSMEs with stressed working capital or overdraft limits",
      "Businesses that took several fintech or NBFC loans at once",
      "Owners whose personal guarantees are now being invoked",
    ],
    help: [
      { title: "Business cash-flow review", text: "We review your books, GST returns and bank statements to understand what the business can realistically pay." },
      { title: "Restructuring requests", text: "Where the business is still viable, we help you request a revised repayment schedule instead of a settlement." },
      { title: "Settlement negotiation", text: "Where it isn't, we negotiate a one-time settlement on unsecured business credit." },
      { title: "Guarantor protection", text: "We help guarantors understand their liability and include them in the settlement where possible." },
      { title: "Lender coordination", text: "With several lenders, we coordinate so one lender's action doesn't derail the overall plan." },
    ],
    faqs: [
      { q: "Can secured business loans be settled?", a: "Loans backed by property or machinery are usually handled through restructuring or the lender's own resolution process. We'll explain what applies to your case." },
      { q: "Does the MSME status of my business help?", a: "RBI has a separate framework for restructuring stressed MSME accounts. If your business is registered on Udyam, we check whether it applies to you." },
    ],
  },
  {
    slug: "multiple-loan-resolution",
    title: "Multiple Loan Resolution",
    short: "Juggling several loans and cards? We prioritise accounts and build one plan to get you debt-free step by step.",
    keywords: ["multiple loans settlement", "debt consolidation India", "too many loans help", "debt trap help", "multiple EMI problem"],
    imageAlt: "Hands opening an empty wallet",
    icon: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
    intro:
      "When you have several personal loans, cards and app loans at once, it's easy to end up paying whoever shouts loudest. We list every debt, rank them by cost and risk, and build one plan that clears them in a sensible order.",
    forWhom: [
      "You have three or more loans or cards running at once",
      "Total EMIs take more than half your monthly income",
      "You've taken new loans to pay old ones",
      "You don't know exactly how much you owe in total",
    ],
    help: [
      { title: "Complete debt map", text: "We list every loan and card with the outstanding amount, interest rate, overdue status and lender." },
      { title: "Priority plan", text: "We rank accounts by interest cost, legal risk and harassment so you know which to deal with first." },
      { title: "Budget", text: "We set a realistic monthly budget so household essentials are covered before repayments." },
      { title: "Lender-by-lender action", text: "Some accounts may be regularised, some restructured and some settled. We handle each one according to the plan." },
      { title: "Progress tracking", text: "Your case manager tracks every account until the last one is closed." },
    ],
    faqs: [
      { q: "Is this the same as taking a consolidation loan?", a: "No. We don't offer loans. Our plan works with the debts you already have instead of adding a new one." },
      { q: "Should I settle all loans at once?", a: "Usually not. Settling in stages, starting with the most expensive or most aggressive lender, is more achievable for most people." },
    ],
  },
  {
    slug: "rbi-ombudsman-complaints",
    title: "Complaints & RBI Ombudsman",
    short: "We file complaints through the lender's grievance channel and escalate to the RBI Integrated Ombudsman when needed.",
    keywords: ["RBI ombudsman complaint", "RBI CMS complaint", "complaint against bank", "complaint against NBFC", "CIBIL dispute", "bank grievance redressal"],
    imageAlt: "People reviewing documents at a table",
    icon: "M21 6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1zm-4 6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1z",
    intro:
      "Wrong charges, unfair recovery, a settlement letter that never arrives, or a closed account still showing as overdue: these are all legitimate complaints. We help you raise them the right way, with the right documents, so they get resolved.",
    forWhom: [
      "Your lender has charged fees or interest you didn't agree to",
      "You paid a settlement but didn't receive the NOC",
      "Recovery agents broke RBI rules and the lender ignored your complaint",
      "Your credit report shows wrong information after closure",
    ],
    help: [
      { title: "Lender grievance complaint", text: "We draft and file a clear complaint with the lender's grievance redressal officer and keep records of it." },
      { title: "Nodal officer escalation", text: "If there's no satisfactory response, we escalate to the lender's principal nodal officer." },
      { title: "RBI Integrated Ombudsman", text: "If the lender rejects your complaint or doesn't reply within 30 days, we help you file on the RBI CMS portal (cms.rbi.org.in)." },
      { title: "Credit bureau disputes", text: "We raise disputes with CIBIL and other bureaus when your report is wrong." },
      { title: "Follow-up", text: "We track every complaint until it's resolved or closed." },
    ],
    faqs: [
      { q: "Does it cost anything to complain to the RBI Ombudsman?", a: "No. Filing a complaint under the RBI Integrated Ombudsman Scheme is free for consumers." },
      { q: "Can the Ombudsman waive my loan?", a: "No. The Ombudsman looks at deficiencies in service, such as unfair charges or recovery practices. It does not waive genuine dues." },
    ],
  },
  {
    slug: "credit-score-rebuilding",
    title: "Credit Score Rebuilding",
    short: "After closure, we guide you on getting your CIBIL record updated and rebuilding your credit score over time.",
    keywords: ["credit score rebuilding", "improve CIBIL score after settlement", "settled to closed CIBIL", "CIBIL correction", "CIBIL score repair"],
    imageAlt: "Phone showing a credit score app",
    icon: "M3 17h2v4H3zm4-4h2v8H7zm4-4h2v12h-2zm4-3h2v15h-2zm4-4h2v19h-2z",
    intro:
      "Closing your debts is the first step. The next is rebuilding the credit history you'll need for a home loan, a card or even a job check in future. We show you how to get your reports corrected and build your score back up.",
    forWhom: [
      "You've recently settled or closed loans",
      "Your credit report shows accounts as \"Written off\" or \"Settled\"",
      "You've been rejected for a loan or card because of your score",
      "You want to plan a future home or vehicle loan",
    ],
    help: [
      { title: "Report review", text: "We go through your credit reports with you and identify errors and negative entries." },
      { title: "Bureau corrections", text: "We help you file disputes to correct wrong entries and make sure closed accounts are updated." },
      { title: "\"Settled\" to \"Closed\"", text: "Where it makes sense, we explain how to pay the remaining balance later so a settled account can be updated to Closed." },
      { title: "Rebuilding plan", text: "We guide you on responsible ways to rebuild credit, such as a secured card used lightly and paid on time." },
    ],
    faqs: [
      { q: "How long does it take for my score to recover?", a: "It depends on your full history, but steady on-time payments usually show results over 12–24 months." },
      { q: "Can you remove a correct negative entry?", a: "No one can lawfully remove accurate information from your credit report. We only dispute entries that are wrong." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
