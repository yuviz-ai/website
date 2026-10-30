'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function ConfigureInMinutes() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: 1,
      heading: 'Start with agent details',
      description: 'Name your agent and write what it should do. Use Ask AI to refine your instructions.',
      image: 'new-agent-form',
    },
    {
      num: 2,
      heading: 'Pick languages and a voice',
      description: 'Select languages, auto-switch rules, and choose the voice that matches your brand. See costs in real time.',
      image: 'voice-settings',
    },
    {
      num: 3,
      heading: 'Give it knowledge and tools',
      description: 'Upload documents for the agent to reference. Connect to your CRM, ticketing, or custom APIs.',
      image: 'knowledge-tools',
    },
    {
      num: 4,
      heading: 'Test in chat, then go live',
      description: 'Chat with the agent before deploying. Verify behavior, adjust the prompt, test voice — all in minutes.',
      image: 'chat-test',
    },
  ];

  return (
    <section id="configure" className="story-section story-configure">
      <div className="story-container">
        <div className="story-split story-configure-heading">
          <div>
            <span className="story-kicker">BUILT FOR SPEED</span>
            <h2>Configure an agent<br/><em>in minutes.</em></h2>
          </div>
          <p>No code. No guesswork. Walk through four steps in the Yuviz admin panel — write the behavior, pick the voice, wire up your data, test and ship.</p>
        </div>

        <div className={`story-configure-grid${isVisible ? ' animate-in' : ''}`} ref={gridRef}>
          {steps.map((step, idx) => (
            <article key={step.num} className="story-configure-step" style={{ '--step-delay': `${idx * 80}ms` } as React.CSSProperties}>
              <div className="story-configure-step-num">{step.num}</div>
              <h3>{step.heading}</h3>
              <p>{step.description}</p>
              <div className="story-configure-screenshot">
                <picture>
                  <source srcSet={`/config-steps/${step.image}-dark.png`} media="(prefers-color-scheme: dark)" />
                  <img
                    src={`/config-steps/${step.image}-light.png`}
                    alt={step.heading}
                    loading="lazy"
                    className="story-config-image"
                  />
                </picture>
              </div>
            </article>
          ))}
        </div>

        <div className="story-configure-cta">
          <Link href="/contact" className="story-button story-button-primary">
            See it in action <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
