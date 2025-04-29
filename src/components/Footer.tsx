
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Santhosh Kumar</h2>
            <p className="text-gray-400 max-w-md">
              Aspiring entrepreneur and content strategist with expertise in full stack development
              and social media management.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/santhosh-kumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-modernBlue p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-modernBlue p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-modernBlue p-3 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:santy.santhoshkumar5002@gmail.com" 
              className="bg-gray-800 hover:bg-modernBlue p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Santhosh Kumar. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
