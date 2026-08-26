"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icon-map";
import { TiltCard } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const accentStyles = {
  lime: { bg: "bg-lime-300", text: "text-ink-950", glow: "rgba(214,255,63,0.2)" },
  coral: { bg: "bg-coral-500", text: "text-paper", glow: "rgba(255,90,60,0.18)" },
  violet: { bg: "bg-violet-500", text: "text-paper", glow: "rgba(108,92,231,0.2)" },
} as const;

const HOME_SERVICES = [
  {
    id: "home-1",
    title: "Content & Creative",
    shortDescription:
      "In-house photography, videography, and design that make packaged goods look irresistible on a 6-inch screen.",
    icon: "PenTool",
    metric: { value: "120+", label: "assets produced / month" },
    accent: "coral",
  },
  {
    id: "home-2",
    title: "Influencer Marketing",
    shortDescription:
      "Creator partnerships that build trust at shelf and velocity online.",
    icon: "Users",
    metric: { value: "450+", label: "creator partnerships managed" },
    accent: "lime",
  },
  {
    id: "home-3",
    title: "Strategy & Analytics",
    shortDescription:
      "The category, channel, and content strategy — backed by retail-minded reporting that connects performance to sell-through.",
    icon: "Compass",
    metric: { value: "80+", label: "brand strategies delivered" },
    accent: "violet",
  },
] as const;

export function ServicesOverview() {
  const featured = HOME_SERVICES;

  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Every social discipline your brand needs, under one roof."
            description="From always-on content to full-funnel paid media, we cover the entire social stack so you're not stitching together five vendors."
          />
          <Button href="/services" variant="outline" showArrow className="shrink-0 border-ink-950/15">
            View All Services
          </Button>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {featured.map((service) => {
            const accent = accentStyles[service.accent];
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <Link href="/services" className="block h-full">
                  <TiltCard
                    glowColor={accent.glow}
                    className="flex h-full flex-col justify-between gap-8 p-7 transition-colors duration-500 ease-expo hover:border-ink-950/20 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "flex size-12 items-center justify-center rounded-full transition-transform duration-500 ease-expo group-hover:scale-110 group-hover:rotate-6",
                          accent.bg,
                          accent.text
                        )}
                      >
                        <DynamicIcon name={service.icon} className="size-5" />
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-full transition-colors duration-400 ease-expo group-hover:bg-ink-950/5">
                        <ArrowUpRight className="size-5 text-ink-300 transition-all duration-400 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink-950" />
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-xl font-semibold text-ink-950">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-500">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 border-t border-ink-950/8 pt-5">
                      <span className="font-display text-2xl font-semibold text-ink-950">
                        {service.metric.value}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-ink-400">
                        {service.metric.label}
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
