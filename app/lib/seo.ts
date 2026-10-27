import type { Metadata } from "next";
import { BRAND } from "@/app/lib/content";
import type { Photo } from "@/app/lib/photos";
import type { Faq } from "@/app/lib/services";

export const BUSINESS_ID = `${BRAND.siteUrl}/#business`;

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: Photo;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: BRAND.name,
      title: `${title} | ${BRAND.name}`,
      description,
      url: path,
      images: image
        ? [{ url: image.src, width: image.width, height: image.height, alt: image.alt }]
        : [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BRAND.siteUrl}${c.href}`,
    })),
  };
}
