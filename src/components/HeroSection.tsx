
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 subtle-gradient">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 animate-fade-in">
            Building innovative solutions
            <div className="flex justify-center my-2 md:my-3">
              <span className="w-24 md:w-32 lg:w-80 h-0.5 bg-portfolio-blush"></span>
            </div>
            with data & design
          </h1>
          <p className="text-lg md:text-xl text-portfolio-navy/80 mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-in-delayed">
            Hi, I'm Suhasini Polampelly. I design thoughtful interfaces, build meaningful solutions, and bring ideas to life through systems that work and resonate through technology and user-centered thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-portfolio-navy text-white rounded-lg transition-all hover:bg-portfolio-navy/90"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-portfolio-sage text-portfolio-navy rounded-lg transition-all hover:bg-portfolio-sage/80"
            >
              Get In Touch
            </a>
            <a 
              href="mailto:suhasinipolampelly@gmail.com" 
              className="px-6 py-3 border-2 border-portfolio-navy text-portfolio-navy rounded-lg transition-all hover:bg-portfolio-navy hover:text-white"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
