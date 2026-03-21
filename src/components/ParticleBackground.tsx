import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
  tone: 'primary' | 'accent'
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches

    let animationId = 0
    let width = 0
    let height = 0
    let frame = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 1.75)

    const getConfig = () => {
      const compact = window.innerWidth < 768

      if (reducedMotion) {
        return {
          enabled: false,
          count: 0,
          lanes: 0,
          linkDistance: 0,
          cursorSweep: false,
        }
      }

      if (compact || coarsePointer) {
        return {
          enabled: true,
          count: Math.min(22, Math.floor((window.innerWidth * window.innerHeight) / 32000)),
          lanes: 2,
          linkDistance: 0,
          cursorSweep: false,
        }
      }

      return {
        enabled: true,
        count: Math.min(56, Math.floor((window.innerWidth * window.innerHeight) / 21000)),
        lanes: 3,
        linkDistance: 92,
        cursorSweep: true,
      }
    }

    let config = getConfig()

    const createParticle = (w: number, h: number): Particle => {
      const tone = Math.random() > 0.88 ? 'accent' : 'primary'

      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 + 0.04,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.8 + 0.5,
        opacity: Math.random() * 0.32 + 0.08,
        life: 0,
        maxLife: Math.random() * 520 + 240,
        tone,
      }
    }

    const primaryColor = (alpha: number) => `rgba(0, 229, 255, ${alpha})`
    const accentColor = (alpha: number) => `rgba(255, 126, 51, ${alpha})`

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      config = getConfig()

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      particlesRef.current = Array.from({ length: config.count }, () => createParticle(width, height))
    }

    const handleMouse = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
    }

    const drawStreams = () => {
      for (let index = 0; index < config.lanes; index++) {
        const y = height * (0.22 + index * 0.22)
        const offset = (frame * (0.35 + index * 0.09)) % (width + 180)
        const gradient = context.createLinearGradient(offset - 180, y, offset + 180, y)
        gradient.addColorStop(0, 'rgba(0,0,0,0)')
        gradient.addColorStop(0.45, 'rgba(0,229,255,0.03)')
        gradient.addColorStop(0.55, 'rgba(255,126,51,0.025)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')

        context.strokeStyle = gradient
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.stroke()
      }
    }

    const drawCursorSweep = (mx: number, my: number) => {
      if (!config.cursorSweep || (!mx && !my)) return

      context.beginPath()
      context.arc(mx, my, 68, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(0, 229, 255, 0.08)'
      context.lineWidth = 1
      context.stroke()

      context.beginPath()
      context.arc(mx, my, 118, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(0, 229, 255, 0.035)'
      context.stroke()
    }

    const draw = () => {
      if (!config.enabled) return

      frame += 1
      context.clearRect(0, 0, width, height)
      drawStreams()

      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        particle.life += 1

        if (config.cursorSweep) {
          const dx = mx - particle.x
          const dy = my - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 160) {
            const force = ((160 - distance) / 160) * 0.012
            particle.vx += dx * force * 0.01
            particle.vy += dy * force * 0.01
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.993
        particle.vy *= 0.993

        if (
          particle.x < -40 ||
          particle.x > width + 40 ||
          particle.y < -40 ||
          particle.y > height + 40 ||
          particle.life > particle.maxLife
        ) {
          particles[i] = createParticle(width, height)
          continue
        }

        const lifeFade =
          particle.life < 30
            ? particle.life / 30
            : particle.life > particle.maxLife - 30
              ? (particle.maxLife - particle.life) / 30
              : 1

        const alpha = particle.opacity * lifeFade
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = particle.tone === 'accent' ? accentColor(alpha) : primaryColor(alpha)
        context.fill()

        if (!config.linkDistance || particle.tone !== 'primary') continue

        for (let j = i + 1; j < particles.length; j++) {
          const next = particles[j]
          if (next.tone !== 'primary') continue

          const distance = Math.sqrt((particle.x - next.x) ** 2 + (particle.y - next.y) ** 2)
          if (distance >= config.linkDistance) continue

          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(next.x, next.y)
          context.strokeStyle = primaryColor(0.04 * (1 - distance / config.linkDistance))
          context.lineWidth = 0.55
          context.stroke()
        }
      }

      drawCursorSweep(mx, my)
      animationId = requestAnimationFrame(draw)
    }

    resize()

    if (!reducedMotion && !coarsePointer) {
      window.addEventListener('mousemove', handleMouse)
    }

    window.addEventListener('resize', resize)

    if (config.enabled) {
      draw()
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
