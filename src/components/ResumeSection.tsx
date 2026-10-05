import { Download } from 'lucide-react';

const JOB_TITLE = 'Software Development Analyst'; 
const OPTUM_PERIOD = '[Mar 2024] - [Sep 2024]'; 
const ECU_BEFORE = '[3 hours]'; 
const ECU_AFTER = '[40 minutes]'; 

const experience = [
  {
    title: 'Agentic AI RCA Platform',
    meta: 'Aug 2025 - Present | Mercedes-Benz',
    subtitle: 'Agentic AI, RAG and Machine Learning',
    bullets: [
      'Built an agentic defect triage and root cause analysis platform across 100+ defect areas using LangGraph, with Coordinator, Domain and Specialist agents, task contracts, retries, schema validation and human-in-the-loop review.',
      'Raised defect routing accuracy from 82 to 96 percent with TF-IDF, SVD and XGBoost, and relevant-log recall from 78 to 94 percent with DLT and CAN parsing, hybrid retrieval and reranking (internal evaluation).',
      'Raised expert acceptance of RCA recommendations from 72 to 90 percent with evidence-grounded RAG, validation checks, consensus logic and guardrails.',
      'Cut average initial triage time from 45 to under 8 minutes by containerizing services with Docker, automating tests and adding MLflow and Langfuse observability.',
    ],
  },
  {
    title: 'Enterprise RAG Application',
    meta: `${OPTUM_PERIOD} | Optum | Development phase`,
    subtitle: 'RAG and LLM Application Engineering',
    bullets: [
      'Contributed to an enterprise RAG application over 10K+ documents, building ingestion with Unstructured, intelligent chunking, metadata enrichment and FAISS HNSW vector search.',
      'Designed hybrid vector and keyword retrieval with Cross-Encoder and Cohere reranking, improving top-k relevance by about 25 percent, and added HyDE and query-aware retrieval.',
      'Built the LangChain and FastAPI serving layer with Langfuse tracing and guardrails.',
    ],
  },
  {
    title: 'ECU Flashing Automation',
    meta: 'Apr 2025 - Aug 2025 | Mercedes-Benz',
    subtitle: 'Embedded Systems and Automation',
    bullets: [
      'Automated ECU flashing and recovery workflows in Python, reducing flash time from ' +
        ECU_BEFORE +
        ' to ' +
        ECU_AFTER +
        '.',
      'Designed recovery workarounds for defective ECU units across multiple variants and markets.',
      'Performed defect root cause analysis, ownership-based routing and technical mentoring across automotive QA workflows.',
    ],
  },
  {
    title: 'AAOS AI Test Automation (R&D)',
    meta: 'Dec 2023 - Apr 2025 | Mercedes-Benz',
    subtitle: 'AI-Driven Test Automation',
    bullets: [
      'Built an AI-assisted test framework with Python, Appium and Pytest that converts natural language requirements into executable tests.',
      'Prototyped ML-based failure prediction from historical execution data and self-healing locators using UI changes and ADB diagnostics.',
      'Ran R&D experiments on prompt strategies and requirement decomposition, and documented trade-offs for adoption in automotive validation.',
    ],
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 md:px-8 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <h2 className="section-title">Resume</h2>
          <a
            href="https://drive.google.com/file/d/10gEj-gYe7LgoBPTmZS5L3gXUWO80zCBD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Summary</h3>
          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-primary mb-3">Amreet Nanda</h4>
            <p className="text-muted-foreground italic mb-4">
              AI/ML Engineer with 3+ years of experience building agentic AI, RAG and machine
              learning systems. Skilled in LangGraph multi-agent orchestration, hybrid retrieval,
              XGBoost classification and MLOps with Docker, MLflow and Langfuse. Focused on
              measurable, evidence-grounded, production-ready AI.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>
            <div className="space-y-0">
              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">
                  Bachelor of Technology (B.Tech) in Computer Science and Engineering
                </h4>
                <p className="text-primary text-sm mb-2">2019 - 2023</p>
                <p className="text-muted-foreground italic mb-2">
                  Siksha 'O' Anusandhan University (SOA), Bhubaneswar, India
                </p>
                <p className="text-muted-foreground text-sm">CGPA: 9.6/10</p>
                <p className="text-muted-foreground text-sm">
                  Relevant Coursework: OOP, Data Structures, Algorithms, Computer Networks, DBMS
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Certifications</h2>
            <div className="space-y-0">
              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">Reinvention with Agentic AI</h4>
                <p className="text-primary text-sm mb-2">Accenture | Jul 2026</p>
                <a
                  href="https://www.credly.com/badges/3e4a6a75-3196-4d5a-adf9-1910dd1ee512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm underline hover:text-foreground"
                >
                  View credential
                </a>
              </div>
              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">
                  AWS Partner: Generative AI Technical
                </h4>
                <p className="text-primary text-sm mb-2">Amazon Web Services | May 2026</p>
                <a
                  href="https://www.credly.com/badges/d8067d1d-ce8d-41c8-9aa9-c8ae4516c020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm underline hover:text-foreground"
                >
                  View credential
                </a>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Professional Experience</h2>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Accenture | {JOB_TITLE}
            </h3>
            <p className="text-primary text-sm mb-6">Sep 2023 - Present</p>
            <div className="space-y-0">
              {experience.map((item) => (
                <div key={item.title} className="timeline-item">
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-primary text-sm mb-2">{item.meta}</p>
                  <p className="text-muted-foreground italic mb-2">{item.subtitle}</p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
