import type { DemoCallState } from '@/lib/useDemoCall'

export const CALL_STATUS: Record<DemoCallState, string> = {
  idle: 'Ready', connecting: 'Connecting…', ready: 'Listening', talking: 'Listening', thinking: 'Thinking…',
  speaking: 'Speaking', ended: 'Call ended', error: 'Couldn’t connect',
}

export const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
