"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Image from "next/image";
import { animate, useMotionValue } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface RotatingCardsProps {
  items: Project[];
  onSelect?: (project: Project) => void;
  className?: string;
}

// Each card keeps its own fixed tilt/horizontal jitter permanently — only its
// vertical position cycles as the deck is dragged, which is what gives the
// "scattered photos on a table" look rather than a uniform circular wheel.
const CARD_JITTER = [
  { rotate: -13, x: 34 },
  { rotate: 9, x: -28 },
  { rotate: -6, x: 18 },
  { rotate: 14, x: -38 },
  { rotate: -10, x: 26 },
  { rotate: 7, x: -18 },
  { rotate: -15, x: 38 },
  { rotate: 11, x: -24 },
];

const VERTICAL_SPACING = 168; // px between adjacent cards in the cascade
const MAX_VISIBLE_OFFSET = 3.4; // cards further than this from center fade out entirely
const DRAG_SENSITIVITY = 0.011; // px of pointer movement -> "steps" of position
const CLICK_THRESHOLD = 6; // px of total movement before a gesture counts as a drag, not a click

// Shortest signed distance around the loop (e.g. for 8 cards, keeps values in [-4, 4])
function normalizeOffset(raw: number, total: number) {
  let offset = raw % total;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export function RotatingCards({ items, onSelect, className }: RotatingCardsProps) {
  const total = items.length;
  const position = useMotionValue(0);
  const [displayPosition, setDisplayPosition] = useState(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const lastY = useRef(0);
  const totalMovement = useRef(0);

  useEffect(() => {
    const unsubscribe = position.on("change", setDisplayPosition);
    return () => unsubscribe();
  }, [position]);

  // Gentle continuous drift while idle; pauses the moment the user grabs a card.
  useEffect(() => {
    let frame: number;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!isDragging.current) {
        position.set(position.get() + delta * 0.00011);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [position]);

  const snapToNearest = useCallback(() => {
    const nearest = Math.round(position.get());
    animate(position, nearest, { type: "spring", stiffness: 140, damping: 22 });
  }, [position]);

  const goTo = useCallback(
    (index: number) => {
      const current = position.get();
      const target = current + normalizeOffset(index - Math.round(current), total);
      animate(position, target, { type: "spring", stiffness: 140, damping: 22 });
    },
    [position, total]
  );

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    hasDragged.current = false;
    totalMovement.current = 0;
    lastY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const deltaY = event.clientY - lastY.current;
    lastY.current = event.clientY;
    totalMovement.current += Math.abs(deltaY);
    if (totalMovement.current > CLICK_THRESHOLD) hasDragged.current = true;
    position.set(position.get() - deltaY * DRAG_SENSITIVITY);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snapToNearest();
  };

  const handleKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(Math.round(position.get()) - 1);
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      goTo(Math.round(position.get()) + 1);
    }
  };

  return (
    <div className={cn("relative h-full min-h-[38rem] w-full select-none sm:min-h-[44rem]", className)}>
      <div
        role="group"
        aria-label="Case study deck, drag or use arrow keys to browse"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        className="mask-fade-y absolute inset-0 cursor-grab touch-none outline-none active:cursor-grabbing"
      >
        {items.map((item, index) => {
          const rawOffset = index - displayPosition;
          const offset = normalizeOffset(rawOffset, total);
          if (Math.abs(offset) > MAX_VISIBLE_OFFSET) return null;

          const jitter = CARD_JITTER[index % CARD_JITTER.length];
          const y = offset * VERTICAL_SPACING;
          const depth = Math.max(0, 1 - Math.abs(offset) / MAX_VISIBLE_OFFSET);
          const scale = 0.72 + depth * 0.34;
          const opacity = Math.min(1, depth * 1.6);
          const isFront = Math.abs(offset) < 0.5;

          return (
            <div
              key={item.id}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${jitter.x}px, ${y}px) rotate(${jitter.rotate}deg) scale(${scale})`,
                opacity,
                zIndex: Math.round(100 - Math.abs(offset) * 10),
                pointerEvents: Math.abs(offset) > MAX_VISIBLE_OFFSET - 0.5 ? "none" : "auto",
              }}
              onClick={() => {
                if (hasDragged.current) return;
                if (isFront) onSelect?.(item);
                else goTo(index);
              }}
            >
              <div
                className={cn(
                  "group relative h-60 w-52 cursor-pointer overflow-hidden rounded-lg border shadow-2xl shadow-ink-950/40 transition-colors duration-300 sm:h-72 sm:w-64",
                  isFront ? "border-lime-300/70" : "border-paper/10 hover:border-paper/30"
                )}
              >
                <Image
                  src={item.coverImage}
                  alt={`${item.client} — ${item.title}`}
                  fill
                  sizes="260px"
                  draggable={false}
                  className="pointer-events-none object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
