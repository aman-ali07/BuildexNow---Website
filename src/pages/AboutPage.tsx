import { PageHero, CtaBand } from '../components/PageShell';
import { Split, Steps, FeatureGrid } from '../components/Blocks';
import { Compass, Layers3, Gauge } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We make complex products feel effortless."
        description="BuildexNow is a digital product and technology studio. We bring strategy, design and engineering into one room so good ideas can become real products."
      />

      <Split
        eyebrow="Why we exist"
        title="Complex products should feel effortless."
        body="The best digital products hide their complexity. Getting there takes careful thinking, honest conversation and a willingness to remove more than we add. That is the work we enjoy."
        bullets={['Strategy and design in the same conversation', 'A process built around clarity, not ceremony', 'Engineering that treats performance and accessibility as features']}
        visual={
          <>
            <div className="visual-card">
              <strong><Compass size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> Start with the why</strong>
              <span>We understand the problem and the people behind it before proposing a solution.</span>
            </div>
            <div className="visual-card">
              <strong><Layers3 size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> Make it tangible</strong>
              <span>Prototypes and short feedback loops replace long debates about what might work.</span>
            </div>
            <div className="visual-card">
              <strong><Gauge size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> Keep improving</strong>
              <span>Launch is a beginning. Real usage tells us what to do next.</span>
            </div>
          </>
        }
      />

      <FeatureGrid
        eyebrow="What makes us different"
        title={<>Small on ceremony. <span className="serif-accent">Serious</span> about craft.</>}
        items={[
          { title: 'One connected team', body: 'The people who shape the strategy also shape the design and the code. Nothing gets lost in a handoff.', icon: Layers3 },
          { title: 'Thinking before making', body: 'We spend time on the problem so the solution is simpler, clearer and more durable.', icon: Compass },
          { title: 'Built for change', body: 'Systems, documentation and clean implementation make the next change easier — not harder.', icon: Gauge },
        ]}
      />

      <Steps
        eyebrow="How we work"
        title="A clear path from idea to launch."
        body="The same spine shapes every engagement, scaled to the size of the problem."
        items={[
          { title: 'Discover', body: 'Understand the goal, the audience and the constraints.' },
          { title: 'Define', body: 'Agree on scope, priorities and what success means.' },
          { title: 'Design', body: 'Turn the thesis into flows, interfaces and a system.' },
          { title: 'Build', body: 'Ship in focused iterations with quality built in.' },
          { title: 'Launch', body: 'Test, harden and release with a plan you can trust.' },
          { title: 'Evolve', body: 'Learn from real use and keep making it better.' },
        ]}
      />
      <CtaBand />
    </>
  );
}
