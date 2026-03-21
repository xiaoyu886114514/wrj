import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Activity, ArrowRight, Menu, Radar, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '市场背景', href: '#market' },
  { label: '核心优势', href: '#advantages' },
  { label: '技术路线', href: '#technology' },
  { label: '商业模式', href: '#business' },
  { label: '发展规划', href: '#roadmap' },
  { label: '财务预测', href: '#finance' },
  { label: '社会价值', href: '#social' },
  { label: '团队', href: '#team' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = NAV_ITEMS.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6',
          scrolled
            ? 'hud-panel w-[calc(100%-1.5rem)] py-3 sm:w-[calc(100%-2.5rem)]'
            : 'w-[calc(100%-1.5rem)] border border-primary/10 bg-background/35 py-4 backdrop-blur-md sm:w-[calc(100%-2.5rem)]'
        )}
      >
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/12 text-primary shadow-[var(--shadow-glow-primary)] transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/18">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-left">
            <span className="block font-display text-sm font-bold tracking-[0.18em] text-foreground sm:text-base">翼启全域</span>
            <span className="block text-[10px] text-muted-foreground sm:text-[11px]">全域低空物流平台</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                'rounded-full px-3 py-2 text-xs font-medium transition-all duration-300',
                activeSection === item.href
                  ? 'bg-primary/14 text-primary shadow-[var(--shadow-glow-primary)]'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="hidden items-center gap-2 rounded-full border border-primary/14 bg-background/55 px-3 py-2 text-[11px] text-muted-foreground xl:flex">
            <span className="signal-dot" />
            <Radar className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium tracking-[0.12em]">系统在线</span>
          </div>
          <button
            onClick={() => handleClick('#advantages')}
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/18 hover:shadow-[var(--shadow-glow-primary)]"
          >
            <Activity className="h-4 w-4" />
            查看方案
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full border border-primary/16 bg-background/55 p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换导航菜单"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-3 mt-3 rounded-3xl border border-primary/16 bg-background/90 px-4 py-4 shadow-[var(--shadow-lg)] backdrop-blur-xl sm:mx-5 lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-2xl border border-primary/14 bg-primary/6 px-3 py-2 text-[11px] text-muted-foreground">
            <span className="signal-dot" />
            <Radar className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium tracking-[0.12em]">系统在线</span>
          </div>
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                'mb-1 block w-full rounded-2xl px-4 py-3 text-left text-sm transition-all duration-300',
                activeSection === item.href
                  ? 'bg-primary/12 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
