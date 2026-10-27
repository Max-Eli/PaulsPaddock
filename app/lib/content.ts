// Every business fact on the site lives here so the owner's details only
// need to change in one place.

export const BRAND = {
  name: "Paul’s Paddock",
  descriptor: "Automotive Repair & Detailing",
  tagline: "Passion, performance and presentation.",
  phone: "(321) 222-5486",
  phoneHref: "tel:+13212225486",
  phoneE164: "+1-321-222-5486",
  email: "paulspaddock@gmail.com",
  // Matches the Google Business Profile. The old Wix page title still had a
  // previous Dow Rd, Melbourne address.
  address: {
    street: "2550 Kirby Cir NE",
    unit: "Units 202–203",
    city: "Palm Bay",
    region: "FL",
    zip: "32905",
  },
  // null renders "Call for current hours" until the owner confirms them.
  hours: null as null | { days: string; time: string }[],
  tireHoursNote: "Tire mounting & balancing 24/7, call first",
  googleReviewsUrl: "https://share.google/zHbIR1zaHswQwJ0VP",
  // From the Google profile, Oct 2026: 5.0 stars across 116 reviews.
  googleRating: "5.0",
  googleReviewCount: "100+",
  facebook: "https://www.facebook.com/PaulsPaddock",
  instagram: "https://www.instagram.com/paulspaddock",
  siteUrl: "https://www.paulspaddock.com",
} as const;

export const ADDRESS_ONE_LINE = `${BRAND.address.street}, ${BRAND.address.unit}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.zip}`;

const mapsQuery = encodeURIComponent(
  `Paul’s Paddock, ${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.zip}`,
);
// Keyless embed, zoom 15. This is the URL Google's `?output=embed` redirects to.
export const MAPS_EMBED_URL = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${mapsQuery}!6i15`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export const AREAS_SERVED = [
  "Palm Bay",
  "Melbourne",
  "West Melbourne",
  "Malabar",
  "Grant-Valkaria",
  "Melbourne Beach",
  "Indialantic",
  "Satellite Beach",
  "Indian Harbour Beach",
  "Viera",
  "Rockledge",
  "Cocoa",
];

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/bmw-repair", label: "BMW" },
  { href: "/european-auto-repair", label: "European" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Posted prices, carried over from the old booking page.
export type PricedService = {
  slug: string;
  name: string;
  time: string;
  price: string;
  from?: boolean;
  detail: string;
  href: string;
};

export const PRICES: PricedService[] = [
  {
    slug: "oil-change",
    name: "Oil change",
    time: "1 hr",
    price: "$60",
    detail: "Oil to your engine’s spec, new filter and a look at fluids, belts and tires.",
    href: "/services/oil-change",
  },
  {
    slug: "diagnostic",
    name: "Diagnostic",
    time: "1 hr",
    price: "$100",
    detail: "Full scan, fault codes and testing to find the actual cause.",
    href: "/services/check-engine-light",
  },
  {
    slug: "tire-mount-balance",
    name: "Tire mounting & wheel balancing",
    time: "1 hr",
    price: "$30",
    detail: "Mount and balance. Available 7 days a week, 24 hours. Call first.",
    href: "/services/tire-mounting-balancing",
  },
  {
    slug: "brakes",
    name: "Brake service",
    time: "1 hr",
    price: "$100",
    from: true,
    detail: "Pads, rotors, calipers or fluid. Final price depends on what the car needs.",
    href: "/services/brake-repair",
  },
  {
    slug: "alignment",
    name: "4-wheel alignment",
    time: "1 hr",
    price: "$160",
    detail: "Camber, caster and toe set on all four wheels.",
    href: "/services/wheel-alignment",
  },
];

// Options for the booking form's service dropdown.
export const BOOKING_OPTIONS = [
  ...PRICES.map((p) => ({ value: p.slug, label: p.name })),
  { value: "maintenance", label: "Scheduled maintenance" },
  { value: "engine", label: "Engine repair, leaks or overheating" },
  { value: "electrical", label: "Electrical, battery or won’t start" },
  { value: "suspension", label: "Suspension" },
  { value: "luxury", label: "Exotic / luxury car service" },
  { value: "detailing", label: "Detailing" },
  { value: "towing", label: "Towing / roadside" },
  { value: "other", label: "Something else" },
];

export const PROCESS = [
  {
    title: "Book or call",
    body: "Request a time online or call the shop. Tell us the car and what it’s doing.",
  },
  {
    title: "Inspect & diagnose",
    body: "We look at the car and find the cause of the problem, not just the code.",
  },
  {
    title: "Clear quote",
    body: "You get a plain explanation and a price. Nothing is done without your OK.",
  },
  {
    title: "Repair & pick up",
    body: "We do the work properly and let you know as soon as the car is ready.",
  },
];

// Real Google reviews, copied word for word with the customer's first name
// and last initial. The reviews section only shows quotes once this has
// entries — never add placeholder or paraphrased reviews here.
export type Review = { name: string; text: string; car?: string };
export const REVIEWS: Review[] = [];
