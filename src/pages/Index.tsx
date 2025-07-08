
import { useEffect } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  useEffect(() => {
    document.title = "Santhosh Kumar - Portfolio";
  }, []);
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
