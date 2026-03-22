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
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let animationId = 0
    let width = 0
    let height = 0
    let frame = 0
    let config = { enabled: false, count: 0, lanes: 0 }
    const particles: Particle[] = []

    const getConfig = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches
      const wideViewport = window.innerWidth >= 1280

      if (reducedMotion || coarsePointer || !wideViewport) {
        return { enabled: false, count: 0, lanes: 0 }
      }

      return {
        enabled: true,
        count: Math.min(24, Math.floor((window.innerWidth * window.innerHeight) / 48000)),
        lanes: 2,
      }
    }

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18 + 0.03,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() * 1.2 + 0.6,
      opacity: Math.random() * 0.18 + 0.04,
      life: 0,
      maxLife: Math.random() * 320 + 180,
    })

    const resize = () => {
      config = getConfig()
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles.length = 0
      for (let i = 0; i < config.count; i += 1) {
        particles.push(createParticle(width, height))
      }
    }

    const drawLanes = () => {
      for (let index = 0; index < config.lanes; index += 1) {
        const y = height * (0.28 + index * 0.26)
        const offset = (frame * (0.22 + index * 0.06)) % (width + 180)
        const gradient = context.createLinearGradient(offset - 160, y, offset + 160, y)
        gradient.addColorStop(0, 'rgba(0,0,0,0)')
        gradient.addColorStop(0.5, index === 0 ? 'rgba(0,229,255,0.02)' : 'rgba(255,126,51,0.018)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        context.strokeStyle = gradient
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.stroke()
      }
    }

    const draw = () => {
      if (!config.enabled) {
        context.clearRect(0, 0, width, height)
        return
      }

      frame += 1
      context.clearRect(0, 0, width, height)
      drawLanes()

      particles.forEach((particle, index) => {
        particle.life += 1
        particle.x += particle.vx
        particle.y += particle.vy

        if (
          particle.x < -24 ||
          particle.x > width + 24 ||
          particle.y < -24 ||
          particle.y > height + 24 ||
          particle.life > particle.maxLife
        ) {
          particles[index] = createParticle(width, height)
          return
        }

        const fade =
          particle.life < 28
            ? particle.life / 28
            : particle.life > particle.maxLife - 28
              ? (particle.maxLife - particle.life) / 28
              : 1

        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(0, 229, 255, ${particle.opacity * fade})`
        context.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    if (config.enabled) {
      draw()
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-70" style={{ zIndex: 0 }} />
}
