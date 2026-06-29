const items = [
  "Prompt-based audit methodology",
  "Competitor mention tracking",
  "Service-specific visibility analysis",
  "Clear action plan included",
  "No guaranteed ranking claims",
];

export default function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Service attributes">
      <div className="trust-inner">
        {items.map((item) => (
          <div className="trust-item" key={item}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
