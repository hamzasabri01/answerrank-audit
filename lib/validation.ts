import { businessTypes, pricingPlans } from "./site";

export type BusinessType = (typeof businessTypes)[number];
export type PricingPlan = (typeof pricingPlans)[number];

export type SnapshotRequestInput = {
  fullName: string;
  email: string;
  firmName: string;
  website: string;
  city: string;
  businessType: string;
  message: string;
  consent: boolean;
  honeypot: string;
  selectedPlan?: string;
};

export type SnapshotValidationErrors = Partial<Record<keyof SnapshotRequestInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateSnapshotRequest(input: SnapshotRequestInput) {
  const errors: SnapshotValidationErrors = {};

  if (input.honeypot.trim()) {
    errors.honeypot = "Submission could not be processed.";
  }

  if (input.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }

  if (!emailPattern.test(input.email.trim())) {
    errors.email = "Enter a valid work email.";
  }

  if (!input.firmName.trim()) {
    errors.firmName = "Enter your firm or company name.";
  }

  if (!isValidUrl(input.website.trim())) {
    errors.website = "Enter a valid website URL starting with http:// or https://.";
  }

  if (!businessTypes.includes(input.businessType as BusinessType)) {
    errors.businessType = "Choose a business type.";
  }

  if (input.message.length > 1000) {
    errors.message = "Keep this under 1000 characters.";
  }

  if (!input.consent) {
    errors.consent = "Confirm that you understand this is a visibility snapshot.";
  }

  if (input.selectedPlan && !pricingPlans.includes(input.selectedPlan as PricingPlan)) {
    errors.selectedPlan = "Choose a valid plan.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
