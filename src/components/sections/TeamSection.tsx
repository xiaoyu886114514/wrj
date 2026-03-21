import { useState } from 'react'
import { SectionHeader, GlassCard, AnimatedEntry, MetalCard } from '@/components/SharedComponents'
import { Download, Mail, FileText, Award, TestTube, ClipboardCheck } from 'lucide-react'

const TEAM_MEMBERS = [
  { name: '张明远', role: '项目负责人', title: '总体统筹与商业规划', skills: ['商业策划', '融资路演', '团队管理'], contribution: '负责项目整体战略规划、商业模式设计与对外合作拓展' },
  { name: '李思航', role: '技术总监', title: '飞控系统与算法开发', skills: ['飞控算法', '嵌入式开发', 'AI导航'], contribution: '主导飞控核心算法研发、传感器融合方案设计与系统集成' },
  { name: '王晨曦', role: '结构设计师', title: '无人机结构与动力系统', skills: ['气动设计', '复合材料', '动力系统'], contribution: '负责机体结构设计、气动布局优化与动力系统集成测试' },
  { name: '陈雨桐', role: '产品经理', title: '产品定义与用户研究', skills: ['需求分析', '原型设计', '用户研究'], contribution: '负责产品需求定义、应用场景调研与智能货舱系统设计' },
  { name: '刘星辰', role: '运营总监', title: '运营体系与市场推广', skills: ['运营管理', '市场推广', '政府关系'], contribution: '负责试点运营体系搭建、航线规划与政府合作对接' },
  { name: '赵一帆', role: '财务顾问', title: '财务规划与风险管控', skills: ['财务分析', '风险管理', '投融资'], contribution: '负责项目财务规划、融资策略制定与风险管控体系建设' },
]

const RESOURCES = [
  { icon: FileText, title: '项目完整策划书', desc: '包含项目背景、技术方案、商业模式等完整内容', type: '文档' },
  { icon: Award, title: '专利与知识产权', desc: '飞控算法、货舱系统等核心技术专利证书', type: '文档' },
  { icon: TestTube, title: '产品测试报告', desc: '原型机飞行测试数据、性能验证报告', type: '文档' },
  { icon: ClipboardCheck, title: '赛事相关材料', desc: '三创赛参赛申报材料、项目路演演示文件', type: '资料包' },
]

export function TeamSection() {
  const [activeMember, setActiveMember] = useState(0)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="team" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="section-container relative">
        <SectionHeader
          tag="团队介绍"
          title="跨学科精英团队，共筑科创梦想"
          subtitle="汇聚航空工程、智能控制、商业运营等多领域人才，以专业能力驱动项目落地"
        />

        {/* Team grid */}
        <AnimatedEntry>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {TEAM_MEMBERS.map((member, i) => (
              <button
                key={i}
                onClick={() => setActiveMember(i)}
                className={`text-center p-4 rounded-xl border transition-all duration-300 ${activeMember === i ? 'bg-primary/10 border-primary/30 shadow-[var(--shadow-glow-primary)]' : 'bg-card/50 border-border hover:border-border hover:bg-muted/30'}`}
              >
                {/* Avatar placeholder with initials */}
                <div className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold transition-all duration-300 ${activeMember === i ? 'bg-primary/20 text-primary border-2 border-primary/30' : 'bg-muted text-muted-foreground border-2 border-border'}`}>
                  {member.name.charAt(0)}
                </div>
                <div className="text-sm font-bold text-foreground">{member.name}</div>
                <div className="text-[10px] text-primary mt-0.5">{member.role}</div>
              </button>
            ))}
          </div>

          {/* Active member detail */}
          <MetalCard className="p-8 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-3xl font-bold text-primary mb-4">
                  {TEAM_MEMBERS[activeMember].name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-foreground">{TEAM_MEMBERS[activeMember].name}</h3>
                <span className="text-sm text-primary mt-1">{TEAM_MEMBERS[activeMember].role}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{TEAM_MEMBERS[activeMember].title}</span>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-3">核心专长</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {TEAM_MEMBERS[activeMember].skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-primary border border-primary/20 rounded-full bg-primary/5">
                      {skill}
                    </span>
                  ))}
                </div>
                <h4 className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-3">项目贡献</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{TEAM_MEMBERS[activeMember].contribution}</p>
              </div>
            </div>
          </MetalCard>
        </AnimatedEntry>

        {/* Resources download */}
        <AnimatedEntry delay={200}>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Download className="w-5 h-5 text-primary" />
            项目资料
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {RESOURCES.map((res, i) => (
              <AnimatedEntry key={i} delay={i * 80}>
                <GlassCard className="group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <res.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate">{res.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{res.desc}</p>
                      <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{res.type}</span>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedEntry>
            ))}
          </div>
        </AnimatedEntry>

        {/* Contact form */}
        <AnimatedEntry delay={400}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2 text-center flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              合作咨询
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-8">如您对本项目感兴趣，欢迎留言咨询，我们将尽快回复</p>
            <MetalCard className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">&#10003;</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">提交成功</h4>
                  <p className="text-sm text-muted-foreground">感谢您的关注，我们将尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">姓名</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        placeholder="请输入姓名"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">邮箱</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        placeholder="请输入邮箱"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">留言内容</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      placeholder="请输入合作意向或咨询内容"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-semibold hover:bg-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  >
                    提交留言
                  </button>
                </form>
              )}
            </MetalCard>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  )
}
