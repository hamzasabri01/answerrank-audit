import ScrollReveal from "./ScrollReveal";

const items = [
  ["Focused on AI-style answer visibility", "We test what AI tools actually say - not what ranks in traditional blue-link results. These are different surfaces with different signals."],
  ["Competitor mentions are shown explicitly", "We record which competitors appeared in which answers - giving you a clear picture of where you stand relative to firms clients may see first."],
  ["Prompts mirror real service intent", 'We use phrases like "work permit lawyer Toronto" - how clients actually ask - not broad keyword terms. This reveals gaps that general tools do not surface.'],
  ["Practical, honest recommendations", "Every report closes with actionable steps. We do not promise to manipulate AI systems or guarantee any rankings - we explain what we found and what you can address."],
  ["Transparent testing, no black-box claims", "The audit is a snapshot of observable patterns. We do not claim access to AI training or proprietary ranking mechanisms - we test what users actually see."],
  ["Structured, readable output", "The report is designed for a business owner or firm partner - not a technical analyst. Clear tables, clear findings, clear next steps."],
];

export default function Differentiation() {
  return (
    <section className="bg-surface" id="diff" aria-labelledby="diff-heading">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Why this is different</span>
          <h2 className="section-title" id="diff-heading">Not generic SEO. AI-specific visibility.</h2>
          <p className="section-sub">Traditional SEO tools track search rankings. This audit focuses on a different layer - what AI systems actually say about your firm when clients ask them directly.</p>
        </ScrollReveal>
        <ScrollReveal className="diff-grid">
          {items.map(([title, copy]) => (
            <div className="diff-item" key={title}>
              <div className="diff-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></div>
              <div className="diff-content"><h3>{title}</h3><p>{copy}</p></div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
