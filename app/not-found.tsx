import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const TITLE = "Page Not Found";
const DESCRIPTION = `The page you're looking for doesn't exist or has moved. Head back home or get in touch with ${SITE.fullName}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-paper px-6 py-section text-center">
      <span className="eyebrow justify-center text-blue-600">
        <span className="size-1.5 rounded-full bg-blue-600" />
        404
      </span>
      <h1 className="mt-4 text-display-lg text-balance">Page not found</h1>
      <p className="mt-4 max-w-md text-balance text-lg text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg" showArrow>
          Back to Home
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
