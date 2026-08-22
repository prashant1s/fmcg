"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Expand } from "lucide-react";
import type { Project } from "@/types";
import { Modal } from "@/components/ui/modal";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import { ProjectCard } from "./project-card";

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

const accentText = {
  lime: "text-lime-600",
  coral: "text-coral-600",
  violet: "text-violet-600",
} as const;

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
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
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
          <h2 id="project-modal-title" className="max-w-xl text-2xl font-semibold text-paper sm:text-3xl">
            {project.title}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wide text-paper/60">
            {project.client} · {project.year}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <Tabs
          layoutId="project-modal-tabs"
          items={[
            {
              id: "overview",
              label: "Overview",
              content: (
                <div className="flex flex-col gap-6">
                  <p className="leading-relaxed text-ink-600">{project.summary}</p>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                      The Challenge
                    </h4>
                    <p className="mt-2 leading-relaxed text-ink-600">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                      Our Approach
                    </h4>
                    <p className="mt-2 leading-relaxed text-ink-600">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                      Deliverables
                    </h4>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.deliverables.map((item) => (
                        <li key={item} className="text-sm text-ink-600">
                          — {item}
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
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="rounded-lg border border-ink-950/8 p-5">
                        <p className={`font-display text-3xl font-semibold ${accentText[project.accent]}`}>
                          {result.value}
                        </p>
                        <p className="mt-1.5 text-xs text-ink-500">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  {project.testimonial && (
                    <div className="rounded-lg bg-paper-soft p-6 sm:p-8">
                      <Quote className="size-6 text-lime-500" />
                      <p className="mt-4 leading-relaxed text-ink-700">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-4 text-sm font-medium text-ink-950">
                        {project.testimonial.name}
                        <span className="ml-2 font-normal text-ink-400">
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
                      className="group relative aspect-square overflow-hidden rounded-md"
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

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-950/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">Want results like this for your brand?</p>
          <Button href="/contact" onClick={onClose} showArrow>
            Start a Similar Project
          </Button>
        </div>

        {fallbackRelated.length > 0 && (
          <div className="mt-12 border-t border-ink-950/8 pt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
              Related Work
            </h4>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {fallbackRelated.map((item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                  onClick={() => onSelectProject(item)}
                  className="aspect-[4/3]"
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
