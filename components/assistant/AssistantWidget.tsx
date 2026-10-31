'use client'

import { useAssistant } from './AssistantProvider'
import { AssistantLauncher } from './AssistantLauncher'
import { ConnectPanel } from './ConnectPanel'
import { ChatPanel } from './ChatPanel'
import { VoicePanel } from './VoicePanel'

export function AssistantWidget() {
  const { open, view, config } = useAssistant()
  const accent = {
    ...(config.accentFrom && { '--ya-from': config.accentFrom }),
    ...(config.accentTo && { '--ya-to': config.accentTo }),
  } as React.CSSProperties
  return (
    <div className="ya-root" style={accent}>
      {open && (
        <section id="ya-panel" className={`ya-panel ya-view-${view}`} role="dialog" aria-label={`${config.brandName} assistant`}>
          {view === 'connect' && <ConnectPanel/>}
          {view === 'chat' && config.chat && <ChatPanel/>}
          {view === 'voice' && config.voice && <VoicePanel/>}
        </section>
      )}
      <AssistantLauncher/>
    </div>
  )
}
