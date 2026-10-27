import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { PHOTOS } from "@/app/lib/photos";
import { SERVICES, type ServiceDetail } from "@/app/lib/services";

function priceNote(s: ServiceDetail) {
  return s.prices.map((p) => p.value).join(" · ");
}

// Hairline tile grid used on the homepage and in related-service rows.
export function ServiceTiles({ services = SERVICES }: { services?: ServiceDetail[] }) {
  return (
    <ul className="grid gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug} className="bg-paper">
          <Link
            href={`/services/${s.slug}`}
            className="group flex h-full flex-col p-7 transition-colors hover:bg-white lg:p-8"
          >
            <span className="font-mono text-xs text-paper-muted">{priceNote(s)}</span>
            <h3 className="mt-8 text-2xl font-semibold leading-tight">{s.shortName}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-paper-muted">{s.navBlurb}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              Learn more
              <Arrow className="group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Photo cards for the services overview page.
export function ServiceCards() {
  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const photo = PHOTOS[s.photo];
        return (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="group block">
              <div className="overflow-hidden bg-paper-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-semibold leading-tight">{s.shortName}</h2>
                <span className="shrink-0 font-mono text-xs text-paper-muted">
                  {priceNote(s)}
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-paper-muted">{s.intro}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                {s.name}
                <Arrow className="group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
