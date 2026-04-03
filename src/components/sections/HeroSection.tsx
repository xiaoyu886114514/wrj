import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ArrowDown,
  BatteryCharging,
  ChevronRight,
  Gauge,
  MapPinned,
  Navigation,
  Radar,
  Route,
  ShieldCheck,
  Wind,
} from 'lucide-react'

const 顶部标签 = ['低空物流官网', '垂直起降固定翼', '全域智能运输平台']

const 核心数据 = [
  { label: '起降场地需求', value: '0m²', detail: '无跑道部署，乡村与海岛快速起飞' },
  { label: '最大航程', value: '200km', detail: '覆盖中远距物资补给与跨地形运输' },
  { label: '有效载重', value: '15kg', detail: '适配医药、电商、应急等任务载荷' },
  { label: '巡航速度', value: '120km/h', detail: '固定翼高效巡航，兼顾时效与成本' },
]

const 首屏能力卡 = [
  {
    icon: Navigation,
    title: '垂直起降，快速部署',
    desc: '任意开阔地即可起飞，真正适合山区、乡村、海岛与灾害现场。',
  },
  {
    icon: BatteryCharging,
    title: '混合动力，长航时执行',
    desc: '兼顾载重、航程与能效，让无人机从演示设备升级为运营平台。',
  },
  {
    icon: ShieldCheck,
    title: '智能飞控，稳定可靠',
    desc: '多源感知与冗余控制协同工作，复杂低空环境依然保持安全飞行。',
  },
]

const 系统节点 = [
  {
    id: '起降',
    short: '垂直起降',
    title: '零跑道垂直起降系统',
    desc: '四旋翼垂直起降与固定翼巡航无缝切换，大幅降低场地约束，适合偏远场景快速部署。',
    value: '任意开阔地',
    meta: '部署能力',
  },
  {
    id: '动力',
    short: '混合动力',
    title: '油电混动长航时动力',
    desc: '兼顾 200km 航程与 15kg 级任务载荷，支撑低空物流从单次飞行走向持续运营。',
    value: '200km',
    meta: '任务半径',
  },
  {
    id: '货舱',
    short: '智能货舱',
    title: '模块化智能货舱接口',
    desc: '支持标准物流箱、应急物资、样本运输等场景快速换舱，提升效率与任务切换能力。',
    value: '30秒换舱',
    meta: '运营效率',
  },
  {
    id: '飞控',
    short: '自主飞控',
    title: '自主飞控与航线规划',
    desc: '融合北斗、GPS、惯导与视觉辅助，实现更稳的航迹保持、更强的环境适应和更高的安全冗余。',
    value: '双模导航',
    meta: '定位系统',
  },
]

const 状态条 = [
  { icon: Radar, title: '航路感知在线', text: '低空链路感知、环境侦测与任务监控同步运行。' },
  { icon: Route, title: '多场景任务覆盖', text: '乡村配送、应急救援、海岛补给与城际运输统一调度。' },
  { icon: MapPinned, title: '全域部署能力', text: '从起飞条件、航程到装载能力均围绕真实物流场景设计。' },
]

export function HeroSection() {
  const [activeSystem, setActiveSystem] = useState(系统节点[0])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-14 pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-primary/20" />
      <div className="absolute left-[10%] top-[16%] h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute bottom-[16%] right-[6%] h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {顶部标签.map((tag, index) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/8 px-4 py-2 text-[11px] font-semibold text-primary animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 120 + 80}ms` }}
                >
                  <span className="signal-dot" />
                  <span className="hud-label text-[10px]">{tag}</span>
                </span>
              ))}
            </div>

            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '220ms' }}>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] text-primary/80">
                面向偏远运输、应急投送与低空物流网络建设的核心飞行平台
              </p>
              <h1 className="font-display text-5xl font-black leading-[1.04] tracking-[0.08em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                翼启全域
                <span className="mt-2 block text-gradient-primary glow-text">智运无疆</span>
              </h1>
            </div>

            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '360ms' }}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/88 sm:text-lg lg:text-xl">
                以垂直起降固定翼无人机为核心，构建更快、更远、更稳定的低空物流解决方案，
                让山区、海岛、乡村和应急场景具备真正可执行、可扩展、可运营的空中运输能力。
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground lg:text-base">
                首屏视觉采用大疆运载无人机官方产品图作为行业形态参考，仅用于传达“专业运载平台”的气质，不再遮挡正文信息。
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 animate-fade-in-up opacity-0 sm:flex-row" style={{ animationDelay: '520ms' }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollTo('advantages')}
                className="group rounded-full border border-primary/30 px-8"
              >
                查看核心优势
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="glow"
                size="xl"
                onClick={() => scrollTo('technology')}
                className="rounded-full border border-primary/18 px-8"
              >
                进入技术路线
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 animate-fade-in-up opacity-0" style={{ animationDelay: '680ms' }}>
              {核心数据.map(item => (
                <div key={item.label} className="metric-tile p-4">
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">{item.label}</div>
                  <div className="mt-3 data-value text-3xl font-black">{item.value}</div>
                  <div className="mt-2 text-xs leading-6 text-muted-foreground">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {首屏能力卡.map((card, index) => (
                <div
                  key={card.title}
                  className="hud-panel animate-fade-in-up p-4 opacity-0"
                  style={{ animationDelay: `${780 + index * 120}ms` }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">{card.title}</div>
                  </div>
                  <p className="text-xs leading-6 text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="absolute inset-0 rounded-full bg-primary/6 blur-3xl" />

            <div className="tech-frame relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-5 rounded-[1.7rem] border border-primary/10 sm:inset-6" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
                <div className="rounded-full border border-primary/14 bg-background/72 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary">
                  大疆官方运载无人机形态参考
                </div>
                <div className="hidden rounded-full border border-primary/14 bg-background/72 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground sm:block">
                  DJI FlyCart 30
                </div>
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center pt-16 sm:min-h-[480px] sm:pt-20">
                <div className="absolute inset-[18%] rounded-full border border-primary/10" />
                <div className="absolute inset-[28%] rounded-full border border-primary/8" />
                <img
                  src="/images/dji-flycart30.png"
                  alt="大疆运载无人机官方参考图"
                  fetchPriority="high"
                  className="relative z-10 max-h-[300px] w-full max-w-[520px] object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.18)] sm:max-h-[360px]"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {系统节点.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSystem(item)}
                  className={`focus-ring rounded-2xl border px-4 py-3 text-left text-sm transition-all ${
                    activeSystem.id === item.id
                      ? 'border-primary/28 bg-primary/10 text-primary shadow-[var(--shadow-glow-primary)]'
                      : 'border-border/70 bg-background/60 text-muted-foreground hover:border-primary/16 hover:text-foreground'
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            <div className="mt-4 hud-panel p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.16em] text-primary/80">系统焦点</div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">{activeSystem.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">{activeSystem.desc}</p>
                </div>
                <div className="min-w-[136px] rounded-2xl border border-primary/14 bg-background/55 px-4 py-3 text-right">
                  <div className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground">{activeSystem.meta}</div>
                  <div className="mt-2 font-display text-base font-bold tracking-[0.12em] text-primary sm:text-lg">
                    {activeSystem.value}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {状态条.map(item => (
                <div key={item.title} className="rounded-2xl border border-primary/12 bg-background/58 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <item.icon className="h-4 w-4" />
                    <span className="text-[11px] font-semibold tracking-[0.14em]">{item.title}</span>
                  </div>
                  <p className="text-xs leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('market')}
            className="focus-ring group flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-[10px] font-semibold tracking-[0.18em]">继续查看项目全貌</span>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/18 bg-primary/6">
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </div>
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            复杂低空环境下保持稳定姿态与航迹控制
          </div>
          <div className="hidden h-4 w-px bg-border/60 sm:block" />
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-accent" />
            兼顾部署效率、运输时效与平台化运营能力
          </div>
        </div>
      </div>
    </section>
  )
}
