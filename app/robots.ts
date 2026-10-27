import type { MetadataRoute } from "next";
import { BRAND } from "@/app/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
  };
}
