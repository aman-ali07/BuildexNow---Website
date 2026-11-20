import type { ReactNode } from 'react';
import { Nav } from '../sections/Nav';
import { Footer } from '../sections/Footer';
import { WhatsAppButton } from '../sections/WhatsAppButton';
import { Eyebrow } from './ui/Primitives';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-bg" aria-hidden="true" />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  accent,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  accent?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <header className={centered ? 'page-hero page-hero--center' : 'page-hero'}>
      <div className="page-hero-orbs" aria-hidden="true">
        <i className="orb orb--one" />
        <i className="orb orb--two" />
        <i className="orb orb--three" />
      </div>
      <div className="shell page-hero-inner">
        {!centered && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><span>{eyebrow}</span>
          </nav>
        )}
        <div className="reveal">
          {!centered && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1>{title}</h1>
          <p>{description}</p>
          {accent}
          {children}
        </div>
      </div>
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="shell">
        <div className="cta-panel reveal cta-liquid">
          <div className="cta-liquid-blob blob--a" aria-hidden="true" />
          <div className="cta-liquid-blob blob--b" aria-hidden="true" />
          <div className="cta-liquid-blob blob--c" aria-hidden="true" />
          <div className="cta-layout">
            <div className="cta-copy">
              <Eyebrow>Let&apos;s work together</Eyebrow>
              <h2>Have a project in mind? <span className="serif-accent">Let&apos;s make it happen.</span></h2>
              <p>Tell us what you are planning. We will help you find the right shape for the idea — and the right way to build it.</p>
            </div>
            <div className="cta-band-actions">
              <a className="btn btn--primary" href="/#contact">Start a Project</a>
              <a className="btn btn--ghost" href="/about/">Meet the studio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
