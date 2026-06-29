import { disclaimerText } from "@/lib/site";

export default function Disclaimer() {
  return (
    <section className="disclaimer-bg" id="disclaimer" aria-label="Legal disclaimer">
      <div className="disclaimer-inner">
        <p><strong>Disclaimer:</strong> {disclaimerText}</p>
      </div>
    </section>
  );
}
