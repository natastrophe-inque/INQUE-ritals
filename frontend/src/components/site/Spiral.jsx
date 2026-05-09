/**
 * SnailSpiral — concentric organic curves modelled on a snail-shell cross-section.
 * Three nested loops with subtle gaps + a luminous green gradient stroke,
 * matching the INQUE brand reference imagery exactly.
 */
export default function Spiral({
  size = 200,
  stroke = "#5E8B7E",
  strokeWidth = 1,
  opacity = 0.7,
  rotate = false,
  className = "",
  glow = true,
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate ? "spiral-rotate-slow" : ""} ${className}`}
      style={{ opacity, overflow: "visible" }}
      aria-hidden
    >
      <defs>
        <linearGradient id="snail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.95" />
          <stop offset="55%" stopColor={stroke} stopOpacity="0.55" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.10" />
        </linearGradient>
        <radialGradient id="snail-core" cx="48%" cy="52%" r="55%">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.45" />
          <stop offset="55%" stopColor={stroke} stopOpacity="0.10" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </radialGradient>
        {glow && (
          <filter id="snail-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* faint inner core wash */}
      <circle cx="200" cy="200" r="170" fill="url(#snail-core)" />

      <g
        fill="none"
        stroke="url(#snail-grad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter={glow ? "url(#snail-glow)" : undefined}
      >
        {/* outermost loop — opens at lower-left */}
        <path d="M 92 296
                 C 60 256, 56 200, 86 156
                 C 122 100, 200 80, 264 104
                 C 332 130, 360 198, 338 264
                 C 318 322, 256 356, 196 348
                 C 138 340, 92 304, 92 296" />
        {/* second loop — nested, slightly offset */}
        <path d="M 130 274
                 C 108 244, 108 200, 134 168
                 C 162 130, 218 118, 264 138
                 C 312 158, 332 210, 314 256
                 C 296 300, 246 322, 200 314" />
        {/* third inner loop */}
        <path d="M 168 252
                 C 154 232, 154 204, 174 184
                 C 194 162, 232 156, 258 174
                 C 286 192, 294 226, 280 252
                 C 266 278, 232 290, 204 280" />
        {/* innermost — almost a comma, the heart of the shell */}
        <path d="M 198 232
                 C 192 222, 196 208, 208 202
                 C 224 196, 240 208, 240 224
                 C 240 244, 218 252, 204 244" />
      </g>
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
      <Spiral size={32} strokeWidth={1.4} opacity={0.85} stroke="#5E8B7E" glow={false} />
      <span className="flex-1 h-px bg-[rgba(94,139,126,0.22)]" />
    </div>
  );
}

/**
 * SpiralMark — a small inline mark used as a brand seal next to text.
 */
export function SpiralMark({ size = 22, className = "" }) {
  return <Spiral size={size} strokeWidth={1.6} opacity={0.9} stroke="#5E8B7E" glow={false} className={className} />;
}
