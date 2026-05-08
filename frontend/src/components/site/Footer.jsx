import { SpiralMark } from "./Spiral";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)]"
    >
      <div className="px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SpiralMark size={16} className="opacity-70" />
            <span className="font-display tracking-[0.32em] text-[13px] text-[#9E9E98]">
              INQUE
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6A6A65]">
            © MMXXV · Toronto
          </span>
        </div>
      </div>
    </footer>
  );
}
