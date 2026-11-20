import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="section cta-section" id="contact">
      <div className="shell">
        <div className="cta-panel reveal cta-final">
          <div className="cta-final-inner">
            <div className="cta-copy">
              <span className="cta-eyebrow"><i aria-hidden="true" /> Let&apos;s Work Together</span>
              <h2>Have a project in mind?<br />Let&apos;s make it happen.</h2>
              <p>
                Tell us what you&apos;re planning. We&apos;ll help you find the right digital
                solution to take your business forward.
              </p>
            </div>
            <div className="cta-side">
              <a className="btn btn--light" href="/contact/">
                Start a project <ArrowUpRight className="arrow" size={16} aria-hidden="true" />
              </a>
              <span>Let&apos;s discuss your next move.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
