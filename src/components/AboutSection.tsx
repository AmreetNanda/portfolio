import { Globe, Phone, MapPin, GraduationCap, Building, Mail, Calendar } from 'lucide-react';
import profileImg from '@/assets/profile-img.jpg';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 15, label: 'Projects', description: 'End-to-End Machine Learning, Deep Learning Projects, Natural Language Processing, Generative-AI' },
  { value: 3, label: 'Years of Experience', description: 'Agentic AI, RAG, Machine Learning, Deep Learning, Automation' },
  { value: 3, label: 'Certifications & Recognitions', description: '' },
];

const AboutSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(start);
                return newCounters;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">About</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image */}
          <div className="lg:col-span-1">
            <img
              src={profileImg}
              alt="Amreet Nanda"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI/ML Engineer with 3+ years of experience building production-oriented Generative AI, Agentic AI and Machine Learning systems. I design LangGraph multi-agent workflows with human-in-the-loop review, build hybrid RAG pipelines with reranking and guardrails, and ship them with FastAPI, Docker, MLflow and Langfuse. My main domain is automotive AI: defect triage, log intelligence and intelligent automation frameworks for Mercedes-Benz transforming unstructured data and complex problem statements into scalable, efficient engineering solutions that reduce manual effort and improve system reliability.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="info-item">
                <span className="info-icon"><Globe className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <p className="text-foreground">Full time employee in Accenture since from Sept 2023</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><GraduationCap className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">Degree:</span>
                  <p className="text-foreground">B-Tech in Computer science and Engineering</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Phone className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <p className="text-foreground">+91 8327761667</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Building className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">College:</span>
                  <p className="text-foreground">Siksha O' Anusandhan University, Bhubaneswar, India</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><MapPin className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">City:</span>
                  <p className="text-foreground">Bangalore, India</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Mail className="w-5 h-5" /></span>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <p className="text-foreground">amreetnanda321@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box bg-secondary/30 rounded-lg">
              <div className="text-5xl font-bold text-primary mb-2">{counters[index]}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
