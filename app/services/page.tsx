import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { MakesStrip } from "@/app/components/MakesStrip";
import { PageHero } from "@/app/components/PageHero";
import { ProcessSteps } from "@/app/components/ProcessSteps";
import { ReviewsLine } from "@/app/components/Reviews";
import { ServiceTiles } from "@/app/components/ServiceGrid";
import { pageMetadata } from "@/app/lib/seo";
import { CATEGORIES, servicesInCategory } from "@/app/lib/services";

export const metadata = pageMetadata({
  title: "Auto Repair Services in Palm Bay, FL",
  description:
    "BMW and European auto repair in Palm Bay, FL: oil changes, maintenance, diagnostics, brakes, engine repair, cooling systems, suspension, tires, alignment, detailing and towing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        kicker="Services"
        title="Auto repair services in Palm Bay"
        intro="BMW and European specialists who work on every make. Maintenance, diagnostics, brakes, engine work, suspension, tires, detailing and towing, with posted prices on the jobs we do most."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/book" className="btn btn-light">
            Book a service
          </Link>
          <ReviewsLine tone="dark" />
        </div>
        <nav aria-label="Service categories" className="mt-10 border-t border-ink-line pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="text-paper/75 hover:text-paper">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap divide-y divide-paper-line">
          {CATEGORIES.map((c) => (
            <div
              key={c.id}
              id={c.id}
              className="grid scroll-mt-24 gap-8 py-16 first:pt-20 last:pb-20 lg:grid-cols-12 lg:gap-16 lg:py-20 lg:first:pt-28 lg:last:pb-28"
            >
              <div className="lg:col-span-4">
                <h2 className="display text-[clamp(2.5rem,4.5vw,3.75rem)]">{c.name}</h2>
                <p className="mt-4 max-w-sm text-lg leading-relaxed text-paper-muted">{c.blurb}</p>
              </div>
              <div className="lg:col-span-8">
                <ServiceTiles services={servicesInCategory(c.id)} columns={2} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y">
          <MakesStrip />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker text-ink-muted">What to expect</p>
              <h2 className="display mt-4 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)]">
                How a visit works
              </h2>
            </div>
            <Link href="/pricing" className="group inline-flex items-center gap-2 font-semibold">
              See posted prices
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 lg:mt-16">
            <ProcessSteps tone="dark" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
