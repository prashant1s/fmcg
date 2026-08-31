"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { SERVICE_OPTIONS, SITE } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { EXPO_EASE } from "@/lib/animations";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const message = [
      `Hi Whizoidstudio, I'd like to get in touch.`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Company: ${data.company}`,
      `Service Interested In: ${data.service}`,
      ``,
      data.message,
    ].join("\n");

    setIsSubmitted(true);
    reset();
    window.open(
      `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EXPO_EASE }}
        className="flex flex-col items-center justify-center gap-5 rounded-lg border border-ink-950/8 bg-paper-soft px-8 py-20 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: EXPO_EASE, delay: 0.15 }}
          className="flex size-16 items-center justify-center rounded-full bg-lime-300 text-ink-950"
        >
          <CheckCircle2 className="size-8" />
        </motion.span>
        <h3 className="text-2xl font-semibold text-ink-950">Redirecting you to WhatsApp.</h3>
        <p className="max-w-sm text-ink-500">
          We&apos;ve opened WhatsApp with your details filled in — just hit send and
          our team will reply shortly.
        </p>
        <Button variant="outline" className="mt-2 border-ink-950/15" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="contact-form"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EXPO_EASE }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Full Name" error={errors.name?.message} {...register("name")} />
          <Input label="Email Address" type="email" error={errors.email?.message} {...register("email")} />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Phone Number" type="tel" error={errors.phone?.message} {...register("phone")} />
          <Input label="Company Name" error={errors.company?.message} {...register("company")} />
        </div>
        <Select
          label="Service Interested In"
          options={SERVICE_OPTIONS}
          error={errors.service?.message}
          {...register("service")}
        />
        <Textarea
          label="Tell us about your brand and goals"
          error={errors.message?.message}
          {...register("message")}
        />
        <Button type="submit" size="lg" loading={isSubmitting} showArrow className="mt-2 w-fit">
          Send Message
        </Button>
      </motion.form>
    </AnimatePresence>
  );
}
