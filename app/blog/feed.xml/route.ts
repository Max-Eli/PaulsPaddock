import { getAllPosts } from "@/app/lib/blog";
import { BRAND } from "@/app/lib/content";

export const dynamic = "force-static";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = getAllPosts()
    .map((p) => {
      const url = `${BRAND.siteUrl}/blog/${p.slug}`;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escape(p.category)}</category>
      <description>${escape(p.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(BRAND.name)} Blog</title>
    <link>${BRAND.siteUrl}/blog</link>
    <description>BMW and auto repair advice from ${escape(BRAND.name)} in Palm Bay, FL.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
