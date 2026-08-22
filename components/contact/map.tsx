import { SITE } from "@/lib/constants";

export function Map() {
  const query = encodeURIComponent(SITE.address);

  return (
    <section className="bg-paper">
      <div className="relative h-[420px] w-full grayscale-[30%] transition-all duration-500 hover:grayscale-0 sm:h-[480px]">
        <iframe
          title="Ripe headquarters location"
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
