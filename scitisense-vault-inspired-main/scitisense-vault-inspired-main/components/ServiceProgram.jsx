import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { programDetails } from "@/lib/program-details";
import WorkshopEnquiryButton from "./WorkshopEnquiryButton";

const programs = {
  "training-workshops": {
    sectionLabel: "TRAINING & WORKSHOPS",
    sectionTitle: "Explore our training programmes.",
    sectionIntro: "Choose a focus area. We shape the exercises around your group’s experience and learning goals.",
    cards: [
      {
        title: "IoT & IIoT",
        text: "Connect devices, collect useful data and explore industrial automation.",
        topics: [
          "Sensors, microcontrollers and device connectivity",
          "Cloud dashboards and real-time data",
          "Industrial monitoring and automation prototypes",
        ],
      },
      {
        title: "VLSI design & embedded systems",
        text: "Develop a practical foundation in digital hardware and embedded programming.",
        topics: [
          "Digital logic and hardware description languages",
          "Embedded programming and peripheral interfacing",
          "Simulation, testing and system integration",
        ],
      },
      {
        title: "PCB design",
        text: "Work from a circuit concept toward a board ready for prototyping.",
        topics: [
          "Schematic capture and component selection",
          "Board layout, routing and design checks",
          "Prototype assembly and circuit debugging",
        ],
      },
      {
        title: "Robotics",
        text: "Bring sensing, programming and motion together in working robotic systems.",
        topics: [
          "Sensors, actuators and motion control",
          "Robot programming and embedded integration",
          "Navigation and automation exercises",
        ],
      },
      {
        title: "Generative & explainable AI",
        text: "Build AI applications and explore how to interpret model outputs.",
        topics: [
          "Generative models and prompt design",
          "Retrieval-augmented AI applications",
          "Model interpretation and output evaluation",
        ],
      },
      {
        title: "Agentic AI",
        text: "Design AI workflows that plan tasks, use tools and coordinate actions.",
        topics: [
          "Tool use and multi-step task planning",
          "Building and coordinating AI workflows",
          "Testing, monitoring and human review",
        ],
      },
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
    eyebrow: "RESEARCH & CONSULTANCY",
    title: "Support for every stage of research.",
    intro: "From proposals and project implementation to IPR, books and conferences, we help researchers and institutions move their work forward.",
    image: "/programs/consultancy-services.webp",
    alt: "Illustrative image of consultants discussing an AI and IoT system architecture",
    imageLabel: "RESEARCH / DEVELOP / PUBLISH",
    audience: "For researchers, authors, academic institutions and organisations developing new ideas.",
    sectionLabel: "WHERE WE CAN HELP",
    sectionTitle: "Research, delivery and publication.",
    sectionIntro: "Focused support for preparing, implementing, protecting and sharing your work.",
    cards: [
      {
        title: "Research proposals & guidance",
        text: "Turn a research question into a clearly structured proposal.",
        topics: [
          "Problem framing and literature review guidance",
          "Objectives, methodology and work plans",
          "Proposal write-up, review and refinement",
        ],
      },
      {
        title: "Project implementation & collaboration",
        text: "Develop ideas through technical delivery and collaborative research.",
        topics: [
          "Prototype development and system integration",
          "Joint research and implementation planning",
          "Testing, documentation and knowledge sharing",
        ],
      },
      {
        title: "Patents & IPR filing",
        text: "Documentation and filing support for your intellectual property.",
        topics: [
          "Design patent filing support",
          "Utility patent documentation and filing support",
          "Copyright documentation and filing support",
        ],
      },
      {
        title: "Book publication & ISBN",
        text: "Support for preparing manuscripts and publishing books with ISBN.",
        topics: [
          "Manuscript structure and editorial coordination",
          "Book preparation and publication support",
          "ISBN coordination",
        ],
      },
      {
        title: "Conference collaboration",
        text: "Bring institutions and researchers together to share their work.",
        topics: [
          "Technical programme and theme planning",
          "Researcher and institutional collaboration",
          "Conference organisation and publication coordination",
        ],
      },
    ],
    journeyLabel: "HOW WE WORK TOGETHER",
    journeyTitle: "A clear plan for your next milestone.",
    steps: [
      { number: "01", title: "Discuss your objective", text: "Share your research area, current progress and the support you need." },
      { number: "02", title: "Define the scope", text: "Together, we agree the work, responsibilities, deliverables and schedule." },
      { number: "03", title: "Develop and review", text: "We work through the agreed milestones with regular review and clear documentation." },
    ],
    ctaTitle: "Move your research forward.",
    ctaText: "Tell us about your proposal, project, filing, book or conference and the support you need.",
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
  const isWorkshop = category === "training-workshops";

  return <main className="program-page" id={category}>
    {!isWorkshop && (
      <section className="program-intro" aria-labelledby={`${category}-title`}>
        <div className="program-intro-copy">
          <span className="program-kicker">{program.eyebrow}</span>
          <h2 id={`${category}-title`}>{program.title}</h2>
          <p className="program-lede">{program.intro}</p>
          <Link className="program-text-link" href="/contact">
            {program.ctaLabel}<ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <figure className="program-photo">
          <div className="program-image-wrap">
            <Image src={`/programs/${detail.photo}`} alt={detail.alt} fill sizes="(max-width: 760px) 100vw, 50vw" className="program-image" />
            <span className="program-image-label">{program.imageLabel}</span>
          </div>
        </figure>
      </section>
    )}

    {program.audience && (
      <div className="program-audience">
        <span>WHO IT IS FOR</span>
        <p>{program.audience}</p>
      </div>
    )}

    <section className="program-offerings" aria-labelledby={`${category}-offerings`}>
      <div className="program-section-heading">
        <span className="program-kicker">{program.sectionLabel}</span>
        <h2 id={`${category}-offerings`}>{program.sectionTitle}</h2>
        <p>{program.sectionIntro}</p>
      </div>
      <div
        className={`program-offerings-grid${
          isWorkshop || category === "consultancy-services"
            ? " program-offerings-grid-detailed"
            : ""
        }`}
      >
        {program.cards.map(card => (
          <article
            className={`program-offering${card.topics ? " program-offering-detailed" : ""}`}
            key={card.title}
          >
            {card.number && (
              <span className="program-card-number">{card.number} / 04</span>
            )}
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.topics && (
              <ul>
                {card.topics.map(topic => <li key={topic}>{topic}</li>)}
              </ul>
            )}
          </article>
        ))}
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
      {detail.sources.length > 0 && <details className="program-references">
        <summary>Further reading &amp; references</summary>
        <p>Background resources for the concepts on this page. References do not imply affiliation or endorsement.</p>
        <ul>{detail.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} <ArrowUpRight size={14} aria-hidden="true" /></a><p>{source.note}</p></li>)}</ul>
      </details>}
    </section>

    <section className="program-cta" aria-labelledby={`${category}-cta`}>
      <div><span className="program-kicker">LET’S TALK</span><h2 id={`${category}-cta`}>{program.ctaTitle}</h2><p>{program.ctaText}</p></div>
      {isWorkshop ? (
        <WorkshopEnquiryButton className="program-cta-link">{program.ctaLabel}</WorkshopEnquiryButton>
      ) : (
        <Link href="/contact" className="program-cta-link">{program.ctaLabel}<ArrowRight size={18} aria-hidden="true" /></Link>
      )}
    </section>
  </main>;
}
