const WORDS = [
  'E-commerce', 'Performance marketing', 'Product design', 'Front-end',
  'Design systems', 'Launch support', 'Branding', 'SEO', 'App development',
];

export function Marquee() {
  const run = WORDS.map((word, i) => (
    <span className="marquee-word" key={`${word}-${i}`}>
      <i aria-hidden="true" />
      {word}
    </span>
  ));
  return (
    <div className="marquee marquee--words" aria-label={`Expertise: ${WORDS.join(', ')}`}>
      <div className="marquee-track marquee-track--words">
        <div className="marquee-run">{run}</div>
        <div className="marquee-run" aria-hidden="true">{run}</div>
      </div>
    </div>
  );
}
