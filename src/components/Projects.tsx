
import { useState, useEffect, useRef } from 'react';
import { Star, Award } from 'lucide-react';

const projectsData = [
  {
    title: "ECOVO",
    category: "Entrepreneurship",
    description: "Co-founding an EV-focused startup, leading content strategy and brand positioning to drive engagement and optimize business messaging.",
    highlight: true,
  },
  {
    title: "Retail Immersion",
    category: "Business Analysis",
    description: "Analyzed cost and strategies for a retail store in a mall, leading the team to secure a prize. Demonstrated strong analytical skills and enthusiasm for real-world business challenges.",
  },
  {
    title: "Eldercare Industry Analysis",
    category: "Market Research",
    description: "Explored market trends and opportunities in the eldercare sector, presenting insights to guide business strategies effectively."
  },
  {
    title: "SDG Hackathon",
    category: "Innovation",
    description: "Co-created an organic, sustainable perfume with an affordable pricing model, emphasizing product innovation and sustainability."
  },
  {
    title: "Design Thinking Project",
    category: "UX Analysis",
    description: "Analyzed pain points in a mall environment and proposed actionable solutions, highlighting user-centric thinking and analytical skills."
  },
  {
    title: "Capstone Project",
    category: "Finance",
    description: "Developed business and financial strategies focusing on wealth management, enhancing skills in financial analysis and strategic planning."
  }
];

const extraCurricular = [
  {
    category: "Competitions",
    items: [
      "Connection competition (Rotaract club & MNM Jain engineering college): Secured second place",
      "Chinmaya Geeta chanting competition: Participated actively",
      "English recitation: Achieved third prize",
      "Thirukkural recitation: Secured second prize by reciting 100 thirukkurals non-stop",
      "Bible verse competition: Achieved 1st place twice and 2nd place once"
    ]
  },
  {
    category: "Volunteer Work",
    items: [
      "International day against drug abuse and illicit trafficking: Participated in awareness programs"
    ]
  },
  {
    category: "Sports",
    items: [
      "Kho-kho (annual sports meet): Achieved runner's up position"
    ]
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [visibleExtra, setVisibleExtra] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const extraRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleProjects(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const extraObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleExtra(true);
          extraObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    projectRefs.current.forEach((ref) => {
      if (ref) projectObserver.observe(ref);
    });
    
    if (extraRef.current) {
      extraObserver.observe(extraRef.current);
    }
    
    return () => {
      projectObserver.disconnect();
      extraObserver.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Activities</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My key projects, achievements, and extracurricular activities that showcase my skills and interests.
          </p>
        </div>
        
        <h3 className="text-xl font-bold mb-8 flex items-center">
          <Star className="mr-2 text-modernBlue" />
          <span>Notable Projects & Achievements</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`card-project ${project.highlight ? 'border-l-4 border-l-warmCoral' : ''} ${
                visibleProjects.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-modernBlue bg-blue-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h4 className="font-bold text-lg mt-2">{project.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div ref={extraRef} className={`transition-all duration-700 ${visibleExtra ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold mb-8 flex items-center">
            <Award className="mr-2 text-modernBlue" />
            <span>Extracurricular Activities</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {extraCurricular.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <h4 className="font-semibold text-lg text-modernBlue mb-4">{category.category}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex">
                      <span className="text-warmCoral mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-lg text-modernBlue mb-4">Hobbies & Interests</h4>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Interests</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-50 text-modernBlue rounded-full text-xs">AI Enthusiast</span>
                  <span className="px-3 py-1 bg-blue-50 text-modernBlue rounded-full text-xs">Investigation & Analysis</span>
                  <span className="px-3 py-1 bg-blue-50 text-modernBlue rounded-full text-xs">Music Direction</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">Hobbies</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Cricket</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Watching Movies</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Listening to Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
