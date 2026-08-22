"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";
import { EXPO_EASE } from "@/lib/animations";

interface ProjectGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export function ProjectGrid({ projects, onSelect }: ProjectGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: EXPO_EASE }}
          >
            <ProjectCard project={project} onClick={() => onSelect(project)} />
          </motion.div>
        ))}
      </AnimatePresence>

      {projects.length === 0 && (
        <div className="col-span-full flex flex-col items-center gap-2 py-20 text-center">
          <p className="text-lg font-medium text-ink-950">No projects in this category yet.</p>
          <p className="text-sm text-ink-400">Try a different filter to see more work.</p>
        </div>
      )}
    </motion.div>
  );
}
