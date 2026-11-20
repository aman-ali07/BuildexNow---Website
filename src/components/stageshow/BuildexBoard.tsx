import { Bar, Stage, Text, type Act } from './kit'
import { Window } from './kit/window'
import './buildex-board.css'

// BuildexNow — a studio's client portal. One idea: a project moves from
// "In review" to "Live" on a single fixed-width status pill, and the launch
// health card straddling the window's edge carries the payoff. Real words only
// where the story needs them; the rest is placeholder at real line heights.
//
// Beats: hold the draft, publish (pill changes in place, satellite lights up),
// hold the result, then a transition-free snap back to the draft so the loop
// restarts without animating data backwards in view. ~10.2s per loop.
// The poster is the result, so a still tells the story on its own.

type S = { live: boolean }
const initial: S = { live: false }
const POSTER: S = { live: true }

async function script(a: Act<S>) {
  await a.wait(2600)
  a.mark('publish')
  await a.set({ live: true })
  await a.wait(5200)
  // No visible cause is needed for an instant cut at a loop seam; snap keeps
  // transitions off for the patch so the score never appears to rewind.
  await a.snap({ live: false })
  await a.wait(2400)
}

const NAV = ['Overview', 'Projects', 'Activity', 'Settings']
const BARS = [38, 52, 45, 63, 58, 76, 70, 92]

export interface BuildexBoardProps {
  className?: string
  /** Force the 358px phone-column design instead of relying on container width. */
  compact?: boolean
  /** Show the settled poster only (no loop). */
  still?: boolean
}

export default function BuildexBoard({ className, compact: forceCompact, still }: BuildexBoardProps) {
  return (
    <div
      className={`bb-root${className ? ` ${className}` : ''}`}
      style={forceCompact ? { maxWidth: 358 } : undefined}
    >
      <Stage
        width={760}
        height={440}
        initial={initial}
        poster={POSTER}
        script={still ? undefined : script}
        theme="dark"
        className="bb"
        compact={{ below: 420, width: 358, height: 300 }}
      >
        {(s, _rect, layout) => (
          <>
            <Window url="app.buildexnow.com/northstar" className="bb-window">
              <aside className="bb-side">
                <div className="bb-side-mark">B</div>
                {NAV.map((label, i) => (
                  <div className="bb-nav" key={label} data-on={i === 1 || undefined}>
                    <Bar w={12} h={12} r={4} tone={i === 1 ? 5 : 3} />
                    {i === 1
                      ? <Text className="bb-nav-label">{label}</Text>
                      : <Bar className="bb-nav-bar" w={58} h={6} tone={3} />}
                  </div>
                ))}
                <div className="bb-side-foot">
                  <Bar w={16} h={16} r={9} tone={2} />
                </div>
              </aside>

              <div className="bb-body">
                <header className="bb-head">
                  <div>
                    <div className="bb-crumb">Projects / Northstar</div>
                    <div className="bb-title">Northstar</div>
                  </div>
                  <div
                    className="bb-status"
                    data-live={s.live || undefined}
                    aria-label={s.live ? 'Live' : 'In review'}
                  >
                    <span className="bb-status-dot" />
                    {/* Both labels stay mounted and crossfade: the status changes
                        in place instead of one span popping out and another in. */}
                    <span className="bb-status-labels">
                      <span className="bb-status-label bb-status-label--draft">In review</span>
                      <span className="bb-status-label bb-status-label--live">Live</span>
                    </span>
                  </div>
                </header>

                <div className="bb-preview">
                  <div className="bb-preview-bar">
                    <span className="bb-preview-url">northstar.finance</span>
                    <Bar w={44} h={6} tone={2} />
                  </div>
                  <div className="bb-preview-page">
                    <div className="bb-preview-nav">
                      <Bar w={58} h={9} r={3} tone={4} />
                      <Bar w={34} h={6} tone={2} />
                      <Bar w={26} h={6} tone={2} />
                    </div>
                    <div className="bb-preview-hero">
                      <div className="bb-preview-h">Money, made clear.</div>
                      <div className="bb-preview-lines">
                        <Bar w={206} h={7} tone={3} />
                        <Bar w={148} h={7} tone={3} />
                      </div>
                      <div className="bb-preview-cta">Open an account</div>
                    </div>
                  </div>
                </div>

                {layout === 'wide' && (
                  <div className="bb-metrics">
                    {[
                      ['Status', 'Ready'],
                      ['Reviews', 'Done'],
                      ['Handoff', 'Next'],
                    ].map(([label, value]) => (
                      <div className="bb-metric" key={label}>
                        <div className="bb-metric-label">{label}</div>
                        <div className="bb-metric-value">{value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Window>

            <div className="bb-satellite" data-live={s.live || undefined}>
              <div className="bb-sat-top">
                <span>Launch health</span>
                <span className="bb-sat-dot" />
              </div>
              <div className="bb-sat-number">Ready</div>
              <div className="bb-sat-bars">
                {BARS.map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </>
        )}
      </Stage>
    </div>
  )
}
