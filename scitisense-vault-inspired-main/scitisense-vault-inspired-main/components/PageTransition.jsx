"use client";
import { usePathname } from "next/navigation";
export default function PageTransition({ children }) {
    const pathname = usePathname();
    // The document must remain visible before hydration and after interrupted loads.
    return <div key={pathname} id={pathname !== "/" ? "main-content" : undefined} className={`site-page ${pathname === "/" ? "home-page" : "interior-page"}`}>{children}</div>;
}
