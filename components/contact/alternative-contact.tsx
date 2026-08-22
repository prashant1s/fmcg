"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarClock, PhoneCall, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { quickCallSchema, type QuickCallValues } from "@/lib/validations";
import { SITE } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export function AlternativeContact() {
  return (
    <section className="bg-paper-soft py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="More ways to connect"
          title="Pick whatever's easiest."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-5 rounded-lg border border-ink-950/8 bg-paper p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <FaWhatsapp className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink-950">WhatsApp</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                Message our team directly for a fast reply during business hours.
              </p>
            </div>
            <Button
              href={`https://wa.me/${SITE.phoneHref.replace("+", "")}`}
              external
              variant="outline"
              className="mt-auto w-fit border-ink-950/15"
              showArrow
            >
              Chat on WhatsApp
            </Button>
          </div>

          <div className="flex flex-col gap-5 rounded-lg border border-ink-950/8 bg-paper p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <CalendarClock className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink-950">Book a Meeting</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                Prefer to talk it through? Grab 30 minutes on our team&apos;s calendar.
              </p>
            </div>
            <Button
              href="#contact-form"
              variant="outline"
              className="mt-auto w-fit border-ink-950/15"
              showArrow
            >
              Check Availability
            </Button>
          </div>

          <QuickCallCard />
        </div>
      </div>
    </section>
  );
}

function QuickCallCard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuickCallValues>({ resolver: zodResolver(quickCallSchema) });

  const onSubmit = async (data: QuickCallValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Quick call request:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg border border-ink-950/8 bg-paper p-8">
      <span className="flex size-12 items-center justify-center rounded-full bg-coral-100 text-coral-600">
        <PhoneCall className="size-5" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-ink-950">Quick Call Request</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
          Leave your number and we&apos;ll call you back within one business day.
        </p>
      </div>

      {isSubmitted ? (
        <div className="mt-auto flex items-center gap-2.5 rounded-md bg-lime-50 px-4 py-3 text-sm text-ink-700">
          <CheckCircle2 className="size-4 shrink-0 text-lime-600" />
          We&apos;ll be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-auto flex flex-col gap-4">
          <Input label="Name" error={errors.name?.message} {...register("name")} />
          <Input label="Phone Number" type="tel" error={errors.phone?.message} {...register("phone")} />
          <Button type="submit" loading={isSubmitting} className="w-fit" showArrow>
            Request Callback
          </Button>
        </form>
      )}
    </div>
  );
}
