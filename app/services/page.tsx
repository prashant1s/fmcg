import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceDetail } from "@/components/services/service-detail";
import { ServiceProcess } from "@/components/services/service-process";
import { TechTools } from "@/components/services/tech-tools";
import { PricingCards } from "@/components/services/pricing-cards";
import { FAQ } from "@/components/services/faq";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media marketing, content creation, UGC campaigns, influencer marketing, paid social, and more — built exclusively for FMCG brands.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="The full social stack, built for consumer goods."
        description="From always-on content to full-funnel paid media — eight disciplines working as one team, so nothing falls through the cracks between vendors."
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
