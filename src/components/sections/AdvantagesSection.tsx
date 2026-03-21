import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry, DataBadge } from '@/components/SharedComponents'
import { Zap, Navigation, Shield, Box, Cpu, Gauge } from 'lucide-react'

const DRONE_PARTS = [
  { id: 'power', label: '混合动力系统', icon: Zap, desc: '油电混合动力，兼顾长航时与大载荷，最大航程200km，载重15kg', x: '15%', y: '45%' },
  { id: 'flight', label: '智能飞控系统', icon: Cpu, desc: '多传感器融合导航，支持GPS/北斗双模+惯性导航+视觉辅助，全天候精准飞控', x: '50%', y: '20%' },
  { id: 'cargo', label: '智能货舱系统', icon: Box, desc: '模块化快拆货舱设计，支持标准化物流箱适配，自动装卸提升运营效率', x: '50%', y: '70%' },
  { id: 'vtol', label: '垂直起降模块', icon: Navigation, desc: '四旋翼垂直起降+固定翼水平巡航无缝切换，零场地需求，全域起降', x: '85%', y: '35%' },
  { id: 'avoid', label: '智能避障系统', icon: Shield, desc: '360度毫米波雷达+双目视觉，实时环境感知与自主避障，安全飞行保障', x: '75%', y: '65%' },
  { id: 'speed', label: '高效巡航性能', icon: Gauge, desc: '巡航速度120km/h，翼展3.2m气动布局优化，续航时间2.5小时以上', x: '25%', y: '25%' },
]

const CORE_ADVANTAGES = [
  { title: '垂直起降零场地', desc: '无需跑道，任意开阔地即可起降，突破传统固定翼场地限制，覆盖偏远无基础设施区域', highlight: true },
  { title: '固定翼长航时', desc: '固定翼气动布局赋予超长航时与高巡航效率，航程达200km，远超多旋翼10倍以上', highlight: true },
  { title: '大载重高效能', desc: '15kg有效载重满足绝大多数物流场景需求，单次飞行即可完成中小件批量运输任务' },
  { title: '全天候智能飞控', desc: '北斗+GPS双模导航、IMU惯性导航、视觉辅助三重冗余，支持4级风况安全飞行' },
  { title: '模块化快拆货舱', desc: '标准化货舱接口，30秒快速换舱，适配医药冷链、农产品、电商快递等多场景需求' },
  { title: '自主航线规划', desc: '基于AI的低空航路智能规划，自动规避禁飞区、气象风险区，实现航线最优化与自主运营' },
]

export function AdvantagesSection() {
  const [activePart, setActivePart] = useState<string | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="advantages" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="核心优势"
          title="垂直起降 + 固定翼，重新定义无人机物流"
          subtitle="融合垂直起降灵活性与固定翼高效巡航优势，打造适用于全域低空物流的最优技术方案"
        />

        {/* Interactive drone model area */}
        <AnimatedEntry>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Drone with hotspots */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="tech-frame relative aspect-square p-5 sm:p-6">
                <div className="absolute inset-5 rounded-[1.6rem] border border-primary/12" />
                <div className="absolute inset-[12%] rounded-full border border-primary/12" />
                <div className="absolute inset-[20%] rounded-full border border-dashed border-primary/12 animate-radar-spin" />
                <div className="absolute left-5 top-5 rounded-2xl border border-primary/16 bg-background/72 px-4 py-3 backdrop-blur-xl">
                  <div className="text-[10px] font-semibold tracking-[0.16em] text-primary">机体结构视图</div>
                  <div className="mt-2 text-xs text-muted-foreground">点击热点查看关键模块能力</div>
                </div>
                <div className="absolute right-5 top-5 hidden rounded-2xl border border-primary/16 bg-background/72 px-4 py-3 text-right backdrop-blur-xl sm:block">
                  <div className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">飞行状态</div>
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <span className="signal-dot" />
                    <span className="font-display text-xs tracking-[0.18em] text-primary">已激活</span>
                  </div>
                </div>

                <img
                  src="/images/drone-main.png"
                  alt="垂直起降固定翼无人机结构"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_48px_rgba(0,229,255,0.16)] animate-float-tilt"
                />

                {/* Hotspot dots */}
                {DRONE_PARTS.map(part => (
                  <button
                    key={part.id}
                    onClick={() => setActivePart(activePart === part.id ? null : part.id)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${activePart === part.id ? 'z-20 scale-110' : 'z-10'}`}
                    style={{ left: part.x, top: part.y }}
                  >
                    <span className={`absolute inset-0 rounded-full ${activePart === part.id ? 'bg-primary/25 animate-ping' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} />
                    <span className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${activePart === part.id ? 'bg-primary/16 border-primary text-primary shadow-[var(--shadow-glow-primary)]' : 'bg-background/72 border-primary/35 text-foreground/70 group-hover:border-primary/65 group-hover:text-primary'}`}>
                      <part.icon className="w-4 h-4" />
                    </span>
                    <span className={`mt-2 hidden rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.16em] transition-all duration-300 sm:block ${activePart === part.id ? 'border-primary/24 bg-primary/10 text-primary' : 'border-border/60 bg-background/68 text-muted-foreground group-hover:text-foreground'}`}>
                      {part.label}
                    </span>
                  </button>
                ))}

                {/* Detail popup */}
                {activePart && (() => {
                  const part = DRONE_PARTS.find(p => p.id === activePart)
                  if (!part) return null
                  return (
                    <div className="absolute bottom-5 left-5 right-5 z-30 hud-panel p-4 animate-fade-in-up border-primary/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/12">
                          <part.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-[10px] font-semibold tracking-[0.16em] text-primary/70">模块聚焦</div>
                          <h4 className="text-sm font-bold text-foreground">{part.label}</h4>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{part.desc}</p>
                    </div>
                  )
                })()}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-primary/12 bg-background/55 p-3 text-center backdrop-blur-xl">
                  <DataBadge value="200" label="最大航程" unit="km" />
                </div>
                <div className="rounded-2xl border border-primary/12 bg-background/55 p-3 text-center backdrop-blur-xl">
                  <DataBadge value="15" label="有效载重" unit="kg" />
                </div>
                <div className="rounded-2xl border border-primary/12 bg-background/55 p-3 text-center backdrop-blur-xl">
                  <DataBadge value="0" label="场地需求" unit="m²" />
                </div>
              </div>
            </div>

            {/* Core advantages cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_ADVANTAGES.map((adv, i) => (
                <GlassCard
                  key={i}
                  className={`cursor-pointer transition-all duration-300 ${expandedCard === i ? 'sm:col-span-2 border-primary/30' : ''} ${adv.highlight ? 'border-primary/20' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-primary/70">优势 {String(i + 1).padStart(2, '0')}</span>
                    {adv.highlight && <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-1 text-[10px] font-semibold text-accent">核心能力</span>}
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">{adv.title}</h4>
                      <p className={`text-xs text-muted-foreground leading-relaxed transition-all duration-300 ${expandedCard === i ? 'line-clamp-none' : 'line-clamp-2'}`}>
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
