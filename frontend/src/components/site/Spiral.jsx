/**
 * SnailSpiral — three nested open C-arcs forming a real shell silhouette,
 * matching the INQUE reference imagery. Variable stroke widths (thick→thin),
 * no glow, no orbital ring effect.
 */
export default function Spiral({
  size = 200,
  stroke = "#2E3F34",
  strokeWidth = 1, // base; outer arc multiplies, inner arcs divide
  opacity = 0.6,
  rotate = false,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate ? "spiral-rotate-slow" : ""} ${className}`}
      style={{ opacity, overflow: "visible" }}
      aria-hidden
    >
      <g fill="none" stroke={stroke} strokeLinecap="round">
        {/* Outer arc — thickest, opens at bottom-left */}
        <path
          d="M 152 78 A 72 72 0 1 1 78 152"
          strokeWidth={strokeWidth * 3}
        />
        {/* Middle arc */}
        <path
          d="M 140 88 A 52 52 0 1 1 88 140"
          strokeWidth={strokeWidth * 2}
        />
        {/* Inner arc — thinnest */}
        <path
          d="M 126 100 A 32 32 0 1 1 100 126"
          strokeWidth={strokeWidth * 1.2}
        />
      </g>
    </svg>
  );
}

export function SpiralDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="flex-1 h-px bg-[rgba(75,95,79,0.16)]" />
      <Spiral size={26} strokeWidth={0.7} opacity={0.7} stroke="#4B5F4F" />
      <span className="flex-1 h-px bg-[rgba(75,95,79,0.16)]" />
    </div>
  );
}

export function SpiralMark({ size = 22, className = "" }) {
  return <Spiral size={size} strokeWidth={0.8} opacity={0.75} stroke="#4B5F4F" className={className} />;
}
