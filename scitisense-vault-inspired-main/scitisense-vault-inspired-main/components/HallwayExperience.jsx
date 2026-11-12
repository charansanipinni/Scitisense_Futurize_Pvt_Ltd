"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Hallway from "./framer/Hallway";
import { BRAND } from "@/lib/theme";
const mediaQuery = "(min-width: 1100px) and (min-height: 700px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
function subscribe(listener) {
    const media = window.matchMedia(mediaQuery);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
}
const cards = [
    { title: "Computer vision", meta: "Intelligence, in focus.", link: "/services#computer-vision", image: { src: "/framer/hallway-vision.svg", alt: "A scientific illustration of an eye and a visual detection frame." } },
    { title: "Connected systems", meta: "The physical. Connected.", link: "/services#iot-wearable", image: { src: "/framer/hallway-sensing.svg", alt: "A central sensor connected to a network of devices." } },
    { title: "Agentic AI", meta: "From thinking to doing.", link: "/services#agentic-ai", image: { src: "/framer/hallway-agents.svg", alt: "An intelligent system coordinating a network of tasks." } },
];
export function useHallwayMotion() {
    return useSyncExternalStore(subscribe, () => window.matchMedia(mediaQuery).matches, () => true);
}
export default function HallwayExperience() {
    // SSR includes a still room. CSS selects the matching mobile/static gallery
    // before hydration; narrow screens never start the WebGL engine.
    const immersive = useHallwayMotion();
    const galleryRef = useRef(null);
    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery || !window.matchMedia("(max-width: 1099px) and (prefers-reduced-motion: no-preference)").matches || !('IntersectionObserver' in window)) return;
        const cards = gallery.querySelectorAll('.hallway-static-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
        gallery.classList.add('reveal-ready');
        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);
    return <section className="hallway-experience" id="research-gallery" aria-label="Explore Scitisense research">
    <div className="hallway-toolbar">
      <span>RESEARCH, IN PERSPECTIVE</span>
      <a href="#after-hallway">Skip gallery <ArrowDown size={14} aria-hidden="true"/></a>
    </div>
    <div className="hallway-live">
      {immersive && <Hallway cards={cards} intro={{ heading: "Step into possibility.", text: "Explore three ways our research connects scientific thinking to the world around us.", label1: "", link1: "", label2: "Continue to the website", link2: "#after-hallway" }} ending={{ title: "From possibility to progress.", text: "A question becomes a prototype. A prototype becomes something people can use.", label: "", link: "", image: { src: "/framer/hallway-horizon.svg", alt: "An abstract pathway linking research, prototyping and real-world impact." } }} colors={{ intro: BRAND.page, captions: BRAND.page, light: BRAND.hero, ending: BRAND.ink }} motion={{ focus: 38, parallax: 12 }} layout={{ spread: 105, tilt: 7 }} fonts={{ heading: { fontFamily: "var(--font-geist-sans), Arial, sans-serif", fontSize: 52, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: "1.06em" }, text: { fontFamily: "var(--font-geist-sans), Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: "1.7em" } }} styling={{ radius: "8px", shadow: "0 20px 55px -25px rgba(0, 10, 25, 0.55)" }} style={{ width: "100%", height: "300svh" }}/>}
    </div>
    <div className="hallway-static" ref={galleryRef}>
      <div className="hallway-static-heading"><span className="eyebrow">APPLIED INTELLIGENCE</span><h2>Step into possibility.</h2><p>Scientific thinking. Three perspectives on a more intelligent world.</p></div>
      <div className="hallway-static-cards">{cards.map(card => <Link key={card.title} href={card.link} className="hallway-static-card"><Image src={card.image.src} alt={card.image.alt} width={800} height={1000}/><div><span><strong>{card.title}</strong><small>{card.meta}</small></span><ArrowUpRight size={19} aria-hidden="true"/></div></Link>)}</div>
    </div>
    <noscript><style>{".hallway-experience .hallway-live{display:none!important}.hallway-experience .hallway-static{display:block!important}.hero-composition .hero-introduction{position:relative!important;height:auto!important;padding-top:140px!important;background:#08121e!important}.hero-composition .hero-copy{width:100%!important;max-width:650px!important;margin-inline:auto!important;text-align:center}.hero-composition .hero-actions{justify-content:center!important}.hero-composition .hallway-toolbar{position:relative!important;top:auto!important}"}</style></noscript>
    <div id="after-hallway" className="hallway-exit" tabIndex={-1}/>
  </section>;
}
