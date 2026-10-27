import Image from "next/image";
import Link from "next/link";
import { AREAS_SERVED, BRAND, DIRECTIONS_URL } from "@/app/lib/content";
import { MAKE_LINKS } from "@/app/lib/makes";
import { POPULAR_SERVICES } from "@/app/lib/services";

const COMPANY = [
  { href: "/services", label: "All services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About the shop" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a service" },
];

function SocialIcon({ name }: { name: "instagram" | "facebook" | "google" }) {
  const paths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </>
    ),
    facebook: (
      <path
        d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21z"
        fill="currentColor"
      />
    ),
    google: (
      <path
        d="M20.6 12.2c0-.6 0-1.1-.1-1.7H12v3.3h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5zM12 21c2.4 0 4.5-.8 5.9-2.2L15 16.6c-.8.5-1.8.9-3 .9-2.3 0-4.3-1.6-5-3.7H4v2.3A9 9 0 0 0 12 21zM7 13.8a5.4 5.4 0 0 1 0-3.5V7.9H4a9 9 0 0 0 0 8.1zM12 6.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 4 7.9l3 2.4c.7-2.1 2.7-3.7 5-3.7z"
        fill="currentColor"
      />
    ),
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      {paths[name]}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap grid gap-12 border-t border-ink-line py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Image
            src="/logo.jpg"
            alt="Paul’s Paddock logo"
            width={1170}
            height={600}
            className="-ml-[6%] w-full max-w-xs"
          />
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
            {BRAND.descriptor}. Independent BMW specialists in Palm Bay, serving
            Melbourne and all of Brevard County. Every make welcome.
          </p>
          <ul className="mt-6 flex gap-2">
            {(
              [
                ["instagram", BRAND.instagram, "Instagram"],
                ["facebook", BRAND.facebook, "Facebook"],
                ["google", BRAND.googleReviewsUrl, "Google reviews"],
              ] as const
            ).map(([icon, href, label]) => (
              <li key={icon}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink-line text-paper/80 transition-colors hover:border-paper/50 hover:text-paper"
                >
                  <span className="sr-only">{label}</span>
                  <SocialIcon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-4">
          <div>
            <h2 className="kicker text-ink-muted">Popular services</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {POPULAR_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-paper/85 hover:text-paper hover:underline">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="kicker text-ink-muted">Makes</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {MAKE_LINKS.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-paper/85 hover:text-paper hover:underline">
                    {m.name} repair
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/european-auto-repair" className="text-paper/85 hover:text-paper hover:underline">
                  European auto repair
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="kicker text-ink-muted">Company</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-paper/85 hover:text-paper hover:underline">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <h2 className="kicker text-ink-muted">Visit</h2>
            <address className="mt-5 not-italic leading-relaxed text-paper/85">
              {BRAND.address.street}, {BRAND.address.unit}
              <br />
              {BRAND.address.city}, {BRAND.address.region} {BRAND.address.zip}
            </address>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link mt-2 inline-block text-paper/85"
            >
              Get directions
            </a>
            <p className="mt-6">
              <a href={BRAND.phoneHref} className="font-mono text-base hover:underline">
                {BRAND.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${BRAND.email}`} className="text-paper/85 hover:underline">
                {BRAND.email}
              </a>
            </p>
            <p className="mt-6 text-ink-muted">
              {BRAND.hours ? (
                BRAND.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))
              ) : (
                <span className="block">Call for current hours.</span>
              )}
              <span className="block">{BRAND.tireHoursNote}.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <p className="wrap py-6 text-xs leading-relaxed text-ink-muted">
          <span className="font-semibold text-paper/80">Serving Brevard County:</span>{" "}
          {AREAS_SERVED.join(" · ")}
        </p>
      </div>

      <div className="border-t border-ink-line">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy" className="hover:text-paper">
              Privacy policy
            </Link>
            <span>BMW is a trademark of BMW AG. Not affiliated with BMW AG.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
