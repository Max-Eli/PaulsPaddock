import Link from "next/link";
import { PRICES } from "@/app/lib/content";

export function PriceBoard({
  variant = "default",
}: {
  variant?: "default" | "compact" | "detailed";
}) {
  const compact = variant === "compact";
  const detailed = variant === "detailed";

  return (
    <ul className="border-t border-paper-line">
      {PRICES.map((p) => (
        <li
          key={p.slug}
          className={`border-b border-paper-line ${compact ? "py-3" : "py-5 sm:py-6"}`}
        >
          <div className="flex items-baseline gap-3">
            {detailed ? (
              <Link
                href={p.href}
                className="min-w-0 text-lg font-semibold hover:underline sm:text-xl"
              >
                {p.name}
              </Link>
            ) : (
              <span
                className={`min-w-0 font-semibold ${compact ? "text-base" : "text-lg sm:text-xl"}`}
              >
                {p.name}
              </span>
            )}
            <span className="leader" />
            {!compact && (
              <span className="hidden font-mono text-sm text-paper-muted sm:inline">
                {p.time}
              </span>
            )}
            <span
              className={`shrink-0 text-right font-mono ${compact ? "text-base" : "text-lg sm:w-28 sm:text-xl"}`}
            >
              {p.from && (
                <span className="mr-1 text-xs uppercase text-paper-muted">from</span>
              )}
              {p.price}
            </span>
            {!compact && (
              <Link
                href={`/book?service=${p.slug}`}
                className="hidden shrink-0 text-sm font-semibold underline decoration-paper-line underline-offset-4 hover:decoration-ink sm:inline"
                aria-label={`Book ${p.name}`}
              >
                Book
              </Link>
            )}
          </div>
          {detailed && (
            <p className="mt-2 max-w-xl text-paper-muted">{p.detail}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
