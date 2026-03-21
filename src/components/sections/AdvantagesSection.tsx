import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry } from '@/components/SharedComponents'
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
          tag="Core Advantages"
          title="垂直起降 + 固定翼，重新定义无人机物流"
          subtitle="融合垂直起降灵活性与固定翼高效巡航优势，打造适用于全域低空物流的最优技术方案"
        />

        {/* Interactive drone model area */}
        <AnimatedEntry>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Drone with hotspots */}
            <div className="relative aspect-square max-w-[500px] mx-auto w-full">
              <img
                src="/images/drone-main.png"
                alt="VTOL固定翼无人机结构"
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.12)] animate-drone-hover"
              />
              {/* Hotspot dots */}
              {DRONE_PARTS.map(part => (
                <button
                  key={part.id}
                  onClick={() => setActivePart(activePart === part.id ? null : part.id)}
                  className={`absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${activePart === part.id ? 'z-20 scale-125' : 'z-10'}`}
                  style={{ left: part.x, top: part.y }}
                >
                  <span className={`block w-full h-full rounded-full border-2 transition-all duration-300 ${activePart === part.id ? 'bg-primary border-primary shadow-[var(--shadow-glow-primary)]' : 'bg-primary/30 border-primary/50 group-hover:bg-primary/50'}`} />
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </button>
              ))}

              {/* Detail popup */}
              {activePart && (() => {
                const part = DRONE_PARTS.find(p => p.id === activePart)
                if (!part) return null
                return (
                  <div className="absolute bottom-4 left-4 right-4 z-30 glass-card p-4 animate-fade-in-up border-primary/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <part.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">{part.label}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{part.desc}</p>
                  </div>
                )
              })()}
            </div>

            {/* Core advantages cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_ADVANTAGES.map((adv, i) => (
                <GlassCard
                  key={i}
                  className={`cursor-pointer transition-all duration-300 ${expandedCard === i ? 'sm:col-span-2 border-primary/30' : ''} ${adv.highlight ? 'border-primary/20' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                >
                  <div className="flex items-start gap-3">
                    {adv.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">{adv.title}</h4>
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