"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types";
import { DynamicIcon } from "@/lib/icon-map";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const accentStyles = {
  lime: { bg: "bg-lime-300", text: "text-ink-950", ring: "ring-lime-300/30" },
  coral: { bg: "bg-coral-500", text: "text-paper", ring: "ring-coral-500/30" },
  violet: { bg: "bg-violet-500", text: "text-paper", ring: "ring-violet-500/30" },
} as const;

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const accent = accentStyles[service.accent];
  const reversed = index % 2 === 1;

  return (
    <div
      id={service.slug}
      className="grid scroll-mt-28 grid-cols-1 gap-10 border-b border-ink-950/8 py-14 first:pt-0 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-16"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          "flex flex-col gap-6 lg:col-span-7",
          reversed && "lg:order-2"
        )}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-ink-300">
            0{index + 1}
          </span>
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-full",
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

        <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
              <Check className="mt-0.5 size-4 shrink-0 text-coral-500" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-2 inline-flex w-fit items-center gap-2 border-b border-ink-950 pb-1 text-sm font-medium text-ink-950 transition-colors hover:border-coral-500 hover:text-coral-600"
        >
          Get Started
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          "flex items-center lg:col-span-5",
          reversed && "lg:order-1"
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col justify-between gap-8 rounded-lg bg-ink-950 p-8 ring-1 sm:p-10",
            accent.ring
          )}
        >
          <span className="eyebrow text-paper/40">Impact</span>
          <div>
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
