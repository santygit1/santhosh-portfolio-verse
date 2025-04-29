
import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const fadeInElements = document.querySelectorAll('.fade-in-item');
      const slideInElements = document.querySelectorAll('.slide-in-item');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });
      
      elements.forEach(el => observer.observe(el));
      fadeInElements.forEach(el => observer.observe(el));
      slideInElements.forEach(el => observer.observe(el));
      
      return () => {
        elements.forEach(el => observer.unobserve(el));
        fadeInElements.forEach(el => observer.unobserve(el));
        slideInElements.forEach(el => observer.unobserve(el));
      };
    };
    
    animateOnScroll();
  }, []);
};

export default useScrollAnimations;
