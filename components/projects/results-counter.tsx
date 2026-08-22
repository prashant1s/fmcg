import { RESULTS_STATS } from "@/data/content";
import { StatsCounter } from "@/components/home/stats-counter";

export function ResultsCounter() {
  return (
    <section className="border-y border-ink-950/8 bg-paper-soft py-14 sm:py-16">
      <div className="container-wide">
        <StatsCounter stats={RESULTS_STATS} light={false} />
      </div>
    </section>
  );
}
