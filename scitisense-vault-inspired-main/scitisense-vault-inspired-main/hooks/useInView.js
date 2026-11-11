"use client";
import { useEffect, useRef, useState } from "react";
/** Tracks whether an element is currently intersecting the viewport. */
export function useInView(threshold = 0.3) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return [ref, inView];
}
