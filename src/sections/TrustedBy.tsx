import { TRUSTED_LOGOS } from '../data/site';

// The reference renders its client marks as two horizontally-scrolling rows
// that bleed past both viewport edges, not a centered static grid.
const LOOP = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

export function TrustedBy() {
  return (
    <section className="trusted" aria-labelledby="trusted-heading">
      <div className="trusted-glow" aria-hidden="true" />
      <div className="shell">
        <h2 className="trusted-heading reveal" id="trusted-heading">Trusted by Leading Brands</h2>
        <div className="trusted-marquee reveal">
          <div className="trusted-row trusted-row--fwd">
            {LOOP.map((logo, i) => (
              <span className="trusted-logo" key={`fwd-${i}`} aria-hidden={i >= TRUSTED_LOGOS.length || undefined}>
                <img src={logo.src} alt={i >= TRUSTED_LOGOS.length ? '' : logo.name} loading="lazy" />
              </span>
            ))}
          </div>
          <div className="trusted-row trusted-row--rev" aria-hidden="true">
            {LOOP.map((logo, i) => (
              <span className="trusted-logo" key={`rev-${i}`}>
                <img src={logo.src} alt="" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
