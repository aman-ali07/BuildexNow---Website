import { BLOG_POSTS } from '../data/blog-posts';
import { CtaBand } from '../components/PageShell';

export default function BlogPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="shell">
          <h1>Your Go-To Source</h1>
        </div>
      </section>
      <section className="section blog-section">
        <div className="shell">
          <div className="blog-cards">
            {BLOG_POSTS.map((post) => (
              <a className="blog-card" href={`/blog/${post.slug}/`} key={post.slug}>
                <div className="blog-card-media">
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <h2>{post.title}</h2>
                  <p>by BuildexNow</p>
                  <span className="blog-read">Read More →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
