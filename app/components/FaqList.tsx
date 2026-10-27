import { JsonLd } from "@/app/components/JsonLd";
import { faqSchema } from "@/app/lib/seo";
import type { Faq } from "@/app/lib/services";

export function FaqList({
  faqs,
  schema = true,
  tone = "light",
}: {
  faqs: Faq[];
  schema?: boolean;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "border-ink-line" : "border-paper-line";
  const muted = tone === "dark" ? "text-paper/75" : "text-paper-muted";

  return (
    <div className={`border-t ${line}`}>
      {schema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className={`group border-b ${line}`}>
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-lg font-semibold leading-snug">
            {f.q}
            <span
              aria-hidden
              className="relative mt-1.5 h-3.5 w-3.5 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-[1.5px] before:w-full before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1.5px] after:-translate-x-1/2 after:bg-current after:transition-transform group-open:after:scale-y-0"
            />
          </summary>
          <p className={`-mt-2 max-w-2xl pb-6 leading-relaxed ${muted}`}>
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
