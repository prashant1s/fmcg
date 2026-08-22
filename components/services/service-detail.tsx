"use client";

import { services } from "@/data/services";
import { ServiceCard } from "./service-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function ServiceDetail() {
  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Full service list"
          title="Eight disciplines. One team. Zero hand-offs."
          description="Mix and match what your brand needs, or lean on the full stack — every discipline is built to work together, not in silos."
        />

        <div className="no-scrollbar sticky top-20 z-20 -mx-5 mt-12 flex gap-2 overflow-x-auto border-y border-ink-950/8 bg-paper/95 px-5 py-4 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm text-ink-500 transition-colors hover:bg-ink-950/5 hover:text-ink-950"
            >
              {service.title}
            </a>
          ))}
        </div>

        <div className="mt-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
