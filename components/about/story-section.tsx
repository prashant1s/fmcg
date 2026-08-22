"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MILESTONES } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1683199804561-ce75c2c7bf61?w=1200&q=80&auto=format&fit=crop";

export function StorySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    if (!timeline || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
    }, timeline);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Our story"
              title="Founded on a simple bet: category focus beats generalist scale."
            />
            <p className="text-left leading-relaxed text-ink-500">
              Ripe started in 2018 when our founder, fresh off a decade
              running brand social for two Fortune 500 food companies, got
              tired of watching generalist agencies apply the same playbook
              to a snack brand as they would a SaaS startup. FMCG social
              doesn&apos;t work like that — it lives at the intersection of
              retail cycles, impulse purchase psychology, and category
              culture. So we built an agency that only works within it.
            </p>
            <p className="text-left leading-relaxed text-ink-500">
              Seven years later, that focus is still our only real
              differentiator: every strategist, producer, and media buyer
              here has only ever worked on consumer goods.
            </p>
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={STORY_IMAGE}
                alt="The Ripe founding team in an early planning session"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div ref={timelineRef} className="relative mt-24 pl-8 sm:pl-10">
          <div className="absolute left-0 top-1 h-full w-px bg-ink-950/10" />
          <div
            ref={lineRef}
            className="absolute left-0 top-1 h-full w-px origin-top bg-coral-500"
          />

          <div className="flex flex-col gap-14">
            {MILESTONES.map((milestone) => (
              <motion.div
                key={milestone.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative flex flex-col gap-2 sm:flex-row sm:gap-10"
              >
                <span className="absolute -left-[2.15rem] top-1 size-3 rounded-full border-2 border-paper bg-coral-500 sm:-left-[2.65rem]" />
                <span className="font-display text-2xl font-semibold text-ink-950 sm:w-28 sm:shrink-0">
                  {milestone.year}
                </span>
                <div className="max-w-xl">
                  <h3 className="text-lg font-semibold text-ink-950">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-500">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
