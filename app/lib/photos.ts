// The shop's own photos. No stock imagery: add new shots here as they come
// in from the owner and reference them by key.

export type Photo = { src: string; width: number; height: number; alt: string };

export const PHOTOS = {
  m4Lift: {
    src: "/photos/m4-on-lift.jpg",
    width: 2200,
    height: 1230,
    alt: "Blue BMW M4 raised on a lift inside the Paul’s Paddock shop",
  },
  m4Wheel: {
    src: "/photos/m4-wheel.jpg",
    width: 900,
    height: 900,
    alt: "Front wheel and bodywork of a blue BMW M4 on a lift",
  },
  shopFloor: {
    src: "/photos/shop-floor.jpg",
    width: 1650,
    height: 2200,
    alt: "Two BMWs on lifts above a silver 3 Series on the shop floor",
  },
  liftBrakes: {
    src: "/photos/lift-brakes.jpg",
    width: 2000,
    height: 1126,
    alt: "White BMW on a lift with a rear wheel removed, exposing the brake rotor",
  },
  silver3: {
    src: "/photos/silver-3-series.jpg",
    width: 1760,
    height: 1320,
    alt: "Silver BMW 3 Series with the hood open in a service bay",
  },
  g30Hood: {
    src: "/photos/5-series-hood-up.jpg",
    width: 1650,
    height: 2200,
    alt: "Black BMW 5 Series with the hood open in a service bay",
  },
  g30Engine: {
    src: "/photos/5-series-engine-bay.jpg",
    width: 1620,
    height: 1080,
    alt: "Engine bay of a black BMW 5 Series with the hood open",
  },
  serviceBay: {
    src: "/photos/service-bay.jpg",
    width: 2000,
    height: 1124,
    alt: "Two black BMWs with their hoods open in the service bay",
  },
  sunset: {
    src: "/photos/sunset-lineup.jpg",
    width: 1650,
    height: 2200,
    alt: "BMWs parked in a row under palm trees at sunset",
  },
  lineupWide: {
    src: "/photos/lineup-wide.jpg",
    width: 2000,
    height: 1334,
    alt: "A row of BMW coupes under palm trees at sunset",
  },
  m3Front: {
    src: "/photos/m3-front.jpg",
    width: 1680,
    height: 944,
    alt: "Grey BMW M3 coupe with its headlights on at dusk",
  },
  engineOut: {
    src: "/photos/engine-out.jpg",
    width: 800,
    height: 450,
    alt: "Engine bay of a blue BMW with the engine removed",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
