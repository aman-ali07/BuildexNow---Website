/** Resolves the current route from the root element's data-route (set by the
 * generated static HTML entries) or, failing that, the browser pathname. */
export function getRoute(): string {
  const root = document.getElementById('root');
  const declared = root?.dataset.route;
  const raw = declared || window.location.pathname;
  const clean = raw.replace(/\/index\.html$/, '/').replace(/\/+$/, '');
  return clean === '' || clean === '/' ? '/' : `${clean}/`;
}

export function navigate(path: string) {
  window.location.href = path.endsWith('/') ? path : `${path}/`;
}
