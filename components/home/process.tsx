"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/lib/icon-map";
import { EXPO_EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) return;

        // A fast scroll (fling, momentum scroll) can make several rows cross
        // the trigger band in a single batch. Rather than taking whichever
        // one happens to be processed last (which can favor the wrong
        // direction and make the panel appear to jump), pick whichever
        // intersecting row's center sits closest to the viewport's center —
        // that's always the one the user is actually looking at.
        const viewportCenter = window.innerHeight / 2;
        const closest = intersecting.reduce((best, entry) => {
          const entryDistance = Math.abs(
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - viewportCenter
          );
          const bestDistance = Math.abs(
            best.boundingClientRect.top + best.boundingClientRect.height / 2 - viewportCenter
          );
          return entryDistance < bestDistance ? entry : best;
        });

        const index = Number((closest.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeStep = PROCESS_STEPS[activeIndex];

  return (
    <section className="relative bg-ink-950 py-section text-paper">
      {/* overflow-hidden lives on this decorative layer, not the section,
          so it doesn't become an ancestor of the sticky column below and
          break position: sticky (any overflow != visible on an ancestor
          detaches sticky elements from the viewport). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-0 size-[26rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
        />
        <div className="grain-overlay" />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="How we work"
          title="A five-step system, refined across 900+ campaigns."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-32 flex flex-col gap-10">
              <div className="flex items-center gap-5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeStep.icon}
                    initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
                    transition={{ duration: 0.4, ease: EXPO_EASE }}
                    className="flex size-16 shrink-0 items-center justify-center rounded-full bg-lime-300 text-ink-950"
                  >
                    <DynamicIcon name={activeStep.icon} className="size-6" />
                  </motion.span>
                </AnimatePresence>
                <div className="flex items-baseline gap-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeStep.number}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.4, ease: EXPO_EASE }}
                      className="font-display text-6xl font-semibold leading-none text-paper"
                    >
                      {activeStep.number}
                    </motion.span>
                  </AnimatePresence>
                  <span className="font-mono text-sm text-paper/30">
                    / {PROCESS_STEPS.length.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="min-h-[7rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: EXPO_EASE }}
                  >
                    <h3 className="text-2xl font-semibold text-paper">{activeStep.title}</h3>
                    <p className="mt-3 max-w-xs leading-relaxed text-paper/50">
                      {activeStep.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-2">
                {PROCESS_STEPS.map((step, index) => (
                  <span
                    key={step.id}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500 ease-expo",
                      index === activeIndex ? "w-9 bg-lime-300" : "w-4 bg-paper/15"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative flex gap-5 border-l-2 border-paper/10 py-9 pl-7 sm:gap-7 sm:py-11 sm:pl-9"
                >
                  {isActive && (
                    <motion.span
                      layoutId="process-active-bar"
                      className="absolute -left-0.5 top-0 h-full w-0.5 bg-lime-300"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      borderColor: isActive ? "#D6FF3F" : "rgba(250, 248, 243, 0.15)",
                      color: isActive ? "#D6FF3F" : "rgba(250, 248, 243, 0.3)",
                    }}
                    transition={{ duration: 0.5, ease: EXPO_EASE }}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border font-mono text-sm sm:size-12"
                  >
                    {step.number}
                  </motion.span>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.6, x: isActive ? 0 : -4 }}
                    transition={{ duration: 0.5, ease: EXPO_EASE }}
                  >
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-500 sm:text-2xl",
                        isActive ? "text-paper" : "text-paper/35"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2.5 max-w-md leading-relaxed transition-colors duration-500",
                        isActive ? "text-paper/60" : "text-paper/20"
                      )}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
