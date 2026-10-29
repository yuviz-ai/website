'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

export interface Scenario {
  title: string
  src: string
  caller: { name: string; number: string; avatar: string }
  /** Seconds into the recording where each line begins. */
  starts: number[]
  lines: { who: 'caller' | 'agent'; text: string }[]
}

const DEVANAGARI = /[ऀ-ॿ]/
const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

export function ScenarioCallPlayer({ scenarios }: { scenarios: Scenario[] }) {
  const [tab, setTab] = useState(0)
  const audio = useRef<HTMLAudioElement | null>(null)
  const feed = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const scenario = scenarios[tab]
  const firstName = scenario.caller.name.split(' ')[0]

  const stop = () => {
    audio.current?.pause()
    audio.current = null
    setPlaying(false); setDone(false); setTime(0); setDuration(0)
  }

  useEffect(() => () => audio.current?.pause(), [])

  const select = (i: number) => { if (i !== tab) { stop(); setTab(i) } }

  const toggle = () => {
    if (done) { stop() }
    if (!audio.current || done) {
      const a = new Audio(scenario.src)
      a.ontimeupdate = () => setTime(a.currentTime)
      a.onloadedmetadata = () => setDuration(a.duration)
      a.onended = () => { setPlaying(false); setDone(true) }
      audio.current = a
      setDone(false)
    }
    const a = audio.current
    if (playing) { a.pause(); setPlaying(false); return }
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }

  const started = playing || time > 0 || done
  const shown = done ? scenario.lines.length : started ? scenario.starts.filter(s => time >= s).length : 0
  const current = playing ? shown - 1 : -1

  useEffect(() => {
    feed.current?.scrollTo({ top: feed.current.scrollHeight, behavior: 'smooth' })
  }, [shown])

  return (
    <div className="story-scenarios">
      <div className="story-call-tabs" role="tablist" aria-label="Example calls">
        {scenarios.map((s, i) => (
          <button key={s.title} type="button" role="tab" aria-selected={i === tab} className={i === tab ? 'is-active' : ''} onClick={() => select(i)}>{s.title}</button>
        ))}
      </div>
      <div className={`story-call-sim${playing ? ' is-playing' : ''}`} role="tabpanel" aria-label={scenario.title}>
        <header className="story-call-head">
          <img src={scenario.caller.avatar} alt="" className="story-call-avatar" width={48} height={48}/>
          <div className="story-call-who">
            <strong>{scenario.caller.name}</strong>
            <span>{scenario.caller.number} · {scenario.title}</span>
          </div>
          <div className="story-call-state">
            <span className={`story-call-badge${playing ? ' is-live' : ''}`}><i/>{playing ? 'Live' : done ? 'Ended' : 'Ready'}</span>
            <span className="story-call-clock">{clock(time)}{duration ? ` / ${clock(duration)}` : ''}</span>
          </div>
        </header>

        <div className="story-call-controls">
          <button type="button" className="story-call-play" onClick={toggle} aria-label={playing ? `Pause: ${scenario.title}` : done ? `Replay: ${scenario.title}` : `Play: ${scenario.title}`}>
            {playing ? <Pause size={17}/> : done ? <RotateCcw size={17}/> : <Play size={17}/>}
            <span>{playing ? 'Pause audio' : done ? 'Replay conversation' : time > 0 ? 'Resume' : 'Play conversation'}</span>
            <span className="story-call-progress" aria-hidden="true"><span style={{ transform: `scaleX(${duration ? time / duration : 0})` }}/></span>
          </button>
        </div>

        <div className="story-call-feed" ref={feed} aria-live="polite">
          {shown === 0 && <p className="story-call-hint">Press play to hear {firstName}&rsquo;s call with Sarah.</p>}
          {scenario.lines.slice(0, shown).map((line, i) => (
            <div key={`${tab}-${i}`} className={`story-bubble-row ${line.who}${i === current ? ' is-speaking' : ''}`}>
              <img src={line.who === 'agent' ? '/icon-192.png' : scenario.caller.avatar} alt="" className="story-bubble-avatar" width={36} height={36}/>
              <div className="story-bubble">
                <small>{line.who === 'agent' ? 'Yuviz · Sarah' : firstName}</small>
                <p lang={DEVANAGARI.test(line.text) ? 'hi' : undefined}>{line.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
