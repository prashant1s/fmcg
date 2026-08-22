import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { StorySection } from "@/components/about/story-section";
import { Values } from "@/components/about/values";
import { TeamSection } from "@/components/about/team-section";
import { Awards } from "@/components/about/awards";
import { CultureGallery } from "@/components/about/culture-gallery";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Ripe — a social media agency built exclusively for FMCG and consumer goods brands. Our story, our team, and the values behind the work.",
  alternates: { canonical: "/about" },
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1706074793638-da28b90ea8ae?w=1600&q=80&auto=format&fit=crop";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ripe"
        title="A social agency built exclusively for consumer goods."
        description="We started Ripe because FMCG brands deserve a social partner that understands retail cycles, shelf economics, and category culture — not a generalist agency running the same playbook for everyone."
        image={HERO_IMAGE}
        imageAlt="The Ripe team collaborating in a conference room"
      />
      <StorySection />
      <Values />
      <TeamSection />
      <Awards />
      <CultureGallery />
      <CtaSection
        eyebrow="Careers at Ripe"
        title="Talented, category-obsessed. Sound like you?"
        description="We're always looking for strategists, producers, and media buyers who want to go deep on one industry instead of wide across ten."
        buttonLabel="Let's Work Together"
        buttonHref="/contact"
      />
    </>
  );
}
