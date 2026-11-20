import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/site';

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The reference opens its carousel two cards in: the first two records sit
    // off-screen to the left and card three lands at x=286 at 1440px.
    if (window.matchMedia('(min-width: 861px)').matches && trackRef.current) {
      trackRef.current.scrollLeft = 2 * (399 + 16);
    }
  }, []);

  return (
    <section className="stories section" aria-labelledby="stories-heading">
      <div className="shell">
        <div className="stories-head reveal">
          <span className="stories-eyebrow"><i aria-hidden="true" /> Client Stories</span>
          <h2 id="stories-heading">Don&apos;t Take Our Word For It.<br />Hear From Our Clients.</h2>
          <p>
            From websites and branding to social media and performance marketing,
            see what businesses say about working with BuildexNow.
          </p>
        </div>

        <div className="stories-grid" ref={trackRef}>
          {TESTIMONIALS.map((item) => (
            <article className="story-card reveal" key={item.name}>
              <div className="story-card-top">
                <span className="story-tag"><i aria-hidden="true" /> {item.tag}</span>
                <Quote size={24} aria-hidden="true" />
              </div>
              <p className="story-quote">“{item.quote}”</p>
              <div className="story-foot">
                <span className="story-avatar">{item.initials}</span>
                <span className="story-person">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </span>
                <span className="story-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => <Star key={i} size={11} fill="currentColor" aria-hidden="true" />)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
