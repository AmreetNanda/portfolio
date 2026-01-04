<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'NLP & Transformers', level: 90 },
  { name: 'LLM, RAG & Langchain', level: 85 },
  { name: 'Docker', level: 75 },
  { name: 'Machine Learning', level: 90 },
  { name: 'SQL & Data Handling', level: 85 },
  { name: 'Test Automation (Pytest/Appium)', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'AWS Cloud Basics', level: 55 },
  { name: 'Software Engineering', level: 85 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Microsoft Office', level: 100 },
];

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: animated ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
=======
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'NLP & Transformers', level: 90 },
  { name: 'LLM, RAG & Langchain', level: 85 },
  { name: 'Docker', level: 75 },
  { name: 'Machine Learning', level: 90 },
  { name: 'SQL & Data Handling', level: 85 },
  { name: 'Test Automation (Pytest/Appium)', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'AWS Cloud Basics', level: 55 },
  { name: 'Software Engineering', level: 85 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Microsoft Office', level: 100 },
];

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: animated ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
>>>>>>> e2a1ad1b0c00993aeb1ade88664b4a5f10c6d98f
