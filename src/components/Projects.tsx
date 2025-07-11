import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Award, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projectsData = [
  {
    id: 1,
    title: "ElBuddy - Elder Care wellness & Business plan",
    description: "Analyzed the elder care industry across Japan and India, focusing on market trends, user behavior and service gaps. Explored the rise of nuclear families, smartphone adoption and the growing demand for home healthcare.",
    outcome: "Identified unmet needs in home care services and challenges in caregiver accessibility and lead generation. Provided strategic insights into targeting tech-savvy urban seniors and redefining customer acquisition models.",
    tags: ["Market Research", "Healthcare Strategy", "Business Plan"],
    link: "https://www.canva.com/design/DAGsCACu-AE/EV3zzghFmbiIGaeZ0m0DcQ/view",
    iframe: "https://www.canva.com/design/DAGsCACu-AE/EV3zzghFmbiIGaeZ0m0DcQ/view?embed",
    highlight: true
  },
  {
    id: 2,
    title: "Product Management",
    description: "Led product strategy and journey mapping for a luxury air mobility app.",
    outcome: "Designed a high-fidelity Figma prototype for luxury jet booking, focusing on clarity, accessibility and elegant UX. The project scored high for clarity, innovation and storytelling.",
    tags: ["Edtech", "Product Research", "PMF"],
    link: "https://www.canva.com/design/DAGsULRY65g/XfR-JCfdinGYaESTRNouBQ/view",
    iframe: "https://www.canva.com/design/DAGsULRY65g/XfR-JCfdinGYaESTRNouBQ/view?embed",
    highlight: false
  },
  {
    id: 3,
    title: "Capstone Project",
    description: "Conducted an entrepreneurial study by mapping the journey of a growth-stage founder at ZenVerse through interviews and research. Explored founder mindset, startup strategy and early-stage storytelling.",
    outcome: "Gained firsthand insights into real-world venture building and team-driven research execution. Strengthened understanding of startup growth patterns and strategic decision-making.",
    tags: ["Entrepreneurship", "Startup Research", "Founder Mindset"],
    link: "https://www.canva.com/design/DAGsp8CGAio/gj6nHSsKxxzvKNwza7BD2g/view",
    iframe: "https://www.canva.com/design/DAGsp8CGAio/gj6nHSsKxxzvKNwza7BD2g/view?embed",
    highlight: false
  },
  {
    id: 4,
    title: "Intella Education",
    description: "Collaborated as part of a 7-member team to design and develop Intella Education's official website using HTML, CSS, JavaScript and React.",
    outcome: "Delivered a live, production-ready platform that enhanced brand visibility and improved user engagement.",
    tags: ["Live Project", "Website", "Frontend Development"],
    link: "https://www.intellaeducation.com/",
    iframe: "https://www.intellaeducation.com/",
    highlight: true
  },
  {
    id: 5,
    title: "Cybersecurity Startup",
    description: "Developed a business plan for a quantum-resilient cybersecurity startup tackling future encryption threats. Focused on AI-enhanced quantum encryption solutions tailored for SMEs and cloud deployment.",
    outcome: "Delivered a winning pitch that outlined market gaps, user risks and a go-to-market strategy for affordable post-quantum encryption. Positioned the solution against high-cost competitors like IBM and ID Quantique.",
    tags: ["Post Quantum Cryptography", "CyberSecurity Startup", "AI driven strategy"],
    link: "https://www.canva.com/design/DAGsZlKqp88/QG2E6cat0MqrnFCugfztOg/view",
    iframe: "https://www.canva.com/design/DAGsZlKqp88/QG2E6cat0MqrnFCugfztOg/view?embed",
    highlight: false
  },
  {
    id: 6,
    title: "Retail Immersion",
    description: "Conducted a retail immersion at Tryst & Gourme to analyze customer behavior and store flow. Developed referral and merchandising strategies using data-backed insights and shopper psychology.",
    outcome: "Secured 2nd prize for presenting actionable retail improvements grounded in market trends and consumer profiling. The strategy aligned product placement with behavior-driven recommendations.",
    tags: ["Retail Strategy", "Consumer Behavior", "Data-Driven Insights"],
    link: "https://gamma.app/docs/Tryst-Gourmet-Retail-focuses-on-premium-food-products-experience-8p8soefeasiujsf?mode=present#card-nv8rcqgwph85e8j",
    iframe: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    highlight: false,
    isImage: true
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleProjects(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-modern-text dark:text-foreground">
            My Work & Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A collection of projects that demonstrate my ability to build, collaborate and solve problems through thoughtful execution.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md ${
                project.highlight ? 'ring-2 ring-primary/20' : ''
              } ${
                visibleProjects.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {project.highlight && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <Star className="w-4 h-4" />
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  {project.isImage ? (
                    <img 
                      src={project.iframe}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <iframe 
                      src={project.iframe}
                      className="w-full h-full border-0"
                      title={project.title}
                      loading="lazy"
                      allow="fullscreen"
                    />
                  )}
                </div>
                
                <CardTitle className="text-xl font-bold text-modern-text dark:text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-primary mb-1 flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Outcome
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.outcome}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  className="w-full mt-4 group-hover:scale-[1.02] transition-transform"
                  variant="outline"
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
