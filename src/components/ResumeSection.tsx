import { Download } from 'lucide-react';

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
              Software Development Engineer with 2+ years of experience in AI-driven automation, NLP, and GenAI systems. Strong proficiency in Python, machine learning, LLM fine-tuning (LoRA/PEFT), and Retrieval-Augmented Generation (RAG). Experienced in building production-grade pipelines that reduce manual effort, improve efficiency, and enhance system reliability. Passionate about applying cutting-edge AI techniques to solve real-world engineering problems.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>
            <div className="space-y-0">
              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">Bachelors of Technology (B-Tech) in Computer Science and Engineering</h4>
                <p className="text-primary text-sm mb-2">2019 - 2023</p>
                <p className="text-muted-foreground italic mb-2">Siksha O' Anusandhan University (SOA), India</p>
                <p className="text-muted-foreground text-sm">Grade: 9.6/10.0</p>
                <p className="text-muted-foreground text-sm">Relevant Coursework: OOP, Data Structures, Algorithms, Computer Networks, DBMS</p>
              </div>
            </div>
          </div>

          {/* Experience  */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Professional Experience</h2>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Accenture (Sep 2023 - Present)</h3>
            <div className="space-y-0">
              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">Defect Analysis & BAU Operations</h4>
                <p className="text-muted-foreground italic mb-2">Enterprise Quality Engineering & Release Management</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Analyzed QA defects to identify root causes and route issues to appropriate development teams based on system ownership and impact.</li>
                  <li>• Coordinated defect triage and production releases across multiple cycles, ensuring accurate prioritization and timely deployments.</li>
                  <li>• Applied NLP techniques to normalize and restructure unstructured defect descriptions into standardized templates.</li>
                  <li>• Improved defect triage accuracy and reduced manual intervention by 60% through hybrid AI-driven automation.</li>
                  <li>• Enhanced data quality and consistency for downstream analytics and reporting systems.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">Flashing Automation & Recovery Framework</h4>
                <p className="text-primary text-sm mb-2">Project-Based</p>
                <p className="text-muted-foreground italic mb-2">Embedded Systems & ECU Automation</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Developed proprietary automation solutions for MKF and low-level ECU flashing workflows.</li>
                  <li>• Performed analysis, troubleshooting, and recovery of defective CIVIC units across platforms and markets.</li>
                  <li>• Designed special recovery workarounds for multiple ECU variants and system configurations.</li>
                  <li>• Automated flashing processes, improving efficiency by 87% and reducing execution time from 40 minutes.</li>
                  <li>• Optimized operational costs while improving flashing performance and reliability.</li>
                </ul>
              </div>

              <div className="timeline-item">
                <h4 className="text-lg font-semibold text-foreground">AAOS Test Runner Framework with AI Test Generator</h4>
                <p className="text-primary text-sm mb-2">Project-Based</p>
                <p className="text-muted-foreground italic mb-2">AI-Driven Test Automation</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Developed an AI-powered test automation framework using Python, Appium, and Pytest.</li>
                  <li>• Implemented ML models to predict test failures using historical execution data, reducing debugging time.</li>
                  <li>• Built self-healing automation through ML-based locator analysis and auto-patching of failed UI tests.</li>
                  <li>• Enabled NLP-driven test generation by converting natural language test descriptions into executable Pytest scripts.</li>
                  <li>• Integrated real-time log monitoring and reporting for full observability of AI-driven test runs.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
