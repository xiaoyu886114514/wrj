import { useEffect, useRef, useState } from 'react'
import { SectionHeader, AnimatedEntry, MetalCard } from '@/components/SharedComponents'
import { Download, Mail, FileText, Award, TestTube, ClipboardCheck } from 'lucide-react'
import { projectDownloads } from '@/lib/siteMeta'

const TEAM_MEMBERS = [
  { name: '张明远', role: '项目负责人', title: '总体统筹与商业规划', skills: ['商业策划', '融资路演', '团队管理'], contribution: '负责项目整体战略规划、商业模式设计与对外合作拓展' },
  { name: '李思航', role: '技术总监', title: '飞控系统与算法开发', skills: ['飞控算法', '嵌入式开发', 'AI导航'], contribution: '主导飞控核心算法研发、传感器融合方案设计与系统集成' },
  { name: '王晨曦', role: '结构设计师', title: '无人机结构与动力系统', skills: ['气动设计', '复合材料', '动力系统'], contribution: '负责机体结构设计、气动布局优化与动力系统集成测试' },
  { name: '陈雨桐', role: '产品经理', title: '产品定义与用户研究', skills: ['需求分析', '原型设计', '用户研究'], contribution: '负责产品需求定义、应用场景调研与智能货舱系统设计' },
  { name: '刘星辰', role: '运营总监', title: '运营体系与市场推广', skills: ['运营管理', '市场推广', '政府关系'], contribution: '负责试点运营体系搭建、航线规划与政府合作对接' },
  { name: '赵一帆', role: '财务顾问', title: '财务规划与风险管控', skills: ['财务分析', '风险管理', '投融资'], contribution: '负责项目财务规划、融资策略制定与风险管控体系建设' },
]

const RESOURCE_ICONS = {
  brief: FileText,
  ip: Award,
  test: TestTube,
  competition: ClipboardCheck,
}

export function TeamSection() {
  const [activeMember, setActiveMember] = useState(0)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const exportedAt = new Date().toLocaleString('zh-CN', { hour12: false })
    const contactSheet = [
      '翼启全域｜合作联系单',
      '',
      `联系人：${contactForm.name}`,
      `联系邮箱：${contactForm.email}`,
      `导出时间：${exportedAt}`,
      '',
      '合作需求：',
      contactForm.message,
      '',
      '说明：本联系单由官网公开展示版自动导出，用于在线下答辩或后续对接时直接递交项目团队。',
    ].join('\n')

    const blob = new Blob([contactSheet], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const downloadLink = document.createElement('a')
    const safeName = contactForm.name.trim().replace(/[^\w\u4e00-\u9fa5-]+/g, '-')
    downloadLink.href = url
    downloadLink.download = `翼启全域-合作联系单-${safeName || '访客'}.txt`
    downloadLink.click()
    URL.revokeObjectURL(url)

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(contactSheet).catch(() => {})
    }

    setSubmitted(true)
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current)
    }
    resetTimerRef.current = window.setTimeout(() => setSubmitted(false), 3200)
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

        <AnimatedEntry>
          <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 lg:grid-cols-6">
            {TEAM_MEMBERS.map((member, i) => (
              <button
                key={member.name}
                type="button"
                aria-pressed={activeMember === i}
                onClick={() => setActiveMember(i)}
                className={`focus-ring text-center rounded-xl border p-4 transition-all duration-300 ${activeMember === i ? 'border-primary/30 bg-primary/10 shadow-[var(--shadow-glow-primary)]' : 'border-border bg-card/50 hover:border-border hover:bg-muted/30'}`}
              >
                <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg font-bold transition-all duration-300 ${activeMember === i ? 'border-primary/30 bg-primary/20 text-primary' : 'border-border bg-muted text-muted-foreground'}`}>
                  {member.name.charAt(0)}
                </div>
                <div className="text-sm font-bold text-foreground">{member.name}</div>
                <div className="mt-0.5 text-[10px] text-primary">{member.role}</div>
              </button>
            ))}
          </div>

          <MetalCard className="mb-20 p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center lg:col-span-1 lg:items-start">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/10 text-3xl font-bold text-primary">
                  {TEAM_MEMBERS[activeMember].name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-foreground">{TEAM_MEMBERS[activeMember].name}</h3>
                <span className="mt-1 text-sm text-primary">{TEAM_MEMBERS[activeMember].role}</span>
                <span className="mt-0.5 text-xs text-muted-foreground">{TEAM_MEMBERS[activeMember].title}</span>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">核心专长</h4>
                <div className="mb-6 flex flex-wrap gap-2">
                  {TEAM_MEMBERS[activeMember].skills.map(skill => (
                    <span key={skill} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">项目贡献</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{TEAM_MEMBERS[activeMember].contribution}</p>
              </div>
            </div>
          </MetalCard>
        </AnimatedEntry>

        <AnimatedEntry delay={200}>
          <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-foreground">
            <Download className="h-5 w-5 text-primary" />
            项目资料
          </h3>
          <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectDownloads.map((resource, i) => {
              const Icon = RESOURCE_ICONS[resource.id]

              return (
                <AnimatedEntry key={resource.id} delay={i * 80}>
                  <a
                    href={resource.href}
                    download={resource.filename}
                    className="focus-ring glass-card group block h-full p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-foreground">{resource.title}</h4>
                        <p className="mt-1 text-[11px] leading-5 text-muted-foreground">{resource.desc}</p>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <span className="inline-flex rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground">{resource.type}</span>
                          <span className="text-[11px] font-semibold text-primary">立即下载</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimatedEntry>
              )
            })}
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={400}>
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-2 flex items-center justify-center gap-3 text-center text-xl font-bold text-foreground">
              <Mail className="h-5 w-5 text-primary" />
              合作咨询
            </h3>
            <p className="mb-8 text-center text-sm leading-7 text-muted-foreground">
              公开展示版不直接展示成员私人联系方式。填写下方信息后可导出一份合作联系单，便于在线下答辩或后续沟通时直接递交团队。
            </p>
            <MetalCard className="p-8">
              {submitted ? (
                <div className="py-8 text-center" role="status" aria-live="polite">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <span className="text-2xl text-primary">&#10003;</span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-foreground">联系单已导出</h4>
                  <p className="text-sm leading-7 text-muted-foreground">
                    文件已下载到本地，同时已尝试复制内容到剪贴板，可在路演、答辩或后续对接时直接提交给项目团队。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">姓名</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                        className="focus-ring w-full rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                        placeholder="请输入姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">邮箱</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                        className="focus-ring w-full rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                        placeholder="请输入邮箱"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">留言内容</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                      className="focus-ring w-full resize-none rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                      placeholder="请输入合作意向或咨询内容"
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus-ring w-full rounded-lg border border-primary/30 bg-primary/20 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  >
                    导出合作联系单
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
