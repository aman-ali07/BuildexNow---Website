import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { CONCEPTS } from '../data/site';

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <div className="work-head reveal">
          <span className="work-eyebrow">How We Helped Others Succeed</span>
          <h2>Our Creative Showcase</h2>
          <p>
            We have become experts in creating top-notch digital products. We design
            beautifully and develop excellently. And we care deeply about what we do.
          </p>
        </div>

        <div className="work-grid">
          {CONCEPTS.map((concept) => (
            <a
              className="work-card reveal"
              href="/work/"
              key={concept.name}
              aria-label={`View ${concept.name} case study`}
            >
              <div className="work-frame" style={{ background: concept.tone }}>
                <img src={concept.image} alt={`${concept.name} project`} loading="lazy" />
              </div>
              <div className="work-caption">
                <div>
                  <span className="kind">{concept.kind}</span>
                  <h3>{concept.name}</h3>
                  <p>{concept.description}</p>
                </div>
                <span className="work-arrow" aria-hidden="true"><MoveUpRight size={18} /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="work-more reveal">
          <div className="work-placeholder">
            <h3>Your project here</h3>
            <p>
              The proof is in our work. Check out our portfolio to learn how our
              product development services can transform your business.
            </p>
            <a className="btn btn--primary" href="/work/">
              View Our Work <ArrowUpRight className="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
