"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeIn, viewportOnce } from "@/lib/animations";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&auto=format&fit=crop";

export function StorySection() {
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
              Whizoidstudio started in 2018 when our founder, fresh off a decade
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
                alt="A quiet workspace overlooking the city, where Whizoidstudio's early strategy took shape"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
