import { BarChart3, LineChart, PieChart, Database, Search, Server } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'AI-Driven Automation Design',
    description: 'Designing and building intelligent automation solutions by translating system and business requirements into scalable AI-driven workflows.',
  },
  {
    icon: Search,
    title: 'Defect Analysis & Intelligent Triage',
    description: 'Applying NLP and log analysis to classify defects, identify root causes, and automate defect triage to improve accuracy and resolution speed.',
  },
  {
    icon: PieChart,
    title: 'ML & NLP Insights',
    description: 'Extracting actionable insights from structured and unstructured data using machine learning, NLP pipelines, and analytical techniques.',
  },
  {
    icon: LineChart,
    title: 'Model Evaluation & Optimization',
    description: 'Evaluating, tuning, and improving ML and GenAI models to ensure reliability, performance, and production readiness.',
  },
  {
    icon: Database,
    title: 'Data Processing & Feature Engineering',
    description: 'Building efficient data pipelines, performing feature engineering, and preparing high-quality datasets for ML and GenAI systems.',
  },
  {
    icon: Server,
    title: 'GenAI & RAG Systems',
    description: 'Developing Retrieval-Augmented Generation (RAG) systems and LLM-powered services using vector databases and modern AI frameworks.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Skills</h2>
        
        {/* Skills Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Data Analysis & Processing:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Proficient in <strong className="text-foreground">exploratory data analysis (EDA)</strong> to uncover patterns in structured and unstructured datasets</li>
              <li>• Extensive use of <strong className="text-foreground"> Pandas, NumPy, and visualization libraries </strong>for data inspection and statistical analysis insights</li>
              <li>• Experienced in <strong className="text-foreground">data preprocessing, cleaning, and pipeline optimization </strong>for ML workflows</li>
              <li>• Experienced in <strong className="text-foreground">multivariate analysis, regression analysis, and time series analysis</strong></li>
              <li>• Ability to translate <strong className="text-foreground">analytical results</strong> into actionable engineering decisions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Machine Learning:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Experienced in designing and deploying  <strong className="text-foreground">supervised and unsupervised ML models</strong> for classification, prediction, and automation use cases</li>
              <li>• Skilled in  <strong className="text-foreground">feature engineering, model evaluation, and performance optimization</strong></li>
              <li>•	• Applied ML techniques to improve system accuracy, reliability, and operational efficiency</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Natural Language Processing (NLP):</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Strong background in <strong className="text-foreground">text normalization, classification, semantic search, and transformer-based models</strong></li>
              <li>• Built NLP pipelines for <strong className="text-foreground">unstructured text analysis </strong>across logs, tickets, and documents</li>
              <li>• Hands-on experience with  <strong className="text-foreground">LLM fine-tuning (LoRA/PEFT)</strong>and evaluation of domain-specific models</li>
              <li>• Strong background in  <strong className="text-foreground">Natural Language Processing</strong>, including text normalization, classification, semantic search, and transformers</li>
            </ul>
          </div>
              
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">GenAI & Automation:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Built <strong className="text-foreground">Retrieval-Augmented Generation (RAG) </strong>systems using vector databases and hybrid search techniques</li>
              <li>• Developed <strong className="text-foreground">AI-assisted automation frameworks </strong>to reduce manual intervention and improve operational efficiency</li>
              <li>• Strong understanding of <strong className="text-foreground">prompt engineering, agent-based workflows, and hallucination mitigation strategies</strong></li>
            </ul>
          </div>
        </div>

        {/* What colleagues like */}
        <div className="bg-secondary/30 rounded-lg p-6 mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">What most colleagues and fellow peers like about me?</h3>

          <p className="text-muted-foreground mb-4">
            I am known for my ability to bridge the gap between <strong className="text-foreground">raw data, AI models, and real-world systems</strong>. Whether working with logs, defect data, or natural language inputs, I focus on extracting clarity from complexity and turning it into reliable, automated solutions. From boardroom presentations to coffee-break chats, I ensure the <strong className="text-foreground">story behind the numbers</strong> is not just understood but appreciated.
          </p>
          
          <p className="text-muted-foreground mb-4">
            I enjoy <strong className="text-foreground">eliminating repetitive manual work through intelligent automation</strong> and applying machine learning in ways that are practical, explainable, and impactful. My approach balances experimentation with engineering discipline—ensuring solutions are not just innovative, but also <strong className="text-foreground">production-ready and scalable.</strong>
          </p>

          <p className="text-muted-foreground mb-4">
            Colleagues also value my strength in <strong className="text-foreground">defect analysis and root-cause identification,</strong> where I combine NLP-driven insights, log analysis, and rule-based logic to <strong className="text-foreground">automate defect triage, improve classification accuracy, and accelerate resolution timelines </strong>across teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
