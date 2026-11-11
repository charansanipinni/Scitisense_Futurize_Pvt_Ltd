// Original editorial copy; supporting references and image provenance are recorded below.
export const programDetails = {
  "training-workshops": {
    photo: "training-photo.webp",
    alt: "A participant working on a laptop during a collaborative design session",
    photographer: "Headway",
    photoUrl: "https://unsplash.com/photos/man-sitting-in-front-of-laptop-NWmcp5fE_4M",
    title: "A model is only the beginning.",
    description: "A useful learning exercise connects an idea to a result you can inspect. Short explanations, guided practice and discussion help participants work through the reasoning behind each decision.",
    exampleTitle: "Example lab: can your model handle new data?",
    exampleText: "Build a small image classifier, evaluate it on unseen examples, then inspect where it fails. Discuss how lighting, background and data quality can affect the result. The goal is a clear explanation of the model's limits as well as a working notebook.",
    outputs: ["An experiment notebook with setup instructions", "A comparison of predictions and observed errors", "A short explanation of what to try next"],
    questions: [
      ["Can a session work for beginners?", "Share the group's existing coding and subject knowledge when you enquire. The proposed exercises, setup requirements and starting level can then be agreed before the workshop."],
      ["Can we bring our own project idea?", "Yes. Describe the learning objective and the kind of data involved. Use a public or synthetic sample for the first conversation; any access requirements can be discussed separately."],
      ["What should we confirm before booking?", "Agree the topic, participant level, equipment, delivery format, duration and expected outputs. Fees and availability are discussed with the team."],
    ],
    sources: [
      { label: "The Carpentries · Teaching through practice", url: "https://carpentries.org/learner-centered-teaching/", note: "Background on short lessons, practical work and learner participation." },
      { label: "Google · Evaluating on unseen data", url: "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets", note: "Why training, validation and final testing need distinct examples." },
    ],
  },
  "consultancy-services": {
    photo: "consultancy-photo.webp",
    alt: "An engineer reviewing a circuit schematic and a three-dimensional board design",
    photographer: "EnCata PD",
    photoUrl: "https://unsplash.com/photos/man-looking-at-circuit-board-design-on-computer-screen-ZmDk8tXQRS0",
    title: "Think beyond a successful demo.",
    description: "Before a pilot grows into an operational system, there are decisions to make about data access, evaluation, human review and ongoing monitoring. Our consultancy conversations bring those questions into the plan early.",
    exampleTitle: "Example brief: an internal knowledge assistant",
    exampleText: "Start with a narrow set of approved documents and representative questions. Compare answer quality, source traceability, response time and operating cost. Define when a person should review an answer and what evidence would justify a wider rollout.",
    outputs: ["A problem brief with assumptions and constraints", "An evaluation plan with decision criteria", "A phased roadmap with ownership and review points"],
    questions: [
      ["What should we share in the first conversation?", "Describe the users, the problem, what you have already tried and the decision you need to make. A high-level description of available data and existing systems is enough to start."],
      ["Can you review work already in progress?", "Technical review can be discussed as a focused engagement. Identify the architecture, prototype or research question that needs a second perspective so the review has a clear boundary."],
      ["How is the engagement defined?", "We discuss the scope, deliverables, responsibilities and acceptance criteria before work begins. Implementation, deployment and ongoing support should be explicitly included when needed."],
    ],
    sources: [
      { label: "NIST · AI Risk Management Framework", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/", note: "Context, evaluation and continued risk management throughout an AI system's life." },
      { label: "Google · Representative evaluation data", url: "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets", note: "Testing should reflect the data a model will encounter in use." },
    ],
  },
  internships: {
    photo: "internship-photo.webp",
    alt: "Breadboard circuits, test leads and a multimeter on an electronics workbench",
    photographer: "Nicolas Thomas",
    photoUrl: "https://unsplash.com/photos/electronic-circuit-boards-near-tester-3GZi6OpSDcY",
    title: "Make your thinking visible.",
    description: "Meaningful research experience involves contributing to a question and understanding the work behind a result. A useful project record explains the approach, the evidence and the questions still open.",
    exampleTitle: "Example project: understanding a sensor signal",
    exampleText: "Explore a public sensor dataset, identify missing or noisy readings and compare a simple baseline with an alternative approach. Keep the experiment reproducible and explain what the results can—and cannot—support.",
    outputs: ["A focused research question and reading notes", "Reproducible code or an experiment record", "A concise demonstration with findings and limitations"],
    questions: [
      ["Are these advertised internship openings?", "These are illustrative project directions. Contact the team for current availability, eligibility, format and duration before making plans."],
      ["What can I include in an expression of interest?", "Introduce your course or background, the topics you enjoy and your availability. A small project, notebook, portfolio or short research summary can help explain your interests."],
      ["Are certificates, stipends or placements included?", "These details depend on the specific opportunity and must be confirmed in its written terms. This page does not promise a stipend, certificate, publication or job placement."],
    ],
    sources: [
      { label: "NSF · Meaningful participation in research", url: "https://www.nsf.gov/funding/opportunities/reu-research-experiences-undergraduates", note: "Background on active student involvement in research; NSF program eligibility does not apply to this page." },
      { label: "Google · Separating experiments from evaluation", url: "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets", note: "A foundation for explaining model results and evaluation limitations." },
    ],
  },
};
