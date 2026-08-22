"use client";

import { motion } from "framer-motion";
import { PROJECT_FILTERS } from "@/lib/constants";
import { EXPO_EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  active: string;
  onChange: (filter: string) => void;
  counts: Record<string, number>;
}

export function ProjectFilter({ active, onChange, counts }: ProjectFilterProps) {
  return (
    <div className="no-scrollbar sticky top-20 z-20 -mx-5 flex gap-2 overflow-x-auto border-y border-ink-950/8 bg-paper/95 px-5 py-4 backdrop-blur sm:mx-0 sm:top-24 sm:flex-wrap sm:rounded-full sm:border sm:px-2 sm:py-2">
      {PROJECT_FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={cn(
              "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-5",
              isActive ? "text-ink-950" : "text-ink-400 hover:text-ink-700"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                transition={{ duration: 0.45, ease: EXPO_EASE }}
                className="absolute inset-0 rounded-full bg-lime-300"
              />
            )}
            <span className="relative z-10">
              {filter}
              <span className={cn("ml-1.5 text-xs", isActive ? "text-ink-950/60" : "text-ink-300")}>
                {counts[filter] ?? 0}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
