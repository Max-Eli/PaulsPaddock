"use client";

import { useActionState } from "react";
import { FormSuccess, INPUT, LABEL, SpamGuard } from "@/app/components/FormBits";
import { submitBooking } from "@/app/lib/actions/booking";
import type { FormState } from "@/app/lib/booking-types";
import { BOOKING_OPTIONS, BRAND } from "@/app/lib/content";

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitBooking,
    { status: "idle" },
  );

  if (state.status === "ok") {
    return (
      <FormSuccess title="Request sent.">
        Thanks. We’ll call you to confirm a time and price. If it’s urgent,
        call us at{" "}
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

      <label className={LABEL}>
        Name
        <input name="name" required autoComplete="name" className={INPUT} />
      </label>
      <label className={LABEL}>
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={INPUT} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Year, make & model
        <input name="vehicle" required placeholder="2016 BMW 340i" className={INPUT} />
      </label>
      <label className={LABEL}>
        Service
        <select name="service" defaultValue={defaultService ?? ""} className={INPUT}>
          <option value="">Choose one</option>
          {BOOKING_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        Preferred day <span className="font-normal text-paper-muted">(optional)</span>
        <input name="date" type="date" className={INPUT} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Email <span className="font-normal text-paper-muted">(optional)</span>
        <input name="email" type="email" autoComplete="email" className={INPUT} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        What’s going on with the car?
        <textarea
          name="message"
          rows={5}
          placeholder="Warning lights, noises, when it started, anything you’ve noticed."
          className={INPUT}
        />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm font-semibold text-m-red sm:col-span-2">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button type="submit" disabled={pending} className="btn btn-dark px-6 py-4 disabled:opacity-60">
          {pending ? "Sending…" : "Send booking request"}
        </button>
        <p className="text-sm text-paper-muted">We’ll confirm your time by phone.</p>
      </div>
    </form>
  );
}
