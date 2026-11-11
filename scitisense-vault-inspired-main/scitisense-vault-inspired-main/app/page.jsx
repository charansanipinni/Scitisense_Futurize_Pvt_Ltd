import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Collaborators from "@/components/Collaborators";
import { ResearchStats, ResearchProcess, WhyScitisense, ResearchCTA } from "@/components/ResearchJourney";
export const metadata = {
    title: { absolute: "Scitisense Futurize Pvt. Ltd." },
};
export default function Home() {
    return <><main id="main-content"><Hero /><ResearchStats /><ResearchProcess /><WhyScitisense /><Collaborators /><ResearchCTA /></main><Footer /></>;
}
