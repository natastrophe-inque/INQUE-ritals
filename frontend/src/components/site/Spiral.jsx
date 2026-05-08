/**
 * Spiral — a logarithmic / Fibonacci-inspired sacred-geometry motif.
 * Used as a recurring branding mark for INQUE: regeneration, ritual, healing.
 * Intentionally minimal — pure mathematical line, no illustrative snail iconography.
 */
export default function Spiral({
  size = 200,
  stroke = "#5E8B7E",
  strokeWidth = 0.5,
  opacity = 0.6,
  rotate = false,
  className = "",
}) {
  // Logarithmic spiral path (golden ratio approximation), centered at 100,100
  const path =
    "M100 100 " +
    "C 100 92, 108 88, 116 92 " +
    "C 128 96, 132 110, 124 122 " +
    "C 114 138, 88 138, 76 120 " +
    "C 60 96, 80 64, 110 60 " +
    "C 150 56, 184 92, 178 138 " +
    "C 170 196, 102 220, 50 188 " +
    "C -16 148, -8 50, 70 14";

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate ? "spiral-rotate-slow" : ""} ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <defs>
        <radialGradient id="inque-spiral-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={stroke} stopOpacity="1" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#inque-spiral-grad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* secondary inner ring - the embossed effect */}
      <path
        d="M100 100 C 102 96, 106 96, 108 100 C 110 106, 104 110, 98 106 C 90 102, 92 88, 104 86 C 120 84, 130 100, 122 116"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * SpiralDivider — a horizontal divider with a centered spiral mark.
 */
export function SpiralDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="flex-1 h-px bg-[rgba(94,139,126,0.22)]" />
      <Spiral size={28} strokeWidth={0.8} opacity={0.7} stroke="#5E8B7E" />
      <span className="flex-1 h-px bg-[rgba(94,139,126,0.22)]" />
    </div>
  );
}

/**
 * SpiralMark — a small inline mark used as a brand seal next to text.
 */
export function SpiralMark({ size = 22, className = "" }) {
  return <Spiral size={size} strokeWidth={0.9} opacity={0.85} stroke="#5E8B7E" className={className} />;
}
