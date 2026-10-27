import type { Faq } from "@/app/lib/services";

export const BMW_SERIES = [
  "1 Series",
  "2 Series",
  "3 Series",
  "4 Series",
  "5 Series",
  "6 Series",
  "7 Series",
  "8 Series",
  "X1",
  "X2",
  "X3",
  "X4",
  "X5",
  "X6",
  "X7",
  "Z4",
  "M2",
  "M3",
  "M4",
  "M5",
];

export const BMW_ISSUES = [
  {
    title: "Oil filter housing gasket",
    body: "Oil seeps down the side of the engine and onto the drive belt. A soaked belt can shred and get pulled into the front of the engine.",
    service: "oil-leak-repair",
  },
  {
    title: "Valve cover gasket",
    body: "A burning oil smell after driving and oil around the spark plug wells. Plastic covers can also crack with age and heat.",
    service: "oil-leak-repair",
  },
  {
    title: "Water pump & thermostat",
    body: "Many BMWs use an electric water pump that can fail with little warning. When it stops, the engine overheats quickly.",
    service: "cooling-system-repair",
  },
  {
    title: "Cooling system plastics",
    body: "Expansion tanks, hoses and radiator necks turn brittle after years of heat cycles and crack, often in the middle of summer.",
    service: "cooling-system-repair",
  },
  {
    title: "Misfires, coils & plugs",
    body: "Rough idle, a flashing check engine light or a “drivetrain malfunction” message. Usually ignition, sometimes injectors.",
    service: "misfire-ignition-repair",
  },
  {
    title: "Boost leaks & charge pipes",
    body: "On turbocharged engines, a cracked plastic charge pipe causes a sudden loss of power and a whoosh under acceleration.",
    service: "turbo-boost-leak-repair",
  },
  {
    title: "VANOS solenoids",
    body: "Rough idle, weak low-end response and timing-related fault codes. Often fixed by cleaning or replacing the solenoids.",
    service: "check-engine-light",
  },
  {
    title: "Front control arm bushings",
    body: "A shimmy through the steering wheel under braking and vague steering, especially common on 3 and 4 Series.",
    service: "suspension-repair",
  },
];

export const BMW_FAQS: Faq[] = [
  {
    q: "Will servicing my BMW at an independent shop void the warranty?",
    a: "No. Under the federal Magnuson-Moss Warranty Act, BMW can’t void your warranty just because maintenance was done by an independent shop. Keep your receipts and follow the factory maintenance schedule.",
  },
  {
    q: "Do you work on M cars?",
    a: "Yes. We service and repair M cars along with every other BMW series.",
  },
  {
    q: "Is it worth fixing an older, high-mileage BMW?",
    a: "Often, yes. Most common BMW problems are known wear items with known fixes. We’ll tell you honestly if a repair doesn’t make sense for the car.",
  },
  {
    q: "Do you only work on BMWs?",
    a: "No. BMW is our specialty, but every make is welcome.",
  },
];
