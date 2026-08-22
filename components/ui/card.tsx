"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tiltStrength?: number;
}

export function TiltCard({
  children,
  className,
  glowColor = "rgba(214,255,63,0.18)",
  tiltStrength = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(y, [0, 1], [tiltStrength, -tiltStrength]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [0, 1], [-tiltStrength, tiltStrength]),
    springConfig
  );
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-ink-950/8 bg-paper",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(320px circle at ${gx} ${gy}, ${glowColor}, transparent 70%)`
          ),
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-ink-950/8 bg-paper transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
