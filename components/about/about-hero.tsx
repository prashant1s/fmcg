"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { StatsCounter } from "@/components/home/stats-counter";
import { RESULTS_STATS } from "@/data/content";
import { fadeUp, fadeIn, staggerContainer, viewportOnce, EXPO_EASE } from "@/lib/animations";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1543168256-418811576931?w=1200&q=80&auto=format&fit=crop";

const QUICK_FACTS = [
  { label: "Est. 2018" },
  { label: "3 studios — Indore, Bengaluru, Pune" },
  { label: "20+ FMCG brands served" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-22 sm:pt-40 sm:pb-24 lg:pt-52">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-10 size-96 rounded-full bg-blue-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 20, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-4rem] top-1/3 size-[26rem] rounded-full bg-lime-300/15 blur-[110px]"
        />
        <div className="grain-overlay" />
      </div>

      <div className="container-wide relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-7"
        >
          <motion.span variants={fadeUp} className="eyebrow text-lime-300">
            <span className="size-1.5 rounded-full bg-lime-300" />
            About Whizoidstudio
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-display-xl text-balance text-paper">
            Category focus meets creative excellence.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-lg leading-relaxed text-ink-200 sm:text-xl"
          >
            We started Whizoidstudio because FMCG brands deserve a social
            partner that understands retail cycles, shelf economics, and
            category culture — not a generalist agency running the same
            playbook for everyone. Every strategy we ship pairs that category
            depth with the innovation, craft, and attention to detail we&apos;d
            want on our own brands.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
            {QUICK_FACTS.map((fact) => (
              <span
                key={fact.label}
                className="rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-sm text-paper/80 backdrop-blur-sm"
              >
                {fact.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: EXPO_EASE, delay: 0.25 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/3.5] w-full overflow-hidden rounded-lg border border-paper/10">
            <Image
              src={HERO_IMAGE}
              alt="A flat-lay of grocery and pantry products, reflecting the FMCG categories Whizoidstudio works with"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.6 }}
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg border border-ink-950/8 bg-paper px-5 py-4 shadow-xl sm:left-8"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime-300 text-ink-950">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-950">7 years in FMCG</p>
              <p className="text-xs text-ink-500">Category-only, since day one</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-wide relative pt-16 sm:pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EXPO_EASE }}
          className="border-t border-paper/10 pt-8"
        >
          <StatsCounter stats={RESULTS_STATS} light />
        </motion.div>
      </div>
    </section>
  );
}
