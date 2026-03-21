export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      {/* Background fade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220 40% 3%), transparent)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold tracking-wider text-foreground">翼启全域 智运无疆</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              垂直起降固定翼无人机智慧物流系统 — 以低空物流赋能乡村振兴、应急救援与智慧配送，构建全域物流新生态。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-4">快速导航</h4>
            <div className="grid grid-cols-2 gap-2">
              {['市场背景', '核心优势', '技术路线', '商业模式', '发展规划', '财务预测', '社会价值', '团队介绍'].map(item => (
                <button
                  key={item}
                  onClick={() => {
                    const map: Record<string, string> = {
                      '市场背景': '#market',
                      '核心优势': '#advantages',
                      '技术路线': '#technology',
                      '商业模式': '#business',
                      '发展规划': '#roadmap',
                      '财务预测': '#finance',
                      '社会价值': '#social',
                      '团队介绍': '#team',
                    }
                    document.querySelector(map[item] || '#hero')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors text-left py-1"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-4">联系我们</h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">&#9993;</span>
                vtol-logistics@example.edu.cn
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">&#9742;</span>
                +86 138-xxxx-xxxx
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">&#9872;</span>
                XX大学 创新创业学院
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground/60">
          <span>
            &copy; 2025 翼启全域团队. 全国大学生电子商务"创新、创意及创业"挑战赛参赛项目
          </span>
          <span>
            垂直起降固定翼无人机物流运输 | 三创赛科创赛道
          </span>
        </div>
      </div>
    </footer>
  )
}