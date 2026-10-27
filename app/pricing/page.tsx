import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { PageHero } from "@/app/components/PageHero";
import { PriceBoard } from "@/app/components/PriceBoard";
import { BRAND } from "@/app/lib/content";
import { FAQ_GROUPS } from "@/app/lib/faqs";
import { pageMetadata } from "@/app/lib/seo";
import { SERVICES } from "@/app/lib/services";

export const metadata = pageMetadata({
  title: "Auto Repair Prices in Palm Bay, FL",
  description:
    "Posted prices at Paul’s Paddock: oil change $60, diagnostic $100, tire mount and balance $30, brakes from $100, 4-wheel alignment $160. Everything else quoted before work starts.",
  path: "/pricing",
});

const QUOTED = SERVICES.filter((s) => !s.prices.some((p) => p.value.includes("$")));

const HOW = [
  {
    title: "Posted prices",
    body: "The everyday jobs above have published prices, so you know the cost before you book.",
  },
  {
    title: "Brakes depend on the car",
    body: "Brake service starts at $100. The final price depends on whether the car needs pads, rotors, fluid or caliper work.",
  },
  {
    title: "Bigger jobs are quoted",
    body: "Engine, suspension and specialist work are diagnosed first, then quoted. Nothing starts until you approve it.",
  },
];

export default function PricingPage() {
  const pricingFaqs = FAQ_GROUPS.find((g) => g.title === "Pricing & quotes")?.faqs ?? [];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", href: "/pricing" }]}
        kicker="Pricing"
        title="Posted prices. No guesswork."
        intro="The jobs we do every day have published prices. Everything else gets a clear quote before we pick up a wrench."
      />

      <section className="bg-paper">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Shop menu</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper-muted">
              Each of these takes about an hour. Book online and pick the
              service, or call {BRAND.phone}.
            </p>
          </div>
          <div className="lg:col-span-8">
            <PriceBoard variant="detailed" />
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Quoted per job</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper-muted">
              These depend on the car and what it needs, so we price them
              individually.
            </p>
          </div>
          <ul className="border-t border-paper-line lg:col-span-8">
            {QUOTED.map((s) => (
              <li key={s.slug} className="border-b border-paper-line">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-baseline gap-3 py-5 sm:py-6"
                >
                  <span className="text-lg font-semibold group-hover:underline sm:text-xl">
                    {s.shortName}
                  </span>
                  <span className="leader" />
                  <span className="shrink-0 font-mono text-paper-muted">{s.prices[0].value}</span>
                  <Arrow className="group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section-y">
          <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">How quotes work</h2>
          <ol className="mt-12 grid gap-px border border-paper-line bg-paper-line md:grid-cols-3">
            {HOW.map((h, i) => (
              <li key={h.title} className="bg-paper p-7 lg:p-8">
                <span className="font-mono text-sm text-paper-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{h.title}</h3>
                <p className="mt-3 leading-relaxed text-paper-muted">{h.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-3xl font-semibold lg:col-span-4">Pricing questions</h2>
            <div className="lg:col-span-8">
              <FaqList faqs={pricingFaqs} schema={false} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
