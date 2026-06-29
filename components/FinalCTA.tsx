import { site } from "@/lib/site";
import RequestButton from "./RequestButton";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="cta-bg bg-page" id="contact" aria-labelledby="cta-heading">
      <div className="section-inner">
        <ScrollReveal className="cta-inner">
          <h2 id="cta-heading">Want to know what AI search says about your firm?</h2>
          <p>Request a sample snapshot and see which prompts mention your firm, which competitors appear, and where visibility gaps may exist.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 0 }}>
            <RequestButton className="btn-primary">Request a sample snapshot</RequestButton>
          </div>
          <p className="cta-email">Or reach us directly at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
        </ScrollReveal>
      </div>
    </section>
  );
}
