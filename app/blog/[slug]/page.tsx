import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { JsonLd } from "@/app/components/JsonLd";
import { PostCard, PostMetaLine } from "@/app/components/PostCard";
import { Stripe } from "@/app/components/Stripe";
import { getAllPosts, getPost } from "@/app/lib/blog";
import { BRAND } from "@/app/lib/content";
import { PHOTOS } from "@/app/lib/photos";
import { breadcrumbSchema, BUSINESS_ID, pageMetadata } from "@/app/lib/seo";
import { getService } from "@/app/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: PHOTOS[post.photo],
    type: "article",
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, publishedTime: post.date },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const photo = PHOTOS[post.photo];
  const service = getService(post.service);
  const more = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const url = `${BRAND.siteUrl}/blog/${post.slug}`;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: `${BRAND.siteUrl}${photo.src}`,
          datePublished: post.date,
          dateModified: post.date,
          url,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: BRAND.name, url: BRAND.siteUrl },
          publisher: { "@id": BUSINESS_ID },
        }}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink pb-32 text-paper lg:pb-48">
        <div className="wrap pt-10 lg:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/" className="hover:text-paper">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="hover:text-paper">Blog</Link>
              </li>
            </ol>
          </nav>
          <div className="mx-auto mt-12 max-w-4xl text-center lg:mt-16">
            <div className="flex justify-center">
              <PostMetaLine post={post} tone="dark" />
            </div>
            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]">{post.title}</h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/80 lg:text-xl">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap">
          <figure className="relative -mt-24 lg:-mt-36">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="aspect-[16/9] w-full object-cover lg:aspect-[21/9]"
            />
            <Stripe className="h-1" />
          </figure>

          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="In this article" className="sticky top-28">
                <p className="kicker text-paper-muted">In this article</p>
                <ol className="mt-4 space-y-3 border-l border-paper-line text-sm">
                  {post.toc.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="-ml-px block border-l border-transparent pl-4 leading-snug text-paper-muted hover:border-ink hover:text-ink"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="min-w-0 lg:col-span-6">
              <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

              <div className="mt-16 flex gap-5 border-t border-paper-line pt-8">
                <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink">
                  <Stripe className="h-4 w-6 -skew-x-12" />
                </span>
                <p className="text-sm leading-relaxed text-paper-muted">
                  <span className="block font-semibold text-ink">Written by {BRAND.name}</span>
                  An independent BMW specialist and auto repair shop in Palm Bay,
                  Florida, serving Melbourne and all of Brevard County.{" "}
                  <Link href="/about" className="link text-ink">
                    About the shop
                  </Link>
                </p>
              </div>
            </article>

            {service && (
              <aside className="lg:col-span-3">
                <div className="border border-paper-line bg-white p-6 lg:sticky lg:top-28">
                  <p className="kicker text-paper-muted">Related service</p>
                  <p className="mt-3 text-xl font-semibold leading-tight">{service.name}</p>
                  <p className="mt-2 font-mono text-sm text-paper-muted">
                    {service.prices.map((p) => p.value).join(" · ")}
                  </p>
                  <Link href={`/book?service=${service.bookingValue}`} className="btn btn-dark mt-6 w-full">
                    Book this service
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-4 flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    Learn more
                    <Arrow className="group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Keep reading</h2>
            <Link href="/blog" className="group inline-flex items-center gap-2 font-semibold">
              All articles
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand service={service?.bookingValue} />
    </>
  );
}
