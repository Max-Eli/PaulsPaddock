import Image from "next/image";
import { Stars } from "@/app/components/Stars";
import { BRAND, REVIEWS } from "@/app/lib/content";
import { PHOTOS } from "@/app/lib/photos";

export function Reviews() {
  const photo = PHOTOS.sunset;
  return (
    <section id="reviews" className="bg-paper">
      <div className="wrap section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="kicker text-paper-muted">Reviews</p>
          <p className="display mt-4 text-[clamp(7rem,22vw,15rem)] leading-[0.8]">
            {BRAND.googleReviewCount}
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-semibold">
            reviews on Google, rated {BRAND.googleRating}
            <Stars />
          </p>
          <p className="mt-4 max-w-md text-lg text-paper-muted">
            Over a hundred customers have written about their visit. Read a
            few before you book.
          </p>
          <a
            href={BRAND.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mt-8"
          >
            Read our Google reviews
            <span aria-hidden>↗</span>
          </a>

          {REVIEWS.length > 0 && (
            <ul className="mt-14 grid gap-px border border-paper-line bg-paper-line sm:grid-cols-2">
              {REVIEWS.map((r) => (
                <li key={r.name} className="bg-paper p-6">
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed">“{r.text}”</blockquote>
                  <p className="mt-4 text-sm text-paper-muted">
                    {r.name}
                    {r.car && <span> · {r.car}</span>}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <figure className="lg:col-span-5">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-paper-muted">
            After hours on the Space Coast.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

// Compact rating line for inner pages.
export function ReviewsLine({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a
      href={BRAND.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${tone === "dark" ? "text-paper/85" : "text-ink"}`}
    >
      <Stars size={14} />
      <span className="font-semibold">{BRAND.googleRating} on Google</span>
      <span className={tone === "dark" ? "text-ink-muted" : "text-paper-muted"}>
        from {BRAND.googleReviewCount} reviews ↗
      </span>
    </a>
  );
}
