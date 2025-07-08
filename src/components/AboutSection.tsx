
import { GraduationCap, Building2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-text dark:text-foreground mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-lg text-dark-grey dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            An aspiring tech entrepreneur with a strong foundation in full-stack development and data science, 
            currently pursuing dual undergraduate programs at the Institute of Venture Building and SRM University. 
            I combine technical skills with business thinking to design MVPs, explore AI tools and contribute to 
            early-stage products and live projects. With hands-on experience in operations, product strategy and 
            content development, I bring a versatile, execution-driven mindset to every opportunity I take on.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border transition-colors">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">SRM University</h3>
                <p className="text-primary font-semibold">BCA in Data Science (2024–2027)</p>
              </div>
            </div>
            <p className="text-dark-grey dark:text-muted-foreground">
              Pursuing core subjects like Data Structures, Statistics, AI and Machine Learning with hands-on data analysis.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border transition-colors">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 p-3 rounded-full mr-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Institute of Venture Building</h3>
                <p className="text-accent font-semibold">UG in Entrepreneurship & Full Stack Development (2024–2027)</p>
              </div>
            </div>
            <p className="text-dark-grey dark:text-muted-foreground">
              Learning Entrepreneurship, product management, full-stack development, business finance, personal development and business execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
