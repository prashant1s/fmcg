import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustedBrands } from "@/components/home/trusted-brands";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.fullName} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CtaSection />
    </>
  );
}
