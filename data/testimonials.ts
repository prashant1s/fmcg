import type { Testimonial } from "@/types";

const u = (id: string, w = 200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dana Whitfield",
    role: "Founder",
    company: "Hearth & Husk",
    quote:
      "We went into our retail buyer meeting with a shelf full of proof, not promises. Ripe built us an audience before we had a single case of product in stores.",
    avatar: u("1573497019940-1c28c88b4f3e"),
    rating: 5,
  },
  {
    id: "test-2",
    name: "Priya Nathan",
    role: "VP Marketing",
    company: "Rootline Organics",
    quote:
      "Ripe didn't just manage our channels, they helped us rebuild a relationship. Our comments section went from a liability to our best sales tool.",
    avatar: u("1609436132311-e4b0c9370469"),
    rating: 5,
  },
  {
    id: "test-3",
    name: "Marco Alvarez",
    role: "Director of Marketing",
    company: "Fernwell Coffee Co.",
    quote:
      "For the first time, our 40 locations feel like one brand online instead of 40 separate accounts. And our grocery launch had an audience waiting on day one.",
    avatar: u("1580411415491-a672219c801b"),
    rating: 5,
  },
  {
    id: "test-4",
    name: "Sam O'Rourke",
    role: "Growth Lead",
    company: "Emberfield Sauces",
    quote:
      "Our media buying didn't change, our creative did. Ripe's testing engine found winners faster than we thought was possible.",
    avatar: u("1573497491765-dccce02b29df"),
    rating: 5,
  },
  {
    id: "test-5",
    name: "Renée Castillo",
    role: "CMO",
    company: "Cloudwash Home",
    quote:
      "We'd basically written off paid social. Ripe's team found the structure and the patience to make it our most predictable channel.",
    avatar: u("1573497491207-618cc224f243"),
    rating: 5,
  },
];
