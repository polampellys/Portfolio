
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="text-xl font-serif tracking-wide text-portfolio-navy">
              Suhasini Polampelly
            </a>
            <p className="mt-4 text-portfolio-navy/70 max-w-xs">
              Full-stack developer creating innovative solutions through technology and design.
            </p>
            <div className="mt-4">
              <p className="text-sm text-portfolio-navy/60">Boston, MA</p>
              <a href="mailto:suhasinipolampelly@gmail.com" className="text-sm text-portfolio-navy/60 hover:text-portfolio-navy transition-colors">
                suhasinipolampelly@gmail.com
              </a>
            </div>
          </div>
          
          <div className="md:text-center">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-portfolio-navy/60">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Home</a>
              <a href="#about" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">About</a>
              <a href="#experience" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Experience</a>
              <a href="#freelancing" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Freelancing</a>
              <a href="#projects" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Projects</a>
              <a href="#skills" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Skills</a>
              <a href="#contact" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-portfolio-navy/60">Connect</h3>
            <div className="flex md:justify-end space-x-4">
              <a href="https://www.linkedin.com/in/suhasinipolampelly/" target="_blank" rel="noopener noreferrer" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/polampellys" target="_blank" rel="noopener noreferrer" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">
                GitHub
              </a>
              <a href="mailto:suhasinipolampelly@gmail.com" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-portfolio-taupe/20 text-center text-sm text-portfolio-navy/60">
          <p>© {new Date().getFullYear()} Suhasini Polampelly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
