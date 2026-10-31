'use client'

import { MessageCircle } from 'lucide-react'
import { useAssistant } from './AssistantProvider'

export function AssistantLauncher() {
  const { open, openWith, config } = useAssistant()
  if (open) return null
  return (
    <button type="button" className="ya-launcher" onClick={() => openWith('connect')} aria-haspopup="dialog">
      <span className="ya-launcher-icon" aria-hidden="true"><MessageCircle size={19}/></span>
      <span className="ya-launcher-label">{config.launcherLabel ?? `Talk to ${config.brandName}`}</span>
    </button>
  )
}
