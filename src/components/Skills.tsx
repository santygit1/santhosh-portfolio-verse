
import { useState, useEffect, useRef } from 'react';
import { Code, User, MessageSquare, Star, Briefcase, Users } from 'lucide-react';

const skillsData = [
  {
    category: "Digital Skills",
    icon: <Code className="w-6 h-6 text-modernBlue" />,
    skills: [
      { name: "Social Media Management", level: 90 },
      { name: "Full Stack Development (Frontend)", level: 75 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Content Creation", level: 80 },
    ],
  },
  {
    category: "Communication Skills",
    icon: <MessageSquare className="w-6 h-6 text-modernBlue" />,
    skills: [
      { name: "Story Telling", level: 90 },
      { name: "Personal Consulting", level: 85 },
      { name: "Customer Relationship Management", level: 95 },
      { name: "Public Speaking", level: 80 },
    ],
  },
  {
    category: "Professional Skills",
    icon: <Briefcase className="w-6 h-6 text-modernBlue" />,
    skills: [
      { name: "Strategic Thinking", level: 85 },
      { name: "Creative Thinking", level: 90 },
      { name: "Versatility", level: 80 },
      { name: "Event Management", level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-6 h-6 text-modernBlue" />,
    skills: [
      { name: "Team Work", level: 90 },
      { name: "Leadership", level: 80 },
      { name: "Adaptability", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCategories(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse skill set enables me to tackle various challenges across digital marketing, development, and business strategy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              ref={el => categoryRefs.current[categoryIndex] = el}
              className={`bg-white rounded-xl shadow p-6 transition-all duration-700 ${
                visibleCategories.includes(categoryIndex) ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 * categoryIndex}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-3 rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-modernBlue">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: visibleCategories.includes(categoryIndex) ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.3 + 0.1 * skillIndex}s`,
                          backgroundColor: skill.level > 85 ? '#FF6F61' : '#007ACC'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
