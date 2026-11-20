import { MotionConfig } from 'framer-motion';
import { BuildexIntro } from './components/BuildexIntro';
import { PageShell } from './components/PageShell';
import { useScrollEffects } from './hooks/useScrollEffects';
import { getRoute } from './router';
import { SERVICE_PAGES } from './data/pages';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import PricingPage from './pages/PricingPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';
import { InvoiceGeneratorPage, SeoCheckerPage } from './pages/ToolPages';
import { BLOG_POSTS } from './data/blog-posts';
import { LEGAL_PAGES } from './data/pages';
import { PageHero, CtaBand } from './components/PageShell';

const SERVICE_SLUGS = SERVICE_PAGES.map((p) => p.slug);
const LEGAL_SLUGS = Object.keys(LEGAL_PAGES);

function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="That page has moved on." description="The page you were looking for is not here. Start again from the studio." />
      <CtaBand />
    </>
  );
}

function RouteView() {
  const route = getRoute();
  const trimmed = route.replace(/\/$/, '');

  if (route === '/') return <HomePage />;
  if (route === '/contact/' || route === '/contact') return <ContactPage />;
  if (route === '/work/' || route === '/work') return <WorkPage />;
  if (route === '/pricing/' || route === '/pricing') return <PricingPage />;
  if (route === '/about/' || route === '/about') return <AboutPage />;
  if (route === '/blog/' || route === '/blog') return <BlogPage />;
  if (route === '/invoice-generator/' || route === '/invoice-generator') return <InvoiceGeneratorPage />;
  if (route === '/seo-checker/' || route === '/seo-checker') return <SeoCheckerPage />;

  if (trimmed.startsWith('/blog/')) {
    const slug = trimmed.replace('/blog/', '');
    return BLOG_POSTS.some((p) => p.slug === slug) ? <BlogPostPage slug={slug} /> : <NotFound />;
  }

  const serviceSlug = trimmed.replace(/^\//, '');
  if (SERVICE_SLUGS.includes(serviceSlug)) return <ServicePage slug={serviceSlug} />;
  if (LEGAL_SLUGS.includes(serviceSlug)) return <LegalPage slug={serviceSlug} />;

  return <NotFound />;
}

export default function App() {
  useScrollEffects();

  return (
    <MotionConfig reducedMotion="user">
      <BuildexIntro />
      <PageShell>
        <RouteView />
      </PageShell>
    </MotionConfig>
  );
}
