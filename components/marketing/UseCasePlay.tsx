'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pause, Play } from 'lucide-react'

const STOP_OTHERS = 'yuviz:usecase-play'

export function UseCasePlay({ src, voice, lines, starts, speakers, children }: {
  src: string; voice: string; lines: string[]; starts: number[]; speakers: ('agent' | 'caller')[]; children: ReactNode
}) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const stop = (e: Event) => {
      if ((e as CustomEvent).detail === src || !audio.current) return
      audio.current.pause(); audio.current.currentTime = 0; setPlaying(false); setTime(0)
    }
    window.addEventListener(STOP_OTHERS, stop)
    return () => { window.removeEventListener(STOP_OTHERS, stop); audio.current?.pause() }
  }, [src])

  const toggle = () => {
    if (!audio.current) {
      const a = new Audio(src)
      a.ontimeupdate = () => setTime(a.currentTime)
      a.onloadedmetadata = () => setDuration(a.duration)
      a.onended = () => { setPlaying(false); setTime(0) }
      audio.current = a
    }
    if (playing) { audio.current.pause(); setPlaying(false); return }
    window.dispatchEvent(new CustomEvent(STOP_OTHERS, { detail: src }))
    audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }

  const current = playing ? starts.reduce((idx, start, i) => (time >= start ? i : idx), 0) : -1
  const progress = duration ? time / duration : 0

  return (
    <>
      <button type="button" className={`story-use-play${playing ? ' is-playing' : ''}`} onClick={toggle}
        aria-label={`${playing ? 'Pause' : 'Play'} example call (${voice})`} style={{ '--p': progress } as React.CSSProperties}>
        {playing ? <Pause size={16}/> : <Play size={16}/>}
      </button>
      {children}
      <p className={`story-use-caption${current >= 0 ? ' is-on' : ''}`} aria-live="polite">
        {current >= 0 && <><b>{speakers[current] === 'agent' ? 'Agent' : 'Caller'}</b> {lines[current]}</>}
      </p>
    </>
  )
}
