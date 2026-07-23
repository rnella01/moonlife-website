const VIOLET = "#5433eb";

/**
 * Crescent moon glyph — stands in for the second "o" of the wordmark.
 * The single violet accent of the whole system lives here and in the
 * search submit button, nowhere else (see DESIGN.md).
 */
export function MoonGlyph({
  size = 28,
  mask = "#ffffff",
}: {
  size?: number;
  /** Color of the crescent cutout — match the surface behind the glyph. */
  mask?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill={VIOLET} />
      <circle cx="22" cy="12" r="12" fill={mask} />
    </svg>
  );
}

export function Wordmark({
  className = "",
  mask,
}: {
  className?: string;
  mask?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline select-none tracking-[-0.05em] ${className}`}
      aria-label="moonlife"
    >
      mo
      <span className="self-center translate-y-[0.06em]">
        <MoonGlyph size={26} mask={mask} />
      </span>
      nlife
    </span>
  );
}
