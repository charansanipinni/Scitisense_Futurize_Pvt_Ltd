"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
export default function SmoothScrollProvider({ children, }) {
    const pathname = usePathname();
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const lenis = new Lenis({
            anchors: true,
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
            infinite: false,
            prevent: (node) => node.hasAttribute("data-lenis-prevent"),
        });
        let animFrame;
        function raf(time) {
            lenis.raf(time);
            animFrame = requestAnimationFrame(raf);
        }
        animFrame = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(animFrame);
            lenis.destroy();
        };
    }, [pathname]);
    return (<MotionConfig transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} reducedMotion="user">
      {children}
    </MotionConfig>);
}
