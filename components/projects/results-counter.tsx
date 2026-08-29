import { RESULTS_STATS } from "@/data/content";
import { StatsCounter } from "@/components/home/stats-counter";

export function ResultsCounter() {
  return (
    <section className="border-y border-ink-950/8 bg-paper-soft py-8 sm:py-10">
      <div className="container-wide">
        <StatsCounter stats={RESULTS_STATS} light={false} />
      </div>
    </section>
  );
}
