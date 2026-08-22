import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.fullName} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated August 2026"
      />
      <section className="bg-paper py-section">
        <div className="container-wide">
          <div className="prose prose-neutral max-w-2xl prose-headings:font-display prose-headings:font-semibold prose-a:text-coral-600">
            <p>
              {SITE.fullName} (&ldquo;Ripe,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
              privacy. This policy explains what information we collect
              through {SITE.url}, how we use it, and the choices you have.
            </p>
            <h2>Information We Collect</h2>
            <p>
              When you submit a contact form, request a callback, or
              subscribe to our newsletter, we collect the information you
              provide directly — such as your name, email address, phone
              number, company, and message. We also collect standard
              analytics data (pages visited, device type, referral source)
              to understand how visitors use our site.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to inquiries,
              deliver requested services, send occasional newsletters you&apos;ve
              opted into, and improve our website. We do not sell your
              personal information to third parties.
            </p>
            <h2>Cookies</h2>
            <p>
              We use essential cookies to operate the site and, where
              enabled, analytics cookies to understand aggregate usage
              patterns. You can control cookies through your browser
              settings.
            </p>
            <h2>Data Retention &amp; Security</h2>
            <p>
              We retain contact information only as long as necessary to
              respond to your inquiry or maintain an active client
              relationship, and we apply reasonable technical safeguards to
              protect it from unauthorized access.
            </p>
            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by emailing{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
              {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
