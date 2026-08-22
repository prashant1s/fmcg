import type {
  StatItem,
  ProcessStep,
  ValueProp,
  PricingTier,
  AwardItem,
  MilestoneItem,
} from "@/types";

export const HERO_STATS: StatItem[] = [
  { id: "stat-1", label: "FMCG Brands Served", value: 68 },
  { id: "stat-2", label: "Campaigns Launched", value: 940, suffix: "+" },
  { id: "stat-3", label: "Avg. ROAS Generated", value: 5.8, suffix: "x" },
  { id: "stat-4", label: "Social Reach Driven", value: 210, suffix: "M+" },
];

export const RESULTS_STATS: StatItem[] = [
  { id: "rstat-1", label: "Total Campaigns", value: 940, suffix: "+" },
  { id: "rstat-2", label: "Combined Social Reach", value: 210, suffix: "M+" },
  { id: "rstat-3", label: "Average ROAS", value: 5.8, suffix: "x" },
  { id: "rstat-4", label: "Clients Served", value: 68 },
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
      "To give FMCG brands of every size the social presence their products deserve — turning shelf-stable goods into scroll-stopping culture.",
    icon: "Target",
  },
  {
    id: "mvv-2",
    title: "Vision",
    description:
      "A world where the best product doesn't lose to the loudest ad budget — where great social strategy levels the playing field at retail.",
    icon: "Eye",
  },
  {
    id: "mvv-3",
    title: "Values",
    description:
      "Category obsession, radical transparency in reporting, and creative work we'd be proud to see in our own feeds.",
    icon: "Heart",
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: "ms-1",
    year: "2018",
    title: "Ripe is founded",
    description:
      "Jordan Ellis leaves a Fortune 500 marketing role to start Ripe from a co-working desk in San Francisco, with two founding clients in the snack aisle.",
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
    title: "New York studio opens",
    description:
      "A second studio location opens to serve East Coast CPG clients and expand production capacity.",
  },
  {
    id: "ms-5",
    year: "2023",
    title: "$1B+ in tracked retail sales influenced",
    description:
      "Client campaigns cross a cumulative $1 billion in retail sales influenced, based on aggregated attribution and lift studies.",
  },
  {
    id: "ms-6",
    year: "2025",
    title: "68 brands, 3 studios",
    description:
      "Ripe now operates from San Francisco, New York, and Mumbai, serving 68 active FMCG brands across four continents.",
  },
];

export const AWARDS: AwardItem[] = [
  { id: "award-1", title: "Social Agency of the Year — CPG", issuer: "Shorty Awards", year: "2024" },
  { id: "award-2", title: "Gold — Best UGC Campaign", issuer: "The Drum Awards", year: "2024" },
  { id: "award-3", title: "Best Small Agency, West Coast", issuer: "Ad Age", year: "2023" },
  { id: "award-4", title: "Silver — Influencer Marketing", issuer: "Cannes Lions", year: "2023" },
  { id: "award-5", title: "Top 50 Social Agencies", issuer: "Adweek", year: "2022" },
  { id: "award-6", title: "Rising Agency of the Year", issuer: "Digiday Awards", year: "2021" },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-starter",
    name: "Starter",
    price: "$5,000",
    period: "/ month",
    description: "For emerging brands ready to build a real content system.",
    features: [
      "2 social platforms managed",
      "12 content pieces / month",
      "Monthly content calendar",
      "Community management (business hours)",
      "Monthly performance report",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "tier-growth",
    name: "Growth",
    price: "$15,000",
    period: "/ month",
    description: "For scaling brands ready to add paid, UGC, and creators.",
    features: [
      "4 social platforms managed",
      "30+ content pieces / month",
      "UGC creator sourcing (10 creators)",
      "Paid social management",
      "Community management (extended hours)",
      "Bi-weekly strategy calls",
      "Custom live dashboard",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    id: "tier-enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-brand portfolios and national retail rollouts.",
    features: [
      "Unlimited platforms managed",
      "Dedicated content & production team",
      "Full influencer & UGC program",
      "Advanced paid media & MMM support",
      "24/7 community coverage",
      "Dedicated account & analytics lead",
      "Quarterly executive business reviews",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const TOOLS = [
  "Meta Business Suite",
  "TikTok Ads Manager",
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
  style: "sans" | "serif" | "script" | "mono";
}

export const TRUSTED_BRANDS_ROW_1: TrustedBrand[] = [
  { name: "Hearth & Husk", style: "serif" },
  { name: "Rootline Organics", style: "sans" },
  { name: "Milk & Bloom", style: "script" },
  { name: "Fernwell Coffee Co.", style: "serif" },
  { name: "Sundrop Juico", style: "sans" },
  { name: "Emberfield Sauces", style: "mono" },
  { name: "Meadowlane Skincare", style: "script" },
  { name: "Cloudwash Home", style: "sans" },
  { name: "Northfield Provisions", style: "serif" },
  { name: "Bramble & Co.", style: "script" },
  { name: "Husklane Bakery", style: "sans" },
  { name: "Glowstate Beauty", style: "mono" },
];

export const TRUSTED_BRANDS_ROW_2: TrustedBrand[] = [
  { name: "Brewfolk Coffee", style: "serif" },
  { name: "Tidyroot Home", style: "sans" },
  { name: "Verona Skin", style: "script" },
  { name: "Suddsy", style: "mono" },
  { name: "Vitalroot Wellness", style: "serif" },
  { name: "Toastworks", style: "sans" },
  { name: "Pinegrove Naturals", style: "script" },
  { name: "Citrine Cold Brew", style: "mono" },
  { name: "Calmwell", style: "sans" },
  { name: "Nibbleworks", style: "serif" },
  { name: "Barefaced Beauty", style: "script" },
  { name: "Frothworks", style: "mono" },
];
