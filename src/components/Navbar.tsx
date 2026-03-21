import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

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
        scrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'py-5 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span className="text-sm font-bold tracking-wider text-foreground">翼启全域</span>
            <span className="block text-[10px] tracking-widest text-muted-foreground uppercase">VTOL Logistics</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300',
                activeSection === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 py-4">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                'block w-full text-left px-4 py-2.5 text-sm rounded-md transition-all duration-300 mb-1',
                activeSection === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
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