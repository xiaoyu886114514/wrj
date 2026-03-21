import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry, DataBadge } from '@/components/SharedComponents'
import { Box, Cpu, Gauge, Navigation, Shield, Zap } from 'lucide-react'

const 能力模块 = [
  {
    id: 'power',
    label: '混合动力系统',
    icon: Zap,
    desc: '油电混合动力兼顾长航时与大载荷，可支撑中远距持续任务执行。',
  },
  {
    id: 'flight',
    label: '智能飞控系统',
    icon: Cpu,
    desc: '多传感器融合导航，支持北斗/GPS 双模与视觉辅助飞行。',
  },
  {
    id: 'cargo',
    label: '智能货舱接口',
    icon: Box,
    desc: '模块化快拆货舱设计，适配标准物流箱与多种运载任务形态。',
  },
  {
    id: 'vtol',
    label: '垂直起降模块',
    icon: Navigation,
    desc: '无需跑道即可起降，大幅降低部署门槛并提升复杂场景适应性。',
  },
  {
    id: 'avoid',
    label: '智能避障系统',
    icon: Shield,
    desc: '环境感知、航线避障与姿态控制协同工作，提升飞行安全冗余。',
  },
  {
    id: 'speed',
    label: '高效巡航性能',
    icon: Gauge,
    desc: '围绕时效、航程与能耗平衡设计，满足物流平台持续运营要求。',
  },
]

const 核心优势 = [
  { title: '垂直起降零场地', desc: '无需跑道，任意开阔地即可起降，突破传统固定翼场地限制，覆盖偏远无基础设施区域', highlight: true },
  { title: '固定翼长航时', desc: '固定翼气动布局赋予超长航时与高巡航效率，航程达200km，远超多旋翼10倍以上', highlight: true },
  { title: '大载重高效能', desc: '15kg有效载重满足绝大多数物流场景需求，单次飞行即可完成中小件批量运输任务' },
  { title: '全天候智能飞控', desc: '北斗+GPS双模导航、IMU惯性导航、视觉辅助三重冗余，支持4级风况安全飞行' },
  { title: '模块化快拆货舱', desc: '标准化货舱接口，30秒快速换舱，适配医药冷链、农产品、电商快递等多场景需求' },
  { title: '自主航线规划', desc: '基于AI的低空航路智能规划，自动规避禁飞区、气象风险区，实现航线最优化与自主运营' },
]

export function AdvantagesSection() {
  const [activePart, setActivePart] = useState(能力模块[0])
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

        <AnimatedEntry>
          <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="tech-frame p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.16em] text-primary">能力矩阵</div>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">核心模块协同工作</h3>
                  </div>
                  <div className="rounded-full border border-primary/16 bg-background/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
                    平台化运载体系
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {能力模块.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActivePart(item)}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        activePart.id === item.id
                          ? 'border-primary/26 bg-primary/10 text-primary shadow-[var(--shadow-glow-primary)]'
                          : 'border-border/70 bg-background/55 text-muted-foreground hover:border-primary/16 hover:text-foreground'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <div className="mt-3 text-sm font-semibold leading-6">{item.label}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-5 hud-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <activePart.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.16em] text-primary/70">当前模块</div>
                      <h4 className="mt-2 text-lg font-semibold text-foreground">{activePart.label}</h4>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{activePart.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {核心优势.map((adv, i) => (
                <GlassCard
                  key={i}
                  className={`cursor-pointer transition-all duration-300 ${expandedCard === i ? 'sm:col-span-2 border-primary/30' : ''} ${adv.highlight ? 'border-primary/20' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-primary/70">优势 {String(i + 1).padStart(2, '0')}</span>
                    {adv.highlight && <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-1 text-[10px] font-semibold text-accent">核心能力</span>}
                  </div>
                  <h4 className="mb-2 text-sm font-bold text-foreground">{adv.title}</h4>
                  <p className={`text-xs leading-relaxed text-muted-foreground transition-all duration-300 ${expandedCard === i ? 'line-clamp-none' : 'line-clamp-2'}`}>
                    {adv.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
