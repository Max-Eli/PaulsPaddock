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
  // Blog posts are read from disk. Every page that reads them is prerendered
  // today, but ship the Markdown with server functions too so a page that
  // later becomes dynamic on Vercel still finds them.
  outputFileTracingIncludes: {
    "/*": ["./content/blog/**/*"],
  },
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
      // Service pages that were split into more specific pages.
      { source: "/services/oil-change-maintenance", destination: "/services/oil-change", permanent: true },
      { source: "/services/diagnostics", destination: "/services/check-engine-light", permanent: true },
      { source: "/services/tires-alignment", destination: "/services/wheel-alignment", permanent: true },
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
