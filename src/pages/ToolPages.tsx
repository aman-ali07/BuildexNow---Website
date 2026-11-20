import { useState, type CSSProperties, type FormEvent } from 'react';
import { Check, AlertCircle, Download, ScanSearch } from 'lucide-react';
import { PageHero, CtaBand } from '../components/PageShell';

/* ---------------- Invoice generator ---------------- */
type InvoiceState = {
  from: string; fromEmail: string; to: string; item: string; qty: string; rate: string; tax: string; notes: string;
};

const EMPTY_INVOICE: InvoiceState = {
  from: 'BuildexNow', fromEmail: 'buildexnow@gmail.com', to: '',
  item: 'Product design & development', qty: '1', rate: '0', tax: '0', notes: 'Payment due within 14 days.',
};

export function InvoiceGeneratorPage() {
  const [data, setData] = useState<InvoiceState>(EMPTY_INVOICE);
  const set = (key: keyof InvoiceState, value: string) => setData((prev) => ({ ...prev, [key]: value }));
  const subtotal = Math.max(0, Number(data.qty) || 0) * Math.max(0, Number(data.rate) || 0);
  const tax = (subtotal * (Math.max(0, Number(data.tax) || 0))) / 100;
  const money = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="INVOICE"
        description="Fill in the details and get a clean, print-ready invoice instantly. Nothing is uploaded and nothing is stored."
      />
      <section className="section">
        <div className="shell tool-layout">
          <form className="tool-form" onSubmit={(e: FormEvent) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="ig-from">From</label>
              <input id="ig-from" value={data.from} onChange={(e) => set('from', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="ig-email">Your email</label>
              <input id="ig-email" type="email" value={data.fromEmail} onChange={(e) => set('fromEmail', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="ig-to">Bill to</label>
              <input id="ig-to" value={data.to} onChange={(e) => set('to', e.target.value)} placeholder="Client or company name" />
            </div>
            <div className="field">
              <label htmlFor="ig-item">Item or service</label>
              <input id="ig-item" value={data.item} onChange={(e) => set('item', e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div className="field">
                <label htmlFor="ig-qty">Qty</label>
                <input id="ig-qty" type="number" min="0" value={data.qty} onChange={(e) => set('qty', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="ig-rate">Rate</label>
                <input id="ig-rate" type="number" min="0" value={data.rate} onChange={(e) => set('rate', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="ig-tax">Tax %</label>
                <input id="ig-tax" type="number" min="0" value={data.tax} onChange={(e) => set('tax', e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="ig-notes">Terms & notes</label>
              <textarea id="ig-notes" value={data.notes} onChange={(e) => set('notes', e.target.value)} />
            </div>
            <button className="btn btn--primary" type="button" onClick={() => window.print()}>
              <Download size={16} /> Print / save as PDF
            </button>
          </form>

          <div className="tool-preview">
            <h2>INVOICE</h2>
            <div className="invoice-grid">
              <div><h4>From</h4><p>{data.from || '—'}<br />{data.fromEmail}</p></div>
              <div><h4>Bill to</h4><p>{data.to || 'Client name'}</p></div>
            </div>
            <div style={{ marginTop: 22 }}>
              <h4>Item</h4>
              <p>{data.item || '—'}</p>
            </div>
            <div className="tool-total"><span>Total</span><span>{money(subtotal + tax)}</span></div>
            <p style={{ marginTop: 14, fontSize: 12, color: '#666' }}>Subtotal {money(subtotal)} · Tax ({data.tax}%) {money(tax)}</p>
            <div style={{ marginTop: 22 }}><h4>Terms & notes</h4><p>{data.notes}</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------------- SEO starter check ---------------- */
type Check = { label: string; pass: boolean; tip: string };

export function SeoCheckerPage() {
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [checks, setChecks] = useState<Check[] | null>(null);
  const [error, setError] = useState('');

  const run = (e: FormEvent) => {
    e.preventDefault();
    const value = url.trim();
    if (!/^https?:\/\/[^\s.]+\.[^\s]+/i.test(value)) {
      setError('Enter a full URL, including https://');
      setChecks(null);
      return;
    }
    setError('');
    setBusy(true);
    setChecks(null);
    window.setTimeout(() => {
      setChecks([
        { label: 'Uses HTTPS', pass: /^https:/i.test(value), tip: 'Serve every page over HTTPS.' },
        { label: 'Readable URL', pass: value.length < 90 && !/[?&]/.test(value), tip: 'Keep URLs short and free of unnecessary parameters.' },
        { label: 'Has a domain', pass: /\.[a-z]{2,}/i.test(value), tip: 'Use a clear, memorable domain.' },
        { label: 'No double slashes', pass: !/[^:]\/\//.test(value), tip: 'Normalise trailing and duplicate slashes.' },
        { label: 'Descriptive path', pass: value.replace(/^https?:\/\/[^/]+/i, '').replace(/\/$/, '').length > 2, tip: 'Give important pages a meaningful path.' },
      ]);
      setBusy(false);
    }, 1200);
  };

  const score = checks ? Math.round((checks.filter((c) => c.pass).length / checks.length) * 100) : 0;

  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="SEO Audit & AI Visibility"
        description="A quick, honest checklist for the fundamentals you control. This reviews the URL you enter — it is not a live crawl of the page."
      />
      <section className="section">
        <div className="shell tool-layout">
          <form className="tool-form" onSubmit={run}>
            <div className="field">
              <label htmlFor="seo-url">Website URL</label>
              <input id="seo-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" />
              {error && <span className="field-error">{error}</span>}
            </div>
            <button className="btn btn--primary" type="submit" disabled={busy}>
              {busy ? <><span className="tool-spin" /> Checking…</> : <><ScanSearch size={16} /> Run starter check</>}
            </button>
            {busy && <div className="tool-progress"><i /></div>}
            <p style={{ color: 'var(--text-faint)', fontSize: 12, margin: 0 }}>
              Checks the structure of the URL only. For a full audit of a site, get in touch.
            </p>
          </form>

          <div className="tool-preview" style={{ background: 'var(--surface-1)', color: 'var(--text)' }}>
            {!checks && !busy && (
              <div style={{ display: 'grid', placeItems: 'center', minHeight: 320, textAlign: 'center' }}>
                <div>
                  <ScanSearch size={34} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
                  <h2 style={{ fontSize: 22 }}>Ready when you are.</h2>
                  <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>Enter a URL to see the starter checklist.</p>
                </div>
              </div>
            )}
            {busy && (
              <div style={{ display: 'grid', placeItems: 'center', minHeight: 320 }}>
                <span className="tool-spin" style={{ width: 36, height: 36 }} />
              </div>
            )}
            {checks && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div className="score-ring" style={{ '--score': `${score}%` } as CSSProperties}><span>{score}</span></div>
                  <div>
                    <h2 style={{ fontSize: 24 }}>Starter checklist</h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: 13 }}>Based on the URL structure only — not the page content.</p>
                  </div>
                </div>
                <div className="audit-list">
                  {checks.map((check) => (
                    <div className={`audit-item ${check.pass ? 'pass' : ''}`} key={check.label}>
                      {check.pass ? <Check size={16} /> : <AlertCircle size={16} />}
                      <span><strong>{check.label}</strong> — {check.tip}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
