import type { TeamMember } from "@/types";

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const team: TeamMember[] = [
  {
    id: "team-1",
    name: "Jordan Ellis",
    role: "Founder & CEO",
    bio: "Started Ripe after a decade running brand social for two Fortune 500 food companies. Obsessed with the intersection of retail and culture.",
    image: u("1600878459138-e1123b37cb30"),
    social: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
  },
  {
    id: "team-2",
    name: "Maya Chen",
    role: "Creative Director",
    bio: "Leads brand and campaign creative across every account. Previously art directed for two DTC beauty unicorns before joining Ripe.",
    image: u("1494790108377-be9c29b29330"),
    social: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "team-3",
    name: "Theo Bramwell",
    role: "Head of Paid Social",
    bio: "Manages eight figures in annual media spend across Meta and LinkedIn. Lives and breathes incrementality testing.",
    image: u("1507003211169-0a1dd7228f2d"),
    social: { linkedin: "https://linkedin.com" },
  },
  {
    id: "team-4",
    name: "Priyanka Rao",
    role: "Influencer Partnerships Lead",
    bio: "Built Ripe's creator network of 3,000+ vetted talent from scratch. Negotiates every major partnership personally.",
    image: u("1573497161161-c3e73707e25c"),
    social: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "team-5",
    name: "Diego Fuentes",
    role: "Content Strategy Director",
    bio: "Sets the content pillars and editorial calendars behind every account. Former food-media editor turned brand strategist.",
    image: u("1560250097-0b93528c311a"),
    social: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
  },
  {
    id: "team-6",
    name: "Sofia Marchetti",
    role: "Senior Video Producer",
    bio: "Directs and edits Ripe's in-house video output, from 6-second hooks to full campaign films.",
    image: u("1609371497456-3a55a205d5eb"),
    social: { instagram: "https://instagram.com" },
  },
  {
    id: "team-7",
    name: "Malik Johnson",
    role: "Community Director",
    bio: "Runs community management across every client channel and trains the team behind Ripe's sub-2-hour response time.",
    image: u("1642736468842-c6bdcfbbcd28"),
    social: { linkedin: "https://linkedin.com" },
  },
  {
    id: "team-8",
    name: "Aisha Karim",
    role: "Analytics Lead",
    bio: "Builds the dashboards and reporting frameworks that connect social performance to sell-through for every client.",
    image: u("1697063882499-f7fca7d2d713"),
    social: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
  },
];
