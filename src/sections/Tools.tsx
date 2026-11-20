import { TOOLS } from '../data/site';

const GLYPHS: Record<string, string> = {
  React: '⚛',
  'Next.js': '▲',
  TypeScript: 'TS',
  Figma: '◈',
  Tailwind: '≈',
  'Node.js': '◆',
};

export function Tools() {
  return (
    <section className="tools section--tight" aria-label="Tools we work with">
      <div className="shell tools-inner">
        <span className="tools-label reveal">The tools behind the work</span>
        <div className="tools-grid reveal">
          {TOOLS.map((tool) => (
            <span className="tool-item" key={tool}>
              <span aria-hidden="true" className="tool-glyph">{GLYPHS[tool]}</span>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
