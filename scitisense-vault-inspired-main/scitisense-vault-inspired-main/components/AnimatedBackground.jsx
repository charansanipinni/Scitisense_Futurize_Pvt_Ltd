"use client";
import { useEffect, useRef } from "react";
/** Decorative CSS motion pauses offscreen and in hidden tabs. */
export default function AnimatedBackground({ contained = false }) {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const update = () => {
            element.dataset.paused = String(document.hidden);
        };
        const observer = new IntersectionObserver(([entry]) => {
            element.dataset.offscreen = String(!entry.isIntersecting);
        });
        observer.observe(element);
        update();
        document.addEventListener("visibilitychange", update);
        return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", update);
        };
    }, []);
    return (<div ref={ref} className={`ambient-background${contained ? " ambient-contained" : ""}`} aria-hidden="true">
      <div className="ambient-halo ambient-halo-one"/>
      <div className="ambient-halo ambient-halo-two"/>
      <svg className="ambient-field" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" fill="none">
        <g className="ambient-contours" stroke="currentColor" strokeWidth="0.7">
          <path d="M-240 730C120 180 530 1090 1040 390S1570 170 1710 600"/>
          <path d="M-240 760C130 215 540 1120 1050 420S1580 200 1720 630"/>
          <path d="M-240 790C140 250 550 1150 1060 450S1590 230 1730 660"/>
          <path d="M-240 820C150 285 560 1180 1070 480S1600 260 1740 690"/>
          <ellipse cx="725" cy="650" rx="580" ry="230" transform="rotate(-22 725 650)"/>
        </g>
        <g className="ambient-signals" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 480">
          <path d="M-240 730C120 180 530 1090 1040 390S1570 170 1710 600"/>
          <path d="M-240 820C150 285 560 1180 1070 480S1600 260 1740 690"/>
        </g>
        <g className="ambient-points" fill="currentColor">
          <circle cx="194" cy="383" r="2.5"/>
          <circle cx="1238" cy="308" r="2"/>
          <circle cx="1135" cy="788" r="3"/>
          <circle cx="371" cy="872" r="2"/>
        </g>
      </svg>
    </div>);
}
