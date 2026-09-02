"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { OUR_APPROACH } from "@/data/content";
import { DynamicIcon } from "@/lib/icon-map";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function ApproachSection() {
  return (
    <section className="bg-paper-soft py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our approach"
          title="Perfection, innovation, and a full-cycle service model."
          description="Five principles that shape every project, from the first strategy deck to the campaign report."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {OUR_APPROACH.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-ink-950/8 bg-paper p-8 shadow-sm transition-[border-color,box-shadow] duration-500 ease-expo hover:border-lime-300/40 hover:shadow-lg sm:p-9"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ink-950 text-lime-300 transition-transform duration-500 ease-expo group-hover:scale-110 group-hover:rotate-6">
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
