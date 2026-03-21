const 快捷链接 = [
  { label: '市场背景', href: '#market' },
  { label: '核心优势', href: '#advantages' },
  { label: '技术路线', href: '#technology' },
  { label: '商业模式', href: '#business' },
  { label: '发展规划', href: '#roadmap' },
  { label: '财务预测', href: '#finance' },
  { label: '社会价值', href: '#social' },
  { label: '团队介绍', href: '#team' },
]

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/30 px-6 py-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute left-[12%] top-0 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute right-[8%] top-[18%] h-36 w-36 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr_1fr]">
          <div className="hud-panel p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/12 text-primary shadow-[var(--shadow-glow-primary)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-[0.12em] text-foreground">翼启全域</div>
                <div className="mt-1 text-xs text-muted-foreground">垂直起降固定翼无人机智慧物流平台</div>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              聚焦低空物流真实场景，以垂直起降固定翼无人机为核心，服务乡村振兴、应急救援、海岛补给和高时效配送，
              让空中运输从概念展示走向规模化落地。
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">定位</div>
                <div className="mt-2 text-sm font-semibold text-foreground">低空物流解决方案</div>
              </div>
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">能力</div>
                <div className="mt-2 text-sm font-semibold text-foreground">垂起部署 + 长航时巡航</div>
              </div>
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">目标</div>
                <div className="mt-2 text-sm font-semibold text-foreground">打造全域运输新生态</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h4 className="text-sm font-semibold tracking-[0.14em] text-foreground">站内导航</h4>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {快捷链接.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="rounded-xl px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h4 className="text-sm font-semibold tracking-[0.14em] text-foreground">合作联系</h4>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-primary">联系邮箱</div>
                <div className="mt-2 break-all">vtol-logistics@example.edu.cn</div>
              </div>
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-primary">联系电话</div>
                <div className="mt-2">+86 138-xxxx-xxxx</div>
              </div>
              <div className="rounded-2xl border border-primary/12 bg-background/40 p-4">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-primary">项目归属</div>
                <div className="mt-2">XX大学创新创业学院</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-[11px] text-muted-foreground/70 md:flex-row md:items-center">
          <span>&copy; 2025 翼启全域团队｜全国大学生电子商务“创新、创意及创业”挑战赛参赛项目</span>
          <span>垂直起降固定翼无人机物流运输｜三创赛科创赛道</span>
        </div>
      </div>
    </footer>
  )
}
