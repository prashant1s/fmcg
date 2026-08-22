import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  company: z.string().trim().min(2, "Please enter your company name."),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more — at least 20 characters.")
    .max(2000, "That's a lot! Please keep it under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

export const quickCallSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
});

export type QuickCallValues = z.infer<typeof quickCallSchema>;
