
import { useState, useEffect, useRef } from 'react';
import { Book, Award } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const certObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = certRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCerts(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    certRefs.current.forEach((ref) => {
      if (ref) certObserver.observe(ref);
    });
    
    return () => {
      sectionObserver.disconnect();
      certObserver.disconnect();
    };
  }, []);

  const certifications = [
    {
      name: "Full Stack Development",
      description: "Gaining hands-on experience in frontend technologies like HTML, CSS and JavaScript. Focused on building responsive and user-friendly web applications."
    },
    {
      name: "Social Media Management",
      description: "Learning to craft content strategies and analyse performance metrics to boost engagement and reach. Managing ECOVO's instagram page as practical experience."
    },
    {
      name: "Mental Health",
      description: "Exploring emotional intelligence and effective communication to support and connect with individuals personally. Learning techniques to manage stress and enhance well-being."
    },
    {
      name: "Investment & Strategies",
      description: "Understanding the basics of financial planning, risk assessment and strategic investment for business growth. Exploring market trends and decision making frameworks."
    },
    {
      name: "Public Speaking",
      description: "Practicing effective communication, body language and audience engagement techniques. Building confidence in presenting ideas clearly and persuasively."
    },
    {
      name: "NLP (Neuro-linguistic Programming)",
      description: "Learning techniques to improve communication, influence and personal development. Focusing on understanding language patterns and behaviour."
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and continuous learning journey through certifications and training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold flex items-center mb-8">
              <Book className="mr-2 text-modernBlue" />
              <span>Academic Background</span>
            </h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-warmCoral">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">BCA - Data Science</h4>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">2024 - 2027</span>
                </div>
                <p className="text-modernBlue mt-1">SRM University</p>
                <p className="mt-2 text-gray-600">Currently pursuing Bachelor of Computer Applications with specialization in Data Science</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-modernBlue">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">Entrepreneurship Course</h4>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">2024 - 2027</span>
                </div>
                <p className="text-modernBlue mt-1">IVB Institute of Venture Building</p>
                <p className="mt-2 text-gray-600">Focusing on software development and full stack development skills</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-400">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">Higher Secondary Education</h4>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Completed</span>
                </div>
                <p className="text-gray-600 mt-2">12th Grade - 70%</p>
                <p className="text-gray-600">10th Grade - 60%</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold flex items-center mb-8">
              <Award className="mr-2 text-modernBlue" />
              <span>Certifications & Training</span>
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  ref={el => certRefs.current[index] = el}
                  className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 ${
                    visibleCerts.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <h4 className="font-semibold text-modernBlue">{cert.name}</h4>
                  <p className="text-gray-600 mt-2 text-sm">{cert.description}</p>
                </div>
              ))}
              
              <div 
                ref={el => certRefs.current[6] = el}
                className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 ${
                  visibleCerts.includes(6) ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
              >
                <h4 className="font-semibold text-modernBlue">Workshops & Seminars</h4>
                <div className="mt-2 space-y-2">
                  <div className="text-sm">
                    <p className="font-medium">First Aid Training, CPR Skills & School Safety</p>
                    <p className="text-gray-600">Cornardo Academy for Medical Professionals</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">The Pursuit of Excellence</p>
                    <p className="text-gray-600">YMCA Madras Boys Activities Committee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
