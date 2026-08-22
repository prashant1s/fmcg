"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { OFFICES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function OfficeLocations() {
  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <SectionHeading eyebrow="Where we are" title="Three studios, one focus." />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {OFFICES.map((office) => (
            <motion.div
              key={office.id}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-lg border border-ink-950/8 p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-ink-950/5 text-ink-950">
                <Building2 className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-ink-950">{office.city}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{office.address}</p>
              <a
                href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                className="mt-auto text-sm font-medium text-ink-950 underline decoration-ink-950/20 underline-offset-4 transition-colors hover:text-coral-600 hover:decoration-coral-600"
              >
                {office.phone}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
