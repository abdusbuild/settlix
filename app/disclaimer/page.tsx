import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { primaryPhone } from "@/lib/site";

export const metadata: Metadata = pageMeta("Disclaimer", "Important information about the nature of Settlix's services and the limits of what we can promise.", "/disclaimer");

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      href="/disclaimer"
      intro="We believe in being upfront. Please read this to understand exactly what Settlix is, and what it isn't."
    >
      <h2>Not a lender</h2>
      <p>
        Settlix is a debt advisory and support service. We are not a bank, NBFC or lender, we are not registered with or
        authorised by the Reserve Bank of India as a lender, and we do not provide or arrange loans.
      </p>

      <h2>No guaranteed outcome</h2>
      <p>
        Any settlement, waiver, restructuring or other relief is entirely at the discretion of your lender. We present
        your case and negotiate on your behalf, but we cannot and do not guarantee any particular result, settlement
        percentage or timeline. Past outcomes do not predict future ones.
      </p>

      <h2>Payments go to your lender</h2>
      <p>
        Settlement payments are always made directly to your lender, against a written settlement letter. Settlix does
        not collect settlement money. If anyone claiming to be from Settlix asks for a settlement payment to be made to
        them, please call <a href={`tel:${primaryPhone.tel}`}>{primaryPhone.display}</a> to verify before paying.
      </p>

      <h2>Effect on your credit score</h2>
      <p>
        A settled account normally appears on your credit report with the status &quot;Settled&quot;. This can lower
        your credit score and make it harder to borrow for some time. Settlement is not right for everyone, and we will discuss alternatives where they
        exist.
      </p>

      <h2>Legal services</h2>
      <p>
        Settlix is not a law firm. Legal services such as replies to legal notices and representation are provided by
        independent advocates. Information on this website about laws and RBI rules is general in nature, may change,
        and is not legal advice.
      </p>

      <h2>Settlement estimator</h2>
      <p>
        The settlement estimator on this website is a rough guide based on typical outcomes. It is not an offer from
        Settlix or any lender.
      </p>

      <h2>No affiliation</h2>
      <p>
        Names of banks, NBFCs, regulators or other organisations mentioned on this website are for information only and
        do not imply any affiliation with or endorsement of Settlix.
      </p>
    </LegalPage>
  );
}
