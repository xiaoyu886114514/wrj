import { SectionHeader, GlassCard, AnimatedEntry } from '@/components/SharedComponents'
import { useCountUp } from '@/hooks/useAnimations'
import { Leaf, Heart, Briefcase, Recycle, Radar, Route, ShieldCheck } from 'lucide-react'

const VALUES = [
  {
    icon: Heart,
    title: '乡村振兴助农',
    desc: '为偏远乡村打通农产品空中上行通道，帮助农民增收致富，助力国家乡村振兴战略落地。',
    stats: [
      { label: '覆盖偏远行政村', value: 2000, unit: '+' },
      { label: '帮助农户增收', value: 30, unit: '%' },
    ],
  },
  {
    icon: Briefcase,
    title: '应急救援保障',
    desc: '构建低空应急物资运输通道，在自然灾害与公共卫生事件中为生命救援提供关键支撑。',
    stats: [
      { label: '应急响应时间', value: 30, unit: 'min' },
      { label: '救援覆盖半径', value: 100, unit: 'km' },
    ],
  },
  {
    icon: Leaf,
    title: '低碳绿色运输',
    desc: '以混动与电动化技术路线替代高频地面运输，降低碳排放并提升运输能效。',
    stats: [
      { label: '碳排放降低', value: 60, unit: '%' },
      { label: '能效提升', value: 40, unit: '%' },
    ],
  },
  {
    icon: Recycle,
    title: '低空经济就业',
    desc: '围绕制造、运维、运营与航线管理创造新岗位，带动地方低空产业链协同发展。',
    stats: [
      { label: '直接就业岗位', value: 500, unit: '+' },
      { label: '产业链带动', value: 3000, unit: '+' },
    ],
  },
]

const IMPACT_CHAIN = [
  { icon: Radar, title: '任务感知', text: '把偏远运输、应急投送与农产品上行纳入统一的低空任务视图。' },
  { icon: Route, title: '航路协同', text: '将起降点、航线与投送节点串联成稳定可复用的运输链路。' },
  { icon: ShieldCheck, title: '长期效益', text: '通过更稳定的履约能力与更低边际成本，让公共价值持续发生。' },
]

const SUSTAINABILITY = [
  { title: '技术持续迭代', desc: '持续投入研发，围绕机体、飞控与能源系统进行版本化演进。' },
  { title: '航线网络效应', desc: '航线网络越成熟，复用率越高，运营成本越低，形成规模效应。' },
  { title: '数据资产积累', desc: '沉淀飞行、运维和任务数据，持续反哺安全策略与航路规划。' },
  { title: '标准化先发优势', desc: '以流程、接口与运营规范形成项目长期竞争壁垒。' },
]

function StatCounter({ end, unit }: { end: number; unit: string }) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <span ref={ref} className="data-value text-2xl font-black">
      {count}
      <span className="ml-0.5 text-sm text-primary/70">{unit}</span>
    </span>
  )
}

export function SocialValueSection() {
  return (
    <section id="social" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="section-container relative">
        <SectionHeader
          tag="社会价值"
          title="让低空运力真正进入乡村、救援与公共服务场景"
          subtitle="项目的价值不只在于更快送达，而在于把过去难以稳定覆盖的区域纳入可持续的运输网络。"
          align="left"
          variant="minimal"
        />

        <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedEntry className="h-full">
            <div className="tech-frame h-full p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/8 px-4 py-2 text-[11px] font-semibold text-primary">
                <span className="signal-dot" />
                <span className="hud-label">IMPACT NETWORK</span>
              </div>
              <h3 className="mt-5 max-w-lg font-display text-2xl font-bold leading-tight text-foreground lg:text-3xl">
                从单次飞行能力，延伸到可持续运行的社会服务链路
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground lg:text-base">
                当低空运输真正进入任务编排、节点部署和履约网络阶段，它带来的就不只是时效改善，而是对乡村公共服务、
                应急保障和绿色物流结构的系统性补强。
              </p>

              <div className="mt-8 space-y-4">
                {IMPACT_CHAIN.map(item => (
                  <div key={item.title} className="rounded-2xl border border-primary/12 bg-background/40 p-4 backdrop-blur-sm">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <item.icon className="h-4 w-4" />
                      <span className="text-[11px] font-semibold tracking-[0.14em]">{item.title}</span>
                    </div>
                    <p className="text-xs leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={120}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {VALUES.map((item, i) => (
                <AnimatedEntry key={item.title} delay={i * 90}>
                  <GlassCard className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-base font-bold text-foreground">{item.title}</h4>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {item.stats.map(stat => (
                            <div key={stat.label} className="rounded-xl border border-border/50 bg-muted/30 p-3 text-center">
                              <StatCounter end={stat.value} unit={stat.unit} />
                              <div className="mt-1 text-[10px] text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedEntry>
              ))}
            </div>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={280}>
          <div className="mb-6 flex items-center gap-3">
            <Recycle className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">可持续发展支点</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SUSTAINABILITY.map((item, i) => (
              <AnimatedEntry key={item.title} delay={i * 80}>
                <div className="metric-tile h-full p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-xs leading-6 text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
