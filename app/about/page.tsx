import Image from "next/image";
import { CtaBand } from "@/app/components/CtaBand";
import { PageHero } from "@/app/components/PageHero";
import { ProcessSteps } from "@/app/components/ProcessSteps";
import { Reviews } from "@/app/components/Reviews";
import { PHOTOS, type PhotoKey } from "@/app/lib/photos";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "About Paul’s Paddock",
  description:
    "Paul’s Paddock is an independent BMW specialist and auto repair shop in Palm Bay, FL. Honest diagnostics, transparent pricing and quality workmanship for every make.",
  path: "/about",
  image: PHOTOS.shopFloor,
});

const PILLARS = [
  {
    title: "Passion",
    body: "It starts with caring about cars. That’s why we specialize in BMWs, and why the small details on your car get done properly instead of quickly.",
  },
  {
    title: "Performance",
    body: "Honest diagnostics and quality workmanship, from a $60 oil change to a full engine swap. The car should drive the way it was built to.",
  },
  {
    title: "Presentation",
    body: "In-house detailing and a careful, clean job. The car should come back looking as good as it drives.",
  },
];

const GALLERY: { key: PhotoKey; className: string }[] = [
  { key: "liftBrakes", className: "sm:col-span-2 aspect-[16/9]" },
  { key: "g30Hood", className: "sm:row-span-2 aspect-[4/5] sm:aspect-auto" },
  { key: "m4Wheel", className: "aspect-square" },
  { key: "engineOut", className: "aspect-square" },
  { key: "serviceBay", className: "sm:col-span-2 aspect-[16/9]" },
  { key: "m3Front", className: "aspect-[16/9] sm:aspect-auto" },
];

export default function AboutPage() {
  const shop = PHOTOS.shopFloor;
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        kicker="About the shop"
        title="Passion, performance and presentation."
        intro="Our mission is simple: reliable, high-performance automotive care with expert craftsmanship and real customer service."
      />

      <section className="bg-paper">
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
            <figcaption className="mt-3 text-sm text-paper-muted">
              The shop floor in Palm Bay.
            </figcaption>
          </figure>
          <div className="lg:col-span-7 lg:pt-6">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">
              Every car deserves the best.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[#2c2c2a]">
              <p>
                Whether it’s a daily driver, a high-performance machine or a
                luxury import, every car deserves to be looked after properly.
                That idea is what Paul’s Paddock is built on.
              </p>
              <p>
                We’re an independent shop in Palm Bay that specializes in BMWs
                and works on every make. The approach is straightforward: honest
                diagnostics, transparent pricing and work done right the first
                time.
              </p>
              <p>
                We want to be the shop Brevard County drivers trust for
                everything automotive, big or small. That trust gets earned one
                car at a time, which is why your car is never just another job.
                It’s our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <p className="kicker text-ink-muted">What we stand for</p>
          <ul className="mt-10 grid gap-px border border-ink-line bg-ink-line lg:grid-cols-3">
            {PILLARS.map((p) => (
              <li key={p.title} className="bg-ink p-8 lg:p-10">
                <h3 className="display text-[2.75rem] lg:text-[clamp(2.25rem,3.4vw,3.5rem)]">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper/75">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section-y">
          <p className="kicker text-paper-muted">In the shop</p>
          <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">Real cars, real work.</h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {GALLERY.map(({ key, className }) => {
              const photo = PHOTOS[key];
              return (
                <li key={key} className={`relative overflow-hidden bg-paper-2 ${className}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-y border-paper-line bg-paper-2">
        <div className="wrap section-y">
          <p className="kicker text-paper-muted">What to expect</p>
          <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)]">How a visit works.</h2>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <Reviews />
      <CtaBand />
    </>
  );
}
