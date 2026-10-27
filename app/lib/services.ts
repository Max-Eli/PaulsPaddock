import type { PhotoKey } from "@/app/lib/photos";

export type Faq = { q: string; a: string };

export const CATEGORIES = [
  {
    id: "maintenance",
    name: "Maintenance",
    blurb: "Oil service and the factory schedule that keeps a car out of trouble.",
  },
  {
    id: "diagnostics",
    name: "Diagnostics & electrical",
    blurb: "Warning lights, electrical faults and cars that won’t start.",
  },
  {
    id: "brakes",
    name: "Brakes",
    blurb: "Pads, rotors, calipers and the fluid that makes them work.",
  },
  {
    id: "engine",
    name: "Engine",
    blurb: "From a leaking gasket to a complete engine swap.",
  },
  {
    id: "suspension",
    name: "Suspension, tires & alignment",
    blurb: "Everything between the car and the road.",
  },
  {
    id: "specialty",
    name: "Specialty services",
    blurb: "Exotic and luxury cars, detailing and towing.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type ServiceDetail = {
  slug: string;
  category: CategoryId;
  name: string;
  shortName: string;
  navBlurb: string;
  metaTitle: string;
  metaDescription: string;
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
  // Shown on the homepage and in the footer.
  popular?: boolean;
  // Written but not published until the owner confirms the shop offers it.
  draft?: boolean;
};

const QUOTED = [{ label: "Repair", value: "Quoted per job" }];

const ALL_SERVICES: ServiceDetail[] = [
  // Maintenance
  {
    slug: "oil-change",
    category: "maintenance",
    popular: true,
    name: "Oil Change",
    shortName: "Oil change",
    navBlurb: "Oil to your engine’s spec and a new filter. $60.",
    metaTitle: "Oil Change in Palm Bay, FL | BMW & European Oil Service",
    metaDescription:
      "$60 oil change in Palm Bay, FL with oil that meets your engine’s factory approval and a new filter. BMW and European specialists, every make welcome.",
    intro:
      "Clean oil of the right specification protects every moving part in the engine. Our oil change is $60, takes about an hour and includes a look at the parts that quietly wear out.",
    prices: [{ label: "Oil change", value: "$60", note: "About 1 hour" }],
    bookingValue: "oil-change",
    photo: "silver3",
    overview: [
      "European engines are particular about oil. BMW, Mercedes-Benz, Porsche and Volkswagen each publish their own oil approvals, and the right one depends on the engine, not just the viscosity printed on the bottle. Using oil that carries your engine’s approval matters more than the brand.",
      "Turbochargers and Florida heat both break oil down faster. While the oil drains, we check fluid levels, belts, hoses, tires and brakes, and point out anything that’s due soon so there are no surprises later.",
    ],
    includes: [
      "Oil that meets your manufacturer’s approval for your engine",
      "New oil filter",
      "Coolant, brake fluid and washer fluid level check",
      "Visual check of belts, hoses and leaks",
      "Tire pressure and tread check",
      "A heads-up on anything that’s due soon",
    ],
    signsTitle: "Time to book when",
    signs: [
      "Your service light or reminder is on",
      "A year has passed since the last change, even on low miles",
      "You’ve had a low oil warning",
      "You’re about to take a long road trip",
    ],
    faqs: [
      {
        q: "How often should I change my oil?",
        a: "Treat your car’s service indicator as the maximum, not the target. Many owners of turbocharged engines, and of cars that spend Florida summers idling in traffic, change it sooner. We’ll recommend an interval for your engine and how you drive.",
      },
      {
        q: "What oil do you use?",
        a: "Oil that meets the approval your manufacturer lists for your engine, such as BMW Longlife or Mercedes-Benz 229-series approvals. The approval matters more than the brand on the bottle.",
      },
      {
        q: "How long does it take?",
        a: "Plan on about an hour.",
      },
    ],
    related: ["scheduled-maintenance", "oil-leak-repair", "brake-fluid-flush"],
    posts: ["bmw-oil-change-interval"],
  },
  {
    slug: "scheduled-maintenance",
    category: "maintenance",
    name: "Scheduled Maintenance",
    shortName: "Scheduled maintenance",
    navBlurb: "Factory service schedules and inspections.",
    metaTitle: "Scheduled Car Maintenance in Palm Bay, FL | Factory Service",
    metaDescription:
      "Factory-scheduled maintenance for BMW, MINI, Mercedes-Benz and every other make in Palm Bay, FL. Fluids, filters, plugs and inspections, quoted up front.",
    intro:
      "Every car comes with a maintenance schedule written by the people who built it. Following it is how a car stays reliable for the long haul, and it keeps your factory warranty intact.",
    prices: [{ label: "Maintenance visit", value: "Quoted up front" }],
    bookingValue: "maintenance",
    photo: "g30Hood",
    overview: [
      "Modern European cars track their own maintenance. BMW and MINI use Condition Based Service, Mercedes-Benz alternates Service A and Service B, and most other makes follow a mileage and time schedule. The car tells you what’s due, but not always why it matters or what’s coming up next.",
      "We look at what your car’s schedule calls for, what has already been done and what’s close behind, then quote the visit before we start. Grouping items into one visit usually saves labor compared with doing them one at a time.",
      "Under the federal Magnuson-Moss Warranty Act, maintenance at an independent shop does not void your factory warranty. Keep your receipts and follow the schedule.",
    ],
    includes: [
      "Engine oil and filter",
      "Engine and cabin air filters",
      "Spark plugs",
      "Brake fluid flush",
      "Coolant and other fluid services",
      "Inspection with the findings explained",
    ],
    signsTitle: "Time to book when",
    signs: [
      "Your service indicator shows items due",
      "The car is near a milestone like 30,000, 60,000 or 100,000 miles",
      "You’re not sure what the previous owner had done",
      "Your warranty is ending and you want a once-over first",
    ],
    faqs: [
      {
        q: "Will maintenance at an independent shop void my warranty?",
        a: "No. Under the Magnuson-Moss Warranty Act, a manufacturer can’t void your warranty just because maintenance was done somewhere other than the dealer. Keep the receipts and follow the factory schedule.",
      },
      {
        q: "What are Mercedes-Benz Service A and Service B?",
        a: "Service A is the lighter visit: oil, filter and a set of inspections. Service B adds items like the cabin filter and brake fluid along with a more detailed inspection. They alternate, typically every 10,000 miles or once a year.",
      },
      {
        q: "What is BMW Condition Based Service?",
        a: "CBS tracks each item, such as oil, brakes, brake fluid and vehicle inspections, separately and shows when each one is due in the instrument cluster or iDrive.",
      },
    ],
    related: ["oil-change", "brake-fluid-flush", "cooling-system-repair"],
    posts: ["bmw-oil-change-interval", "the-difference-between-stopping-and-sliding"],
  },

  // Diagnostics & electrical
  {
    slug: "check-engine-light",
    category: "diagnostics",
    popular: true,
    name: "Check Engine Light Diagnosis",
    shortName: "Check engine light",
    navBlurb: "Find the cause, not just the code. $100.",
    metaTitle: "Check Engine Light Diagnosis in Palm Bay, FL",
    metaDescription:
      "Check engine light on? Paul’s Paddock diagnoses warning lights, rough running and drivability problems on BMW, European and all makes in Palm Bay, FL. $100 diagnostic.",
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
    related: ["misfire-ignition-repair", "electrical-diagnostics", "engine-repair"],
    posts: ["the-truth-beneath-the-hood"],
  },
  {
    slug: "electrical-diagnostics",
    category: "diagnostics",
    name: "Electrical Diagnosis & Repair",
    shortName: "Electrical repair",
    navBlurb: "Battery drain, module faults and warning lights.",
    metaTitle: "Car Electrical Diagnosis & Repair in Palm Bay, FL",
    metaDescription:
      "Battery drain, dead modules, intermittent warning lights and electrical faults diagnosed and repaired on BMW, European and all makes in Palm Bay, FL.",
    intro:
      "Modern cars run on dozens of control modules talking over a network. When one misbehaves, the symptom can show up somewhere else entirely, so electrical problems need a methodical approach.",
    prices: [
      { label: "Diagnostic", value: "$100" },
      { label: "Repair", value: "Quoted after diagnosis" },
    ],
    bookingValue: "electrical",
    photo: "serviceBay",
    overview: [
      "A battery that keeps going flat, windows or locks that stop working, a warning light that comes and goes, a module that drops off the network: electrical faults are often intermittent, which makes guessing expensive.",
      "We scan every module, check battery and charging health, measure parasitic drain with the car shut down and follow the wiring diagrams to the fault. You get a clear explanation and a quote before anything is replaced.",
    ],
    includes: [
      "Scan of all control modules",
      "Battery and charging system testing",
      "Parasitic draw testing for battery drain",
      "Wiring and connector diagnosis",
      "Sensor and module replacement",
    ],
    signsTitle: "Signs of an electrical fault",
    signs: [
      "The battery dies after the car sits",
      "Warning lights that come and go",
      "Windows, locks or lights acting up",
      "Messages about the electrical system or battery",
    ],
    faqs: [
      {
        q: "Why does my battery keep dying?",
        a: "Either the battery is failing, the charging system isn’t keeping it topped up, or something is drawing power with the car off. Testing tells you which, so you don’t replace a good battery.",
      },
      {
        q: "How long do electrical problems take to find?",
        a: "Some take minutes, intermittent ones take longer. We’ll tell you what we’ve found and what it will take before going further.",
      },
    ],
    related: ["battery-alternator-starter", "check-engine-light", "scheduled-maintenance"],
    posts: ["the-truth-beneath-the-hood"],
  },
  {
    slug: "battery-alternator-starter",
    category: "diagnostics",
    name: "Battery, Alternator & Starter Repair",
    shortName: "Battery & starting",
    navBlurb: "Batteries, alternators and starters.",
    metaTitle: "Battery, Alternator & Starter Replacement in Palm Bay, FL",
    metaDescription:
      "Car won’t start? Battery testing and replacement plus alternator and starter repair for BMW, European and all makes in Palm Bay, FL. Towing available.",
    intro:
      "A car that won’t start usually comes down to three parts: the battery, the starter, or the alternator that keeps the battery charged. Testing tells you which one before you spend money.",
    prices: QUOTED,
    bookingValue: "electrical",
    photo: "m3Front",
    overview: [
      "Florida heat is harder on batteries than cold weather. High under-hood temperatures speed up the wear inside, so batteries here tend to fail sooner and with less warning than they do up north.",
      "We test the battery, the charging output and the starter, then replace only what has actually failed. Many European cars use AGM batteries, and BMWs need a new battery registered to the car so the charging system treats it correctly. That’s part of the job.",
    ],
    includes: [
      "Battery testing and replacement, including AGM batteries",
      "Battery registration on BMWs and other cars that need it",
      "Alternator testing and replacement",
      "Starter replacement",
      "Battery cable and terminal repair",
    ],
    signsTitle: "Signs of trouble",
    signs: [
      "Slow or labored cranking",
      "Clicking when you turn the key or press start",
      "Battery or charging warning light",
      "Dim lights or electrical glitches while driving",
      "A battery more than a few years old",
    ],
    faqs: [
      {
        q: "How long does a car battery last in Florida?",
        a: "Often three to four years, sometimes less. Heat is the main reason batteries fail sooner here.",
      },
      {
        q: "Why does my BMW need battery registration?",
        a: "The car adjusts how it charges based on the battery’s type and age. Registering a new battery tells the car to charge it as a new one, which helps it last.",
      },
      {
        q: "My car won’t start. Can you tow it in?",
        a: "Yes. Call (321) 222-5486 with your location and we’ll arrange to get it to the shop.",
      },
    ],
    related: ["electrical-diagnostics", "towing-roadside-assistance", "check-engine-light"],
    posts: [],
  },

  // Brakes
  {
    slug: "brake-repair",
    category: "brakes",
    popular: true,
    name: "Brake Repair",
    shortName: "Brake repair",
    navBlurb: "Pads, rotors, calipers and sensors. From $100.",
    metaTitle: "Brake Repair in Palm Bay, FL | Pads, Rotors & Calipers",
    metaDescription:
      "Brake pads, rotors, calipers and wear sensors from $100 at Paul’s Paddock in Palm Bay, FL. BMW and European specialists, all makes welcome.",
    intro:
      "We look at the whole brake system, not just the pads, so the car stops straight, quietly and consistently. Brake service starts at $100.",
    prices: [{ label: "Brake service", value: "From $100", note: "About 1 hour" }],
    bookingValue: "brakes",
    photo: "liftBrakes",
    overview: [
      "Brakes wear gradually, so most drivers don’t notice the change until something squeals, pulses or puts a light on the dash. Pads wear down, rotors wear thin or develop uneven deposits, and caliper slides stick so the pads drag.",
      "We measure pad and rotor thickness, check calipers, hoses and fluid, then tell you exactly what needs doing and what doesn’t. Brake service starts at $100 and the final price depends on what your car needs.",
    ],
    includes: [
      "Pad and rotor inspection and measurement",
      "Brake pad and rotor replacement",
      "Caliper and slide pin service",
      "Brake wear sensor replacement",
      "Brake hose inspection",
    ],
    signsTitle: "Signs your brakes need work",
    signs: [
      "Squealing or grinding when you brake",
      "Brake pad warning light",
      "Pulsing through the pedal or steering wheel",
      "The car pulls to one side under braking",
    ],
    faqs: [
      {
        q: "Do I need new rotors every time I get pads?",
        a: "Not always. We measure the rotors and replace them when they’re below minimum thickness or damaged. On many BMWs the rotors wear along with the pads, so they’re often replaced together.",
      },
      {
        q: "Why does my BMW say to replace the brake wear sensor?",
        a: "BMWs use a wear sensor that triggers the warning when the pads get low. Once it has been triggered, it’s replaced along with the pads.",
      },
      {
        q: "Why is my car pulsing when I brake?",
        a: "Usually uneven pad deposits on the rotors or rotors that have worn unevenly. It can also come from worn suspension parts, which we check at the same time.",
      },
    ],
    related: ["brake-fluid-flush", "wheel-alignment", "suspension-repair"],
    posts: ["the-difference-between-stopping-and-sliding"],
  },
  {
    slug: "brake-fluid-flush",
    category: "brakes",
    name: "Brake Fluid Flush",
    shortName: "Brake fluid flush",
    navBlurb: "Fresh fluid every two years.",
    metaTitle: "Brake Fluid Flush in Palm Bay, FL",
    metaDescription:
      "Brake fluid absorbs water and loses stopping power over time. Complete brake fluid flush and bleed for BMW, European and all makes in Palm Bay, FL.",
    intro:
      "Brake fluid absorbs moisture from the air every day. After about two years it holds enough water to lower its boiling point and start corroding the brake system from the inside.",
    prices: [{ label: "Brake service", value: "From $100", note: "About 1 hour" }],
    bookingValue: "brakes",
    photo: "shopFloor",
    overview: [
      "Fresh DOT 4 brake fluid has to resist boiling up to at least 230°C (446°F). Once it has absorbed a few percent water, the standard only requires 155°C (311°F). Under hard braking the fluid can boil, the pedal goes soft and the car takes longer to stop.",
      "A proper flush pushes new fluid through every line and caliper until the old fluid is gone, then bleeds out any air. Topping up the reservoir doesn’t do that. Most manufacturers, BMW included, call for a flush every two years regardless of mileage.",
    ],
    includes: [
      "Complete flush of every brake line and caliper",
      "Bleeding to remove air from the system",
      "Fluid that meets your manufacturer’s specification",
      "Brake inspection while the car is in",
    ],
    signsTitle: "Time for a flush when",
    signs: [
      "It’s been two years since the last flush",
      "Your service indicator shows brake fluid due",
      "The pedal feels soft or spongy",
      "The fluid in the reservoir looks dark",
      "You track the car or brake hard often",
    ],
    faqs: [
      {
        q: "Is a brake fluid flush really necessary?",
        a: "Yes. Old fluid boils at a lower temperature and corrodes parts inside the system, including the ABS unit, which costs far more than a flush.",
      },
      {
        q: "Can’t I just top it up?",
        a: "Topping up mixes fresh fluid with old, water-logged fluid. A flush replaces all of it.",
      },
    ],
    related: ["brake-repair", "scheduled-maintenance", "oil-change"],
    posts: ["the-difference-between-stopping-and-sliding"],
  },

  // Engine
  {
    slug: "engine-repair",
    category: "engine",
    popular: true,
    name: "Engine Repair",
    shortName: "Engine repair",
    navBlurb: "Every scale of engine work, done in-house.",
    metaTitle: "Engine Repair in Palm Bay, FL | BMW & European Engines",
    metaDescription:
      "Engine repair for BMW, European and all makes in Palm Bay, FL. Leaks, cooling, misfires, turbos, timing and more at a fair labor rate, quoted per job.",
    intro:
      "From a leaking gasket to a complete rebuild, we take on every scale of engine repair at a fair labor rate with honest parts pricing.",
    prices: QUOTED,
    bookingValue: "engine",
    photo: "engineOut",
    overview: [
      "Engine problems rarely fix themselves. A small oil leak can soak a drive belt, a tired water pump can overheat an aluminum engine, and a misfire left alone can take out a catalytic converter. Catching problems early is almost always cheaper.",
      "Every engine job starts with diagnosis, so we know what’s actually wrong before we quote. For major failures we’ll walk you through the options: repair what’s there, replace the engine, or decide whether the car is worth the investment.",
    ],
    includes: [
      "Oil leak repair",
      "Cooling system and overheating repair",
      "Misfire, coil and spark plug repair",
      "Turbo, charge pipe and boost leak repair",
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
        q: "What does a timing chain rattle mean?",
        a: "A rattle for a few seconds on a cold start often means a worn chain, guide or tensioner. It’s worth checking soon, because a chain that jumps a tooth can cause serious engine damage.",
      },
      {
        q: "Do you work on engines other than BMW?",
        a: "Yes. We repair engines on all makes and models.",
      },
    ],
    related: ["engine-replacement", "oil-leak-repair", "cooling-system-repair"],
    posts: ["revive-restore-reignite", "bmw-oil-leaks-valve-cover-oil-filter-housing"],
  },
  {
    slug: "engine-replacement",
    category: "engine",
    name: "Engine Replacement",
    shortName: "Engine replacement",
    navBlurb: "Used, remanufactured or rebuilt engines.",
    metaTitle: "Engine Replacement in Palm Bay, FL | BMW & European Engines",
    metaDescription:
      "Engine replacement for BMW, European and all makes in Palm Bay, FL. Honest advice on repair versus replacement, fair labor rate, quoted per job.",
    intro:
      "When an engine is beyond repair, a replacement can put a good car back on the road for far less than buying another one. We handle the whole job, start to finish.",
    prices: QUOTED,
    bookingValue: "engine",
    photo: "engineOut",
    overview: [
      "Replacement makes sense when the damage is internal and severe: a spun bearing, a cracked block, a seized engine, or major damage from a timing failure or serious overheating. Before recommending it, we confirm the diagnosis with tests like compression and leak-down checks, so you don’t replace an engine that could have been repaired.",
      "We’ll talk through the options for your car, whether that’s a used engine, a remanufactured unit or a rebuild, with what each costs. While the engine is out is also the cheapest time to replace hard-to-reach parts like seals, mounts and hoses, and we’ll tell you which are worth doing.",
    ],
    includes: [
      "Diagnosis to confirm the engine needs replacing",
      "Sourcing a used, remanufactured or rebuilt engine",
      "Removal and installation",
      "Seals, mounts and hoses replaced while the engine is out",
      "Fluids, setup and final checks",
    ],
    signsTitle: "When replacement is on the table",
    signs: [
      "Knocking from the bottom of the engine",
      "Metal in the oil",
      "Low or no compression in one or more cylinders",
      "The engine has seized or won’t turn over",
      "Damage from severe overheating",
    ],
    faqs: [
      {
        q: "Is it worth replacing the engine in my car?",
        a: "If the rest of the car is in good shape, often yes. A replacement engine is a big repair, but it’s usually cheaper than buying another car and inheriting its unknown problems. We’ll tell you honestly if we think it isn’t worth it.",
      },
      {
        q: "Used, remanufactured or rebuilt?",
        a: "A used engine is usually the least expensive. A remanufactured engine costs more but comes back to factory specification, often with a warranty from the supplier. We’ll quote what’s available for your car.",
      },
    ],
    related: ["engine-repair", "cooling-system-repair", "check-engine-light"],
    posts: ["revive-restore-reignite"],
  },
  {
    slug: "oil-leak-repair",
    category: "engine",
    popular: true,
    name: "Oil Leak Repair",
    shortName: "Oil leak repair",
    navBlurb: "Valve cover, oil filter housing and oil pan gaskets.",
    metaTitle: "Oil Leak Repair in Palm Bay, FL | Valve Cover & Oil Filter Housing Gaskets",
    metaDescription:
      "Burning oil smell or drips under the car? Valve cover, oil filter housing and oil pan gasket repair for BMW, MINI and European cars in Palm Bay, FL.",
    intro:
      "Oil leaks rarely fix themselves, and on many European engines the oil lands somewhere it can do real damage. Finding the true source the first time saves paying for the wrong gasket.",
    prices: QUOTED,
    bookingValue: "engine",
    photo: "g30Hood",
    overview: [
      "Oil runs downhill and spreads, so where you see it is often not where it’s coming from. We clean the area, trace the leak to its source and quote the right repair.",
      "On BMW and MINI engines, the two most common leaks are the oil filter housing gasket and the valve cover gasket. The oil filter housing sits above the drive belt. When it leaks, oil can soak the belt until it slips or shreds, and on some engines pieces of a shredded belt can be pulled into the front of the engine. That’s why it’s worth fixing early.",
    ],
    includes: [
      "Leak source diagnosis",
      "Oil filter housing gasket replacement",
      "Valve cover and gasket replacement",
      "Oil pan gasket replacement",
      "Crankshaft seal replacement",
      "Drive belt replacement when it’s oil-soaked",
    ],
    signsTitle: "Signs of an oil leak",
    signs: [
      "Burning oil smell after driving",
      "Light smoke from the engine bay at stops",
      "Oil spots where you park",
      "The oil level dropping between changes",
      "Misfires from oil in the spark plug wells",
    ],
    faqs: [
      {
        q: "Is a small oil leak a big deal?",
        a: "It can be. Oil on hot exhaust parts smokes and can catch fire, oil on belts and rubber hoses breaks them down, and a steady leak can leave the engine low on oil.",
      },
      {
        q: "Why do BMWs leak oil?",
        a: "Many BMW engines from the mid-2000s onward use rubber gaskets and plastic parts that harden after years of heat cycles. It’s a normal wear item on these engines, not a sign something is wrong with your particular car.",
      },
    ],
    related: ["engine-repair", "oil-change", "cooling-system-repair"],
    posts: ["bmw-oil-leaks-valve-cover-oil-filter-housing"],
  },
  {
    slug: "cooling-system-repair",
    category: "engine",
    popular: true,
    name: "Cooling System & Overheating Repair",
    shortName: "Cooling system",
    navBlurb: "Water pumps, thermostats, radiators and leaks.",
    metaTitle: "Cooling System & Overheating Repair in Palm Bay, FL",
    metaDescription:
      "Overheating or losing coolant? Water pump, thermostat, radiator, hose and expansion tank repair for BMW, European and all makes in Palm Bay, FL.",
    intro:
      "Overheating is one of the fastest ways to turn a repair into an engine replacement. Florida summers push cooling systems hard, so small leaks and tired parts are worth catching early.",
    prices: QUOTED,
    bookingValue: "engine",
    photo: "serviceBay",
    overview: [
      "Most modern engines are aluminum, which doesn’t tolerate overheating. Running hot, even briefly, can warp a cylinder head or blow a head gasket. If the temperature warning comes on, pull over and shut the engine off rather than trying to make it home.",
      "Many BMWs use an electric water pump and an electronically controlled thermostat, and both can fail with little warning. Plastic expansion tanks, hose fittings and radiator necks also turn brittle with age. We pressure-test the system to find leaks, check the pump and thermostat, and replace what’s failing before it strands you.",
    ],
    includes: [
      "Cooling system pressure test",
      "Water pump and thermostat replacement",
      "Radiator and expansion tank replacement",
      "Hose and fitting replacement",
      "Coolant service with the correct coolant",
      "Cooling fan diagnosis",
    ],
    signsTitle: "Signs of cooling trouble",
    signs: [
      "A temperature warning or a gauge that climbs",
      "Low coolant warnings or regular top-ups",
      "A sweet smell from the engine bay",
      "Puddles or dried coolant residue",
      "The cooling fan running at full speed all the time",
    ],
    faqs: [
      {
        q: "Can I drive with the temperature warning on?",
        a: "No. Pull over, shut the engine off and call for a tow. Driving an overheating engine is how a cooling repair turns into an engine replacement.",
      },
      {
        q: "Should I replace my water pump before it fails?",
        a: "On higher-mileage BMWs with the original electric water pump, many owners do, because it usually fails without warning. We’ll tell you what we’d do on your car.",
      },
    ],
    related: ["engine-repair", "towing-roadside-assistance", "check-engine-light"],
    posts: ["florida-heat-bmw-cooling-system"],
  },
  {
    slug: "misfire-ignition-repair",
    category: "engine",
    name: "Misfire, Coil & Spark Plug Repair",
    shortName: "Misfires & ignition",
    navBlurb: "Coil packs, spark plugs and injectors.",
    metaTitle: "Engine Misfire Repair in Palm Bay, FL | Coil Packs & Spark Plugs",
    metaDescription:
      "Rough idle, shaking or a flashing check engine light? Misfire diagnosis plus coil pack, spark plug and fuel injector repair in Palm Bay, FL.",
    intro:
      "A misfire means one or more cylinders isn’t burning fuel properly. You feel it as shaking or hesitation, and left alone it can damage the catalytic converter.",
    prices: [
      { label: "Diagnostic", value: "$100" },
      { label: "Repair", value: "Quoted per job" },
    ],
    bookingValue: "diagnostic",
    photo: "g30Engine",
    overview: [
      "Misfires come down to spark, fuel or air: a worn spark plug, a failing ignition coil, a leaking or clogged injector, a vacuum leak, or carbon buildup on the intake valves of a direct-injection engine. The fault code tells you which cylinder. Testing tells you why.",
      "We read the misfire data, swap coils between cylinders to see whether the misfire follows, inspect the plugs and check the injectors and intake for leaks. Turbocharged engines are harder on spark plugs than older engines, so their replacement intervals are shorter than many owners expect.",
    ],
    includes: [
      "Misfire diagnosis",
      "Spark plug replacement",
      "Ignition coil replacement",
      "Fuel injector diagnosis and replacement",
      "Intake and vacuum leak repair",
    ],
    signsTitle: "Signs of a misfire",
    signs: [
      "Flashing check engine light",
      "Shaking at idle or under acceleration",
      "A “drivetrain malfunction” or reduced power message",
      "Hesitation or a loss of power",
      "A fuel smell from the exhaust",
    ],
    faqs: [
      {
        q: "Can I keep driving with a misfire?",
        a: "Not for long. A misfiring cylinder sends unburned fuel into the exhaust, which can overheat the catalytic converter. If the check engine light is flashing, stop driving and get the car checked.",
      },
      {
        q: "How often should spark plugs be changed?",
        a: "It depends on the engine. Many turbocharged engines call for new plugs somewhere around every 40,000 to 60,000 miles, and sooner if the engine has been tuned. Your maintenance schedule has the exact interval.",
      },
    ],
    related: ["check-engine-light", "turbo-boost-leak-repair", "engine-repair"],
    posts: ["the-truth-beneath-the-hood"],
  },
  {
    slug: "turbo-boost-leak-repair",
    category: "engine",
    name: "Turbo & Boost Leak Repair",
    shortName: "Turbo & boost leaks",
    navBlurb: "Charge pipes, diverter valves and turbos.",
    metaTitle: "Turbo, Charge Pipe & Boost Leak Repair in Palm Bay, FL",
    metaDescription:
      "Loss of power or a whoosh under acceleration? Charge pipe, boost leak, diverter valve and turbocharger repair for BMW and European cars in Palm Bay, FL.",
    intro:
      "Turbocharged engines make their power from pressurized air. Any leak along the way, or a tired turbo, shows up as lost power, odd noises and warning lights.",
    prices: QUOTED,
    bookingValue: "engine",
    photo: "m4Lift",
    overview: [
      "On many turbocharged BMWs, the plastic charge pipe between the intercooler and the throttle body turns brittle with heat and can crack or blow off under boost. The car suddenly loses power and usually throws a warning. An aluminum replacement pipe is a common, sensible fix.",
      "We pressure-test the intake tract to find leaks, check diverter valve and wastegate operation, and inspect the turbos for shaft play and oil leaks before recommending a repair.",
    ],
    includes: [
      "Boost leak testing",
      "Charge pipe and intercooler pipe replacement",
      "Diverter valve and wastegate diagnosis",
      "Turbocharger inspection and replacement",
      "Intercooler replacement",
    ],
    signsTitle: "Signs of boost trouble",
    signs: [
      "A sudden loss of power",
      "A whoosh or hiss under acceleration",
      "A reduced power warning",
      "Blue smoke from the exhaust",
      "A whine or siren noise from the engine",
    ],
    faqs: [
      {
        q: "What is a charge pipe and why does it fail?",
        a: "It carries pressurized air from the intercooler to the engine. On many BMWs it’s plastic, and years of heat make it brittle until it cracks under boost.",
      },
      {
        q: "Is an upgraded charge pipe worth it?",
        a: "On engines known for cracked plastic pipes, an aluminum replacement is a one-time fix that won’t turn brittle with heat. We’ll tell you if it makes sense for your car.",
      },
    ],
    related: ["misfire-ignition-repair", "engine-repair", "check-engine-light"],
    posts: [],
  },

  // Suspension, tires & alignment
  {
    slug: "suspension-repair",
    category: "suspension",
    popular: true,
    name: "Suspension & Steering Repair",
    shortName: "Suspension & steering",
    navBlurb: "Control arms, bushings, shocks and struts.",
    metaTitle: "Suspension & Steering Repair in Palm Bay, FL",
    metaDescription:
      "Control arms, bushings, ball joints, shocks and struts for BMW, European and all makes in Palm Bay, FL. Fix clunks, shimmies and uneven tire wear.",
    intro:
      "Speed is nothing without control. Worn suspension makes a car wander, clunk and chew through tires, and it adds to your stopping distance.",
    prices: QUOTED,
    bookingValue: "suspension",
    photo: "m4Wheel",
    overview: [
      "Suspension parts wear slowly, so the car feels fine until you drive one with fresh components. Rubber bushings crack and soften, ball joints develop play and shocks lose damping. On many BMWs, the front control arm bushings are a common wear item that shows up as a shimmy under braking or vague steering.",
      "We inspect every joint, bushing and damper, replace what’s worn and finish with an alignment so the car tracks straight and the tires wear evenly.",
    ],
    includes: [
      "Control arms, ball joints and bushings",
      "Shocks, struts and mounts",
      "Sway bar links and bushings",
      "Tie rods and steering components",
      "Four-wheel alignment after the work",
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
        q: "Why are my tires wearing on the inside edge?",
        a: "Usually alignment, often caused or made worse by worn suspension parts. Lowered cars with a lot of negative camber also wear the inside edge faster.",
      },
      {
        q: "Do I need an alignment after suspension work?",
        a: "Yes. Replacing parts that locate the wheel changes the alignment, and skipping it is one of the fastest ways to ruin new tires.",
      },
    ],
    related: ["wheel-alignment", "coilovers-suspension-upgrades", "brake-repair"],
    posts: ["the-secret-to-ultimate-control"],
  },
  {
    slug: "coilovers-suspension-upgrades",
    category: "suspension",
    name: "Coilovers & Suspension Upgrades",
    shortName: "Coilovers & upgrades",
    navBlurb: "Coilovers, springs and performance setups.",
    metaTitle: "Coilover Installation & Suspension Upgrades in Palm Bay, FL",
    metaDescription:
      "Coilover and lowering spring installation, performance bushings and alignment setup for street, track and drift cars in Palm Bay, FL.",
    intro:
      "Drifters, circuit racers and drag racers all depend on suspension setup. The right parts, installed and aligned properly, keep the car planted, balanced and responsive.",
    prices: QUOTED,
    bookingValue: "suspension",
    photo: "m4Lift",
    overview: [
      "Lowering a car changes more than ride height. Camber, toe and suspension geometry all move, and a car that isn’t aligned afterward will chew through tires and feel nervous at speed. Adjustable coilovers also need their ride height and damping set to suit the car and how it’s used.",
      "Tell us what you do with the car, whether that’s daily driving, track days, autocross or drifting, and we’ll install the parts and set the car up to match, finishing with an alignment to your target specs.",
    ],
    includes: [
      "Coilover installation",
      "Lowering spring installation",
      "Performance bushings and control arms",
      "Sway bars and end links",
      "Ride height and damping setup",
      "Performance alignment",
    ],
    signsTitle: "Good reasons to upgrade",
    signs: [
      "Track days or autocross",
      "Drifting",
      "Tired factory shocks and springs",
      "A lower stance without a harsh ride",
    ],
    faqs: [
      {
        q: "Will coilovers make my car ride rough?",
        a: "It depends on the coilover and how it’s set up. Quality adjustable coilovers can ride well on the street when the damping and ride height are set sensibly.",
      },
      {
        q: "Do I need an alignment after lowering the car?",
        a: "Yes, every time. Lowering changes camber and toe, and the car will wear tires quickly until it’s aligned.",
      },
    ],
    related: ["suspension-repair", "wheel-alignment", "tire-mounting-balancing"],
    posts: ["the-secret-to-ultimate-control"],
  },
  {
    slug: "tire-mounting-balancing",
    category: "suspension",
    popular: true,
    name: "Tire Mounting & Balancing",
    shortName: "Tire mount & balance",
    navBlurb: "$30, available 24/7. Call first.",
    metaTitle: "Tire Mounting & Wheel Balancing in Palm Bay, FL | Available 24/7",
    metaDescription:
      "Tire mounting and wheel balancing for $30 in Palm Bay, FL, available 7 days a week, 24 hours. Call (321) 222-5486 first.",
    intro:
      "Tire mounting and wheel balancing is $30 and available 7 days a week, 24 hours. Call first so someone is ready for you.",
    prices: [{ label: "Tire mounting & wheel balancing", value: "$30", note: "About 1 hour" }],
    bookingValue: "tire-mount-balance",
    photo: "m4Wheel",
    overview: [
      "A wheel that’s out of balance by a fraction of an ounce causes vibration at highway speed, uneven tire wear and extra load on wheel bearings and suspension parts. Every tire we mount is balanced before it goes back on the car.",
      "Low-profile performance tires on large wheels need careful handling so the wheel doesn’t get scratched and the tire bead isn’t damaged. That kind of tire is everyday work on the BMWs and European cars that come through the shop.",
    ],
    includes: [
      "Tire mounting",
      "Wheel balancing",
      "Tire pressure set to spec",
      "Visual check of tread and sidewalls",
    ],
    signsTitle: "Book it when",
    signs: [
      "You have new tires to install",
      "There’s a vibration at highway speed",
      "A tire has been repaired or swapped",
      "You’re swapping track wheels on or off",
    ],
    faqs: [
      {
        q: "Is it really available 24/7?",
        a: "Yes, tire mounting and balancing is available 7 days a week, 24 hours. Please call first so someone is ready for you.",
      },
      {
        q: "Is a vibration a balance or an alignment problem?",
        a: "A vibration at highway speed is most often wheel balance. Alignment problems show up as pulling and uneven tire wear.",
      },
      {
        q: "Do I need an alignment with new tires?",
        a: "It’s a good idea. It protects the new tires from uneven wear. A four-wheel alignment is $160.",
      },
    ],
    related: ["wheel-alignment", "suspension-repair", "brake-repair"],
    posts: ["signs-you-need-an-alignment"],
  },
  {
    slug: "wheel-alignment",
    category: "suspension",
    popular: true,
    name: "4-Wheel Alignment",
    shortName: "Wheel alignment",
    navBlurb: "Camber, caster and toe set to spec. $160.",
    metaTitle: "Wheel Alignment in Palm Bay, FL | 4-Wheel Alignment $160",
    metaDescription:
      "4-wheel alignment for $160 in Palm Bay, FL. Fix pulling, a crooked steering wheel and uneven tire wear on BMW, European and all makes.",
    intro:
      "An alignment sets the angles of all four wheels so the car tracks straight, the steering wheel sits centered and the tires wear evenly. A four-wheel alignment is $160.",
    prices: [{ label: "4-wheel alignment", value: "$160", note: "About 1 hour" }],
    bookingValue: "alignment",
    photo: "m4Lift",
    overview: [
      "Three angles matter most. Toe is whether the tires point slightly in or out, and it’s the biggest cause of alignment-related tire wear. Camber is the tilt of the tire at the top. Caster affects steering feel and how the wheel returns to center. A four-wheel alignment measures and sets all of them, which matters on cars with independent rear suspension, including nearly every BMW.",
      "An alignment only holds if the parts holding the wheels are healthy, so we check for worn bushings, ball joints and tie rods first. Performance cars and lowered cars run more aggressive settings, and small errors show up quickly as uneven wear on expensive tires.",
    ],
    includes: [
      "Alignment measurement before and after",
      "Toe, camber and caster set to spec",
      "Steering wheel centered",
      "Check for worn suspension and steering parts",
      "Performance alignment specs on request",
    ],
    signsTitle: "Signs you need an alignment",
    signs: [
      "The steering wheel is off-center when driving straight",
      "The car pulls to one side",
      "Uneven tire wear",
      "New tires or recent suspension work",
      "A hard pothole or curb hit",
    ],
    faqs: [
      {
        q: "How often should I get an alignment?",
        a: "With every new set of tires, after suspension work or a hard pothole hit, and any time the car pulls or the wheel is crooked.",
      },
      {
        q: "Why does my car still pull after an alignment?",
        a: "Pulling can also come from a tire problem, a sticking brake caliper or worn suspension parts. We check for those when an alignment doesn’t solve it.",
      },
    ],
    related: ["tire-mounting-balancing", "suspension-repair", "coilovers-suspension-upgrades"],
    posts: ["signs-you-need-an-alignment"],
  },

  // Specialty
  {
    slug: "exotic-luxury-car-service",
    category: "specialty",
    name: "Exotic, Luxury & Performance Car Service",
    shortName: "Exotic & luxury",
    navBlurb: "High-performance, foreign and luxury cars.",
    metaTitle: "Exotic & Luxury Car Service in Palm Bay, FL",
    metaDescription:
      "Service and repair for high-performance, foreign and luxury cars in Palm Bay and across Brevard County. Specialist care at an independent shop.",
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
    related: ["engine-repair", "auto-detailing", "check-engine-light"],
    posts: ["the-truth-beneath-the-hood"],
  },
  {
    slug: "auto-detailing",
    category: "specialty",
    name: "Auto Detailing",
    shortName: "Detailing",
    navBlurb: "Interior and exterior detailing, in-house.",
    metaTitle: "Auto Detailing in Palm Bay, FL",
    metaDescription:
      "Interior and exterior car detailing at Paul’s Paddock in Palm Bay, FL. Book it on its own or add it to your next service visit.",
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
    related: ["exotic-luxury-car-service", "oil-change", "wheel-alignment"],
    posts: [],
  },
  {
    slug: "towing-roadside-assistance",
    category: "specialty",
    name: "Towing & Roadside Assistance",
    shortName: "Towing & roadside",
    navBlurb: "Onsite towing when the car can’t make it in.",
    metaTitle: "Towing & Roadside Assistance in Palm Bay, FL",
    metaDescription:
      "Onsite towing and roadside assistance from Paul’s Paddock in Palm Bay, FL. Call (321) 222-5486 if your car can’t make it to the shop.",
    intro:
      "Onsite towing and roadside assistance for when the car can’t make it to the shop under its own power.",
    prices: [{ label: "Towing & roadside", value: "Call" }],
    bookingValue: "towing",
    photo: "shopFloor",
    overview: [
      "When the car won’t start, won’t stay cool or isn’t safe to drive, don’t risk making it worse. Call us, tell us where you are and what’s happening, and we’ll get it to the shop.",
      "Once it’s here, we diagnose it and call you with what we find before any work starts.",
    ],
    includes: ["Towing to the shop", "Roadside assistance", "Diagnosis once the car arrives"],
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
    related: ["cooling-system-repair", "battery-alternator-starter", "check-engine-light"],
    posts: ["florida-heat-bmw-cooling-system"],
  },

  // Drafts: written, unpublished until Paul confirms the shop offers them.
  {
    slug: "ac-repair",
    category: "diagnostics",
    draft: true,
    name: "A/C Repair & Recharge",
    shortName: "A/C repair",
    navBlurb: "Cold air again, all summer.",
    metaTitle: "Car A/C Repair in Palm Bay, FL",
    metaDescription:
      "Car blowing warm air? A/C diagnosis, leak repair, compressor and condenser replacement and recharge for BMW, European and all makes in Palm Bay, FL.",
    intro:
      "In Brevard County, A/C isn’t a luxury. When the air stops blowing cold there’s a reason, and recharging without finding it just means paying again a few weeks later.",
    prices: QUOTED,
    bookingValue: "other",
    photo: "sunset",
    overview: [
      "Most A/C problems are a leak, a failing compressor, a damaged or blocked condenser, or an electrical fault like a bad pressure sensor or a stuck blend door. We check system pressures and vent temperatures, find the cause, and repair it before recharging the system.",
      "Many newer cars use R-1234yf refrigerant instead of the older R-134a, and the two aren’t interchangeable. We’ll tell you which your car uses and what the repair involves before any work starts.",
    ],
    includes: [
      "A/C performance and pressure test",
      "Leak detection and repair",
      "Compressor, condenser and expansion valve replacement",
      "Blend door and climate control diagnosis",
      "Evacuate and recharge",
    ],
    signsTitle: "Signs your A/C needs work",
    signs: [
      "Air blowing warm or only slightly cool",
      "Cold on one side, warm on the other",
      "A/C that works on the highway but not at idle",
      "Clicking or grinding when the A/C turns on",
    ],
    faqs: [
      {
        q: "Can’t I just recharge it?",
        a: "A system that’s low on refrigerant has a leak. Recharging without fixing it buys a few weeks at best.",
      },
    ],
    related: ["cooling-system-repair", "electrical-diagnostics", "scheduled-maintenance"],
    posts: ["florida-heat-bmw-cooling-system"],
  },
  {
    slug: "pre-purchase-inspection",
    category: "diagnostics",
    draft: true,
    name: "Pre-Purchase Inspection",
    shortName: "Pre-purchase inspection",
    navBlurb: "Know what you’re buying before you pay.",
    metaTitle: "Used Car Pre-Purchase Inspection in Palm Bay, FL | BMW & European",
    metaDescription:
      "Buying a used BMW or European car? A pre-purchase inspection in Palm Bay, FL shows you what the car needs before you hand over the money.",
    intro:
      "A used BMW or European car can be a great buy or an expensive mistake. An independent inspection before you pay tells you which, and gives you real numbers to negotiate with.",
    prices: [{ label: "Pre-purchase inspection", value: "Call for pricing" }],
    bookingValue: "other",
    photo: "silver3",
    overview: [
      "Sellers rarely know, or mention, what a car is about to need. We scan every module for stored faults, check for the leaks and wear items that are common on that model, and look underneath for damage and previous repairs.",
      "You get a plain summary of what’s healthy, what needs attention now and what’s coming up, so you can walk away, negotiate or buy with confidence.",
    ],
    includes: [
      "Scan of all control modules for stored faults",
      "Check for model-specific leaks and known issues",
      "Brakes, tires and suspension inspection",
      "Underbody check for damage and past repairs",
      "A plain summary of what the car needs",
    ],
    faqs: [
      {
        q: "Can I bring a car I haven’t bought yet?",
        a: "Yes. Arrange it with the seller and we’ll inspect it before you buy.",
      },
    ],
    related: ["check-engine-light", "scheduled-maintenance", "oil-leak-repair"],
    posts: ["bmw-oil-leaks-valve-cover-oil-filter-housing"],
  },
];

export const SERVICES = ALL_SERVICES.filter((s) => !s.draft);
export const POPULAR_SERVICES = SERVICES.filter((s) => s.popular);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesInCategory(id: CategoryId) {
  return SERVICES.filter((s) => s.category === id);
}
