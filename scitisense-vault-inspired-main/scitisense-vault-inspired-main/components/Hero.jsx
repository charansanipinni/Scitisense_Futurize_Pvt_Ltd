"use client";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedTextRotator } from "./TemplateMotion";
import AnimatedBackground from "./AnimatedBackground";
import HallwayExperience, { useHallwayMotion } from "./HallwayExperience";
import GlassButton from "./GlassButton";
import { BRAND } from "@/lib/theme";
export default function Hero() {
    const ref = useRef(null);
    const immersive = useHallwayMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.18], [1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.18], [0, -30]);
    const pointerEvents = useTransform(scrollYProgress, value => value < 0.18 ? "auto" : "none");
    return <div ref={ref} className="hero-composition">
    <section className="template-hero hero-introduction">
      <AnimatedBackground contained/>
      <motion.div className="hero-copy" style={{ opacity: immersive ? opacity : 1, y: immersive ? y : 0, pointerEvents: immersive ? pointerEvents : "auto" }}>
        <span className="eyebrow"><span className="status-dot"/> RESEARCH TODAY. POSSIBILITY TOMORROW.</span>
        <h1 className="hero-headline"><span className="hero-headline-leading">Complex ideas.</span><span className="hero-headline-ending">Made <AnimatedTextRotator color={BRAND.hero}/></span></h1>
        <p>From the first question to a real-world solution. We bring AI research, technology, and human ingenuity together.</p>
        <div className="hero-actions">
          <GlassButton href="/services" label="Explore our expertise" variant="primary"/>
        </div>
        <span className="hero-motion-hint"><ArrowDown size={14} aria-hidden="true"/> Scroll to explore</span>
      </motion.div>
    </section>
    <HallwayExperience />
  </div>;
}
