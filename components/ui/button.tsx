"use client";

import {
  forwardRef,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Loader2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  magnetic?: boolean;
  showArrow?: boolean;
  icon?: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  children?: ReactNode;
}

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-paper hover:bg-blue-600 shadow-[0_0_0_0_rgba(26,102,255,0)] hover:shadow-[0_8px_30px_-6px_rgba(26,102,255,0.55)]",
  dark: "bg-ink-950 text-paper hover:bg-ink-800",
  outline:
    "bg-transparent text-current border border-current/25 hover:border-current/60",
  ghost: "bg-transparent text-current hover:bg-ink-950/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm gap-1.5",
  md: "px-6 py-3.5 text-[0.95rem] gap-2",
  lg: "px-8 py-5 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      magnetic = false,
      showArrow = false,
      icon,
      href,
      external = false,
      className,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const magneticRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
    const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      if (!magnetic || !magneticRef.current) return;
      const rect = magneticRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      x.set(relX * 0.35);
      y.set(relY * 0.5);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const classes = cn(
      "group relative inline-flex select-none items-center justify-center rounded-full font-medium leading-none",
      "transition-colors duration-300 ease-expo disabled:cursor-not-allowed disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {!loading && icon}
        <span>{children}</span>
        {showArrow && !loading && (
          <span className="relative ml-1 inline-flex size-4 overflow-hidden">
            <ArrowUpRight className="absolute inset-0 size-4 transition-transform duration-400 ease-expo group-hover:translate-x-4 group-hover:-translate-y-4" />
            <ArrowUpRight className="absolute inset-0 size-4 -translate-x-4 translate-y-4 transition-transform duration-400 ease-expo group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        )}
      </>
    );

    const motionProps = magnetic
      ? {
          style: { x: springX, y: springY },
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        }
      : {};

    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
      return (
        <motion.div
          ref={magneticRef}
          className="inline-block"
          {...motionProps}
        >
          <Link
            href={href}
            className={classes}
            onClick={onClick as unknown as () => void}
            {...linkProps}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div ref={magneticRef} className="inline-block" {...motionProps}>
        <button
          ref={ref}
          className={classes}
          disabled={disabled || loading}
          onClick={onClick}
          {...props}
        >
          {content}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";
