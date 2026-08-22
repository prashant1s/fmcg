import { TRUSTED_BRANDS_ROW_1, TRUSTED_BRANDS_ROW_2, type TrustedBrand } from "@/data/content";
import { cn } from "@/lib/utils";

const styleClasses: Record<TrustedBrand["style"], string> = {
  sans: "font-sans font-bold text-lg",
  serif: "font-serif italic font-medium text-xl",
  script: "font-script font-semibold text-2xl",
  mono: "font-mono font-bold uppercase tracking-wide text-sm",
};

function MarqueeRow({
  brands,
  reverse = false,
  durationClass,
}: {
  brands: TrustedBrand[];
  reverse?: boolean;
  durationClass: string;
}) {
  const looped = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden mask-fade-x">
      <div
        className={cn(
          "flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]",
          durationClass,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {looped.map((brand, index) => (
          <span
            key={`${brand.name}-${index}`}
            className={cn(
              "flex shrink-0 items-center justify-center rounded-md border border-ink-950/10 bg-paper px-7 py-5 text-ink-300 transition-colors duration-300 hover:border-ink-950/30 hover:text-ink-950",
              styleClasses[brand.style]
            )}
          >
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBrands() {
  return (
    <section className="border-b border-ink-950/8 bg-paper py-14 sm:py-16">
      <div className="container-wide">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
          Trusted by leading FMCG brands
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <MarqueeRow brands={TRUSTED_BRANDS_ROW_1} durationClass="[animation-duration:40s]" />
        <MarqueeRow
          brands={TRUSTED_BRANDS_ROW_2}
          reverse
          durationClass="[animation-duration:34s]"
        />
      </div>
    </section>
  );
}
