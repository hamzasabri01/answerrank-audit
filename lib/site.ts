export const site = {
  name: "AnswerRank Audit",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.answerrankaudit.com",
  contactEmail: process.env.CONTACT_EMAIL || "hamza@answerrankaudit.com",
  title: "AnswerRank Audit | AI Visibility Snapshots for Local Service Firms",
  description:
    "See whether AI search mentions your firm or your competitors. AnswerRank Audit tests AI-style answers and provides practical visibility recommendations.",
  shortDescription: "AI Visibility Snapshot for local service firms",
};

export const navItems = [
  { href: "#audit", label: "What we audit" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "About" },
] as const;

export const disclaimerText =
  "AnswerRank Audit does not guarantee AI recommendations, search rankings, client acquisition, or placement in any AI-generated answer. AI answers can vary by platform, wording, timing, location, personalization, and source availability. Our reports are visibility snapshots based on tested prompts and visible answer patterns only.";

export const noAffiliationText =
  "Not affiliated with OpenAI, Google, Perplexity, Gemini, or any AI or search provider. AnswerRank Audit is an independent audit service.";

export const businessTypes = [
  "Immigration lawyer",
  "Immigration consultant",
  "Law firm",
  "Local service business",
  "Other",
] as const;

export const pricingPlans = ["Starter Snapshot", "Full Visibility Report", "Monthly Monitoring"] as const;
