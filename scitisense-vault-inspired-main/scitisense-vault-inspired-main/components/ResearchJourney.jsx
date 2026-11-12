"use client";
import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Plus, Minus, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { CounterFX, HalftoneHands, ParticleText } from "./TemplateMotion";
import CMSSliderPro from "./framer/CMSSliderPro";
import GlassButton from "./GlassButton";
export function ResearchStats() {
    return <section className="stats-section section-shell" aria-label="Scitisense at a glance">{[{ value: 18, suffix: "+", label: "Projects delivered" }, { value: 5, suffix: "+", label: "Industry clients" }, { value: 4, suffix: "+", label: "Workshops conducted" }, { value: 8, suffix: "+", label: "Industries served" }].map(s => <div key={s.label}><CounterFX value={s.value} suffix={s.suffix}/><span>{s.label}</span></div>)}</section>;
}
const steps = [{ label: "START WITH A QUESTION", title: "Understand the challenge.", copy: "We listen first. Together, we define the problem, explore the evidence, and set a clear direction.", detail: "A shared understanding", tags: ["Discovery", "Research scope", "Success criteria"] }, { label: "MAKE THE IDEA TANGIBLE", title: "Research. Build. Refine.", copy: "Rigorous experimentation meets hands-on engineering. We turn the right idea into a working prototype.", detail: "From possibility to prototype", tags: ["Experimentation", "Development", "Validation"] }, { label: "TAKE IT INTO THE WORLD", title: "Put progress to work.", copy: "Move from prototype to practical impact, with deployment, documentation, and knowledge transfer.", detail: "Built for what comes next", tags: ["Deployment", "Technology transfer", "Ongoing support"] }];
export function ResearchProcess() {
    const [active, setActive] = useState(0);
    const step = steps[active];
    return <section className="process-section section-shell" aria-labelledby="process-title"><div className="section-heading"><span className="eyebrow">HOW WE WORK</span><h2 id="process-title">Big ambitions.<br />Three <span className="muted-blue">clear steps.</span></h2><p>A thoughtful process, from the first conversation<br />to the technology you put into the world.</p></div>
  <div className="process-tabs" role="tablist" aria-label="Our process">{steps.map((s, i) => <button key={s.label} id={`step-tab-${i}`} role="tab" aria-selected={active === i} aria-controls="process-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const next = (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
        setActive(next);
        document.getElementById(`step-tab-${next}`)?.focus();
    } }} className={active === i ? "active" : ""}><span>0{i + 1}</span>{["Discover", "Develop", "Deliver"][i]}</button>)}</div>
  <div className="process-panel" role="tabpanel" id="process-panel" aria-labelledby={`step-tab-${active}`}><motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} className="process-copy"><span className="micro-label">STEP 0{active + 1} / {step.label}</span><h3>{step.title}</h3><p>{step.copy}</p></motion.div><div className="process-illustration"><div className="process-sheet"><span className="micro-label">THE SCITISENSE APPROACH</span><h4>{step.detail}</h4>{step.tags.map((tag, i) => <motion.div key={tag} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .1 }}><span className="check-circle"><Check size={15}/></span>{tag}<span>0{i + 1}</span></motion.div>)}<div className="sheet-footer"><span>Clarity at every stage.</span><ArrowRight size={18}/></div></div></div></div>
 </section>;
}
const reasons = [{ title: "Innovation first.", type: "RECOGNIZED TO BUILD", copy: "Recognized by DPIIT and Startup India for our unique contributions to the industry.", mark: "01" }, { title: "Trust, built in.", type: "A PROFESSIONAL PARTNER", copy: "Registered with MCA and MSME, with the care and accountability your work deserves.", mark: "02" }, { title: "Different minds. One team.", type: "MULTIDISCIPLINARY EXPERTISE", copy: "From the laboratory bench to the cloud, our expertise spans scientific R&D and HealthTech.", mark: "03" }, { title: "Agile by nature.", type: "IDEAS INTO EXECUTION", copy: "The agility of a startup, with the focus and reliability of a certified enterprise.", mark: "04" }];
const subscribeCompact = (listener) => {
    const media = window.matchMedia("(max-width: 600px)");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
};
export function WhyScitisense() {
    const compact = useSyncExternalStore(subscribeCompact, () => window.matchMedia("(max-width: 600px)").matches, () => false);
    return <section className="why-section section-shell"><div className="section-heading"><span className="eyebrow">WHY SCITISENSE</span><h2>A little curiosity.<br />A lot of <span className="muted-blue">commitment.</span></h2><p>The foundations behind every partnership.</p></div><div className="reasons-slider" aria-label="Reasons to work with Scitisense"><CMSSliderPro content={reasons.map(r => <article className="reason-card" key={r.mark}><span className="reason-number">{r.mark}</span><span className="micro-label">{r.type}</span><h3>{r.title}</h3><p>{r.copy}</p><span className="reason-signature">scitisense futurize <span aria-hidden="true">&#8599;</span></span></article>)} layout={{ items: compact ? 1 : 2, gap: 20, padding: 4 }} arrows={{ show: true, type: "Grouped", alignment: "Bottom Right", fill: "#172b3a", backdrop: "#ffffff", size: 46, inset: 0, offsetY: 8 }} dots={{ type: "Dots", alignment: "Bottom Left", activeFill: "#284f87", fill: "#a5b5c0", backdrop: "transparent", inset: 0, padding: 10 }} navigation={{ keyboard: true, draggable: true }} style={{ width: "100%", height: "auto" }}/></div></section>;
}
const faqs = [{ q: "What can we build together?", a: "We work across computer vision, IoT and wearable sensors, machine learning, NLP and LLMs, generative AI, agentic AI, and Medical IT. We also offer training, consultancy, and enterprise technology services." }, { q: "Do you collaborate with universities and research labs?", a: "Yes. We partner with universities, research labs, and enterprises on joint R&D projects and technology transfer. Use our contact page to share a research proposal." }, { q: "Can you take an idea from research to deployment?", a: "Our services span research, prototype and model development, deployment, performance benchmarking, documentation, and knowledge transfer. The scope is tailored to your project." }, { q: "How do we get started?", a: "Tell us about your challenge through our contact page, by email, or by phone. We'll discuss your goals and help define the right next step." }];
export function ResearchFAQ() {
    const [open, setOpen] = useState(0);
    return <section id="faq" className="faq-section section-shell" aria-label="Frequently asked questions"><div><span className="eyebrow">A LITTLE MORE CLARITY</span><h2>Good questions.<br /><span className="muted-blue">Clear answers.</span></h2><p>Have something else in mind?</p><Link className="text-link" href="/contact">Let&apos;s talk <ArrowUpRight size={17}/></Link></div><div className="faq-list">{faqs.map((f, i) => <div className={`faq-item ${open === i ? "is-open" : ""}`} key={f.q}><h3><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-answer-${i}`}>{f.q}{open === i ? <Minus size={18}/> : <Plus size={18}/>}</button></h3><div id={`faq-answer-${i}`} className="faq-answer" hidden={open !== i}><p>{f.a}</p></div></div>)}</div></section>;
}
export function ResearchCTA() {
    return (
        <section className="research-cta">
            <div className="cta-copy">
                <span className="eyebrow">LET&apos;S MAKE SOMETHING MATTER</span>
                <h2>Your next idea.<br />Our shared <span className="muted-blue">possibility.</span></h2>
                <p>Bring us the challenge. Let&apos;s build what comes next.</p>
                <div className="cta-conversation">
                    <div className="cta-art"><HalftoneHands /></div>
                    <GlassButton href="/contact" label="Start a conversation" variant="primary" />
                </div>
            </div>
            <ParticleText />
        </section>
    );
}
