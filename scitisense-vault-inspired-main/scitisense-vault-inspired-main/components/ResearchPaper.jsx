"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { RotateCcw } from "lucide-react";
const description = "Scitisense research brief: define the challenge, build the evidence, deliver the solution.";
const image = "/framer/research-brief.svg";
function PaperPreview() {
    return <img className="research-paper-preview" src={image} alt={description} width={840} height={1050} loading="lazy" decoding="async"/>;
}
const CrumpledPaperReveal = dynamic(() => import("./framer/CrumpledPaperReveal"), {
    ssr: false,
    loading: PaperPreview,
});
export default function ResearchPaper() {
    const ref = useRef(null);
    const nearViewport = useInView(ref, { once: true, margin: "150px" });
    const reduced = useReducedMotion();
    const [revision, setRevision] = useState(0);
    return (<figure ref={ref} className="research-paper-figure">
      <div className="paper-stage">
        <span className="paper-stage-orbit" aria-hidden="true"/>
        <div className="research-paper-frame">
          {nearViewport && !reduced ? (<CrumpledPaperReveal key={revision} image={{ src: image, alt: description }} alt={description} trigger="inView" replay={false} fold="thirds" shape={3} ratio="4:5" paper="#f6f4ee" border="0px" radius="2px" creases={32} finish="matte" light={28} ballSize={95} shadow="rgba(31, 49, 63, 0.16)" focusColor="#284f87" transition={{ type: "tween", duration: 1.9, ease: [0.22, 0.05, 0.2, 1] }} style={{ width: "100%", height: "100%" }}/>) : <PaperPreview />}
        </div>
      </div>
      <figcaption>
        <span>From a first idea to a clear plan.</span>
        {!reduced && (<button type="button" className="paper-replay" onClick={() => setRevision(value => value + 1)} aria-label="Replay the research brief unfolding animation">
            <RotateCcw size={13} aria-hidden="true"/> Replay
          </button>)}
      </figcaption>
    </figure>);
}
