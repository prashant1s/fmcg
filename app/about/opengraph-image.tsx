import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Whizoidstudio";

export default function Image() {
  return renderOgImage("About Whizoidstudio", "A social agency built exclusively for consumer goods.");
}
