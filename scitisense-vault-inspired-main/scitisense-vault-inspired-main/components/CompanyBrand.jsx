import Link from "next/link";
export default function CompanyBrand({ footer = false }) {
    return <Link href="/" className={`company-brand ${footer ? "company-brand-footer" : "company-brand-header"}`} aria-label="Scitisense Futurize Pvt. Ltd. home">
    <img src="/logosci2.png" alt="" width={42} height={42}/>
    <span className="company-brand-copy">
      <span className="company-brand-name">Scitisense Futurize</span>
      <span className="company-brand-legal">Pvt. Ltd.</span>
    </span>
  </Link>;
}
