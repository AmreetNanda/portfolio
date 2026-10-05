import { useState } from 'react';
import { ExternalLink, Lock, ChevronDown, ChevronUp } from 'lucide-react';

const categories = ['All', 'Agents', 'RAG', 'ML', 'Automation'];

// Featured: shown by default, in this order.
const featuredProjects = [
  {
    title: 'Agentic AI RCA Platform (Mercedes-Benz)',
    description:
      'LangGraph multi-agent platform for defect triage and evidence-grounded root cause analysis across 100+ defect areas, with human review. Routing accuracy 82 to 96 percent and triage time 45 to under 8 minutes (internal evaluation).',
    stack: 'LangGraph, XGBoost, FAISS, BM25, Docker, MLflow, Langfuse',
    image: '/projects/rca-architecture.png', // your own redrawn diagram, no client data
    category: 'Agents',
    note: 'Client project, code not public',
  },
  {
    title: 'Enterprise RAG Application (Optum)',
    description:
      'Development-phase contribution to an enterprise RAG system over 10K+ documents: ingestion, chunking, hybrid retrieval with Cross-Encoder and Cohere reranking, HyDE and the FastAPI serving layer.',
    stack: 'LangChain, FastAPI, FAISS HNSW, BM25, Cohere, Langfuse',
    image: '/projects/enterprise-rag-flow.png', // generic retrieval-flow diagram
    category: 'RAG',
    note: 'Client project, code not public',
  },
  {
    title: 'Multimodal RAG System',
    description:
      'Fully local question answering over PDF text and images using LLaVA-Phi3, with hybrid BM25 and FAISS retrieval and reranking.',
    stack: 'LLaVA-Phi3, FAISS, BM25, PDFPlumber, Streamlit',
    image:
      'https://developer-blogs.nvidia.com/wp-content/uploads/2024/03/multi-modal-rag-featured.jpg',
    category: 'RAG',
    link: 'https://github.com/AmreetNanda/Multimodal_RAG',
  },
  {
    title: 'Fine-Tuning LLMs with LoRA (PEFT)',
    description:
      'Parameter-efficient fine-tuning with preprocessing, tokenization and evaluation workflows for domain-specific NLP tasks.',
    stack: 'Hugging Face, Transformers, PEFT, BitsAndBytes',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Fine_Tune_LLM_LORA',
  },
  {
    title: 'Multi-Source Search Agent with RAG',
    description:
      'Agent that detects user intent and routes each query to the right knowledge source, with hybrid search.',
    stack: 'LangChain, RAG, Tool routing, Vector search',
    image:
      'https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Agents',
    link: 'https://github.com/AmreetNanda/Multi_Search_Agent_RAG',
  },
  {
    title: 'AAOS AI Test Automation (R&D)',
    description:
      'Framework that turns natural language requirements into executable tests, with ML-based failure prediction and self-healing locators for Android Automotive OS.',
    stack: 'Python, Appium, Pytest, NLP, scikit-learn, ADB',
    image: '/projects/aaos-test-automation.png', // your own diagram
    category: 'Automation',
    note: 'Internal R&D, code not public',
  },
  {
    title: 'PDF Chat App (RAG)',
    description: 'Chat with multiple PDFs using vector embeddings and LLMs.',
    stack: 'LangChain, Embeddings, Vector store, LLM',
    image:
      'https://images.unsplash.com/photo-1623276527153-fa38c1616b05?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'RAG',
    link: 'https://github.com/AmreetNanda/Multi_PDF-RAG-App',
  },
  {
    title: 'ATS Automation System',
    description: 'Resume parsing and candidate ranking pipeline.',
    stack: 'Python, NLP, Ranking',
    image:
      'https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Automation',
    link: 'https://github.com/AmreetNanda/ATS_System',
  },
];

// Hidden behind "More experiments".
const experimentProjects = [
  {
    title: 'Code Assistant with LLMs',
    description: 'LLM-powered code assistant for contextual programming support.',
    stack: 'LLMs, Prompting',
    image:
      'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/CodeAssistant_LLM',
  },
  {
    title: 'Chatbot with LangServe',
    description: 'Lightweight chatbot exposed as an API with LangServe.',
    stack: 'LangChain, LangServe, FastAPI',
    image:
      'https://media.istockphoto.com/id/1386672154/photo/using-system-ai-chatbot-in-computer-or-mobile-application-to-uses-artificial-intelligence.jpg?s=2048x2048&w=is&k=20&c=c4F0ojLiP4iyziRH2qhzxBaBlVxyljd8UoZq8_Tp7kY=',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Langserve_SimpleChatBot',
  },
  {
    title: 'Chatbot with LangSmith Tracing',
    description: 'Chatbot with LangSmith tracing and monitoring.',
    stack: 'LangChain, LangSmith',
    image:
      'https://images.unsplash.com/photo-1576341592370-3151269da47e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Langsmith_SimpleChatbot',
  },
  {
    title: 'LangChain Basics & LLM Tools',
    description: 'Hands-on exploration of LangChain components and LLM tooling.',
    stack: 'LangChain',
    image:
      'https://images.unsplash.com/photo-1692607431225-5f4564c8f132?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Langchain_basic',
  },
  {
    title: 'Student Performance Predictor',
    description: 'ML model predicting academic performance using structured data.',
    stack: 'scikit-learn, Pandas',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Student_Performance_Indicator',
  },
  {
    title: 'Diamond Price Prediction',
    description: 'End-to-end ML pipeline for predicting diamond prices.',
    stack: 'scikit-learn, Pandas',
    image:
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Diamond_Price_Prediction',
  },
  {
    title: 'Skin Cancer Classification',
    description: 'End-to-end ML pipeline for classification of skin diseases.',
    stack: 'Deep learning, Image classification',
    image:
      'https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Skin-Cancer-Classification',
  },
  {
    title: 'Chicken Disease Classification',
    description: 'End-to-end ML pipeline for classification of chicken diseases.',
    stack: 'Deep learning, Image classification',
    image:
      'https://images.unsplash.com/photo-1589731234361-36258f083832?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Chicken_Disease_Classification',
  },
  {
    title: 'Item Store Sales Prediction',
    description: 'End-to-end ML pipeline for predicting item store sales.',
    stack: 'scikit-learn, Pandas',
    image:
      'https://images.unsplash.com/photo-1672363547647-8fad02572412?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML',
    link: 'https://github.com/AmreetNanda/Item_Store_Sales_Prediction',
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showExperiments, setShowExperiments] = useState(false);

  const visibleProjects = showExperiments
    ? [...featuredProjects, ...experimentProjects]
    : featuredProjects;

  const filteredProjects =
    activeCategory === 'All'
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Portfolio</h2>

        <p className="text-muted-foreground mb-8 max-w-6xl">
          I build AI systems that are measurable and ready for production. These projects cover
          agentic workflows, retrieval, fine-tuning and test automation, from client work to
          personal builds.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-border bg-background overflow-hidden flex flex-col"
            >
              {/* Title */}
              <div className="p-4 border-b border-border">
                <h4 className="text-center font-semibold text-foreground">
                  {project.title}
                </h4>
              </div>

              {/* Image */}
              <div className="group relative">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.stack}`}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-y-auto">
                  <div className="text-center px-4 py-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium">
                        <Lock className="w-4 h-4" />
                        {project.note}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Always-visible stack line (also works on touch devices) */}
              <div className="p-4 text-center text-xs text-muted-foreground">
                {project.stack}
              </div>
            </div>
          ))}
        </div>

        {/* More experiments toggle */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowExperiments((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            {showExperiments ? (
              <>
                Hide experiments <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                More experiments ({experimentProjects.length}) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
