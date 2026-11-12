"use client";
import { motion, useReducedMotion } from "motion/react";
import HeroBackground from "./HeroBackground";
const ease = [0.22, 1, 0.36, 1];
export default function ServiceDetailHero({ title, tagline }) {
    const noMotion = useReducedMotion() === true;
    return (<section className="site-page-hero" data-hero-reveal style={{
            background: "linear-gradient(180deg, #edf4f7 0%, #f6f9fb 60%, #ffffff 100%)",
            paddingTop: "160px",
            paddingBottom: "80px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            position: "relative",
            overflow: "hidden",
        }}>
      <HeroBackground />
      <div className="relative container px-5 md:px-8">

        {/* Breadcrumb */}
        <motion.p initial={noMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }} style={{ color: "#465d6e", fontSize: "0.8rem", marginBottom: "20px" }}>
          <a href="/whatwedo" style={{ color: "#465d6e", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#284f87")} onMouseLeave={(e) => (e.currentTarget.style.color = "#465d6e")}>
            What We Do
          </a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>{title}</span>
        </motion.p>

        {/* H1 */}
        <motion.h1 initial={noMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }} style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#172b3a",
            marginBottom: "20px",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
        }}>
          {title}
        </motion.h1>

        {/* Tagline */}
        <motion.p initial={noMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14, ease }} style={{
            fontSize: "1.15rem",
            color: "#465d6e",
            maxWidth: "700px",
            lineHeight: 1.78,
        }}>
          {tagline}
        </motion.p>

      </div>
    </section>);
}
