import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { MAKE_LINKS } from "@/app/lib/makes";

export function MakesStrip({
  tone = "light",
  title = "Makes we service",
  exclude,
}: {
  tone?: "light" | "dark";
  title?: string;
  exclude?: string;
}) {
  const dark = tone === "dark";
  return (
    <div>
      <p className={`kicker ${dark ? "text-ink-muted" : "text-paper-muted"}`}>{title}</p>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
        {MAKE_LINKS.filter((m) => m.href !== exclude).map((m) => (
          <li key={m.href}>
            <Link
              href={m.href}
              className={`display text-3xl transition-colors lg:text-4xl ${dark ? "hover:text-m-light" : "hover:text-m-red"}`}
            >
              {m.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${dark ? "text-ink-muted" : "text-paper-muted"}`}>
        And every other make, foreign or domestic.
        <Link
          href="/european-auto-repair"
          className={`group inline-flex items-center gap-2 font-semibold ${dark ? "text-paper" : "text-ink"}`}
        >
          European auto repair
          <Arrow className="group-hover:translate-x-1" />
        </Link>
      </p>
    </div>
  );
}
