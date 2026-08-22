"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { team } from "@/data/team";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const socialIconMap = { linkedin: Linkedin, twitter: Twitter, instagram: Instagram };

export function TeamSection() {
  return (
    <section className="bg-paper py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The people"
          title="A team that only works on consumer goods."
          description="Strategists, producers, and media buyers who've spent their careers in the aisle you're trying to win."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-ink-950">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-all duration-700 ease-expo group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent transition-opacity duration-500 group-hover:from-ink-950/95 group-hover:via-ink-950/60" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
                  <p className="max-h-0 overflow-hidden text-xs leading-relaxed text-paper/70 opacity-0 transition-all duration-500 ease-expo group-hover:max-h-32 group-hover:opacity-100">
                    {member.bio}
                  </p>
                  <h3 className="text-base font-semibold text-paper sm:text-lg">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-paper/50">{member.role}</p>
                    <div className="flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {Object.entries(member.social).map(([key, href]) => {
                        const Icon = socialIconMap[key as keyof typeof socialIconMap];
                        if (!Icon || !href) return null;
                        return (
                          <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on ${key}`}
                            className="text-paper/60 transition-colors hover:text-lime-300"
                          >
                            <Icon className="size-3.5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
