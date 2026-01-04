import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'GenAI / RAG', 'ML / NLP', 'Automation'];

const projects = [
  {
    title: 'Automation Project',
      description: 'AI-assisted automation framework to reduce manual operational workflows.',
    image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Automation',
    link: 'https://github.com/AmreetNanda/Automation_Project',
  },
  {
    title: 'Multimodal RAG System',
      description: 'Multimodal RAG pipeline combining text, images, and vector search.',
    image: 'https://developer-blogs.nvidia.com/wp-content/uploads/2024/03/multi-modal-rag-featured.jpg',
    category: 'GenAI / RAG',
    link: 'https://github.com/AmreetNanda/Multimodal_RAG',
  },
  {
    title: 'Fine-Tuning LLMs with LoRA (PEFT)',
      description: 'Fine-tuned large language models using LoRA for domain-specific tasks.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'GenAI / RAG',
    link: 'https://github.com/AmreetNanda/Fine_Tune_LLM_LORA',
  },
  {
    title: 'Multi-Search Agent with RAG',
      description: 'Agent-based RAG system supporting hybrid and multi-source search.',
    image: 'https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'GenAI / RAG',
    link: 'https://github.com/AmreetNanda/Multi_Search_Agent_RAG',
  },
  {
    title: 'PDF Chat App (RAG)',
      description: 'Chat with multiple PDFs using vector embeddings and LLMs.',
    image: 'https://images.unsplash.com/photo-1623276527153-fa38c1616b05?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'GenAI / RAG',
    link: 'https://github.com/AmreetNanda/Multi_PDF-RAG-App',
  },
  {
    title: 'ATS Automation System',
      description: 'Automated ATS pipeline for resume parsing and candidate ranking.',
    image: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Automation',
    link: 'https://github.com/AmreetNanda/ATS_System',
  },
  {
    title: 'LangChain Basics & LLM Tools',
      description: 'Hands-on exploration of LangChain components and LLM tooling.',
    image: 'https://images.unsplash.com/photo-1692607431225-5f4564c8f132?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Langchain_basic',
  },
  {
    title: 'Simple Chatbot (LangServe)',
      description: 'Lightweight chatbot deployed using LangServe APIs.',
    image: 'https://media.istockphoto.com/id/1386672154/photo/using-system-ai-chatbot-in-computer-or-mobile-application-to-uses-artificial-intelligence.jpg?s=2048x2048&w=is&k=20&c=c4F0ojLiP4iyziRH2qhzxBaBlVxyljd8UoZq8_Tp7kY=',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Langserve_SimpleChatBot',
  },
  {
    title: 'Simple Chatbot (LangSmith)',
      description: 'Lightweight chatbot deployed using Langsmith for monitoring',
    image: 'https://images.unsplash.com/photo-1576341592370-3151269da47e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Langsmith_SimpleChatbot',
  },
  {
    title: 'Code Assistant with LLMs',
      description: 'LLM-powered code assistant for contextual programming support.',
    image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/CodeAssistant_LLM',
  },
  {
    title: 'Student Performance Predictor',
      description: 'ML model predicting academic performance using structured data.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Student_Performance_Indicator',
  },
  {
    title: 'Diamond Price Prediction',
      description: 'End-to-end ML pipeline for predicting diamond prices.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Diamond_Price_Prediction',
  },
  {
    title: 'Skin Cancer Classification',
      description: 'End-to-end ML pipeline for Classification of Skin diseases.',
    image: 'https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Skin-Cancer-Classification',
  },
  {
    title: 'Chicken Disease Classification',
      description: 'End-to-end ML pipeline for Classification of Chicken diseases.',
    image: 'https://images.unsplash.com/photo-1589731234361-36258f083832?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Chicken_Disease_Classification',
  },
  {
    title: 'Item Store Sales Prediction',
      description: 'End-to-end ML pipeline for predicting Item store prices.',
    image: 'https://images.unsplash.com/photo-1672363547647-8fad02572412?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ML / NLP',
    link: 'https://github.com/AmreetNanda/Item_Store_Sales_Prediction',
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Portfolio</h2>

        {/* <p className="text-muted-foreground mb-10 max-w-6xl">
          My work spans <strong className="text-foreground">machine learning, GenAI, and automation</strong>,
          with a focus on building scalable, production-ready systems that solve real-world problems.
        </p> */}
        <p className="text-muted-foreground mb-8 max-w-6xl"> My career journey has been shaped by hands-on problem-solving across{' '} <strong className="text-foreground"> software engineering, machine learning, and GenAI systems. </strong>{' '} Each project—whether in automation, NLP, or LLM-based applications— reflects my focus on combining{' '} <strong className="text-foreground"> technical depth, clarity of purpose, and measurable impact. </strong>{' '} I build systems that are intelligent, scalable, and aligned with real business needs. </p>

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
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background overflow-hidden"
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
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
