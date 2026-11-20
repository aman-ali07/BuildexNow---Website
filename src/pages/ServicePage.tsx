import { PageHero, CtaBand } from '../components/PageShell';
import { FeatureGrid, Split, Tabs } from '../components/Blocks';
import { SERVICE_PAGES, type ServicePageData } from '../data/pages';
import { Workflow, Layers3, Gauge } from 'lucide-react';

export default function ServicePage({ slug }: { slug: string }) {
  const data: ServicePageData | undefined = SERVICE_PAGES.find((page) => page.slug === slug);

  if (!data) {
    return (
      <>
        <PageHero eyebrow="Service" title="Service not found." description="This service page does not exist. Explore the studio instead." />
        <CtaBand />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={data.label}
        title={data.title}
        description={data.description}
        centered
      >
        <div className="page-hero-actions">
          <a className="btn btn--primary" href="/contact/">Book a Call</a>
        </div>
      </PageHero>

      <div className="service-strip" aria-hidden="true">
        {[
          '/assets/ref/Rectangle-6338.png',
          '/assets/ref/2-1-2.png',
          '/assets/ref/3-1-2.png',
          '/assets/ref/1-2.png',
          '/assets/ref/web-mockup-4-1.jpg',
        ].map((src) => (
          <div className="service-strip-tile" key={src}><img src={src} alt="" loading="lazy" /></div>
        ))}
      </div>

      <FeatureGrid
        eyebrow="What we offer"
        title={<>Everything the work <span className="serif-accent">needs.</span></>}
        body="A focused set of capabilities, applied only where they help the product."
        items={data.capabilities}
      />

      <Split
        eyebrow={data.split.eyebrow}
        title={data.split.title}
        body={data.split.body}
        bullets={data.split.bullets}
        visual={
          <>
            <div className="visual-card">
              <strong><Workflow size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> A clear method</strong>
              <span>Discover, define, design, build, launch and evolve — the same spine on every engagement.</span>
            </div>
            <div className="visual-card">
              <strong><Layers3 size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> One connected team</strong>
              <span>Strategy, design and engineering in the same conversation from the first week.</span>
            </div>
            <div className="visual-card">
              <strong><Gauge size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} /> Built to measure</strong>
              <span>Every stage has a reason and a way to know whether it worked.</span>
            </div>
          </>
        }
      />

      <Tabs tabs={data.tabs} />
      <CtaBand />
    </>
  );
}
