import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { SITE } from "@/lib/constants";

const TITLE = "Privacy Policy";
const LAST_UPDATED = "Last updated August 2026";
const DESCRIPTION = `How ${SITE.fullName} collects, uses, and protects your information.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/privacy",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect the following categories of information:</p>
        <ul>
          <li><strong>Contact information</strong> — name, email address, and phone number.</li>
          <li><strong>Business information</strong> — company name, industry, and project requirements.</li>
          <li><strong>Communication data</strong> — messages, inquiries, and feedback you send us.</li>
          <li><strong>Technical data</strong> — IP address, browser type, and device information collected automatically when you visit our Site.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and provide the services you request.</li>
          <li>Send quotes, proposals, and project updates.</li>
          <li>Improve our website and overall user experience.</li>
          <li>Communicate about new offerings, where you&apos;ve opted in.</li>
          <li>Meet our legal and regulatory obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Disclosure",
    body: (
      <p>
        We do not sell your personal information. It may be shared with
        trusted third-party service providers who support our operations
        (such as hosting, analytics, or communication tools), in connection
        with a business transfer, or when required by law or to protect our
        rights, property, or safety.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    body: (
      <p>
        Our website uses cookies and similar technologies to remember your
        preferences and analyze website traffic. Essential cookies keep the
        Site functioning, while analytics cookies — used only where enabled
        — help us understand aggregate usage patterns. You can control or
        disable cookies at any time through your browser settings.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    body: (
      <p>
        We apply reasonable technical and organizational safeguards to
        protect your information, including secure SSL/TLS encryption for
        data transmission, access controls limiting who can view your
        information internally, and regular security reviews of our
        systems.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: (
      <p>
        We retain personal information only as long as necessary to respond
        to your inquiry, deliver a service, or maintain an active client
        relationship, unless a longer retention period is required by law.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    body: (
      <p>
        You may request access to, correction of, deletion of, or a
        portable copy of your personal information at any time by emailing{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will respond
        to verified requests within a reasonable timeframe.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time to reflect changes in
        our practices or for legal, operational, or regulatory reasons.
        Changes take effect once posted on this page, and continued use of
        the Site constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about this policy, or requests regarding your personal
        information, can be sent to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or to{" "}
        {SITE.address}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={LAST_UPDATED} />
      <LegalPage
        lastUpdated={LAST_UPDATED}
        intro={
          <>
            {SITE.fullName} (&ldquo;{SITE.name},&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) respects your privacy. This policy outlines
            how we collect, use, and protect your personal information when
            you visit {SITE.url} or engage our services.
          </>
        }
        sections={sections}
      />
    </>
  );
}
