import { TOOLS } from "@/data/content";
import { SectionHeading } from "@/components/shared/section-heading";

export function TechTools() {
  const loopedTools = [...TOOLS, ...TOOLS];

  return (
    <section className="bg-paper py-section-sm">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Stack"
          title="The tools behind the work."
          align="center"
          className="mx-auto items-center text-center"
        />
      </div>

      <div className="relative mt-12 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-4 [animation-duration:28s] hover:[animation-play-state:paused]">
          {loopedTools.map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="shrink-0 rounded-full border border-ink-950/10 bg-paper px-6 py-3 text-sm font-medium text-ink-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
