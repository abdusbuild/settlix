import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  // ISO dates (YYYY-MM-DD); set updated when the article is materially revised
  published: string;
  updated?: string;
  readMinutes: number;
  // Service slug linked from the article sidebar
  service: string;
  body: React.ReactNode;
};

export const posts: Post[] = [
  {
    slug: "can-bank-send-you-to-jail-for-not-paying-loan",
    title: "Can a Bank Send You to Jail for Not Paying a Loan in India?",
    description:
      "Missing EMIs is not a crime in India. Here's when loan default stays a civil matter, the few situations that can turn criminal, and what lenders can actually do.",
    keywords: ["can bank send me to jail for loan", "loan default jail India", "is loan default a crime", "personal loan not paid what happens", "credit card not paid jail"],
    category: "Your Rights",
    published: "2026-10-28",
    readMinutes: 6,
    service: "legal-notice-replies",
    body: (
      <>
        <p>
          It&apos;s one of the most common fears we hear, and recovery agents sometimes use it on purpose: &quot;Pay today or the
          police will come.&quot; The short answer is that <b>not being able to repay a loan is not a crime in India</b>. Default is
          a civil matter between you and your lender. No one can be arrested simply because they missed EMIs on a personal loan or
          could not pay a credit card bill.
        </p>
        <p>That said, there are a few specific situations where criminal law can come into play, so it&apos;s worth knowing exactly where the line is.</p>

        <h2>Why loan default is a civil matter</h2>
        <p>
          A loan is a contract. When you can&apos;t repay, the lender&apos;s remedy is to recover the money through civil
          processes: recovery suits, arbitration, the Debt Recovery Tribunal for larger amounts, or enforcing security on a secured
          loan. None of these involve arrest for the default itself. Genuine hardship, such as job loss, illness or a business
          failure, is exactly the kind of situation civil recovery is designed for.
        </p>

        <h2>When it can become criminal</h2>
        <h3>1. Cheque bounce (Section 138, Negotiable Instruments Act)</h3>
        <p>
          If a cheque or ECS/NACH mandate you gave the lender bounces for insufficient funds, the lender can send a legal notice and,
          if the amount isn&apos;t paid within 15 days of receiving it, file a complaint under Section 138. This is a criminal case
          and can lead to a fine or imprisonment, though in practice most cases end in settlement. If you receive a Section 138
          notice, respond within the deadline. Ignoring it is what usually makes things worse.
        </p>
        <h3>2. Fraud or cheating</h3>
        <p>
          If someone borrowed using forged documents, false identity or with no intention of ever repaying, the lender can file a
          cheating or fraud complaint. This applies to deception at the time of borrowing, not to an honest borrower whose
          circumstances changed later.
        </p>
        <h3>3. Ignoring a court order</h3>
        <p>
          If a court or tribunal passes an order against you and you deliberately disobey it, further consequences can follow. This
          is why legal notices and summons should never be ignored.
        </p>

        <h2>What lenders can legally do</h2>
        <ul>
          <li>Call and write to you for repayment, within RBI&apos;s rules on conduct and calling hours</li>
          <li>Report the default to credit bureaus such as CIBIL, which affects your credit score</li>
          <li>Send a legal notice, start arbitration or file a civil recovery suit</li>
          <li>For secured loans (home, car, property), enforce the security after following due legal process</li>
          <li>File a Section 138 complaint if a cheque or mandate has bounced</li>
        </ul>

        <h2>What lenders and recovery agents cannot do</h2>
        <ul>
          <li>Threaten you with arrest or police action for simple non-payment</li>
          <li>Call you before 8 AM or after 7 PM, or use abusive language</li>
          <li>Contact or shame your family, friends or colleagues</li>
          <li>Seize property without following due legal process</li>
        </ul>
        <p>
          You can read more about these protections on our <Link href="/your-rights">borrower rights page</Link> and in our guide to{" "}
          <Link href="/blog/rbi-rules-for-recovery-agents">RBI rules for recovery agents</Link>.
        </p>

        <h2>What to do if you&apos;re being threatened with jail</h2>
        <ul>
          <li><b>Stay calm and don&apos;t pay under pressure.</b> Never pay into a personal account or a link sent by an agent.</li>
          <li><b>Write it down.</b> Note the date, time, number and what was said, and save recordings and messages.</li>
          <li><b>Read any notice carefully.</b> A genuine legal notice comes from an advocate and has a reply deadline.</li>
          <li><b>Complain.</b> Write to the lender&apos;s grievance officer, and escalate to the RBI Ombudsman if needed.</li>
          <li><b>Get help.</b> If you can&apos;t pay, a negotiated settlement may close the account lawfully.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "rbi-rules-for-recovery-agents",
    title: "RBI Rules for Recovery Agents: What They Can and Can't Do",
    description:
      "A plain-language guide to the RBI rules recovery agents must follow in India, from calling hours to privacy, and how to complain when they cross the line.",
    keywords: ["RBI rules for recovery agents", "RBI guidelines recovery agent calling time", "recovery agent harassment complaint", "loan recovery agent rules India", "recovery agent calling relatives"],
    category: "Harassment",
    published: "2026-10-28",
    readMinutes: 7,
    service: "anti-harassment-support",
    body: (
      <>
        <p>
          Owing money to a bank or NBFC does not take away your rights. The Reserve Bank of India requires every regulated lender
          to follow a Fair Practices Code, and holds lenders responsible for the conduct of the recovery agents they hire. If an
          agent breaks the rules, the lender is accountable.
        </p>

        <h2>Calling hours</h2>
        <p>
          Recovery agents may only contact you between <b>8 AM and 7 PM</b>. Repeated calls outside these hours, or a flood of calls
          meant to wear you down, go against RBI&apos;s instructions on recovery conduct.
        </p>

        <h2>Conduct and language</h2>
        <p>
          Agents must not use abusive language, threats, intimidation or humiliation of any kind, whether on the phone, in messages or
          in person. Threatening arrest for ordinary non-payment, or pretending to be police or court officers, is not allowed.
        </p>

        <h2>Your privacy</h2>
        <p>
          Your debt is between you and your lender. Agents should not contact your relatives, friends, neighbours or colleagues to
          shame or pressure you, and must not disclose your debt publicly or on social media. Digital lending apps may only access
          your phone data with your explicit consent and for a clear purpose. Using your contact list or photos to harass you is a
          serious violation, and threats involving morphed images are a crime.
        </p>

        <h2>Home and office visits</h2>
        <ul>
          <li>The lender should tell you which agency has been assigned to your account</li>
          <li>Agents must carry identity proof and an authorisation letter from the lender</li>
          <li>Visits should be at reasonable hours and must not involve force or a public scene</li>
          <li>Property can only be taken after due legal process for secured loans</li>
        </ul>

        <h2>How to complain, step by step</h2>
        <ol>
          <li><b>Document everything.</b> Dates, times, phone numbers, what was said. Save call recordings, screenshots and messages.</li>
          <li><b>Write to the lender&apos;s grievance redressal officer.</b> Details are on the lender&apos;s website. Email so you have a record, and keep the complaint number.</li>
          <li><b>Escalate to the RBI Ombudsman.</b> If there&apos;s no reply in 30 days or you&apos;re not satisfied, file free at cms.rbi.org.in. See our <Link href="/blog/how-to-file-rbi-ombudsman-complaint">step-by-step Ombudsman guide</Link>.</li>
          <li><b>Report crimes to the police.</b> Threats, extortion or morphed images: file an FIR, report at cybercrime.gov.in or call 1930. If you feel unsafe, call 112.</li>
        </ol>

        <h2>Does complaining stop the debt?</h2>
        <p>
          No. The amount you owe doesn&apos;t disappear because an agent broke the rules. But a complaint can stop the harassment, and
          once you have breathing room you can focus on a realistic plan, whether that&apos;s restructuring or a{" "}
          <Link href="/services/personal-loan-settlement">negotiated settlement</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "loan-settlement-cibil-score",
    title: "Loan Settlement and Your CIBIL Score: What Really Happens",
    description:
      "What a 'Settled' status means on your credit report, how it differs from 'Closed', how long it stays, and how to rebuild your CIBIL score after a loan settlement.",
    keywords: ["loan settlement CIBIL score", "settled vs closed CIBIL", "CIBIL score after settlement", "how to remove settled status from CIBIL", "credit score after loan settlement"],
    category: "Credit Score",
    published: "2026-10-28",
    readMinutes: 6,
    service: "credit-score-rebuilding",
    body: (
      <>
        <p>
          A loan settlement can end months of stress, but it isn&apos;t free of consequences. The biggest one is your credit report.
          Here&apos;s an honest look at what happens, so you can decide with your eyes open.
        </p>

        <h2>&quot;Settled&quot; vs &quot;Closed&quot;</h2>
        <p>
          When you repay a loan in full, the lender reports the account to the credit bureaus as <b>Closed</b>. When you pay less
          than the full outstanding under a settlement, the account is reported as <b>Settled</b>. To a future lender, &quot;Settled&quot;
          signals that a previous lender accepted a loss on your account, so it weighs on your score and on credit decisions.
        </p>

        <h2>How much does the score drop?</h2>
        <p>
          There&apos;s no fixed number. By the time most people settle, their score has already fallen because of the missed EMIs
          that came before. The settlement itself adds a negative mark, but it also stops the account from showing as continuously
          overdue month after month, which is often what does the most damage.
        </p>

        <h2>How long does it stay on the report?</h2>
        <p>
          Credit information is generally kept for several years, so a settled account will be visible to lenders for a long time.
          Its impact fades as you build fresh, positive repayment history on top of it.
        </p>

        <h2>Can &quot;Settled&quot; be changed to &quot;Closed&quot;?</h2>
        <p>
          Often, yes. If your finances recover, you can approach the lender to pay the amount that was waived in the settlement.
          Once paid, ask for a fresh no-dues letter and a request to update the bureau status to Closed. Keep copies of everything,
          and if the report isn&apos;t updated, raise a dispute with the bureau.
        </p>

        <h2>Rebuilding your score after settlement</h2>
        <ul>
          <li>Check your report from each bureau and dispute any errors</li>
          <li>Make sure every settled account shows a zero balance</li>
          <li>Pay every remaining bill and EMI on time, every month</li>
          <li>Consider a secured credit card against a fixed deposit, used lightly and paid in full</li>
          <li>Avoid applying for several loans or cards in a short period</li>
        </ul>

        <h2>Is settlement still worth it?</h2>
        <p>
          For someone who genuinely can&apos;t repay, the alternative is usually not a clean report. It&apos;s an account that stays
          overdue, grows with penalties and attracts recovery action. Settlement isn&apos;t right for everyone, and if you can manage
          a restructured EMI, that&apos;s usually better for your credit. Our{" "}
          <Link href="/settlement-calculator">settlement estimator</Link> and a{" "}
          <Link href="/contact">free consultation</Link> can help you weigh the options.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-file-rbi-ombudsman-complaint",
    title: "How to File a Complaint with the RBI Ombudsman: Step by Step",
    description:
      "A step-by-step guide to filing a free complaint against a bank or NBFC with the RBI Ombudsman, including when you can file, what to include and what happens next.",
    keywords: ["RBI ombudsman complaint", "how to complain to RBI against bank", "cms.rbi.org.in complaint", "complaint against NBFC", "RBI integrated ombudsman scheme"],
    category: "Complaints",
    published: "2026-10-28",
    readMinutes: 6,
    service: "rbi-ombudsman-complaints",
    body: (
      <>
        <p>
          If a bank or NBFC has treated you unfairly, whether through recovery harassment, wrong charges or a refusal to issue a
          no-dues letter, the RBI Ombudsman is a free way to hold it to account. You don&apos;t need a lawyer to file.
        </p>

        <h2>Before you file: complain to the lender first</h2>
        <p>
          The Ombudsman only takes up a complaint after you&apos;ve given the lender a chance to fix it. Write to the lender&apos;s
          grievance redressal officer, preferably by email, and keep the complaint reference number. You can approach the Ombudsman
          if:
        </p>
        <ul>
          <li>the lender rejects your complaint, fully or partly, or</li>
          <li>you&apos;re not satisfied with its reply, or</li>
          <li>it hasn&apos;t replied within 30 days</li>
        </ul>
        <p>
          Don&apos;t wait too long: there are time limits for filing after the lender&apos;s reply, and the Ombudsman generally
          won&apos;t take up a matter that is already before a court.
        </p>

        <h2>Step-by-step: filing online</h2>
        <ol>
          <li><b>Go to cms.rbi.org.in</b>, the RBI&apos;s Complaint Management System, and choose to file a complaint.</li>
          <li><b>Verify your mobile number</b> with the OTP.</li>
          <li><b>Select the lender</b> and the type of complaint, such as recovery agent conduct, charges or loan closure.</li>
          <li><b>Describe what happened</b> clearly with dates, and state what you want: harassment stopped, charges reversed, NOC issued.</li>
          <li><b>Upload evidence</b>: your complaint to the lender, its reply if any, recordings, screenshots, statements.</li>
          <li><b>Submit and note the complaint number</b> to track progress.</li>
        </ol>

        <h2>Tips for a strong complaint</h2>
        <ul>
          <li>Stick to facts and dates; a short timeline is easier to act on than a long story</li>
          <li>Mention which rule was broken, for example calls outside 8 AM to 7 PM or contacting relatives</li>
          <li>Ask for a specific, reasonable remedy</li>
          <li>Keep copies of everything you send and receive</li>
        </ul>

        <h2>What happens next</h2>
        <p>
          The Ombudsman forwards the complaint to the lender for its response and may try to resolve it by facilitation or
          conciliation. If that doesn&apos;t work, it can pass an award directing the lender to act. Many complaints are resolved at
          the first stage, because lenders take Ombudsman complaints seriously.
        </p>

        <h2>What the Ombudsman can&apos;t do</h2>
        <p>
          The Ombudsman can stop unfair practices and correct deficiencies in service, but it won&apos;t waive a genuine debt. If
          you can&apos;t repay, pairing a complaint with a <Link href="/services/personal-loan-settlement">settlement negotiation</Link>{" "}
          is often the most practical path. For help drafting either, see our{" "}
          <Link href="/services/rbi-ombudsman-complaints">complaints and Ombudsman service</Link>.
        </p>
      </>
    ),
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
}
