"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  size?: "default" | "tall";
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  size = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-center overflow-hidden bg-ink-950 pt-32 pb-16 sm:pb-20",
        size === "tall" ? "min-h-[80svh]" : "min-h-[60svh]"
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
      )}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 size-96 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute right-[-4rem] top-1/3 size-[26rem] rounded-full bg-lime-300/15 blur-[110px]" />
        <div className="grain-overlay" />
      </div>

      <div className="container-wide relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col gap-6"
        >
          <motion.span variants={fadeUp} className="eyebrow text-lime-300">
            <span className="size-1.5 rounded-full bg-lime-300" />
            {eyebrow}
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-display-xl text-balance text-paper">
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-balance text-lg leading-relaxed text-ink-200 sm:text-xl"
            >
              {description}
            </motion.p>
          )}
          {children && <motion.div variants={fadeUp}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
