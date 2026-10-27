import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { JsonLd } from "@/app/components/JsonLd";
import { MakesStrip } from "@/app/components/MakesStrip";
import { PageHero } from "@/app/components/PageHero";
import { ReviewsLine } from "@/app/components/Reviews";
import { ServiceTiles } from "@/app/components/ServiceGrid";
import { AREAS_SERVED, BRAND } from "@/app/lib/content";
import { getMake } from "@/app/lib/makes";
import { BUSINESS_ID, pageMetadata } from "@/app/lib/seo";
import { getService } from "@/app/lib/services";

export function makeMetadata(slug: string) {
  const make = getMake(slug);
  return pageMetadata({
    title: make.metaTitle,
    description: make.metaDescription,
    path: make.href,
  });
}

export function MakePage({ slug }: { slug: string }) {
  const make = getMake(slug);
  const services = make.services.map((s) => getService(s)).filter((s) => s !== undefined);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${make.name} Repair & Service`,
          serviceType: `${make.name} repair`,
          description: make.metaDescription,
          url: `${BRAND.siteUrl}${make.href}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: AREAS_SERVED.map((name) => `${name}, FL`),
        }}
      />
      <PageHero
        crumbs={[
          { name: "European auto repair", href: "/european-auto-repair" },
          { name: make.name, href: make.href },
        ]}
        kicker="European auto repair"
        title={make.title}
        intro={make.intro}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/book" className="btn btn-light">
            Book your {make.name} in
          </Link>
          <a href={BRAND.phoneHref} className="btn btn-ghost-light">
            Call {BRAND.phone}
          </a>
          <ReviewsLine tone="dark" />
        </div>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="kicker text-paper-muted">Dealer alternative</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">
              Independent {make.name} service
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[#2c2c2a]">
              {make.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <h3 className="kicker text-paper-muted">{make.name} models we see</h3>
            <ul className="mt-4 grid grid-cols-2 gap-px border border-paper-line bg-paper-line sm:grid-cols-3">
              {make.models.map((m) => (
                <li key={m} className="bg-paper px-5 py-5 text-lg font-semibold">
                  {m}
                </li>
              ))}
              {make.models.length % 2 === 1 && (
                <li aria-hidden className="bg-paper sm:hidden" />
              )}
              {Array.from({ length: (3 - (make.models.length % 3)) % 3 }, (_, i) => (
                <li key={i} aria-hidden className="hidden bg-paper sm:block" />
              ))}
            </ul>
            <div className="mt-10 border-l-2 border-m-red pl-6">
              <h3 className="text-xl font-semibold">Your warranty stays intact</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-paper-muted">
                Under the federal Magnuson-Moss Warranty Act, servicing your {make.name} at
                an independent shop doesn’t void the factory warranty. Keep your receipts and
                follow the schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <p className="kicker text-ink-muted">What we see most</p>
          <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">
            Common {make.name} problems
          </h2>
          <ul className="mt-12 grid gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {make.issues.map((issue) => (
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
            {/* Blank cells so an uneven last row doesn't show the hairline color. */}
            {make.issues.length % 2 === 1 && (
              <li aria-hidden className="hidden bg-ink sm:block lg:hidden" />
            )}
            {Array.from({ length: (3 - (make.issues.length % 3)) % 3 }, (_, i) => (
              <li key={i} aria-hidden className="hidden bg-ink lg:block" />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">{make.name} services</h2>
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold">
              All services
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <ServiceTiles services={services} />
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">{make.name} owner questions</h2>
            <div className="mt-10">
              <FaqList faqs={make.faqs} />
            </div>
          </div>
          <div className="lg:col-span-5">
            <MakesStrip title="Other makes we service" exclude={make.href} />
          </div>
        </div>
      </section>

      <CtaBand title={`Bring your ${make.name} to ${BRAND.name}`} />
    </>
  );
}
