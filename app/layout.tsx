import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "@/app/components/JsonLd";
import { MobileActionBar } from "@/app/components/MobileActionBar";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { UtilityBar } from "@/app/components/UtilityBar";
import { AREAS_SERVED, BRAND, PRICES } from "@/app/lib/content";
import { BUSINESS_ID } from "@/app/lib/seo";
import { SERVICES } from "@/app/lib/services";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Independent BMW specialist in Palm Bay, FL. Brakes, diagnostics, engine, suspension, tires and detailing for every make. Posted prices, rated 5.0 on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "Paul’s Paddock | BMW Specialist & Auto Repair in Palm Bay, FL",
    template: "%s | Paul’s Paddock",
  },
  description,
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: "Paul’s Paddock | BMW Specialist & Auto Repair in Palm Bay, FL",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": BUSINESS_ID,
  name: BRAND.name,
  description,
  url: BRAND.siteUrl,
  image: `${BRAND.siteUrl}/og.jpg`,
  logo: `${BRAND.siteUrl}/logo.jpg`,
  telephone: BRAND.phoneE164,
  email: BRAND.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BRAND.address.street}, ${BRAND.address.unit}`,
    addressLocality: BRAND.address.city,
    addressRegion: BRAND.address.region,
    postalCode: BRAND.address.zip,
    addressCountry: "US",
  },
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name: `${name}, FL` })),
  sameAs: [BRAND.facebook, BRAND.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto repair services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${BRAND.siteUrl}/services/${s.slug}`,
      },
    })),
  },
  makesOffer: PRICES.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: p.name },
    price: p.price.replace("$", ""),
    priceCurrency: "USD",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <UtilityBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <JsonLd data={businessSchema} />
      </body>
    </html>
  );
}
