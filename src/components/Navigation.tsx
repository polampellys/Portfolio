
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8",
        scrolled ? "py-4 bg-white/90 backdrop-blur-sm shadow-sm" : "py-6"
      )}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-xl font-serif tracking-wide text-portfolio-navy">
            Suhasini Polampelly
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-portfolio-navy p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-portfolio-navy p-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-lg text-portfolio-navy/80 hover:text-portfolio-navy transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
