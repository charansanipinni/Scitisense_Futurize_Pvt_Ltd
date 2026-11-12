"use client";
import { motion } from "motion/react";
import { useIsStaticRenderer as useReducedMotionPreference } from "@/components/framer/runtime";
import { Lightbulb, ShieldCheck, Layers, Zap } from "lucide-react";
import { hexToRgb } from "@/lib/services-data";
import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";
const ease = [0.22, 1, 0.36, 1];
function fadeUp(noMotion, delay = 0) {
    if (noMotion)
        return { initial: false, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } };
    return {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-80px" },
        transition: { duration: 0.65, delay, ease },
    };
}
// ─── Data ─────────────────────────────────────────────────────────────────────
const PARTNER_CARDS = [
    {
        icon: Lightbulb,
        color: "#284f87",
        title: "Innovation First",
        body: "Recognized by DPIIT and Startup India for our unique contributions to the industry.",
    },
    {
        icon: ShieldCheck,
        color: "#284f87",
        title: "Trusted & Compliant",
        body: "Fully registered with MCA and MSME, ensuring a secure and professional partnership.",
    },
    {
        icon: Layers,
        color: "#284f87",
        title: "Multi-Disciplinary Expertise",
        body: "From the laboratory bench to the cloud, our team spans the full spectrum of R&D and HealthTech.",
    },
    {
        icon: Zap,
        color: "#284f87",
        title: "Agile & Reliable",
        body: "We combine the agility of a startup with the reliability of a certified enterprise.",
    },
];
// ─── Card sub-component ───────────────────────────────────────────────────────
function InfoCard({ icon: Icon, color, title, body, noMotion, delay, }) {
    const rgb = hexToRgb(color);
    return (<motion.div {...fadeUp(noMotion, delay)} style={{
            background: "#ffffff",
            border: "1px solid #d7e2e8",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }} onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = `rgba(${rgb},0.35)`;
            el.style.boxShadow = `0 12px 32px rgba(${rgb},0.12)`;
        }} onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "#d7e2e8";
            el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)";
        }}>
      <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: `rgba(${rgb},0.12)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "18px",
        }}>
        <Icon size={22} strokeWidth={1.8} style={{ color }}/>
      </div>
      <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#172b3a", marginBottom: "10px" }}>{title}</p>
      <p style={{ fontSize: "0.9rem", color: "#465d6e", lineHeight: 1.75 }}>{body}</p>
    </motion.div>);
}
// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutUs() {
    const noMotion = useReducedMotionPreference();
    return (<>
      <main className="relative" style={{ backgroundColor: "transparent" }}>

        {/* ── Company description ──────────────────────────────────────────── */}
        <section className="site-page-hero about-hero" data-hero-reveal aria-labelledby="about-company-title">
          <HeroBackground />
          <div className="about-hero-content section-shell">
            <div className="about-hero-heading">
              <span className="eyebrow">ABOUT US</span>
              <h1 id="about-company-title">Research into<br />real-world solutions.</h1>
            </div>
            <p className="about-hero-description">
              We build AI and technology solutions for healthcare and industry.
            </p>
          </div>
        </section>

        <section className="leadership-section section-shell" aria-labelledby="leadership-title">
          <div className="leadership-heading"><span className="eyebrow">OUR LEADERSHIP</span><h2 id="leadership-title">The people behind <span className="muted-blue">the work.</span></h2></div>
          <div className="leadership-grid">
            <motion.article className="leader-card leader-card-founder" {...fadeUp(noMotion, 0)} whileHover={noMotion ? undefined : { y: -8, transition: { duration: 0.45, ease } }}><div className="leader-photo"><Image src="/team/sampath-dakshina-murthy.jpeg" alt="Dr. A. Sampath Dakshina Murthy" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 340px"/></div><div className="leader-card-copy"><span>FOUNDER</span><h3>Dr. A. Sampath Dakshina Murthy</h3><p>Founder</p></div></motion.article>
            <motion.article className="leader-card" {...fadeUp(noMotion, 0.1)} whileHover={noMotion ? undefined : { y: -8, transition: { duration: 0.45, ease } }}><div className="leader-photo"><Image src="/team/b-omkar.jpeg" alt="Dr. B. Omkar Lakshmi Jagan" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 340px"/></div><div className="leader-card-copy"><span>CO-FOUNDER</span><h3>Dr. B. Omkar Lakshmi Jagan</h3><p>Co-founder</p></div></motion.article>
            <motion.article className="leader-card" {...fadeUp(noMotion, 0.2)} whileHover={noMotion ? undefined : { y: -8, transition: { duration: 0.45, ease } }}><div className="leader-photo"><Image src="/team/d-naga-chandra-teja.jpeg" alt="D. Naga Chandra Teja, Chief Technical Officer" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 340px"/></div><div className="leader-card-copy"><span>CTO</span><h3>D. Naga Chandra Teja</h3><p>Chief Technical Officer</p></div></motion.article>
          </div>
        </section>

        <section className="founder-message section-shell" aria-labelledby="founder-message-title">
          <div className="founder-message-heading">
            <span className="eyebrow">A MESSAGE FROM OUR FOUNDER</span>
            <h2 id="founder-message-title">Research into innovation.<br /><span className="muted-blue">Innovation into impact.</span></h2>
          </div>
          <div className="founder-message-copy">
            <p>At Scitisense Futurize Private Limited, we believe in driving innovation to create impactful solutions.</p>
            <p>Our goal is to bridge research and products by turning innovative ideas into cost-effective, accessible and impactful solutions.</p>
            <p>With our passion for Artificial Intelligence, Healthcare Technologies, Internet of Things (IoT), Smart Wearables and Deep Tech Innovations, we aim to solve emerging problems in society and industry by research-driven product development.</p>
            <p>We are committed to supporting young innovators, researchers, entrepreneurs and start-ups by providing them with opportunities to collaborate on research, develop prototypes, create IP and commercialize technology.</p>
            <p>Our goal is to turn research into innovation, innovation into products and products into solutions.</p>
            <p>Together, we aim to create a future where technology empowers humans, entrepreneurs create opportunities and innovation drives sustainable growth.</p>
            <div className="founder-message-signature"><strong>Dr. A. Sampath Dakshina Murthy</strong><span>Founder</span><span>Scitisense Futurize Pvt. Ltd.</span><span>Visakhapatnam, Andhra Pradesh, India</span></div>
          </div>
        </section>



        {/* ── Our Mission ───────────────────────────────────────────────────── */}
        <section className="relative text-center" style={{
            paddingTop: "100px",
            paddingBottom: "120px",
            backgroundColor: "transparent",
            borderTop: "1px solid var(--border)",
        }}>
          <div className="container px-5 md:px-8">
            <motion.p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase mb-6" style={{ color: "var(--accent)" }} {...fadeUp(noMotion)}>
              Our Mission
            </motion.p>
            <motion.div {...fadeUp(noMotion, 0.1)} style={{ maxWidth: "700px", margin: "0 auto" }}>
              <span aria-hidden="true" style={{
            display: "block",
            fontSize: "6rem",
            color: "rgba(51,86,149,0.2)",
            lineHeight: 0,
            marginBottom: "24px",
            fontFamily: "Georgia, serif",
        }}>
                &ldquo;
              </span>
              <p style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "#172b3a",
            fontStyle: "italic",
            lineHeight: 1.6,
            textAlign: "center",
        }}>
                To democratize access to high-quality scientific research tools and
                medical technology, enabling researchers and healthcare providers to
                focus on what matters most: discovery and care.
              </p>
            </motion.div>
          </div>
        </section>



        {/* ── Why Partner With Us ──────────────────────────────────────────── */}
        <section className="relative" style={{
            paddingTop: "80px",
            paddingBottom: "100px",
            backgroundColor: "transparent",
            borderTop: "1px solid var(--border)",
        }}>
          <div className="container px-5 md:px-8">
            <motion.div style={{ textAlign: "center", marginBottom: "56px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }} {...fadeUp(noMotion)}>
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--accent)", margin: 0, lineHeight: 1.5 }}>
                OUR APPROACH
              </p>
              <h2 className="font-bold tracking-[-0.025em]" style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            color: "var(--text-primary)",
            margin: 0, lineHeight: 1.15,
        }}>
                Why Partner With Us?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px", maxWidth: "880px", marginInline: "auto" }}>
              {PARTNER_CARDS.map((card, i) => (<InfoCard key={card.title} {...card} noMotion={noMotion} delay={i * 0.08}/>))}
            </div>
          </div>
        </section>


      </main>

    </>);
}
