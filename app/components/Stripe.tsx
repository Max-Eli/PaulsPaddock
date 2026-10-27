// The light blue / dark blue / red bars from the logo's flags.
export function Stripe({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex ${className}`}>
      <span className="flex-1 bg-m-light" />
      <span className="flex-1 bg-m-dark" />
      <span className="flex-1 bg-m-red" />
    </span>
  );
}
