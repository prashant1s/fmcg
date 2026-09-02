import type {
  StatItem,
  ProcessStep,
  ValueProp,
  MilestoneItem,
} from "@/types";

export const HERO_STATS: StatItem[] = [
  { id: "stat-1", label: "FMCG Brands Served", value: 20 },
  { id: "stat-2", label: "Campaigns Launched", value: 200, suffix: "+" },
  { id: "stat-3", label: "Avg. ROAS Generated", value: 5.8, suffix: "x" },
  { id: "stat-4", label: "Social Reach Driven", value: 67, suffix: "M+" },
];

export const RESULTS_STATS: StatItem[] = [
  { id: "rstat-1", label: "FMCG Brands Served", value: 20 },
  { id: "rstat-2", label: "Campaigns Launched", value: 200, suffix: "+" },
  { id: "rstat-3", label: "Avg. ROAS Generated", value: 5.8, suffix: "x" },
  { id: "rstat-4", label: "Social Reach Driven", value: 67, suffix: "M+" },
];

export const WHY_CHOOSE_US: ValueProp[] = [
  {
    id: "why-1",
    title: "Data-Driven Strategy",
    description:
      "Every campaign starts with category and audience data, not a hunch. We build on what's proven to move product, then test our way to what's next.",
    icon: "LineChart",
  },
  {
    id: "why-2",
    title: "Creative Excellence",
    description:
      "An in-house studio and a 3,000-strong creator network mean your brand never looks like everyone else's feed — on any budget tier.",
    icon: "Sparkles",
  },
  {
    id: "why-3",
    title: "Proven ROI",
    description:
      "We report in the metrics that matter to your P&L — CAC, ROAS, and where possible, velocity at retail — not vanity impressions.",
    icon: "TrendingUp",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "proc-1",
    number: "01",
    title: "Discovery",
    description:
      "We audit your category, competitors, and current channels to find the whitespace worth chasing.",
    icon: "Search",
  },
  {
    id: "proc-2",
    number: "02",
    title: "Strategy",
    description:
      "A channel and content roadmap tied to real business goals — trial, repeat purchase, and distribution support.",
    icon: "Compass",
  },
  {
    id: "proc-3",
    number: "03",
    title: "Creation",
    description:
      "Our studio and creator network produce content built to perform natively on every platform we deploy to.",
    icon: "PenTool",
  },
  {
    id: "proc-4",
    number: "04",
    title: "Launch",
    description:
      "Organic, paid, and influencer efforts go live in sync, backed by a full measurement framework from day one.",
    icon: "Rocket",
  },
  {
    id: "proc-5",
    number: "05",
    title: "Optimize",
    description:
      "Weekly testing and monthly strategy reviews keep performance compounding long after launch.",
    icon: "RefreshCw",
  },
];

export const MISSION_VISION_VALUES: ValueProp[] = [
  {
    id: "mvv-1",
    title: "Mission",
    description:
      "To give FMCG brands of every size the social presence their products deserve — pairing category depth with the creative excellence and technical craft usually reserved for tech and DTC brands.",
    icon: "Target",
  },
  {
    id: "mvv-2",
    title: "Vision",
    description:
      "A world where the best product doesn't lose to the loudest ad budget — where innovation and data-driven strategy level the playing field at retail.",
    icon: "Eye",
  },
  {
    id: "mvv-3",
    title: "Values",
    description:
      "Category obsession, radical transparency in reporting, and creative work we'd be proud to see in our own feeds — built on innovation, competence, and a genuine passion for the craft.",
    icon: "Heart",
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: "ms-1",
    year: "2018",
    title: "Whizoidstudio is founded",
    description:
      "Jordan Ellis leaves a Fortune 500 marketing role to start Whizoidstudio from a co-working desk in Indore, India, with two founding clients in the snack aisle.",
  },
  {
    id: "ms-2",
    year: "2020",
    title: "In-house studio opens",
    description:
      "We bring photography and video production in-house, cutting content turnaround time from three weeks to five days.",
  },
  {
    id: "ms-3",
    year: "2021",
    title: "Creator network launches",
    description:
      "Our vetted creator marketplace passes 1,000 talent, formalizing what had been ad hoc UGC sourcing into a repeatable system.",
  },
  {
    id: "ms-4",
    year: "2022",
    title: "Bengaluru & Pune studios open",
    description:
      "Two new studio locations open in Bengaluru and Pune, expanding our footprint across India's key retail and creator hubs.",
  },
  {
    id: "ms-5",
    year: "2023",
    title: "₹1B+ in tracked retail sales influenced",
    description:
      "Client campaigns cross a cumulative ₹1 billion in retail sales influenced, based on aggregated attribution and lift studies.",
  },
  {
    id: "ms-6",
    year: "2025",
    title: "68 brands, 3 studios",
    description:
      "Whizoidstudio now operates from Indore, Bengaluru, and Pune, serving 68 active FMCG brands across four continents.",
  },
];

export const TOOLS = [
  "Meta Business Suite",
  "Adobe Creative Suite",
  "Canva",
  "Sprout Social",
  "Figma",
  "Notion",
  "Klaviyo",
  "Triple Whale",
  "Later",
  "CapCut",
  "Google Analytics",
];

export interface TrustedBrand {
  name: string;
  src: string;
}

export const TRUSTED_BRAND_LOGOS: TrustedBrand[] = [
  { name: "Kishandas", src: "/logos/kishandas.svg" },
  { name: "Snuzzles", src: "/logos/snuzzles.svg" },
  { name: "11:11", src: "/logos/11-11.svg" },
  { name: "Masoli Restaurant", src: "/logos/masoli-restaurant.webp" },
  { name: "Ditra", src: "/logos/ditra.webp" },
];
