import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";
import { MapEmbed } from "@/app/components/MapEmbed";
import { PageHero } from "@/app/components/PageHero";
import { ReviewsLine } from "@/app/components/Reviews";
import { AREAS_SERVED, BRAND, DIRECTIONS_URL } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Directions",
  description:
    "Contact Paul’s Paddock at (321) 222-5486 or visit 2550 Kirby Cir NE, Units 202–203, Palm Bay, FL 32905. Serving Melbourne and all of Brevard County.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        kicker="Contact"
        title="Get in touch."
        intro="Call the shop, send a message or stop by. For appointments, the fastest route is booking online."
      >
        <div className="flex flex-wrap gap-3">
          <a href={BRAND.phoneHref} className="btn btn-light">
            Call {BRAND.phone}
          </a>
          <Link href="/book" className="btn btn-ghost-light">
            Book a service
          </Link>
        </div>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y grid gap-16 lg:grid-cols-12">
          <dl className="grid content-start gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="bg-paper p-7">
              <dt className="kicker text-paper-muted">Phone</dt>
              <dd className="mt-3">
                <a href={BRAND.phoneHref} className="font-mono text-2xl hover:underline">
                  {BRAND.phone}
                </a>
              </dd>
            </div>
            <div className="bg-paper p-7">
              <dt className="kicker text-paper-muted">Email</dt>
              <dd className="mt-3">
                <a href={`mailto:${BRAND.email}`} className="text-lg hover:underline">
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div className="bg-paper p-7">
              <dt className="kicker text-paper-muted">Shop</dt>
              <dd className="mt-3 text-lg leading-snug">
                {BRAND.address.street}, {BRAND.address.unit}
                <br />
                {BRAND.address.city}, {BRAND.address.region} {BRAND.address.zip}
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-3 block text-base"
                >
                  Get directions
                </a>
              </dd>
            </div>
            <div className="bg-paper p-7">
              <dt className="kicker text-paper-muted">Hours</dt>
              <dd className="mt-3 text-lg leading-snug">
                {BRAND.hours
                  ? BRAND.hours.map((h) => (
                      <span key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span className="font-mono text-base">{h.time}</span>
                      </span>
                    ))
                  : "Call for current hours"}
                <span className="mt-1 block text-base text-paper-muted">
                  {BRAND.tireHoursNote}
                </span>
              </dd>
            </div>
            <div className="bg-paper p-7 sm:col-span-2 lg:col-span-1">
              <dt className="kicker text-paper-muted">Reviews & social</dt>
              <dd className="mt-3 space-y-3">
                <ReviewsLine />
                <p className="flex gap-5 text-sm font-semibold">
                  <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="link">
                    Instagram
                  </a>
                  <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" className="link">
                    Facebook
                  </a>
                </p>
              </dd>
            </div>
          </dl>

          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Send a message</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-paper-muted">
              Questions about a repair, a quote or your car? Send it here and
              we’ll get back to you.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <MapEmbed className="block h-[28rem] border-x-0 lg:h-[36rem]" />
      </section>

      <section className="bg-paper">
        <div className="wrap section-y grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="kicker text-paper-muted">Areas served</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">All of Brevard County.</h2>
          </div>
          <ul className="grid grid-cols-2 gap-px border border-paper-line bg-paper-line sm:grid-cols-3 lg:col-span-8">
            {AREAS_SERVED.map((area) => (
              <li key={area} className="bg-paper px-5 py-4 font-semibold">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
