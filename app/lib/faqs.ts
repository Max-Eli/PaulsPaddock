import { BRAND } from "@/app/lib/content";
import type { Faq } from "@/app/lib/services";

export const FAQ_GROUPS: { title: string; faqs: Faq[] }[] = [
  {
    title: "Booking & visits",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: `Booking ahead is best so we can plan the day around your car. Request a time online or call ${BRAND.phone}.`,
      },
      {
        q: "What happens after I book online?",
        a: "We’ll call you to confirm a time and talk through what the car needs.",
      },
      {
        q: "Where is the shop?",
        a: `${BRAND.address.street}, ${BRAND.address.unit}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.zip}. We serve drivers across Brevard County, including Melbourne.`,
      },
      {
        q: "What are your hours?",
        a: "Call for current shop hours. Tire mounting and balancing is available 7 days a week, 24 hours. Please call first.",
      },
    ],
  },
  {
    title: "Pricing & quotes",
    faqs: [
      {
        q: "How much is an oil change?",
        a: "$60, and it takes about an hour.",
      },
      {
        q: "How much is a diagnostic?",
        a: "$100. That covers scanning the car, reviewing codes and data, and testing to find the cause.",
      },
      {
        q: "How much do brakes cost?",
        a: "Brake service starts at $100. The final price depends on whether the car needs pads, rotors, fluid or caliper work.",
      },
      {
        q: "Will I get a quote before work starts?",
        a: "Yes. For anything beyond our posted prices, you get a clear quote and nothing is done without your OK.",
      },
    ],
  },
  {
    title: "The cars we work on",
    faqs: [
      {
        q: "Do you only work on BMWs?",
        a: "No. BMW is our specialty, but we service all makes and models.",
      },
      {
        q: "Do you work on exotic and luxury cars?",
        a: "Yes. We service high-performance, foreign and luxury cars. Call with the year, make and model for pricing.",
      },
      {
        q: "Will servicing my car at an independent shop void the warranty?",
        a: "No. Under the federal Magnuson-Moss Warranty Act, a manufacturer can’t void your warranty just because maintenance was done somewhere other than the dealer. Keep your receipts and follow the factory maintenance schedule.",
      },
    ],
  },
  {
    title: "Towing & emergencies",
    faqs: [
      {
        q: "Do you offer towing?",
        a: `Yes. We offer onsite towing and roadside assistance. Call ${BRAND.phone} with your location.`,
      },
      {
        q: "My car is overheating. What should I do?",
        a: "Turn off the AC, pull over when it’s safe and shut the engine off. Don’t open the coolant cap while it’s hot. Then call us for a tow rather than driving on.",
      },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.faqs);
