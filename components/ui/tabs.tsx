"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EXPO_EASE } from "@/lib/animations";

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultId?: string;
  className?: string;
  layoutId?: string;
}

export function Tabs({ items, defaultId, className, layoutId = "tabs-indicator" }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultId ?? items[0]?.id);
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className={className}>
      <div
        role="tablist"
        className="no-scrollbar flex items-center gap-2 overflow-x-auto border-b border-ink-950/10"
      >
        {items.map((item) => {
          const isActive = item.id === activeItem?.id;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "relative whitespace-nowrap px-4 py-3.5 text-sm font-medium transition-colors duration-300 sm:text-base",
                isActive ? "text-ink-950" : "text-ink-400 hover:text-ink-600"
              )}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-x-0 -bottom-px h-[2px] bg-ink-950"
                  transition={{ duration: 0.4, ease: EXPO_EASE }}
                />
              )}
            </button>
          );
        })}
      </div>
      <motion.div
        key={activeItem?.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EXPO_EASE }}
        className="pt-8"
      >
        {activeItem?.content}
      </motion.div>
    </div>
  );
}
