"use client";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import CompanyBrand from "./CompanyBrand";
import LiquidPillNavbar from "./framer/LiquidPillNavbar";
import { BRAND } from "@/lib/theme";
const links = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Announcements", link: "/stories" },
    { label: "About", link: "/aboutus" },
    { label: "Contact", link: "/contact" },
];
export default function NavbarLight() {
    const pathname = usePathname();
    const router = useRouter();
    const navigate = useCallback((href) => router.push(href), [router]);
    return <header className="site-header simple-site-header">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <CompanyBrand />
    <div className="simple-desktop-navigation">
      <LiquidPillNavbar key={pathname} items={links.map(item => ({ title: item.label, link: item.link }))} active={Math.max(1, links.findIndex(item => item.link === pathname) + 1)} matchPage={true} color="#dbe9f0" font={{ fontSize: 13, fontWeight: 500 }} itemPadding="11px 16px" pill={{ fill: "rgba(188, 213, 232, 0.08)", padding: "4px", gap: 2, shadow: "none" }} indicator={{ fill: BRAND.hero, text: BRAND.ink, gloss: 25 }} hover={{ text: BRAND.page }} liquid={{ amount: 60, wobble: 35, speed: 1.2, delay: 0 }} onNavigate={navigate}/>
    </div>
    <nav className="simple-mobile-navigation" aria-label="Main navigation">
      {links.map(item => <Link key={item.link} href={item.link} aria-current={pathname === item.link ? "page" : undefined}>{item.label}</Link>)}
    </nav>
  </header>;
}
