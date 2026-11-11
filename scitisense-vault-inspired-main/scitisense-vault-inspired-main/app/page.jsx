import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Collaborators from "@/components/Collaborators";
import { ResearchStats, ResearchProcess, WhyScitisense, ResearchCTA } from "@/components/ResearchJourney";
export const metadata = {
    title: { absolute: "Scitisense Futurize Pvt. Ltd." },
};
export default function Home() {
    return <><main id="main-content"><Hero /><ResearchStats /><div className="recognition-strip section-shell"><span>RECOGNIZED. REGISTERED. READY.</span><div><strong>Startup India</strong><strong>DPIIT <small>RECOGNIZED</small></strong><strong>MSME</strong><strong>MCA <small>REGISTERED</small></strong></div></div><ResearchProcess /><WhyScitisense /><Collaborators /><ResearchCTA /></main><Footer /></>;
}
