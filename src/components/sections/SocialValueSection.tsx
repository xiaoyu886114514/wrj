import { SectionHeader, GlassCard, AnimatedEntry } from '@/components/SharedComponents'
import { useCountUp } from '@/hooks/useAnimations'
import { Leaf, Heart, Briefcase, Recycle } from 'lucide-react'

const VALUES = [
  {
    icon: Heart,
    title: '乡村振兴助农',
    desc: '为偏远乡村打通农产品空中上行通道，帮助农民增收致富，助力国家乡村振兴战略落地',
    stats: [
      { label: '覆盖偏远行政村', value: 2000, unit: '+' },
      { label: '帮助农户增收', value: 30, unit: '%' },
    ],
  },
  {
    icon: Briefcase,
    title: '应急救援保障',
    desc: '构建低空应急物资运输通道，在自然灾害、公共卫生事件中为生命救援提供关键支撑',
    stats: [
      { label: '应急响应时间', value: 30, unit: 'min' },
      { label: '救援覆盖半径', value: 100, unit: 'km' },
    ],
  },
  {
    icon: Leaf,
    title: '低碳绿色运输',
    desc: '油电混合+电动化技术路线，相比传统地面运输方式大幅降低碳排放，践行绿色物流理念',
    stats: [
      { label: '碳排放降低', value: 60, unit: '%' },
      { label: '能效提升', value: 40, unit: '%' },
    ],
  },
  {
    icon: Recycle,
    title: '低空经济就业',
    desc: '围绕无人机制造、运营、维护、航线管理等环节创造大量新兴就业岗位，带动产业链发展',
    stats: [
      { label: '直接就业岗位', value: 500, unit: '+' },
      { label: '产业链带动', value: 3000, unit: '+' },
    ],
  },
]

const SUSTAINABILITY = [
  { title: '技术持续迭代', desc: '持续投入研发，保持核心技术领先，3年内推出第二代机型，性能全面提升50%' },
  { title: '航线网络效应', desc: '航线越多运营成本越低，形成规模效应壁垒，后来者难以复制' },
  { title: '数据资产积累', desc: '海量飞行数据持续沉淀，赋能AI航路规划与安全系统持续进化' },
  { title: '标准化先发优势', desc: '率先建立行业运营标准体系，参与国标制定，形成标准制定者的长期竞争力' },
]

function StatCounter({ end, unit }: { end: number; unit: string }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <span ref={ref} className="data-value text-2xl font-black">
      {count}<span className="text-sm ml-0.5 text-primary/70">{unit}</span>
    </span>
  )
}

export function SocialValueSection() {
  return (
    <section id="social" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="Social Value"
          title="科技向善，赋能社会可持续发展"
          subtitle="以无人机物流为载体，在乡村振兴、应急救援、绿色运输、就业创造等维度创造深远社会价值"
        />

        {/* Value cards with animated counters */}
        <AnimatedEntry>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {VALUES.map((item, i) => (
              <AnimatedEntry key={i} delay={i * 100}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {item.stats.map((stat, j) => (
                          <div key={j} className="text-center p-3 rounded-lg bg-muted/30 border border-border/50">
                            <StatCounter end={stat.value} unit={stat.unit} />
                            <div className="text-[10px] text-muted-foreground mt-1">{stat.label}</div>
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

        {/* Sustainability */}
        <AnimatedEntry delay={300}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Recycle className="w-5 h-5 text-primary" />
            可持续发展战略
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUSTAINABILITY.map((item, i) => (
              <AnimatedEntry key={i} delay={i * 80}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}