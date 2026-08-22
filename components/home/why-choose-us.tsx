"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/data/content";
import { DynamicIcon } from "@/lib/icon-map";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const supportingStats = [
  { value: 15, suffix: "+", label: "data sources per audit" },
  { value: 120, suffix: "+", label: "creative assets / month" },
  { value: 5.8, suffix: "x", label: "average client ROAS" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink-950 py-section text-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Ripe"
          title="A social partner that thinks like a P&L owner."
          description="We've sat on the brand side of the table. Every recommendation is built to justify itself in the metrics that matter to your business, not just your feed."
          light
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-paper/10 sm:grid-cols-3"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="flex flex-col gap-6 bg-ink-950 p-8 sm:p-10"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex size-14 items-center justify-center rounded-full border border-lime-300/30 text-lime-300"
              >
                <DynamicIcon name={item.icon} className="size-6" />
              </motion.span>

              <div className="flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold text-paper">{item.title}</h3>
                <p className="text-sm leading-relaxed text-paper/50">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto flex items-baseline gap-2 border-t border-paper/10 pt-5">
                <span className="font-display text-2xl font-semibold text-lime-300">
                  <AnimatedCounter
                    value={supportingStats[index].value}
                    suffix={supportingStats[index].suffix}
                  />
                </span>
                <span className="text-xs uppercase tracking-wide text-paper/40">
                  {supportingStats[index].label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
