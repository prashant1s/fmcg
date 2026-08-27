"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard, accentStyles } from "./service-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/lib/icon-map";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function ServiceDetail() {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    services.forEach((service) => {
      const el = document.getElementById(service.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-paper py-section">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 size-[420px] rounded-full bg-gradient-to-br from-lime-300/25 via-coral-500/15 to-violet-500/25 blur-[110px]" />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Full service list"
          title="Every discipline. One team. Zero hand-offs."
          description="Mix and match what your brand needs, or lean on the full stack — every discipline is built to work together, not in silos."
        />

        <motion.nav
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          aria-label="Jump to service"
          className="no-scrollbar sticky top-20 z-20 -mx-5 mt-12 flex gap-1 overflow-x-auto border-y border-ink-950/8 bg-paper/90 px-5 py-3 shadow-[0_1px_0_0_rgba(10,10,12,0.04)] backdrop-blur-xl sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2 sm:shadow-sm lg:hidden"
        >
          {services.map((service) => {
            const isActive = activeSlug === service.slug;
            const accent = accentStyles[service.accent];

            return (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className={cn(
                  "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  isActive ? "text-ink-950" : "text-ink-500 hover:text-ink-950"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-tab-active-mobile"
                    className={cn("absolute inset-0 rounded-full opacity-20", accent.bg)}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{service.title}</span>
              </a>
            );
          })}
        </motion.nav>

        <div className="mt-4 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-start lg:gap-8">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-label="Jump to service"
            className="hidden lg:sticky lg:top-28 lg:flex lg:w-[380px] lg:shrink-0 lg:flex-col lg:gap-1"
          >
            {services.map((service, index) => {
              const isActive = activeSlug === service.slug;
              const accent = accentStyles[service.accent];

              return (
                <a
                  key={service.id}
                  href={`#${service.slug}`}
                  className="group/nav relative flex items-start gap-4 rounded-md py-4 pl-5 pr-4 transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-nav-active"
                      className="absolute inset-0 rounded-md bg-ink-950/[0.03]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={cn(
                      "absolute inset-y-2 left-0 w-[3px] rounded-full transition-colors duration-300",
                      isActive ? accent.bg : "bg-transparent"
                    )}
                  />
                  <span
                    className={cn(
                      "relative z-10 mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300",
                      isActive
                        ? cn(accent.bg, accent.text, "border-transparent")
                        : "border-ink-950/10 text-ink-400 group-hover/nav:border-ink-950/20 group-hover/nav:text-ink-600"
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className="relative z-10 flex flex-col gap-1">
                    <span
                      className={cn(
                        "text-base font-medium transition-colors duration-300",
                        isActive ? "text-ink-950" : "text-ink-500 group-hover/nav:text-ink-950"
                      )}
                    >
                      {service.title}
                    </span>
                    {isActive && (
                      <span className="text-sm leading-relaxed text-ink-500">
                        {service.shortDescription}
                      </span>
                    )}
                  </span>
                </a>
              );
            })}

            <div className="mt-6 flex items-center gap-3 border-t border-ink-950/8 pl-5 pt-6">
              <DynamicIcon name="Sparkles" className="size-4 text-ink-300" />
              <p className="text-sm leading-relaxed text-ink-400">
                Not sure what you need?{" "}
                <a href="/contact" className="font-medium text-ink-700 underline decoration-ink-950/20 underline-offset-2 hover:text-coral-600 hover:decoration-coral-500">
                  Talk to us
                </a>
              </p>
            </div>
          </motion.aside>

          <div className="min-w-0 lg:flex-1">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
