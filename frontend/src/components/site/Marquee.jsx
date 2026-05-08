const ITEMS = [
  "OBSIDIAN ATELIER",
  "GOTHIC LUXURY TATTOO",
  "SALVIX BIOTECH RECOVERY",
  "ARTIST PROGRAM 02",
  "BY APPOINTMENT ONLY",
  "EST. MMXXIV",
];

export default function Marquee() {
  const stream = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="overflow-hidden border-y border-[rgba(232,230,225,0.08)] bg-[#0A0A0C] py-3"
    >
      <div className="marquee-track no-scrollbar">
        {stream.map((label, i) => (
          <span
            key={i}
            className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.36em] text-[#70706D] mx-8 whitespace-nowrap"
          >
            {label} <span className="mx-6 text-[#4A5D4E]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
