
import { Code, BarChart3, Palette } from 'lucide-react';

const TechnologiesSection = () => {
  const categories = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary bg-primary/10",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Product Management & Business Strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-accent bg-accent/10",
      skills: ["Jira", "Trello", "Notion", "Excel", "Business Model Canvas", "Google Analytics"]
    },
    {
      title: "Design, No-Code & Marketing",
      icon: <Palette className="w-6 h-6" />,
      color: "text-green-600 bg-green-600/10",
      skills: ["Canva", "Figma", "Webflow", "Mixpanel", "WordPress", "Bolt", "Meta Ads", "AI Tools"]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-background transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-text dark:text-foreground mb-6">Tools & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-dark-grey dark:text-muted-foreground max-w-2xl mx-auto">
            A look at the technologies, tools and platforms I work with.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border transition-colors">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full mr-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
