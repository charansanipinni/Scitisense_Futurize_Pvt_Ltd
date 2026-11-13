import Link from "next/link";
import { ArrowUpRight, Cpu, FlaskConical, Layers } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import CareerInterest from "./CareerInterest";
import InterestLink from "./InterestLink";
import styles from "./careers.module.css";

export const metadata = { title: "Careers" };

const benefits = [
  [Cpu, "Hands-on engineering", "Connect algorithms, embedded hardware and software prototypes with practical applications."],
  [FlaskConical, "Research-driven thinking", "Explore technical literature, validate hypotheses, document experiments and improve solutions."],
  [Layers, "Product mindset", "Understand usability, reliability, deployment constraints and the journey from prototype to product."],
];
const domains = [
  ["AI", "AI & Machine Learning", "Predictive modelling, model evaluation, data pipelines, explainable AI and applied deep learning."],
  ["CV", "Computer Vision", "Image understanding, video analytics, vision transformers and efficient edge inference."],
  ["IoT", "Embedded Systems & IoT", "ESP32, sensor integration, firmware, wireless connectivity and intelligent device prototypes."],
  ["+", "MedTech & Wearables", "Human-centred sensing, gait intelligence, health monitoring and responsible prototyping."],
  ["{ }", "Software Engineering", "Web applications, APIs, cloud deployment, testing, observability and secure engineering."],
  ["R&D", "Research & Innovation", "Experimental design, technical writing, prototype validation and startup-oriented product discovery."],
];
const faqs = [
  ["Are the pathways listed here currently open vacancies?", "No. They are illustrative areas of interest. The company must separately confirm any active vacancy, position details and application deadlines."],
  ["Are internships AICTE-approved or credit-bearing?", "No approval or credit recognition is claimed here. Any institutional recognition, internship duration, mentorship, certification or credit arrangement must be confirmed through the relevant institution and company."],
  ["Does submitting the form send an application automatically?", "No. It prepares a draft in your default email application addressed to our company contact inbox. Review the message and send it yourself."],
  ["Can I attach my resume?", "You can attach your resume manually in your email application after the draft opens. This webpage does not receive or store files."],
  ["Are stipends, salaries and remote options available?", "Compensation, work location, mode and other terms are not specified and should be confirmed for each formally advertised opportunity."],
];

export default function CareersPage() {
  return (
    <main className={styles.page}>
      <section className={`careers-heading ${styles.hero}`} data-hero-reveal aria-labelledby="careers-title">
        <HeroBackground />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>Research · Engineering · Innovation</span>
            <h1 id="careers-title">Your curiosity.<br /><span>Our next chapter.</span></h1>
            <p>Explore a future in applied artificial intelligence, intelligent connected devices, computer vision and product-focused research with Scitisense Futurize Pvt. Ltd., Visakhapatnam.</p>
            <div className={styles.actions}>
              <a href="#opportunities" className={styles.primary}>Explore Career Pathways <ArrowUpRight size={18} /></a>
              <InterestLink className={styles.outline}>Submit Your Interest</InterestLink>
            </div>
          </div>
          <aside className={styles.researchPanel} aria-label="Our approach to applied research">
            <div className={styles.panelHeading}><span>THE SCITISENSE APPROACH</span><FlaskConical size={20} aria-hidden="true" /></div>
            <h2>Good questions.<br />Working technology.</h2>
            <p>Bring your curiosity to the space between research and real-world engineering.</p>
            <div className={styles.researchStages}>
              {[["01", "Investigate", "Understand the problem. Explore the evidence."], ["02", "Prototype", "Connect models, software and intelligent devices."], ["03", "Refine", "Test assumptions. Learn from what works."]].map(([number, title, copy]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
            </div>
            <div className={styles.panelFoot}><span>APPLIED AI</span><span>CONNECTED SYSTEMS</span><span>R&D</span></div>
          </aside>
        </div>
      </section>
      <nav className={styles.sectionNav} aria-label="Careers sections">
        <a href="#why-join">Why Join Us</a><a href="#domains">Research Domains</a><a href="#opportunities">Opportunities</a><a href="#faq">FAQ</a><InterestLink>Express Interest <ArrowUpRight size={15} /></InterestLink>
      </nav>
      <section id="why-join" className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>Why Scitisense</span><h2>A place for people who <span>ask, build and improve.</span></h2><p>Our career pathways are designed around practical problem-solving, interdisciplinary collaboration and continuous learning.</p></div>
          <div className={styles.cards}>{benefits.map(([Icon, title, copy]) => <article className={styles.card} key={title}><div className={styles.icon}><Icon size={23} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <section id="domains" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>Our focus areas</span><h2>Explore our technology domains</h2><p>Potential learning and project areas across software, hardware and multidisciplinary R&amp;D.</p></div>
          <div className={styles.cards}>{domains.map(([icon, title, copy]) => <article className={styles.card} key={title}><div className={styles.icon} aria-hidden="true">{icon}</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <CareerInterest />
      <section id="faq" className={`${styles.section} ${styles.tinted}`}>
        <div className={`${styles.container} ${styles.faq}`}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>Frequently asked questions</span><h2>Before you reach out</h2></div>
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}><div className={styles.cta}><span className={styles.eyebrow}>Build · Research · Innovate</span><h2>Your ideas could shape what comes next.</h2><p>Explore research-oriented career pathways and share your interests with Scitisense Futurize.</p><div className={styles.actions}><InterestLink className={styles.primary}>Express Your Interest <ArrowUpRight size={18} /></InterestLink><Link className={styles.outline} href="/careers/internships">Explore our internship program <ArrowUpRight size={18} /></Link></div></div></div>
      </section>
    </main>
  );
}
