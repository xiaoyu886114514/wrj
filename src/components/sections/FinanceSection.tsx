import { SectionHeader, GlassCard, AnimatedEntry, MetalCard } from '@/components/SharedComponents'
import { useCountUp } from '@/hooks/useAnimations'
import { useState } from 'react'
import { ShieldAlert, Cloud, Cpu, Scale, AlertTriangle, TrendingUp } from 'lucide-react'

const RISKS = [
  { icon: ShieldAlert, type: '政策法规风险', level: '中', color: 'accent', desc: '低空空域管理政策变化可能影响运营资质与航线审批', measures: ['紧密跟踪政策动态，配备专职政策研究团队', '提前获取多区域试点运营许可', '参与行业标准制定，争取话语权'] },
  { icon: Cloud, type: '气象环境风险', level: '中', color: 'accent', desc: '复杂气象条件（强风、暴雨、雾霾等）可能影响飞行安全与运营效率', measures: ['接入气象大数据系统，实时预警与航线动态调整', '设计抗4级风况飞行能力', '建立恶劣天气备降与地面转运预案'] },
  { icon: Cpu, type: '技术迭代风险', level: '低', color: 'primary', desc: '低空物流技术快速迭代，竞品可能出现替代性技术方案', measures: ['持续研发投入，保持核心技术领先', '申请专利保护关键技术壁垒', '与高校共建联合实验室跟踪前沿'] },
  { icon: Scale, type: '市场竞争风险', level: '中', color: 'accent', desc: '大型物流企业与无人机厂商可能加速布局低空物流赛道', measures: ['差异化定位偏远地区与应急场景', '先发优势构建航线网络壁垒', '与政府深度合作建立准入门槛'] },
  { icon: AlertTriangle, type: '安全运营风险', level: '高', color: 'destructive', desc: '飞行事故可能造成人员伤害与财产损失，影响行业与项目声誉', measures: ['三重冗余飞控+全程监控兜底', '购买足额航空责任保险', '建立安全事件响应与处置SOP'] },
  { icon: TrendingUp, type: '资金链风险', level: '中', color: 'accent', desc: '研发与运营前期投入大，盈利周期较长可能导致资金压力', measures: ['分阶段融资策略降低单次募资压力', '试点期即实现正向现金流', '政府补贴与产业基金多渠道融资'] },
]

export function FinanceSection() {
  const [activeRisk, setActiveRisk] = useState<number | null>(null)
  const startupFund = useCountUp(800, 2000)
  const breakeven = useCountUp(18, 2000)
  const roi = useCountUp(300, 2500)
  const revenue3y = useCountUp(8000, 2500)

  // Revenue projection data for visual bar chart
  const revenueData = [
    { year: '第1年', revenue: 200, cost: 500 },
    { year: '第2年', revenue: 1500, cost: 1200 },
    { year: '第3年', revenue: 5000, cost: 2800 },
    { year: '第4年', revenue: 8000, cost: 3500 },
    { year: '第5年', revenue: 15000, cost: 5000 },
  ]
  const maxVal = 15000

  return (
    <section id="finance" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="财务预测"
          title="财务规划稳健，投资回报可期"
          subtitle="清晰的资金规划、可量化的盈利模型与全面的风险管控体系，为项目可持续发展保驾护航"
        />

        {/* Key financial metrics */}
        <AnimatedEntry>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { label: '项目启动资金', value: startupFund.count, unit: '万', ref: startupFund.ref },
              { label: '盈亏平衡周期', value: breakeven.count, unit: '个月', ref: breakeven.ref },
              { label: '3年投资回报率', value: roi.count, unit: '%', ref: roi.ref },
              { label: '第3年营收目标', value: revenue3y.count, unit: '万', ref: revenue3y.ref },
            ].map((item, i) => (
              <GlassCard key={i} glow className="text-center py-6">
                <div className="data-value text-3xl lg:text-4xl font-black">
                  <span ref={item.ref}>{item.value}</span>
                  <span className="text-sm ml-1 text-primary/70">{item.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">{item.label}</div>
              </GlassCard>
            ))}
          </div>
        </AnimatedEntry>

        {/* Revenue projection chart */}
        <AnimatedEntry delay={200}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            五年营收预测
          </h3>
          <MetalCard className="p-8 mb-16">
            <div className="flex items-end gap-6 h-64">
              {revenueData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="text-[10px] text-primary font-bold">{d.revenue >= 1000 ? `${(d.revenue / 10000).toFixed(1)}亿` : `${d.revenue}万`}</div>
                  <div className="w-full flex gap-1 items-end" style={{ height: `${(d.revenue / maxVal) * 100}%`, minHeight: '8px' }}>
                    <div
                      className="flex-1 rounded-t-sm transition-all duration-700"
                      style={{
                        height: `${(d.cost / d.revenue) * 100}%`,
                        background: 'hsl(var(--muted))',
                        minHeight: '4px',
                      }}
                    />
                    <div
                      className="flex-1 rounded-t-sm transition-all duration-700"
                      style={{
                        height: '100%',
                        background: 'hsl(var(--primary) / 0.6)',
                      }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium pt-2 border-t border-border/50 w-full text-center">{d.year}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border/30">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(var(--primary) / 0.6)' }} />
                营收
              </span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-sm bg-muted" />
                成本
              </span>
            </div>
          </MetalCard>
        </AnimatedEntry>

        {/* Risk matrix */}
        <AnimatedEntry delay={400}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-accent" />
            风险预估与应对方案
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RISKS.map((risk, i) => (
              <AnimatedEntry key={i} delay={i * 80}>
                <GlassCard
                  className={`cursor-pointer h-full transition-all duration-300 ${activeRisk === i ? 'border-primary/40' : ''}`}
                  onClick={() => setActiveRisk(activeRisk === i ? null : i)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-foreground truncate">{risk.type}</h4>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border flex-shrink-0 ${risk.level === '高' ? 'text-destructive border-destructive/30 bg-destructive/10' : risk.level === '中' ? 'text-accent border-accent/30 bg-accent/10' : 'text-primary border-primary/30 bg-primary/10'}`}>
                          {risk.level}风险
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{risk.desc}</p>
                    </div>
                  </div>
                  {activeRisk === i && (
                    <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
                      <span className="text-[10px] font-bold tracking-[0.16em] text-primary">应对措施</span>
                      {risk.measures.map((m, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
