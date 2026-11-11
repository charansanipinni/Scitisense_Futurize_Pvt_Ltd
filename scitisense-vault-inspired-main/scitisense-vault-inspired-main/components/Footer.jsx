import Link from "next/link";
import CompanyBrand from "./CompanyBrand";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon() { return <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-9h3l.45-3.5H13.5V7.27c0-1.01.28-1.7 1.73-1.7H17V2.44A23.4 23.4 0 0 0 14.42 2C11.86 2 10.1 3.56 10.1 6.43V9.5H7.2V13h2.9v9h3.4Z"/></svg>; }
function InstagramIcon() { return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none"/></svg>; }
function LinkedinIcon() { return <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M5.2 8.5H2V22h3.2V8.5ZM3.6 2a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM22 14.3c0-3.8-2.03-5.57-4.73-5.57a4.08 4.08 0 0 0-3.68 2.03V8.5h-3.2V22h3.2v-7.52c0-1.98.38-3.9 2.84-3.9 2.43 0 2.46 2.24 2.46 4.03V22H22v-7.7Z"/></svg>; }

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Announcements", "/stories"],
  ["About", "/aboutus"],
  ["Contact", "/contact"],
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/share/1FNV6ek3bk/", FacebookIcon],
  ["Instagram", "https://www.instagram.com/scitisensefuturize?utm_source=qr&srtk=MXFnc2M2dXVtZ3hkeQ==", InstagramIcon],
  ["LinkedIn", "https://www.linkedin.com/in/scitisensefuturizeprivatelimited/", LinkedinIcon],
  ["Email", "mailto:info@scitisensefuturize.in", Mail],
];

export default function Footer() {
  return <footer className="template-footer reference-footer">
    <div className="section-shell">
      <div className="reference-footer-header">
        <div className="reference-footer-identity">
          <CompanyBrand footer />
          <p>Scientific thinking. Intelligent technology. A better tomorrow.</p>
        </div>
        <Link className="reference-footer-cta" href="/contact">Get in Touch <ArrowRight size={19} aria-hidden="true" /></Link>
      </div>

      <div className="reference-footer-columns">
        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          {navigation.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </nav>
        <div>
          <h2>Head Office</h2>
          <div className="reference-footer-detail"><MapPin size={20} aria-hidden="true" /><p>New Gajuwaka MH Colony,<br />Visakhapatnam, Andhra Pradesh 530026</p></div>
        </div>
        <div>
          <h2>Contact</h2>
          <a className="reference-footer-detail" href="tel:+918500631655"><Phone size={19} aria-hidden="true" /><span>+91 8500631655</span></a>
          <a className="reference-footer-detail" href="mailto:info@scitisensefuturize.in"><Mail size={19} aria-hidden="true" /><span>info@scitisensefuturize.in</span></a>
        </div>
      </div>

      <div className="reference-footer-social"><span>Connect With Us</span><div>
        {socialLinks.map(([label, href, Icon]) => <a href={href} key={label} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon size={22} aria-hidden="true" /></a>)}
      </div></div>
      <div className="reference-footer-bottom">&copy; {new Date().getFullYear()} Scitisense Futurize Pvt. Ltd. All rights reserved.</div>
    </div>
  </footer>;
}
