import type { NextConfig } from "next";

// Old Wix booking slugs → the service values the new booking form understands.
const WIX_BOOKING_SLUGS: Record<string, string> = {
  "oil-change-1": "oil-change",
  diagnostic: "diagnostic",
  "tire-mounting-and-wheel-balancing": "tire-mount-balance",
  "brake-services": "brakes",
  "4-wheel-alignment": "alignment",
};

const nextConfig: NextConfig = {
  // Keep links from the old Wix site (Google results, the Google Business
  // profile, bookmarks) landing somewhere useful.
  async redirects() {
    return [
      { source: "/book-online", destination: "/book", permanent: true },
      ...Object.entries(WIX_BOOKING_SLUGS).flatMap(([wix, slug]) =>
        ["booking-calendar", "service-page"].map((prefix) => ({
          source: `/${prefix}/${wix}`,
          destination: `/book?service=${slug}`,
          permanent: true,
        })),
      ),
      { source: "/booking-calendar/:slug", destination: "/book", permanent: true },
      { source: "/service-page/:slug", destination: "/book", permanent: true },
      // The old blog posts were rebuilt under the same slugs.
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/blog-feed.xml", destination: "/blog/feed.xml", permanent: true },
      { source: "/category/:slug", destination: "/", permanent: true },
      { source: "/product-page/:slug", destination: "/", permanent: true },
      { source: "/shop", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
