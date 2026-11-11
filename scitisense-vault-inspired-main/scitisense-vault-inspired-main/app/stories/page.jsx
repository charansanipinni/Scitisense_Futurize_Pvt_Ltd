import { Sparkles } from "lucide-react";

export default function AnnouncementsPage() {
  return <>
    <main className="announcements-page" id="main-content">
      <section className="announcements-hero site-page-hero">
        <div className="section-shell">
          <span className="eyebrow"><span className="status-dot"/> FROM THE SCITISENSE WORKSPACE</span>
          <h1>Something good<br/>is <span className="muted-blue">taking shape.</span></h1>
          <p>Research updates, company news, and new possibilities.<br/>Our announcements are coming soon.</p>
          <div className="announcement-visual" aria-hidden="true">
            <span className="announcement-orbit"/>
            <span className="announcement-orbit second"/>
            <span className="announcement-core"><Sparkles size={40} strokeWidth={1.2}/></span>
            <span className="announcement-chip">Curiosity in progress <span className="status-dot"/></span>
          </div>
        </div>
      </section>
      <section className="projects-showcase section-shell" aria-labelledby="projects-showcase-title">
        <div className="projects-showcase-heading">
          <span className="eyebrow">OUR WORK</span>
          <h2 id="projects-showcase-title">Completed <span className="muted-blue">projects.</span></h2>
          <p>A dedicated space for project stories, images and results.</p>
        </div>
        <div className="projects-showcase-placeholder">
          <span className="micro-label">PROJECT SHOWCASE</span>
          <h3>Project profiles are coming soon.</h3>
          <p>Completed project details will be added here as they become available.</p>
        </div>
      </section>
    </main>
  </>;
}
