"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setMessage("Access Key is missing. Please check .env.local");
      setLoading(false);
      console.error("Web3Forms Access Key is missing.");
      return;
    }

    const data = {
      access_key: accessKey,
      subject: "New Enquiry - Auren Interiors",
      from_name: "Auren Interiors Website",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project_type: formData.get("project_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Web3Forms Response:", result);

      if (response.ok && result.success) {
        setSuccess(true);
        setMessage("Thank you! Your enquiry has been submitted successfully.");
        form.reset();
      } else {
        setSuccess(false);
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setSuccess(false);
      setMessage("Unable to submit. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-2xl space-y-5 text-left"
    >
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full border border-white/20 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#d6c1a1]"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full border border-white/20 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#d6c1a1]"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full border border-white/20 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#d6c1a1]"
      />

      <select
        name="project_type"
        required
        defaultValue=""
        className="w-full border border-white/20 bg-[#292a25] px-5 py-4 text-white outline-none focus:border-[#d6c1a1]"
      >
        <option value="" disabled>
          Select Project Type
        </option>
        <option value="Residential Design">Residential Design</option>
        <option value="Commercial Design">Commercial Design</option>
        <option value="Space Planning">Space Planning</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your project..."
        required
        className="w-full border border-white/20 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#d6c1a1]"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#d6c1a1] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#292a25] transition hover:bg-white disabled:opacity-50"
      >
        {loading ? "SENDING..." : "SUBMIT ENQUIRY →"}
      </button>

      {message && (
        <p
          aria-live="polite"
          className={`text-center text-sm ${
            success ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
