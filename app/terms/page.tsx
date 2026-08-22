import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${SITE.url}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated August 2026"
      />
      <section className="bg-paper py-section">
        <div className="container-wide">
          <div className="prose prose-neutral max-w-2xl prose-headings:font-display prose-headings:font-semibold prose-a:text-coral-600">
            <p>
              These Terms of Service govern your use of {SITE.url} (the
              &ldquo;Site&rdquo;), operated by {SITE.fullName}. By using the
              Site, you agree to these terms.
            </p>
            <h2>Use of the Site</h2>
            <p>
              This Site is provided for informational purposes to showcase{" "}
              {SITE.name}&apos;s services and past work. You may not use the
              Site for any unlawful purpose or attempt to disrupt its
              normal operation.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content on this Site — including copy, case study
              descriptions, and visual design — is the property of{" "}
              {SITE.fullName} or its licensors and may not be reproduced
              without permission. Client names, logos, and case study
              details referenced on this Site are used for illustrative
              purposes.
            </p>
            <h2>No Warranty</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo;
              without warranties of any kind. Performance figures cited in
              case studies reflect specific past engagements and are not a
              guarantee of future results.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              {SITE.fullName} is not liable for any indirect, incidental, or
              consequential damages arising from your use of the Site.
            </p>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of
              the Site after changes are posted constitutes acceptance of
              the revised terms.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
