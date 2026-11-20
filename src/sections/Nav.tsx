import { Fragment, useEffect, useState } from 'react';
import { ChevronDown, LayoutGrid, BriefcaseBusiness, Workflow, Layers3, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '../data/site';
import { getRoute } from '../router';

const DROPDOWNS: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Website Design & Development', href: '/website-design-development/' },
    { label: 'Social Media & Content Marketing', href: '/social-media-content-marketing/' },
    { label: 'Paid Ads', href: '/paid-ads/' },
    { label: 'Branding', href: '/branding/' },
    { label: 'App Development', href: '/app-development/' },
    { label: 'SEO', href: '/seo-service/' },
  ],
  Assets: [
    { label: 'Free SEO Checker', href: '/seo-checker/' },
    { label: 'Invoice Generator', href: '/invoice-generator/' },
    { label: 'Blog', href: '/blog/' },
  ],
};

// Reference mobile dock: five 78px slots; the middle one is a raised lime
// contact action that sits 28px above the bar.
const MOBILE_ITEMS = [
  { label: 'Services', href: '/#services', icon: LayoutGrid },
  { label: 'Work', href: '/work/', icon: BriefcaseBusiness },
  { label: 'Contact', href: '/contact/', icon: MessageSquare, center: true },
  { label: 'Assets', href: '/blog/', icon: Layers3 },
  { label: 'Pricing', href: '/pricing/', icon: Workflow },
];

function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (getRoute() !== '/') return;
    const sections = NAV_LINKS.map((link) => {
      const hash = link.href.split('#')[1];
      return hash ? document.getElementById(hash) : null;
    }).filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Brand() {
  // The reference nav uses its own logo lockup (lime mark + light "BuildexNow"
  // wordmark) served as a transparent PNG, not a hand-built SVG/text approximation.
  return (
    <a className="brand" href="/" aria-label="BuildexNow — home">
      <img
        className="brand-logo"
        src="/assets/ref/buildexnow-wordmark.png"
        alt="BuildexNow"
        width={871}
        height={163}
      />
    </a>
  );
}

export function Nav() {
  const active = useActiveSection();
  const route = getRoute();

  const isActive = (href: string) => {
    const hash = href.split('#')[1];
    if (hash) return route === '/' && active === `#${hash}`;
    return route === href;
  };

  return (
    <>
      <div className="nav-wrap" id="site-nav">
        <nav className="nav" aria-label="Primary navigation">
          <Brand />

          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              const children = DROPDOWNS[link.label];
              return (
                <li className={children ? 'has-dropdown' : undefined} key={link.href}>
                  <a
                    href={link.href}
                    className={isActive(link.href) ? 'is-active' : undefined}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                    {children && <ChevronDown size={13} aria-hidden="true" />}
                  </a>
                  {children && (
                    <ul className="nav-dropdown">
                      {children.map((child) => (
                        <li key={child.href}><a href={child.href}>{child.label}</a></li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="nav-cta">
            <a className="btn btn--light btn--sm" href="/contact/">
              Start a Project
            </a>
          </div>
        </nav>
      </div>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        {MOBILE_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.label}>
              {item.center && <span className="mobile-dock-spacer" aria-hidden="true" />}
              <a
                href={item.href}
                className={`${item.center ? 'mobile-dock-center' : ''} ${isActive(item.href) ? 'is-active' : ''}`.trim()}
                aria-label={item.center ? 'Start a project' : item.label}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <Icon size={item.center ? 24 : 19} aria-hidden="true" />
                {!item.center && item.label}
              </a>
            </Fragment>
          );
        })}
      </nav>
    </>
  );
}
