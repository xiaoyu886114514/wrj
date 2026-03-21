import { ParticleBackground } from '@/components/ParticleBackground'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarketSection } from '@/components/sections/MarketSection'
import { AdvantagesSection } from '@/components/sections/AdvantagesSection'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { FinanceSection } from '@/components/sections/FinanceSection'
import { SocialValueSection } from '@/components/sections/SocialValueSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <MarketSection />
        <div className="section-divider" />
        <AdvantagesSection />
        <div className="section-divider" />
        <TechnologySection />
        <div className="section-divider" />
        <BusinessSection />
        <div className="section-divider" />
        <RoadmapSection />
        <div className="section-divider" />
        <FinanceSection />
        <div className="section-divider" />
        <SocialValueSection />
        <div className="section-divider" />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

export default App