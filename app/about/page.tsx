import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { StorySection } from "@/components/about/story-section";
import { Values } from "@/components/about/values";
import { CultureGallery } from "@/components/about/culture-gallery";
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
      <PageHero
        eyebrow="About Whizoidstudio"
        title="A social agency built exclusively for consumer goods."
        description="We started Whizoidstudio because FMCG brands deserve a social partner that understands retail cycles, shelf economics, and category culture — not a generalist agency running the same playbook for everyone."
      />
      <StorySection />
      <Values />
      <CultureGallery />
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
