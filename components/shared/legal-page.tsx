"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

export function LegalPage({ lastUpdated, intro, sections }: LegalPageProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-15% 0% -70% 0%", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-6">
              <span className="eyebrow text-ink-500">
                <span className="size-1.5 rounded-full bg-blue-500" />
                {lastUpdated}
              </span>
              <nav className="flex max-h-[calc(100svh-18rem)] flex-col overflow-y-auto border-l border-ink-100 pr-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "-ml-px flex items-baseline gap-3 border-l-2 py-2 pl-5 text-sm transition-colors duration-300",
                      activeId === section.id
                        ? "border-blue-600 font-medium text-ink-950"
                        : "border-transparent text-ink-400 hover:text-ink-700"
                    )}
                  >
                    <span className="font-mono text-xs text-ink-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex max-w-2xl flex-col gap-14">
            <p className="text-lg leading-relaxed text-ink-600">{intro}</p>
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-32 border-t border-ink-100 pt-10 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold text-ink-950 sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-neutral mt-4 max-w-none text-ink-600 prose-headings:font-display prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-ink-950 prose-li:marker:text-blue-400">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
