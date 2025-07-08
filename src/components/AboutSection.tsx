
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <section id="about" className="py-20 bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-text dark:text-foreground mb-6">About Me</h2>
          <p className="text-lg text-dark-grey dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An aspiring tech entrepreneur with a strong foundation in full-stack development and data science, currently pursuing dual undergraduate programs at the Institute of Venture Building and SRM University. I combine technical skills with business thinking to design MVPs, explore AI tools and contribute to early-stage products and live projects. With hands-on experience in operations, product strategy and content development, I bring a versatile, execution-driven mindset to every opportunity I take on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
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

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
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
