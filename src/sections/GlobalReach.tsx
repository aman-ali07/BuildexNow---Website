import { CLIENTS } from '../data/site';

const FLAGS = ['🇮🇳', '🇺🇸', '🇦🇪', '🇩🇪', '🇬🇧', '🇦🇺', '🇨🇦', '🇺🇦'];
const STATS = [
  { value: '8+', label: 'Countries' },
  { value: '6+ yrs', label: 'Experience' },
  { value: '10x', label: 'Peak Growth' },
];

export function GlobalReach() {
  return (
    <section className="reach section" aria-labelledby="reach-heading">
      <div className="shell reach-inner">
        <span className="reach-eyebrow reveal">A Growing Global Reach</span>
        <h2 className="reach-heading reveal" id="reach-heading">
          Working with ambitious<br />businesses across borders.
        </h2>
        <p className="reach-copy reveal">
          From local businesses to international brands, we work with teams across
          different markets to build stronger digital experiences and support
          business growth.
        </p>

        <div className="reach-panel reveal">
          <div className="reach-flags">
            <div className="reach-flag-row" aria-hidden="true">
              {FLAGS.map((flag, i) => <span key={i}>{flag}</span>)}
            </div>
            <span className="reach-flags-label">Clients across 8+ countries</span>
          </div>
          <div className="reach-clients">
            {CLIENTS.map((client) => (
              <span className="reach-client" key={client}>{client}</span>
            ))}
          </div>
        </div>

        <div className="reach-stats reveal">
          {STATS.map((stat) => (
            <div className="reach-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
