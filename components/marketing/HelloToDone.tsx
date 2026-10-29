'use client'

import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Check, PhoneCall, PhoneIncoming } from 'lucide-react'

const STARTS = [0, 3000, 6000, 9000]
const SCENE_MS = 2300
const DONE = 11500
const CYCLE = 13500
const TICK = 100
const QUESTION = 'Can I move my appointment to Friday?'

/** Elapsed ms in the relay, advancing only while on screen; fixed at DONE for reduced motion. */
function useRelayClock() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [t, setT] = useState(DONE)
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
    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer)
      if (!entry.isIntersecting) return
      setT(0)
      timer = window.setInterval(() => setT(v => (v + TICK >= CYCLE ? 0 : v + TICK)), TICK)
    }, { threshold: 0.25 })
    io.observe(el)
    return () => { io.disconnect(); window.clearInterval(timer) }
  }, [still])

  return { ref, t: still ? DONE : t }
}

const local = (t: number, i: number) => t - STARTS[i]
const on = (cond: boolean, cls: string) => (cond ? ` ${cls}` : '')

function Answer({ l, raw }: { l: number; raw: number }) {
  const answered = l >= 1300
  const secs = answered ? Math.min(59, Math.floor((raw - 1300) / 1000) + 1) : 0
  return (
    <div className={`relay-call${on(l >= 200, 'is-in')}${on(answered, 'is-answered')}`}>
      <span className="relay-call-icon">{answered ? <PhoneCall size={16}/> : <PhoneIncoming size={16}/>}</span>
      <span className="relay-call-text">
        <strong>{answered ? 'Answered in 1 ring' : '+91 98… calling'}</strong>
        <small>{answered ? `00:${String(secs).padStart(2, '0')}` : 'Incoming call'}</small>
      </span>
    </div>
  )
}

function Understand({ l }: { l: number; raw?: number }) {
  const chars = Math.max(0, Math.min(QUESTION.length, Math.floor((l - 300) / 42)))
  const listening = l >= 0 && l < 1950
  return (
    <div className="relay-understand">
      <span className={`relay-wave${on(listening, 'is-live')}`} aria-hidden="true">{Array.from({ length: 9 }, (_, n) => <i key={n} style={{ '--n': n } as CSSProperties}/>)}</span>
      <span className="relay-typed">{l >= 300 && <>“{QUESTION.slice(0, chars)}{chars < QUESTION.length ? <span className={`relay-caret${on(listening, 'is-on')}`}/> : '”'}</>}</span>
      <span className={`relay-chip relay-intent${on(l >= 1950, 'is-in')}`}>Reschedule · Friday</span>
    </div>
  )
}

function Act({ l }: { l: number; raw?: number }) {
  return (
    <div className="relay-chips">
      {['Calendar checked', 'Booked · Fri 4:30', 'WhatsApp sent'].map((c, n) => (
        <span key={c} className={`relay-chip relay-tick${on(l >= 300 + n * 600, 'is-in')}`}><span className="relay-tick-box"><Check size={11} strokeWidth={3}/></span>{c}</span>
      ))}
    </div>
  )
}

function HandOff({ l }: { l: number; raw?: number }) {
  return (
    <div className="relay-handoff">
      <span className={`relay-chip relay-need${on(l >= 200, 'is-in')}`}>Needs a person</span>
      <svg className={`relay-route${on(l >= 700, 'is-in')}`} viewBox="0 0 60 40" aria-hidden="true"><path d="M4 6 C 30 6, 30 34, 56 34"/></svg>
      <span className={`relay-person${on(l >= 1100, 'is-in')}`}><span className="relay-avatar">P</span><span><strong>Priya</strong><small>Front desk</small></span></span>
      <span className={`relay-notes${on(l >= 1600, 'is-in')}`}>Notes passed on</span>
    </div>
  )
}

const steps = [
  { title: 'Answer', text: 'Calls reach your agent on your existing numbers, inbound or outbound.', Scene: Answer },
  { title: 'Understand', text: 'It listens, lets callers interrupt naturally, and follows the flow you designed.', Scene: Understand },
  { title: 'Act', text: 'It checks your calendar, looks up the caller in your CRM, books and confirms.', Scene: Act },
  { title: 'Hand off', text: 'When a person is needed, it transfers the call to your team.', Scene: HandOff },
]

export function HelloToDone() {
  const { ref, t } = useRelayClock()
  return (
    <div ref={ref} className="story-flow-track">
      {steps.map(({ title, text, Scene }, i) => {
        const l = t < 0 ? -1 : Math.min(local(t, i), SCENE_MS)
        const prog = i < 3 && t >= 0 ? Math.max(0, Math.min(1, (t - (STARTS[i] + SCENE_MS)) / (STARTS[i + 1] - STARTS[i] - SCENE_MS))) : 0
        const travelling = i < 3 && prog > 0 && prog < 1
        return (
          <Fragment key={title}>
            <article className={`relay-card${on(l >= 0 && l < SCENE_MS, 'is-active')}${on(l >= 0, 'is-reached')}`}>
              <div className="relay-scene" aria-hidden="true"><Scene l={l} raw={t < 0 ? -1 : local(t, i)}/></div>
              <span className="story-flow-num">STEP 0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
            {i < 3 && (
              <span className={`relay-link${on(prog >= 1, 'is-done')}`} aria-hidden="true">
                <span className={`relay-dot${on(travelling, 'is-on')}`} style={{ '--p': prog } as CSSProperties}/>
              </span>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
