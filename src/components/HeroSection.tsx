
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <p className={`text-lg text-dark-grey dark:text-muted-foreground ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Welcome to my Portfolio
          </p>
          
          <h1 className={`text-5xl md:text-7xl font-bold text-modern-text dark:text-foreground ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Santhosh Kumar
          </h1>
          
          <p className={`text-xl md:text-2xl text-dark-grey dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Driven by Data, Designed with Empathy, Delivered with Clarity.
          </p>
        </div>
        
        <div className={`mt-16 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Let's Go
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
