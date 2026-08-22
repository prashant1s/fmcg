"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn("eyebrow", light ? "text-lime-300" : "text-ink-500")}
        >
          <span className={cn("size-1.5 rounded-full", light ? "bg-lime-300" : "bg-coral-500")} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-display-lg text-balance",
          light ? "text-paper" : "text-ink-950",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-xl text-balance text-lg leading-relaxed",
            light ? "text-ink-200" : "text-ink-500",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
