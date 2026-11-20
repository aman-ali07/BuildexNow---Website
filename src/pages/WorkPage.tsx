import { PageHero, CtaBand } from '../components/PageShell';
import { Gallery } from '../components/Blocks';
import { CONCEPTS } from '../data/site';

export default function WorkPage() {
  const items = [...CONCEPTS, ...CONCEPTS].map((concept, i) => ({
    title: concept.name,
    kind: concept.kind,
    art: <img src={concept.image} alt={`${concept.name} project`} key={i} />,
  }));

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="What We’re Most Proud Of"
        description="Original interface studies that show the thinking, craft and range we bring to a product. Open any one of them for a closer look."
      />
      <Gallery
        eyebrow="Creative showcase"
        title={<>A closer <span className="serif-accent">look.</span></>}
        body="These are concept explorations, not client case studies — made to explore ideas and sharpen the work."
        items={items}
      />
      <CtaBand />
    </>
  );
}
