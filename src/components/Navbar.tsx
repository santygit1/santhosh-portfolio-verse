
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Book, Mail, Award } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Skills', href: '#skills', icon: <Award className="w-5 h-5" /> },
    { name: 'Education', href: '#education', icon: <Book className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container-custom flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold">
          <span className="text-gray-800">Santhosh</span>
          <span className="text-modernBlue">Kumar</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link flex items-center gap-1.5">
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-800 hover:text-modernBlue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <ul className="flex flex-col space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="flex items-center space-x-2 py-2 nav-link" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
