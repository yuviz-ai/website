// Live chat with the public demo agent; bodies go as text/plain so the browser sends no CORS preflight.

const DEMO_API_URL = process.env.NEXT_PUBLIC_DEMO_API_URL || 'http://localhost:8001'

export interface DemoChatSession { credential: string; sessionId: string; greeting: string; maxTurns: number }

export class DemoChatError extends Error {
  constructor(message: string, readonly kind: 'ended' | 'expired' | 'retry' | 'unavailable') { super(message) }
}

async function post(path: string, apiUrl: string | undefined, body?: object): Promise<Response> {
  try {
    return await fetch(`${apiUrl || DEMO_API_URL}${path}`, {
      method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new DemoChatError('Check your connection and try again.', 'retry')
  }
}

export async function openDemoChat(apiUrl?: string): Promise<DemoChatSession> {
  const res = await post('/public/demo-chat', apiUrl)
  if (res.status === 403) throw new DemoChatError('This chat only works on the Yuviz website.', 'unavailable')
  if (res.status === 404) throw new DemoChatError('Live chat is switched off right now. You can still book a demo with the team.', 'unavailable')
  if (res.status === 429) throw new DemoChatError("You've started several chats in the last hour. Please try again later.", 'unavailable')
  if (!res.ok) throw new DemoChatError('The chat is busy right now. Please try again shortly.', 'retry')
  const body = await res.json()
  return { credential: body.credential, sessionId: body.session_id, greeting: body.greeting, maxTurns: body.max_turns }
}

export async function sendDemoChat(session: DemoChatSession, message: string, apiUrl?: string): Promise<string> {
  const res = await post('/public/demo-chat/turn', apiUrl, { credential: session.credential, session_id: session.sessionId, message })
  if (res.ok) return (await res.json()).reply
  const detail = await res.json().then(b => b.detail as string, () => '')
  if (res.status === 429 && detail === 'turn limit reached') throw new DemoChatError('Book a demo to keep the conversation going with our team.', 'ended')
  if (res.status === 404) throw new DemoChatError('Start a new chat to pick up where you left off.', 'expired')
  if (res.status === 429) throw new DemoChatError('Lots of people are chatting right now. Please try again in a moment.', 'retry')
  throw new DemoChatError("The agent couldn't answer just now. Please try again.", 'retry')
}
