"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { EXPO_EASE } from "@/lib/animations";

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  altPrefix?: string;
}

export function Lightbox({ images, index, onClose, onNavigate, altPrefix = "Image" }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (index === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EXPO_EASE }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={onClose}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 sm:right-8 sm:top-8"
            label="Close image"
          >
            <X className="size-5" />
          </IconButton>

          {images.length > 1 && (
            <>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-8"
                label="Previous image"
              >
                <ChevronLeft className="size-5" />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-8"
                label="Next image"
              >
                <ChevronRight className="size-5" />
              </IconButton>
            </>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EXPO_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[4/3] w-full max-w-3xl"
          >
            <Image
              src={images[index]}
              alt={`${altPrefix} ${index + 1} of ${images.length}`}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="rounded-md object-contain"
            />
          </motion.div>

          {images.length > 1 && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-paper/50">
              {index + 1} / {images.length}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function IconButton({
  children,
  onClick,
  className,
  label,
}: {
  children: ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`z-10 flex size-11 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-paper/20 ${className}`}
    >
      {children}
    </button>
  );
}
