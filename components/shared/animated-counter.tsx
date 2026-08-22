"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  decimals,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const spanRef = useRef<HTMLSpanElement>(null);
  const resolvedDecimals = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (!isInView || !spanRef.current) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (spanRef.current) {
          spanRef.current.textContent = `${prefix}${latest.toFixed(resolvedDecimals)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefix, suffix, resolvedDecimals]);

  return (
    <span ref={ref} className={className}>
      <span ref={spanRef}>{`${prefix}0${suffix}`}</span>
    </span>
  );
}
