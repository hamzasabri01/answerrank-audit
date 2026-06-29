import ScrollReveal from "./ScrollReveal";

const steps = [
  ["01", "Define buyer-intent prompts", "We build a set of realistic prompts based on how prospective clients search for services like yours - by service type, location, and intent."],
  ["02", "Test multiple AI platforms", "We run the prompts across ChatGPT, Perplexity, Gemini, and Google AI-style answers where accessible - capturing structured, comparable results."],
  ["03", "Record and compare results", "We document mentions, absences, partial citations, repeated competitors, and sources - producing a clear picture of your current AI visibility."],
  ["04", "Deliver snapshot and action plan", "You receive a clear report showing what was found, where gaps exist, which competitors appeared, and what practical steps to consider in the next 30 days."],
];

export default function HowItWorks() {
  return (
    <section className="bg-surface" id="how" aria-labelledby="hiw-heading">
      <div className="section-inner">
        <ScrollReveal className="text-center">
          <span className="section-label">How it works</span>
          <h2 className="section-title" id="hiw-heading">Four steps. One clear snapshot.</h2>
          <p className="section-sub center">A structured process designed so any business owner can understand what was tested, what was found, and what to do next - no technical background required.</p>
        </ScrollReveal>
        <div className="steps" role="list">
          {steps.map(([num, title, copy]) => (
            <ScrollReveal className="step" key={num}><div className="step-num" aria-hidden="true">{num}</div><h3>{title}</h3><p>{copy}</p></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
