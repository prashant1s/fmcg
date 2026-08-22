"use client";

import { motion } from "framer-motion";
import { MISSION_VISION_VALUES } from "@/data/content";
import { DynamicIcon } from "@/lib/icon-map";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function Values() {
  return (
    <section className="bg-paper-soft py-section-sm">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {MISSION_VISION_VALUES.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-lg border border-ink-950/8 bg-paper p-8 sm:p-9"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ink-950 text-lime-300">
                <DynamicIcon name={item.icon} className="size-5" />
              </span>
              <h3 className="text-xl font-semibold text-ink-950">{item.title}</h3>
              <p className="leading-relaxed text-ink-500">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
