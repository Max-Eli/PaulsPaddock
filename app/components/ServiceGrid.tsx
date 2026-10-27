import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { POPULAR_SERVICES, type ServiceDetail } from "@/app/lib/services";

function priceNote(s: ServiceDetail) {
  return s.prices.map((p) => p.value).join(" · ");
}

// Hairline tile grid used on the homepage, the services index and in
// related-service rows.
export function ServiceTiles({
  services = POPULAR_SERVICES,
  columns = 3,
}: {
  services?: ServiceDetail[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={`grid gap-px border border-paper-line bg-paper-line sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
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
      {/* Blank cells so an uneven last row doesn't show the hairline color. */}
      {Array.from({ length: (2 - (services.length % 2)) % 2 }, (_, i) => (
        <li
          key={`fill-sm-${i}`}
          aria-hidden
          className={`hidden bg-paper sm:block ${columns === 3 ? "lg:hidden" : ""}`}
        />
      ))}
      {columns === 3 &&
        Array.from({ length: (3 - (services.length % 3)) % 3 }, (_, i) => (
          <li key={`fill-lg-${i}`} aria-hidden className="hidden bg-paper lg:block" />
        ))}
    </ul>
  );
}
