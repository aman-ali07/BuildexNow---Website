import { PageHero } from '../components/PageShell';
import { Contact } from '../sections/Contact';
import { CONTACT_EMAIL } from '../data/site';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk About Your Project"
        description="Tell us what you are building. We will help you find the right shape for the idea — and the right way to build it."
        accent={
          <div className="page-hero-actions">
            <a className="btn btn--primary" href={`mailto:${CONTACT_EMAIL}`}>Email us directly</a>
          </div>
        }
      />
      <div className="contact-page-section">
        <Contact />
      </div>
    </>
  );
}
