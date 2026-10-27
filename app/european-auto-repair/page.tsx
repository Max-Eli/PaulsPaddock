import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { ReviewsLine } from "@/app/components/Reviews";
import { ServiceTiles } from "@/app/components/ServiceGrid";
import { AREAS_SERVED, BRAND } from "@/app/lib/content";
import { MAKE_LINKS } from "@/app/lib/makes";
import { PHOTOS } from "@/app/lib/photos";
import { BUSINESS_ID, pageMetadata } from "@/app/lib/seo";
import { getService, type Faq } from "@/app/lib/services";

export const metadata = pageMetadata({
  title: "European Auto Repair in Palm Bay, FL",
  description:
    "Independent European auto repair in Palm Bay, FL: BMW, MINI, Mercedes-Benz, Audi, Volkswagen and Porsche. Factory-spec maintenance and repairs without dealer pricing.",
  path: "/european-auto-repair",
  image: PHOTOS.lineupWide,
});

const MAKE_NOTES: Record<string, string> = {
  BMW: "Our specialty. Every series, every generation.",
  MINI: "BMW engineering in a smaller package.",
  "Mercedes-Benz": "Service A and B, air suspension, oil leaks.",
  Audi: "Turbo engines, quattro and cooling systems.",
  Volkswagen: "GTI, Golf R, Jetta, Tiguan and more.",
  Porsche: "911, Boxster, Cayman, Cayenne and Macan.",
};

const WHY = [
  {
    title: "Factory oil approvals",
    body: "BMW, Mercedes-Benz, Volkswagen Group and Porsche each approve specific oils for specific engines. The approval matters more than the brand on the bottle.",
  },
  {
    title: "Known weak points",
    body: "Every European platform has a familiar list of wear items. Knowing them means faster diagnosis, fewer wasted parts and repairs done in the right order.",
  },
  {
    title: "Electronics done properly",
    body: "Battery registration, service reminders and electronic parking brakes need the right procedures, not just a wrench.",
  },
  {
    title: "Your warranty stays intact",
    body: "Under the Magnuson-Moss Warranty Act, servicing your car at an independent shop doesn’t void the factory warranty.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Do you only work on BMWs?",
    a: "No. BMW is our specialty, and we also service MINI, Mercedes-Benz, Audi, Volkswagen, Porsche and every other make, foreign or domestic.",
  },
  {
    q: "Is an independent shop cheaper than the dealer?",
    a: "Usually. Independent shops typically have lower labor rates than dealerships, and every job here is quoted before work starts.",
  },
  {
    q: "Will servicing my European car here void the warranty?",
    a: "No. Under the federal Magnuson-Moss Warranty Act, a manufacturer can’t void your warranty just because maintenance was done at an independent shop. Keep your receipts and follow the factory schedule.",
  },
];

const FEATURED = [
  "oil-change",
  "scheduled-maintenance",
  "check-engine-light",
  "oil-leak-repair",
  "cooling-system-repair",
  "brake-repair",
];

export default function EuropeanPage() {
  const featured = FEATURED.map((s) => getService(s)).filter((s) => s !== undefined);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "European Auto Repair",
          serviceType: "European auto repair",
          description: metadata.description,
          url: `${BRAND.siteUrl}/european-auto-repair`,
          provider: { "@id": BUSINESS_ID },
          areaServed: AREAS_SERVED.map((name) => `${name}, FL`),
        }}
      />
      <PageHero
        crumbs={[{ name: "European auto repair", href: "/european-auto-repair" }]}
        kicker="European auto repair"
        title="European auto repair in Palm Bay"
        intro="BMW is our specialty, and the same attention carries over to MINI, Mercedes-Benz, Audi, Volkswagen and Porsche. Independent service for European cars at an independent shop’s labor rate."
        photo={PHOTOS.lineupWide}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/book" className="btn btn-light">
            Book a service
          </Link>
          <ReviewsLine tone="dark" />
        </div>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y">
          <p className="kicker text-paper-muted">Makes we service</p>
          <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">European makes we service</h2>
          <ul className="mt-12 grid gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
            {MAKE_LINKS.map((m) => (
              <li key={m.href} className="bg-paper">
                <Link
                  href={m.href}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-white lg:p-8"
                >
                  <span className="display text-4xl xl:text-5xl">{m.name}</span>
                  <span className="mt-3 flex-1 leading-relaxed text-paper-muted">
                    {MAKE_NOTES[m.name]}
                  </span>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    {m.name} repair
                    <Arrow className="group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-paper-muted">
            Driving something else? We service every make, foreign or domestic.{" "}
            <Link href="/services" className="link text-ink">
              See all services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <p className="kicker text-ink-muted">Why a specialist</p>
          <h2 className="display mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4rem)]">
            Why choose a European specialist
          </h2>
          <ul className="mt-12 grid gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {WHY.map((w) => (
              <li key={w.title} className="bg-ink p-7 lg:p-8">
                <h3 className="text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Popular European services</h2>
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold">
              All services
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <ServiceTiles services={featured} />
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="display text-[clamp(2.5rem,5vw,4rem)] lg:col-span-4">Frequently asked questions</h2>
          <div className="lg:col-span-8">
            <FaqList faqs={FAQS} />
          </div>
        </div>
      </section>

      <CtaBand title="Bring your European car to Paul’s Paddock" />
    </>
  );
}
