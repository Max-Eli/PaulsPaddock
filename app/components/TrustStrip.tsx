import { BRAND } from "@/app/lib/content";

const ITEMS = [
  { value: BRAND.googleRating, label: "Google rating", href: BRAND.googleReviewsUrl },
  { value: BRAND.googleReviewCount, label: "Customer reviews", href: BRAND.googleReviewsUrl },
  { value: "24/7", label: "Tire mounting & balancing" },
  { value: "Tow", label: "Onsite towing & roadside help" },
];

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-b border-paper-line bg-paper">
      <div className="wrap">
        <ul className="grid grid-cols-2 gap-px bg-paper-line lg:grid-cols-4">
          {ITEMS.map((item) => {
            const body = (
              <>
                <span className="display block text-5xl lg:text-6xl">{item.value}</span>
                <span className="mt-2 block text-sm text-paper-muted">{item.label}</span>
              </>
            );
            return (
              <li
                key={item.label}
                className="bg-paper py-8 pr-4 odd:pl-0 even:pl-5 lg:py-10 lg:pl-8 lg:first:pl-0"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity hover:opacity-75"
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
