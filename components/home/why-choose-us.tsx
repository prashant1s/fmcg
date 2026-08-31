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
    <section className="relative overflow-hidden bg-ink-950 py-section text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-0 size-[30rem] rounded-full bg-lime-300/[0.06] blur-[140px]"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
        <div className="grain-overlay" />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Why Whizoidstudio"
          title="A social partner that thinks like a P&L owner."
          description="We've sat on the brand side of the table. Every recommendation is built to justify itself in the metrics that matter to your business, not just your feed."
          light
        />

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative flex flex-col gap-8 rounded-2xl border border-paper/10 bg-gradient-to-b from-paper/[0.04] to-transparent p-8 backdrop-blur-sm transition-colors duration-500 hover:border-lime-300/30 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_70px_-20px_rgba(214,255,63,0.35)] transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-start justify-between">
                <motion.span
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex size-14 items-center justify-center rounded-full border border-lime-300/25 bg-lime-300/[0.07] text-lime-300 transition-colors duration-500 group-hover:bg-lime-300/15"
                >
                  <DynamicIcon name={item.icon} className="size-6" />
                </motion.span>
                <span className="font-mono text-xs text-paper/20">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold text-paper">{item.title}</h3>
                <p className="text-sm leading-relaxed text-paper/50">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto flex items-baseline gap-2 border-t border-paper/10 pt-6">
                <span className="font-display text-3xl font-semibold text-lime-300">
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
