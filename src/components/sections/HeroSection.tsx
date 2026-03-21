import { useMousePosition } from '@/hooks/useAnimations'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const mouse = useMousePosition()

  const handleExplore = () => {
    document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          transform: `translate(${(mouse.x - 0.5) * -20}px, ${(mouse.y - 0.5) * -10}px) scale(1.1)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 bg-background/40" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

      {/* Drone image floating */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] opacity-30 pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${(mouse.x - 0.5) * 30}px), calc(-50% + ${(mouse.y - 0.5) * 20}px))`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <img
          src="/images/drone-main.png"
          alt="VTOL Drone"
          className="w-full h-full object-contain animate-drone-hover drop-shadow-[0_0_60px_rgba(0,229,255,0.15)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
          {['三创赛科创项目', '无跑道全域起降', '长航时大载重', '低空物流新生态'].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-medium tracking-wider text-primary/80 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
          <span className="text-gradient-primary">翼启全域</span>
          <br />
          <span className="text-foreground">智运无疆</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
          垂直起降固定翼无人机智慧物流解决方案
        </p>
        <p className="text-sm text-muted-foreground/60 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '700ms' }}>
          Vertical Take-Off & Landing Fixed-Wing UAV Smart Logistics System
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '800ms' }}>
          <Button
            variant="hero"
            size="xl"
            onClick={handleExplore}
            className="group relative overflow-hidden rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              探索项目
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
          </Button>
        </div>

        {/* Key metrics bar */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16 animate-fade-in-up opacity-0" style={{ animationDelay: '1000ms' }}>
          {[
            { value: '200km', label: '最大航程' },
            { value: '15kg', label: '有效载重' },
            { value: '120km/h', label: '巡航速度' },
            { value: '0m\u00B2', label: '起降场地需求' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="data-value text-xl lg:text-2xl font-bold">{item.value}</div>
              <div className="text-[11px] text-muted-foreground mt-1 tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-primary/60 animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}