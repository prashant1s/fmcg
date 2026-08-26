import Image from "next/image";
import { TRUSTED_BRAND_LOGOS } from "@/data/content";

export function TrustedBrands() {
  const looped = [...TRUSTED_BRAND_LOGOS, ...TRUSTED_BRAND_LOGOS];

  return (
    <section className="border-b border-ink-950/8 bg-paper py-14 sm:py-16">
      <div className="container-wide">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
          Trusted by leading brands
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-4 [animation-duration:40s] hover:[animation-play-state:paused]">
          {looped.map((brand, index) => (
            <span
              key={`${brand.name}-${index}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-md border border-ink-950/10 bg-paper px-6 py-4 grayscale transition-all duration-300 hover:border-ink-950/30 hover:grayscale-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={56}
                className="max-h-14 w-auto object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
