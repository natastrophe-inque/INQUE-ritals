import { useReveal } from "../../hooks/useReveal";

export default function Manifesto() {
  const ref = useReveal();
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative bg-[#0B0B0D]"
    >
      <div className="px-6 md:px-12 py-40 md:py-56">
        <div ref={ref} className="reveal max-w-4xl mx-auto text-center">
          <h2
            data-testid="philosophy-headline"
            className="font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.02em] leading-[1.05] text-[#ECEAE4]"
          >
            Tattoo aftercare,
            <br />
            <em className="italic font-light text-[#5E8B7E]">reengineered.</em>
          </h2>
        </div>
      </div>
    </section>
  );
}
