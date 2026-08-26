import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Ripe — Ripe Agency";

export default function Image() {
  return renderOgImage("About Ripe", "A social agency built exclusively for consumer goods.");
}
