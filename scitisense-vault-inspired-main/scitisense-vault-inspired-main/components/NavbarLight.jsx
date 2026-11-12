"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import CompanyBrand from "./CompanyBrand";
import { navigationLinks, serviceLinks } from "@/lib/site-links";

export default function NavbarLight() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuToggleRef = useRef(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const careersRef = useRef(null);
  const careersTriggerRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setServicesOpen(false);
      if (!careersRef.current?.contains(event.target)) setCareersOpen(false);
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
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
      if (event.key === "Escape" && headerRef.current?.querySelector('.site-nav[data-open="true"]')) {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setCareersOpen(false);
  }, [pathname]);

  const closeMenus = () => { setMenuOpen(false); setServicesOpen(false); setCareersOpen(false); };

  return <header ref={headerRef} className="site-header simple-site-header corporate-site-header">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <CompanyBrand />
    <button ref={menuToggleRef} type="button" className="site-menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={22} aria-hidden="true"/> : <Menu size={22} aria-hidden="true"/>}</button>
    <nav id="main-navigation" className="site-nav" data-open={menuOpen} data-lenis-prevent aria-label="Main navigation">
      {navigationLinks.slice(0, 2).map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={closeMenus}>{label}</Link>)}
      <div className="site-nav-services" ref={menuRef}>
        <button ref={triggerRef} type="button" aria-expanded={servicesOpen} aria-controls="services-dropdown" aria-current={pathname.startsWith("/services") ? "page" : undefined} onClick={() => { setServicesOpen(open => !open); setCareersOpen(false); }}>
          Services <ChevronDown size={15} aria-hidden="true" className={servicesOpen ? "is-open" : ""}/>
        </button>
        <div id="services-dropdown" className="site-services-dropdown" role="group" aria-label="Choose a service" hidden={!servicesOpen}>
          {serviceLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}
        </div>
      </div>
      <div className="site-nav-services" ref={careersRef}>
        <button ref={careersTriggerRef} type="button" aria-expanded={careersOpen} aria-controls="careers-dropdown" aria-current={pathname.startsWith("/careers") ? "page" : undefined} onClick={() => { setCareersOpen(open => !open); setServicesOpen(false); }}>
          Careers <ChevronDown size={15} aria-hidden="true" className={careersOpen ? "is-open" : ""}/>
        </button>
        <div id="careers-dropdown" className="site-services-dropdown" role="group" aria-label="Choose a career opportunity" hidden={!careersOpen}>
          <Link href="/careers" onClick={closeMenus}>Careers overview</Link>
          <Link href="/careers/internships" onClick={closeMenus}>Internships</Link>
        </div>
      </div>
      <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenus}>Contact</Link>
    </nav>
  </header>;
}
