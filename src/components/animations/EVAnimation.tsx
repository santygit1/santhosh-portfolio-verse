
import { useEffect, useState } from 'react';

const EVAnimation = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background elements */}
      <circle 
        cx="400" 
        cy="300" 
        r="250" 
        fill="#f5f5f5" 
        className={`transition-all duration-1000 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      />
      
      <path 
        d="M120,400 Q400,250 680,400" 
        stroke="#e0e0e0" 
        strokeWidth="4"
        className={`transition-all duration-1000 delay-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Car body */}
      <g className={`transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <rect x="250" y="350" width="300" height="70" rx="20" fill="#007ACC" />
        <rect x="200" y="300" width="400" height="60" rx="30" fill="#007ACC" />
        <rect x="300" y="240" width="200" height="60" rx="20" fill="#007ACC" />
        
        {/* Windows */}
        <rect x="320" y="250" width="70" height="40" rx="10" fill="#e0f7fa" />
        <rect x="410" y="250" width="70" height="40" rx="10" fill="#e0f7fa" />
      </g>
      
      {/* Wheels with animation */}
      <g className={`transition-transform duration-1000 delay-700 ${animate ? 'translate-y-0' : 'translate-y-20'}`}>
        <circle cx="260" cy="420" r="40" fill="#333" className={`${animate ? 'animate-spin-slow' : ''}`} />
        <circle cx="260" cy="420" r="20" fill="#666" />
        
        <circle cx="540" cy="420" r="40" fill="#333" className={`${animate ? 'animate-spin-slow' : ''}`} />
        <circle cx="540" cy="420" r="20" fill="#666" />
      </g>
      
      {/* Lightning bolt */}
      <g className={`transition-all duration-500 delay-1000 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <path d="M390,280 L370,320 L390,320 L370,360" stroke="#FF6F61" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      {/* Floating clouds */}
      <g className={`${animate ? 'animate-float' : ''}`}>
        <ellipse cx="150" cy="200" rx="50" ry="25" fill="white" opacity="0.8" />
        <ellipse cx="650" cy="180" rx="60" ry="30" fill="white" opacity="0.8" />
      </g>
    </svg>
  );
};

export default EVAnimation;
