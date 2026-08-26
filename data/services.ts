import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-2",
    slug: "content-creation-design",
    title: "Content Creation & Design",
    shortDescription:
      "In-house photography, videography, and design that make packaged goods look irresistible on a 6-inch screen.",
    description:
      "Our studio team shoots and edits scroll-stopping product content — flat lays, motion product shots, recipe videos, and brand campaigns — then adapts every asset for feed, Reels, Stories, and paid placements so nothing feels stretched or off-brand.",
    icon: "PenTool",
    deliverables: [
      "Studio & lifestyle photography",
      "Short-form video production",
      "Motion graphics & templated design systems",
      "Packaging-to-social creative adaptation",
      "Brand asset libraries",
    ],
    metric: { label: "assets produced / month", value: "120+" },
    accent: "coral",
  },
  {
    id: "svc-4",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDescription:
      "Creator partnerships that build trust at shelf and velocity online.",
    description:
      "From nano-creators to category tastemakers, we build influencer programs mapped to your distribution footprint — briefing, negotiating, and managing partnerships that drive both brand lift and trackable conversion, not just reach.",
    icon: "Users",
    deliverables: [
      "Creator strategy & tiering",
      "Outreach, negotiation & contracting",
      "Campaign briefing & content approval",
      "Gifting & seeding programs",
      "Post-campaign performance analysis",
    ],
    metric: { label: "creator partnerships managed", value: "450+" },
    accent: "lime",
  },
  {
    id: "svc-6",
    slug: "social-strategy-consulting",
    title: "Social Strategy & Consulting",
    shortDescription:
      "The category, channel, and content strategy that everything else is built on.",
    description:
      "Before a single post goes out, we audit your category landscape, competitive whitespace, and audience behavior to build a social roadmap tied to real business outcomes — trial, repeat purchase, and distribution support.",
    icon: "Compass",
    deliverables: [
      "Category & competitive audits",
      "Audience & channel strategy",
      "Content pillar frameworks",
      "Quarterly roadmap & KPI design",
      "Executive-ready strategy decks",
    ],
    metric: { label: "brand strategies delivered", value: "80+" },
    accent: "violet",
  },
  {
    id: "svc-7",
    slug: "community-management",
    title: "Community Management",
    shortDescription:
      "Real-time community care that protects brand equity and turns fans into repeat buyers.",
    description:
      "Our community team responds, moderates, and engages across every channel with your brand voice on lock — turning comments and DMs into a retention channel and an early-warning system for product feedback.",
    icon: "MessagesSquare",
    deliverables: [
      "Daily comment & DM management",
      "Brand voice & tone guidelines",
      "Crisis & escalation protocols",
      "Social listening & sentiment tracking",
      "Community growth initiatives",
    ],
    metric: { label: "avg. response time", value: "<2 hrs" },
    accent: "lime",
  },
  {
    id: "svc-8",
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    shortDescription:
      "Clear, retail-minded reporting that connects social performance to sell-through.",
    description:
      "We build custom dashboards that tie social KPIs to the metrics your leadership actually tracks — reach, engagement, paid efficiency, and where possible, velocity at retail — so budget conversations run on data, not opinions.",
    icon: "BarChart3",
    deliverables: [
      "Custom live dashboards",
      "Monthly & quarterly business reviews",
      "Attribution & channel-mix analysis",
      "Competitive benchmarking",
      "Retail velocity correlation (where available)",
    ],
    metric: { label: "brands reporting on one dashboard", value: "35+" },
    accent: "coral",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
