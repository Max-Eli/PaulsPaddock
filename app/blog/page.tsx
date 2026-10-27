import { CtaBand } from "@/app/components/CtaBand";
import { PageHero } from "@/app/components/PageHero";
import { PostCard } from "@/app/components/PostCard";
import { getAllPosts } from "@/app/lib/blog";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Car Care Blog: BMW & Auto Repair Advice",
    description:
      "Plain-English advice from Paul’s Paddock in Palm Bay, FL: brakes, check engine lights, BMW oil leaks, cooling systems in Florida heat, suspension and more.",
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

export default function BlogPage() {
  const [featured, ...rest] = getAllPosts();
  const categories = [...new Set(getAllPosts().map((p) => p.category))];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", href: "/blog" }]}
        kicker="From the Paddock"
        title="Advice from the shop floor."
        intro="Plain-English articles on keeping your BMW, or whatever you drive, healthy in Florida. Written by the people who fix them."
      >
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c} className="border border-ink-line px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-paper/80">
              {c}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y">
          <h2 className="sr-only">Latest articles</h2>
          <PostCard post={featured} featured />
          <ul className="mt-20 grid gap-x-8 gap-y-16 border-t border-paper-line pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Rather we take a look?" />
    </>
  );
}
