"use client";
import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
const SERVICE_OPTIONS = [
  "Computer Vision",
  "IoT & Wearable",
  "ML & DL",
  "NLP & LLM",
  "Generative AI",
  "Agentic AI",
  "Medical IT",
  "Training & Consultancy",
  "General",
];
const FIELD_STYLE = {
  background: "#edf4f7",
  border: "1px solid #d7e2e8",
  borderRadius: 12,
  padding: "14px 16px",
  fontSize: 14,
  color: "#172b3a",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};
const LABEL_STYLE = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#465d6e",
  marginBottom: 6,
};
function focusField(e) {
  e.target.style.borderColor = "#284f87";
  e.target.style.boxShadow = "0 0 0 3px rgba(51,86,149,0.12)";
}
function blurField(e) {
  e.target.style.borderColor = "#d7e2e8";
  e.target.style.boxShadow = "none";
}

export default function ContactForm({
  initialService = "",
  messagePlaceholder = "Tell us about your project or challenge...",
}) {
  const formId = useId();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const handleChange = (e) =>
    setForm((v) => ({ ...v, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const website = new FormData(e.currentTarget).get("website");
    setSending(true);
    setFeedback(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.error || "Unable to send your message. Please try again.",
        );
      setFeedback({
        success: true,
        message:
          "Your message has been submitted to our email service for info@scitisensefuturize.in. Thank you for getting in touch.",
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        service: initialService,
        message: "",
      });
    } catch (error) {
      setFeedback({
        success: false,
        message:
          error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-busy={sending}
    >
      <div hidden aria-hidden="true">
        <label htmlFor={formId + "-website"}>Leave this empty</label>
        <input
          id={formId + "-website"}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor={formId + "-name"} style={LABEL_STYLE}>
          Full Name *
        </label>
        <input
          id={formId + "-name"}
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          style={FIELD_STYLE}
          onFocus={focusField}
          onBlur={blurField}
        />
      </div>

      <div>
        <label htmlFor={formId + "-phone"} style={LABEL_STYLE}>
          Contact Number *
        </label>
        <input
          id={formId + "-phone"}
          name="phone"
          type="tel"
          required
          placeholder="+91 8500631655"
          value={form.phone}
          onChange={handleChange}
          style={FIELD_STYLE}
          onFocus={focusField}
          onBlur={blurField}
        />
      </div>

      <div>
        <label htmlFor={formId + "-email"} style={LABEL_STYLE}>
          Email Address *
        </label>
        <input
          id={formId + "-email"}
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={form.email}
          onChange={handleChange}
          style={FIELD_STYLE}
          onFocus={focusField}
          onBlur={blurField}
        />
      </div>

      <div>
        <label htmlFor={formId + "-service"} style={LABEL_STYLE}>
          Service Interest *
        </label>
        <select
          id={formId + "-service"}
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          style={{ ...FIELD_STYLE, appearance: "auto" }}
          onFocus={focusField}
          onBlur={blurField}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={formId + "-message"} style={LABEL_STYLE}>
          Message *
        </label>
        <textarea
          id={formId + "-message"}
          name="message"
          required
          rows={5}
          placeholder={messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          style={{ ...FIELD_STYLE, resize: "vertical" }}
          onFocus={focusField}
          onBlur={blurField}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary-light flex items-center justify-center gap-2 w-full"
        style={{ padding: "14px 0", fontSize: 14, opacity: sending ? 0.65 : 1 }}
      >
        {sending ? "Sending…" : "Send Message"}
        <ArrowRight size={15} strokeWidth={2.5} />
      </button>
      {feedback && (
        <p
          className="text-sm"
          role={feedback.success ? "status" : "alert"}
          style={{
            color: feedback.success ? "#245b47" : "#9b2828",
            lineHeight: 1.7,
          }}
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
}
