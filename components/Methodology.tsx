import ScrollReveal from "./ScrollReveal";

const points = [
  "We test fixed, buyer-intent prompts - the same phrases each time - so results are comparable and not cherry-picked.",
  "We compare your firm against visible competitors across multiple AI platforms and record what each platform returns.",
  "We record whether your firm is mentioned, absent, partially mentioned, or cited - and note the context of each mention.",
  "We identify repeated competitors and practical content or trust gaps that may explain visibility differences.",
  "We do not claim official ranking metrics, insider platform access, or guaranteed search placement. Our findings are based on observable, testable outputs only.",
];

const rows = [
  ["Platform tested", "ChatGPT / Perplexity / Gemini"],
  ["Firm mention status", "Mentioned / Absent / Partial"],
  ["Competitor names seen", "Recorded verbatim"],
  ["Source type cited", "Directory / Article / Website"],
  ["Evidence note", "Screenshot / quote"],
];

export default function Methodology() {
  return (
    <section className="bg-page" id="methodology" aria-labelledby="method-heading">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Methodology</span>
          <h2 className="section-title" id="method-heading">How we conduct the audit</h2>
          <p className="section-sub">Our process is transparent, reproducible, and honest about what it can and cannot measure.</p>
        </ScrollReveal>
        <ScrollReveal className="method-grid">
          <div className="method-points">
            {points.map((point) => <div className="method-point" key={point}><div className="method-dot" aria-hidden="true" /><p>{point}</p></div>)}
          </div>
          <div className="method-card">
            <div className="method-card-title">What we track per prompt</div>
            {rows.map(([label, value]) => <div className="method-row" key={label}><span className="method-row-label">{label}</span><span className="method-row-value">{value}</span></div>)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
