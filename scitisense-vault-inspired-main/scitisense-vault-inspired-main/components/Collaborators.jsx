"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useIsStaticRenderer as useReducedMotion } from "./framer/runtime";

const collaborators = [
  { file: "nyeras.jpeg", name: "NYERAS" },
  { file: "swayam.jpeg", name: "Swayam IT Solutions" },
  { file: "monogram.jpeg", name: "Kaumodaki Information Technology Private Limited" },
  { file: "green-circuit.jpeg", name: "Kaumodaki NexusGrid Pvt. Ltd." },
  { file: "rise.jpeg", name: "RISE Technologies" },
];

export default function Collaborators() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const visible = useInView(sectionRef, { margin: "100px" });
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!visible || reducedMotion || hovered || focused) return;

    const viewport = viewportRef.current;
    const group = groupRef.current;
    let cycleWidth = 0;
    let position = viewport.scrollLeft;
    let previousTime;
    let frame;

    const measure = () => {
      const gap = parseFloat(getComputedStyle(group.parentElement).columnGap);
      cycleWidth = group.offsetWidth + gap;
    };
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    measure();

    const animate = time => {
      const elapsed = previousTime === undefined ? 0 : Math.min(time - previousTime, 40);
      previousTime = time;
      if (!document.hidden && cycleWidth > 0) {
        position = (position + elapsed * .025) % cycleWidth;
        viewport.scrollLeft = position;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [visible, reducedMotion, hovered, focused]);

  const scroll = direction => {
    const viewport = viewportRef.current;
    const step = groupRef.current.firstElementChild.getBoundingClientRect().width + 16;
    viewport.scrollBy({ left: direction * step, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <section ref={sectionRef} className="collaborators-section section-shell" aria-labelledby="collaborators-title">
      <div className="collaborators-heading">
        <div className="collaborators-intro">
          <span className="eyebrow">OUR COLLABORATORS</span>
          <h2 id="collaborators-title">Better ideas. <span className="muted-blue">Built together.</span></h2>
          <p>Connecting expertise to turn shared ideas into progress.</p>
        </div>
      </div>
      <div
        id="collaborator-logos"
        ref={viewportRef}
        className="collaborators-viewport"
        role="group"
        aria-label="Collaborator logos, use arrow keys to scroll"
        tabIndex={0}
        data-lenis-prevent
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => setFocused(event.currentTarget.contains(event.relatedTarget))}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            scroll(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="collaborators-track">
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} ref={duplicate ? undefined : groupRef} className="collaborators-group" aria-label={duplicate ? undefined : "Our collaborators"} aria-hidden={duplicate || undefined}>
              {collaborators.map(collaborator => (
                <li className="collaborator-card" key={collaborator.file}>
                  <Image src={`/collaborators/${collaborator.file}`} alt={duplicate ? "" : collaborator.name} width={200} height={144} sizes="200px" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
