import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-section">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions we hear before every kickoff."
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
