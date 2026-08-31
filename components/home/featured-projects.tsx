"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const featured = projects.slice(0, 8);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Mirror the track's starting left inset (the container's padding)
        // on the right side too, so the last card ends flush instead of
        // stopping short or overshooting depending on viewport width.
        const startInset = track.getBoundingClientRect().left;
        const distance = track.scrollWidth + startInset * 2 - section.clientWidth;

        const tween = gsap.to(track, {
          x: () => -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            pinReparent: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
        };
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-paper py-section lg:h-screen lg:py-0"
      >
        <div className="container-wide flex h-full flex-col lg:justify-center">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <SectionHeading
              eyebrow="Selected work"
              title="Case studies built to move product, not just impressions."
              className="max-w-2xl"
            />
            <span className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-400 lg:flex">
              <span className="flex size-9 items-center justify-center rounded-full border border-ink-950/15">
                ↓
              </span>
              Scroll to explore
            </span>
          </div>

          <div
            ref={trackRef}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:mt-8 lg:w-max lg:snap-none lg:overflow-visible lg:pb-0"
          >
            {featured.map((project, index) => (
              <div
                key={project.id}
                className="w-[85vw] shrink-0 snap-start sm:w-[420px] lg:w-[420px]"
              >
                <ProjectCard
                  project={project}
                  priority={index < 2}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 hidden h-[2px] w-full max-w-xs overflow-hidden rounded-full bg-ink-950/10 lg:block">
            <div ref={progressRef} className="h-full w-0 rounded-full bg-blue-500" />
          </div>
        </div>
      </section>

      <div className="bg-paper pb-section-sm">
        <div className="container-wide flex justify-start">
          <Button href="/projects" variant="outline" showArrow className="border-ink-950/15">
            View All Projects
          </Button>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </>
  );
}
