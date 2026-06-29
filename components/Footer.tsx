import { navItems, noAffiliationText, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Answer<span>Rank</span> Audit</div>
          <div className="footer-sub">{site.shortDescription}</div>
          <div className="footer-email"><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="#methodology">Methodology</a>
          <a href="#disclaimer">Disclaimer</a>
        </nav>
        <div className="footer-note">{noAffiliationText}</div>
      </div>
    </footer>
  );
}
