"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface CtaSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CtaSection({
  eyebrow = "Let's build your next campaign",
  title = "Ready to transform your FMCG brand's social presence?",
  description = "Tell us about your brand, your category, and your goals. We'll follow up within one business day with next steps.",
  buttonLabel = "Start Your Campaign",
  buttonHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-section text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-0 size-[28rem] -translate-x-1/2 rounded-full bg-lime-300/15 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 bottom-0 size-[26rem] translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px]"
        />
        <div className="grain-overlay" />
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-wide relative flex flex-col items-center gap-8 text-center"
      >
        <motion.span variants={fadeUp} className="eyebrow text-lime-300">
          <span className="size-1.5 rounded-full bg-lime-300" />
          {eyebrow}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="max-w-4xl text-balance text-display-lg text-paper"
        >
          {title}
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-xl text-balance text-lg text-paper/50">
          {description}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button href={buttonHref} size="lg" magnetic showArrow>
            {buttonLabel}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
