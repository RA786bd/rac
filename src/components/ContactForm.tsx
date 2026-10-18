"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/data/services";

type Props = { variant?: "contact" | "booking"; defaultService?: string };

export default function ContactForm({ variant = "contact", defaultService = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: variant }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-ice p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-ocean" />
        <h3 className="mt-4 text-2xl font-bold text-navy-900">Thank you!</h3>
        <p className="mt-2 text-mist">We have received your {variant === "booking" ? "service request" : "message"}. Our team will call you shortly.</p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-6">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Full name *</span>
        <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Phone *</span>
        <input name="phone" required type="tel" pattern="[0-9+\-\s]{10,16}" className="field" placeholder="01XXXXXXXXX" autoComplete="tel" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Email</span>
        <input name="email" type="email" className="field" placeholder="you@company.com" autoComplete="email" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">{variant === "booking" ? "Service needed *" : "Interested in"}</span>
        <select name="service" required={variant === "booking"} defaultValue={defaultService} className="field">
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </label>
      {variant === "booking" && (
        <>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-navy-800">Area / address *</span>
            <input name="address" required className="field" placeholder="e.g. Gulshan-2, Dhaka" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-navy-800">Preferred date</span>
            <input name="date" type="date" className="field" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-navy-800">Equipment type</span>
            <select name="equipment" className="field" defaultValue="">
              <option value="">Select</option>
              <option>Split AC</option>
              <option>Cassette / Ducted AC</option>
              <option>VRF / Central AC</option>
              <option>Cold Room / Freezer Room</option>
              <option>Commercial Refrigerator / Display</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-navy-800">No. of units</span>
            <input name="units" type="number" min={1} className="field" placeholder="1" />
          </label>
        </>
      )}
      {variant === "contact" && (
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Company</span>
          <input name="company" className="field" placeholder="Company / organisation (optional)" autoComplete="organization" />
        </label>
      )}
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">{variant === "booking" ? "Describe the problem" : "Message *"}</span>
        <textarea name="message" required={variant === "contact"} rows={5} className="field resize-y" placeholder={variant === "booking" ? "e.g. AC not cooling, water leaking from indoor unit…" : "Tell us about your project or requirement…"} />
      </label>
      {/* Honeypot field for bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="sm:col-span-2">
        {status === "error" && <p className="mb-3 rounded-lg bg-ember/10 px-4 py-2 text-sm text-ember">{error}</p>}
        <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto disabled:opacity-70">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {variant === "booking" ? "Submit Service Request" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
