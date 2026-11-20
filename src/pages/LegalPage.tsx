import { PageHero, CtaBand } from '../components/PageShell';
import { LEGAL_PAGES } from '../data/pages';

export default function LegalPage({ slug }: { slug: string }) {
  const page = LEGAL_PAGES[slug];

  if (!page) {
    return (
      <>
        <PageHero eyebrow="Policies" title="Page not found." description="That policy is not published here." />
        <CtaBand />
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Policies" title={page.title} description="Plain-language information about how this site works and how we handle your details." />
      <section className="section">
        <div className="shell legal-body">
          {page.sections.map((section) => (
            <div className="reveal" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <p style={{ marginTop: 36, color: 'var(--text-faint)', fontSize: 13 }}>
            Last updated {new Date().getFullYear()}. Have a question? Write to buildexnow@gmail.com.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
