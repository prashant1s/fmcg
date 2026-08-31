import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Our Services — Whizoidstudio";

export default function Image() {
  return renderOgImage("Our Services", "The full social stack, built for consumer goods.");
}
