"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, FlaskConical, ArrowRight } from "lucide-react";
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
export default function Contact() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const handleChange = (e) => setForm((v) => ({ ...v, [e.target.name]: e.target.value }));
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sending) return;
        const website = new FormData(e.currentTarget).get("website");
        setSending(true);
        setFeedback(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, website }),
            });
            const result = await response.json();
            if (!response.ok || !result.success) throw new Error(result.error || "Unable to send your message. Please try again.");
            setFeedback({ success: true, message: "Your message has been submitted to our email service for info@scitisensefuturize.in. Thank you for getting in touch." });
            setForm({ name: "", phone: "", email: "", service: "", message: "" });
        } catch (error) {
            setFeedback({ success: false, message: error.message || "Unable to send your message. Please try again." });
        } finally { setSending(false); }
    };
    return (<>
      <main className="relative" style={{ backgroundColor: "#f6f9fb" }}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="site-page-hero relative text-center overflow-hidden grid-bg-light" style={{
            paddingTop: 160,
            paddingBottom: 80,
            background: "linear-gradient(180deg, #edf4f7 0%, #f6f9fb 60%, #ffffff 100%)",
        }}>
          <div className="beam" style={{ left: "20%", top: 0 }} aria-hidden="true"/>
          <div className="beam beam-delay-1" style={{ left: "50%", top: 0 }} aria-hidden="true"/>
          <div className="beam beam-delay-2" style={{ left: "80%", top: 0 }} aria-hidden="true"/>

          <div className="container px-5 md:px-8" style={{ position: "relative", zIndex: 1 }}>
            <span className="tag-pill-light" style={{ marginBottom: 20, display: "inline-flex" }}>
              Contact Us
            </span>
            <h1 className="font-bold" style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#172b3a",
            lineHeight: 1.08,
            marginBottom: 20,
        }}>
              Start a{" "}
              <span className="text-gradient-teal">Research Conversation</span>
            </h1>
            <p style={{
            fontSize: "clamp(0.95rem, 1.7vw, 1.05rem)",
            color: "#465d6e",
            lineHeight: 1.78,
            maxWidth: 600,
            margin: "0 auto",
        }}>
              Ready to start your transformation? Drop us a message and a consultant will
              respond within one business day.
            </p>
          </div>
        </section>

        {/* ── Form + Info ───────────────────────────────────────────────────── */}
        <section className="contact-content" style={{ paddingTop: 80, paddingBottom: 120 }}>
          <div className="container px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

              {/* Form — 60% */}
              <div className="lg:col-span-3">
                <div className="service-card-light contact-form-card" style={{ padding: 32 }}>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-busy={sending}>
                      <div hidden aria-hidden="true"><label htmlFor="website">Leave this empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
                      <div>
                        <label htmlFor="name" style={LABEL_STYLE}>Full Name *</label>
                        <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} style={FIELD_STYLE} onFocus={focusField} onBlur={blurField}/>
                      </div>

                      <div>
                        <label htmlFor="phone" style={LABEL_STYLE}>Contact Number *</label>
                        <input id="phone" name="phone" type="tel" required placeholder="+91 8500631655" value={form.phone} onChange={handleChange} style={FIELD_STYLE} onFocus={focusField} onBlur={blurField}/>
                      </div>

                      <div>
                        <label htmlFor="email" style={LABEL_STYLE}>Email Address *</label>
                        <input id="email" name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={handleChange} style={FIELD_STYLE} onFocus={focusField} onBlur={blurField}/>
                      </div>

                      <div>
                        <label htmlFor="service" style={LABEL_STYLE}>Service Interest *</label>
                        <select id="service" name="service" required value={form.service} onChange={handleChange} style={{ ...FIELD_STYLE, appearance: "auto" }} onFocus={focusField} onBlur={blurField}>
                          <option value="" disabled>Select a service</option>
                          {SERVICE_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" style={LABEL_STYLE}>Message *</label>
                        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project or challenge…" value={form.message} onChange={handleChange} style={{ ...FIELD_STYLE, resize: "vertical" }} onFocus={focusField} onBlur={blurField}/>
                      </div>

                      <button type="submit" disabled={sending} className="btn-primary-light flex items-center justify-center gap-2 w-full" style={{ padding: "14px 0", fontSize: 14, opacity: sending ? 0.65 : 1 }}>
                        {sending ? "Sending…" : "Send Message"}
                        <ArrowRight size={15} strokeWidth={2.5}/>
                      </button>
                      {feedback && <p className="text-sm" role={feedback.success ? "status" : "alert"} style={{ color: feedback.success ? "#245b47" : "#9b2828", lineHeight: 1.7 }}>{feedback.message}</p>}
                    </form>
                </div>
              </div>

              {/* Info — 40% */}
              <div className="lg:col-span-2 flex flex-col gap-6">

                {/* Direct contact */}
                <div className="service-card-light" style={{ padding: "28px 24px" }}>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "#284f87" }}>
                    Direct Contact
                  </p>
                  <div className="flex flex-col" style={{ gap: 20 }}>
                    <a href="mailto:info@scitisensefuturize.in" className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(51,86,149,0.1)", color: "#284f87" }}>
                        <Mail size={14}/>
                      </span>
                      <span>
                        <span className="block text-xs font-medium mb-0.5" style={{ color: "#4c6373" }}>Email</span>
                        <span className="text-sm" style={{ color: "#465d6e" }}>info@scitisensefuturize.in</span>
                      </span>
                    </a>
                    <a href="tel:+918500631655" className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(51,86,149,0.1)", color: "#284f87" }}>
                        <Phone size={14}/>
                      </span>
                      <span>
                        <span className="block text-xs font-medium mb-0.5" style={{ color: "#4c6373" }}>Phone</span>
                        <span className="text-sm" style={{ color: "#465d6e" }}>+91 8500631655</span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="service-card-light" style={{ padding: "28px 24px" }}>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "#284f87" }}>
                    Our Office
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(51,86,149,0.1)", color: "#284f87" }}>
                      <MapPin size={14}/>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#465d6e" }}>
                      House No 65-6-131, New Gajuwaka MH Colony, Visakhapatnam, Andhra Pradesh 530026
                    </span>
                  </div>
                </div>

                {/* Research collaboration */}
                <div className="service-card-light" style={{ padding: "28px 24px" }}>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "#284f87" }}>
                    Research Collaboration
                  </p>
                  <div className="flex items-start gap-3" style={{ marginBottom: 16 }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(51,86,149,0.1)", color: "#284f87" }}>
                      <FlaskConical size={14}/>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#465d6e" }}>
                      We partner with universities, research labs, and enterprises for joint
                      R&amp;D projects and technology transfer.
                    </span>
                  </div>
                  <a href="mailto:info@scitisensefuturize.in?subject=Research%20Proposal" className="inline-flex items-center gap-1.5" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#284f87" }}>
                    Submit Research Proposal <ArrowRight size={14} strokeWidth={2.5}/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

    </>);
}
