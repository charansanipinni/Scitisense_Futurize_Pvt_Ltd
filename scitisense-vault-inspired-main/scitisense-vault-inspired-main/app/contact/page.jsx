"use client";
import HeroBackground from "@/components/HeroBackground";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, FlaskConical, ArrowRight } from "lucide-react";

export default function Contact() {
    return (<>
      <main className="relative" style={{ backgroundColor: "#f6f9fb" }}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="site-page-hero relative text-center overflow-hidden grid-bg-light" data-hero-reveal style={{
            paddingTop: 160,
            paddingBottom: 80,
            background: "linear-gradient(180deg, #edf4f7 0%, #f6f9fb 60%, #ffffff 100%)",
        }}>
          <HeroBackground />
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
                  <ContactForm />
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
