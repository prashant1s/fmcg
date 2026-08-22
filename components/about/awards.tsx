"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { AWARDS } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function Awards() {
  return (
    <section className="bg-ink-950 py-section text-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Recognition"
          title="Award-winning work, client-first outcomes."
          light
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AWARDS.map((award) => (
            <motion.div
              key={award.id}
              variants={fadeUp}
              className="flex items-center gap-5 rounded-lg border border-paper/10 p-6 transition-colors duration-300 hover:border-lime-300/40 sm:p-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-paper/5 text-lime-300">
                <Award className="size-5" />
              </span>
              <div>
                <h3 className="font-medium leading-snug text-paper">{award.title}</h3>
                <p className="mt-1 text-sm text-paper/45">
                  {award.issuer} · {award.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
