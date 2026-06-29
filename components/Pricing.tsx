import RequestButton from "./RequestButton";
import ScrollReveal from "./ScrollReveal";

const plans = [
  { label: "Starter", name: "Starter Snapshot", price: "$99", desc: "A quick read on your AI visibility - useful as a first look before committing to a deeper audit.", features: ["5 buyer-intent prompts tested", "2 platforms (ChatGPT + Perplexity)", "Competitor mentions recorded", "Short visibility summary", "Practical action notes"], cta: "Request Starter Snapshot", featured: false },
  { label: "Most comprehensive", name: "Full Visibility Report", price: "$199", desc: "The complete picture - every service, every platform, with evidence, competitor analysis, and a structured action plan.", features: ["20+ buyer-intent prompts tested", "Multiple platforms tested", "Competitor mention patterns", "Screenshots and evidence notes", "Service-specific findings", "30-day action plan"], cta: "Request Full Report", featured: true },
  { label: "Ongoing", name: "Monthly Monitoring", price: "$149", suffix: "/mo", desc: "Recurring checks to track changes in AI visibility over time and monitor competitor patterns month to month.", features: ["Repeated prompt checks monthly", "Visibility change tracking", "Competitor tracking", "Monthly summary report", "Email support for report questions"], cta: "Start Monthly Monitoring", featured: false },
];

export default function Pricing() {
  return (
    <section className="bg-page" id="pricing" aria-labelledby="pricing-heading">
      <div className="section-inner">
        <ScrollReveal className="text-center">
          <span className="section-label">Pricing</span>
          <h2 className="section-title" id="pricing-heading">Simple, transparent pricing</h2>
          <p className="section-sub center">Three options depending on the depth of analysis you need. All prices in CAD unless otherwise stated.</p>
        </ScrollReveal>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <ScrollReveal className={`pricing-card${plan.featured ? " featured" : ""}`} key={plan.name}>
              <div className={`pricing-label${plan.featured ? " pop" : ""}`}>{plan.label}</div>
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price"><sup>$</sup>{plan.price.replace("$", "")}<span>{plan.suffix}</span></div>
              <div className="pricing-desc">{plan.desc}</div>
              <hr className="pricing-divider" aria-hidden="true" />
              <ul className="pricing-features" aria-label={`${plan.name} features`}>
                {plan.features.map((feature) => <li key={feature}><span className="feat-check" aria-hidden="true">✓</span>{feature}</li>)}
              </ul>
              <RequestButton plan={plan.name} className={`pricing-cta ${plan.featured ? "solid" : "outline"}`}>{plan.cta}</RequestButton>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal><p className="pricing-note">Introductory pricing while the service is being validated. Prices are subject to change with notice.</p></ScrollReveal>
      </div>
    </section>
  );
}
