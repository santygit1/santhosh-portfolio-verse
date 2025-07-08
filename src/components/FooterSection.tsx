
import { Mail, Github, Linkedin } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-grey dark:text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Santhosh Kumar S. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/santhosh-kumar-skprofile/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-grey hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/santygit1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-grey hover:text-modern-text dark:text-muted-foreground dark:hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:santhosh2027ug@buildwithivb.com"
              className="p-2 text-dark-grey hover:text-red-600 dark:text-muted-foreground dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
