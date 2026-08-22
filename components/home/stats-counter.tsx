import { AnimatedCounter } from "@/components/shared/animated-counter";
import type { StatItem } from "@/types";
import { cn } from "@/lib/utils";

interface StatsCounterProps {
  stats: StatItem[];
  light?: boolean;
  className?: string;
}

export function StatsCounter({ stats, light = true, className }: StatsCounterProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col gap-1.5">
          <div
            className={cn(
              "font-display text-3xl font-semibold sm:text-4xl",
              light ? "text-paper" : "text-ink-950"
            )}
          >
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </div>
          <p className={cn("text-sm", light ? "text-paper/50" : "text-ink-500")}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
