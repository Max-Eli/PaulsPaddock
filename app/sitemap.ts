import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/blog";
import { BRAND } from "@/app/lib/content";
import { SERVICES } from "@/app/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${BRAND.siteUrl}${path}`;
  const posts = getAllPosts();

  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: url(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: url("/bmw-repair"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/pricing"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/book"), changeFrequency: "yearly", priority: 0.8 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/faq"), changeFrequency: "monthly", priority: 0.6 },
    {
      url: url("/blog"),
      lastModified: posts[0]?.date,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: url(`/blog/${p.slug}`),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: url("/privacy"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
