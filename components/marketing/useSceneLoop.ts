'use client'

import { useEffect, useRef, useState } from 'react'

/** Ticks `step` through 0..steps-1 every `ms` while the element is on screen; null when the user prefers reduced motion. */
export function useSceneLoop<T extends HTMLElement>(steps: number, ms: number) {
  const ref = useRef<T | null>(null)
  const [step, setStep] = useState(1)
  const [still, setStill] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setStill(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || still) return
    let timer: number | undefined
    const run = () => { timer = window.setInterval(() => setStep(s => (s + 1) % steps), ms) }
    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer)
      if (entry.isIntersecting) { setStep(0); run() }
    }, { threshold: 0.25 })
    io.observe(el)
    return () => { io.disconnect(); window.clearInterval(timer) }
  }, [steps, ms, still])

  return { ref, step: still ? null : step }
}
