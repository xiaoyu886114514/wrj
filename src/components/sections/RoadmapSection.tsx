import { SectionHeader, AnimatedEntry, MetalCard } from '@/components/SharedComponents'
import { useState } from 'react'
import { Rocket, TestTube, MapPin, Globe } from 'lucide-react'

const PHASES = [
  {
    icon: TestTube,
    phase: '研发攻关期',
    period: '第1-6个月',
    status: 'active',
    milestones: [
      { task: '完成气动布局设计与风洞模拟验证', done: true },
      { task: '飞控核心算法开发与仿真测试', done: true },
      { task: '油电混合动力系统原型研制', done: false },
      { task: '智能货舱模块化方案定型', done: false },
    ],
    deliverables: '原型机制造完成，核心算法通过仿真验证',
  },
  {
    icon: Rocket,
    phase: '试飞验证期',
    period: '第7-12个月',
    status: 'upcoming',
    milestones: [
      { task: '首架原型机组装与地面测试', done: false },
      { task: '多场景飞行测试（山区/海岛/城市）', done: false },
      { task: '极端气象工况可靠性验证', done: false },
      { task: '适航认证资料准备与申报', done: false },
    ],
    deliverables: '完成500+架次试飞，通过适航认证初审',
  },
  {
    icon: MapPin,
    phase: '试点运营期',
    period: '第13-24个月',
    status: 'upcoming',
    milestones: [
      { task: '首批3条试点航线开通运营', done: false },
      { task: '与地方政府签署低空物流合作协议', done: false },
      { task: '小批量生产线搭建与交付', done: false },
      { task: '运营数据积累与商业模式验证', done: false },
    ],
    deliverables: '试点航线安全运营1000+架次，实现首批营收',
  },
  {
    icon: Globe,
    phase: '全域推广期',
    period: '第25-36个月',
    status: 'upcoming',
    milestones: [
      { task: '全国10+省市航线网络布局', done: false },
      { task: '量产产能提升至年产200架', done: false },
      { task: '飞控SaaS平台上线运营', done: false },
      { task: '启动A轮融资与战略合作', done: false },
    ],
    deliverables: '全国航线网络初步成型，年营收突破5000万',
  },
]

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section id="roadmap" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="发展规划"
          title="从0到1，步步为营的落地路径"
          subtitle="清晰的阶段性目标与可量化的里程碑节点，确保项目稳步推进、有序落地"
        />

        <AnimatedEntry>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Vertical timeline nav */}
            <div className="lg:col-span-4">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
                
                {PHASES.map((phase, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className={`relative flex items-start gap-5 mb-8 last:mb-0 w-full text-left group transition-all duration-300 ${activePhase === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  >
                    {/* Node */}
                    <div className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activePhase === i ? 'border-primary bg-primary/20 shadow-[var(--shadow-glow-primary)]' : 'border-border bg-card'}`}>
                      <phase.icon className={`w-4 h-4 transition-colors ${activePhase === i ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    {/* Label */}
                    <div className="pt-1.5">
                      <div className="text-[10px] font-bold text-primary tracking-widest uppercase">{phase.period}</div>
                      <div className="text-sm font-bold text-foreground mt-0.5">{phase.phase}</div>
                    </div>
                    {/* Active indicator */}
                    {activePhase === i && (
                      <div className="absolute left-5 top-12 bottom-0 w-px bg-primary/40" style={{ height: 'calc(100% - 48px)' }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <MetalCard className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {(() => { const Icon = PHASES[activePhase].icon; return <Icon className="w-6 h-6 text-primary" /> })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{PHASES[activePhase].phase}</h3>
                    <span className="text-xs text-primary tracking-wider">{PHASES[activePhase].period}</span>
                  </div>
                </div>

                {/* Milestones checklist */}
                <h4 className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-4">核心里程碑</h4>
                <div className="space-y-3 mb-8">
                  {PHASES[activePhase].milestones.map((m, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${m.done ? 'bg-primary/5 border border-primary/10' : 'bg-muted/30 border border-border/50'}`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${m.done ? 'border-primary bg-primary/20' : 'border-border'}`}>
                        {m.done && <span className="text-primary text-[10px]">&#10003;</span>}
                      </div>
                      <span className={`text-sm ${m.done ? 'text-foreground' : 'text-muted-foreground'}`}>{m.task}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">阶段交付成果</span>
                  <p className="text-sm text-foreground mt-1">{PHASES[activePhase].deliverables}</p>
                </div>
              </MetalCard>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
