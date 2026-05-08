const ITEMS = [
  "FOR THE MARKED",
  "HEALING · RITUALIZED",
  "WHERE INK MEETS REGENERATION",
  "RITUAL-GRADE TATTOO CARE",
  "TORONTO · CANADA",
  "CRAFTED FOR ARTISTS · ENGINEERED FOR HEALING",
];

export default function Marquee() {
  const stream = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="overflow-hidden border-y border-[rgba(236,234,228,0.08)] bg-[#0B0B0D] py-3 brushed-metal"
    >
      <div className="marquee-track no-scrollbar">
        {stream.map((label, i) => (
          <span
            key={i}
            className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#6A6A65] mx-8 whitespace-nowrap"
          >
            {label} <span className="mx-6 text-[#5E8B7E]">◦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
