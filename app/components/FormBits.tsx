"use client";

import { useEffect, useRef } from "react";

export const INPUT =
  "mt-2 block w-full border border-paper-line bg-white px-4 py-3 text-base text-ink placeholder:text-paper-muted/70 focus:border-ink focus:outline-none";
export const LABEL = "block text-sm font-semibold";

// Honeypot field plus a fill-time stamp, read by app/lib/actions/guard.ts.
export function SpamGuard() {
  const tsRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now());
  }, []);
  return (
    <>
      <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input ref={tsRef} type="hidden" name="ts" defaultValue="" />
    </>
  );
}

export function FormSuccess({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-paper-line bg-white p-8 lg:p-10" role="status">
      <p className="display text-4xl lg:text-5xl">{title}</p>
      <div className="mt-4 max-w-md text-lg leading-relaxed text-paper-muted">{children}</div>
    </div>
  );
}
