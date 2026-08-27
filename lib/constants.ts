import type { NavLink } from "@/types";

export const SITE = {
  name: "Ripe",
  fullName: "Ripe Agency",
  tagline: "Social growth for FMCG brands",
  description:
    "Ripe is a full-service social media agency built for FMCG brands — social strategy, UGC, influencer marketing, and paid social that turn scroll-stopping content into sell-through.",
  url: "https://ripe.agency",
  email: "sanidhya@whizoidstudio.com",
  phone: "+91 89621 77924",
  phoneHref: "+918962177924",
  whatsappHref: "918962177924",
  address: "2nd Floor, Elite House, Old Palasia Rd, Indore, MP 452001",
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
  { label: "Instagram", href: "https://www.instagram.com/whizoidstudio/" },
  { label: "X", href: "https://x.com/whizoidstudio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/whizoidstudio/" },
  { label: "YouTube", href: "https://www.youtube.com/c/WhizoidStudio" },
] as const;

export const OFFICES = [
  {
    id: "indore",
    city: "Indore, MP",
    address: "2nd Floor, Elite House, Old Palasia Rd, Indore, MP 452001",
    phone: "+91 89621 77924",
    email: "hello@whizoid.com",
  },
  {
    id: "bengaluru",
    city: "Bengaluru, KA",
    address: "72, 1st Main Rd, JP Nagar 7th Phase, Bengaluru 560078",
    phone: "+91 89621 77924",
    email: "hello@whizoid.com",
  },
  {
    id: "pune",
    city: "Pune, MH",
    address: "5th floor, Akruti Sankul, Opp. Janata Sahakari Bank, Tilak Road, Sadashiv Peth, Pune 411030",
    phone: "+91 89621 77924",
    email: "hello@whizoid.com",
  },
] as const;

export const WORKING_HOURS = "Monday – Friday, 9:00 AM – 6:00 PM (local time)";

export const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Content Creation & Design",
  "Paid Social Advertising",
  "Social Strategy & Consulting",
  "Analytics & Reporting",
  "Not sure yet",
] as const;

export const PROJECT_FILTERS = [
  "All",
  "Social Media",
  "UGC",
  "Paid Ads",
  "Branding",
  "Influencer Marketing",
] as const;
