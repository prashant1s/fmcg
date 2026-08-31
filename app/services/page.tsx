import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServiceDetail } from "@/components/services/service-detail";
import { ServiceProcess } from "@/components/services/service-process";
import { TechTools } from "@/components/services/tech-tools";
import { FAQ } from "@/components/services/faq";
import { CtaSection } from "@/components/home/cta-section";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { SITE } from "@/lib/constants";

const TITLE = "Services";
const DESCRIPTION =
  "Social media marketing, content creation, UGC campaigns, influencer marketing, paid social, and more — built exclusively for FMCG brands.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      provider: { "@type": "ProfessionalService", name: SITE.fullName },
      areaServed: "US",
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicesHero />
      <ServiceDetail />
      <ServiceProcess />
      <TechTools />
      <FAQ />
      <CtaSection
        eyebrow="Not sure where to start?"
        title="Book a free 30-minute strategy call."
        description="We'll audit your current social presence and show you exactly where the opportunity is — no obligation."
        buttonLabel="Schedule Consultation"
      />
    </>
  );
}
