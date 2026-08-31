"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";
import type { Project } from "@/types";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { StatsCounter } from "./stats-counter";
import { RotatingCards } from "./rotating-cards";
import { ProjectModal } from "@/components/projects/project-modal";
import { HERO_STATS } from "@/data/content";
import { EXPO_EASE, staggerContainer, fadeUp } from "@/lib/animations";

const ROTATING_WORDS = ["FMCG", "snack", "beverage", "beauty", "grocery", "wellness"];
const HERO_PROJECTS = projects.slice(0, 8);

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-ink-950 pt-18 sm:pt-30 xl:min-h-[95svh] 2xl:min-h-screen 3xl:min-h-[110vh]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-16 size-[26rem] rounded-full bg-blue-600/25 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-6rem] top-40 size-[30rem] rounded-full bg-lime-300/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-blue-400/20 blur-[100px]"
        />
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
      </div>

      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10 xl:px-14 relative grid grid-cols-1 items-center gap-6 pb-4 lg:grid-cols-12 lg:gap-6 lg:pb-0 xl:gap-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col gap-7 lg:col-span-7"
        >
          <motion.span variants={fadeUp} className="eyebrow text-lime-300">
            <span className="size-1.5 rounded-full bg-lime-300" />
            Social growth for FMCG brands
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-display-xl text-balance text-paper"
          >
            We make{" "}
            <span className="relative inline-flex overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: EXPO_EASE }}
                  className="inline-block bg-gradient-to-r from-lime-300 to-lime-100 bg-clip-text text-transparent"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            brands impossible to scroll past.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-balance text-md leading-relaxed text-ink-200 sm:text-md"
          >
            Whizoidstudio is a social media agency built exclusively for consumer goods
            brands — strategy, content, UGC, and paid media engineered to move
            product, not just impressions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/contact" size="lg" magnetic showArrow>
              Start Your Campaign
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              magnetic
              icon={<PlayCircle className="size-4" />}
              className="border-paper/25 text-paper hover:border-paper/60"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EXPO_EASE, delay: 0.3 }}
          className="hidden lg:col-span-5 lg:block"
        >
          <RotatingCards items={HERO_PROJECTS} onSelect={setSelectedProject} className="min-h-[30rem] xl:min-h-[34rem]" />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10 xl:px-14 relative pb-6 pt-4 sm:pb-8 lg:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EXPO_EASE, delay: 0.5 }}
          className="border-t border-paper/10 pt-4"
        >
          <StatsCounter stats={HERO_STATS} light />
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
}
