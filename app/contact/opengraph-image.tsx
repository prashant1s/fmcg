import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Ripe — Ripe Agency";

export default function Image() {
  return renderOgImage("Get In Touch", "Let's create something amazing together.");
}
