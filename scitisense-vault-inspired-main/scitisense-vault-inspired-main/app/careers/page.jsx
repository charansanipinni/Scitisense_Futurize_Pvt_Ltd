import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return <div className="careers-page" id="main-content">
    <div className="careers-heading" data-hero-reveal>
      <HeroBackground />
      <span className="program-kicker">CAREERS AT SCITISENSE</span>
      <h1>Careers</h1>
      <p>Explore opportunities to learn, research and build with us.</p>
    </div>
    <div className="careers-opportunities">
      <h2>Opportunities</h2>
      <Link href="/careers/internships" className="careers-opportunity">
        <span className="program-kicker">EARLY CAREERS</span>
        <strong>Internships</strong>
        <span>Learn through applied research and practical projects →</span>
      </Link>
    </div>
  </div>;
}
