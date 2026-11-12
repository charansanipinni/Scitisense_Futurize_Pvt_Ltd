"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import CompanyBrand from "./CompanyBrand";
import { navigationLinks, serviceLinks } from "@/lib/site-links";

export default function NavbarLight() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const careersRef = useRef(null);
  const careersTriggerRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setServicesOpen(false);
      if (!careersRef.current?.contains(event.target)) setCareersOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape" && menuRef.current?.querySelector("#services-dropdown:not([hidden])")) {
        setServicesOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Escape" && careersRef.current?.querySelector("#careers-dropdown:not([hidden])")) {
        setCareersOpen(false);
        careersTriggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return <header className="site-header simple-site-header">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <CompanyBrand />
    <nav className="site-nav" aria-label="Main navigation">
      {navigationLinks.slice(0, 2).map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => { setServicesOpen(false); setCareersOpen(false); }}>{label}</Link>)}
      <div className="site-nav-services" ref={menuRef}>
        <button ref={triggerRef} type="button" aria-expanded={servicesOpen} aria-controls="services-dropdown" aria-current={pathname.startsWith("/services") ? "page" : undefined} onClick={() => { setServicesOpen(open => !open); setCareersOpen(false); }}>
          Services <ChevronDown size={15} aria-hidden="true" className={servicesOpen ? "is-open" : ""}/>
        </button>
        <div id="services-dropdown" className="site-services-dropdown" role="group" aria-label="Choose a service" hidden={!servicesOpen}>
          {serviceLinks.map(([label, href]) => <Link href={href} key={href} onClick={() => setServicesOpen(false)}>{label}</Link>)}
        </div>
      </div>
      <div className="site-nav-services" ref={careersRef}>
        <button ref={careersTriggerRef} type="button" aria-expanded={careersOpen} aria-controls="careers-dropdown" aria-current={pathname.startsWith("/careers") ? "page" : undefined} onClick={() => { setCareersOpen(open => !open); setServicesOpen(false); }}>
          Careers <ChevronDown size={15} aria-hidden="true" className={careersOpen ? "is-open" : ""}/>
        </button>
        <div id="careers-dropdown" className="site-services-dropdown" role="group" aria-label="Choose a career opportunity" hidden={!careersOpen}>
          <Link href="/careers/internships" onClick={() => setCareersOpen(false)}>Internships</Link>
        </div>
      </div>
      <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => { setServicesOpen(false); setCareersOpen(false); }}>Contact</Link>
    </nav>
  </header>;
}
