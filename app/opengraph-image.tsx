import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${SITE.fullName} — ${SITE.tagline}`;

export default function Image() {
  return renderOgImage("Social growth for FMCG brands", "We make FMCG brands impossible to scroll past.");
}
