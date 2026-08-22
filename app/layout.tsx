import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Space_Mono, Fraunces, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { Loader } from "@/components/shared/loader";
import { PageTransition } from "@/components/layout/page-transition";
import { SITE } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "FMCG social media agency",
    "consumer goods marketing",
    "UGC campaigns",
    "influencer marketing agency",
    "paid social advertising",
    "CPG marketing agency",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&h=630&fit=crop&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0C",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: SITE.fullName,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
  },
  sameAs: [
    "https://instagram.com",
    "https://linkedin.com",
    "https://tiktok.com",
    "https://x.com",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable} ${fraunces.variable} ${caveat.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-paper">
        <Loader />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
