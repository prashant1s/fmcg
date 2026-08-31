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
    title: "Building an e-commerce engine for a fitness apparel brand",
    client: "Rhino Cult",
    year: "2025",
    category: [
      "Website Development",
      "E-commerce",
      "Ad Production",
      "Photography",
      "Influencer Marketing",
      "UGC",
      "Social Media",
    ],
    coverImage: img("rhino-cult", "banner"),
    gallery: [
      img("rhino-cult", "gallery-01"),
      img("rhino-cult", "gallery-02"),
      img("rhino-cult", "gallery-03"),
      img("rhino-cult", "gallery-04"),
    ],
    summary:
      "E-commerce and marketing build for a fitness apparel brand competing in an established market.",
    challenge:
      "Rhino Cult needed a complete e-commerce platform, compelling product content, and authentic community partnerships to compete in a crowded fitness apparel category.",
    approach:
      "We built a high-converting e-commerce website backed by professional product photography, targeted sales campaigns, and influencer and UGC partnerships within the fitness community.",
    deliverables: [
      "E-commerce website development",
      "Product photography",
      "Sales campaign implementation",
      "Influencer partnership strategy",
      "UGC community engagement",
    ],
    results: [
      { label: "Core services delivered", value: "7" },
      { label: "Campaign deliverables", value: "5" },
      { label: "Gallery highlights", value: "4" },
      { label: "Launch year", value: "2025" },
    ],
    testimonial: {
      quote:
        "Exceptional work! The team delivered exactly what we needed to scale our business efficiently.",
      name: "Team Rhino Cult",
      role: "Partner",
    },
    accent: "blue",
  },
  {
    id: "proj-snuzzles",
    slug: "snuzzles",
    title: "Giving a lifestyle brand a distinct visual identity",
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
      "Brand building for a lifestyle products company establishing distinct market positioning.",
    challenge:
      "Snuzzles needed a cohesive identity, professional product imagery, and engaging campaigns to differentiate itself in a competitive market.",
    approach:
      "We delivered a comprehensive branding and marketing strategy — professional photography, a consistent social presence, impactful ad production, and a refined visual identity system.",
    deliverables: [
      "Professional photo shoots",
      "Social media management",
      "Ad production",
      "Visual identity system",
    ],
    results: [
      { label: "Core services delivered", value: "4" },
      { label: "Campaign deliverables", value: "4" },
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
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
