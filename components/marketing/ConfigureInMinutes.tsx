'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STEP_MS = 5000;

const steps = [
  { image: 'instructions', heading: 'Write what the agent should do', text: 'Describe its job. Ask AI can polish it.' },
  { image: 'voice', heading: 'Pick languages and a voice', text: 'See the cost per minute as you choose.' },
  { image: 'knowledge', heading: 'Give it knowledge and tools', text: 'Add documents and connect your apps.' },
  { image: 'chat', heading: 'Test in chat, then go live', text: 'Try it first, then switch it on.' },
];

export function ConfigureInMinutes() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <section id="configure" className="story-section story-configure">
      <div className="story-container">
        <div className="story-split story-flow-heading">
          <div>
            <span className="story-kicker">AGENT BUILDER</span>
            <h2>Configure an agent<br/><em>in minutes.</em></h2>
          </div>
          <p>No code. Four steps in the Yuviz console take an agent from an idea to answering calls.</p>
        </div>

        <div className="cfg-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <ol className="cfg-steps">
            {steps.map((s, i) => (
              <li key={s.image}>
                <button type="button" className={`cfg-step${i === active ? ' on' : ''}`} aria-current={i === active}
                  onClick={() => setActive(i)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
                  <span className="cfg-step-num">{i + 1}</span>
                  <span className="cfg-step-body">
                    <b>{s.heading}</b>
                    <span>{s.text}</span>
                  </span>
                  {i === active && <span key={`${active}-${paused}`} className={`cfg-progress${paused ? ' paused' : ''}`} style={{ animationDuration: `${STEP_MS}ms` }} aria-hidden="true" />}
                </button>
              </li>
            ))}
          </ol>

          <div className="cfg-window">
            <div className="cfg-window-bar" aria-hidden="true"><i/><i/><i/><span>console.yuviz.ai</span></div>
            <div className="cfg-shots">
              {steps.map((s, i) => (
                <div key={s.image} className={`cfg-shot${i === active ? ' on' : ''}`} aria-hidden={i !== active}>
                  <img className="cfg-img-dark" src={`/config-steps/${s.image}-dark.png`} alt={i === active ? s.heading : ''} width={2408} height={1504} loading={i ? 'lazy' : 'eager'} />
                  <img className="cfg-img-light" src={`/config-steps/${s.image}-light.png`} alt={i === active ? s.heading : ''} width={2408} height={1504} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cfg-cta">
          <Link href="/product/agent-builder" className="story-text-link">See the agent builder <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
