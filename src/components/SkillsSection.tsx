const skillGroups = [
  {
    title: 'Agentic AI and GenAI',
    skills: [
      'LangGraph',
      'LangChain',
      'Multi-Agent Systems',
      'Human-in-the-Loop',
      'LLMs',
      'Prompt Engineering',
      'LoRA / PEFT',
      'vLLM'
    ],
  },
  {
    title: 'RAG and Retrieval',
    skills: [
      'Hybrid Search',
      'FAISS / HNSW',
      'BM25',
      'Cross-Encoder Reranking',
      'Cohere Rerank',
      'HyDE',
      'Guardrails',
    ],
  },
  {
    title: 'Machine Learning and NLP',
    skills: [
      'Python',
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'Decision Trees',
      'Random Forest',
      'TF-IDF / SVD',
      'NLP',
      'SQL',
    ],
  },
  {
    title: 'MLOps and Serving',
    skills: [
      'FastAPI',
      'Docker',
      'MLflow',
      'Langfuse',
      'Jenkins / CI-CD',
      'Git',
      'AWS (EC2, S3, Bedrock, Sagemaker)',
      'Terraform'
    ],
  },
  {
    title: 'Automotive AI and Testing',
    skills: [
      'DLT Logs',
      'CAN Bus',
      'Appium',
      'Pytest',
      'ADB',
      'Android Automotive OS',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
