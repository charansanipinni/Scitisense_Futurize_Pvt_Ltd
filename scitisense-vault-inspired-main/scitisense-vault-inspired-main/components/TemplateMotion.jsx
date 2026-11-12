"use client";
import { useReducedMotion, useInView } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { BRAND } from "@/lib/theme";
import Rotator from "./framer/AnimatedTextRotator";
import RevealText from "./framer/ScrollRevealText";
import Counter from "./framer/CounterFX";
const Hands = dynamic(() => import("./framer/HalftoneHands"), { ssr: false });
const Particles = dynamic(() => import("./framer/ParticleText"), { ssr: false });
const subscribeHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function AnimatedTextRotator({ color = BRAND.accent }) {
  const reduced = useReducedMotion();
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    clientSnapshot,
    serverSnapshot,
  );
  return (
    <span className="rotator" aria-label="intelligent, connected, human">
      <span aria-hidden="true">
        {!hydrated || reduced ? (
          <span style={{ color }}>intelligent.</span>
        ) : (
          <Rotator
            {...Rotator.defaultProps}
            words={["intelligent.", "connected.", "human."]}
            size={88}
            fitToFrame={false}
            color={color}
            effect="slide"
            addBlur={false}
            duration={0.4}
            exitDuration={0.25}
            hold={2.5}
            caret={false}
            splitBy="words"
            font={{
              fontFamily: "inherit",
              fontWeight: 500,
              letterSpacing: "-0.065em",
            }}
          />
        )}
      </span>
    </span>
  );
}
export function ScrollRevealText({ text }) {
    const reduced = useReducedMotion();
    return <div className="scroll-reveal-copy"><RevealText {...RevealText.defaultProps} text={text} preset="Soft Words" trigger={reduced ? "On Load" : "Scroll"} font={{ fontFamily: "inherit", fontSize: "clamp(28px, 4.6vw, 62px)", fontWeight: 500, lineHeight: "1.2em", letterSpacing: "-0.045em" }} colorHidden={BRAND.muted} colorRevealed={BRAND.ink} htmlTag="p"/></div>;
}
export function CounterFX({ value, suffix = "" }) {
    const reduced = useReducedMotion();
    const hydrated = useSyncExternalStore(subscribeHydration, clientSnapshot, serverSnapshot);
    return <span className="counter-wrap" aria-label={`${value}${suffix}`}><span aria-hidden="true">{!hydrated || reduced ? <span className="counter-static">{value}{suffix}</span> : <Counter from={0} to={value} duration={1.8} easing="smooth" decimals={0} prefix="" suffix={suffix} showThousandSep={false} tint={BRAND.ink} triggerMode="inView" sectionName="" htmlTag="span" font={{ fontSize: 52, fontWeight: 500, fontFamily: "inherit", letterSpacing: "-0.05em", lineHeight: "1em" }}/>}</span></span>;
}
export function HalftoneHands() {
  const ref = useRef(null);
  const [compact, setCompact] = useState(false);
  const nearViewport = useInView(ref, { once: true, margin: "200px" });
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setCompact(entry.contentRect.width < 600);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="halftone-art" aria-hidden="true">
      {nearViewport && (
        <Hands
          theme={{
            initial: "custom",
            switcher: false,
            vignette: false,
            scanlines: false,
          }}
          custom={{
            background: "#dbe9f0",
            inkA: "#315b8d",
            inkB: "#7899ab",
            dark: false,
          }}
          hands={{
            sheetUrl: "/framer/halftone-hands.webp",
            width: compact ? 30 : 47,
            centerY: 50,
            bleed: 2.5,
            gap: 8,
          }}
          dots={{ density: compact ? 70 : 110, rowGap: 1.65, size: 88 }}
          motion={{
            loop: 16,
            speed: 0.9,
            drift: 12,
            breathe: 15,
            roll: 0,
            morph: true,
            glitch: false,
            shimmer: 20,
            intro: true,
          }}
        />
      )}
    </div>
  );
}
export function ParticleText() {
    const reduced = useReducedMotion();
    const ref = useRef(null);
    const visible = useInView(ref, { margin: "150px" });
    const [size, setSize] = useState(100);
    useEffect(() => {
        if (!ref.current)
            return;
        const observer = new ResizeObserver(([entry]) => setSize(Math.min(120, entry.contentRect.width / 6.2)));
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return <div ref={ref} className="particle-art" aria-hidden="true">{reduced || !visible ? <span className="particle-fallback">FUTURIZE</span> : <Particles text="FUTURIZE" particleColor="#6f8d9f" backgroundColor="#dbe9f0" particleSize={1.2} particleDensity={5} mouseRadius={80} returnSpeed={0.045} font={{ fontFamily: "Arial", fontSize: size, fontWeight: 700 }} style={{ width: "100%", height: "100%" }}/>}</div>;
}
