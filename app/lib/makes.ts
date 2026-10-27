import type { Faq } from "@/app/lib/services";

// European makes with their own landing pages. BMW has a dedicated, richer
// page at /bmw-repair; the rest share the MakePage template.

export type Make = {
  slug: string;
  name: string;
  href: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  overview: string[];
  models: string[];
  issues: { title: string; body: string; service: string }[];
  faqs: Faq[];
  services: string[];
};

export const MAKE_LINKS = [
  { name: "BMW", href: "/bmw-repair" },
  { name: "MINI", href: "/mini-repair" },
  { name: "Mercedes-Benz", href: "/mercedes-benz-repair" },
  { name: "Audi", href: "/audi-repair" },
  { name: "Volkswagen", href: "/volkswagen-repair" },
  { name: "Porsche", href: "/porsche-repair" },
];

const WARRANTY_FAQ = (make: string): Faq => ({
  q: `Will servicing my ${make} here void the factory warranty?`,
  a: `No. Under the federal Magnuson-Moss Warranty Act, ${make} can’t void your warranty just because maintenance was done at an independent shop. Keep your receipts and follow the factory schedule.`,
});

export const MAKES: Make[] = [
  {
    slug: "mini",
    name: "MINI",
    href: "/mini-repair",
    metaTitle: "MINI Repair & Service in Palm Bay, FL | MINI Cooper Specialists",
    metaDescription:
      "MINI Cooper repair and service in Palm Bay, FL from a BMW specialist. Oil leaks, timing chains, cooling systems and maintenance for every MINI model.",
    title: "MINI repair & service in Palm Bay",
    intro:
      "MINI is part of the BMW family, and modern MINIs share a lot of their engineering with BMW, including engine families, electronics and service procedures. That makes them a natural fit for a BMW specialist.",
    overview: [
      "Since 2014, MINI has used the same three- and four-cylinder engine families as many BMWs, and earlier turbocharged MINIs have their own well-known habits. Knowing those habits means faster diagnosis and fewer wasted parts.",
      "MINIs also use BMW-style Condition Based Service, so the car tracks its own maintenance. We’ll tell you what’s due, what’s coming up and what can wait.",
    ],
    models: ["Cooper", "Cooper S", "John Cooper Works", "Clubman", "Countryman", "Paceman", "Convertible", "Hardtop 2 Door & 4 Door"],
    issues: [
      {
        title: "Timing chain rattle",
        body: "A rattle for a few seconds on a cold start, especially on 2007–2013 turbocharged Cooper S models, often points to a stretched chain or a worn tensioner.",
        service: "engine-repair",
      },
      {
        title: "Oil leaks",
        body: "The oil filter housing, valve cover and oil pan gaskets are common leak points. Oil near the drive belt deserves attention quickly.",
        service: "oil-leak-repair",
      },
      {
        title: "Water pump & thermostat housing",
        body: "Coolant leaks from the water pump and plastic thermostat housing are frequent, and a slow leak can turn into overheating in Florida heat.",
        service: "cooling-system-repair",
      },
      {
        title: "Carbon buildup & misfires",
        body: "Direct-injection MINI engines can build carbon on the intake valves over time, which shows up as rough running and misfires.",
        service: "misfire-ignition-repair",
      },
      {
        title: "Suspension wear",
        body: "Clunks from worn control arm bushings, strut mounts and sway bar links are common as MINIs add miles.",
        service: "suspension-repair",
      },
    ],
    faqs: [
      WARRANTY_FAQ("MINI"),
      {
        q: "Do MINIs use the same engines as BMWs?",
        a: "Since 2014, yes: MINI uses the same B-series three- and four-cylinder engine families found in many BMWs. The 2007–2013 generation used engines developed with Peugeot, which have their own common issues.",
      },
      {
        q: "Why does my MINI rattle on a cold start?",
        a: "On many turbocharged MINIs it’s the timing chain or tensioner. It’s worth having checked soon, because a chain that jumps a tooth can cause serious engine damage.",
      },
    ],
    services: ["oil-change", "oil-leak-repair", "cooling-system-repair", "check-engine-light", "suspension-repair", "brake-repair"],
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    href: "/mercedes-benz-repair",
    metaTitle: "Mercedes-Benz Repair & Service in Palm Bay, FL",
    metaDescription:
      "Mercedes-Benz repair and service in Palm Bay, FL. Service A and Service B, oil leaks, air suspension, transmission and brake work at an independent shop.",
    title: "Mercedes-Benz repair & service in Palm Bay",
    intro:
      "Mercedes-Benz builds comfortable, complex cars with their own maintenance system and their own known weak points. You can have them looked after properly without paying dealer rates.",
    overview: [
      "Most modern Mercedes-Benz models use a flexible maintenance system that alternates Service A and Service B, typically every 10,000 miles or once a year. The car tells you which one is due. We’ll explain what each includes and quote it up front.",
      "Beyond maintenance, Mercedes-Benz models have a familiar list of wear items as they age: oil leaks, air suspension components on cars that have it, transmission service and brakes. Catching them early keeps them affordable.",
    ],
    models: ["C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLC", "GLE", "GLS", "G-Class", "Sprinter", "AMG models"],
    issues: [
      {
        title: "Service A & Service B",
        body: "The alternating factory maintenance visits. Doing them on time, with the right oil and filters, keeps the car healthy and the warranty intact.",
        service: "scheduled-maintenance",
      },
      {
        title: "Oil leaks",
        body: "Valve cover gaskets, oil cooler seals and oil filter housing seals harden with age. Look for a burning smell or spots where you park.",
        service: "oil-leak-repair",
      },
      {
        title: "Air suspension",
        body: "On models with AIRMATIC, a car that sags overnight or a compressor that runs constantly usually means a leaking air strut or a tired compressor.",
        service: "suspension-repair",
      },
      {
        title: "Transmission service",
        body: "Rough or delayed shifts can come from old fluid or electrical faults in the transmission’s control unit. Diagnosis comes first.",
        service: "check-engine-light",
      },
      {
        title: "Brakes & wear sensors",
        body: "Mercedes-Benz uses brake wear sensors that warn when pads get low. Pads, rotors and sensors are usually replaced together.",
        service: "brake-repair",
      },
    ],
    faqs: [
      WARRANTY_FAQ("Mercedes-Benz"),
      {
        q: "What’s the difference between Service A and Service B?",
        a: "Service A is the lighter visit: oil, filter and a set of inspections. Service B adds items like the cabin filter and brake fluid along with a more detailed inspection. They alternate, typically every 10,000 miles or once a year.",
      },
      {
        q: "Why does my Mercedes sit low in the morning?",
        a: "On cars with air suspension, that usually means a slow air leak, most often from an air strut or air line. It’s worth fixing before it overworks and burns out the compressor.",
      },
    ],
    services: ["scheduled-maintenance", "oil-change", "oil-leak-repair", "suspension-repair", "brake-repair", "check-engine-light"],
  },
  {
    slug: "audi",
    name: "Audi",
    href: "/audi-repair",
    metaTitle: "Audi Repair & Service in Palm Bay, FL",
    metaDescription:
      "Audi repair and service in Palm Bay, FL. Cooling system leaks, carbon buildup, ignition coils, oil consumption and maintenance on A3 through Q7 and S models.",
    title: "Audi repair & service in Palm Bay",
    intro:
      "Audis are quick, refined and packed with technology, and their turbocharged engines have a known set of needs as they age. Independent service keeps them that way for less.",
    overview: [
      "Most modern Audis use direct-injection turbocharged engines and all-wheel drive. That combination rewards good maintenance: the right oil, fresh spark plugs and attention to the cooling system, which on many Audi engines uses plastic parts that don’t enjoy Florida heat.",
      "We diagnose before replacing parts, explain what we find and quote up front, whether it’s routine maintenance or a repair.",
    ],
    models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "TT", "S & RS models"],
    issues: [
      {
        title: "Water pump & thermostat housing leaks",
        body: "Many 2.0-liter turbo Audi engines use a plastic water pump and thermostat housing that can crack and leak coolant over time.",
        service: "cooling-system-repair",
      },
      {
        title: "Carbon buildup",
        body: "Direct injection keeps fuel off the intake valves, so carbon can build up there over the years and cause rough running and misfires.",
        service: "misfire-ignition-repair",
      },
      {
        title: "Ignition coils & spark plugs",
        body: "Coil failures cause sudden misfires and a flashing check engine light. Plug intervals on turbo engines are shorter than many owners expect.",
        service: "misfire-ignition-repair",
      },
      {
        title: "Timing chain tensioner",
        body: "Some earlier 2.0-liter turbo engines are known for timing chain tensioner wear. A cold-start rattle is the warning sign.",
        service: "engine-repair",
      },
      {
        title: "Oil leaks & consumption",
        body: "Valve cover and PCV-related leaks are common, and some engines are known for burning oil. Tracking the oil level tells you a lot.",
        service: "oil-leak-repair",
      },
    ],
    faqs: [
      WARRANTY_FAQ("Audi"),
      {
        q: "Why is my Audi losing coolant?",
        a: "On many four-cylinder turbo Audis, a leaking plastic water pump or thermostat housing is the usual cause. A pressure test finds the exact source.",
      },
      {
        q: "Does my Audi need special oil?",
        a: "Yes. Audi specifies oils that carry Volkswagen Group approvals, such as VW 502 00 or 504 00, depending on the engine. We use oil that meets your engine’s approval.",
      },
    ],
    services: ["oil-change", "cooling-system-repair", "misfire-ignition-repair", "check-engine-light", "brake-repair", "scheduled-maintenance"],
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    href: "/volkswagen-repair",
    metaTitle: "Volkswagen Repair & Service in Palm Bay, FL | VW Specialists",
    metaDescription:
      "Volkswagen repair and service in Palm Bay, FL. Golf, GTI, Jetta, Passat, Tiguan and Atlas: cooling leaks, misfires, DSG service and maintenance.",
    title: "Volkswagen repair & service in Palm Bay",
    intro:
      "From a daily Jetta to a hard-driven GTI or Golf R, Volkswagens are fun, efficient cars with a few well-known needs. We look after them at an independent shop’s labor rate.",
    overview: [
      "Most current Volkswagens use turbocharged, direct-injection engines, and many sporty models use the DSG dual-clutch transmission. Both reward good maintenance: oil with the right VW approval, timely spark plugs and transmission service on schedule.",
      "Tuned GTIs and Golf Rs are common, and they’re harder on parts like plugs, coils and clutches. Tell us what’s been done to the car and we’ll take it into account.",
    ],
    models: ["Golf", "GTI", "Golf R", "Jetta", "GLI", "Passat", "Arteon", "Tiguan", "Atlas", "Taos"],
    issues: [
      {
        title: "Water pump & thermostat housing",
        body: "Plastic cooling parts on many VW engines crack with age. A sweet smell or a low coolant warning is the first sign.",
        service: "cooling-system-repair",
      },
      {
        title: "DSG transmission service",
        body: "Wet-clutch DSG transmissions need fluid and filter changes on schedule, often around every 40,000 miles. It’s cheap insurance against expensive repairs.",
        service: "scheduled-maintenance",
      },
      {
        title: "Misfires & ignition coils",
        body: "Coil packs and spark plugs wear faster on turbo engines, especially tuned ones. Misfires usually show up as shaking and a flashing light.",
        service: "misfire-ignition-repair",
      },
      {
        title: "Carbon buildup",
        body: "Direct-injection engines can collect carbon on the intake valves over time, leading to rough idle and lost power.",
        service: "misfire-ignition-repair",
      },
      {
        title: "PCV & oil leaks",
        body: "A failed PCV valve can cause a rough idle, whistling and oil leaks. It’s a common, inexpensive fix once found.",
        service: "oil-leak-repair",
      },
    ],
    faqs: [
      WARRANTY_FAQ("Volkswagen"),
      {
        q: "How often does a DSG need servicing?",
        a: "Volkswagen typically calls for fluid and filter service on wet-clutch DSG transmissions around every 40,000 miles. Your maintenance schedule has the exact interval for your car.",
      },
      {
        q: "Do you work on tuned GTIs and Golf Rs?",
        a: "Yes. Let us know what’s been modified so we can take it into account when diagnosing and choosing parts.",
      },
    ],
    services: ["oil-change", "scheduled-maintenance", "cooling-system-repair", "misfire-ignition-repair", "brake-repair", "wheel-alignment"],
  },
  {
    slug: "porsche",
    name: "Porsche",
    href: "/porsche-repair",
    metaTitle: "Porsche Repair & Service in Palm Bay, FL",
    metaDescription:
      "Porsche service and repair in Palm Bay, FL for 911, Boxster, Cayman, Cayenne, Macan and Panamera. Maintenance, cooling, brakes and diagnostics.",
    title: "Porsche repair & service in Palm Bay",
    intro:
      "A Porsche deserves careful, unhurried work and someone who knows its habits. We service and repair Porsches with the attention they need, at an independent shop’s rate.",
    overview: [
      "Every Porsche generation has its own known issues, from the intermediate shaft bearing on older 911 and Boxster engines to cooling system parts on early Cayennes. Knowing them helps us spot problems early and tell you what really needs doing.",
      "Large performance brakes, specific oils and model-specific procedures all matter on these cars. Every job is quoted before work starts.",
    ],
    models: ["911", "Boxster", "Cayman", "Cayenne", "Macan", "Panamera"],
    issues: [
      {
        title: "IMS bearing",
        body: "On many 1997–2008 911 and Boxster engines, the intermediate shaft bearing is a known risk. We can inspect for warning signs and advise you on options.",
        service: "engine-repair",
      },
      {
        title: "Air-oil separator",
        body: "Smoke on startup, a rough idle or oil consumption on some Porsche engines often traces back to a failed air-oil separator.",
        service: "engine-repair",
      },
      {
        title: "Cooling system",
        body: "Water pumps, radiators and, on early V8 Cayennes, plastic coolant pipes are common failure points, and overheating is never cheap.",
        service: "cooling-system-repair",
      },
      {
        title: "Rear main seal leaks",
        body: "Oil between the engine and transmission on older water-cooled flat-six engines is often the rear main seal.",
        service: "oil-leak-repair",
      },
      {
        title: "Performance brakes",
        body: "Big rotors and multi-piston calipers need the right pads, careful fitting and fresh fluid to work the way they should.",
        service: "brake-repair",
      },
    ],
    faqs: [
      WARRANTY_FAQ("Porsche"),
      {
        q: "Should I worry about the IMS bearing?",
        a: "If you own a 1997–2008 911, Boxster or Cayman with the M96 or M97 engine, it’s worth knowing about. Later engines don’t use the same design. We can check for early warning signs and talk through your options.",
      },
      {
        q: "Do you work on Porsche brakes?",
        a: "Yes, including large multi-piston brake systems. Ceramic composite brakes are specialized, so call us about those first.",
      },
    ],
    services: ["scheduled-maintenance", "cooling-system-repair", "brake-repair", "oil-leak-repair", "check-engine-light", "wheel-alignment"],
  },
];

export function getMake(slug: string) {
  const make = MAKES.find((m) => m.slug === slug);
  if (!make) throw new Error(`Unknown make "${slug}"`);
  return make;
}
