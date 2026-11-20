import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/site';

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="services-head reveal">
          <div>
            <span className="services-eyebrow">What We Do</span>
            <h2>What we do, and do well.</h2>
          </div>
          <p>
            From building your digital presence to reaching the right audience,
            our services bring strategy, design and technology together to support
            your business goals.
          </p>
        </div>

        <div className="service-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a className="service-card reveal" href="/contact/" key={service.index}>
                <div className="service-card-top">
                  <span className="service-index">{service.index}</span>
                  <ArrowUpRight className="corner-arrow" size={19} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-icon" aria-hidden="true"><Icon strokeWidth={1.6} /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
