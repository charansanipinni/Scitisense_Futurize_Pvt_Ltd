import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { programDetails } from "@/lib/program-details";

const programs = {
  "training-workshops": {
    eyebrow: "LEARNING, MADE PRACTICAL",
    title: "Build the skills to make ideas real.",
    intro: "Technology becomes useful when people can work with it. Our training and workshop conversations start with your audience and end with something they can explain, test, or build.",
    image: "/programs/training-workshops.webp",
    alt: "Illustrative image of researchers learning together around a computer vision prototype",
    imageLabel: "LEARN / EXPERIMENT / APPLY",
    audience: "For students, researchers, educators and teams exploring new technical capabilities.",
    sectionLabel: "WHAT WE CAN EXPLORE",
    sectionTitle: "A workshop shaped around your next step.",
    sectionIntro: "Choose a starting point or bring us a challenge. Topics can be adapted to the experience level and goals of the group.",
    cards: [
      { number: "01", title: "AI & machine learning", text: "Move from model concepts to data preparation, experimentation, evaluation and practical limitations." },
      { number: "02", title: "Computer vision", text: "Explore image understanding through detection, classification and hands-on visual data exercises." },
      { number: "03", title: "IoT & wearable systems", text: "Connect sensors, embedded devices and data flows to a meaningful real-world use case." },
      { number: "04", title: "Generative & agentic AI", text: "Understand workflows, prompting, retrieval, evaluation and where human oversight matters." },
    ],
    journeyLabel: "HOW LEARNING TAKES SHAPE",
    journeyTitle: "Learn it. Try it. Take it forward.",
    steps: [
      { number: "01", title: "Set the learning goal", text: "We align the topic, audience and desired outcome before planning a session." },
      { number: "02", title: "Work through a challenge", text: "Guided examples and practical exercises make the ideas tangible." },
      { number: "03", title: "Leave with direction", text: "The group identifies useful next experiments, questions and resources." },
    ],
    ctaTitle: "Tell us what your group wants to learn.",
    ctaText: "Share the audience, topic and learning goal. We can discuss a suitable format together.",
    ctaLabel: "Discuss a workshop",
  },
  "consultancy-services": {
    eyebrow: "CONSULTANCY / FROM QUESTION TO DIRECTION",
    title: "See the next move more clearly.",
    intro: "When a technical opportunity is promising but the path is uncertain, we help connect the research, the constraints and the decisions. The aim is a direction your team can test and build on.",
    image: "/programs/consultancy-services.webp",
    alt: "Illustrative image of consultants discussing an AI and IoT system architecture",
    imageLabel: "THINK AHEAD / BUILD WITH PURPOSE",
    audience: "For organisations, research teams and product builders making consequential technology choices.",
    sectionLabel: "WHERE WE CAN HELP",
    sectionTitle: "Clarity for the decisions ahead.",
    sectionIntro: "We can join at the earliest question, during a technical review, or as an idea moves toward a prototype.",
    cards: [
      { number: "01", title: "Opportunity discovery", text: "Frame the problem, users, data and constraints before a technology choice becomes a commitment." },
      { number: "02", title: "AI feasibility", text: "Examine whether a proposed AI approach has the data, evaluation plan and operational fit to be worth testing." },
      { number: "03", title: "Architecture & roadmap", text: "Connect models, devices, integrations and people in a practical sequence of decisions and milestones." },
      { number: "04", title: "Prototype & technical review", text: "Pressure-test assumptions through a focused proof of concept, system review or independent technical perspective." },
    ],
    journeyLabel: "AN APPROACH THAT LOOKS FORWARD",
    journeyTitle: "From today’s question to tomorrow’s system.",
    steps: [
      { number: "01", title: "Understand the context", text: "We listen for the real objective, existing work, risks and the people affected by the solution." },
      { number: "02", title: "Make the trade-offs visible", text: "We compare viable approaches against evidence, effort, integration and long-term maintainability." },
      { number: "03", title: "Define the next experiment", text: "We turn the preferred direction into a testable plan, prototype brief or decision framework." },
    ],
    ctaTitle: "Have a complex question in front of you?",
    ctaText: "Tell us what you are trying to achieve and where the uncertainty sits. We will help identify a useful first conversation.",
    ctaLabel: "Start a consultancy conversation",
  },
  internships: {
    eyebrow: "EARLY CAREERS / REAL CURIOSITY",
    title: "Find out what you can make possible.",
    intro: "An internship should be a chance to ask better questions, work with real tools and communicate what you discover. We welcome interest from people who enjoy learning through thoughtful, practical work.",
    image: "/programs/internships.webp",
    alt: "Illustrative image of early-career researchers testing a wearable sensor prototype",
    imageLabel: "EXPLORE / CREATE / SHARE",
    audience: "For students and emerging researchers interested in AI, connected systems and applied research.",
    sectionLabel: "DIRECTIONS TO EXPLORE",
    sectionTitle: "Start with an area that sparks your curiosity.",
    sectionIntro: "These are examples of the kinds of problems that connect to our work; specific projects depend on available opportunities.",
    cards: [
      { number: "01", title: "Visual intelligence", text: "Investigate how image and video data can support useful, measurable decisions." },
      { number: "02", title: "Sensors & wearables", text: "Explore data collection, embedded systems and the journey from signal to insight." },
      { number: "03", title: "Language & generative AI", text: "Think about helpful AI workflows, careful evaluation and responsible use." },
      { number: "04", title: "Research to prototype", text: "Translate a question into an experiment, a working concept and a clear record of findings." },
    ],
    journeyLabel: "A WAY TO GROW",
    journeyTitle: "Curiosity becomes stronger through practice.",
    steps: [
      { number: "01", title: "Explore a question", text: "Learn the context and identify a focused problem worth investigating." },
      { number: "02", title: "Make and measure", text: "Try an approach, document decisions and learn from what the results show." },
      { number: "03", title: "Explain your work", text: "Share a prototype, research note or technical presentation that others can build on." },
    ],
    ctaTitle: "Interested in working with us?",
    ctaText: "Introduce yourself and your interests. We share format, eligibility and duration when an opportunity is available.",
    ctaLabel: "Get in touch",
  },
};

export default function ServiceProgram({ category }) {
  const program = programs[category];
  const detail = programDetails[category];
  if (!program) return null;

  return <main className="program-page" id={category}>
    <section className="program-intro" aria-labelledby={`${category}-title`}>
      <div className="program-intro-copy">
        <span className="program-kicker">{program.eyebrow}</span>
        <h2 id={`${category}-title`}>{program.title}</h2>
        <p className="program-lede">{program.intro}</p>
        <Link className="program-text-link" href="/contact">{program.ctaLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <figure className="program-photo">
      <div className="program-image-wrap">
        <Image src={`/programs/${detail.photo}`} alt={detail.alt} fill sizes="(max-width: 760px) 100vw, 50vw" className="program-image" />
        <span className="program-image-label">{program.imageLabel}</span>
      </div>
      </figure>
    </section>

    <div className="program-audience"><span>WHO IT IS FOR</span><p>{program.audience}</p></div>

    <section className="program-offerings" aria-labelledby={`${category}-offerings`}>
      <div className="program-section-heading">
        <span className="program-kicker">{program.sectionLabel}</span>
        <h2 id={`${category}-offerings`}>{program.sectionTitle}</h2>
        <p>{program.sectionIntro}</p>
      </div>
      <div className="program-offerings-grid">
        {program.cards.map(card => <article className="program-offering" key={card.number}>
          <span className="program-card-number">{card.number} / 04</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>)}
      </div>
    </section>

    <section className="program-journey" aria-labelledby={`${category}-journey`}>
      <div className="program-journey-heading">
        <span className="program-kicker">{program.journeyLabel}</span>
        <h2 id={`${category}-journey`}>{program.journeyTitle}</h2>
      </div>
      <div className="program-steps">
        {program.steps.map(step => <article className="program-step" key={step.number}>
          <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
        </article>)}
      </div>
    </section>

    <section className="program-practice" aria-labelledby={`${category}-practice`}>
      <div className="program-section-heading">
        <span className="program-kicker">FROM IDEAS TO EVIDENCE</span>
        <h2 id={`${category}-practice`}>{detail.title}</h2>
        <p>{detail.description}</p>
      </div>
      <div className="program-example">
        <div><span className="program-kicker">ILLUSTRATIVE PROJECT</span><h3>{detail.exampleTitle}</h3><p>{detail.exampleText}</p></div>
        <aside><span className="program-kicker">POSSIBLE OUTPUTS</span><ul>{detail.outputs.map(output => <li key={output}>{output}</li>)}</ul><p>Final scope and outputs are agreed for each engagement.</p></aside>
      </div>
      <div className="program-questions">
        <h3>Before we get started</h3>
        {detail.questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </div>
      <details className="program-references">
        <summary>Further reading &amp; references</summary>
        <p>Background resources for the concepts on this page. References do not imply affiliation or endorsement.</p>
        <ul>{detail.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} <ArrowUpRight size={14} aria-hidden="true" /></a><p>{source.note}</p></li>)}</ul>
      </details>
    </section>

    <section className="program-cta" aria-labelledby={`${category}-cta`}>
      <div><span className="program-kicker">LET’S TALK</span><h2 id={`${category}-cta`}>{program.ctaTitle}</h2><p>{program.ctaText}</p></div>
      <Link href="/contact" className="program-cta-link">{program.ctaLabel}<ArrowRight size={18} aria-hidden="true" /></Link>
    </section>
  </main>;
}
