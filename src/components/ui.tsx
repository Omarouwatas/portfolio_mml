import type { ReactNode } from "react";

/* --------------------------------------------------------------------------
   Bouton — angles francs (radius minimal), comme une plaque d'engin.
-------------------------------------------------------------------------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  external,
  className = "",
}: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 active:translate-y-px";
  const styles = {
    solid:
      "bg-cobalt text-sand hover:bg-cobalt-bright shadow-[0_8px_24px_-10px_rgba(27,73,160,0.7)]",
    outline:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-sand",
    ghost: "text-ink/80 hover:text-ink",
  }[variant];

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* --------------------------------------------------------------------------
   Eyebrow — étiquette mono avec coche, façon légende de relevé.
-------------------------------------------------------------------------- */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-dune" : "text-rust";
  return (
    <span className={`mono-label inline-flex items-center gap-2.5 ${color}`}>
      <span className="inline-block h-2 w-2 rotate-45 bg-current" />
      {children}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Coordonnée — bloc data monospace (signature « dossier »).
-------------------------------------------------------------------------- */
export function Coordinate({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const c = tone === "light" ? "text-haze-light/70" : "text-haze";
  return (
    <span className={`font-mono text-[0.7rem] tracking-[0.18em] ${c}`}>{children}</span>
  );
}

/* --------------------------------------------------------------------------
   Contours — courbes de niveau topographiques (SVG). La signature.
-------------------------------------------------------------------------- */
export function Contours({
  className = "",
  cx = 70,
  cy = 35,
}: {
  className?: string;
  cx?: number;
  cy?: number;
}) {
  const rings = [10, 18, 26, 34, 42, 50, 58, 66, 74];
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {rings.map((r, i) => (
        <ellipse
          key={r}
          cx={cx}
          cy={cy}
          rx={r}
          ry={r * 0.66}
          stroke="currentColor"
          strokeWidth={0.15}
          opacity={0.9 - i * 0.07}
          transform={`rotate(-12 ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}
