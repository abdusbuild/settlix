import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { primaryPhone, site } from "@/lib/site";

export const metadata: Metadata = pageMeta("Privacy Policy", "How Settlix collects, uses, shares and protects your personal information.", "/privacy-policy");

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      href="/privacy-policy"
      intro="Your financial situation is personal. This policy explains what information we collect, why we collect it, and how we keep it safe."
    >
      <p>
        This Privacy Policy applies to the Settlix website and to the services Settlix (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) provides by phone, WhatsApp, email and in person. We handle your personal data in line with the
        Digital Personal Data Protection Act, 2023 and other applicable Indian laws.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>Contact details such as your name, mobile number and city</li>
        <li>Loan details such as the type of loan, lender, outstanding amount and number of EMIs missed</li>
        <li>Information about harassment by recovery agents, including messages, call recordings or screenshots you share</li>
        <li>Documents you choose to send us, such as statements, notices, ID proof and proof of hardship</li>
        <li>Anything else you tell us during consultations</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider may record basic technical information such as your IP address, browser
        type and the pages you visit, to keep the site secure and working. Our website does not use advertising or
        tracking cookies.
      </p>

      <h2>2. How our website forms work</h2>
      <p>
        When you submit a form on our website, your details are not stored on our website. Instead, WhatsApp opens with
        your message pre-filled, and nothing is sent until you press send in WhatsApp. Messages sent through WhatsApp
        are also subject to WhatsApp&apos;s own privacy policy.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide a consultation</li>
        <li>To assess your case and prepare a plan</li>
        <li>To negotiate with lenders, file complaints and coordinate with advocates on your behalf, with your consent</li>
        <li>To keep you updated about your case</li>
        <li>To meet our legal and regulatory obligations</li>
      </ul>
      <p>We do not use your information for unrelated marketing, and we never sell your personal data.</p>

      <h2>4. Who we share it with</h2>
      <p>We share your information only where needed to help you, and only with:</p>
      <ul>
        <li><b>Your lenders and their representatives</b>, when you have asked us to act for you</li>
        <li><b>Independent advocates</b> who handle legal notices and complaints in your case</li>
        <li><b>Regulators and authorities</b> such as the RBI Ombudsman or police, when you ask us to file a complaint</li>
        <li><b>Service providers</b> who help us operate, such as communication and hosting providers, under confidentiality obligations</li>
        <li><b>Government or courts</b>, where required by law</li>
      </ul>

      <h2>5. Third-party services</h2>
      <p>
        Our contact page shows an embedded Google Map. Google may collect information when you view or interact with
        the map, as described in Google&apos;s privacy policy. Links to WhatsApp, lenders, the RBI and other websites are
        governed by those websites&apos; own policies.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep your information for as long as we are working on your case, and afterwards only for as long as needed
        to resolve disputes or meet legal requirements. When it&apos;s no longer needed, we delete it securely.
      </p>

      <h2>7. How we protect it</h2>
      <p>
        We limit access to your information to the people working on your case and use reasonable technical and
        organisational safeguards. No system is completely secure, so please share documents only through the channels
        we give you.
      </p>

      <h2>8. Your rights</h2>
      <p>Subject to applicable law, you can:</p>
      <ul>
        <li>Ask for a summary of the personal data we hold about you</li>
        <li>Ask us to correct, complete or update it</li>
        <li>Ask us to erase it, where we no longer need it</li>
        <li>Withdraw your consent at any time (this won&apos;t affect anything done before you withdrew)</li>
        <li>Nominate someone to exercise these rights on your behalf</li>
        <li>Raise a grievance with us, and if unresolved, with the Data Protection Board of India</li>
      </ul>

      <h2>9. Children</h2>
      <p>Our services are meant for adults. We do not knowingly collect information from anyone under 18.</p>

      <h2>10. Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>

      <h2>11. Contact &amp; grievances</h2>
      <p>For any privacy question, request or complaint, contact us:</p>
      <ul>
        <li>Phone / WhatsApp: <a href={`tel:${primaryPhone.tel}`}>{primaryPhone.display}</a></li>
        <li>Address: {site.address.lines.join(" ")}</li>
      </ul>
      <p>We aim to respond to every request within 30 days.</p>
    </LegalPage>
  );
}
