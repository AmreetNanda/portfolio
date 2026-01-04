import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ResumeSection from '@/components/ResumeSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'portfolio', 'resume', 'skills', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} />
      
      <main className="lg:ml-72">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ResumeSection />
        <SkillsSection />
        {/* <CertificationsSection /> */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
