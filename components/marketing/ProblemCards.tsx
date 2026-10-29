'use client'

import type { CSSProperties, ReactNode } from 'react'
import { Check, PhoneIncoming, PhoneOff } from 'lucide-react'
import { useSceneLoop } from './useSceneLoop'

const i = (n: number) => ({ '--i': n } as CSSProperties)

function Scene({ yuviz, className, aside, children }: { yuviz: boolean; className: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <div className={`story-scene ${className} ${yuviz ? 'is-yuviz' : 'is-today'}`} aria-hidden="true">
      <div className="scene-head">
        <span className="scene-tag"><span className="t-today">Today</span><span className="t-yuviz">With Yuviz</span></span>
        {aside}
      </div>
      {children}
    </div>
  )
}

function Missed({ yuviz }: { yuviz: boolean }) {
  return (
    <Scene yuviz={yuviz} className="scene-missed" aside={<span className="scene-badge">Answered 24/7</span>}>
      <div className="scene-body">
        <span className="scene-phone"><PhoneIncoming size={18}/></span>
        <div className="scene-rows">
          {['9:42 PM', '1:15 AM', '7:03 AM'].map((t, n) => (
            <div key={t} className="scene-row" style={i(n)}>
              <span className="scene-dot"/>
              <span className="scene-swap"><span className="t-today">Missed call</span><span className="t-yuviz">Answered</span></span>
              <span className="scene-time">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  )
}

function Questions({ yuviz }: { yuviz: boolean }) {
  return (
    <Scene yuviz={yuviz} className="scene-questions" aside={<span className="scene-count"><span className="t-today">3 waiting</span><span className="t-yuviz">0 waiting</span></span>}>
      <div className="scene-rows">
        {['What are your timings?', 'Where are you located?', 'Open on Sunday?'].map((q, n) => (
          <div key={q} className="scene-qa" style={i(n)}>
            <span className="scene-bubble">{q}</span>
            <span className="scene-reply"><span className="scene-wave"><i/><i/><i/><i/></span>Answered</span>
          </div>
        ))}
      </div>
    </Scene>
  )
}

function After({ yuviz }: { yuviz: boolean }) {
  return (
    <Scene yuviz={yuviz} className="scene-after" aside={<span className="scene-ended"><PhoneOff size={12}/> Call ended · 2:14</span>}>
      <span className="scene-label">Next steps</span>
      <div className="scene-rows">
        {['Booked · Fri 4:30', 'WhatsApp sent', 'Summary saved'].map((s, n) => (
          <div key={s} className="scene-check" style={i(n)}>
            <span className="scene-box"><Check size={11} strokeWidth={3}/></span>
            <span className="scene-skel"/>
            <span className="scene-text">{s}</span>
          </div>
        ))}
      </div>
    </Scene>
  )
}

const cards = [
  { n: '01', title: 'Calls go unanswered', text: 'After hours, at peaks, or when everyone’s busy.', Scene: Missed },
  { n: '02', title: 'Same questions, all day', text: 'Timings, prices, status, directions — answered by hand.', Scene: Questions },
  { n: '03', title: 'Nothing happens after', text: 'No booking, no record, no follow-up.', Scene: After },
]

export function ProblemCards() {
  const { ref, step } = useSceneLoop<HTMLDivElement>(2, 3200)
  const yuviz = step === null || step === 1
  return (
    <div ref={ref} className="story-container story-friction-grid">
      {cards.map(({ n, title, text, Scene: S }) => (
        <article key={n}>
          <S yuviz={yuviz}/>
          <span className="story-number">{n}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  )
}
