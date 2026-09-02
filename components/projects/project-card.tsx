"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const accentDot = {
  lime: "bg-lime-300",
  blue: "bg-blue-500",
} as const;

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  priority?: boolean;
  className?: string;
  variant?: "grid" | "stack";
  showCategory?: boolean;
  showText?: boolean;
}

export function ProjectCard({
  project,
  onClick,
  priority = false,
  className,
  variant = "grid",
  showCategory = true,
  showText = true,
}: ProjectCardProps) {
  const Wrapper = onClick ? "button" : "div";
  const isStack = variant === "stack";

  return (
    <Wrapper
      onClick={onClick}
      className={cn(
        "group relative block w-full overflow-hidden rounded-lg bg-ink-950 text-left",
        isStack ? "aspect-[3/4] sm:aspect-[16/7]" : "aspect-[4/5]",
        onClick && "cursor-pointer",
        className
      )}
    >
      <Image
        src={project.coverImage}
        alt={`${project.client} — ${project.title}`}
        fill
        priority={priority}
        sizes={isStack ? "100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {showCategory && (
        <div className="absolute left-5 right-5 top-5 flex flex-wrap items-center gap-2">
          {project.category.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-paper/25 bg-ink-950/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-paper backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className={cn("absolute inset-x-0 bottom-0 flex flex-col gap-2 sm:gap-3", isStack ? "p-4 sm:p-5" : "p-6")}>
        {showText && (
          <>
            <div className="flex items-center gap-2">
              <span className={cn("size-1.5 rounded-full", accentDot[project.accent])} />
              <span className="font-mono text-xs uppercase tracking-wide text-paper/60">
                {project.client} · {project.year}
              </span>
            </div>

            <h3 className={cn("font-semibold leading-snug text-paper", isStack ? "text-lg sm:text-2xl" : "text-xl sm:text-2xl")}>
              {project.title}
            </h3>

            <div
              className={cn(
                "grid grid-cols-2 gap-3 overflow-hidden transition-all duration-500 ease-expo",
                isStack
                  ? "max-h-24 opacity-100 sm:grid-cols-4"
                  : "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100"
              )}
            >
              {project.results.slice(0, isStack ? 4 : 2).map((result, index) => (
                <div
                  key={result.label}
                  className={cn(
                    "border-t border-paper/15 pt-2",
                    isStack && index >= 2 && "hidden sm:block"
                  )}
                >
                  <p
                    className={cn(
                      "font-display font-semibold text-lime-300",
                      isStack ? "text-lg sm:text-2xl" : "text-lg"
                    )}
                  >
                    {result.value}
                  </p>
                  <p className={cn(isStack ? "text-xs" : "text-[0.7rem]", "text-paper/50")}>
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-paper">
          View Case Study
          <ArrowUpRight className="size-4 transition-transform duration-400 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Wrapper>
  );
}
