import { MAPS_EMBED_URL } from "@/app/lib/content";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="Map showing Paul’s Paddock on Kirby Circle in Palm Bay, FL"
      src={MAPS_EMBED_URL}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full border border-paper-line grayscale-[0.85] ${className}`}
    />
  );
}
