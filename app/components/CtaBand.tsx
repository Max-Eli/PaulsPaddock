import Link from "next/link";
import { Stripe } from "@/app/components/Stripe";
import { BRAND } from "@/app/lib/content";

export function CtaBand({
  title = "Tell us what the car is doing.",
  service,
}: {
  title?: string;
  service?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <Stripe className="h-1" />
      <div className="wrap section-y grid gap-10 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)] lg:col-span-8">
          {title}
        </h2>
        <div className="lg:col-span-4">
          <p className="text-lg leading-relaxed text-paper/80">
            Book online and we’ll call to confirm, or talk to the shop directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={service ? `/book?service=${service}` : "/book"}
              className="btn btn-light"
            >
              Book a service
            </Link>
            <a href={BRAND.phoneHref} className="btn btn-ghost-light">
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
