import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useAnimations'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  variant?: 'default' | 'minimal'
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  className,
  align = 'center',
  variant = 'default',
}: SectionHeaderProps) {
  const { ref, isInView } = useInView()
  const isMinimal = variant === 'minimal'

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
      <div
        className={cn(
          'mb-6 flex items-center gap-4',
          align === 'center' ? 'justify-center' : 'justify-start',
          isMinimal && 'mb-4 gap-3'
        )}
      >
        {!isMinimal && <span className="trail-line h-px w-12 opacity-80" />}
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/24 bg-primary/8 px-4 py-2 text-[11px] font-semibold text-primary">
          <span className="signal-dot" />
          <span className="hud-label">{tag}</span>
        </span>
        <span className={cn('trail-line h-px opacity-50', isMinimal ? 'w-16' : 'w-12')} />
      </div>
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-[0.08em] text-foreground leading-tight lg:text-4xl xl:text-5xl',
          isMinimal && 'max-w-4xl tracking-[0.05em]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg',
            align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          )}
        >
          {subtitle}
        </p>
      )}
      {!isMinimal && (
        <div className={cn('mt-8 flex items-center gap-3', align === 'center' ? 'justify-center' : 'justify-start')}>
          <span className="h-px w-16 bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-primary shadow-[var(--shadow-glow-primary)]" />
          <span className="h-px w-10 bg-accent/50" />
        </div>
      )}
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
        !hover && 'hover:translate-y-0',
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
