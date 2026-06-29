"use client";

import { useState } from "react";

const faqs = [
  ["Can you guarantee that ChatGPT will recommend my firm?", "No. We do not guarantee AI recommendations or rankings. We analyse visible answer patterns and provide practical visibility recommendations based on what we observe during testing."],
  ["Which platforms do you test?", "We test ChatGPT, Perplexity, Gemini, Google Search, and Google AI-style answers where available. Platform access may vary depending on regional settings and current platform capabilities."],
  ["Is this the same as SEO?", "It overlaps with SEO in some areas, but the focus is specifically on AI-style answer visibility, competitor mentions in AI answers, and service-intent prompts. Traditional SEO tools track search rankings; this audit tracks what AI tools actually say when your clients ask them questions."],
  ["Is this suitable for immigration firms?", "Yes. The first audit format is designed specifically for immigration lawyers and immigration consultants in Canada. The process can also be adapted for other local service businesses - contact us to discuss your situation."],
  ["What exactly do I receive?", "A structured report showing which prompts were tested, whether your firm appeared in each result, which competitors appeared and how often, visibility gaps by service type, evidence notes, and a 30-day action plan with practical recommendations. The depth depends on the report tier you select."],
  ["Do AI answers change over time?", "Yes. AI answers can vary by prompt wording, timing, location, personalisation settings, available sources, and platform updates. That is why we treat the audit as a visibility snapshot at a point in time - and why monthly monitoring provides ongoing tracking of how your visibility changes."],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="bg-surface" id="faq" aria-labelledby="faq-heading">
      <div className="section-inner" style={{ maxWidth: 700 }}>
        <div className="reveal visible text-center"><span className="section-label">FAQ</span><h2 className="section-title" id="faq-heading">Common questions</h2></div>
        <div className="faq-list reveal visible">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const id = `faq-${index + 1}`;
            return (
              <div className="faq-item" key={question}>
                <button className="faq-btn" type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  {question}<span className="faq-chevron" aria-hidden="true">⌄</span>
                </button>
                <div className={`faq-body${isOpen ? " open" : ""}`} id={id} role="region" aria-label={`Answer to ${question}`}>
                  <div className="faq-body-inner">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
