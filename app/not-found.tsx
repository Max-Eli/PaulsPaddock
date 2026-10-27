import Link from "next/link";
import { BRAND } from "@/app/lib/content";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-10">
        <p className="kicker text-ink-muted">404</p>
        <h1 className="display mt-6 text-[clamp(3.25rem,9vw,7.5rem)]">
          Wrong turn.
        </h1>
        <p className="mt-6 max-w-md text-lg text-paper/85">
          That page doesn’t exist. Head back to the homepage or call the shop
          at{" "}
          <a href={BRAND.phoneHref} className="underline">
            {BRAND.phone}
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-10 inline-block bg-paper px-5 py-3.5 text-sm font-semibold text-ink"
        >
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
