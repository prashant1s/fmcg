"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { services } from "@/data/services";
import { fadeUp, fadeIn, staggerContainer, EXPO_EASE } from "@/lib/animations";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-22 sm:pt-40 sm:pb-24 lg:pt-52">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-10 size-96 rounded-full bg-blue-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 20, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-4rem] top-1/3 size-[26rem] rounded-full bg-blue-500/15 blur-[110px]"
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
          <motion.span variants={fadeUp} className="eyebrow text-blue-300">
            <span className="size-1.5 rounded-full bg-blue-300" />
            Our Services
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-display-xl text-balance text-paper">
            The full social stack, built for consumer goods.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-lg leading-relaxed text-ink-200 sm:text-xl"
          >
            From always-on content to full-funnel paid media every discipline
            working as one team, so nothing falls through the cracks between
            vendors.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
            {services.map((service) => (
              <span
                key={service.id}
                className="rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-sm text-paper/80 backdrop-blur-sm"
              >
                {service.title}
              </span>
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
          <div
            role="img"
            aria-label="Assorted social media app logos floating together"
            className="relative aspect-[4/3.5] w-full overflow-hidden rounded-lg border border-paper/10 bg-gradient-to-br from-blue-900 via-ink-900 to-ink-950"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative size-full max-w-xs">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 -rotate-6 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 text-paper shadow-2xl"
                >
                  <FaInstagram className="size-11" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-4 left-2 flex size-20 rotate-6 items-center justify-center rounded-2xl bg-[#1877F2] text-paper shadow-xl"
                >
                  <FaFacebook className="size-9" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute bottom-0 right-8 flex size-20 -rotate-[8deg] items-center justify-center rounded-2xl bg-[#FF0000] text-paper shadow-xl"
                >
                  <FaYoutube className="size-9" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute right-0 top-4 flex size-16 rotate-[10deg] items-center justify-center rounded-2xl bg-[#0A66C2] text-paper shadow-xl"
                >
                  <FaLinkedin className="size-7" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute left-4 top-6 flex size-14 -rotate-[10deg] items-center justify-center rounded-2xl bg-[#1DA1F2] text-paper shadow-xl"
                >
                  <FaTwitter className="size-6" />
                </motion.div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.6 }}
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg border border-ink-950/8 bg-paper px-5 py-4 shadow-xl sm:left-8"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-paper">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-950">4 core disciplines</p>
              <p className="text-xs text-ink-500">Run by one integrated team</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
