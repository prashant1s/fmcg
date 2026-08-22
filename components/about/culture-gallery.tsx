"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionHeading } from "@/components/shared/section-heading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const GALLERY = [
  {
    id: "g1",
    src: u("1706074793638-da28b90ea8ae", 1100),
    alt: "Ripe conference room during a strategy session",
    span: "sm:col-span-7 sm:row-span-2",
    speed: 0.15,
  },
  {
    id: "g2",
    src: u("1758691737492-48e8fdd336f7"),
    alt: "The Ripe team celebrating a campaign launch",
    span: "sm:col-span-5",
    speed: -0.1,
  },
  {
    id: "g3",
    src: u("1667646590380-670b53b8c393"),
    alt: "A quiet corner of the Ripe studio",
    span: "sm:col-span-5",
    speed: 0.08,
  },
  {
    id: "g4",
    src: u("1758518730468-6e5669d5af6d"),
    alt: "Team members walking through the studio hallway",
    span: "sm:col-span-6",
    speed: -0.15,
  },
  {
    id: "g5",
    src: u("1706074797611-a02f9ed06439"),
    alt: "Lounge space at the Ripe San Francisco office",
    span: "sm:col-span-6",
    speed: 0.1,
  },
] as const;

export function CultureGallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 640px)", () => {
        const items = grid.querySelectorAll<HTMLElement>("[data-parallax-speed]");
        items.forEach((item) => {
          const speed = Number(item.dataset.parallaxSpeed ?? 0);
          gsap.to(item, {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-paper py-section overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Culture"
          title="What it actually looks like inside Ripe."
          description="Behind-the-scenes from our San Francisco studio — where strategy decks and shoot days happen in the same room."
        />

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5"
        >
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-auto ${item.span}`}
            >
              <div
                data-parallax-speed={item.speed}
                className="absolute inset-0 -top-[15%] h-[130%] w-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
