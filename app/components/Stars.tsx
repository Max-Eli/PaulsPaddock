export function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-m-red" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z"
          />
        </svg>
      ))}
    </span>
  );
}
