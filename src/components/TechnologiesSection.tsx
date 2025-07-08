
import { Code, BarChart3, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const TechnologiesSection = () => {
  const categories = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary bg-primary/10",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Git", icon: "📋" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" }
      ]
    },
    {
      title: "Product Management & Business Strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-accent bg-accent/10",
      skills: [
        { name: "Jira", icon: "🎯" },
        { name: "Trello", icon: "📋" },
        { name: "Notion", icon: "📝" },
        { name: "Excel", icon: "📊" },
        { name: "Business Model Canvas", icon: "📈" },
        { name: "Google Analytics", icon: "📊" }
      ]
    },
    {
      title: "Design, No-Code & Marketing",
      icon: <Palette className="w-6 h-6" />,
      color: "text-green-600 bg-green-600/10",
      skills: [
        { name: "Canva", icon: "🎨" },
        { name: "Figma", icon: "🎭" },
        { name: "Webflow", icon: "🌊" },
        { name: "Mixpanel", icon: "📊" },
        { name: "WordPress", icon: "📝" },
        { name: "Bolt", icon: "⚡" },
        { name: "Meta Ads", icon: "📱" },
        { name: "AI Tools", icon: "🤖" }
      ]
    }
  ];

  const ScrollableSkills = ({ skills, categoryIndex }: { skills: any[], categoryIndex: number }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const checkScrollButtons = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    useEffect(() => {
      checkScrollButtons();
      const handleResize = () => checkScrollButtons();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const scrollAmount = 200;
        const newScrollLeft = direction === 'left' 
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
        
        scrollRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
      setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - (scrollRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
      setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    return (
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onScroll={checkScrollButtons}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="flex-shrink-0 bg-card border border-border rounded-xl p-4 min-w-[120px] text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group/skill"
              style={{ userSelect: 'none' }}
            >
              <div className="text-2xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-card-foreground block leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    );
  };

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
        
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className={`p-2 rounded-full ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{category.title}</h3>
              </div>
              
              <ScrollableSkills skills={category.skills} categoryIndex={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
