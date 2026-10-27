import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { PageHero } from "@/app/components/PageHero";
import { PostCard } from "@/app/components/PostCard";
import { ReviewsLine } from "@/app/components/Reviews";
import { BMW_FAQS, BMW_ISSUES, BMW_SERIES } from "@/app/lib/bmw";
import { getAllPosts } from "@/app/lib/blog";
import { BRAND } from "@/app/lib/content";
import { PHOTOS } from "@/app/lib/photos";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "BMW Repair & Service in Palm Bay, FL",
  description:
    "Independent BMW specialist in Palm Bay serving Brevard County. Oil leaks, cooling, misfires, suspension and maintenance for every series, including M cars.",
  path: "/bmw-repair",
  image: PHOTOS.m4Lift,
});

export default function BmwPage() {
  const posts = getAllPosts().filter((p) => p.category === "BMW");
  const engine = PHOTOS.g30Engine;
  const band = PHOTOS.serviceBay;

  return (
    <>
      <PageHero
        crumbs={[{ name: "BMW repair", href: "/bmw-repair" }]}
        kicker="The specialty"
        title="BMW repair & service in Palm Bay"
        intro="BMWs are what we know best. Independent specialist service for every series, from a daily-driven 3 Series to an M car, at an independent shop’s labor rate."
        photo={PHOTOS.m3Front}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/book" className="btn btn-light">
            Book your BMW in
          </Link>
          <ReviewsLine tone="dark" />
        </div>
      </PageHero>

      {/* Why a specialist */}
      <section className="bg-paper">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="kicker text-paper-muted">Why a specialist</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">
              Why choose a BMW specialist
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#2c2c2a] lg:col-span-6">
            <p>
              Every BMW engine and chassis has its own habits. Knowing them means
              faster diagnosis, fewer wasted parts and repairs done in the right
              order. It also means knowing which problems need fixing today and
              which can safely wait for your next visit.
            </p>
            <p>
              You get that knowledge without dealer pricing. We use the right
              fluids and procedures for your car, explain what we find in plain
              English and quote before any work starts.
            </p>
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="kicker text-ink-muted">What we fix most</p>
              <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">
                Common BMW problems we fix
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-paper/80 lg:col-span-5">
              Most BMW trouble comes from a familiar list of wear items. Catch
              them early and they stay affordable.
            </p>
          </div>
          <ul className="mt-12 grid gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {BMW_ISSUES.map((issue) => (
              <li key={issue.title} className="bg-ink">
                <Link
                  href={`/services/${issue.service}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-ink-2"
                >
                  <h3 className="text-xl font-semibold leading-tight">{issue.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-paper/70">{issue.body}</p>
                  <Arrow className="mt-6 text-paper/60 group-hover:translate-x-1 group-hover:text-paper" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Series */}
      <section className="bg-paper">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="kicker text-paper-muted">Models</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">
              BMW models we service
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-muted">
              Sedans, coupes, SAVs and M cars. If it wears the roundel, bring it
              in.
            </p>
            <Image
              src={engine.src}
              alt={engine.alt}
              width={engine.width}
              height={engine.height}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="mt-10 aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-px border border-paper-line bg-paper-line sm:grid-cols-4">
              {BMW_SERIES.map((s) => (
                <li key={s} className="display bg-paper px-5 py-6 text-3xl">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-12 border-l-2 border-m-red pl-6">
              <h3 className="text-xl font-semibold">Your warranty stays intact</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-paper-muted">
                Under the federal Magnuson-Moss Warranty Act, BMW can’t void your
                warranty just because maintenance was done by an independent
                shop. Keep your receipts and follow the factory schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="bg-ink">
        <Image
          src={band.src}
          alt={band.alt}
          width={band.width}
          height={band.height}
          sizes="100vw"
          className="aspect-[16/9] w-full object-cover object-[50%_60%] lg:aspect-[21/8]"
        />
      </section>

      {/* FAQ + reading */}
      <section className="bg-paper">
        <div className="wrap section-y grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">BMW owner questions</h2>
            <div className="mt-10">
              <FaqList faqs={BMW_FAQS} />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="kicker text-paper-muted">For BMW owners</p>
            <ul className="mt-6 space-y-12">
              {posts.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
            <Link href="/blog" className="group mt-10 inline-flex items-center gap-2 font-semibold">
              More from the blog
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={`Bring your BMW to ${BRAND.name}`} />
    </>
  );
}
