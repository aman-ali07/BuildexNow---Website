import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/site';

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'Facebook', Icon: Facebook },
];

const FOOTER_COLS = [
  {
    title: 'Services :',
    links: [
      ['Website Design & Development', '/website-design-development/'],
      ['Social Media & Content Marketing', '/social-media-content-marketing/'],
      ['Paid Ads', '/paid-ads/'],
      ['Branding', '/branding/'],
      ['App Development', '/app-development/'],
      ['SEO Services', '/seo-service/'],
    ],
  },
  {
    title: 'Company :',
    links: [
      ['About us', '/about/'],
      ['Pricing', '/pricing/'],
      ['Work', '/work/'],
      ['Contact', '/contact/'],
    ],
  },
  {
    title: 'Assets :',
    links: [
      ['Free SEO Tool', '/seo-checker/'],
      ['Free Invoice Generator', '/invoice-generator/'],
      ['Blog', '/blog/'],
    ],
  },
  {
    title: 'Policies :',
    links: [
      ['Privacy Policy', '/privacy-policy/'],
      ['Refund Policy', '/refund-policy/'],
      ['Delivery Policy', '/delivery-policy/'],
      ['Terms & Condition', '/terms-conditions/'],
      ['Cookies', '/cookies/'],
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="BuildexNow — home">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M5 4.5h13.5L8.5 19.5H5L14 10H5V4.5Z" fill="currentColor" />
                  <path d="M15.5 14.5H19V19.5H14.5L15.5 14.5Z" fill="currentColor" />
                </svg>
              </span>
              <span className="brand-text">
                BuildexNow{' '}
                <span>Agency</span>
              </span>
            </a>
            <p>
              A digital product and technology studio. We shape ideas into
              considered, well-built products — from first sketch to long-term
              iteration.
            </p>
            <a className="footer-mail" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <div className="footer-socials" aria-label="Social profiles">
              {SOCIALS.map(({ label, Icon }) => (
                <a key={label} aria-label={label} title={label}>
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="footer-hq">
              <strong>Headquarters</strong>
              Kanpur, Uttar Pradesh, India
            </p>
            <p className="footer-gst">
              <span>Proud partner of</span>
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {year}. BuildexNow. All rights reserved.</span>
          <span className="tagline">Built with intent.</span>
          <a href="#top">Back to top <ArrowUpRight size={12} style={{ display: 'inline', verticalAlign: '-1px' }} /></a>
        </div>
      </div>
    </footer>
  );
}
