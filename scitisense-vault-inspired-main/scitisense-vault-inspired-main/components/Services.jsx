"use client";
import Link from "next/link";
import { ArrowUpRight, ScanLine, Wifi, Brain, MessageSquare, Sparkles, Bot } from "lucide-react";
import { motion } from "motion/react";
const items = [
    { slug: "computer-vision", name: "A new way to see.", label: "COMPUTER VISION", copy: "From medical imaging to smarter factories. We help machines understand the visual world.", icon: ScanLine, visual: "vision" },
    { slug: "iot-wearable", name: "Connect the dots.", label: "IoT & WEARABLE SENSORS", copy: "Bring the physical and digital together with intelligent sensing and embedded AI.", icon: Wifi, visual: "sensors" },
    { slug: "ml-dl", name: "Find the signal.", label: "MACHINE & DEEP LEARNING", copy: "Turn complex data into patterns, predictions, and decisions you can act on.", icon: Brain, visual: "learning" },
    { slug: "nlp-llm", name: "Make language work.", label: "NLP & LARGE LANGUAGE MODELS", copy: "Knowledge systems that understand your domain, your documents, and your questions.", icon: MessageSquare, visual: "language" },
    { slug: "generative-ai", name: "Imagine. Then create.", label: "GENERATIVE AI", copy: "Explore new possibilities with purpose-built generative models and creative tools.", icon: Sparkles, visual: "generative" },
    { slug: "agentic-ai", name: "Intelligence in action.", label: "AGENTIC AI", copy: "Build coordinated AI workflows that move from understanding to doing.", icon: Bot, visual: "agents" },
];
export default function Services() {
    return <section className="expertise-section section-shell" id="expertise">
  <div className="section-heading"><span className="eyebrow">OUR EXPERTISE</span><h2>Less complexity.<br />More <span className="muted-blue">possibility.</span></h2><p>Deep research. Practical technology.<br />The right expertise to take your ideas further.</p></div>
  <div className="expertise-grid">{items.map((item, i) => <motion.div key={item.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .6, delay: i % 3 * .08 }}><Link href={`/services#${item.slug}`} className={`expertise-card expertise-${item.visual}`}>
    <div className="expertise-card-top"><span className="micro-label">{item.label}</span><span className="card-arrow"><ArrowUpRight size={20}/></span></div>
    <h3>{item.name}</h3><p>{item.copy}</p>
    <div className={`capability-visual visual-${item.visual}`} aria-hidden="true">
     <div className="capability-orbit"/><div className="capability-orbit second"/><div className="capability-core"><item.icon size={38} strokeWidth={1.2}/></div>
     <span className="capability-chip chip-one">{["Object detection", "Sensor fusion", "Predictive models", "Knowledge retrieval", "New possibilities", "Plan / Act"][i]}</span><span className="capability-chip chip-two"><span className="status-dot"/> Applied intelligence</span>
    </div><span className="card-bottom">Explore research area <ArrowUpRight size={15}/></span>
  </Link></motion.div>)}</div>
  <div className="section-bottom"><p>One team. A full spectrum of research and technology.</p><Link className="text-link" href="/services">All services & research areas <ArrowUpRight size={17}/></Link></div>
 </section>;
}
