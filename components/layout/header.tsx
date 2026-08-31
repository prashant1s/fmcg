"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { EXPO_EASE } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-1.5 sm:px-5 sm:pt-2">
        <div
          className={cn(
            "mx-auto flex h-16 w-full max-w-container items-center justify-between rounded-xl bg-ink-950 px-5 shadow-lg shadow-black/20 transition-colors duration-500 ease-expo sm:h-20 sm:px-8",
            solid && "border border-paper/10"
          )}
        >
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-2.5"
            aria-label={`${SITE.fullName} — Home`}
          >
            <Image
              src="/logo.avif"
              alt={SITE.fullName}
              width={640}
              height={207}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors duration-300",
                    active
                      ? "font-semibold text-lime-300"
                      : "font-medium text-paper/70 hover:text-paper"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" magnetic showArrow>
              Start Your Campaign
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-50 flex size-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              transition={{ duration: 0.3, ease: EXPO_EASE }}
              className="h-[1.5px] w-6 origin-center rounded-full bg-paper"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="h-[1.5px] w-6 rounded-full bg-paper"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              transition={{ duration: 0.3, ease: EXPO_EASE }}
              className="h-[1.5px] w-6 origin-center rounded-full bg-paper"
            />
          </button>
        </div>
      </header>

      <Navigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
