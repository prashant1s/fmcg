"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollAnimationCallback = (
  context: gsap.Context,
  element: HTMLElement
) => void;

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  callback: ScrollAnimationCallback,
  deps: unknown[] = []
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      callback(ctx, element);
    }, element);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
