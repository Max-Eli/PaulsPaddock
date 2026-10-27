import Link from "next/link";
import { BRAND } from "@/app/lib/content";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <div className="wrap py-28">
        <p className="kicker text-ink-muted">404</p>
        <h1 className="display mt-6 text-[clamp(3.25rem,9vw,7.5rem)]">Page not found</h1>
        <p className="mt-6 max-w-md text-lg text-paper/85">
          That page doesn’t exist or has moved. Head back to the homepage, browse
          our services or call the shop at{" "}
          <a href={BRAND.phoneHref} className="underline">
            {BRAND.phone}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-light">
            Back to the homepage
          </Link>
          <Link href="/services" className="btn btn-ghost-light">
            All services
          </Link>
        </div>
      </div>
    </section>
  );
}
