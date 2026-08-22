import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/section-heading";

export function FaqQuickLinks() {
  const highlighted = faqs.slice(0, 5);

  return (
    <section className="border-t border-ink-950/8 bg-paper-soft py-section-sm">
      <div className="container-wide">
        <SectionHeading eyebrow="Before you reach out" title="Quick answers." />

        <div className="mt-10 divide-y divide-ink-950/8 border-y border-ink-950/8">
          {highlighted.map((faq) => (
            <Link
              key={faq.id}
              href={`/services#faq`}
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-coral-600"
            >
              <span className="text-base font-medium text-ink-800 group-hover:text-coral-600 sm:text-lg">
                {faq.question}
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-ink-300 transition-all duration-300 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-coral-600" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
