import type { Project } from "@/types";

const img = (slug: string, name: string) =>
  `https://whizoid.com/img/portfolio/${slug}/${name}.webp`;

export const projects: Project[] = [
  {
    id: "proj-11-11",
    slug: "11-11",
    title: "Building a lifestyle brand around a protein bar launch",
    client: "11:11",
    year: "2025",
    category: ["Social Media", "Ad Production", "Influencer Marketing", "Website Development", "Branding"],
    coverImage: img("11-11", "banner"),
    gallery: [
      img("11-11", "gallery-01"),
      img("11-11", "gallery-02"),
      img("11-11", "gallery-03"),
      img("11-11", "gallery-04"),
    ],
    summary:
      "Digital strategy for a premium protein bar brand launching into a competitive health food market.",
    challenge:
      "11:11 needed to stand out in a saturated protein bar market and be seen as a lifestyle choice, not just another snack — with no existing digital presence to build from.",
    approach:
      "We ran a high-energy launch campaign built on workout-focused ad production, dedicated product photography, and fitness influencer partnerships that put clean ingredients and taste front and center, backed by a new brand website.",
    deliverables: [
      "Workout-centric ad production",
      "Product photography",
      "Fitness influencer partnerships",
      "Social media strategy",
      "Website development",
      "Brand positioning",
    ],
    results: [
      { label: "Core services delivered", value: "5" },
      { label: "Campaign deliverables", value: "6" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "They transformed our online presence completely. The feedback from our customers has been overwhelmingly positive.",
      name: "Team 11:11",
      role: "Partner",
    },
    accent: "lime",
  },
  {
    id: "proj-snuzzles",
    slug: "snuzzles",
    title: "Launching a Bangalore cafe to a packed house from day one",
    client: "Snuzzles",
    year: "2025",
    category: ["Social Media", "Photography", "Ad Production", "Branding"],
    coverImage: img("snuzzles", "banner"),
    gallery: [
      img("snuzzles", "gallery-01"),
      img("snuzzles", "gallery-02"),
      img("snuzzles", "gallery-03"),
      img("snuzzles", "gallery-04"),
    ],
    summary:
      "Launch marketing for a new Bangalore cafe, built to convert opening buzz into consistent, extensive foot traffic from week one.",
    challenge:
      "Snuzzles needed to go from an empty space to a destination cafe fast — building local awareness, a distinct identity, and enough pre-launch buzz to drive real walk-ins from opening day.",
    approach:
      "We led the cafe's launch campaign end to end — professional photography, a cohesive visual identity, and a consistent social presence paired with targeted local ad production that turned launch-week curiosity into sustained foot falls through the cafe's opening and early growth phase.",
    deliverables: [
      "Launch campaign strategy",
      "Professional photo shoots",
      "Social media management",
      "Local ad production",
      "Visual identity system",
    ],
    results: [
      { label: "Core services delivered", value: "4" },
      { label: "Campaign deliverables", value: "5" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "We appreciate the team's responsiveness and ability to execute complex requirements seamlessly.",
      name: "Team Snuzzles",
      role: "Partner",
    },
    accent: "lime",
  },
  {
    id: "proj-rasssa-rasoi",
    slug: "rasssa-rasoi",
    title: "Turning a restaurant launch into a dining destination",
    client: "Rasssa Rasoi",
    year: "2025",
    category: ["Ad Production", "Social Media", "Photography", "Influencer Marketing"],
    coverImage: img("rasssa-rasoi", "banner"),
    gallery: [
      img("rasssa-rasoi", "gallery-01"),
      img("rasssa-rasoi", "gallery-02"),
      img("rasssa-rasoi", "gallery-03"),
      img("rasssa-rasoi", "gallery-04"),
    ],
    summary:
      "Food brand marketing for an authentic Indian restaurant, built on photography, social strategy, and influencer partnerships to establish market presence.",
    challenge:
      "Rasssa Rasoi needed compelling visual content, strategic social engagement, and influencer collaborations to attract food enthusiasts and become a destination dining venue.",
    approach:
      "We ran professional food photography shoots alongside targeted social content, paid campaigns, and food influencer partnerships that showcased the restaurant's authenticity and ambiance.",
    deliverables: [
      "Professional food photography",
      "Social media content strategy",
      "Targeted ad campaigns",
      "Influencer partnership coordination",
    ],
    results: [
      { label: "Core services delivered", value: "4" },
      { label: "Campaign deliverables", value: "4" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "Whizoid Studio truly understood our vision. The results have been outstanding and we've seen great engagement.",
      name: "Team Rasssa Rasoi",
      role: "Partner",
    },
    accent: "blue",
  },
  {
    id: "proj-teju-masala",
    slug: "teju-masala",
    title: "Bringing a heritage spice brand to modern home cooks",
    client: "Teju Masala",
    year: "2025",
    category: ["Social Media", "Ad Production"],
    coverImage: img("teju-masala", "banner"),
    gallery: [
      img("teju-masala", "gallery-01"),
      img("teju-masala", "gallery-02"),
      img("teju-masala", "gallery-03"),
      img("teju-masala", "gallery-04"),
    ],
    summary:
      "Digital marketing for a traditional spice brand expanding its reach to modern home cooks and food enthusiasts.",
    challenge:
      "A heritage spice brand needed digital marketing expertise to connect with contemporary consumers who prioritize authentic, quality spices beyond conventional distribution.",
    approach:
      "We built targeted social campaigns and ad content emphasizing authenticity and quality, incorporating recipe inspiration and cooking guidance to position Teju Masala as a kitchen staple.",
    deliverables: [
      "Targeted social media campaigns",
      "Ad production",
      "Recipe & cooking-tip content",
    ],
    results: [
      { label: "Core services delivered", value: "2" },
      { label: "Campaign deliverables", value: "3" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "The strategic insights provided by Whizoid have been invaluable for our marketing campaigns.",
      name: "Team Teju Masala",
      role: "Partner",
    },
    accent: "lime",
  },
  {
    id: "proj-kishandas",
    slug: "kishandas",
    title: "Bringing heritage jewelry craftsmanship to a digital audience",
    client: "Kishandas & Co.",
    year: "2025",
    category: ["Social Media", "Influencer Marketing", "Ad Production", "Branding", "Graphics Design"],
    coverImage: img("kishandas", "banner"),
    gallery: [
      img("kishandas", "gallery-01"),
      img("kishandas", "gallery-02"),
      img("kishandas", "gallery-03"),
      img("kishandas", "gallery-04"),
    ],
    summary:
      "Digital transformation for a heritage jewelry brand, engaging younger luxury consumers while preserving traditional craftsmanship appeal.",
    challenge:
      "Kishandas & Co. needed to connect with contemporary audiences while maintaining the legacy brand identity and heritage values built over generations.",
    approach:
      "We blended heritage storytelling with contemporary marketing — elegant social content, fashion influencer collaborations, premium ad production, and refined visual design that showcased the brand's craftsmanship.",
    deliverables: [
      "Social media strategy",
      "Influencer partnerships",
      "Ad production",
      "Branding",
      "Graphics design",
    ],
    results: [
      { label: "Core services delivered", value: "5" },
      { label: "Campaign deliverables", value: "5" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote: "Their expertise helped us navigate the digital landscape with confidence.",
      name: "Team Kishandas & Co.",
      role: "Partner",
    },
    accent: "blue",
  },
  {
    id: "proj-rhino-cult",
    slug: "rhino-cult",
    title: "Launching a fitness apparel brand's social presence from zero",
    client: "Rhino Cult",
    year: "2025",
    category: ["Social Media", "Branding", "Ad Production", "Photography", "Influencer Marketing"],
    coverImage: img("rhino-cult", "banner"),
    gallery: [
      img("rhino-cult", "gallery-01"),
      img("rhino-cult", "gallery-02"),
      img("rhino-cult", "gallery-03"),
      img("rhino-cult", "gallery-04"),
    ],
    summary:
      "Social media strategy and initial brand launch for a fitness apparel brand entering an established market.",
    challenge:
      "Rhino Cult was launching from scratch with no existing audience or content library, and needed a distinct brand identity plus a social presence that could compete in a crowded fitness apparel category from day one.",
    approach:
      "We led the brand's initial launch — building its visual identity and content strategy, then driving a consistent social media presence backed by professional product photography, ad production, and influencer partnerships within the fitness community.",
    deliverables: [
      "Brand launch strategy",
      "Social media management",
      "Product photography",
      "Ad production",
      "Influencer partnership strategy",
    ],
    results: [
      { label: "Core services delivered", value: "5" },
      { label: "Campaign deliverables", value: "5" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "The team helped us build strong brand momentum across platforms. From social media and viral campaigns to shoots, influencer collaborations, paid ads, and marketplaces management, everything was handled with clarity and consistency. The execution translated into better visibility and steady growth.",
      name: "Rhinocult",
      role: "Brand",
    },
    accent: "blue",
  },
  {
    id: "proj-dainik-bhaskar",
    slug: "dainik-bhaskar",
    title: "Modernizing ad creative for India's largest Hindi newspaper",
    client: "Dainik Bhaskar",
    year: "2025",
    category: ["Graphics Design", "Ad Production", "Strategy Planning"],
    coverImage: img("dainik-bhaskar", "banner"),
    gallery: [
      img("dainik-bhaskar", "gallery-01"),
      img("dainik-bhaskar", "gallery-02"),
      img("dainik-bhaskar", "gallery-03"),
    ],
    summary:
      "Strategic advertising campaigns for one of India's largest Hindi newspapers, blending creative design with contemporary strategy to strengthen market position.",
    challenge:
      "Dainik Bhaskar needed innovative creative strategy and compelling graphics to maintain category leadership while engaging a more modern reader base.",
    approach:
      "We built a comprehensive ad strategy and eye-catching graphics that blend the brand's traditional values with contemporary design, strengthening its connection with both loyal and new audiences.",
    deliverables: ["Comprehensive ad strategy", "Graphics & creative campaigns"],
    results: [
      { label: "Core services delivered", value: "3" },
      { label: "Campaign deliverables", value: "2" },
      { label: "Gallery highlights", value: "3" },
      { label: "Partnership since", value: "2025" },
    ],
    testimonial: {
      quote:
        "Whizoid delivered beyond our expectations. Their creative solutions perfectly aligned with our brand identity.",
      name: "Team Dainik Bhaskar",
      role: "Partner",
    },
    accent: "blue",
  },
  {
    id: "proj-ihp-masala",
    slug: "ihp-masala",
    title: "Getting a heritage masala brand shelf-ready on Blinkit",
    client: "IHP Masala",
    year: "2025",
    category: ["Quick Commerce", "Marketplace Onboarding"],
    // TODO: replace with real IHP Masala photography once uploaded to whizoid.com/img/portfolio/ihp-masala/
    coverImage: "/logo.avif",
    gallery: ["/logo.avif", "/logo.avif"],
    summary:
      "Marketplace onboarding for a masala brand, getting it fully set up and live for quick-commerce shoppers on Blinkit.",
    challenge:
      "IHP Masala needed to get listed and selling on Blinkit but lacked the marketplace experience to navigate onboarding, listings, and catalog setup on its own.",
    approach:
      "We managed the end-to-end onboarding process with Blinkit — from account and catalog setup to listing optimization — getting IHP Masala live and discoverable to quick-commerce shoppers.",
    deliverables: ["Blinkit account onboarding", "Catalog & listing setup"],
    results: [
      { label: "Core services delivered", value: "2" },
      { label: "Campaign deliverables", value: "2" },
      { label: "Marketplace", value: "Blinkit" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "Whizoid made getting onto Blinkit simple and hassle-free from start to finish.",
      name: "Team IHP Masala",
      role: "Partner",
    },
    accent: "lime",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
