import { BookingForm } from "@/app/components/BookingForm";
import { PageHero } from "@/app/components/PageHero";
import { PriceBoard } from "@/app/components/PriceBoard";
import { ReviewsLine } from "@/app/components/Reviews";
import { ADDRESS_ONE_LINE, BOOKING_OPTIONS, BRAND, PROCESS } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Service",
  description:
    "Request a service appointment at Paul’s Paddock in Palm Bay, FL. Oil changes, diagnostics, brakes, tires, alignment, BMW repair and more.",
  path: "/book",
});

export default async function BookPage(props: PageProps<"/book">) {
  const { service } = await props.searchParams;
  const preselect =
    typeof service === "string" && BOOKING_OPTIONS.some((o) => o.value === service)
      ? service
      : undefined;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Book a service", href: "/book" }]}
        kicker="Appointments"
        title="Book a service"
        intro={`Send a request and we’ll call you back to confirm a time. Prefer to talk it through? Call ${BRAND.phone}.`}
      >
        <ReviewsLine tone="dark" />
      </PageHero>

      <section className="bg-paper">
        <div className="wrap section-y grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BookingForm defaultService={preselect} />
          </div>
          <aside className="space-y-12 lg:col-span-5">
            <div>
              <h2 className="kicker text-paper-muted">Posted prices</h2>
              <div className="mt-4">
                <PriceBoard variant="compact" />
              </div>
            </div>
            <div>
              <h2 className="kicker text-paper-muted">What happens next</h2>
              <ol className="mt-4 border-t border-paper-line">
                {PROCESS.slice(1).map((step, i) => (
                  <li key={step.title} className="flex gap-4 border-b border-paper-line py-4">
                    <span className="font-mono text-sm text-paper-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block font-semibold">{step.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-paper-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="kicker text-paper-muted">Where to bring it</h2>
              <p className="mt-3 leading-relaxed">{ADDRESS_ONE_LINE}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
