"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getProjectBySlug } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const spotlightSlugs = ["rasssa-rasoi", "11-11"];

const accentTextLight = {
  lime: "text-lime-300",
  blue: "text-blue-300",
} as const;

export function CaseStudyHighlight() {
  const spotlights = spotlightSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section className="bg-ink-950 py-section text-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Deep dives"
          title="Two campaigns, two very different problems solved."
          light
        />

        <div className="mt-16 flex flex-col gap-20">
          {spotlights.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-lg lg:col-span-6",
                    reversed && "lg:order-2"
                  )}
                >
                  <Image
                    src={project.coverImage}
                    alt={`${project.client} — ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={cn("flex flex-col gap-6 lg:col-span-6", reversed && "lg:order-1")}
                >
                  <span className="font-mono text-xs uppercase tracking-wide text-paper/40">
                    {project.client} · {project.year}
                  </span>
                  <h3 className="text-display-sm text-paper">{project.title}</h3>
                  <p className="leading-relaxed text-paper/60">{project.challenge}</p>
                  <p className="leading-relaxed text-paper/60">{project.approach}</p>

                  <div className="grid grid-cols-2 gap-6 border-t border-paper/10 pt-6 sm:grid-cols-4">
                    {project.results.map((result) => (
                      <div key={result.label}>
                        <p
                          className={cn(
                            "font-display text-2xl font-semibold",
                            accentTextLight[project.accent]
                          )}
                        >
                          {result.value}
                        </p>
                        <p className="mt-1 text-xs text-paper/40">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant="outline" showArrow className="mt-2 w-fit border-paper/25 text-paper hover:border-paper/60">
                    Start a Similar Project
                  </Button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
