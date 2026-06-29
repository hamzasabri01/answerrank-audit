"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type InputHTMLAttributes } from "react";
import { businessTypes, site } from "@/lib/site";
import { buildMailtoUrl } from "@/lib/utils";
import { validateSnapshotRequest, type SnapshotRequestInput, type SnapshotValidationErrors } from "@/lib/validation";

const emptyForm: SnapshotRequestInput = {
  fullName: "",
  email: "",
  firmName: "",
  website: "",
  city: "",
  businessType: "",
  message: "",
  consent: false,
  honeypot: "",
  selectedPlan: "",
};

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<SnapshotRequestInput>(emptyForm);
  const [errors, setErrors] = useState<SnapshotValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function openForm(event: Event) {
      const detail = (event as CustomEvent<{ plan?: string }>).detail;
      setForm((current) => ({ ...current, selectedPlan: detail?.plan || "" }));
      setErrors({});
      setStatus("idle");
      setMessage("");
      setOpen(true);
    }
    window.addEventListener("open-snapshot-form", openForm);
    return () => window.removeEventListener("open-snapshot-form", openForm);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const target = event.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setForm((current) => ({ ...current, [target.name]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateSnapshotRequest(form);
    setErrors(result.errors);
    if (!result.isValid) return;
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/snapshot-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok?: boolean; fallback?: boolean; message?: string; errors?: SnapshotValidationErrors };
      if (response.ok && data.ok) {
        setStatus("success");
        setMessage("Thanks. Your request has been received.");
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        setStatus("error");
        setMessage("Please review the highlighted fields.");
        return;
      }
      window.location.href = buildMailtoUrl(form);
      setStatus("success");
      setMessage(data.message || "Email delivery is not configured yet, so we opened a prepared email for you.");
    } catch {
      window.location.href = buildMailtoUrl(form);
      setStatus("success");
      setMessage("We opened a prepared email fallback because direct submission is not configured.");
    }
  }

  if (!open) return null;

  const fieldProps = (name: keyof SnapshotRequestInput) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="snapshot-form-title">
        <div className="modal-header">
          <div>
            <div className="modal-kicker">Request snapshot</div>
            <h2 className="modal-title" id="snapshot-form-title">Request a sample visibility snapshot</h2>
            <p className="modal-sub">Share only what is needed to scope the audit. If direct delivery is not configured, this form opens a prefilled email to {site.contactEmail}.</p>
          </div>
          <button ref={closeRef} className="modal-close" type="button" aria-label="Close request form" onClick={() => setOpen(false)}>×</button>
        </div>
        <form className="snapshot-form" onSubmit={onSubmit} noValidate>
          {status !== "idle" && message ? <div className={`form-status ${status === "success" ? "success" : "error"}`} role="status">{message}</div> : null}
          <div className="hidden-field" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="honeypot" value={form.honeypot} onChange={updateField} tabIndex={-1} autoComplete="off" />
          </div>
          <div className="form-grid">
            <Field label="Full name" name="fullName" value={form.fullName} onChange={updateField} error={errors.fullName} props={fieldProps("fullName")} />
            <Field label="Work email" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} props={fieldProps("email")} />
            <Field label="Firm / company name" name="firmName" value={form.firmName} onChange={updateField} error={errors.firmName} props={fieldProps("firmName")} />
            <Field label="Website URL" name="website" type="url" value={form.website} onChange={updateField} error={errors.website} props={fieldProps("website")} placeholder="https://example.com" />
            <Field label="City / market" name="city" value={form.city} onChange={updateField} error={errors.city} props={fieldProps("city")} placeholder="Toronto, Canada" />
            <div className="form-field">
              <label htmlFor="businessType">Business type</label>
              <select id="businessType" name="businessType" value={form.businessType} onChange={updateField} {...fieldProps("businessType")}>
                <option value="">Choose one</option>
                {businessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
              {errors.businessType ? <p className="field-error" id="businessType-error">{errors.businessType}</p> : null}
            </div>
            <Field label="Selected plan" name="selectedPlan" value={form.selectedPlan || ""} onChange={updateField} error={errors.selectedPlan} props={fieldProps("selectedPlan")} />
            <div className="form-field full">
              <label htmlFor="message">What would you like audited?</label>
              <textarea id="message" name="message" value={form.message} onChange={updateField} maxLength={1000} {...fieldProps("message")} />
              {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}
            </div>
          </div>
          <div className="checkbox-row">
            <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={updateField} {...fieldProps("consent")} />
            <div><label className="checkbox-label" htmlFor="consent">I understand this is a visibility snapshot and does not guarantee rankings or AI recommendations.</label>{errors.consent ? <p className="field-error" id="consent-error">{errors.consent}</p> : null}</div>
          </div>
          <div className="form-actions">
            <p className="form-note">Mailto fallback is always available. No unnecessary personal data is collected.</p>
            <button className="btn-primary" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Preparing..." : "Submit request"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text", placeholder, props }: { label: string; name: keyof SnapshotRequestInput; value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; error?: string; type?: string; placeholder?: string; props: InputHTMLAttributes<HTMLInputElement> }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} {...props} />
      {error ? <p className="field-error" id={`${name}-error`}>{error}</p> : null}
    </div>
  );
}
