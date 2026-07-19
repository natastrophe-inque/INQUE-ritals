import { Analytics } from '@vercel/analytics/react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import ScienceSection from '@/components/ScienceSection'
import SkinTraumaSection from '@/components/SkinTraumaSection'
import FormulaSection from '@/components/FormulaSection'
import FounderSection from '@/components/FounderSection'
import ArtistProgramSection from '@/components/ArtistProgramSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-bone antialiased">
      <Navigation />
      <main>
        <Hero />
        <ScienceSection />
        <SkinTraumaSection />
        <FormulaSection />
        <FounderSection />
        <ArtistProgramSection />
        <FinalCTASection />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
