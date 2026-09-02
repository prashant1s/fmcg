import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { Values } from "@/components/about/values";
import { CultureGallery } from "@/components/about/culture-gallery";
import { ApproachSection } from "@/components/about/approach-section";
import { CtaSection } from "@/components/home/cta-section";
import { breadcrumbJsonLd } from "@/lib/json-ld";

const TITLE = "About Us";
const DESCRIPTION =
  "Meet Whizoidstudio — a social media agency built exclusively for FMCG and consumer goods brands. Our story, our team, and the values behind the work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <AboutHero />
      <StorySection />
      <Values />
      <CultureGallery />
      <ApproachSection />
      <CtaSection
        eyebrow="Careers at Whizoidstudio"
        title="Talented, category-obsessed. Sound like you?"
        description="We're always looking for strategists, producers, and media buyers who want to go deep on one industry instead of wide across ten."
        buttonLabel="Let's Work Together"
        buttonHref="/contact"
      />
    </>
  );
}
