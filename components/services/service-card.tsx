"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types";
import { DynamicIcon } from "@/lib/icon-map";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const accentStyles = {
  lime: {
    bg: "bg-lime-300",
    text: "text-ink-950",
    ring: "ring-lime-300/30",
    chipBg: "bg-lime-300/10",
    chipBorder: "border-lime-300/30",
    chipText: "text-lime-800",
    panelFrom: "from-lime-900",
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-paper",
    ring: "ring-blue-500/30",
    chipBg: "bg-blue-500/10",
    chipBorder: "border-blue-500/25",
    chipText: "text-blue-700",
    panelFrom: "from-blue-900",
  },
} as const;

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const accent = accentStyles[service.accent];

  return (
    <div
      id={service.slug}
      className="group relative grid scroll-mt-32 grid-cols-1 gap-8 border-b border-ink-950/8 py-12 first:pt-0 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-14"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-6 lg:col-span-7"
      >
        <div className="flex items-center gap-4 lg:hidden">
          <span className="flex size-9 items-center justify-center rounded-full border border-ink-950/10 font-mono text-xs text-ink-400">
            0{index + 1}
          </span>
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
              accent.bg,
              accent.text
            )}
          >
            <DynamicIcon name={service.icon} className="size-5" />
          </span>
        </div>

        <h3 className="text-display-sm text-ink-950">{service.title}</h3>
        <p className="max-w-xl leading-relaxed text-ink-500">
          {service.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-2">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm leading-none text-ink-700",
                accent.chipBg,
                accent.chipBorder
              )}
            >
              <Check className={cn("size-3.5 shrink-0", accent.chipText)} />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-2 inline-flex w-fit items-center gap-2 border-b border-ink-950 pb-1 text-sm font-medium text-ink-950 transition-colors hover:border-blue-500 hover:text-blue-600"
        >
          Get Started
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex items-center lg:col-span-5"
      >
        <div
          className={cn(
            "relative flex w-full flex-col justify-between gap-10 overflow-hidden rounded-lg bg-gradient-to-br to-ink-950 p-8 ring-1 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:p-10",
            accent.ring,
            accent.panelFrom
          )}
        >
          <DynamicIcon
            name={service.icon}
            className="pointer-events-none absolute -right-6 -top-6 size-32 text-paper/[0.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-paper/[0.06] to-transparent" />

          <div className="relative flex items-center gap-3">
            <span className={cn("flex size-9 items-center justify-center rounded-full", accent.bg, accent.text)}>
              <DynamicIcon name={service.icon} className="size-4" />
            </span>
            <span className="eyebrow text-paper/40">Impact</span>
          </div>

          <div className="relative">
            <p className="font-display text-5xl font-semibold text-paper sm:text-6xl">
              {service.metric.value}
            </p>
            <p className="mt-2 text-sm text-paper/50">{service.metric.label}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
