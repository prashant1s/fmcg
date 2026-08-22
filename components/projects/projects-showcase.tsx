"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types";
import { projects } from "@/data/projects";
import { PROJECT_FILTERS } from "@/lib/constants";
import { ProjectFilter } from "./project-filter";
import { ProjectGrid } from "./project-grid";
import { ProjectModal } from "./project-modal";

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projects.length };
    PROJECT_FILTERS.forEach((filter) => {
      if (filter === "All") return;
      result[filter] = projects.filter((project) => project.category.includes(filter)).length;
    });
    return result;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    const category = activeFilter as ProjectCategory;
    return projects.filter((project) => project.category.includes(category));
  }, [activeFilter]);

  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <ProjectFilter active={activeFilter} onChange={setActiveFilter} counts={counts} />

        <div className="mt-10">
          <ProjectGrid projects={filteredProjects} onSelect={setSelectedProject} />
        </div>
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
