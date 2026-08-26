import type { NavLink } from "@/types";

export const SITE = {
  name: "Ripe",
  fullName: "Ripe Agency",
  tagline: "Social growth for FMCG brands",
  description:
    "Ripe is a full-service social media agency built for FMCG brands — social strategy, UGC, influencer marketing, and paid social that turn scroll-stopping content into sell-through.",
  url: "https://ripe.agency",
  email: "hello@ripe.agency",
  phone: "+1 (415) 555-0142",
  phoneHref: "+14155550142",
  address: "548 Market Street, Suite 62, San Francisco, CA 94104",
  founded: "2018",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
] as const;

export const OFFICES = [
  {
    id: "sf",
    city: "San Francisco (HQ)",
    address: "548 Market Street, Suite 62, San Francisco, CA 94104",
    phone: "+1 (415) 555-0142",
  },
  {
    id: "nyc",
    city: "New York",
    address: "142 West 24th Street, Floor 4, New York, NY 10011",
    phone: "+1 (212) 555-0198",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    address: "Level 3, One BKC, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 5550 3344",
  },
] as const;

export const WORKING_HOURS = "Monday – Friday, 9:00 AM – 6:00 PM (local time)";

export const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Content Creation & Design",
  "UGC Campaigns",
  "Influencer Marketing",
  "Paid Social Advertising",
  "Social Strategy & Consulting",
  "Community Management",
  "Analytics & Reporting",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹5,000 / month",
  "₹5,000 – ₹10,000 / month",
  "₹10,000 – ₹25,000 / month",
  "₹25,000 – ₹50,000 / month",
  "₹50,000+ / month",
] as const;

export const PROJECT_FILTERS = [
  "All",
  "Social Media",
  "UGC",
  "Paid Ads",
  "Branding",
  "Influencer Marketing",
] as const;
