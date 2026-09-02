"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { OFFICES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function OfficeLocations() {
  return (
    <section className="bg-ink-950 py-section">
      <div className="container-wide">
        <SectionHeading eyebrow="Where we are" title="Three cities, one focus." light />

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
              className="flex flex-col gap-5 rounded-lg border border-paper/10 p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-paper/8 text-blue-300">
                <Building2 className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-paper">{office.city}</h3>
              <p className="text-sm leading-relaxed text-ink-200">{office.address}</p>
              <div className="mt-auto flex flex-col gap-1.5">
                <a
                  href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm font-medium text-paper underline decoration-paper/25 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-300"
                >
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm font-medium text-paper underline decoration-paper/25 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-300"
                >
                  {office.email}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
