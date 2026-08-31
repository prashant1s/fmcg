# Ripe — FMCG Social Media Agency Website

A complete, production-ready marketing site for **Ripe**, a fictional social media agency built exclusively for FMCG (food, beverage, personal care, household) brands. Built from the brief in [`design.md`](./design.md).

## Tech Stack

| Purpose | Library |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion (component/page transitions) + GSAP `ScrollTrigger` (pinned/scrubbed scroll sequences) |
| Icons | `lucide-react` (primary UI icons) + `react-icons` (brand icons: TikTok, WhatsApp) |
| Forms | React Hook Form + Zod |
| Carousels | Swiper.js |

`lottie-react` was intentionally **not** installed — the brief marks it optional, and every animated-icon need in this build is better served by Lucide + CSS/Framer Motion without a Lottie JSON asset dependency.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

## Design System

- **Color:** near-black `ink` + warm off-white `paper` as the base, with two brand accents — `lime` (#D6FF3F) and `blue` (#1A66FF) — used together for CTAs, metrics, and category tagging. Full ramps are defined in [`tailwind.config.ts`](./tailwind.config.ts).
- **Type:** *Bricolage Grotesque* for display/headings, *Inter* for body copy, *Space Mono* for eyebrow labels and numeric tags — all self-hosted via `next/font/google`.
- **Spacing:** a `section` / `section-sm` fluid spacing scale (`clamp()`-based) keeps rhythm consistent across breakpoints; content sits inside a 1440px `container-wide`.
- **Motion:** Framer Motion drives scroll-reveals, page transitions, and micro-interactions (magnetic buttons, tilt cards, filter pills). GSAP `ScrollTrigger` is reserved for effects Framer doesn't do natively: the pinned horizontal process timeline on the homepage, the scroll-scrubbed timeline line on the About page, and the parallax culture gallery.

## Content & Images

All copy (agency name, team, case studies, testimonials) is realistic placeholder content written for this brief — no real client relationships are implied. Every image is sourced live from Unsplash's public CDN (`images.unsplash.com/photo-<id>`) with the URL pattern built in each `data/*.ts` file; IDs were selected by keyword-searching Unsplash's public search endpoint and verified individually, so nothing 404s at runtime. Swap any `data/*.ts` entry to point at real assets when this becomes a real brand.

## Project Structure

```
app/                  Routes (App Router) — home, about, services, projects, contact, privacy, terms
  sitemap.ts           Dynamic sitemap.xml
  robots.ts            robots.txt
  icon.svg             Favicon
components/
  ui/                  Primitives: button, card (tilt), input, textarea, select, modal, accordion, tabs
  layout/              Header, footer, mobile navigation, route transitions
  shared/              Section heading, animated counter, page hero, loader, back-to-top
  home/ about/ services/ projects/ contact/   Page-specific sections
data/                  Typed content: services, projects, team, testimonials, FAQs, misc (stats/process/pricing/etc.)
lib/                   Constants, cn() helper, Zod schemas, Framer Motion variants, icon-name → component map
hooks/                 useInView, useScrollAnimation (GSAP context wrapper), useMediaQuery
types/                 Shared TypeScript interfaces
```

## Notable Implementation Decisions

- **Contact & lead-gen forms** (main contact form, quick-call request, newsletter) validate with Zod and simulate a network round trip — there's no backend in this build, so submissions log to the console and resolve to a success state. Wire them to a real endpoint (Route Handler, form service, CRM webhook) before going live.
- **WhatsApp / "Book a Meeting"** on the Contact page use a `wa.me` deep link built from the placeholder phone number and an in-page anchor respectively, rather than a fabricated third-party booking URL.
- **Google Maps embed** uses the no-API-key `google.com/maps?q=...&output=embed` pattern against the placeholder office address.
- Dynamic OG-image generation (`next/og` `ImageResponse`) hit a known Windows-only path-resolution bug in this Next 14.2 toolchain, so the favicon is a static SVG and the Open Graph/Twitter card image points at a curated Unsplash photo instead — both are fully static and build-safe.

## Deployment

Any Next.js host works; the project is zero-config for [Vercel](https://vercel.com):

```bash
npm run build
```

Set `SITE.url` in [`lib/constants.ts`](./lib/constants.ts) to the real production domain before deploying — it feeds canonical URLs, the sitemap, `robots.txt`, and Open Graph metadata.
