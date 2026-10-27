import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { PageHero } from "@/app/components/PageHero";
import { ProcessSteps } from "@/app/components/ProcessSteps";
import { ReviewsLine } from "@/app/components/Reviews";
import { ServiceCards } from "@/app/components/ServiceGrid";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Auto Repair Services in Palm Bay, FL",
  description:
    "BMW specialists who work on every make. Diagnostics, brakes, suspension, engine repair, oil changes, tires, alignment, detailing and towing in Palm Bay, FL.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        kicker="Services"
        title="Auto repair services in Palm Bay."
        intro="BMW specialists who work on every make. Diagnostics, brakes, suspension, engine work, tires, detailing and towing, with posted prices on the jobs we do most."
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
          <ServiceCards />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker text-ink-muted">How a visit works</p>
              <h2 className="display mt-4 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)]">
                No surprises on the bill.
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
