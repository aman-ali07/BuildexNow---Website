import { Eye, Hammer, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/ui/Primitives';

const PRINCIPLES = [
  {
    num: '01',
    icon: Eye,
    title: 'Clarity before craft',
    body: 'We understand the problem before we make anything beautiful. The right answer is usually the simplest one that holds up under real use.',
  },
  {
    num: '02',
    icon: Hammer,
    title: 'Show it early',
    body: 'Prototypes, previews and short feedback loops. Seeing the work beats imagining it — for our team and for yours.',
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'Built to last',
    body: 'We care about the code under the surface as much as the pixels on it: accessible, fast and ready to change when you need it to.',
  },
];

export function Principles() {
  return (
    <section className="principles section" id="studio">
      <div className="shell">
        <SectionHeading
          eyebrow="Studio principles"
          title={<>How we think about <span className="serif-accent">the work.</span></>}
          description="A few commitments that shape every engagement, whatever the size of the idea."
        />
        <div className="principles-grid">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <article className="principle reveal" key={item.num}>
                <div className="principle-top">
                  <span className="principle-num">{item.num}</span>
                  <span className="principle-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
