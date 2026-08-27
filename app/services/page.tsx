import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceDetail } from "@/components/services/service-detail";
import { ServiceProcess } from "@/components/services/service-process";
import { TechTools } from "@/components/services/tech-tools";
import { PricingCards } from "@/components/services/pricing-cards";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1612362426802-dcc0ccd25f64?w=1600&q=80&auto=format&fit=crop";

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
      <PageHero
        eyebrow="Our Services"
        title="The full social stack, built for consumer goods."
        description="From always-on content to full-funnel paid media — every discipline working as one team, so nothing falls through the cracks between vendors."
        image={HERO_IMAGE}
        imageAlt="A content team planning a social campaign"
      />
      <ServiceDetail />
      <ServiceProcess />
      <TechTools />
      <PricingCards />
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
