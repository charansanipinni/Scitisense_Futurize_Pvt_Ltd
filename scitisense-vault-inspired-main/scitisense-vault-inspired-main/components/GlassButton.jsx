"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import LiquidGlassButtons from "./framer/LiquidGlassButtons";
import { BRAND } from "@/lib/theme";
export default function GlassButton({ href, label, variant = "light", }) {
    const router = useRouter();
    const navigate = useCallback((destination) => router.push(destination), [router]);
    return <span className={`glass-action glass-action-${variant}`}>
    <LiquidGlassButtons label={label} link={href} onNavigate={navigate} material={variant === "primary" ? "tinted" : "frosted"} surface={variant === "primary" ? "dark" : "light"} tint={variant === "primary" ? BRAND.accent : BRAND.hero} textColor={variant === "primary" ? "#ffffff" : BRAND.ink} font={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: "1.25em" }} icon="diagonal" radius="999px" padding="16px 23px" gap="16px" glass={{ shoulder: 6, blur: 4, refraction: 35 }} lightFollow={45} focusColor={BRAND.accent} hoverTransition={{ type: "spring", stiffness: 160, damping: 25, mass: 0.6 }}/>
  </span>;
}
