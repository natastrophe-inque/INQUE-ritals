/**
 * SnailSpiral — concentric organic curves modelled on a snail-shell cross-section.
 * Tuned for atmospheric / ceremonial use: ghosted into darkness, almost invisible
 * unless looked at carefully. Glow filter removed for restraint.
 */
export default function Spiral({
  size = 200,
  stroke = "#6F8077",
  strokeWidth = 0.7,
  opacity = 0.18,
  rotate = false,
  className = "",
  glow = false, // off by default for the new atmospheric direction
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
          <stop offset="0%" stopColor={stroke} stopOpacity="0.85" />
          <stop offset="55%" stopColor={stroke} stopOpacity="0.40" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.06" />
        </linearGradient>
        {glow && (
          <filter id="snail-glow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <g
        fill="none"
        stroke="url(#snail-grad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter={glow ? "url(#snail-glow-soft)" : undefined}
      >
        {/* outermost loop — opens at lower-left */}
        <path d="M 92 296
                 C 60 256, 56 200, 86 156
                 C 122 100, 200 80, 264 104
                 C 332 130, 360 198, 338 264
                 C 318 322, 256 356, 196 348
                 C 138 340, 92 304, 92 296" />
        {/* second loop — nested */}
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
        {/* innermost */}
        <path d="M 198 232
                 C 192 222, 196 208, 208 202
                 C 224 196, 240 208, 240 224
                 C 240 244, 218 252, 204 244" />
      </g>
    </svg>
  );
}

export function SpiralDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="flex-1 h-px bg-[rgba(111,128,119,0.18)]" />
      <Spiral size={28} strokeWidth={1.1} opacity={0.55} stroke="#6F8077" />
      <span className="flex-1 h-px bg-[rgba(111,128,119,0.18)]" />
    </div>
  );
}

export function SpiralMark({ size = 22, className = "" }) {
  return <Spiral size={size} strokeWidth={1.2} opacity={0.6} stroke="#6F8077" className={className} />;
}
