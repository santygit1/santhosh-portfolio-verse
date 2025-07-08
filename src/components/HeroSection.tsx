
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-white ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Santhosh Kumar
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Driven by Data, Designed with Empathy, Delivered with Clarity.
          </p>
        </div>
        
        <div className={`mt-16 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a href="#about" className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-modernBlue text-modernBlue hover:bg-modernBlue hover:text-white transition-all duration-300 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
