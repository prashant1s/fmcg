"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SITE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { services } from "@/data/services";
import { EXPO_EASE } from "@/lib/animations";

const socialIcons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  X: Twitter,
  YouTube: Youtube,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-20 text-paper sm:pt-28">
      <div className="pointer-events-none absolute -top-40 right-0 size-[32rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-wide relative">
        <div className="flex flex-col justify-between gap-10 border-b border-paper/10 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="eyebrow text-blue-300">
              <span className="size-1.5 rounded-full bg-blue-300" />
              Let&apos;s work together
            </span>
            <h2 className="mt-5 text-display-md text-balance text-paper">
              Ready to make your brand impossible to scroll past?
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-blue-500 px-7 py-4 font-medium text-paper transition-colors hover:bg-blue-600"
          >
            Start Your Campaign
            <ArrowUpRight className="size-4 transition-transform duration-400 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 py-16 xs:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-1 flex flex-col gap-5 xs:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.avif"
                alt={SITE.fullName}
                width={640}
                height={207}
                className="h-8 w-auto sm:h-9"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper/50">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    transition={{ duration: 0.25, ease: EXPO_EASE }}
                    className="flex size-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-blue-300 hover:text-blue-300"
                  >
                    <Icon className="size-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.id} href="/services">
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <div className="col-span-1 flex flex-col gap-5 xs:col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-2 text-sm text-paper/60">
              <a href="mailto:sanidhya@whizoidstudio.com" className="w-fit transition-colors hover:text-paper">
                sanidhya@whizoidstudio.com
              </a>
              <a href="tel:+918962177924" className="w-fit transition-colors hover:text-paper">
                +91 89621 77924
              </a>
              <p className="max-w-[16rem] leading-relaxed">
                2nd Floor, Elite House, Old Palasia Rd, Indore, MP 452001
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 py-8 pr-0 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between sm:pr-36">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-paper/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-paper/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-paper/60 transition-colors hover:text-paper">
        {children}
      </Link>
    </li>
  );
}
