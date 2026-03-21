import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useAnimations'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ tag, title, subtitle, className, align = 'center' }: SectionHeaderProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        'mb-16 transition-all duration-700',
        align === 'center' ? 'text-center' : 'text-left',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/5 mb-6">
        {tag}
      </span>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-8 h-px w-20 bg-primary/40 mx-auto" style={{ marginLeft: align === 'left' ? 0 : undefined }} />
    </div>
  )
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean
  hover?: boolean
}

export function GlassCard({ className, glow, hover = true, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6',
        glow && 'shadow-[var(--shadow-glow-primary)]',
        hover && 'hover:translate-y-[-2px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface MetalCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MetalCard({ className, children, ...props }: MetalCardProps) {
  return (
    <div className={cn('metal-card p-6', className)} {...props}>
      {children}
    </div>
  )
}

interface DataBadgeProps {
  value: string | number
  label: string
  unit?: string
}

export function DataBadge({ value, label, unit }: DataBadgeProps) {
  return (
    <div className="text-center">
      <div className="data-value text-2xl lg:text-3xl">
        {value}
        {unit && <span className="text-sm ml-1 text-primary/70">{unit}</span>}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

interface AnimatedEntryProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedEntry({ children, className, delay = 0 }: AnimatedEntryProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}