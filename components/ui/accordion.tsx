"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXPO_EASE } from "@/lib/animations";

interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) return prev.filter((item) => item !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={cn("divide-y divide-ink-950/10 border-y border-ink-950/10", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            onToggle={() => toggle(item.id)}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        id={`faq-trigger-${item.id}`}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-ink-950 sm:text-xl">
          {item.question}
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink-950/15">
          <Plus
            className={cn(
              "size-4 transition-transform duration-400 ease-expo",
              isOpen && "rotate-45"
            )}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EXPO_EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-ink-500">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
