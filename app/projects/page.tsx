import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ResultsCounter } from "@/components/projects/results-counter";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";
import { CaseStudyHighlight } from "@/components/projects/case-study-highlight";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from Ripe's work with FMCG brands across social media, UGC, paid ads, branding, and influencer marketing — with real results.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects that delivered results."
        description="A look at recent campaigns across food, beverage, personal care, and household categories — filtered by discipline, backed by real metrics."
      />
      <ResultsCounter />
      <ProjectsShowcase />
      <CaseStudyHighlight />
      <CtaSection
        eyebrow="Your brand could be next"
        title="Ready to be our next success story?"
        description="Tell us about your brand and what you're trying to achieve — we'll show you how we'd approach it."
      />
    </>
  );
}
