import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/app/components/Arrow";
import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { JsonLd } from "@/app/components/JsonLd";
import { MakesStrip } from "@/app/components/MakesStrip";
import { PageHero } from "@/app/components/PageHero";
import { ReviewsLine } from "@/app/components/Reviews";
import { ServiceTiles } from "@/app/components/ServiceGrid";
import { getAllPosts } from "@/app/lib/blog";
import { ADDRESS_ONE_LINE, AREAS_SERVED, BRAND } from "@/app/lib/content";
import { PHOTOS } from "@/app/lib/photos";
import { BUSINESS_ID, pageMetadata } from "@/app/lib/seo";
import { CATEGORIES, getService, SERVICES } from "@/app/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: PHOTOS[service.photo],
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const posts = getAllPosts().filter((p) => service.posts.includes(p.slug));
  const bookHref = `/book?service=${service.bookingValue}`;
  const category = CATEGORIES.find((c) => c.id === service.category)?.name ?? "Service";
  const priced = service.prices.filter((p) => p.value.includes("$"));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${BRAND.siteUrl}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED.map((name) => `${name}, FL`),
    ...(priced.length > 0 && {
      offers: priced.map((p) => ({
        "@type": "Offer",
        name: p.label,
        price: p.value.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
      })),
    }),
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.shortName, href: `/services/${service.slug}` },
        ]}
        kicker={`${category} · ${BRAND.address.city}, ${BRAND.address.region}`}
        title={service.name}
        intro={service.intro}
        photo={PHOTOS[service.photo]}
      >
        <dl className="flex flex-wrap gap-x-8 gap-y-4">
          {service.prices.map((p) => (
            <div
              key={p.label}
              className="not-first:border-l not-first:border-ink-line not-first:pl-8"
            >
              <dt className="text-sm text-ink-muted">{p.label}</dt>
              <dd className="mt-1 font-mono text-2xl">{p.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={bookHref} className="btn btn-light">
            Book this service
          </Link>
          <a href={BRAND.phoneHref} className="btn btn-ghost-light">
            Call {BRAND.phone}
          </a>
        </div>
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="text-3xl font-semibold leading-tight lg:text-4xl">
              {service.name} at {BRAND.name}
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[#2c2c2a]">
              {service.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className={`mt-16 grid gap-12 ${service.signs ? "md:grid-cols-2" : ""}`}>
              <div>
                <h3 className="kicker text-paper-muted">What’s included</h3>
                <ul className="mt-4 border-t border-paper-line">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-paper-line py-4 leading-snug"
                    >
                      <span aria-hidden className="mt-2.5 h-0.5 w-3 shrink-0 bg-m-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {service.signs && (
                <div>
                  <h3 className="kicker text-paper-muted">{service.signsTitle}</h3>
                  <ul className="mt-4 border-t border-paper-line">
                    {service.signs.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-b border-paper-line py-4 leading-snug"
                      >
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-16 border-t border-paper-line pt-12">
              <MakesStrip />
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-semibold">Questions about {service.shortName.toLowerCase()}</h2>
              <div className="mt-8">
                <FaqList faqs={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="border border-paper-line bg-white p-7">
                <p className="kicker text-paper-muted">Book this service</p>
                <ul className="mt-5 space-y-3">
                  {service.prices.map((p) => (
                    <li key={p.label} className="flex items-baseline gap-3">
                      <span className="min-w-0 font-semibold">{p.label}</span>
                      <span className="leader" />
                      <span className="shrink-0 font-mono">{p.value}</span>
                    </li>
                  ))}
                </ul>
                <Link href={bookHref} className="btn btn-dark mt-7 w-full">
                  Request an appointment
                </Link>
                <a href={BRAND.phoneHref} className="btn btn-ghost-dark mt-3 w-full">
                  Call {BRAND.phone}
                </a>
                <p className="mt-6 border-t border-paper-line pt-5 text-sm leading-relaxed text-paper-muted">
                  {ADDRESS_ONE_LINE}
                </p>
                <div className="mt-4">
                  <ReviewsLine />
                </div>
              </div>

              {posts.length > 0 && (
                <div className="border border-paper-line p-7">
                  <p className="kicker text-paper-muted">Related reading</p>
                  <ul className="mt-4 space-y-4">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group flex gap-3 font-semibold leading-snug">
                          <span className="flex-1 group-hover:underline">{post.title}</span>
                          <Arrow className="mt-1 group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-2">
        <div className="wrap section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">Related services</h2>
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold">
              All services
              <Arrow className="group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <ServiceTiles services={related} />
          </div>
        </div>
      </section>

      <CtaBand service={service.bookingValue} />
    </>
  );
}
