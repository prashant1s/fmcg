"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <section className="bg-paper-soft py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Investment"
          title="Packages built around where your brand is today."
          description="Every engagement is scoped to your channel mix — these tiers are a starting point. Talk to us for a custom quote."
          align="center"
          className="mx-auto items-center text-center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeUp}
              className={cn(
                "flex flex-col gap-8 rounded-lg border p-8 sm:p-9",
                tier.highlighted
                  ? "border-ink-950 bg-ink-950 text-paper shadow-xl lg:-translate-y-4"
                  : "border-ink-950/10 bg-paper text-ink-950"
              )}
            >
              {tier.highlighted && (
                <span className="w-fit rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-950">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    tier.highlighted ? "text-paper/50" : "text-ink-500"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold">{tier.price}</span>
                <span className={cn("text-sm", tier.highlighted ? "text-paper/40" : "text-ink-400")}>
                  {tier.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        tier.highlighted ? "text-lime-300" : "text-coral-500"
                      )}
                    />
                    <span className={tier.highlighted ? "text-paper/80" : "text-ink-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.highlighted ? "primary" : "dark"}
                className="mt-auto w-full justify-center"
                showArrow
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
