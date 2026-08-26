import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ResultsCounter } from "@/components/projects/results-counter";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";
import { CaseStudyHighlight } from "@/components/projects/case-study-highlight";
import { CtaSection } from "@/components/home/cta-section";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { projects } from "@/data/projects";

const TITLE = "Our Work";
const DESCRIPTION =
  "Case studies from Ripe's work with FMCG brands across social media, UGC, paid ads, branding, and influencer marketing — with real results.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/projects",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Work", path: "/projects" },
]);

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      about: project.client,
      description: project.summary,
      datePublished: project.year,
    },
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
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
