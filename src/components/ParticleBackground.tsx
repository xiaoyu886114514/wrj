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
    const canvasElement = canvasRef.current
    if (!canvasElement) return
    const renderingContext = canvasElement.getContext('2d')
    if (!renderingContext) return
    const canvas: HTMLCanvasElement = canvasElement
    const context: CanvasRenderingContext2D = renderingContext

    let animationId = 0
    let width = 0
    let height = 0
    let tick = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function handleMouse(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function createParticle(w: number, h: number): Particle {
      const tone = Math.random() > 0.86 ? 'accent' : 'primary'

      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32 + 0.08,
        vy: (Math.random() - 0.5) * 0.24,
        size: Math.random() * 2.1 + 0.6,
        opacity: Math.random() * 0.42 + 0.12,
        life: 0,
        maxLife: Math.random() * 520 + 220,
        tone,
      }
    }

    function primaryColor(alpha: number) {
      return `rgba(0, 229, 255, ${alpha})`
    }

    function accentColor(alpha: number) {
      return `rgba(255, 126, 51, ${alpha})`
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)

    const count = Math.min(110, Math.floor((width * height) / 13500))
    particlesRef.current = Array.from({ length: count }, () => createParticle(width, height))

    function drawStreams() {
      const lanes = 4
      for (let i = 0; i < lanes; i++) {
        const y = height * (0.2 + i * 0.19)
        const offset = (tick * (0.5 + i * 0.12)) % (width + 180)
        const gradient = context.createLinearGradient(offset - 180, y, offset + 180, y)
        gradient.addColorStop(0, 'rgba(0,0,0,0)')
        gradient.addColorStop(0.45, 'rgba(0,229,255,0.04)')
        gradient.addColorStop(0.55, 'rgba(255,126,51,0.03)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')

        context.strokeStyle = gradient
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.stroke()
      }
    }

    function drawCursorSweep(mx: number, my: number) {
      if (!mx && !my) return

      context.beginPath()
      context.arc(mx, my, 72, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(0, 229, 255, 0.12)'
      context.lineWidth = 1
      context.stroke()

      context.beginPath()
      context.arc(mx, my, 132, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(0, 229, 255, 0.05)'
      context.stroke()

      context.beginPath()
      context.moveTo(mx - 14, my)
      context.lineTo(mx + 14, my)
      context.moveTo(mx, my - 14)
      context.lineTo(mx, my + 14)
      context.strokeStyle = 'rgba(255, 126, 51, 0.18)'
      context.stroke()
    }

    function draw() {
      tick += 1
      context.clearRect(0, 0, width, height)
      drawStreams()

      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        particle.life += 1

        const dx = mx - particle.x
        const dy = my - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 180) {
          const force = ((180 - dist) / 180) * 0.02
          particle.vx += dx * force * 0.01
          particle.vy += dy * force * 0.01
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.992
        particle.vy *= 0.992

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
        const fill = particle.tone === 'accent' ? accentColor(alpha) : primaryColor(alpha)

        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = fill
        context.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const next = particles[j]
          const distance = Math.sqrt((particle.x - next.x) ** 2 + (particle.y - next.y) ** 2)

          if (distance < 110 && particle.tone === 'primary' && next.tone === 'primary') {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(next.x, next.y)
            context.strokeStyle = primaryColor(0.05 * (1 - distance / 110))
            context.lineWidth = 0.6
            context.stroke()
          }
        }
      }

      drawCursorSweep(mx, my)
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
