import { site } from "./site";
import type { SnapshotRequestInput } from "./validation";

export function buildMailtoUrl(input: SnapshotRequestInput) {
  const subject = input.selectedPlan
    ? `${input.selectedPlan} - Request`
    : "Sample Snapshot Request";

  const body = [
    "AnswerRank Audit snapshot request",
    "",
    `Selected plan: ${input.selectedPlan || "Sample Snapshot"}`,
    `Full name: ${input.fullName}`,
    `Work email: ${input.email}`,
    `Firm / company: ${input.firmName}`,
    `Website: ${input.website || "Not provided"}`,
    `City / market: ${input.city || "Not provided"}`,
    `Business type: ${input.businessType}`,
    "",
    "What should be audited?",
    input.message || "Not provided",
    "",
    "Consent confirmed: I understand this is a visibility snapshot and does not guarantee rankings or AI recommendations.",
  ].join("\n");

  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
