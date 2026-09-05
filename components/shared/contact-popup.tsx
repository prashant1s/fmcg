"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, MessageSquareText, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { popupContactSchema, type PopupContactValues } from "@/lib/validations";
import { SITE } from "@/lib/constants";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EXPO_EASE } from "@/lib/animations";

const POPUP_STEPS = [
  {
    icon: Sparkles,
    title: "Share your details",
    description: "Takes less than a minute — no calls until you're ready.",
  },
  {
    icon: Zap,
    title: "We reply on WhatsApp",
    description: "Usually within a few hours, often sooner.",
  },
  {
    icon: ShieldCheck,
    title: "Free strategy chat",
    description: "A plan for your brand — no pressure, no fine print.",
  },
];

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
        className="fixed bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-blue-500 px-6 py-3.5 text-sm font-medium text-paper shadow-xl transition-all hover:scale-105 hover:bg-blue-600 sm:bottom-8 sm:right-8"
      >
        <MessageSquareText className="size-4" />
        Contact Us
      </motion.button>

      <Modal
        isOpen={isOpen}
        onClose={close}
        className="max-w-4xl p-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
        labelledBy="contact-popup-title"
        closeButtonClassName="rounded-full border border-ink-950/10 bg-paper/80 text-ink-500 shadow-sm backdrop-blur-md hover:bg-ink-100 hover:text-ink-950 z-50"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EXPO_EASE }}
            className="flex flex-col items-center gap-5 bg-paper px-8 py-20 text-center sm:px-12"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: EXPO_EASE, delay: 0.15 }}
              className="flex size-16 items-center justify-center rounded-full bg-blue-500 text-paper shadow-lg shadow-blue-500/20"
            >
              <CheckCircle2 className="size-8" />
            </motion.span>
            <h3 className="text-2xl font-semibold text-ink-950 text-balance">Redirecting you to WhatsApp</h3>
            <p className="max-w-sm text-sm leading-relaxed text-ink-500 text-balance">
              We&apos;ve opened WhatsApp with your details filled in. Just hit send and
              our team will reply shortly.
            </p>
            <Button variant="outline" className="mt-4 border-ink-950/15" onClick={close}>
              Close Window
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key="contact-popup-form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EXPO_EASE }}
              className="flex flex-col bg-paper sm:flex-row"
            >
              {/* Left Side - Dark Panel */}
              <div className="relative flex flex-col gap-6 overflow-hidden bg-ink-950 px-6 py-8 text-paper sm:w-[45%] sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -top-20 size-64 rounded-full bg-blue-500/20 blur-3xl"
                />

                <div className="relative">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-blue-500 text-paper">
                    <MessageSquareText className="size-5" />
                  </span>
                  <h3 id="contact-popup-title" className="mt-4 text-2xl font-semibold leading-tight sm:text-[1.7rem]">
                    Let&apos;s talk.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    Drop your details and we&apos;ll get back to you within one business day.
                  </p>
                </div>

                <div className="relative flex flex-1 flex-col gap-5 pt-2">
                  {POPUP_STEPS.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex items-start gap-3.5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-paper/10 text-paper/90">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-paper">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-paper/50">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form Panel */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-1 flex-col justify-between gap-6 px-6 py-8 sm:p-8"
              >
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input label="Full Name" error={errors.name?.message} {...register("name")} />
                    <Input label="Email Address" type="email" error={errors.email?.message} {...register("email")} />
                  </div>
                  <Input label="Phone Number" type="tel" error={errors.phone?.message} {...register("phone")} />
                  <Textarea
                    label="Tell us a bit about your brand (optional)"
                    rows={3} 
                    error={errors.message?.message}
                    {...register("message")}
                  />
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col gap-2">
                    <Button type="submit" size="lg" loading={isSubmitting} showArrow className="w-full">
                      Send Message
                    </Button>
                    <p className="text-center text-xs text-ink-400">
                      We&apos;ll only use your details to get in touch — no spam, ever.
                    </p>
                  </div>
                  
                  {/* Moved Contact Details */}
                  <div className="mt-2 flex flex-col items-center justify-center gap-3 border-t border-ink-950/10 pt-4 text-sm text-ink-600 sm:flex-row sm:gap-6">
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition-colors hover:text-ink-950">
                      <Mail className="size-4 shrink-0" />
                      {SITE.email}
                    </a>
                    <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 transition-colors hover:text-ink-950">
                      <Phone className="size-4 shrink-0" />
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        )}
      </Modal>
    </>
  );
}