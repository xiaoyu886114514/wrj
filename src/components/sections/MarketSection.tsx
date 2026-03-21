import { SectionHeader, GlassCard, AnimatedEntry } from '@/components/SharedComponents'
import { useCountUp } from '@/hooks/useAnimations'
import { useState } from 'react'
import { TrendingUp, AlertTriangle, Building2, FileCheck } from 'lucide-react'

const POLICIES = [
  { year: '2021', title: '《无人驾驶航空器飞行管理暂行条例》', desc: '国务院首次从国家层面为无人机物流运输提供法规支持框架' },
  { year: '2023', title: '《绿色航空制造业发展纲要》', desc: '工信部等四部门联合发布，将无人机物流列为绿色航空重点发展方向' },
  { year: '2024', title: '《低空经济发展行动方案》', desc: '国务院提出到2030年低空经济规模超万亿，无人机物流成为核心赛道' },
  { year: '2025', title: '低空经济元年政策密集落地', desc: '全国20+省市出台低空经济扶持政策，低空物流试点全面铺开' },
]

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    title: '偏远地区物流覆盖难',
    problem: '山区、海岛、乡村等偏远地区传统物流成本高、时效差，末端配送难以覆盖',
    solution: '垂直起降无需跑道，直达偏远末端，突破地理限制实现全域覆盖',
  },
  {
    icon: Building2,
    title: '应急物资运输瓶颈',
    problem: '自然灾害、疫情等突发事件中，地面交通中断导致救援物资无法及时送达',
    solution: '空中直飞绕过地面阻碍，30分钟内完成50km半径应急物资精准投送',
  },
  {
    icon: TrendingUp,
    title: '传统无人机性能局限',
    problem: '多旋翼无人机航程短、载重小；固定翼需要跑道起降，场景受限严重',
    solution: '垂直起降+固定翼双模融合，兼顾零场地起降与长航时大载重优势',
  },
  {
    icon: FileCheck,
    title: '低空物流标准体系缺失',
    problem: '行业处于早期阶段，缺乏统一的无人机物流运营标准与安全管理规范',
    solution: '率先构建标准化运营体系，参与行业标准制定，占据先发优势',
  },
]

export function MarketSection() {
  const [activePolicy, setActivePolicy] = useState(3)
  const marketSize = useCountUp(5000, 2500)
  const growthRate = useCountUp(30, 2000)
  const demandGap = useCountUp(85, 2200)

  return (
    <section id="market" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="Market Demand"
          title="政策红利驱动，万亿蓝海已至"
          subtitle="低空经济上升为国家战略，无人机物流成为低空经济核心赛道，市场需求爆发式增长"
        />

        {/* Market data cards */}
        <AnimatedEntry>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <GlassCard glow className="text-center py-8">
              <div className="data-value text-4xl lg:text-5xl font-black">
                <span ref={marketSize.ref}>{marketSize.count}</span>
                <span className="text-lg ml-1 text-primary/70">亿</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">2030年低空物流市场规模预测</div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 rounded-full" style={{ width: '78%' }} />
              </div>
            </GlassCard>

            <GlassCard glow className="text-center py-8">
              <div className="data-value text-4xl lg:text-5xl font-black">
                <span ref={growthRate.ref}>{growthRate.count}</span>
                <span className="text-lg ml-1 text-primary/70">%+</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">年均复合增长率</div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 rounded-full" style={{ width: '60%' }} />
              </div>
            </GlassCard>

            <GlassCard glow className="text-center py-8">
              <div className="data-value text-4xl lg:text-5xl font-black">
                <span ref={demandGap.ref}>{demandGap.count}</span>
                <span className="text-lg ml-1 text-primary/70">%</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">偏远地区物流需求缺口</div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent/60 rounded-full" style={{ width: '85%' }} />
              </div>
            </GlassCard>
          </div>
        </AnimatedEntry>

        {/* Policy timeline */}
        <AnimatedEntry delay={200}>
          <div className="mb-20">
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              政策红利时间线
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                {POLICIES.map((policy, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePolicy(i)}
                    className={`relative flex items-start gap-6 mb-6 w-full text-left group transition-all duration-300 ${activePolicy === i ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                  >
                    <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activePolicy === i ? 'border-primary bg-primary/20 shadow-[var(--shadow-glow-primary)]' : 'border-border bg-muted'}`}>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activePolicy === i ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary mb-1">{policy.year}</div>
                      <div className="text-sm font-semibold text-foreground">{policy.title}</div>
                    </div>
                  </button>
                ))}
              </div>
              {/* Detail */}
              <GlassCard className="flex items-center">
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest">{POLICIES[activePolicy].year}</span>
                  <h4 className="text-lg font-bold text-foreground mt-2 mb-3">{POLICIES[activePolicy].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{POLICIES[activePolicy].desc}</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </AnimatedEntry>

        {/* Pain points */}
        <AnimatedEntry delay={400}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            行业痛点与解决方案
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((item, i) => (
              <AnimatedEntry key={i} delay={i * 100}>
                <GlassCard className="group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.problem}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <span className="text-primary text-xs mt-0.5 flex-shrink-0">&#10003;</span>
                        <p className="text-xs text-primary/80 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}