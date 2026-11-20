import { useState, type ComponentType, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Plus, X } from 'lucide-react';
import { Eyebrow } from './ui/Primitives';

export type FeatureIcon = ComponentType<{ size?: number; strokeWidth?: number }>;
export type Feature = { title: string; body: string; icon?: FeatureIcon };

export function FeatureGrid({ eyebrow, title, body, items }: {
  eyebrow: string; title: ReactNode; body?: string; items: Feature[];
}) {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          {body && <p>{body}</p>}
        </div>
        <div className="service-grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
            <article className="service-card reveal" key={item.title}>
              <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
              <ArrowRight className="corner-arrow" size={18} aria-hidden="true" />
              {Icon && <div className="service-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.7} /></div>}
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

export function Split({ eyebrow, title, body, bullets, visual, reverse }: {
  eyebrow: string; title: ReactNode; body: string; bullets?: string[]; visual: ReactNode; reverse?: boolean;
}) {
  return (
    <section className="section">
      <div className="shell split-layout">
        <div className={`split-copy reveal ${reverse ? 'split-copy--right' : ''}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{body}</p>
          {bullets && (
            <ul className="check-list">
              {bullets.map((b) => <li key={b}><Check size={15} aria-hidden="true" />{b}</li>)}
            </ul>
          )}
        </div>
        <div className="split-visual reveal">{visual}</div>
      </div>
    </section>
  );
}

export function Tabs({ tabs }: { tabs: { label: string; title: string; body: string; points: string[] }[] }) {
  const [active, setActive] = useState(0);
  return (
    <section className="section section--tight">
      <div className="shell">
        <div className="tabs-bar" role="tablist" aria-label="Details">
          {tabs.map((tab, i) => (
            <button
              role="tab"
              key={tab.label}
              className={i === active ? 'is-active' : ''}
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-panel" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3>{tabs[active].title}</h3>
              <p>{tabs[active].body}</p>
              <ul className="check-list">
                {tabs[active].points.map((p) => <li key={p}><Check size={15} aria-hidden="true" />{p}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export type GalleryItem = { title: string; kind: string; art: ReactNode };

export function Gallery({ eyebrow, title, body, items }: {
  eyebrow: string; title: ReactNode; body?: string; items: GalleryItem[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          {body && <p>{body}</p>}
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <button className="gallery-card reveal" key={`${item.title}-${i}`} onClick={() => setOpen(i)} aria-label={`View ${item.title}`}>
              <span className="gallery-art">{item.art}</span>
              <span className="gallery-label"><small>{item.kind}</small><strong>{item.title}</strong></span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={items[open].title}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-art">{items[open].art}</div>
              <div className="lightbox-caption"><small>{items[open].kind}</small><strong>{items[open].title}</strong></div>
              <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close"><X size={20} /></button>
              <div className="lightbox-nav">
                <button onClick={() => setOpen((open - 1 + items.length) % items.length)} aria-label="Previous">←</button>
                <span>{open + 1} / {items.length}</span>
                <button onClick={() => setOpen((open + 1) % items.length)} aria-label="Next">→</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export type PriceTier = { name: string; price: string; unit?: string; description: string; points: string[]; featured?: boolean };

export function PriceGroups({ groups, intro }: { groups: { title: string; subtitle?: string; tiers: PriceTier[] }[]; intro?: string }) {
  const [active, setActive] = useState(0);
  const group = groups[active];
  return (
    <section className="section">
      <div className="shell">
        {intro && <p className="price-intro reveal">{intro}</p>}
        <div className="tabs-bar price-tabs" role="tablist" aria-label="Pricing categories">
          {groups.map((g, i) => (
            <button
              role="tab"
              key={g.title}
              className={i === active ? 'is-active' : ''}
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {g.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="price-group-head">
              <h2>{group.title}</h2>
              {group.subtitle && <p>{group.subtitle}</p>}
            </div>
            <div className="price-grid">
              {group.tiers.map((tier) => (
                <article className={`price-card ${tier.featured ? 'price-card--featured' : ''}`} key={tier.name}>
                  {tier.featured && <span className="price-flag">Most chosen</span>}
                  <h3>{tier.name}</h3>
                  <div className="price-value">{tier.price}<small>{tier.unit || ''}</small></div>
                  <p>{tier.description}</p>
                  <ul className="check-list">
                    {tier.points.map((p) => <li key={p}><Check size={15} aria-hidden="true" />{p}</li>)}
                  </ul>
                  <a className={`btn ${tier.featured ? 'btn--primary' : 'btn--ghost'}`} href="/contact/">Enquire <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Steps({ eyebrow, title, body, items }: {
  eyebrow: string; title: ReactNode; body?: string; items: { title: string; body: string }[];
}) {
  return (
    <section className="section section--tight">
      <div className="shell">
        <div className="section-head reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          {body && <p>{body}</p>}
        </div>
        <div className="steps-grid">
          {items.map((item, i) => (
            <article className="step-card reveal" key={item.title}>
              <span className="step-badge">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {i < items.length - 1 && <Plus className="step-plus" size={14} aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
