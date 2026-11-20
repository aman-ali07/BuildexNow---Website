import { CalendarDays, CircleUserRound } from 'lucide-react';
import { CtaBand } from '../components/PageShell';
import { BLOG_POSTS, type BlogBlock } from '../data/blog-posts';

function renderBlocks(blocks: BlogBlock[]) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${out.length}`}>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>,
    );
    list = [];
  };
  blocks.forEach((block, i) => {
    if (block.type === 'li') {
      list.push(block.text);
      return;
    }
    flush();
    if (block.type === 'h3') out.push(<h3 key={i}>{block.text}</h3>);
    else if (block.type === 'quote') out.push(<blockquote key={i}>{block.text}</blockquote>);
    else out.push(<p key={i}>{block.text}</p>);
  });
  flush();
  return out;
}

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <section className="blog-hero"><div className="shell"><h1>Article not found.</h1></div></section>
        <CtaBand />
      </>
    );
  }

  return (
    <>
      <section className="post-hero">
        <div className="shell">
          <div className="post-hero-panel">
            <div className="post-hero-copy">
              <h1>{post.title}</h1>
              <div className="post-hero-meta">
                <span><CircleUserRound size={15} aria-hidden="true" /> BuildexNow</span>
                <span><CalendarDays size={15} aria-hidden="true" /> {post.date}</span>
              </div>
            </div>
            <div className="post-hero-media">
              <img src={post.image} alt={post.title} />
            </div>
          </div>
        </div>
      </section>
      <section className="section post-section">
        <div className="shell">
          <article className="post-body">
            {post.sections.map((section) => (
              <div className="post-block" key={section.heading || 'intro'}>
                {section.heading && <h2>{section.heading}</h2>}
                {renderBlocks(section.blocks)}
              </div>
            ))}
            <div className="page-hero-actions" style={{ marginTop: 40 }}>
              <a className="btn btn--ghost" href="/blog/">← Back to the journal</a>
            </div>
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
