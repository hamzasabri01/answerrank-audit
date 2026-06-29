import ScrollReveal from "./ScrollReveal";

const audits = [
  ["01", "AI prompt visibility", "We test buyer-intent prompts across multiple AI platforms and record whether your firm is mentioned, absent, or partially cited in each response."],
  ["02", "Competitor mentions", "We track which competitors appear in the same answers as your services - and how consistently they surface across different prompts and platforms."],
  ["03", "Service-specific visibility", "Visibility varies by service type. We test specific practice areas so you understand where gaps are largest and most actionable for your firm."],
  ["04", "Source and citation patterns", "AI answers often cite specific sources. We identify which types of content and websites appear in AI-generated answers for your service area."],
  ["05", "Website content gaps", "We identify service pages, topical coverage, and structural gaps that may reduce the likelihood of your firm appearing in AI-generated answers."],
  ["06", "Trust and authority signals", "We review visible trust signals - directory listings, mentions, and publications - that may support or limit your firm's presence in AI-sourced answers."],
  ["07", "30-day action plan", "The audit closes with a prioritised list of practical actions - content to create, gaps to address, and signals to strengthen over the next 30 days."],
];

export default function AuditCards() {
  return (
    <section className="bg-page" id="audit" aria-labelledby="audit-heading">
      <div className="section-inner">
        <ScrollReveal className="text-center">
          <span className="section-label">What we audit</span>
          <h2 className="section-title" id="audit-heading">Seven dimensions of AI visibility</h2>
          <p className="section-sub center">Each audit examines specific visibility signals - not vanity metrics. You see exactly where your firm stands and what to address first.</p>
        </ScrollReveal>
        <div className="audit-grid">
          {audits.map(([num, title, copy]) => (
            <ScrollReveal className="audit-card" key={num}><div className="audit-num">{num}</div><h3>{title}</h3><p>{copy}</p></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
