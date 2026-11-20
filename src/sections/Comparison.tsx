import { Check, X } from 'lucide-react';
import { COMPARISON } from '../data/site';
const COLUMNS = ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Affordability'];

export function Comparison() {
  return (
    <section className="section compare">
      <div className="shell">
        <div className="compare-head-block reveal">
          <span className="compare-eyebrow"><i aria-hidden="true" /> Why Choose Us</span>
          <h2>
            <span className="compare-serif">BuildexNow&apos;s</span> Alternative?<br />
            <span className="compare-serif">Think</span> One More Time!
          </h2>
        </div>

        <div className="compare-wrap reveal">
          <div className="compare-scroll" role="region" aria-label="How BuildexNow compares to other ways of building" tabIndex={0}>
            <table className="compare-table">
              <colgroup>
                <col className="compare-col-platform" />
                {COLUMNS.map((column) => <col className="compare-col-feature" key={column} />)}
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Platform</th>
                  {COLUMNS.map((column) => <th scope="col" key={column}>{column}</th>)}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => {
                  const Icon = row.icon;
                  return (
                    <tr className={`compare-row ${row.hero ? 'compare-row--hero' : ''}`} key={row.name}>
                      <th scope="row" className="compare-row-label">
                        <div className="compare-platform">
                          <span className="compare-icon"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
                          <div className="compare-platform-copy">
                            <strong>{row.name}</strong>
                            <span>{row.note}</span>
                          </div>
                        </div>
                      </th>
                      {row.marks.map((yes, i) => (
                        <td className={`compare-mark ${yes ? 'yes' : ''}`} key={COLUMNS[i]}>
                          <span className="compare-mark-icon">
                            {yes ? <Check size={21} strokeWidth={1.7} aria-hidden="true" /> : <X size={21} strokeWidth={1.7} aria-hidden="true" />}
                          </span>
                          <span className="compare-sr-only">{COLUMNS[i]}: {yes ? 'strong' : 'limited'}</span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="compare-mobile">
          {COMPARISON.map((row) => {
            const Icon = row.icon;
            return (
              <article className={`compare-card ${row.hero ? 'compare-card--hero' : ''}`} key={row.name}>
                <div className="compare-card-head">
                  <span className="compare-icon"><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span>
                  <div>
                    <strong>{row.name}</strong>
                    <span>{row.mobileNote ?? row.note}</span>
                  </div>
                </div>
                <div className="compare-card-marks">
                  {row.marks.map((yes, i) => (
                    <span className={yes ? 'yes' : ''} key={COLUMNS[i]}>
                      {COLUMNS[i]}
                      <i className="compare-mark-badge">
                        {yes ? <Check size={12} aria-hidden="true" /> : <X size={12} aria-hidden="true" />}
                      </i>
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="compare-footnote">
          A qualitative comparison based on how we work — not a claim about any specific provider.
        </p>
      </div>
    </section>
  );
}
