import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry, MetalCard, TabGroup } from '@/components/SharedComponents'
import { useCountUp } from '@/hooks/useAnimations'
import { Layers, Cpu, Zap, Box, ShieldCheck, Milestone } from 'lucide-react'

const SYSTEMS = [
  { icon: Layers, label: '机身结构', desc: '碳纤维+航空铝合金复合材料机身，轻量化设计，翼展3.2m，整机重量仅18kg', specs: [{ k: '翼展', v: '3.2m' }, { k: '整机重量', v: '18kg' }, { k: '材料', v: '碳纤维复合' }] },
  { icon: Cpu, label: '飞控导航', desc: '自研Fly-X飞控系统，GPS/北斗双模+IMU+视觉三重冗余导航，厘米级定位精度', specs: [{ k: '定位精度', v: '±2cm' }, { k: '导航模式', v: '三重冗余' }, { k: '航路规划', v: 'AI智能' }] },
  { icon: Zap, label: '动力系统', desc: '油电混合动力方案，锂电驱动垂直起降，燃油发电驱动巡航，能效比提升40%', specs: [{ k: '能效提升', v: '40%' }, { k: '巡航功率', v: '800W' }, { k: '冗余备份', v: '双路供电' }] },
  { icon: Box, label: '智能货舱', desc: '模块化快拆设计，支持标准物流箱、冷链保温箱、医药专用箱等多种舱体快速切换', specs: [{ k: '换舱时间', v: '30s' }, { k: '舱体类型', v: '5种标准' }, { k: '温控范围', v: '-20~60°C' }] },
  { icon: ShieldCheck, label: '避障系统', desc: '毫米波雷达+双目视觉+超声波三维感知融合，360度无死角避障，安全裕度2m', specs: [{ k: '感知范围', v: '360°' }, { k: '安全距离', v: '≥2m' }, { k: '响应延迟', v: '<100ms' }] },
]

const TECH_TIMELINE = [
  { phase: '基础研发', period: '第一阶段', items: ['气动布局优化设计', '飞控系统核心算法开发', '垂直起降-巡航过渡控制方案验证'] },
  { phase: '系统集成', period: '第二阶段', items: ['全系统联调联试', '动力系统性能测试', '智能货舱模块化接口标准化'] },
  { phase: '试飞验证', period: '第三阶段', items: ['多场景试飞测试', '极端工况可靠性验证', '飞行安全与合规认证'] },
  { phase: '量产落地', period: '第四阶段', items: ['供应链体系搭建', '小批量试生产', '首批试点运营交付'] },
]

export function TechnologySection() {
  const [activeSystem, setActiveSystem] = useState(0)
  const efficiency = useCountUp(40, 2000)
  const range = useCountUp(200, 2200)
  const precision = useCountUp(2, 1500)

  return (
    <section id="technology" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="技术路线"
          title="从机体到飞控的全链路技术方案"
          subtitle="从气动设计到飞控算法，从动力系统到智能货舱，以系统集成方式构建可验证、可演进的平台能力"
        />

        {/* System exploded view */}
        <AnimatedEntry>
          <div className="mb-20">
            <TabGroup
              items={SYSTEMS.map(s => ({ icon: s.icon, label: s.label }))}
              activeIndex={activeSystem}
              onChange={setActiveSystem}
              className="mb-8 justify-center"
            />

            <MetalCard className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {(() => { const Icon = SYSTEMS[activeSystem].icon; return <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div> })()}
                    <h3 className="text-xl font-bold text-foreground">{SYSTEMS[activeSystem].label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{SYSTEMS[activeSystem].desc}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {SYSTEMS[activeSystem].specs.map((spec, i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm font-bold text-primary">{spec.v}</div>
                        <div className="text-[10px] text-muted-foreground mt-1">{spec.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/dji-flycart30.png"
                    alt="大疆运载无人机官方参考图"
                    loading="lazy"
                    decoding="async"
                    className="max-w-[320px] w-full object-contain opacity-80 drop-shadow-[0_0_30px_rgba(0,229,255,0.1)]"
                  />
                  <div className="mt-4 text-center text-[11px] text-muted-foreground/80">
                    行业运载无人机视觉参考
                  </div>
                </div>
              </div>
            </MetalCard>
          </div>
        </AnimatedEntry>

        {/* Core tech dashboard */}
        <AnimatedEntry delay={200}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            核心技术参数仪表盘
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { label: '能效提升', value: efficiency.count, unit: '%', ref: efficiency.ref, color: 'primary' },
              { label: '最大航程', value: range.count, unit: 'km', ref: range.ref, color: 'primary' },
              { label: '定位精度', value: precision.count, unit: 'cm', ref: precision.ref, color: 'accent' },
            ].map((item, i) => (
              <GlassCard key={i} glow className="text-center py-8">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke={item.color === 'accent' ? 'hsl(var(--accent))' : 'hsl(var(--primary))'}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${(item.value / (i === 1 ? 250 : i === 2 ? 5 : 50)) * 264} 264`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span ref={item.ref} className="data-value text-2xl font-black">{item.value}</span>
                      <span className="text-xs text-primary/70 ml-0.5">{item.unit}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </GlassCard>
            ))}
          </div>
        </AnimatedEntry>

        {/* Tech roadmap timeline */}
        <AnimatedEntry delay={400}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Milestone className="w-5 h-5 text-primary" />
            技术研发与落地路线
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_TIMELINE.map((phase, i) => (
              <AnimatedEntry key={i} delay={i * 100}>
                <MetalCard className="p-6 h-full relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-[10px] text-primary tracking-widest uppercase">{phase.period}</div>
                      <div className="text-sm font-bold text-foreground">{phase.phase}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30">
                      &#8594;
                    </div>
                  )}
                </MetalCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
