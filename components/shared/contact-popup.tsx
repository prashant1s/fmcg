"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquareText } from "lucide-react";
import { popupContactSchema, type PopupContactValues } from "@/lib/validations";
import { SITE } from "@/lib/constants";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EXPO_EASE } from "@/lib/animations";

export function ContactPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PopupContactValues>({
    resolver: zodResolver(popupContactSchema),
  });

  useEffect(() => {
    if (pathname !== "/") return;
    if (localStorage.getItem("contact-popup-shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem("contact-popup-shown", "true");
    }, 10000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const onSubmit = async (data: PopupContactValues) => {
    const message = [
      `Hi Whizoidstudio, I'd like to get in touch.`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      ``,
      data.message || "No additional message.",
    ].join("\n");

    setIsSubmitted(true);
    reset();
    window.open(
      `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 16, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: EXPO_EASE, delay: 0.6 }}
        aria-label="Open contact form"
        className="fixed bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3.5 text-sm font-medium text-paper shadow-lg transition-colors hover:bg-blue-600 sm:bottom-8 sm:right-8"
      >
        <MessageSquareText className="size-4" />
        Contact Us
      </motion.button>

      <Modal isOpen={isOpen} onClose={close} className="max-w-md" labelledBy="contact-popup-title">
        <div className="p-8 sm:p-10">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EXPO_EASE }}
              className="flex flex-col items-center gap-5 py-6 text-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: EXPO_EASE, delay: 0.15 }}
                className="flex size-14 items-center justify-center rounded-full bg-blue-500 text-paper"
              >
                <CheckCircle2 className="size-7" />
              </motion.span>
              <h3 className="text-xl font-semibold text-ink-950">Redirecting you to WhatsApp.</h3>
              <p className="max-w-xs text-sm text-ink-500">
                We&apos;ve opened WhatsApp with your details filled in — just hit send and
                our team will reply shortly.
              </p>
              <Button variant="outline" className="mt-1 border-ink-950/15" onClick={close}>
                Close
              </Button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.form
                key="contact-popup-form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EXPO_EASE }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                <div>
                  <h3 id="contact-popup-title" className="text-2xl font-semibold text-ink-950">
                    Let&apos;s talk.
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    Drop your details and we&apos;ll get back to you within one business day.
                  </p>
                </div>

                <Input label="Full Name" error={errors.name?.message} {...register("name")} />
                <Input label="Email Address" type="email" error={errors.email?.message} {...register("email")} />
                <Input label="Phone Number" type="tel" error={errors.phone?.message} {...register("phone")} />
                <Textarea
                  label="Tell us a bit about your brand (optional)"
                  rows={3}
                  error={errors.message?.message}
                  {...register("message")}
                />

                <Button type="submit" size="lg" loading={isSubmitting} showArrow className="mt-1 w-full">
                  Send Message
                </Button>
              </motion.form>
            </AnimatePresence>
          )}
        </div>
      </Modal>
    </>
  );
}
