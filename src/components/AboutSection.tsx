import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title text-center">About Me</h2>
        {/* <p className="section-subtitle text-center">
          Builder at heart, storyteller in spirit
        </p> */}
        
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in flex justify-center items-center h-full">
            <img 
              src="/Portfolio/profile.png" 
              alt="Suhasini Polampelly" 
              className="object-cover rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-[420px] md:h-[520px] lg:h-[600px] shadow-lg" 
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-delayed">
            <h3 className="text-2xl font-serif">Hi there, I'm Suhasini Polampelly</h3>
            <p className="text-portfolio-navy/80 leading-relaxed">
              <em>I'm a builder at heart and a storyteller in spirit.</em>
            </p>
            <p className="text-portfolio-navy/80 leading-relaxed">
              With a Master's in Information Systems from Northeastern University, Boston, Bachelor's in Computer Science from BITS Pilani, Dubai and hands-on experience at PricewaterhouseCoopers(PwC), I navigate the space where technology meets impact. I love solving real problems with clean design, smart systems, and meaningful execution.
            </p>
            <p className="text-portfolio-navy/80 leading-relaxed">
              But I'm more than just a developer. Whether I'm volunteering as a full-stack developer for NGOs, designing logos for local businesses, or helping organize events that bring people together. I find purpose in creating experiences that connect and empower.
            </p>
            <p className="text-portfolio-navy/80 leading-relaxed">
              I'm passionate about product, design, and operations — the full journey from "What if?" to "It works."
              And behind everything I do is a belief I carry from the Bhagavad Gita:
            </p>
            <p className="text-portfolio-navy/80 leading-relaxed">
              <em>"Karmanye vadhikaraste, ma phaleshu kadachana"</em> — do your work with focus, not with attachment to results.
            </p>
            <p className="text-portfolio-navy/80 leading-relaxed">
              That's why my goal isn't just to build great things, it's to build things that matter. Work that feels good to use. Systems that scale. Solutions that spark progress.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center text-portfolio-navy border-b-2 border-portfolio-blush hover:border-portfolio-navy transition-all"
              >
                Let's build something amazing together
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
