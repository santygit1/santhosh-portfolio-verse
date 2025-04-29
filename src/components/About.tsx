
import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me better and what drives my passion for technology, marketing, and entrepreneurship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">Professional Summary</h3>
            <p className="text-gray-600">
              Aspiring entrepreneur, founders office, CMO and CGO with a strong foundation in full stack development (frontend) 
              and proven expertise in social media management. Commited to becoming a full time CMO and CGO at ECOVO, 
              where I currently lead content strategies for the EV-focused Instagram page, achieving a 2-5% engagement rate.
            </p>
            <p className="text-gray-600">
              Skilled in Customer Relationship Management, Prompt Engineering and Story Telling to craft impactful brand narratives. 
              Driven by a passion for strategic and creative thinking, I leverage professional intelligence to solve 
              complex problems and deliver results. 
            </p>
            <p className="text-gray-600">
              Experienced in personal consulting and event management, with a talent for building strong connections 
              and executing seamless events. Currently seeking internships to further refine my skills in founder's office, 
              marketing, development, business strategy and prompt engineering, aiming to bring a powerful mix of 
              technical expertise, marketing insight and leadership to the continued growth of ECOVO.
            </p>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-modernBlue">Personal Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Phone className="text-modernBlue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">730-557-0956</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Mail className="text-modernBlue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">santy.santhoshkumar5002@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Linkedin className="text-modernBlue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="font-medium">Santhosh Kumar</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tamil - Fluent</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">English - Fluent</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Telugu - Basics</span>
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

export default About;
