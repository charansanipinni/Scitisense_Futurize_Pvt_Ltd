"use client";
import { useRef } from "react";
import { useMediaQuery, useMounted } from "@/hooks/useMediaQuery";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
export default function ParallaxSection({ children, speed = 0.3, className, style, }) {
    const noMotion = useReducedMotion() === true;
    // Disable on touch/pointer-coarse devices
    const isTouch = useMediaQuery("(pointer: coarse)");
    const ref = useRef(null);
    const ready = useMounted();
    const { scrollYProgress } = useScroll({
        target: ready ? ref : undefined,
        offset: ["start end", "end start"],
    });
    const range = speed * 30;
    const y = useTransform(scrollYProgress, [0, 1], [`${range}px`, `${-range}px`]);
    const skip = noMotion || isTouch;
    return (<motion.div ref={ref} className={className} style={{
            y: skip ? 0 : y,
            willChange: skip ? "auto" : "transform",
            ...style,
        }}>
      {children}
    </motion.div>);
}
