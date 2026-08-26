import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Map } from "@/components/contact/map";
import { AlternativeContact } from "@/components/contact/alternative-contact";
import { OfficeLocations } from "@/components/contact/office-locations";
import { FaqQuickLinks } from "@/components/contact/faq-quick-links";
import { breadcrumbJsonLd } from "@/lib/json-ld";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Get in touch with Ripe to talk about your FMCG brand's social strategy. Fill out the form, call, WhatsApp, or request a callback.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's create something amazing together."
        description="Tell us about your brand, your category, and where you want social to take you. We reply within one business day."
      />

      <section id="contact-form" className="scroll-mt-24 bg-paper py-section">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Map />
      <AlternativeContact />
      <OfficeLocations />
      <FaqQuickLinks />
    </>
  );
}
