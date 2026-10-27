"use client";

import { useActionState } from "react";
import { FormSuccess, INPUT, LABEL, SpamGuard } from "@/app/components/FormBits";
import { submitMessage } from "@/app/lib/actions/message";
import type { FormState } from "@/app/lib/booking-types";
import { BRAND } from "@/app/lib/content";

export function ContactForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitMessage,
    { status: "idle" },
  );

  if (state.status === "ok") {
    return (
      <FormSuccess title="Message sent.">
        Thanks for reaching out. We’ll get back to you shortly. For anything
        urgent, call{" "}
        <a href={BRAND.phoneHref} className="text-ink underline">
          {BRAND.phone}
        </a>
        .
      </FormSuccess>
    );
  }

  return (
    <form action={action} className="grid gap-6 sm:grid-cols-2">
      <SpamGuard />
      <label className={`${LABEL} sm:col-span-2`}>
        Name
        <input name="name" required autoComplete="name" className={INPUT} />
      </label>
      <label className={LABEL}>
        Phone
        <input name="phone" type="tel" autoComplete="tel" className={INPUT} />
      </label>
      <label className={LABEL}>
        Email
        <input name="email" type="email" autoComplete="email" className={INPUT} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Message
        <textarea name="message" rows={6} required className={INPUT} />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm font-semibold text-m-red sm:col-span-2">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button type="submit" disabled={pending} className="btn btn-dark px-6 py-4 disabled:opacity-60">
          {pending ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-paper-muted">Phone or email, so we can reply.</p>
      </div>
    </form>
  );
}
