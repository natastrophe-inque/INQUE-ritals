export function Footer() {
  const logoUrl = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/r3WdwFyRdNZyvkZVSQVC0wEW5J13/5721d477-3d95-4df8-b4b7-d9046eda000f/images/1781646464680-lzqm5qp7mws.jpg'

  return (
    <footer
      data-component="src/components/Footer.tsx"
      className="border-t border-forest-accent/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="INQUE"
              className="h-7 w-auto opacity-80"
            />
            <span className="text-xs tracking-[0.2em] uppercase text-silver-muted font-sans font-light">
              SALVIX
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#science"
              className="text-xs tracking-[0.15em] uppercase text-silver-muted hover:text-bone transition-colors font-sans font-light"
            >
              Science
            </a>
            <a
              href="#formula"
              className="text-xs tracking-[0.15em] uppercase text-silver-muted hover:text-bone transition-colors font-sans font-light"
            >
              Formula
            </a>
            <a
              href="#artist-program"
              className="text-xs tracking-[0.15em] uppercase text-silver-muted hover:text-bone transition-colors font-sans font-light"
            >
              Partnership
            </a>
          </div>

          <p className="text-xs text-silver-muted/50 font-sans font-light">
            <a href="https://www.inquerituals.com" className="hover:text-silver-muted/70 transition-colors">inquerituals.com</a> &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-accent/5">
          <p className="text-center text-xs text-silver-muted/40 font-sans font-light tracking-wide">
            Recovery, refined.
          </p>
        </div>
      </div>
    </footer>
  )
}
