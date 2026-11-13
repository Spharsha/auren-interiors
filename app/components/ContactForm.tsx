"use client";

import { useState, type FormEvent } from "react";

const projectTypes = [
  "Full Home Interiors",
  "Modular Kitchen & Wardrobes",
  "Living or Bedroom Design",
  "Vastu-friendly Space Planning",
  "Commercial Space",
  "Other",
];

function classify(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
  const digits = v.replace(/[\s\-()+]/g, "");
  if (/^(91)?[6-9]\d{9}$/.test(digits)) return "phone";
  return null;
}

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "");
    const kind = classify(contact);

    if (!kind) {
      setError(
        "Please enter a valid email address or a 10-digit mobile number.",
      );
      return;
    }

    setLoading(true);

    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "New Enquiry - Auren Interiors (Demo)",
      name: formData.get("name"),
      contact,
      project_type: formData.get("project_type"),
      message: formData.get("message"),
    };
    if (kind === "email") payload.email = contact.trim();
    if (kind === "phone") payload.phone = contact.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thank you! We have received your enquiry and will contact you soon.",
        );
        form.reset();
      } else {
        setError(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full border border-walnut/20 bg-white px-4 py-3.5 text-base text-espresso outline-none transition placeholder:text-espresso/40 focus:border-brass focus:ring-2 focus:ring-brass/20";
  const labelClass = "mb-2 block text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact" className={labelClass}>
          Email or Phone Number
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          placeholder="Email address or 10-digit mobile number"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="project_type" className={labelClass}>
          Project Type
        </label>
        <select
          id="project_type"
          name="project_type"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your home, rooms and budget"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-walnut px-8 py-4 text-xs tracking-[0.2em] text-linen transition hover:bg-brass disabled:opacity-50"
      >
        {loading ? "SENDING..." : "SEND ENQUIRY"}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      {status && (
        <p role="status" className="text-sm text-brass">
          {status}
        </p>
      )}
    </form>
  );
}
