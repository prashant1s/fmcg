import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Space_Mono, Fraunces, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { Loader } from "@/components/shared/loader";
import { PageTransition } from "@/components/layout/page-transition";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.description,
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
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.svg`,
  image: `${SITE.url}/opengraph-image`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Elite House, Old Palasia Rd",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452001",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: SOCIAL_LINKS.map((link) => link.href),
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
