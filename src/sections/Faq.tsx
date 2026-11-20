import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { FAQS } from '../data/site';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="shell faq-layout">
        <div className="faq-intro reveal">
          <span className="faq-eyebrow">FAQS</span>
          <h2>Questions? We&apos;ve Got Answers</h2>
          <p>
            Everything you need to know about working with BuildexNow. From websites
            and branding to digital marketing, we&apos;re here to make things simple.
          </p>
          <a className="btn btn--light btn--sm" href="/contact/">
            Book a free call <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="faq-list reveal">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.q}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true"><Plus size={16} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="faq-panel-inner">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
