/**
 * SnailSpiral — continuous, hand-drawn, imperfect logarithmic spiral.
 * Parametrically generated for an organic shell-fossil feel, then layered
 * with a soft offset shadow path for the embossed-emerging-from-darkness look.
 * No vector glow, no orbital rings.
 */
import { useMemo } from "react";

function buildSpiralPath({ cx = 100, cy = 100, rStart = 78, rEnd = 6, turns = 2.6, steps = 220, jitter = 0.6 }) {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    // gentle non-linear taper so the spiral feels softly logarithmic
    const r = rStart * Math.pow(rEnd / rStart, t);
    const angle = t * Math.PI * 2 * turns - Math.PI / 2;
    // tiny radial jitter to break perfect-vector geometry
    const j = jitter * (Math.sin(angle * 3.1) + Math.cos(angle * 5.2)) * 0.5;
    const x = cx + Math.cos(angle) * (r + j);
    const y = cy + Math.sin(angle) * (r + j);
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)} ` : `L ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return d;
}

export default function Spiral({
  size = 200,
  stroke = "#2E3F34",
  strokeWidth = 0.7,
  opacity = 0.4,
  rotate = false,
  className = "",
}) {
  const main = useMemo(() => buildSpiralPath({}), []);
  const shadow = useMemo(() => buildSpiralPath({ rStart: 80, jitter: 0.9 }), []);

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
      {/* Soft shadow / depth path underneath */}
      <path
        d={shadow}
        fill="none"
        stroke={stroke}
        strokeOpacity="0.35"
        strokeWidth={strokeWidth * 2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "blur(1.4px)" }}
      />
      {/* Main spiral line — thin, elegant */}
      <path
        d={main}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpiralDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="flex-1 h-px bg-[rgba(75,95,79,0.12)]" />
      <Spiral size={22} strokeWidth={0.5} opacity={0.55} stroke="#4B5F4F" />
      <span className="flex-1 h-px bg-[rgba(75,95,79,0.12)]" />
    </div>
  );
}

export function SpiralMark({ size = 22, className = "" }) {
  return <Spiral size={size} strokeWidth={0.6} opacity={0.65} stroke="#4B5F4F" className={className} />;
}
