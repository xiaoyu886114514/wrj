import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry, MetalCard } from '@/components/SharedComponents'
import { Sprout, HeartPulse, Ship, Truck, Users, CircleDollarSign, Handshake, Building } from 'lucide-react'

const SCENARIOS = [
  {
    id: 'rural',
    icon: Sprout,
    title: '乡村振兴·农产品上行',
    image: '/images/scene-rural.webp',
    desc: '为偏远山区农村提供农产品快速外运通道，将新鲜农产品从田间地头直达城市集散中心，破解农产品上行「最初一公里」难题',
    stats: [
      { label: '运输时效提升', value: '300%' },
      { label: '物流成本降低', value: '40%' },
      { label: '覆盖行政村', value: '2000+' },
    ],
  },
  {
    id: 'emergency',
    icon: HeartPulse,
    title: '应急救援·物资运输',
    image: '/images/scene-emergency.webp',
    desc: '自然灾害、疫情等突发事件中，当地面交通中断时，通过无人机空中通道实现应急物资精准投送，打通生命救援通道',
    stats: [
      { label: '响应时间', value: '<30min' },
      { label: '投送半径', value: '100km' },
      { label: '单次载药量', value: '15kg' },
    ],
  },
  {
    id: 'island',
    icon: Ship,
    title: '海岛补给·偏远配送',
    image: '/images/scene-island.webp',
    desc: '为海岛、边境哨所等传统物流难以覆盖的偏远区域提供定期与应急补给服务，实现全域物流无死角覆盖',
    stats: [
      { label: '跨海距离', value: '50km+' },
      { label: '配送频率', value: '每日' },
      { label: '补给成本降低', value: '60%' },
    ],
  },
  {
    id: 'city',
    icon: Truck,
    title: '城市场景·极速配送',
    image: '/images/scene-city.webp',
    desc: '城市医疗样本、紧急文件、高价值小件等特殊场景的点对点极速空中配送，绕过地面交通拥堵',
    stats: [
      { label: '配送时效', value: '15min' },
      { label: '准时率', value: '99.5%' },
      { label: '服务覆盖', value: '全城' },
    ],
  },
]

const BUSINESS_MODELS = [
  { icon: Users, title: '核心客群', items: ['政府应急管理部门', '农业合作社与农企', '医疗机构与血站', '电商物流平台', '海岛/边境驻军后勤'] },
  { icon: CircleDollarSign, title: '盈利模式', items: ['无人机物流运营服务费', '航线定制与开发服务', '飞控系统SaaS授权', '无人机整机销售/租赁', '数据增值与航路规划服务'] },
  { icon: Handshake, title: '合作生态', items: ['地方政府低空经济合作', '物流企业联合运营', '高校科研成果转化', '供应链上下游协同', '行业标准联合制定'] },
  { icon: Building, title: '壁垒构建', items: ['垂直起降核心专利', '航线网络先发优势', '全栈自研技术体系', '标准化运营规范', '政府合作资源积累'] },
]

export function BusinessSection() {
  const [activeScene, setActiveScene] = useState(0)

  return (
    <section id="business" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="商业模式"
          title="商业闭环清晰，多元盈利可期"
          subtitle="构建从核心客群到服务落地、盈利转化的完整商业闭环，打造可持续增长的低空物流运营平台"
        />

        {/* Business model overview */}
        <AnimatedEntry>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {BUSINESS_MODELS.map((model, i) => (
              <AnimatedEntry key={i} delay={i * 100}>
                <MetalCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <model.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground">{model.title}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {model.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </MetalCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>

        {/* Application scenarios */}
        <AnimatedEntry delay={200}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            四大核心应用场景
          </h3>

          {/* Scene tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {SCENARIOS.map((scene, i) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => setActiveScene(i)}
                className={`focus-ring flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${activeScene === i ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-muted/50 text-muted-foreground border border-border hover:text-foreground'}`}
              >
                <scene.icon className="w-4 h-4" />
                {scene.title.split('·')[0]}
              </button>
            ))}
          </div>

          {/* Active scene detail */}
          <GlassCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <img
                  src={SCENARIOS[activeScene].image}
                  alt={SCENARIOS[activeScene].title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-card/80" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {(() => { const Icon = SCENARIOS[activeScene].icon; return <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center"><Icon className="w-5 h-5 text-accent" /></div> })()}
                  <h4 className="text-lg font-bold text-foreground">{SCENARIOS[activeScene].title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{SCENARIOS[activeScene].desc}</p>
                <div className="grid grid-cols-3 gap-4">
                  {SCENARIOS[activeScene].stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-muted/30 border border-border/50">
                      <div className="text-sm font-bold text-accent">{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedEntry>
      </div>
    </section>
  )
}
