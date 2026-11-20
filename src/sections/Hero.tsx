// Reference strip: six case-study stills looping horizontally, in this order.
const STRIP = [
  { src: '/assets/ref/Rectangle-6338.png', alt: 'Mobile app design preview' },
  { src: '/assets/ref/1-2.png', alt: 'Website design preview' },
  { src: '/assets/ref/2-1-2.png', alt: 'Shipment tracking app preview' },
  { src: '/assets/ref/3-1-2.png', alt: 'Analytics dashboard preview' },
  { src: '/assets/ref/web-mockup-1-1.jpg', alt: 'Business dashboard preview' },
  { src: '/assets/ref/web-mockup-4-1.jpg', alt: 'Web platform preview' },
];

export function Hero() {
  return (
    <header className="hero" id="top">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/ref/Rectangle-6338.png"
        aria-hidden="true"
      >
        <source src="/assets/ref/buildexnowhero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner">
        <h1 className="focus-reveal">
          <span className="line">Creative Intelligence in</span>
          <span className="line">Every Pixel</span>
        </h1>

        <p className="hero-sub focus-reveal">
          No matter the industry you&apos;re in, or the asset you need, we can design it for you
        </p>

        <div className="hero-actions">
          <a className="btn btn--primary hero-cta" href="/contact/">
            Start a Project
          </a>
        </div>
      </div>

      <div className="hero-strip focus-reveal" data-focus-opacity-only aria-hidden="true">
        {[...STRIP, ...STRIP].map((item, i) => (
          <div className="hero-strip-tile" key={`${item.src}-${i}`}>
            <img src={item.src} alt="" loading="eager" />
          </div>
        ))}
      </div>
    </header>
  );
}
