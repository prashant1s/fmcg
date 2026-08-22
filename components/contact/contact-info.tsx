import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { SITE, SOCIAL_LINKS, WORKING_HOURS } from "@/lib/constants";

const socialIcons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  TikTok: FaTiktok,
  X: Twitter,
};

const items = [
  { icon: MapPin, label: "Office", value: SITE.address },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Hours", value: WORKING_HOURS },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ink-950 p-8 text-paper sm:p-9">
      <div>
        <h3 className="text-xl font-semibold">Prefer to reach out directly?</h3>
        <p className="mt-2 text-sm text-paper/50">
          Here&apos;s every way to find us.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-paper/8 text-lime-300">
              <item.icon className="size-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-paper/40">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm text-paper transition-colors hover:text-lime-300">
                  {item.value}
                </a>
              ) : (
                <p className="max-w-[15rem] text-sm text-paper/80">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-paper/10 pt-6">
        {SOCIAL_LINKS.map((social) => {
          const Icon = socialIcons[social.label as keyof typeof socialIcons];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-lime-300 hover:text-lime-300"
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
