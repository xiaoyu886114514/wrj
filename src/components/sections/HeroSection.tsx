import { useState } from 'react'
import { useMousePosition } from '@/hooks/useAnimations'
import { Button } from '@/components/ui/button'
import {
  BatteryCharging,
  ChevronDown,
  Crosshair,
  Cpu,
  Gauge,
  MoveRight,
  Navigation,
  Package,
  Radar,
  Route,
  ShieldCheck,
  Waves,
  Wind,
} from 'lucide-react'

const HERO_METRICS = [
  { label: '零跑道起降', value: '0m²', detail: '任意开阔地快速部署' },
  { label: '最大航程', value: '200km', detail: '跨山区、海岛、灾区直达' },
  { label: '有效载重', value: '15kg', detail: '覆盖医药与中小件物流' },
  { label: '巡航速度', value: '120km/h', detail: '固定翼高效长距离巡航' },
]

const COMMAND_CARDS = [
  {
    icon: Navigation,
    title: 'VTOL 双模飞行',
    desc: '垂直起降解决场地约束，固定翼巡航保证长航程与高效率。',
  },
  {
    icon: BatteryCharging,
    title: '混合动力续航',
    desc: '油电混动支撑长时间任务执行，兼顾大载荷与能源利用率。',
  },
  {
    icon: ShieldCheck,
    title: '安全冗余飞控',
    desc: '北斗 + GPS + IMU + 视觉辅助，复杂低空环境依然稳定可控。',
  },
]

const HERO_SYSTEMS = [
  {
    id: 'vtol',
    icon: Navigation,
    label: 'VTOL Matrix',
    title: '零跑道垂直起降',
    desc: '四旋翼垂起与固定翼巡航无缝切换，山区、海岛、乡村、灾区都能迅速完成部署。',
    value: 'All-Terrain',
    meta: 'Any Launch Zone',
    x: '16%',
    y: '34%',
  },
  {
    id: 'hybrid',
    icon: BatteryCharging,
    label: 'Hybrid Core',
    title: '油电混动长航时',
    desc: '巡航阶段能效更高，兼顾 200km 航程与 15kg 级载荷，适合中远距物流运输。',
    value: '200km',
    meta: 'Hybrid Power',
    x: '76%',
    y: '26%',
  },
  {
    id: 'cargo',
    icon: Package,
    label: 'Cargo Pod',
    title: '模块化智能货舱',
    desc: '标准化货舱接口可快速换舱，支持快递、电商、农产品、应急物资等多种任务。',
    value: '15kg',
    meta: 'Rapid Swap',
    x: '57%',
    y: '72%',
  },
  {
    id: 'brain',
    icon: Cpu,
    label: 'Flight Brain',
    title: '自主飞控与智能航线',
    desc: '多传感器融合导航与路径规划协同工作，提升定位精度、航线稳定性与安全冗余。',
    value: 'Dual GNSS',
    meta: 'Autonomous Route',
    x: '33%',
    y: '16%',
  },
]

const STATUS_STRIPS = [
  { icon: Radar, title: 'Flight Network', text: '低空航路感知 / 任务链路在线' },
  { icon: Waves, title: 'Stability Control', text: '复杂地形与低空环境保持稳定姿态' },
  { icon: Route, title: 'Mission Routing', text: '山区、海岛、城乡末端多场景覆盖' },
]

export function HeroSection() {
  const mouse = useMousePosition()
  const [activeSystem, setActiveSystem] = useState(HERO_SYSTEMS[0])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-primary/30" />
      <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute bottom-[18%] right-[6%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {['UAV Logistics', 'VTOL Fixed-Wing', '低空经济主战场'].map((tag, index) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/8 px-4 py-2 text-[11px] font-semibold text-primary animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 120 + 100}ms` }}
                >
                  <span className="signal-dot" />
                  <span className="hud-label">{tag}</span>
                </span>
              ))}
            </div>

            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '240ms' }}>
              <p className="hud-label mb-4 text-[11px] text-primary/80">Aerial Command Interface // Smart VTOL Logistics</p>
              <h1 className="font-display text-5xl font-black leading-[1.02] tracking-[0.1em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
                翼启全域
                <span className="mt-2 block text-gradient-primary glow-text">智运无疆</span>
              </h1>
            </div>

            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '420ms' }}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/88 lg:text-xl">
                以垂直起降固定翼无人机为核心，打造更快、更远、更稳的低空物流网络，
                让偏远末端配送、跨地形运输与应急投送具备真正的规模化能力。
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground lg:text-base">
                重点突出 VTOL 零场地部署、固定翼长航程巡航、模块化货舱与智能飞控，让页面第一眼就传达
                “这是能打硬仗的无人机平台”。
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 animate-fade-in-up opacity-0 sm:flex-row" style={{ animationDelay: '560ms' }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollTo('advantages')}
                className="group relative overflow-hidden rounded-full border border-primary/30 px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  查看核心优势
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 transition-transform duration-500 group-hover:scale-100" />
              </Button>

              <Button
                variant="glow"
                size="xl"
                onClick={() => scrollTo('technology')}
                className="rounded-full border border-primary/18 px-8"
              >
                <Radar className="mr-2 h-4 w-4" />
                进入技术路线
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 animate-fade-in-up opacity-0" style={{ animationDelay: '720ms' }}>
              {HERO_METRICS.map(item => (
                <div key={item.label} className="metric-tile p-4">
                  <div className="hud-label text-[10px] text-muted-foreground">{item.label}</div>
                  <div className="mt-3 data-value text-3xl font-black">{item.value}</div>
                  <div className="mt-2 text-xs leading-6 text-muted-foreground">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {COMMAND_CARDS.map((card, index) => (
                <div
                  key={card.title}
                  className="hud-panel animate-fade-in-up p-4 opacity-0"
                  style={{ animationDelay: `${820 + index * 120}ms` }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="hud-label text-[10px] text-primary/75">Capability</div>
                      <div className="text-sm font-semibold text-foreground">{card.title}</div>
                    </div>
                  </div>
                  <p className="text-xs leading-6 text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-glow-shift" />

            <div className="tech-frame relative aspect-[1/1.04] p-5 sm:p-7">
              <div className="absolute inset-5 rounded-[1.75rem] border border-primary/12" />
              <div className="absolute inset-[12%] rounded-full border border-primary/10" />
              <div className="absolute inset-[19%] rounded-full border border-dashed border-primary/14 animate-radar-spin" />
              <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/12" />
              <div className="scanner-line opacity-70" />

              <div className="absolute left-5 top-5 max-w-[200px] rounded-2xl border border-primary/16 bg-background/72 p-3 backdrop-blur-xl">
                <div className="hud-label text-[10px] text-primary">Mission Profile</div>
                <div className="mt-2 flex items-start gap-3">
                  <Crosshair className="mt-0.5 h-4 w-4 text-accent" />
                  <p className="text-xs leading-6 text-muted-foreground">
                    面向山区、海岛、乡村和应急场景，完成中远距高时效物资投送。
                  </p>
                </div>
              </div>

              <div className="absolute right-5 top-5 rounded-2xl border border-primary/16 bg-background/72 px-4 py-3 text-right backdrop-blur-xl">
                <div className="hud-label text-[10px] text-muted-foreground">Flight Integrity</div>
                <div className="mt-2 flex items-center justify-end gap-2 text-primary">
                  <span className="signal-dot" />
                  <span className="font-display text-sm tracking-[0.18em]">ONLINE</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Dual GNSS / Smart Avoidance</div>
              </div>

              <div
                className="absolute left-1/2 top-[48%] w-[72%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${(mouse.x - 0.5) * 24}px), calc(-50% + ${(mouse.y - 0.5) * 18}px))`,
                  transition: 'transform 0.25s ease-out',
                }}
              >
                <img
                  src="/images/drone-main.png"
                  alt="VTOL fixed-wing drone"
                  className="w-full object-contain drop-shadow-[0_0_65px_rgba(0,229,255,0.22)] animate-drone-hover"
                />
              </div>

              {HERO_SYSTEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSystem(item)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: item.x, top: item.y }}
                >
                  <div className="relative">
                    <span
                      className={`absolute inset-0 rounded-full bg-primary/20 ${activeSystem.id === item.id ? 'animate-ping' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                        activeSystem.id === item.id
                          ? 'border-primary bg-primary/18 text-primary shadow-[var(--shadow-glow-primary)]'
                          : 'border-primary/35 bg-background/70 text-foreground/70 group-hover:border-primary/70 group-hover:text-primary'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <span
                    className={`mt-2 block rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.18em] transition-all duration-300 ${
                      activeSystem.id === item.id
                        ? 'border-primary/24 bg-primary/10 text-primary'
                        : 'border-border/60 bg-background/68 text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}

              <div className="absolute bottom-5 left-5 right-5 hud-panel p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="hud-label text-[10px] text-primary/80">{activeSystem.label}</div>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{activeSystem.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">{activeSystem.desc}</p>
                  </div>
                  <div className="min-w-[120px] rounded-2xl border border-primary/14 bg-background/55 px-4 py-3 text-right">
                    <div className="hud-label text-[10px] text-muted-foreground">{activeSystem.meta}</div>
                    <div className="mt-2 font-display text-lg font-bold tracking-[0.16em] text-primary">
                      {activeSystem.value}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {STATUS_STRIPS.map(item => (
                <div key={item.title} className="rounded-2xl border border-primary/12 bg-background/58 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <item.icon className="h-4 w-4" />
                    <span className="hud-label text-[10px]">{item.title}</span>
                  </div>
                  <p className="text-xs leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('market')}
            className="group flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="hud-label text-[10px]">Scroll for full mission deck</span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/18 bg-primary/6">
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </div>
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            支持复杂低空环境稳定飞行
          </div>
          <div className="hidden h-4 w-px bg-border/60 sm:block" />
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-accent" />
            用更强视觉直接传达平台级无人机能力
          </div>
        </div>
      </div>
    </section>
  )
}
