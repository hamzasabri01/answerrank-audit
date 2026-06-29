import { site } from "@/lib/site";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="bg-surface" id="about" aria-labelledby="about-heading">
      <div className="section-inner" style={{ maxWidth: 820 }}>
        <ScrollReveal>
          <span className="section-label">About</span>
          <h2 className="section-title" id="about-heading">About AnswerRank Audit</h2>
        </ScrollReveal>
        <ScrollReveal className="about-card">
          <div className="about-accent" aria-hidden="true" />
          <div className="about-text">
            <p className="about-body">AnswerRank Audit is run by Hamza Sabri to help local service businesses understand how AI-style search answers mention their firm, their competitors, and their services. The service focuses on transparent prompt testing, competitor visibility patterns, and practical marketing recommendations - without ranking guarantees, fake metrics, or exaggerated claims.</p>
            <p className="about-contact">Questions? Reach out at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
