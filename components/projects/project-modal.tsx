"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Expand, Check } from "lucide-react";
import type { Project } from "@/types";
import { Modal } from "@/components/ui/modal";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

const accentText = {
  lime: "text-lime-600",
  blue: "text-blue-600",
} as const;

const accentTextLight = {
  lime: "text-lime-300",
  blue: "text-blue-300",
} as const;

const accentTextMuted = {
  lime: "text-lime-400",
  blue: "text-blue-400",
} as const;

const accentBg = {
  lime: "bg-lime-500",
  blue: "bg-blue-500",
} as const;

const accentSoftBg = {
  lime: "bg-lime-50",
  blue: "bg-blue-50",
} as const;

function SubHeading({ accent, children }: { accent: "lime" | "blue"; children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-950">
      <span className={cn("size-1.5 shrink-0 rounded-full", accentBg[accent])} />
      {children}
    </h4>
  );
}

export function ProjectModal({
  project,
  allProjects,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) return null;

  const related = allProjects
    .filter((item) => item.id !== project.id)
    .filter((item) => item.category.some((cat) => project.category.includes(cat)))
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : allProjects.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <>
    <Modal isOpen={!!project} onClose={onClose} labelledBy="project-modal-title" className="max-w-4xl">
      <div className="relative aspect-video w-full">
        <Image
          src={project.coverImage}
          alt={`${project.client} — ${project.title}`}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/5" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-paper/25 bg-ink-950/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-paper backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>
          <h2 id="project-modal-title" className="max-w-xl text-2xl font-semibold leading-tight text-paper sm:text-3xl">
            {project.title}
          </h2>
          <p className={cn("font-mono text-xs uppercase tracking-[0.18em]", accentTextLight[project.accent])}>
            {project.client} <span className="text-paper/50">·</span> {project.year}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <Tabs
          layoutId="project-modal-tabs"
          items={[
            {
              id: "overview",
              label: "Overview",
              content: (
                <div className="flex flex-col gap-10">
                  <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-3 rounded-lg border border-ink-950/8 p-6">
                      <SubHeading accent={project.accent}>The Challenge</SubHeading>
                      <p className="leading-relaxed text-ink-600">{project.challenge}</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-lg border border-ink-950/8 p-6">
                      <SubHeading accent={project.accent}>Our Approach</SubHeading>
                      <p className="leading-relaxed text-ink-600">{project.approach}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <SubHeading accent={project.accent}>Deliverables</SubHeading>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {project.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-lg border border-ink-950/8 px-4 py-3 text-sm text-ink-700"
                        >
                          <span
                            className={cn(
                              "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                              accentSoftBg[project.accent]
                            )}
                          >
                            <Check className={cn("size-2.5", accentText[project.accent])} strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              id: "results",
              label: "Results",
              content: (
                <div className="flex flex-col gap-10">
                  <div>
                    <SubHeading accent={project.accent}>By the Numbers</SubHeading>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {project.results.map((result) => (
                        <div
                          key={result.label}
                          className={cn(
                            "rounded-lg border border-ink-950/8 p-5 transition-colors",
                            accentSoftBg[project.accent]
                          )}
                        >
                          <p className={cn("font-display text-3xl font-semibold", accentText[project.accent])}>
                            {result.value}
                          </p>
                          <p className="mt-1.5 text-xs leading-snug text-ink-500">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.testimonial && (
                    <div className="relative overflow-hidden rounded-lg bg-ink-950 p-6 sm:p-8">
                      <Quote className={cn("size-7", accentTextMuted[project.accent])} />
                      <p className="mt-4 text-lg leading-relaxed text-paper">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-5 text-sm font-medium text-paper">
                        {project.testimonial.name}
                        <span className="ml-2 font-normal text-paper/50">
                          {project.testimonial.role}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ),
            },
            {
              id: "gallery",
              label: "Gallery",
              content: (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {project.gallery.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Open gallery image ${index + 1} in lightbox`}
                      className="group relative aspect-square overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        sizes="300px"
                        className="object-cover transition-transform duration-500 ease-expo group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/30">
                        <Expand className="size-5 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>
              ),
            },
          ]}
        />

        <div
          className={cn(
            "mt-12 flex flex-col gap-4 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8",
            accentSoftBg[project.accent]
          )}
        >
          <p className="font-display text-xl font-semibold text-ink-950">
            Want results like this for your brand?
          </p>
          <Button href="/contact" onClick={onClose} showArrow className="shrink-0">
            Start a Similar Project
          </Button>
        </div>

        {fallbackRelated.length > 0 && (
          <div className="mt-12 border-t border-ink-950/8 pt-8">
            <SubHeading accent={project.accent}>Related Work</SubHeading>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {fallbackRelated.map((item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                  onClick={() => onSelectProject(item)}
                  className="aspect-[4/3]"
                  showCategory={false}
                  showText={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
    <Lightbox
      images={project.gallery}
      index={lightboxIndex}
      onClose={() => setLightboxIndex(null)}
      onNavigate={setLightboxIndex}
      altPrefix={`${project.title} gallery image`}
    />
    </>
  );
}
