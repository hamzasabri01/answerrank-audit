import RequestButton from "./RequestButton";

const promptRows = [
  {
    prompt: "best immigration lawyer in Toronto",
    platform: "ChatGPT",
    status: "Not mentioned",
    tone: "negative",
    insight: "Broad discovery gap",
  },
  {
    prompt: "work permit lawyer Toronto",
    platform: "Perplexity",
    status: "Mentioned",
    tone: "positive",
    insight: "Service-specific visibility",
  },
  {
    prompt: "family sponsorship lawyer Toronto",
    platform: "ChatGPT",
    status: "Not mentioned",
    tone: "negative",
    insight: "Content signal gap",
  },
] as const;

export default function Hero() {
  return (
    <section className="hero bg-page" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>
      <p className="hero-eyebrow" aria-hidden="true"><span className="hero-eyebrow-dot" />AI Visibility Snapshot</p>
      <h1 id="hero-heading">Find out whether AI search <em>recommends your firm</em> - or your competitors.</h1>
      <p className="hero-sub">AnswerRank Audit tests how ChatGPT, Perplexity, Gemini, and Google AI-style answers mention your firm, your competitors, and your services - then gives you a practical visibility action plan.</p>
      <div className="hero-ctas">
        <RequestButton className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          Request a sample snapshot
        </RequestButton>
        <a href="#how" className="btn-secondary">See how it works</a>
      </div>
      <p className="hero-trust">No ranking guarantees. No fake metrics. A clear visibility snapshot based on tested prompts.</p>
      <section className="audit-preview-section" aria-labelledby="sample-report-heading">
        <article className="audit-shell" aria-label="AI Visibility Snapshot sample report preview">
          <header className="audit-shell-header">
            <div className="audit-heading-block">
              <p className="audit-label">Prompt-based visibility check</p>
              <h2 id="sample-report-heading">AI Visibility Snapshot</h2>
              <p className="audit-firm">Sample Firm (Generic)</p>
              <p className="audit-description">See how your firm appears in AI-generated answers across tested prompts and platforms.</p>
            </div>
            <div className="audit-badge-stack" aria-label="Sample report metadata">
              <span className="audit-badge">Generic sample data</span>
              <span className="audit-preview-label">Sample report preview</span>
            </div>
          </header>

          <div className="audit-summary-row">
            <section className="audit-kpi-card" aria-labelledby="visibility-score-heading">
              <div className="audit-card-topline">
                <span className="audit-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V7l8-4 8 4v13" />
                    <path d="M9 20v-6h6v6" />
                    <path d="M8 9h.01M12 9h.01M16 9h.01" />
                  </svg>
                </span>
                <span className="audit-mini-label">Visibility score</span>
              </div>
              <h3 id="visibility-score-heading">Firm mentioned</h3>
              <div className="audit-score">2 / 10</div>
              <p>20% prompt coverage</p>
              <div className="audit-progress-wrap">
                <div
                  className="audit-progress"
                  role="progressbar"
                  aria-label="2 of 10 checks mentioned"
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-valuenow={2}
                >
                  <span />
                </div>
                <span>2 of 10 checks mentioned</span>
              </div>
            </section>

            <section className="audit-kpi-card" aria-labelledby="competitor-pressure-heading">
              <div className="audit-card-topline">
                <span className="audit-card-icon audit-card-icon-green" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="9.5" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.7" />
                    <path d="M16 3.3a4 4 0 0 1 0 7.4" />
                  </svg>
                </span>
                <span className="audit-mini-label">Competitor pressure</span>
              </div>
              <h3 id="competitor-pressure-heading">Repeated competitors</h3>
              <div className="audit-score">3</div>
              <p>Firms appeared across tested prompts</p>
              <div className="audit-context-line">Competitor mentions are tracked across prompts and platforms.</div>
            </section>

            <section className="audit-opportunity-card" aria-labelledby="main-opportunity-heading">
              <div className="audit-opportunity-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v4" />
                  <path d="M12 17v4" />
                  <path d="M3 12h4" />
                  <path d="M17 12h4" />
                  <path d="m5.6 5.6 2.8 2.8" />
                  <path d="m15.6 15.6 2.8 2.8" />
                  <path d="m18.4 5.6-2.8 2.8" />
                  <path d="m8.4 15.6-2.8 2.8" />
                </svg>
              </div>
              <p className="audit-opportunity-label">Sample opportunity</p>
              <h3 id="main-opportunity-heading">Strengthen content signals around PR, work permits, and family sponsorship pages.</h3>
              <span className="audit-action-chip">Included in 30-day action plan</span>
            </section>
          </div>

          <div className="audit-lower-grid">
            <section className="audit-table-panel" aria-labelledby="prompt-results-heading">
              <div className="audit-panel-header">
                <h3 id="prompt-results-heading">Prompt Results</h3>
                <span>Generic audit log</span>
              </div>
              <div className="audit-table-scroll">
                <table className="audit-results-table" aria-label="Sample prompt result audit log">
                  <thead>
                    <tr>
                      <th scope="col">Prompt</th>
                      <th scope="col">Platform</th>
                      <th scope="col">Result</th>
                      <th scope="col">Insight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {promptRows.map((row) => (
                      <tr key={row.prompt}>
                        <td>
                          <span className="audit-prompt-cell">
                            <span className={`audit-row-marker audit-row-marker-${row.tone}`} aria-hidden="true" />
                            {row.prompt}
                          </span>
                        </td>
                        <td><span className="audit-platform-pill">{row.platform}</span></td>
                        <td><span className={`audit-status-pill audit-status-${row.tone}`}>{row.status}</span></td>
                        <td>{row.insight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="audit-explainer-panel" aria-labelledby="sample-matters-heading">
              <p className="audit-label">Report context</p>
              <h3 id="sample-matters-heading">Why this sample matters</h3>
              <p>This generic preview shows how AnswerRank Audit records prompt visibility, competitor mentions, and visibility gaps.</p>
              <ul>
                <li>Your tested prompts</li>
                <li>Competitor mentions</li>
                <li>Visibility gaps</li>
                <li>Actionable recommendations</li>
              </ul>
            </aside>
          </div>

          <p className="audit-sample-note">Generic sample data only. Actual reports include your firm&apos;s tested prompts, competitor mentions, and visibility gaps.</p>
        </article>
      </section>
    </section>
  );
}
