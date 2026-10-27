"use server";

// Booking request submission via Resend. Replaces the old Wix Bookings
// calendar: the request lands in the shop's inbox and they confirm by phone.
//
// Required env vars:
//   RESEND_API_KEY      — https://resend.com (free tier: 3K emails/mo)
//
// Strongly recommended in production:
//   BOOKING_FROM_EMAIL  — sender, e.g. "Paul’s Paddock <bookings@paulspaddock.com>"
//                         Must be on a domain verified in Resend.
//
// Optional:
//   BOOKING_TO_EMAIL    — recipient (defaults to BRAND.email).

import { Resend } from "resend";
import { field, isLikelyBot, tooManyLinks, URL_RE } from "@/app/lib/actions/guard";
import { BOOKING_OPTIONS, BRAND } from "@/app/lib/content";
import type { FormState } from "@/app/lib/booking-types";

type Submission = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
};

const MAX_LEN: Record<keyof Submission, number> = {
  name: 80,
  phone: 30,
  email: 254,
  vehicle: 120,
  service: 60,
  date: 20,
  message: 4000,
};

function looksLikeSpam(d: Submission): boolean {
  for (const key of Object.keys(MAX_LEN) as (keyof Submission)[]) {
    if (d[key].length > MAX_LEN[key]) return true;
  }
  return URL_RE.test(d.name) || URL_RE.test(d.vehicle) || tooManyLinks(d.message);
}

export async function submitBooking(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    // Silent "ok" for anything that looks automated, so bots learn nothing.
    if (await isLikelyBot(formData)) return { status: "ok" };

    const data: Submission = {
      name: field(formData, "name"),
      phone: field(formData, "phone"),
      email: field(formData, "email"),
      vehicle: field(formData, "vehicle"),
      service: field(formData, "service"),
      date: field(formData, "date"),
      message: field(formData, "message"),
    };
    if (looksLikeSpam(data)) return { status: "ok" };

    if (!data.name || !data.phone || !data.vehicle) {
      return {
        status: "error",
        message: "Please add your name, phone number and vehicle.",
      };
    }
    if (data.phone.replace(/\D/g, "").length < 10) {
      return { status: "error", message: "Please check your phone number." };
    }
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
      return { status: "error", message: "Please check your email address." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[booking] RESEND_API_KEY is not set");
      return {
        status: "error",
        message: `Online booking is offline right now. Please call us at ${BRAND.phone}.`,
      };
    }

    const serviceLabel =
      BOOKING_OPTIONS.find((o) => o.value === data.service)?.label ??
      "Not specified";
    const { error } = await new Resend(apiKey).emails.send({
      from:
        process.env.BOOKING_FROM_EMAIL ??
        "Paul’s Paddock Website <onboarding@resend.dev>",
      to: process.env.BOOKING_TO_EMAIL ?? BRAND.email,
      replyTo: data.email || undefined,
      subject: `Booking request: ${serviceLabel}, ${data.vehicle} (${data.name})`,
      text: renderEmailText(data, serviceLabel),
    });
    if (error) {
      console.error("[booking] Resend error:", error);
      return {
        status: "error",
        message: `That didn’t go through. Please call us at ${BRAND.phone}.`,
      };
    }

    return { status: "ok" };
  } catch (err) {
    console.error("[booking] unexpected error:", err);
    return {
      status: "error",
      message: `Something went wrong. Please call us at ${BRAND.phone}.`,
    };
  }
}

function renderEmailText(d: Submission, serviceLabel: string): string {
  return `New booking request from paulspaddock.com

Name:      ${d.name}
Phone:     ${d.phone}
Email:     ${d.email || "-"}
Vehicle:   ${d.vehicle}
Service:   ${serviceLabel}
Preferred: ${d.date || "No preference"}

Notes:
${d.message || "-"}

Call or text them back to confirm a time.${d.email ? " Replying to this email goes straight to the customer." : ""}`;
}
