
import { Code, BarChart3, Palette } from 'lucide-react';

const TechnologiesSection = () => {
  const categories = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-modernBlue bg-modernBlue/10",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Product Management & Business Strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-warmCoral bg-warmCoral/10",
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
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Tools & Technologies</h2>
          <div className="w-20 h-1 bg-modernBlue mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A look at the technologies, tools and platforms I work with.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full mr-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600 transition-colors"
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
