'use client'

import { useAssistant } from './AssistantProvider'

export function BrandMark({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const { config } = useAssistant()
  return (
    <span className={`ya-logo ya-logo-${size}`} aria-hidden="true">
      <img src={config.logoSrc} alt=""/>
    </span>
  )
}
