import type { Variants, Transition } from "framer-motion";

export const EXPO_EASE = [0.16, 1, 0.3, 1] as const;
export const SNAP_EASE = [0.65, 0, 0.35, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EXPO_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EXPO_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EXPO_EASE },
  },
};

export const staggerContainer = (
  stagger: number = 0.12,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const revealText: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EXPO_EASE },
  },
};

export const pageTransition: Transition = {
  duration: 0.6,
  ease: EXPO_EASE,
};

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" };
export const viewportOnceSmall = { once: true, margin: "-40px 0px -40px 0px" };
