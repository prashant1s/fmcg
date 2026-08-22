"use client";

import type { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}
