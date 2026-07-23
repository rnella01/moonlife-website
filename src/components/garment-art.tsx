/**
 * Placeholder product imagery drawn as SVG garment silhouettes on the
 * warm earth-tone backdrops DESIGN.md prescribes for photography
 * (tans, terracotta, sage, ivory). These stand in until real product
 * photos are shot; the UI around them stays achromatic.
 */

export type GarmentKind =
  | "kurta"
  | "saree"
  | "tee"
  | "dress"
  | "kids"
  | "dupatta";

export type ArtTone = "terracotta" | "sage" | "tan" | "ivory" | "slate";

const TONES: Record<ArtTone, { bg: string; fg: string }> = {
  terracotta: { bg: "#c47a5a", fg: "#f6efe6" },
  sage: { bg: "#9aa88f", fg: "#f6efe6" },
  tan: { bg: "#d9b28c", fg: "#faf6ef" },
  ivory: { bg: "#efe8dc", fg: "#a8846a" },
  slate: { bg: "#332f2d", fg: "#e8ddcf" },
};

const SILHOUETTES: Record<GarmentKind, React.ReactNode> = {
  tee: (
    <path d="M30 24 42 17q8 5 16 0l12 7 8 14-11 6-4-7v37H35V37l-4 7-11-6z" />
  ),
  kurta: (
    <path d="M34 20 44 15q6 4 12 0l10 5 9 13-9 5-3-5v18l3 32h-9l-3-30h-8l-3 30h-9l3-32V33l-3 5-9-5z" />
  ),
  dress: (
    <path d="M38 16h24l-2 12 4 14q10 26 6 40H30q-4-14 6-40l4-14z" />
  ),
  saree: (
    <path d="M62 12q14 10 10 30-3 16-16 24-14 9-16 22h-8q0-18 16-28 12-8 14-20 2-14-8-22zM36 40q10 6 8 18-2 10-12 14l-4-7q7-3 8-9 1-7-5-10z" />
  ),
  kids: (
    <path d="M40 22h6v8h8v-8h6l8 10-6 5v12l6 25h-10l-4-18h-4l-4 18H36l6-25V37l-6-5z" />
  ),
  dupatta: (
    <path d="M24 20q20-8 30 6t26 8l-4 10q-20 8-30-6T20 30zM28 58q18-6 28 6t24 6l-4 10q-18 6-28-6T24 68z" />
  ),
};

export function GarmentArt({
  kind,
  tone,
  className = "",
}: {
  kind: GarmentKind;
  tone: ArtTone;
  className?: string;
}) {
  const { bg, fg } = TONES[tone];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100" height="100" fill={bg} />
      <g fill={fg}>{SILHOUETTES[kind]}</g>
    </svg>
  );
}
