"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, EXPO_EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function Navigation({ isOpen, onClose, pathname }: NavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          transition={{ duration: 0.7, ease: EXPO_EASE }}
          className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink-950 px-6 pb-10 pt-32 sm:px-10 lg:hidden"
        >
          <motion.nav
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1"
          >
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  variants={fadeUp}
                  className="overflow-hidden border-b border-paper/10 py-3"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-baseline gap-4 font-display text-4xl font-medium transition-colors",
                      active ? "text-lime-300" : "text-paper hover:text-lime-300"
                    )}
                  >
                    <span className="font-mono text-sm text-paper/40">0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 pt-10"
          >
            <Button href="/contact" onClick={onClose} magnetic showArrow className="w-fit">
              Start Your Campaign
            </Button>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/50">
              <a href={`mailto:${SITE.email}`} className="hover:text-paper">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-paper">
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wide text-paper/50 hover:text-paper"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
