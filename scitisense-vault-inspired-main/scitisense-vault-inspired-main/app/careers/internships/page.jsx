import ServiceProgram from "@/components/ServiceProgram";
import HeroBackground from "@/components/HeroBackground";

export const metadata = { title: "Internships" };

export default function InternshipsPage() {
  return <div className="careers-page" id="main-content">
    <div className="careers-heading" data-hero-reveal>
      <HeroBackground />
      <span className="program-kicker">CAREERS AT SCITISENSE</span>
      <h1>Internships</h1>
      <p>Explore opportunities to learn, research and build with us.</p>
    </div>
    <ServiceProgram category="internships" />
  </div>;
}
