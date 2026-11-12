import Hero from "@/components/Hero";
import Collaborators from "@/components/Collaborators";
import { ResearchStats, ResearchProcess, WhyScitisense, ResearchFAQ, ResearchCTA } from "@/components/ResearchJourney";
export const metadata = {
    title: { absolute: "Scitisense Futurize Pvt. Ltd." },
};
export default function Home() {
    return <main id="main-content"><Hero /><ResearchStats /><ResearchProcess /><WhyScitisense /><Collaborators /><ResearchFAQ /><ResearchCTA /></main>;
}
