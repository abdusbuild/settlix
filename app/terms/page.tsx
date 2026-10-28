import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { primaryPhone } from "@/lib/site";

export const metadata: Metadata = pageMeta("Terms of Use", "Terms governing your use of the Settlix website and services.", "/terms");

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      href="/terms"
      intro="Please read these terms before using our website or services. By using them, you agree to these terms."
    >
      <h2>1. About Settlix</h2>
      <p>
        Settlix is a debt advisory and borrower support service based in Noida, Uttar Pradesh. We are not a bank, NBFC,
        lender, credit bureau or law firm, and we do not provide loans.
      </p>

      <h2>2. Use of this website</h2>
      <ul>
        <li>The content on this website is general information and not financial or legal advice for your situation.</li>
        <li>The settlement estimator gives an indicative range only. It is not an offer and does not bind any lender.</li>
        <li>You agree not to misuse the website, attempt to disrupt it, or use it for any unlawful purpose.</li>
      </ul>

      <h2>3. Our services</h2>
      <ul>
        <li>The scope of our work and our service fee are agreed with you in writing before we start.</li>
        <li>We act on your instructions and will not accept any offer on your behalf without your approval.</li>
        <li>
          Any settlement, waiver, restructuring or other relief is decided solely by your lender. We do not guarantee
          any outcome, amount or timeline.
        </li>
        <li>Legal services, including replies to notices and representation, are provided by independent advocates.</li>
      </ul>

      <h2>4. Settlement payments</h2>
      <p>
        All settlement amounts must be paid directly to your lender, only after you receive a written settlement letter
        on the lender&apos;s letterhead. Settlix never collects settlement amounts on behalf of lenders. If anyone asks
        you to pay a settlement amount to Settlix or to a personal account, please do not pay and{" "}
        <a href={`tel:${primaryPhone.tel}`}>call us</a> to verify.
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Give us accurate and complete information about your loans, income and circumstances.</li>
        <li>Keep us informed of any notices, calls or offers you receive directly from lenders.</li>
        <li>Make payments you agree to with your lender on time.</li>
      </ul>

      <h2>6. Credit reporting</h2>
      <p>
        Lenders report settled accounts to credit bureaus. A settled account may lower your credit score and affect your
        ability to borrow in future. We will explain this to you, but the reporting itself is done by your lender and the
        bureaus.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Settlix is not liable for decisions made by lenders, courts, regulators or
        credit bureaus, or for any indirect loss arising from your use of this website. Nothing in these terms limits
        any rights you have under consumer protection law.
      </p>

      <h2>8. Intellectual property</h2>
      <p>The Settlix name, logo and website content belong to Settlix and may not be copied without permission.</p>

      <h2>9. Privacy</h2>
      <p>
        How we handle your personal data is explained in our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts at Gautam Buddh Nagar (Noida), Uttar Pradesh, will have
        jurisdiction over any dispute.
      </p>

      <h2>11. Changes</h2>
      <p>We may update these terms from time to time. Continued use of the website means you accept the updated terms.</p>
    </LegalPage>
  );
}
