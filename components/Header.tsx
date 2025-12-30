import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight text-dark flex items-center gap-2">
          <span className="w-8 h-8 bg-accent text-dark rounded-ba flex items-center justify-center text-sm font-bold">QT</span>
          <span className="hidden sm:inline">Nguyễn Thị Quỳnh Trang</span>
          <span className="sm:hidden">Quỳnh Trang</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-accent border border-accent rounded-ba hover:bg-accent hover:text-dark transition-all"
          >
            <FileText size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-secondary hover:text-accent block py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-dark bg-accent rounded-ba hover:bg-accent-dark transition-all w-full"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={18} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;