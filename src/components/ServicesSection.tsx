import { BarChart3, LineChart, PieChart, Database, Search, Server } from 'lucide-react';
import { Network,  FileSearch,  ScrollText,  GitBranch,  Gauge,  SlidersHorizontal} from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Agentic AI Systems',
    description: 'Designing LangGraph multi-agent workflows with task contracts, retries, schema validation and human-in-the-loop review for reliable automation.',
  },
  {
    icon: FileSearch,
    title: 'RAG and Enterprise Search',
    description: 'Hybrid vector and keyword retrieval with reranking, HyDE and guardrails to produce grounded answers over large document sets.',
  },
  {
    icon: ScrollText,
    title: 'Log Intelligence and Defect Triage',
    description: 'Parsing DLT and CAN logs and combining XGBoost routing with evidence retrieval to classify defects and support root cause analysis.',
  },
  {
    icon: GitBranch,
    title: 'Applied ML and Classification',
    description: 'Building classification pipelines with TF-IDF, SVD and XGBoost, with confidence-based routing for dependable predictions.',
  },
  {
    icon: Gauge,
    title: 'Evaluation and Observability',
    description: 'Measuring quality with precision, recall and RAGAS, and tracing models and prompts with MLflow and Langfuse.',
  },
  {
    icon: SlidersHorizontal,
    title: 'LLM Fine-Tuning',
    description: 'Parameter-efficient fine-tuning with LoRA and PEFT, including preprocessing, tokenization and evaluation for domain tasks.',
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
            <h3 className="text-xl font-semibold text-foreground mb-4">Agentic AI:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Designed LangGraph multi-agent workflows with <strong className="text-foreground">Coordinator → Domain → Specialist</strong> routing for automotive defect RCA across <strong className="text-foreground">100+ defect areas</strong></li>
              <li>• Implemented <strong className="text-foreground">A2A task contracts, shared state, schema validation, retries, failure handling and controlled agent handoffs</strong></li>
              <li>• Added <strong className="text-foreground">Human-in-the-Loop review</strong>, confidence-based routing and validation guardrails for final diagnostic decisions 
              <li>• Evaluated agent routing and workflow reliability using <strong className="text-foreground">accuracy, failure/retry behavior and expert acceptance</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">RAG and Retrieval:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Hybrid BM25 plus vector search with FAISS and HNSW</li>
              <li>• Cross-Encoder and Cohere reranking, HyDE, query-aware retrieval</li>
              <li>•	Chunking, metadata enrichment, evidence-grounded answers and guardrails</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">LLM Engineering & Evaluation:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• LLM application development with <strong className="text-foreground">prompt engineering, structured outputs and centralized LLM gateways</strong> </li>
              <li>• <strong className="text-foreground">LoRA/PEFT</strong> fine-tuning and domain-specific NLP workflows</li>
              <li>•	RAG evaluation using <strong className="text-foreground">RAGAS, groundedness/relevance metrics and retrieval evaluation</strong></li>
              <li>• Observability with <strong className="text-foreground">Langfuse / MLflow </strong></li>
              <li>• Guardrails, validation and <strong className="text-foreground">Human-in-the-Loop escalation </strong></li>
              <li>• Model/version tracking and reproducible AI workflows</li>
            </ul>
          </div>
             
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Machine Learning:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Experienced in designing and deploying  <strong className="text-foreground">supervised and unsupervised ML models</strong> for classification, prediction, and automation use cases</li>
              <li>• Skilled in  <strong className="text-foreground">feature engineering and performance optimization</strong></li>
              <li>• Classification pipelines with TF-IDF, SVD and XGBoost, plus confidence-based routing</li>
              <li>• PyTorch, scikit-learn, LLM fine-tuning with LoRA and PEFT</li>
              <li>•	Applied ML techniques to improve system accuracy, reliability, and operational efficiency</li>
              <li>•	Model evaluation: precision, recall, RAGAS</li>
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
            <h3 className="text-xl font-semibold text-foreground mb-4">MLOps and Serving:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• FastAPI services, Docker, MLflow, Langfuse, Jenkins and CI/CD</li>
              <li>• AWS: EC2, S3, Bedrock, Sagemaker, Bedrock</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Automotive AI and Testing:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• DLT and CAN log parsing, timestamp correlation, App ID and Context ID filtering</li>
              <li>• Appium, Pytest, ADB, Android Automotive OS</li>
            </ul>
          </div>

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
        </div>

        {/* What colleagues like */}
        <div className="bg-secondary/30 rounded-lg p-6 mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">What most colleagues and fellow peers like about me?</h3>

          <p className="text-muted-foreground mb-4">
            {/* I am known for my ability to bridge the gap between <strong className="text-foreground">raw data, AI models, and real-world systems</strong>. Whether working with logs, defect data, or natural language inputs, I focus on extracting clarity from complexity and turning it into reliable, automated solutions. From boardroom presentations to coffee-break chats, I ensure the <strong className="text-foreground">story behind the numbers</strong> is not just understood but appreciated. */}
            I like turning messy, real-world data into reliable systems: agents that explain their reasoning, retrieval that finds the right evidence, and ML that earns trust through measurable results.
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
