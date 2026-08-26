import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Our Work — Ripe Agency";

export default function Image() {
  return renderOgImage("Our Work", "Projects that delivered results.");
}
