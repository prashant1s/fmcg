export type ProjectCategory =
  | "Social Media"
  | "UGC"
  | "Paid Ads"
  | "Branding"
  | "Influencer Marketing"
  | "Ad Production"
  | "Website Development"
  | "Graphics Design"
  | "Strategy Planning"
  | "Photography"
  | "E-commerce";

export interface ResultMetric {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  deliverables: string[];
  metric: ResultMetric;
  accent: "lime" | "coral" | "violet";
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory[];
  coverImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: ResultMetric[];
  testimonial?: ProjectTestimonial;
  accent: "lime" | "coral" | "violet";
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "process";
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
