"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import CompanyBrand from "./CompanyBrand";

const serviceLinks = [
  ["Research & development", "/services/research-development"],
  ["Training & workshops", "/services/training-workshops"],
  ["Consultancy services", "/services/consultancy-services"],
  ["Internships", "/services/internships"],
];
const links = [
  ["Announcements", "/stories"],
  ["About", "/aboutus"],
  ["Contact", "/contact"],
];

export default function NavbarLight() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setServicesOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape" && menuRef.current?.querySelector("#services-dropdown:not([hidden])")) {
        setServicesOpen(false);
        triggerRef.current?.focus();
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
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setServicesOpen(false)}>Home</Link>
      <div className="site-nav-services" ref={menuRef}>
        <Link ref={triggerRef} href="/services" aria-expanded={servicesOpen} aria-controls="services-dropdown" aria-current={pathname.startsWith("/services") ? "page" : undefined} onClick={() => setServicesOpen(true)}>
          Services <ChevronDown size={15} aria-hidden="true" className={servicesOpen ? "is-open" : ""}/>
        </Link>
        <div id="services-dropdown" className="site-services-dropdown" role="group" aria-label="Choose a service" hidden={!servicesOpen}>
          {serviceLinks.map(([label, href]) => <Link href={href} key={href} onClick={() => setServicesOpen(false)}>{label}</Link>)}
        </div>
      </div>
      {links.map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setServicesOpen(false)}>{label}</Link>)}
    </nav>
  </header>;
}
