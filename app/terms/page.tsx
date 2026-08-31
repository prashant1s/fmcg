import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { SITE } from "@/lib/constants";

const TITLE = "Terms of Service";
const LAST_UPDATED = "Last updated August 2026";
const DESCRIPTION = `The terms that govern your use of ${SITE.url} and any services provided by ${SITE.fullName}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/terms",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing {SITE.url} or engaging {SITE.fullName} for any service,
        you agree to be bound by these Terms of Service. If you do not agree
        with any part of these terms, please do not use this Site or engage
        our services.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    body: (
      <>
        <p>{SITE.fullName} provides social media services built for FMCG and
          consumer goods brands, including social media strategy and
          management, content creation and design, paid social advertising,
          influencer marketing, ad production, and analytics and reporting.
        </p>
        <p>
          We reserve the right to modify, expand, or discontinue any service
          offering at our discretion, and to decline engagements that fall
          outside our scope of expertise.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    body: (
      <>
        <p>To help us deliver on time and on brief, clients agree to:</p>
        <ul>
          <li>Provide accurate, complete, and current information about the business, brand, and project requirements.</li>
          <li>Respond promptly to requests for feedback, approvals, and sign-off on deliverables.</li>
          <li>Supply brand assets, product information, and account access needed to execute the work in a timely manner.</li>
          <li>Maintain confidentiality of any login credentials, strategy documents, or materials shared during the engagement.</li>
        </ul>
        <p>
          Delays in providing feedback, materials, or approvals may extend
          project timelines and, where applicable, incur additional costs.
        </p>
      </>
    ),
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    body: (
      <>
        <p>
          Project-based engagements typically require a non-refundable
          deposit before work commences, with the remaining balance billed
          against agreed milestones or on completion. Retainer engagements
          are billed monthly in advance for the scope defined in the
          applicable agreement.
        </p>
        <p>
          Invoices are due within the period stated on the invoice. Late
          payments may accrue interest and can result in a pause of active
          work until the account is brought current.
        </p>
      </>
    ),
  },
  {
    id: "timelines",
    title: "Timelines & Delivery",
    body: (
      <p>
        Project timelines and content calendars are estimates based on the
        scope agreed at the outset. Actual delivery dates depend on client
        responsiveness, availability of source materials, third-party
        platform dependencies (such as ad account or publisher approvals),
        and any requested changes to scope.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          Ownership of custom deliverables — including final creative,
          copy, and campaign assets produced specifically for a client —
          transfers to that client once payment for the corresponding work
          has been received in full.
        </p>
        <p>
          {SITE.fullName} retains ownership of its internal frameworks,
          templates, playbooks, and production tools used to create
          deliverables, as well as the right to showcase completed work in
          our portfolio and marketing materials unless otherwise agreed in
          writing. Stock assets, fonts, music, and other third-party
          materials remain subject to their original licence terms.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions & Scope Changes",
    body: (
      <p>
        The number of revision rounds included in a project is set out in
        the applicable proposal or agreement. Requests beyond that
        allowance, or changes that materially expand the original scope,
        will be quoted separately and may require an updated agreement
        before work continues.
      </p>
    ),
  },
  {
    id: "client-materials",
    title: "Client-Provided Materials",
    body: (
      <p>
        Clients warrant that they own or hold the necessary rights to any
        logos, images, product information, testimonials, or other
        materials supplied for use in our work, and are responsible for
        ensuring those materials do not infringe on any third party&apos;s
        rights. {SITE.fullName} accepts no liability for claims arising
        from client-supplied materials.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        Both parties agree to protect any proprietary or confidential
        information disclosed during the engagement — including strategy
        documents, performance data, and unreleased campaign plans — and to
        use it solely for the purposes of the engagement, both during and
        after the relationship ends.
      </p>
    ),
  },
  {
    id: "warranty-disclaimer",
    title: "Warranty Disclaimer",
    body: (
      <p>
        Our services and this Site are provided &ldquo;as is.&rdquo; While
        we bring proven strategy and craft to every engagement, social and
        digital marketing outcomes depend on many factors outside our
        control, and we do not guarantee specific results, engagement
        rates, or business outcomes.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, {SITE.fullName}&apos;s
        liability for any claim arising from our services is limited to the
        amount paid by the client for that specific service. We are not
        liable for indirect, incidental, or consequential damages, including
        lost profits or lost business opportunities.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to indemnify and hold {SITE.fullName} harmless from any
        claims, losses, or expenses arising from your use of our services,
        your breach of these terms, or materials you provide to us.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        Either party may terminate an active engagement with written
        notice as specified in the applicable agreement. The client
        remains responsible for payment of all work completed up to the
        termination date. We may terminate immediately in the event of
        non-payment or a material breach of these terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of India, and any disputes
        arising from them will be subject to the exclusive jurisdiction of
        the courts in Indore, Madhya Pradesh.
      </p>
    ),
  },
  {
    id: "general",
    title: "General Provisions",
    body: (
      <>
        <p>
          We may update these terms from time to time; continued use of the
          Site or our services after changes are posted constitutes
          acceptance of the revised terms. If any provision of these terms
          is found unenforceable, the remaining provisions continue in full
          effect.
        </p>
        <p>
          These terms, together with any signed project agreement or
          proposal, form the entire understanding between you and{" "}
          {SITE.fullName} regarding the subject matter herein.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or to{" "}
        {SITE.address}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description={LAST_UPDATED} />
      <LegalPage
        lastUpdated={LAST_UPDATED}
        intro={
          <>
            These Terms of Service govern your use of {SITE.url} (the
            &ldquo;Site&rdquo;) and any services provided by{" "}
            {SITE.fullName} (&ldquo;{SITE.name},&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;). By using the Site or engaging our services,
            you agree to the terms below.
          </>
        }
        sections={sections}
      />
    </>
  );
}
