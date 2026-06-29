import ScrollReveal from "./ScrollReveal";

const cards = [
  ["Your firm may be absent from AI answers", "AI-generated answers often surface a small set of firms. If your firm is not in that set, prospective clients may not encounter your name - regardless of your qualifications or reputation.", "problem-icon-red"],
  ["Competing firms may appear repeatedly", "The same competing firms often surface across multiple prompts and platforms. Repeated visibility builds familiarity and trust with potential clients before they take any action.", "problem-icon-amber"],
  ["AI answers vary by service intent", 'A search for "work permit lawyer Toronto" and "family sponsorship lawyer Toronto" may return completely different firms. Visibility gaps at the service level matter as much as overall brand awareness.', "problem-icon-purple"],
];

export default function ProblemSection() {
  return (
    <section className="bg-surface" id="problem" aria-labelledby="problem-heading">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">The problem</span>
          <h2 className="section-title" id="problem-heading">Potential clients may be asking AI before they reach your website</h2>
          <p className="section-sub">A growing number of people use AI tools and search engines to find local service recommendations. If competing firms appear more often in those answers, your firm may be less visible before a prospective client ever visits your website.</p>
        </ScrollReveal>
        <div className="problem-cards">
          {cards.map(([title, copy, tone]) => (
            <ScrollReveal className="problem-card" key={title}>
              <div className={`problem-icon ${tone}`} aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
              <h3>{title}</h3><p>{copy}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
