import { Suspense, lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarketSection } from '@/components/sections/MarketSection'
import { AdvantagesSection } from '@/components/sections/AdvantagesSection'
import { Footer } from '@/components/sections/Footer'
import { useInView } from '@/hooks/useAnimations'

const TechnologySection = lazy(() => import('@/components/sections/TechnologySection').then(module => ({ default: module.TechnologySection })))
const BusinessSection = lazy(() => import('@/components/sections/BusinessSection').then(module => ({ default: module.BusinessSection })))
const RoadmapSection = lazy(() => import('@/components/sections/RoadmapSection').then(module => ({ default: module.RoadmapSection })))
const FinanceSection = lazy(() => import('@/components/sections/FinanceSection').then(module => ({ default: module.FinanceSection })))
const SocialValueSection = lazy(() => import('@/components/sections/SocialValueSection').then(module => ({ default: module.SocialValueSection })))
const TeamSection = lazy(() => import('@/components/sections/TeamSection').then(module => ({ default: module.TeamSection })))

interface DeferredSectionProps {
  id: string
  divider?: boolean
  component: LazyExoticComponent<ComponentType>
}

function SectionFallback({ id }: { id: string }) {
  return (
    <section id={id} className="section-padding relative">
      <div className="section-container">
        <div className="h-24 rounded-[1.5rem] border border-primary/10 bg-background/30 backdrop-blur-sm sm:h-28" />
      </div>
    </section>
  )
}

function DeferredSection({ id, divider = true, component: Component }: DeferredSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0, rootMargin: '480px 0px' })

  return (
    <>
      <div ref={ref}>
        <Suspense fallback={<SectionFallback id={id} />}>
          {isInView ? <Component /> : <SectionFallback id={id} />}
        </Suspense>
      </div>
      {divider && <div className="section-divider" />}
    </>
  )
}

function App() {
  return (
    <div className="tech-shell min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 tech-noise" />
        <div className="absolute inset-0 hero-mesh opacity-20" />
        <div className="absolute right-[8%] top-[14%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[14%] h-56 w-56 rounded-full bg-accent/8 blur-3xl" />
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
        <DeferredSection id="technology" component={TechnologySection} />
        <DeferredSection id="business" component={BusinessSection} />
        <DeferredSection id="roadmap" component={RoadmapSection} />
        <DeferredSection id="finance" component={FinanceSection} />
        <DeferredSection id="social" component={SocialValueSection} divider={false} />
        <DeferredSection id="team" component={TeamSection} divider={false} />
      </main>
      <Footer />
    </div>
  )
}

export default App
