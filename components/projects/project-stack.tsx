"use client";

import type { Project } from "@/types";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";
import { ProjectCard } from "./project-card";

interface ProjectStackProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export function ProjectStack({ projects, onSelect }: ProjectStackProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-20 text-center">
        <p className="text-lg font-medium text-ink-950">No projects in this category yet.</p>
        <p className="text-sm text-ink-400">Try a different filter to see more work.</p>
      </div>
    );
  }

  return (
    <ScrollStack itemDistance={80} itemStackDistance={24} baseScale={0.88}>
      {projects.map((project) => (
        <ScrollStackItem key={project.id} itemClassName="shadow-[0_20px_60px_rgba(10,10,12,0.15)]">
          <ProjectCard project={project} variant="stack" onClick={() => onSelect(project)} />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}
