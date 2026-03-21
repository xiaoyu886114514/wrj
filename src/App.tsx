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
    <div className="tech-shell min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 tech-noise" />
        <div className="absolute inset-0 hero-mesh opacity-30" />
        <div className="absolute -top-32 left-[8%] h-80 w-80 rounded-full bg-primary/18 blur-3xl animate-glow-shift" />
        <div className="absolute top-[18%] right-[6%] h-72 w-72 rounded-full bg-accent/12 blur-3xl animate-glow-shift" />
        <div className="absolute bottom-[8%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
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
