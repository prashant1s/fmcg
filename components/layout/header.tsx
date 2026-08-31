"use client";

import { useEffect, useState } from "react";
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-expo",
          solid ? "border-b border-ink-950/8 bg-paper/90 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="container-wide flex h-20 items-center justify-between sm:h-24">
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-2.5"
            aria-label={`${SITE.fullName} — Home`}
          >
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-lg font-display text-lg font-bold transition-colors duration-500",
                solid ? "bg-ink-950 text-lime-300" : "bg-lime-300 text-ink-950"
              )}
            >
              R
            </span>
            <span
              className={cn(
                "font-display text-xl font-semibold transition-colors duration-500",
                solid ? "text-ink-950" : "text-paper"
              )}
            >
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-300",
                    solid
                      ? active
                        ? "text-ink-950"
                        : "text-ink-500 hover:text-ink-950"
                      : active
                        ? "text-paper"
                        : "text-paper/70 hover:text-paper"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-lime-300" />
                  )}
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
              className={cn(
                "h-[1.5px] w-6 origin-center rounded-full",
                solid ? "bg-ink-950" : "bg-paper"
              )}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className={cn("h-[1.5px] w-6 rounded-full", solid ? "bg-ink-950" : "bg-paper")}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              transition={{ duration: 0.3, ease: EXPO_EASE }}
              className={cn(
                "h-[1.5px] w-6 origin-center rounded-full",
                solid ? "bg-ink-950" : "bg-paper"
              )}
            />
          </button>
        </div>
      </header>

      <Navigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
