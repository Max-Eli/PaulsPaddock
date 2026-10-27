import Link from "next/link";
import { BRAND } from "@/app/lib/content";

// Thumb-reach call and book buttons, pinned to the bottom on phones.
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-line bg-ink text-paper md:hidden">
      <a
        href={BRAND.phoneHref}
        className="flex h-16 items-center justify-center gap-2 text-sm font-semibold"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
        Call the shop
      </a>
      <Link
        href="/book"
        className="flex h-16 items-center justify-center bg-paper text-sm font-semibold text-ink"
      >
        Book a service
      </Link>
    </div>
  );
}
