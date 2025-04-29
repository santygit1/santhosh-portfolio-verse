
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import EVAnimation from './animations/EVAnimation';

const Hero = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <p className={`text-warmCoral font-medium tracking-wider uppercase text-sm ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Welcome to my portfolio
            </p>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              Hi! I'm <span className="text-modernBlue">Santhosh Kumar</span>
            </h1>
            <p className={`text-lg text-gray-600 max-w-lg ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              Aspiring entrepreneur, co-founder & content head at ECOVO, full stack developer, 
              and social media strategist with a passion for EV technology.
            </p>
            <div className={`flex flex-wrap gap-4 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <a 
                href="#contact" 
                className="bg-modernBlue hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#experience" 
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg shadow border border-gray-200 hover:shadow-md transition-all"
              >
                View Experience
              </a>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="w-full h-96 relative">
              <EVAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
