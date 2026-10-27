import { PROCESS } from "@/app/lib/content";

export function ProcessSteps({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol
      className={`grid gap-px border ${dark ? "border-ink-line bg-ink-line" : "border-paper-line bg-paper-line"} sm:grid-cols-2 lg:grid-cols-4`}
    >
      {PROCESS.map((step, i) => (
        <li key={step.title} className={`p-7 lg:p-8 ${dark ? "bg-ink" : "bg-paper"}`}>
          <span
            className={`font-mono text-sm ${dark ? "text-ink-muted" : "text-paper-muted"}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
          <p
            className={`mt-3 leading-relaxed ${dark ? "text-paper/75" : "text-paper-muted"}`}
          >
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
