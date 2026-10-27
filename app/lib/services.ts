import type { PhotoKey } from "@/app/lib/photos";

export type Faq = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  name: string;
  shortName: string;
  navBlurb: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  prices: { label: string; value: string; note?: string }[];
  bookingValue: string;
  photo: PhotoKey;
  overview: string[];
  includes: string[];
  signsTitle?: string;
  signs?: string[];
  faqs: Faq[];
  related: string[];
  posts: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "oil-change-maintenance",
    name: "Oil Change & Scheduled Maintenance",
    shortName: "Oil & maintenance",
    navBlurb: "Oil service, filters, fluids and inspections.",
    metaTitle: "Oil Change & Car Maintenance in Palm Bay, FL",
    metaDescription:
      "Oil changes from $60 and scheduled maintenance for BMW and every other make at Paul’s Paddock in Palm Bay, FL. Book online or call (321) 222-5486.",
    headline: "Oil changes & scheduled maintenance.",
    intro:
      "Most expensive repairs start as skipped maintenance. Regular oil service, fresh fluids and a proper look underneath catch small problems while they’re still small.",
    prices: [{ label: "Oil change", value: "$60", note: "About 1 hour" }],
    bookingValue: "oil-change",
    photo: "silver3",
    overview: [
      "Modern engines, especially turbocharged ones, are hard on oil. Heat breaks it down, short trips leave moisture and fuel in it, and in a Florida summer the whole engine runs hotter for longer. Fresh oil of the right specification is the cheapest protection your engine will ever get.",
      "When your car is in for an oil change, we use oil that meets the manufacturer’s specification for your engine and fit a new filter. It’s also the right moment to check the parts that quietly wear out: fluid levels, belts, hoses, tires and brakes. If we spot something, we’ll show you, tell you how urgent it is and let you decide.",
    ],
    includes: [
      "Engine oil that meets your manufacturer’s specification",
      "New oil filter",
      "Coolant, brake fluid and washer fluid level check",
      "Visual check of belts, hoses and leaks",
      "Tire pressure and tread check",
      "A heads-up on anything that’s due soon",
    ],
    signsTitle: "Time to book when",
    signs: [
      "Your service indicator or maintenance reminder is showing",
      "It’s been a year since the last change, even on low miles",
      "You’re about to take a long road trip",
      "You bought the car used and don’t know its history",
    ],
    faqs: [
      {
        q: "How often should I change my oil?",
        a: "Treat your car’s service indicator as the maximum, not the target. Many owners of turbocharged engines, and of cars that spend Florida summers idling in traffic, change it sooner. We’ll recommend an interval for your engine and how you drive.",
      },
      {
        q: "How long does an oil change take?",
        a: "Plan on about an hour.",
      },
      {
        q: "Do you service cars other than BMW?",
        a: "Yes. BMW is our specialty, but we service all makes and models.",
      },
    ],
    related: ["diagnostics", "brake-repair", "tires-alignment"],
    posts: ["bmw-oil-change-interval", "bmw-oil-leaks-valve-cover-oil-filter-housing"],
  },
  {
    slug: "diagnostics",
    name: "Check Engine Light & Diagnostics",
    shortName: "Diagnostics",
    navBlurb: "Warning lights, rough running and electrical faults.",
    metaTitle: "Check Engine Light Diagnostics in Palm Bay, FL",
    metaDescription:
      "Check engine light on? Paul’s Paddock diagnoses warning lights, rough running and electrical faults on BMW and all makes in Palm Bay, FL. $100 diagnostic.",
    headline: "Find the real problem first.",
    intro:
      "A fault code tells you which system is unhappy, not which part to replace. Proper diagnosis is how you avoid paying for parts you didn’t need.",
    prices: [{ label: "Diagnostic", value: "$100", note: "About 1 hour" }],
    bookingValue: "diagnostic",
    photo: "g30Engine",
    overview: [
      "Your car talks through warning lights, rough idles, hesitation, smells and noises. A free code reader can tell you the code. It can’t tell you why it set. A lean code, for example, can come from a vacuum leak, a dirty airflow sensor, a weak fuel pump or a failed crankcase vent valve.",
      "We start with a full scan of the car’s control modules, then test the system the codes point to until we find the cause. You get a clear explanation of what’s wrong, what it will take to fix and what can wait.",
    ],
    includes: [
      "Scan of the engine and chassis control modules",
      "Review of fault codes, freeze-frame and live data",
      "Testing to confirm the cause before any parts are replaced",
      "A plain-English explanation and a quote for the repair",
    ],
    signsTitle: "Signs to get it checked",
    signs: [
      "Check engine light on, or flashing",
      "Rough idle, misfires or hesitation",
      "Warning messages like “drivetrain malfunction”",
      "Fuel economy suddenly worse, or a strong fuel smell",
      "Battery drain or electrical systems acting up",
    ],
    faqs: [
      {
        q: "Is it safe to drive with the check engine light on?",
        a: "If it’s on steady and the car drives normally, get it checked soon. If it’s flashing, that usually means a severe misfire. Slow down, get off the road when it’s safe and don’t keep driving, because unburned fuel can overheat and ruin the catalytic converter.",
      },
      {
        q: "What does the $100 diagnostic cover?",
        a: "Scanning the car, reviewing the fault codes and data, and testing to pin down the cause. If the problem needs deeper investigation, we’ll talk to you before going further.",
      },
      {
        q: "Can’t I just use a free code reader?",
        a: "A free scan tells you the code. Diagnosis tells you the cause. Replacing parts based on a code alone is the most expensive way to fix a car.",
      },
    ],
    related: ["engine-repair", "oil-change-maintenance", "towing-roadside-assistance"],
    posts: ["the-truth-beneath-the-hood", "florida-heat-bmw-cooling-system"],
  },
  {
    slug: "brake-repair",
    name: "Brake Repair & Brake Fluid Service",
    shortName: "Brakes",
    navBlurb: "Pads, rotors, calipers and fluid flushes.",
    metaTitle: "Brake Repair & Brake Fluid Service in Palm Bay, FL",
    metaDescription:
      "Brake pads, rotors, calipers and brake fluid service from $100 at Paul’s Paddock in Palm Bay, FL. BMW specialists, all makes welcome.",
    headline: "Brakes that stop the way they should.",
    intro:
      "Pads and rotors get the attention, but brake fluid matters just as much. We look at the whole system so the car stops straight, quietly and consistently.",
    prices: [{ label: "Brake service", value: "From $100", note: "About 1 hour" }],
    bookingValue: "brakes",
    photo: "liftBrakes",
    overview: [
      "Brakes wear gradually, so most drivers don’t notice the change until something squeals, pulses or puts a light on the dash. Pads wear down, rotors wear thin, caliper slides stick and brake fluid absorbs moisture from the air.",
      "That last one is the most overlooked. Brake fluid pulls water out of the air over time. Water lowers its boiling point and corrodes parts inside the system, including the ABS unit. Most manufacturers, BMW included, call for a brake fluid flush every two years for that reason.",
      "We inspect pads, rotors, calipers, hoses and fluid, then tell you exactly what needs doing. Brake service starts at $100 and the final price depends on what your car needs.",
    ],
    includes: [
      "Pad and rotor inspection and measurement",
      "Brake pad and rotor replacement",
      "Caliper and slide pin service",
      "Brake fluid flush and bleed",
      "Brake wear sensor replacement",
    ],
    signsTitle: "Signs your brakes need work",
    signs: [
      "Squealing or grinding when you brake",
      "Brake pad warning light",
      "Pulsing through the pedal or steering wheel",
      "A soft or spongy pedal, or one that sinks",
      "The car pulls to one side under braking",
    ],
    faqs: [
      {
        q: "How often should brake fluid be changed?",
        a: "Most manufacturers, including BMW, recommend every two years regardless of mileage. If you track the car, do it more often.",
      },
      {
        q: "Do I need new rotors every time I get pads?",
        a: "Not always. We measure the rotors and replace them when they’re below minimum thickness or damaged. On many BMWs the rotors wear along with the pads, so they’re often replaced together.",
      },
      {
        q: "Why does my BMW say to replace the brake wear sensor?",
        a: "BMWs use a wear sensor that triggers the warning when the pads get low. Once it has been triggered, it’s replaced along with the pads.",
      },
    ],
    related: ["tires-alignment", "suspension-repair", "diagnostics"],
    posts: ["the-difference-between-stopping-and-sliding"],
  },
  {
    slug: "engine-repair",
    name: "Engine Repair & Replacement",
    shortName: "Engine repair",
    navBlurb: "Leaks, cooling, ignition and full engine swaps.",
    metaTitle: "Engine Repair & Replacement in Palm Bay, FL",
    metaDescription:
      "Oil leak repair, cooling system work, misfires, turbo repair and engine replacement for BMW and all makes in Palm Bay, FL. Fair labor rate, quoted per job.",
    headline: "Engine work, any size job.",
    intro:
      "From a leaking gasket to a complete engine swap, we take on every scale of engine repair at a fair labor rate with honest parts pricing.",
    prices: [{ label: "Engine repair", value: "Quoted per job" }],
    bookingValue: "engine",
    photo: "engineOut",
    overview: [
      "Engine problems rarely fix themselves. A small oil leak can soak a drive belt, a tired water pump can overheat an aluminum engine, and a misfire left alone can take out a catalytic converter. Catching problems early is almost always cheaper.",
      "Every engine job starts with diagnosis, so we know what’s actually wrong before we quote. For major failures we’ll walk you through the options: repair what’s there, replace the engine, or decide whether the car is worth the investment.",
    ],
    includes: [
      "Oil leaks: valve cover, oil filter housing and oil pan gaskets",
      "Cooling system: water pump, thermostat, radiator, hoses and expansion tank",
      "Ignition: spark plugs, coil packs and misfire repair",
      "Turbo, boost leak and charge pipe repair",
      "Timing chain and VANOS work",
      "Engine replacement",
    ],
    signsTitle: "Signs of engine trouble",
    signs: [
      "Oil spots under the car or a burning oil smell",
      "Temperature warnings or coolant you keep topping up",
      "Misfires, rough running or a loss of power",
      "Knocking, ticking or rattling from the engine",
      "Blue or white smoke from the exhaust",
    ],
    faqs: [
      {
        q: "Should I repair or replace my engine?",
        a: "It depends on what failed, the condition of the rest of the car and what it’s worth to you. We’ll lay out the cost of each option honestly and tell you which way we’d go.",
      },
      {
        q: "Why does my BMW smell like burning oil?",
        a: "Usually a valve cover or oil filter housing gasket leaking onto hot parts. Both are common on BMWs and worth fixing early, because oil on the drive belt can lead to much bigger damage.",
      },
      {
        q: "Do you work on engines other than BMW?",
        a: "Yes. We repair and replace engines on all makes and models.",
      },
    ],
    related: ["diagnostics", "oil-change-maintenance", "exotic-luxury-car-service"],
    posts: [
      "revive-restore-reignite",
      "bmw-oil-leaks-valve-cover-oil-filter-housing",
      "florida-heat-bmw-cooling-system",
    ],
  },
  {
    slug: "suspension-repair",
    name: "Suspension & Steering Repair",
    shortName: "Suspension",
    navBlurb: "Control arms, bushings, shocks and coilovers.",
    metaTitle: "Suspension & Steering Repair in Palm Bay, FL",
    metaDescription:
      "Control arms, bushings, shocks, struts and coilover installs for BMW and all makes in Palm Bay, FL. From daily drivers to track cars.",
    headline: "Planted, quiet and precise.",
    intro:
      "Speed is nothing without control. Worn suspension makes a car wander, clunk and chew through tires, and it adds to your stopping distance.",
    prices: [{ label: "Suspension work", value: "Quoted per job" }],
    bookingValue: "suspension",
    photo: "m4Wheel",
    overview: [
      "Suspension parts wear slowly, so the car feels fine until you drive one with fresh components. Rubber bushings crack and soften, ball joints develop play and shocks lose damping. On many BMWs, the front control arm bushings are a common wear item that shows up as a shimmy under braking or vague steering.",
      "We set suspension up for how the car is actually used. A daily driver needs comfort and long life. A car that sees track days needs something different. Either way, the work is followed by an alignment so the car tracks straight and the tires wear evenly.",
    ],
    includes: [
      "Control arms, ball joints and bushings",
      "Shocks, struts and mounts",
      "Coilover and lowering spring installation",
      "Sway bar links and bushings",
      "Tie rods and steering components",
      "Four-wheel alignment",
    ],
    signsTitle: "Signs of worn suspension",
    signs: [
      "Clunks or knocks over bumps",
      "Steering wheel shimmy, especially under braking",
      "The car wanders or won’t track straight",
      "Uneven or fast tire wear",
      "Bouncing, body roll or nose dive",
    ],
    faqs: [
      {
        q: "Do you install coilovers?",
        a: "Yes. We install and set up coilovers and lowering springs, then align the car to suit how you’ll drive it.",
      },
      {
        q: "Why are my tires wearing on the inside edge?",
        a: "Usually alignment, often caused or made worse by worn suspension parts. Lowered cars with a lot of negative camber also wear the inside edge faster.",
      },
      {
        q: "Do I need an alignment after suspension work?",
        a: "Yes. Replacing parts that locate the wheel changes the alignment, and skipping it is one of the fastest ways to ruin new tires.",
      },
    ],
    related: ["tires-alignment", "brake-repair", "exotic-luxury-car-service"],
    posts: ["the-secret-to-ultimate-control", "signs-you-need-an-alignment"],
  },
  {
    slug: "tires-alignment",
    name: "Tires, Wheel Balancing & Alignment",
    shortName: "Tires & alignment",
    navBlurb: "Mount and balance from $30, alignment $160.",
    metaTitle: "Tire Mounting, Balancing & Wheel Alignment in Palm Bay, FL",
    metaDescription:
      "Tire mounting and balancing from $30 and 4-wheel alignment for $160 at Paul’s Paddock in Palm Bay, FL. Mount and balance available 24/7, call first.",
    headline: "Mounted, balanced and aligned.",
    intro:
      "Tires are the only part of the car touching the road. Proper mounting, balancing and alignment are what let them grip, ride smoothly and last.",
    prices: [
      { label: "Tire mounting & wheel balancing", value: "$30", note: "About 1 hour" },
      { label: "4-wheel alignment", value: "$160", note: "About 1 hour" },
    ],
    bookingValue: "alignment",
    photo: "m4Lift",
    overview: [
      "We mount and balance tires and set four-wheel alignment. Tire mounting and balancing is available 7 days a week, 24 hours. Call first so we’re ready for you.",
      "A four-wheel alignment sets camber, caster and toe to spec so the car tracks straight and the tires wear evenly. It’s worth doing with every new set of tires, after suspension work, or any time the steering wheel isn’t straight.",
    ],
    includes: [
      "Tire mounting",
      "Wheel balancing",
      "Four-wheel alignment",
      "Tire pressure and tread check",
    ],
    signsTitle: "Signs you need an alignment or balance",
    signs: [
      "Steering wheel off-center when driving straight",
      "The car pulls to one side",
      "Vibration at highway speeds",
      "Uneven tire wear",
      "New tires or recent suspension work",
    ],
    faqs: [
      {
        q: "Is tire mounting really available 24/7?",
        a: "Yes, mounting and balancing is available 7 days a week, 24 hours. Please call first so someone is ready for you.",
      },
      {
        q: "How often should I get an alignment?",
        a: "With every new set of tires, after suspension work or a hard pothole hit, and any time the car pulls or the wheel is crooked.",
      },
      {
        q: "Is a vibration an alignment problem?",
        a: "Usually not. A vibration at highway speed is most often a wheel balance issue. Alignment problems show up as pulling and uneven wear.",
      },
    ],
    related: ["suspension-repair", "brake-repair", "oil-change-maintenance"],
    posts: ["signs-you-need-an-alignment", "the-secret-to-ultimate-control"],
  },
  {
    slug: "exotic-luxury-car-service",
    name: "Exotic, Luxury & Performance Car Service",
    shortName: "Exotic & luxury",
    navBlurb: "High-performance, foreign and luxury cars.",
    metaTitle: "Exotic & Luxury Car Service in Palm Bay, FL",
    metaDescription:
      "Service and repair for high-performance, foreign and luxury cars in Palm Bay and across Brevard County. Specialist care at an independent shop.",
    headline: "Precision care for precision machines.",
    intro:
      "Owning an exotic or luxury car is about the experience. These cars need careful handling, the right procedures and real attention to detail.",
    prices: [{ label: "Exotic & luxury service", value: "Call for pricing" }],
    bookingValue: "luxury",
    photo: "serviceBay",
    overview: [
      "High-performance and luxury cars are less forgiving than everyday cars. They use specific fluids, tighter tolerances and procedures that matter, and expensive parts can be damaged by a rushed job or the wrong tool.",
      "We service high-performance, foreign and luxury cars with the same care we give BMWs. Every job is quoted individually, so call us about your car and we’ll talk it through.",
    ],
    includes: [
      "Scheduled maintenance",
      "Diagnostics and electrical faults",
      "Brakes, including large performance brake systems",
      "Suspension and alignment",
      "Engine and cooling system repairs",
      "Detailing",
    ],
    faqs: [
      {
        q: "Which cars do you work on?",
        a: "High-performance, foreign and luxury cars, plus every everyday make. Call with your car’s year, make and model and we’ll let you know.",
      },
      {
        q: "How is pricing handled?",
        a: "Work on these cars is quoted individually, and you approve the quote before anything starts.",
      },
    ],
    related: ["engine-repair", "auto-detailing", "diagnostics"],
    posts: ["the-truth-beneath-the-hood"],
  },
  {
    slug: "auto-detailing",
    name: "Auto Detailing",
    shortName: "Detailing",
    navBlurb: "Interior and exterior detailing, in-house.",
    metaTitle: "Auto Detailing in Palm Bay, FL",
    metaDescription:
      "Interior and exterior car detailing at Paul’s Paddock in Palm Bay, FL. Book it on its own or add it to your next service visit.",
    headline: "Presentation matters.",
    intro:
      "Passion, performance and presentation. Detailing is the third part: the car should leave looking as good as it drives.",
    prices: [{ label: "Detailing", value: "Call for pricing" }],
    bookingValue: "detailing",
    photo: "lineupWide",
    overview: [
      "Florida is hard on cars. The sun bakes paint and interiors, salt air and lovebugs eat at the finish, and summer storms leave water spots. Regular detailing keeps the car protected and makes it a nicer place to be.",
      "Detailing is done in-house. Book it on its own, or add it to a service visit and pick up a car that’s both fixed and clean.",
    ],
    includes: [
      "Interior detailing",
      "Exterior detailing",
      "Wheels, tires and glass",
      "Add-on to any service visit",
    ],
    faqs: [
      {
        q: "How much does detailing cost?",
        a: "It depends on the size and condition of the car. Call us and we’ll quote it.",
      },
      {
        q: "Can I combine detailing with a repair?",
        a: "Yes. Mention it when you book and we’ll detail the car while it’s here.",
      },
    ],
    related: ["exotic-luxury-car-service", "oil-change-maintenance", "tires-alignment"],
    posts: ["florida-heat-bmw-cooling-system"],
  },
  {
    slug: "towing-roadside-assistance",
    name: "Towing & Roadside Assistance",
    shortName: "Towing & roadside",
    navBlurb: "Onsite towing when the car can’t make it in.",
    metaTitle: "Towing & Roadside Assistance in Palm Bay, FL",
    metaDescription:
      "Onsite towing and roadside assistance from Paul’s Paddock in Palm Bay, FL. Call (321) 222-5486 if your car can’t make it to the shop.",
    headline: "If it can’t drive here, we’ll bring it.",
    intro:
      "Onsite towing and roadside assistance for when the car can’t make it to the shop under its own power.",
    prices: [{ label: "Towing & roadside", value: "Call" }],
    bookingValue: "towing",
    photo: "shopFloor",
    overview: [
      "When the car won’t start, won’t stay cool or isn’t safe to drive, don’t risk making it worse. Call us, tell us where you are and what’s happening, and we’ll get it to the shop.",
      "Once it’s here, we diagnose it and call you with what we find before any work starts.",
    ],
    includes: [
      "Towing to the shop",
      "Roadside assistance",
      "Diagnosis once the car arrives",
    ],
    signsTitle: "When to call for a tow",
    signs: [
      "Flashing check engine light",
      "Temperature in the red or steam from under the hood",
      "Oil pressure warning",
      "Grinding brakes or a pedal that goes to the floor",
      "The car won’t start",
    ],
    faqs: [
      {
        q: "How do I request a tow?",
        a: "Call (321) 222-5486 with your location and what the car is doing.",
      },
      {
        q: "Should I keep driving if it’s overheating?",
        a: "No. Pull over, shut the engine off and call. Driving an overheating engine is how a cooling repair turns into an engine replacement.",
      },
    ],
    related: ["diagnostics", "engine-repair", "brake-repair"],
    posts: ["florida-heat-bmw-cooling-system", "the-truth-beneath-the-hood"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
