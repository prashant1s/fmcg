"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, type LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SITE } from "@/lib/constants";
import { fadeUp, fadeIn, staggerContainer, EXPO_EASE } from "@/lib/animations";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop";

interface QuickAction {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: Phone,
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phoneHref}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat now",
    href: `https://wa.me/${SITE.whatsappHref}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-22 sm:pt-40 sm:pb-24 lg:pt-52">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-10 size-96 rounded-full bg-violet-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 20, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-4rem] top-1/3 size-[26rem] rounded-full bg-lime-300/15 blur-[110px]"
        />
        <div className="grain-overlay" />
      </div>

      <div className="container-wide relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-7"
        >
          <motion.span variants={fadeUp} className="eyebrow text-lime-300">
            <span className="size-1.5 rounded-full bg-lime-300" />
            Get In Touch
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-display-xl text-balance text-paper">
            Let&apos;s create something amazing together.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-lg leading-relaxed text-ink-200 sm:text-xl"
          >
            Tell us about your brand, your category, and where you want social
            to take you. We reply within one business day.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
            {QUICK_ACTIONS.map((action) => (
              <a
                key={action.label}
                href={action.href}
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 py-2.5 pl-2.5 pr-5 backdrop-blur-sm transition-colors hover:border-lime-300/40 hover:bg-paper/10"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-paper/10 text-lime-300">
                  <action.icon className="size-3.5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[0.65rem] uppercase tracking-wide text-paper/40">
                    {action.label}
                  </span>
                  <span className="text-sm text-paper/85 transition-colors group-hover:text-paper">
                    {action.value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: EXPO_EASE, delay: 0.25 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/3.5] w-full overflow-hidden rounded-lg border border-paper/10">
            <Image
              src={HERO_IMAGE}
              alt="Two professionals shaking hands to begin a new partnership"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.6 }}
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg border border-ink-950/8 bg-paper px-5 py-4 shadow-xl sm:left-8"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime-300 text-ink-950">
              <Clock className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-950">Avg. 1 business day</p>
              <p className="text-xs text-ink-500">Response time on every enquiry</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
