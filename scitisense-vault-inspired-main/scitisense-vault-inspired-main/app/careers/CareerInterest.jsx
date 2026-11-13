"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { openInterestForm } from "./InterestLink";
import styles from "./careers.module.css";

const pathways = [
  { category: "internship", title: "Applied AI / ML Internship", copy: "Explore dataset preparation, model training, testing and research documentation.", skill: "Python / ML" },
  { category: "internship", title: "Embedded IoT Internship", copy: "Explore sensors, ESP32 firmware, telemetry and connected-device prototyping.", skill: "C / C++ / IoT" },
  { category: "research", title: "Computer Vision Research Pathway", copy: "Investigate detection, segmentation, model benchmarking and deployment constraints.", skill: "PyTorch / OpenCV" },
  { category: "research", title: "MedTech & Wearables R&D Pathway", copy: "Explore multi-sensor data, wearable prototypes and responsible evaluation methods.", skill: "Sensors / Data" },
  { category: "engineering", title: "Full-Stack Software Engineering Pathway", copy: "Explore frontend development, API design, databases and reliable web applications.", skill: "React / APIs" },
  { category: "engineering", title: "Edge AI Engineering Pathway", copy: "Explore optimized inference, sensor pipelines, device integration and field testing.", skill: "Edge AI / Embedded" },
];
const filters = [["all", "All pathways"], ["internship", "Internships"], ["research", "Research"], ["engineering", "Engineering"]];

export default function CareerInterest() {
  const [filter, setFilter] = useState("all");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const visible = pathways.filter((pathway) => filter === "all" || pathway.category === filter);

  function chooseRole(event, title) {
    setRole(title);
    setStatus("");
    openInterestForm(event);
  }

  function prepareEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key) => String(data.get(key) || "").trim();
    const subject = `Career interest: ${get("role")}`;
    const body = `Hello Scitisense Futurize Team,\n\nI would like to express my interest in a career pathway.\n\nName: ${get("fullName")}\nEmail: ${get("email")}\nPhone: ${get("phone") || "Not provided"}\nArea of interest: ${get("role")}\nPortfolio: ${get("portfolio") || "Not provided"}\n\nIntroduction:\n${get("message")}\n\nRegards,\n${get("fullName")}`;
    setStatus("Your email draft is ready to open. Review it in your email app and send it yourself; this webpage does not confirm delivery.");
    window.location.href = `mailto:info@scitisensefuturize.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <>
    <section id="opportunities" className={`${styles.section} ${styles.tinted}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}><span className={styles.eyebrow}>Career pathways</span><h2>Find your place in the work</h2><p>Filter the example pathways below and express your interest in the area that matches your skills.</p></div>
        <div className={styles.notice}><strong>Illustrative pathways — not confirmed vacancies.</strong> These entries describe possible roles and learning tracks. They do not represent currently open, paid or approved positions. Availability, eligibility, duration, stipend and work arrangements must be confirmed by the company.</div>
        <div className={styles.filters} role="group" aria-label="Filter opportunities">{filters.map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
        <div className={styles.jobs}>{visible.map(({ title, copy, category, skill }) => <article className={styles.job} key={title}><div><h3>{title}</h3><p>{copy}</p><div className={styles.tags}><span>{category[0].toUpperCase() + category.slice(1)} pathway</span><span>{skill}</span><span>Availability to confirm</span></div></div><a href="#apply" className={styles.outline} onClick={(event) => chooseRole(event, title)} aria-label={`Express interest in ${title}`}>Express Interest <ArrowUpRight size={17} /></a></article>)}</div>
        <p className={styles.note} aria-live="polite">Showing {visible.length} illustrative pathways.</p>
      </div>
    </section>
    <section className={styles.section} aria-labelledby="interest-heading">
      <div className={`${styles.container} ${styles.twoCol}`}>
        <div>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>Express your interest</span><h2>Tell us what you want to build.</h2><p>Share your area of interest, relevant experience and portfolio. The form prepares an email for you to review and send.</p></div>
          <div className={styles.steps}>{[["Choose a pathway", "Select the technology domain or role that interests you."], ["Introduce your work", "Include a GitHub, LinkedIn or portfolio link and a concise project summary."], ["Send your email", "Review the prepared message in your email app and send it to our company contact inbox."]].map(([title, copy], index) => <div className={styles.step} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
          <p className={styles.note}>Company contact: <a href="mailto:info@scitisensefuturize.in">info@scitisensefuturize.in</a></p>
        </div>
        <div id="apply" className={styles.formCard}>
          <h3 id="interest-heading">Career Interest Form</h3><p>No information is uploaded or stored by this webpage.</p>
          {role && <p className={styles.selectedRole} role="status">Your interest: <strong>{role}</strong></p>}
          <form onSubmit={prepareEmail} aria-labelledby="interest-heading">
            <div className={styles.formGrid}>
              <div className={styles.field}><label htmlFor="career-name">Full name *</label><input id="career-name" name="fullName" required maxLength={100} autoComplete="name" placeholder="Your full name" /></div>
              <div className={styles.field}><label htmlFor="career-email">Email address *</label><input id="career-email" name="email" type="email" required maxLength={150} autoComplete="email" placeholder="you@example.com" /></div>
              <div className={styles.field}><label htmlFor="career-phone">Phone (optional)</label><input id="career-phone" name="phone" type="tel" maxLength={25} autoComplete="tel" placeholder="Your contact number" /></div>
              <div className={styles.field}><label htmlFor="career-role">Area of interest *</label><select id="career-role" name="role" required value={role} onChange={(event) => setRole(event.target.value)}><option value="">Select an area</option>{pathways.map(({ title }) => <option key={title}>{title}</option>)}<option>Other / General Enquiry</option></select></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="career-portfolio">Portfolio / GitHub / LinkedIn (optional)</label><input id="career-portfolio" name="portfolio" type="url" maxLength={300} placeholder="https://example.com/your-work" /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="career-message">Brief introduction *</label><textarea id="career-message" name="message" required maxLength={1500} placeholder="Tell us about your skills, relevant projects and interests..." /></div>
            </div>
            <p className={styles.help}>* Required. You can attach your resume in your email app after the draft opens.</p>
            <label className={styles.consent}><input type="checkbox" required /><span>I understand this is an expression of interest, not a job application confirmation, and I will review the email before sending.</span></label>
            <button className={styles.primary} type="submit">Prepare Application Email <ArrowUpRight size={18} /></button>
            <p className={styles.status} role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  </>;
}
