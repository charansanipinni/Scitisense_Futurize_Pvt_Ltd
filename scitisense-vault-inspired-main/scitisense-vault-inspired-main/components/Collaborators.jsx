import { Network } from "lucide-react";
export default function Collaborators() {
    return (<section className="collaborators-section section-shell" aria-labelledby="collaborators-title">
      <div className="collaborators-intro">
        <span className="eyebrow">OUR COLLABORATORS</span>
        <h2 id="collaborators-title">Better ideas.<br /><span className="muted-blue">Built together.</span></h2>
        <p>We work with researchers, institutions, entrepreneurs and industry teams to move useful ideas forward.</p>
      </div>
      <div className="collaborators-preview" aria-label="Collaborator showcase coming soon">
        <div className="collaborators-preview-icon"><Network size={34} strokeWidth={1.4}/></div>
        <span className="micro-label">A SHARED SPACE FOR WHAT COMES NEXT</span>
        <p>Our collaborator profiles are coming soon.</p>
        <div className="collaborators-preview-slots" aria-hidden="true"><span /><span /><span /><span /></div>
      </div>
    </section>);
}
