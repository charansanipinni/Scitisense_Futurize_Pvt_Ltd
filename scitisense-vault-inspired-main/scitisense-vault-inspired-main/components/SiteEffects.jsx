"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function SiteEffects() {
    const pathname = usePathname();
    useEffect(() => {
        if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
        let frame = 0;
        let pointer;
        const paint = () => {
            frame = 0;
            const card = pointer.target.closest(".spotlight-card");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${pointer.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${pointer.clientY - rect.top}px`);
        };
        const handlePointerMove = (event) => {
            if (event.pointerType !== "mouse") return;
            pointer = event;
            if (!frame) frame = requestAnimationFrame(paint);
        };
        document.addEventListener("pointermove", handlePointerMove, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            document.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting)
                entry.target.classList.add("animate");
        }), { threshold: 0.1 });
        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);
    return null;
}
