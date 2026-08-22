"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { EXPO_EASE } from "@/lib/animations";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: EXPO_EASE }}
    >
      {children}
    </motion.div>
  );
}
