<<<<<<< HEAD
import { useEffect, useState, useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const roles = ['Software Development Engineer',  'Machine Learning Engineer',  'GenAI Engineer',  'NLP Engineer'];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
          Amreet Nanda
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90">
          I'm a{' '}
          <span className="text-primary border-r-2 border-primary pr-1">
            {displayText}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
=======
import { useEffect, useState, useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const roles = ['Software Development Engineer',  'Machine Learning Engineer',  'GenAI Engineer',  'NLP Engineer'];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
          Amreet Nanda
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90">
          I'm a{' '}
          <span className="text-primary border-r-2 border-primary pr-1">
            {displayText}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
>>>>>>> e2a1ad1b0c00993aeb1ade88664b4a5f10c6d98f
