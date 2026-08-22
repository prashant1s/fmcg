"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EXPO_EASE } from "@/lib/animations";

export function Loader() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("ripe-loaded");
    if (alreadyLoaded) {
      setHasChecked(true);
      return;
    }

    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("ripe-loaded", "true");
    }, 1500);

    setHasChecked(true);
    return () => clearTimeout(timer);
  }, []);

  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EXPO_EASE, delay: 0.1 } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: EXPO_EASE, delay: 0.15 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-lime-300 font-display text-xl font-bold text-ink-950">
                R
              </span>
              <span className="font-display text-2xl font-semibold text-paper">
                Ripe
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, ease: EXPO_EASE }}
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-lime-300"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
