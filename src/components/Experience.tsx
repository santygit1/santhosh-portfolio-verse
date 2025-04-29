
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    title: "ECOVO",
    position: "Co-founder & Content Head",
    period: "Jan 2025 - Present",
    description: [
      "Leading content strategy and brand positioning for an EV startup",
      "Driving engagement and optimising business messaging"
    ]
  },
  {
    title: "McDonald's",
    position: "Crew Member",
    period: "June 2024 - Sep 2024",
    description: [
      "Achieved 85% CRM score, excelling in customer experience",
      "Managed kitchen operations efficiently in a fast-paced environment"
    ]
  },
  {
    title: "Flipkart",
    position: "Crew Member",
    period: "Jan 2024 - June 2024",
    description: [
      "Learned to handle customer queries efficiently and build positive interactions",
      "Gained experience in presenting products effectively and closing sales smoothly"
    ]
  },
  {
    title: "Event Manager",
    position: "Freelance",
    period: "Sep 2023 - June 2024",
    description: [
      "Organized and managed events ensuring seamless execution",
      "Led teams, maximizing efficiency and productivity"
    ]
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey across various industries has equipped me with diverse skills and experiences.
          </p>
        </div>
        
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              ref={el => itemRefs.current[index] = el}
              className={`relative bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 transition-all duration-700 ${
                visibleItems.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute top-0 left-0 h-full w-2 bg-modernBlue rounded-l-xl"></div>
              
              <div className="md:flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{item.position}</h3>
                  <h4 className="text-modernBlue font-semibold mt-1">{item.title}</h4>
                  
                  <div className="mt-4 space-y-2">
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-600 flex items-start">
                        <span className="mr-2 text-warmCoral">•</span>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mt-4 md:mt-0 bg-blue-50 px-4 py-2 rounded-full">
                  <Calendar className="text-modernBlue w-4 h-4 mr-2" />
                  <span className="text-sm text-gray-700">{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
