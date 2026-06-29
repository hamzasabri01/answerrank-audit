import ScrollReveal from "./ScrollReveal";

const rows = [
  ['"best immigration lawyer in Toronto"', "ChatGPT", "Not mentioned", "Firm A, Firm B", false],
  ['"work permit lawyer Toronto"', "Perplexity", "Mentioned", "Firm C", true],
  ['"family sponsorship lawyer Toronto"', "ChatGPT", "Not mentioned", "Firm A, Firm C", false],
  ['"PR application help Toronto"', "Gemini", "Not mentioned", "Firm B", false],
  ['"immigration consultant Toronto"', "Perplexity", "Mentioned", "Firm A", true],
] as const;

export default function SnapshotPreview() {
  return (
    <section className="bg-page" id="snapshot" aria-labelledby="snapshot-heading">
      <div className="section-inner">
        <ScrollReveal className="text-center">
          <span className="section-label">Sample report</span>
          <h2 className="section-title" id="snapshot-heading">This is what you receive</h2>
          <p className="section-sub center">A structured, readable report - not a spreadsheet or raw data export. The sample below uses entirely generic placeholder data.</p>
        </ScrollReveal>
        <ScrollReveal className="snapshot-card">
          <div className="snap-header">
            <div><div className="snap-title">AI Visibility Snapshot - Sample Firm (Generic Data)</div><div className="snap-subtitle">Toronto, Ontario · Immigration Law · Tested prompts: 10</div></div>
            <div className="snap-badges"><span className="badge badge-red">2 of 10 mentioned</span><span className="badge badge-blue">3 gaps identified</span></div>
          </div>
          <div className="snap-body">
            <div className="snap-metrics">
              <div className="snap-metric"><div className="snap-metric-label">Total prompts tested</div><div className="snap-metric-val accent">10</div></div>
              <div className="snap-metric"><div className="snap-metric-label">Firm mentioned</div><div className="snap-metric-val">2</div></div>
              <div className="snap-metric"><div className="snap-metric-label">Repeated competitors</div><div className="snap-metric-val">3 firms</div></div>
              <div className="snap-metric"><div className="snap-metric-label">Platforms tested</div><div className="snap-metric-val">3</div></div>
            </div>
            <div className="snap-table-wrap">
              <table className="snap-table" aria-label="Sample prompt-by-prompt visibility results - generic data only">
                <thead><tr><th scope="col">Prompt (sample)</th><th scope="col">Platform</th><th scope="col">Firm result</th><th scope="col">Competitors seen</th></tr></thead>
                <tbody>
                  {rows.map(([prompt, platform, result, competitors, positive]) => (
                    <tr key={prompt}><td>{prompt}</td><td>{platform}</td><td><span className={`result-tag ${positive ? "result-yes" : "result-no"}`}>{result}</span></td><td>{competitors}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="snap-opportunity"><strong>Sample finding:</strong> Improve content signals for PR, work permit, and family sponsorship services. Firm A appears in 4 of 5 ChatGPT responses - gap analysis available in full report.</div>
            <p className="snap-sample-note">All data above is illustrative. No real firms are referenced. Your actual report will contain your firm&apos;s specific prompt results.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
