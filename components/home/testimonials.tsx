"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  return (
    <section className="bg-paper-soft py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Client results"
          title="Don't take our word for it."
          align="center"
          className="mx-auto items-center text-center"
        />
      </div>

      <div className="container-wide mt-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto pb-4">
              <div className="flex h-full flex-col justify-between gap-8 rounded-lg border border-ink-950/8 bg-paper p-8 sm:p-9">
                <Quote className="size-8 text-lime-400" />

                <p className="text-lg leading-relaxed text-ink-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-ink-950/8 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-950">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-ink-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-coral-500 text-coral-500" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination mt-10 flex items-center justify-center gap-2" />
      </div>
    </section>
  );
}
