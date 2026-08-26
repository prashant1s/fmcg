import type { Project } from "@/types";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "hearth-and-husk-snack-launch",
    title: "Turning a shelf debut into a sold-out SKU",
    client: "Hearth & Husk",
    year: "2024",
    category: ["Social Media", "UGC"],
    coverImage: u("1564980344076-ee179ba25a80"),
    gallery: [
      u("1564980344076-ee179ba25a80"),
      u("1612362426802-dcc0ccd25f64"),
      u("1670684684445-a4504dca0bbc"),
    ],
    summary:
      "A national launch campaign for a small-batch tortilla chip line, built entirely on creator content and community seeding ahead of a 1,200-store retail rollout.",
    challenge:
      "Hearth & Husk had eight weeks before their chips hit shelves at a major grocery chain and zero social following. Retail buyers wanted proof of organic demand before committing to a second order — but there was no audience, no content library, and no time to build one slowly.",
    approach:
      "We built a 90-day sprint around creator-led discovery: seeding product to 40 nano and micro creators in target metros, launching a branded hashtag challenge around 'desk-drawer snacking,' and pairing every piece of UGC with a paid whitelisting push aimed at shoppers within a 10-mile radius of launch stores.",
    deliverables: [
      "40-creator UGC seeding program",
      "Branded hashtag challenge",
      "Geo-targeted whitelisted paid media",
      "Launch-week content calendar",
      "Retail buyer performance deck",
    ],
    results: [
      { label: "Social reach", value: "6.2M" },
      { label: "UGC pieces produced", value: "142" },
      { label: "Sell-through vs. forecast", value: "168%" },
      { label: "Reorder within 60 days", value: "Yes" },
    ],
    testimonial: {
      quote:
        "We went into our retail buyer meeting with a shelf full of proof, not promises. Ripe built us an audience before we had a single case of product in stores.",
      name: "Dana Whitfield",
      role: "Founder, Hearth & Husk",
    },
    accent: "lime",
  },
  {
    id: "proj-2",
    slug: "rootline-organics-community-rebuild",
    title: "Rebuilding trust with a skeptical produce audience",
    client: "Rootline Organics",
    year: "2023",
    category: ["Social Media", "Branding"],
    coverImage: u("1659283506371-d5c45ab0f4c6"),
    gallery: [
      u("1659283506371-d5c45ab0f4c6"),
      u("1612362426802-dcc0ccd25f64"),
      u("1583258292688-d0213dc5a3a8"),
    ],
    summary:
      "A full social rebrand and always-on content system for an organic produce brand recovering from a packaging recall and a bruised community.",
    challenge:
      "A voluntary recall six months prior had cratered engagement and left Rootline's comment sections full of unanswered concern. The brand voice felt corporate and defensive exactly when audiences needed warmth and transparency.",
    approach:
      "We rebuilt the content pillars around radical transparency — farm-to-shelf traceability content, a weekly 'ask a farmer' series, and a proactive community management protocol that made sure no comment went unanswered for more than two hours.",
    deliverables: [
      "Brand voice & tone reset",
      "Farm-to-shelf content series",
      "Community management protocol",
      "Sentiment tracking dashboard",
      "Quarterly trust-metric reporting",
    ],
    results: [
      { label: "Sentiment score change", value: "+41 pts" },
      { label: "Engagement rate", value: "7.4%" },
      { label: "Community response time", value: "<2 hrs" },
      { label: "Follower growth (6 mo)", value: "+92%" },
    ],
    testimonial: {
      quote:
        "Ripe didn't just manage our channels, they helped us rebuild a relationship. Our comments section went from a liability to our best sales tool.",
      name: "Priya Nathan",
      role: "VP Marketing, Rootline Organics",
    },
    accent: "violet",
  },
  {
    id: "proj-3",
    slug: "milk-and-bloom-seasonal-campaign",
    title: "A limited flavor drop that broke the app's servers",
    client: "Milk & Bloom",
    year: "2024",
    category: ["Paid Ads", "Influencer Marketing"],
    coverImage: u("1523789766234-680896bf4327"),
    gallery: [
      u("1523789766234-680896bf4327"),
      u("1604584741084-6bdd6792213d"),
      u("1670710028442-06a2df4bdf85"),
    ],
    summary:
      "A creator-driven hype campaign for a limited-edition dessert flavor, paired with a paid media push tuned for e-commerce and DTC conversion.",
    challenge:
      "Milk & Bloom's seasonal flavor drops historically sold out in days but plateaued fast, with most sales coming from existing customers rather than new trial. Leadership wanted the next drop to actually grow the buyer base.",
    approach:
      "We built a tiered creator campaign — 6 mid-tier food creators for early access content, 25 nano creators for launch-day reaction videos — synchronized with a paid social funnel that retargeted every video viewer with a direct-to-cart offer.",
    deliverables: [
      "Tiered creator campaign (31 creators)",
      "Early-access content embargo strategy",
      "Full-funnel paid social build",
      "DTC conversion tracking",
      "Post-launch creative performance report",
    ],
    results: [
      { label: "New-customer orders", value: "+118%" },
      { label: "ROAS", value: "6.4x" },
      { label: "Video views", value: "9.8M" },
      { label: "Sell-out time", value: "36 hrs" },
    ],
    accent: "coral",
  },
  {
    id: "proj-4",
    slug: "fernwell-coffee-always-on-content",
    title: "An always-on engine for a 40-cafe coffee brand",
    client: "Fernwell Coffee Co.",
    year: "2023",
    category: ["Social Media", "UGC"],
    coverImage: u("1670710028442-06a2df4bdf85"),
    gallery: [
      u("1670710028442-06a2df4bdf85"),
      u("1642524780712-2d79212d7878"),
      u("1612362426285-112b117dfcba"),
    ],
    summary:
      "A recurring content system covering 40 cafe locations, blending local UGC sourcing with a centralized brand feed to support both retail traffic and packaged-goods retail expansion.",
    challenge:
      "Fernwell was expanding from cafe counters into grocery aisles with a new packaged coffee line, but their social presence was entirely local and inconsistent, run ad hoc by individual store managers.",
    approach:
      "We centralized content production while keeping local flavor alive — a rotating local-creator program across all 40 markets feeding into one editorial calendar, with dedicated content tracks for the new grocery line.",
    deliverables: [
      "40-market local creator network",
      "Centralized editorial calendar",
      "Packaged-goods content track",
      "Store-level engagement playbook",
      "Monthly cross-market reporting",
    ],
    results: [
      { label: "Posting consistency", value: "7x/week" },
      { label: "Grocery line awareness lift", value: "+37%" },
      { label: "Total impressions (12 mo)", value: "48M" },
      { label: "Store check-ins", value: "+29%" },
    ],
    testimonial: {
      quote:
        "For the first time, our 40 locations feel like one brand online instead of 40 separate accounts. And our grocery launch had an audience waiting on day one.",
      name: "Marco Alvarez",
      role: "Director of Marketing, Fernwell Coffee Co.",
    },
    accent: "lime",
  },
  {
    id: "proj-5",
    slug: "sundrop-juico-influencer-relaunch",
    title: "Relaunching a legacy juice brand for a Gen Z audience",
    client: "Sundrop Juico",
    year: "2024",
    category: ["Influencer Marketing", "Branding"],
    coverImage: u("1583258292688-d0213dc5a3a8"),
    gallery: [
      u("1583258292688-d0213dc5a3a8"),
      u("1612362426802-dcc0ccd25f64"),
      u("1604584741084-6bdd6792213d"),
    ],
    summary:
      "A ground-up social relaunch for a 30-year-old juice brand, repositioning it for a younger audience through creator partnerships and a modernized visual identity.",
    challenge:
      "Sundrop Juico had 90% brand awareness among shoppers over 45 and almost none under 25. Category growth was happening entirely in the segment they couldn't reach, and their existing content felt dated on every platform that mattered to that audience.",
    approach:
      "We paired a modernized art direction with a category-tastemaker influencer strategy — partnering with 15 creators in the wellness and easy-cooking space to reintroduce the brand as a mixer and recipe staple, not just a breakfast juice.",
    deliverables: [
      "Social-first visual identity refresh",
      "15-creator tastemaker program",
      "Recipe & mixology content series",
      "Short-form video-first content strategy",
      "Awareness lift study",
    ],
    results: [
      { label: "Under-25 awareness lift", value: "+54%" },
      { label: "Short-form video followers (9 mo)", value: "0 → 210K" },
      { label: "Earned media value", value: "₹1.4M" },
      { label: "Engagement rate", value: "9.1%" },
    ],
    accent: "coral",
  },
  {
    id: "proj-6",
    slug: "emberfield-sauces-ugc-scaling",
    title: "Scaling UGC into the brand's top-performing ad format",
    client: "Emberfield Sauces",
    year: "2023",
    category: ["UGC", "Paid Ads"],
    coverImage: u("1612192666439-e94eaf8083bd"),
    gallery: [
      u("1612192666439-e94eaf8083bd"),
      u("1612192666522-85ce38114950"),
      u("1612192666510-e7ccf6e5f359"),
    ],
    summary:
      "A systematic UGC production and testing engine that replaced Emberfield's agency-shot ads as their highest-converting paid social creative.",
    challenge:
      "Emberfield's paid social performance had plateaued for two straight quarters. Their polished, agency-produced ads were losing to competitor UGC in every A/B test, but they had no repeatable process for sourcing or testing creator content at scale.",
    approach:
      "We stood up a always-on UGC production line: 15 new creator briefs monthly, a standardized hook-testing framework, and a weekly creative refresh cadence feeding directly into their paid social account.",
    deliverables: [
      "Always-on UGC production pipeline",
      "Hook & script testing framework",
      "Weekly creative refresh cadence",
      "Paid social account management",
      "Creative performance scorecards",
    ],
    results: [
      { label: "ROAS improvement", value: "+72%" },
      { label: "CPA reduction", value: "-38%" },
      { label: "New creative tested / month", value: "60+" },
      { label: "Winning UGC vs. brand ads", value: "4.2x CTR" },
    ],
    testimonial: {
      quote:
        "Our media buying didn't change — our creative did. Ripe's testing engine found winners faster than we thought was possible.",
      name: "Sam O'Rourke",
      role: "Growth Lead, Emberfield Sauces",
    },
    accent: "violet",
  },
  {
    id: "proj-7",
    slug: "meadowlane-skincare-community-launch",
    title: "Launching a clean-beauty line with community, not ad spend",
    client: "Meadowlane Skincare",
    year: "2024",
    category: ["Social Media", "Influencer Marketing"],
    coverImage: u("1718490953028-021d352b14fd"),
    gallery: [
      u("1718490953028-021d352b14fd"),
      u("1631730486572-226d1f595b68"),
      u("1643123158523-2950acbdfd68"),
    ],
    summary:
      "A pre-launch community-building program for a clean-beauty skincare line that generated a five-figure waitlist before the brand spent a dollar on ads.",
    challenge:
      "Meadowlane's founders wanted to launch without the paid-heavy playbook typical of DTC beauty, betting instead that a genuine early community would drive more durable growth — but they had no audience and a hard launch date.",
    approach:
      "We ran a 5-month pre-launch content and micro-influencer program focused on ingredient education and skin-journey storytelling, building a waitlist through value-first content rather than discount-driven ads.",
    deliverables: [
      "Pre-launch content strategy",
      "Ingredient education content series",
      "25-creator micro-influencer program",
      "Waitlist growth campaign",
      "Launch-day activation plan",
    ],
    results: [
      { label: "Pre-launch waitlist", value: "18,400" },
      { label: "Launch-day sellout", value: "4 hrs" },
      { label: "Paid spend at launch", value: "₹0" },
      { label: "Organic reach", value: "3.1M" },
    ],
    accent: "lime",
  },
  {
    id: "proj-8",
    slug: "cloudwash-home-paid-social-scale",
    title: "Scaling paid social for a household staples brand",
    client: "Cloudwash Home",
    year: "2023",
    category: ["Paid Ads", "Social Media"],
    coverImage: u("1618479955358-5f8e5ab7d630"),
    gallery: [
      u("1618479955358-5f8e5ab7d630"),
      u("1629380108599-ea06489d66f5"),
      u("1643123158489-634259c983b3"),
    ],
    summary:
      "A full-funnel paid social program that took a household-goods brand from single-digit ROAS to a repeatable, scalable acquisition channel.",
    challenge:
      "Cloudwash had tried paid social twice before with disappointing results and internal skepticism about whether the channel could work for a low-consideration household category with thin margins.",
    approach:
      "We rebuilt the account from the ground up: a value-based bidding structure suited to subscription economics, a always-on creative testing cadence, and a full-funnel structure that treated retargeting and prospecting as separate, differently-measured programs.",
    deliverables: [
      "Full account restructure",
      "Value-based bidding implementation",
      "Always-on creative testing",
      "Subscription LTV modeling",
      "Monthly incrementality testing",
    ],
    results: [
      { label: "ROAS", value: "1.9x → 5.2x" },
      { label: "Subscriber CAC", value: "-46%" },
      { label: "Monthly recurring revenue", value: "+156%" },
      { label: "Ad account health score", value: "98/100" },
    ],
    testimonial: {
      quote:
        "We'd basically written off paid social. Ripe's team found the structure and the patience to make it our most predictable channel.",
      name: "Renée Castillo",
      role: "CMO, Cloudwash Home",
    },
    accent: "coral",
  },
  {
    id: "proj-9",
    slug: "northfield-provisions-frozen-relaunch",
    title: "Turning a freezer-aisle afterthought into a category standout",
    client: "Northfield Provisions",
    year: "2024",
    category: ["Social Media", "Paid Ads"],
    coverImage: u("1566454825481-4e48f80aa4d7"),
    gallery: [
      u("1566454825481-4e48f80aa4d7"),
      u("1707049846876-44e39a6342bf"),
      u("1545601445-4d6a0a0565f0"),
    ],
    summary:
      "A packaging-to-social relaunch for a frozen foods line that had lost shelf presence to flashier, newer entrants.",
    challenge:
      "Northfield's frozen meals were a reliable earner but invisible on social — the brand had no content system built for a category most shoppers only think about in the freezer aisle itself.",
    approach:
      "We built a 'freezer to table' content series shot in real home kitchens, paired with geo-targeted paid social timed to weekly grocery run patterns rather than generic always-on spend.",
    deliverables: [
      "Freezer-to-table content series",
      "Real-kitchen creator partnerships",
      "Grocery-run-timed paid social",
      "Packaging refresh content adaptation",
      "Category benchmark reporting",
    ],
    results: [
      { label: "Social-driven trial", value: "+64%" },
      { label: "Engagement rate", value: "6.8%" },
      { label: "ROAS", value: "4.7x" },
      { label: "Repeat purchase lift", value: "+22%" },
    ],
    accent: "violet",
  },
  {
    id: "proj-10",
    slug: "bramble-and-co-pantry-community",
    title: "Building a pantry-staples brand a community, not just a following",
    client: "Bramble & Co.",
    year: "2023",
    category: ["Social Media", "UGC"],
    coverImage: u("1604719312497-c6fc196f51ec"),
    gallery: [
      u("1604719312497-c6fc196f51ec"),
      u("1584680226833-0d680d0a0794"),
      u("1564976704148-25faafe2b6dd"),
    ],
    summary:
      "A recipe-led UGC and community program for a pantry staples brand that turned a low-engagement category into one of the client's most active social communities.",
    challenge:
      "Pantry staples are a famously low-engagement category — Bramble & Co.'s existing content was product-forward and getting almost no organic interaction.",
    approach:
      "We shifted the entire content strategy to recipes and meal solutions built around the product rather than the product itself, sourcing UGC from home cooks and building a recurring 'what's in your pantry' community series.",
    deliverables: [
      "Recipe-led content strategy",
      "Home-cook UGC sourcing program",
      "Recurring community content series",
      "Community management protocol",
      "Quarterly engagement benchmarking",
    ],
    results: [
      { label: "Engagement rate", value: "8.9%" },
      { label: "UGC submissions / month", value: "210+" },
      { label: "Community growth (12 mo)", value: "+134%" },
      { label: "Recipe saves", value: "1.2M" },
    ],
    testimonial: {
      quote:
        "Nobody thinks pantry staples are exciting until they see what happens when you let your community cook with you instead of at them.",
      name: "Owen Marsh",
      role: "Brand Manager, Bramble & Co.",
    },
    accent: "lime",
  },
  {
    id: "proj-11",
    slug: "verona-skin-influencer-trust",
    title: "Earning trust in a skincare category full of noise",
    client: "Verona Skin",
    year: "2024",
    category: ["Influencer Marketing", "UGC"],
    coverImage: u("1583209814683-c023dd293cc6"),
    gallery: [
      u("1583209814683-c023dd293cc6"),
      u("1633793566189-8e9fe6f817fc"),
      u("1631730201811-2f6451dbce8a"),
    ],
    summary:
      "A dermatologist and micro-creator partnership program that helped a mid-market skincare brand compete against much larger beauty budgets.",
    challenge:
      "Verona Skin's paid media couldn't out-spend category giants, and skincare audiences were increasingly skeptical of polished brand claims without third-party validation.",
    approach:
      "We built a trust-first influencer program pairing licensed dermatologists with everyday-skin micro-creators, prioritizing long-form honest reviews over one-off sponsored posts.",
    deliverables: [
      "Dermatologist partnership program",
      "Micro-creator long-form review campaign",
      "Ingredient education content",
      "Review and testimonial content library",
      "Sentiment and trust-metric tracking",
    ],
    results: [
      { label: "Branded search lift", value: "+47%" },
      { label: "Influencer-driven revenue", value: "₹680K" },
      { label: "Average review sentiment", value: "4.7/5" },
      { label: "Repeat purchase rate", value: "+31%" },
    ],
    accent: "coral",
  },
  {
    id: "proj-12",
    slug: "husklane-bakery-local-to-national",
    title: "Taking a local bakery brand from regional shelves to national",
    client: "Husklane Bakery",
    year: "2023",
    category: ["Social Media", "Branding"],
    coverImage: u("1606824722920-4c652a70f348"),
    gallery: [
      u("1606824722920-4c652a70f348"),
      u("1720397938346-91cfcd505e98"),
      u("1614907634002-65ac4cb74acb"),
    ],
    summary:
      "A brand and content evolution that prepared a beloved regional bakery brand for a national grocery rollout without losing its local charm.",
    challenge:
      "Husklane's brand voice was deeply local and personal, built over a decade in a single region. Leadership worried a national rollout would flatten the personality that made the brand work in the first place.",
    approach:
      "We built a content framework that scaled the brand's warmth rather than replacing it — regional creator spotlights nested inside a consistent national visual identity, so new markets got the same authenticity longtime customers loved.",
    deliverables: [
      "National visual identity for social",
      "Regional creator spotlight series",
      "Market-by-market launch playbooks",
      "Retail partner co-marketing content",
      "Brand tracking study",
    ],
    results: [
      { label: "New-market awareness", value: "+58%" },
      { label: "Social reach", value: "5.4M" },
      { label: "Brand favorability", value: "+19 pts" },
      { label: "Retail markets launched", value: "12" },
    ],
    accent: "violet",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
