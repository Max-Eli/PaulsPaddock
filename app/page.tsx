import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { FaqList } from "@/app/components/FaqList";
import { MapEmbed } from "@/app/components/MapEmbed";
import { PostCard } from "@/app/components/PostCard";
import { PriceBoard } from "@/app/components/PriceBoard";
import { ProcessSteps } from "@/app/components/ProcessSteps";
import { Reviews, ReviewsLine } from "@/app/components/Reviews";
import { ServiceTiles } from "@/app/components/ServiceGrid";
import { MakesStrip } from "@/app/components/MakesStrip";
import { Stripe } from "@/app/components/Stripe";
import { TrustStrip } from "@/app/components/TrustStrip";
import { BMW_ISSUES } from "@/app/lib/bmw";
import { getAllPosts } from "@/app/lib/blog";
import { BRAND, DIRECTIONS_URL } from "@/app/lib/content";
import { ALL_FAQS } from "@/app/lib/faqs";
import { PHOTOS } from "@/app/lib/photos";
import { SERVICES } from "@/app/lib/services";

const HOME_FAQS = ALL_FAQS.filter((f) =>
  [
    "Do I need an appointment?",
    "What are your hours?",
    "Will I get a quote before work starts?",
    "Do you only work on BMWs?",
    "Will servicing my car at an independent shop void the warranty?",
  ].includes(f.q),
);

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const hero = PHOTOS.m4Lift;
  const shop = PHOTOS.shopFloor;

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className="wrap pt-12 lg:pt-16">
          <p className="kicker text-ink-muted">
            Paul’s Paddock Automotive Repair & Detailing
          </p>
          <h1 className="display mt-6 text-[clamp(3rem,6.2vw,5.75rem)]">
            <span className="block">BMW & European auto repair</span>
            <span className="block text-ink-muted">{"in Palm Bay,\u00a0FL"}</span>
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-paper/85">
              An independent shop that specializes in BMW and services every
              make, foreign or domestic. Tell us what the car is doing and
              we’ll tell you straight what it needs.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/book" className="btn btn-light">
                Book a service
              </Link>
              <a href={BRAND.phoneHref} className="btn btn-ghost-light">
                Call {BRAND.phone}
              </a>
            </div>
          </div>

          <figure className="mt-12 lg:mt-14">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="aspect-[4/3] w-full object-cover object-[60%_50%] sm:aspect-[16/9] lg:aspect-[21/9] lg:object-[50%_62%]"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 text-sm text-ink-muted">
              <span>On the lift at the shop.</span>
              <ReviewsLine tone="dark" />
            </figcaption>
          </figure>
        </div>
        <Stripe className="h-1" />
      </section>

      <TrustStrip />

      {/* Services */}
      <section className="bg-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker text-paper-muted">Services</p>
              <h2 className="display mt-4 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)]">
                Auto repair & maintenance
              </h2>
            </div>
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold">
              All {SERVICES.length} services
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 lg:mt-16">
            <ServiceTiles />
          </div>
          <div className="mt-16 border-t border-paper-line pt-12 lg:mt-20">
            <MakesStrip />
          </div>
        </div>
      </section>

      {/* BMW */}
      <section className="bg-ink text-paper">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-5">
            <Image
              src={shop.src}
              alt={shop.alt}
              width={shop.width}
              height={shop.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-ink-muted">The shop floor.</figcaption>
          </figure>

          <div className="lg:col-span-7">
            <p className="kicker text-ink-muted">Our specialty</p>
            <h2 className="display mt-4 text-[clamp(2.75rem,6vw,4.75rem)]">
              BMW specialists
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-paper/85">
              <p>
                BMWs are what we know best. Daily-driven 3 Series, M cars,
                high-mileage X5s. We know where they tend to fail, what’s worth
                fixing now and what can wait.
              </p>
              <p>
                Everything else is welcome too. Whatever’s on the badge, you get
                honest diagnostics, clear pricing and work we’re happy to put our
                name on.
              </p>
            </div>

            <h3 className="kicker mt-12 text-ink-muted">Common BMW repairs</h3>
            <ul className="mt-4 grid border-t border-ink-line sm:grid-cols-2 sm:gap-x-10">
              {BMW_ISSUES.slice(0, 6).map((issue) => (
                <li key={issue.title} className="border-b border-ink-line py-4 font-semibold">
                  {issue.title}
                </li>
              ))}
            </ul>
            <Link href="/bmw-repair" className="btn btn-light mt-10">
              BMW repair & service
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="bg-paper">
        <div className="wrap section-y grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="kicker text-paper-muted">Pricing</p>
            <h2 className="display mt-4 text-[clamp(2.75rem,5vw,4.75rem)]">
              Posted prices
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper-muted">
              The jobs we do every day, priced before you walk in. Anything
              bigger gets a quote before work starts.
            </p>
            <Link href="/pricing" className="group mt-8 inline-flex items-center gap-2 font-semibold">
              Full pricing
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <PriceBoard />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-paper-line bg-paper-2">
        <div className="wrap section-y">
          <p className="kicker text-paper-muted">What to expect</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)]">
            How a visit works
          </h2>
          <div className="mt-12 lg:mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <Reviews />

      {/* Blog */}
      <section className="border-t border-paper-line bg-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker text-paper-muted">From the blog</p>
              <h2 className="display mt-4 text-[clamp(2.75rem,6vw,4.75rem)]">
                Car care advice
              </h2>
            </div>
            <Link href="/blog" className="group inline-flex items-center gap-2 font-semibold">
              All articles
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-paper-line bg-paper">
        <div className="wrap section-y grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="kicker text-paper-muted">FAQ</p>
            <h2 className="display mt-4 text-[clamp(2.75rem,5vw,4.75rem)]">
              Frequently asked questions
            </h2>
            <Link href="/faq" className="group mt-8 inline-flex items-center gap-2 font-semibold">
              All questions
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={HOME_FAQS} schema={false} />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="kicker text-paper-muted">Visit</p>
            <h2 className="display mt-4 text-[clamp(2.75rem,6vw,4.75rem)]">
              Visit the shop
            </h2>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="kicker text-paper-muted">Address</dt>
                <dd className="mt-2 text-xl leading-snug">
                  {BRAND.address.street}, {BRAND.address.unit}
                  <br />
                  {BRAND.address.city}, {BRAND.address.region} {BRAND.address.zip}
                </dd>
              </div>
              <div>
                <dt className="kicker text-paper-muted">Hours</dt>
                <dd className="mt-2 text-xl leading-snug">
                  Call for current hours
                  <span className="mt-1 block text-base text-paper-muted">
                    {BRAND.tireHoursNote}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="kicker text-paper-muted">Contact</dt>
                <dd className="mt-2 text-xl leading-snug">
                  <a href={BRAND.phoneHref} className="font-mono hover:underline">
                    {BRAND.phone}
                  </a>
                  <br />
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-base text-paper-muted hover:text-ink hover:underline"
                  >
                    {BRAND.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Get directions
              </a>
              <Link href="/contact" className="btn btn-ghost-dark">
                Contact the shop
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed className="aspect-[4/3] h-auto lg:aspect-auto lg:h-full lg:min-h-[32rem]" />
          </div>
        </div>
      </section>
    </>
  );
}
