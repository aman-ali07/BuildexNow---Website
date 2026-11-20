import fs from 'fs';
import path from 'path';

const configuredOrigin = (process.env.SITE_ORIGIN || '').replace(/\/+$/, '');
if (process.env.CF_PAGES === '1' && !configuredOrigin) {
  throw new Error('SITE_ORIGIN must be set in Cloudflare Pages (e.g. https://buildexnow.pages.dev)');
}
const SITE_ORIGIN = configuredOrigin || 'https://buildexnow.com';

const ROOT = process.cwd();
const SERVICE_SLUGS = [
  'website-design-development', 'seo-service', 'app-development',
  'branding', 'paid-ads', 'social-media-content-marketing',
];
const POSTS = [
  { slug: 'how-to-choose-the-best-digital-marketing-agency-in-guwahati-2026-guide', title: 'How to Choose the Best Digital Marketing Agency in Kanpur (2026)', description: 'Looking for a digital marketing agency in Kanpur? Learn how to compare agencies, evaluate services, understand pricing and choose the right growth partner for your business.' },
  { slug: 'seo-services-cost-in-guwahati-complete-pricing-guide', title: 'SEO Services Cost in Kanpur – Complete Pricing Guide', description: 'Discover how much SEO services cost in Kanpur in 2026. Compare SEO pricing, monthly packages, services included and tips for choosing the right SEO agency.' },
  { slug: 'how-to-get-your-business-on-google-maps-in-guwahati-2026', title: 'How to Get Your Business on Google Maps in Kanpur', description: 'Learn how to get your business on Google Maps in Kanpur. Follow this guide to set up your Google Business Profile, improve local visibility and attract more customer enquiries.' },
  { slug: 'how-much-does-digital-marketing-cost-in-guwahati-2026-pricing-guide', title: 'Digital Marketing Cost in Kanpur – Pricing Guide', description: 'Discover Digital Marketing Cost in Kanpur in 2026. Compare SEO, social media marketing, paid ads and monthly agency packages for businesses.' },
  { slug: 'how-to-get-free-business-email-using-zoho-mail', title: 'How to Get Free Business Email Using Zoho Mail', description: 'Learn how to create a free business email using Zoho Mail. Set up your custom domain, verify DNS records and create professional email addresses step by step.' },
  { slug: 'best-website-development-company-in-guwahati-how-to-choose-the-right-agency-for-your-business', title: 'Best Website Development Company in Kanpur | BuildexNow', description: 'Looking for a website development company in Kanpur? Discover how to choose the right web development agency for your business in India | BuildexNow' },
  { slug: 'how-much-does-website-development-cost-in-india-2026-complete-guide', title: 'Website Development Cost in India (2026) – Complete Pricing Guide', description: 'Discover website development costs in India in 2026. Compare landing page, business website, WordPress and eCommerce website pricing.' },
  { slug: 'why-every-small-business-in-guwahati-needs-a-professional-website-in-2026', title: 'Why Every Small Business in Kanpur Needs a Website (2026)', description: 'Discover why every small business in Kanpur needs a professional website in 2026. Learn how a website builds trust, attracts customers and grows your business.' },
];
const LEGAL_SLUGS = ['terms-conditions', 'privacy-policy', 'cookies', 'refund-policy', 'delivery-policy'];

const ACRONYMS = { seo: 'SEO', ai: 'AI', api: 'API', ui: 'UI', ux: 'UX' };
const titleCase = (slug) => slug.split('-').map((w) => ACRONYMS[w] || w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const PAGES = [
  { route: '/', dir: '.', title: 'BuildexNow — Creative Intelligence in Every Pixel', description: 'BuildexNow is a web design, branding and creative agency in Kanpur, Uttar Pradesh offering subscription-based services and transparent pricing for businesses.' },
  { route: '/contact/', dir: 'contact', title: 'Contact BuildexNow | Digital Marketing Agency in Kanpur', description: 'Tell us what you are building and we will find the right way forward.' },
  { route: '/work/', dir: 'work', title: 'Our Work | Web Design, Branding & Marketing Projects | BuildexNow', description: 'Original interface studies and product explorations from BuildexNow.' },
  { route: '/pricing/', dir: 'pricing', title: 'Digital Marketing & Web Design Pricing in Kanpur | BuildexNow', description: 'Clear scopes and honest conversations about product work.' },
  { route: '/about/', dir: 'about', title: 'About BuildexNow | Digital Marketing Agency in Kanpur, Uttar Pradesh', description: 'A digital product and technology studio for people building what comes next.' },
  { route: '/blog/', dir: 'blog', title: 'Blog - BuildexNow', description: 'Insights, guides and practical advice from the BuildexNow team.' },
  { route: '/invoice-generator/', dir: 'invoice-generator', title: 'Free Invoice Generator Online – BuildexNow', description: 'A free, print-ready invoice generator. Nothing is uploaded or stored.' },
  { route: '/seo-checker/', dir: 'seo-checker', title: 'Free SEO Checker Tool – Analyze Your Website | BuildexNow', description: 'A quick, honest checklist for the SEO fundamentals you control.' },
  ...SERVICE_SLUGS.map((slug) => ({
    route: `/${slug}/`, dir: slug,
    title: ({
      'seo-service': 'SEO Services in Kanpur, Uttar Pradesh | BuildexNow',
      'app-development': 'App Development Company in Kanpur | BuildexNow',
      'branding': 'Branding Agency in Kanpur, Uttar Pradesh | BuildexNow',
      'paid-ads': 'Paid Ads & PPC Agency in Kanpur, Uttar Pradesh | BuildexNow',
      'social-media-content-marketing': 'Social Media Marketing Agency in Kanpur | BuildexNow',
      'website-design-development': 'Website Design & Development Company in Kanpur | BuildexNow',
    })[slug] || `${titleCase(slug)} — BuildexNow`,
    description: `${titleCase(slug)} from BuildexNow, a digital product and technology studio.`,
  })),
  ...POSTS.map((post) => ({ route: `/blog/${post.slug}/`, dir: `blog/${post.slug}`, title: post.title, description: post.description })),
  ...LEGAL_SLUGS.map((slug) => ({
    route: `/${slug}/`, dir: slug,
    title: ({
      'terms-conditions': 'Terms & Conditions - BuildexNow',
      'privacy-policy': 'Privacy Policy - BuildexNow',
      'cookies': 'Cookies - BuildexNow',
      'refund-policy': 'Refund Policy - BuildexNow',
      'delivery-policy': 'Delivery Policy - BuildexNow',
    })[slug] || `${titleCase(slug)} — BuildexNow`,
    description: 'Policies and information about how this site works.',
  })),
];

const head = (title, description) => `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#111111" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${SITE_ORIGIN}${PAGES[0].route === '/' ? '/' : ''}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="BuildexNow" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "${SITE_ORIGIN}/#organization",
            "name": "BuildexNow",
            "description": "A digital product and technology studio building considered digital products.",
            "url": "${SITE_ORIGIN}/",
            "email": "buildexnow@gmail.com"
          },
          {
            "@type": "WebSite",
            "@id": "${SITE_ORIGIN}/#website",
            "url": "${SITE_ORIGIN}/",
            "name": "BuildexNow",
            "publisher": { "@id": "${SITE_ORIGIN}/#organization" },
            "inLanguage": "en"
          }
        ]
      }
    </script>`;

for (const page of PAGES) {
  const dir = path.join(ROOT, page.dir);
  fs.mkdirSync(dir, { recursive: true });
  const canonical = page.route === '/' ? '/' : page.route;
  const html = `<!doctype html>
<html lang="en">
  <head>
${head(page.title, page.description).replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE_ORIGIN}${canonical}" />`)}
  </head>
  <body>
    <div id="root" data-route="${canonical}"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(page.route.padEnd(46), '→', path.join(page.dir, 'index.html'));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url>\n    <loc>${SITE_ORIGIN}${p.route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p.route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), sitemap);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
fs.writeFileSync(path.join(ROOT, 'public', 'robots.txt'), robots);

const notFound = `<!doctype html>
<html lang="en">
  <head>
${head('Page not found — BuildexNow', 'The page you were looking for is not here.')
  .replace(/<link rel="canonical"[^>]*>\s*/, '')
  .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')}
  </head>
  <body>
    <div id="root" data-route="/__404__"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
fs.writeFileSync(path.join(ROOT, '404.html'), notFound);

console.log(`\nGenerated ${PAGES.length} page entries, sitemap, robots.txt and 404.html.`);
