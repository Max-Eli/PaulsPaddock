import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import type { Photo } from "@/app/lib/photos";
import { breadcrumbSchema } from "@/app/lib/seo";

type Crumb = { name: string; href: string };

export function PageHero({
  crumbs,
  kicker,
  title,
  intro,
  children,
  photo,
  photoCaption,
}: {
  crumbs: Crumb[];
  kicker?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  photo?: Photo;
  photoCaption?: string;
}) {
  const trail = [{ name: "Home", href: "/" }, ...crumbs];
  const portrait = photo && photo.height > photo.width;

  return (
    <section className="bg-ink text-paper">
      <JsonLd data={breadcrumbSchema(trail)} />
      <div className="wrap pb-16 pt-10 lg:pb-24 lg:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
            {trail.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-paper/80">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-paper">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={`mt-12 grid gap-12 lg:mt-16 ${photo ? "lg:grid-cols-12 lg:items-end" : ""}`}
        >
          <div className={photo ? "lg:col-span-7" : ""}>
            {kicker && <p className="kicker text-ink-muted">{kicker}</p>}
            <h1
              className={`display mt-5 ${photo ? "text-[clamp(3rem,7vw,6.5rem)]" : "max-w-5xl text-[clamp(3rem,8vw,7.5rem)]"}`}
            >
              {title}
            </h1>
            {intro && (
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/85 lg:text-xl">
                {intro}
              </p>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>

          {photo && (
            <figure className="lg:col-span-5">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={`w-full object-cover ${portrait ? "aspect-[4/5]" : "aspect-[4/3]"}`}
              />
              {photoCaption && (
                <figcaption className="mt-3 text-sm text-ink-muted">
                  {photoCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
