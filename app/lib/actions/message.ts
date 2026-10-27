"use server";

// General contact form. Same Resend setup as the booking action (see
// booking.ts for env vars); messages go to BOOKING_TO_EMAIL or BRAND.email.

import { Resend } from "resend";
import { field, isLikelyBot, tooManyLinks, URL_RE } from "@/app/lib/actions/guard";
import { BRAND } from "@/app/lib/content";
import type { FormState } from "@/app/lib/booking-types";

export async function submitMessage(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    if (await isLikelyBot(formData)) return { status: "ok" };

    const name = field(formData, "name");
    const phone = field(formData, "phone");
    const email = field(formData, "email");
    const message = field(formData, "message");

    if (
      name.length > 80 ||
      phone.length > 30 ||
      email.length > 254 ||
      message.length > 4000 ||
      URL_RE.test(name) ||
      tooManyLinks(message)
    ) {
      return { status: "ok" };
    }

    if (!name || !message || (!phone && !email)) {
      return {
        status: "error",
        message: "Please add your name, a message and a phone number or email.",
      };
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return { status: "error", message: "Please check your email address." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[message] RESEND_API_KEY is not set");
      return {
        status: "error",
        message: `The form is offline right now. Please call us at ${BRAND.phone}.`,
      };
    }

    const { error } = await new Resend(apiKey).emails.send({
      from:
        process.env.BOOKING_FROM_EMAIL ??
        "Paul’s Paddock Website <onboarding@resend.dev>",
      to: process.env.BOOKING_TO_EMAIL ?? BRAND.email,
      replyTo: email || undefined,
      subject: `Website message from ${name}`,
      text: `New message from paulspaddock.com

Name:  ${name}
Phone: ${phone || "-"}
Email: ${email || "-"}

${message}`,
    });
    if (error) {
      console.error("[message] Resend error:", error);
      return {
        status: "error",
        message: `That didn’t go through. Please call us at ${BRAND.phone}.`,
      };
    }
    return { status: "ok" };
  } catch (err) {
    console.error("[message] unexpected error:", err);
    return {
      status: "error",
      message: `Something went wrong. Please call us at ${BRAND.phone}.`,
    };
  }
}
