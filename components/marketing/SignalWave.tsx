'use client'

import { useEffect, useRef } from 'react'

const ROWS = 44
const COLS = 140
const DARK = ['#6D4BFF', '#A35BFF', '#FF6FB1']
const LIGHT = ['#5B3DF5', '#9B4DF0', '#E8559E']

export function SignalWave({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, t = 0, raf = 0, visible = true

    const draw = () => {
      const light = document.body.classList.contains('yuviz-light-theme')
      const colors = light ? LIGHT : DARK
      const grad = ctx.createLinearGradient(0, 0, w, 0)
      colors.forEach((c, i) => grad.addColorStop(i / (colors.length - 1), c))
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = light ? 'source-over' : 'lighter'
      ctx.fillStyle = grad
      ctx.strokeStyle = grad

      const center = (u: number) => h * 0.62 + h * 0.13 * Math.sin(u * 4.1 + t * 0.45) + h * 0.06 * Math.sin(u * 9 - t * 0.7)
      const spread = (u: number) => h * 0.3 * (0.5 + 1.35 * (2 * u - 1) ** 2) * Math.cos(u * 2.6 - t * 0.3 + 0.6)
      const yAt = (u: number, depth: number, r: number) => center(u) + spread(u) * (depth - 0.5) + Math.sin(u * 5 + r * 0.22 + t * 0.6) * 4

      ctx.lineWidth = 1
      for (let r = 0; r < ROWS; r++) {
        const depth = r / (ROWS - 1)
        const fade = Math.pow(Math.sin(depth * Math.PI), 1.4)
        ctx.globalAlpha = (light ? 0.5 : 0.7) * (0.12 + 0.88 * fade)
        ctx.beginPath()
        for (let c = 0; c < COLS; c++) {
          const u = c / (COLS - 1)
          const y = yAt(u, depth, r)
          if (c) ctx.lineTo(u * w, y); else ctx.moveTo(0, y)
        }
        ctx.stroke()
      }
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const loop = () => {
      if (visible && !document.hidden) { t += 0.016; draw() }
      raf = requestAnimationFrame(loop)
    }

    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    const seen = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    seen.observe(canvas)
    const themeObserver = new MutationObserver(draw)
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    resize()
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => { cancelAnimationFrame(raf); sizeObserver.disconnect(); seen.disconnect(); themeObserver.disconnect() }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true"/>
}
