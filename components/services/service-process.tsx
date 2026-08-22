"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function ServiceProcess() {
  return (
    <section className="bg-ink-950 py-section text-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Delivery model"
          title="How every engagement actually runs."
          light
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
        >
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent lg:block" />
          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.id} variants={fadeUp} className="relative flex flex-col gap-4">
              <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-paper/20 bg-ink-950 font-display text-lg font-semibold text-lime-300">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-paper">{step.title}</h3>
              <p className="text-sm leading-relaxed text-paper/50">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
