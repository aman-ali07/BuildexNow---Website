import { useEffect, useState } from 'react';
import { PROCESS } from '../data/site';
import { SectionHeading } from '../components/ui/Primitives';

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('.process-step'));
    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveIndex(steps.indexOf(visible.target as HTMLElement));
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const active = PROCESS[activeIndex];

  return (
    <section className="section process" id="process">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Process, Your Advantage"
          title="From Idea To Execution"
          description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
        />

        <div className="process-layout">
          <div className="process-steps">
            {PROCESS.map((step, i) => (
              <article
                className={`process-step ${i === activeIndex ? 'is-active' : ''}`}
                key={step.num}
              >
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <span className="step-kind">{step.kind}</span>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          {/* The reference shows a photograph for the active step, not a UI
              mock. The images are the originals captured from the live site. */}
          <div className="process-visual reveal">
            <div className="process-stage-slot process-photo">
              <img
                key={active.image}
                src={active.image}
                alt={`${active.title} — ${active.kind}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
