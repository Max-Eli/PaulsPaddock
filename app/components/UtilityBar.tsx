import { Stars } from "@/app/components/Stars";
import { BRAND, DIRECTIONS_URL } from "@/app/lib/content";

export function UtilityBar() {
  return (
    <div className="hidden bg-[#141414] text-xs text-ink-muted lg:block">
      <div className="wrap flex h-10 items-center justify-between gap-6">
        <a
          href={BRAND.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-paper"
        >
          <Stars size={12} />
          <span>
            <span className="text-paper/90">{BRAND.googleRating}</span> on Google
            from {BRAND.googleReviewCount} reviews
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
          >
            {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.region}
          </a>
          <span aria-hidden className="h-3 w-px bg-ink-line" />
          <span>{BRAND.tireHoursNote}</span>
          <span aria-hidden className="h-3 w-px bg-ink-line" />
          <a href={`mailto:${BRAND.email}`} className="hover:text-paper">
            {BRAND.email}
          </a>
        </div>
      </div>
    </div>
  );
}
