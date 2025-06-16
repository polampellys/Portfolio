
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const emailBody = `Name: ${name}%0D%0APhone: ${phone}%0D%0A%0D%0A---------------------------------------\%0D%0A${message}`;
    window.open(`mailto:suhasinipolampelly@gmail.com?subject=${subject}&body=${emailBody}`);
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, spaces, dashes, parentheses, and plus sign
    const value = e.target.value.replace(/[^0-9\s\-\(\)\+]/g, '');
    e.target.value = value;
  };

  return (
    <section id="contact" className="min-h-screen section bg-portfolio-cream flex items-center">
      <div className="container px-4 sm:px-6 w-full">
        <h2 className="section-title text-center">Let's Connect</h2>
        <p className="section-subtitle text-center">
          Ready to collaborate? I'd love to hear about your next project
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-portfolio-navy text-lg">Email</p>
                    <a href="mailto:suhasinipolampelly@gmail.com" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">
                      suhasinipolampelly@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-portfolio-navy text-lg">Phone</p>
                    <a href="tel:+16178240039" className="text-portfolio-navy/80 hover:text-portfolio-navy transition-colors">
                      +1 (617) 824-0039
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-portfolio-navy text-lg">Location</p>
                    <p className="text-portfolio-navy/80">Boston, MA, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-portfolio-taupe/20">
                <h3 className="text-xl font-serif mb-6 text-portfolio-navy">Find Me Online</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/suhasinipolampelly/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-portfolio-navy hover:text-blue-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-medium">LinkedIn</span>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/polampellys" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-portfolio-navy hover:text-gray-800 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-medium">GitHub</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-portfolio-taupe/20">
              <h3 className="text-xl font-serif mb-6 text-portfolio-navy">Send Message</h3>
              <form onSubmit={handleSendMessage} className="space-y-6">
                {/* Name and Phone on same row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Your name" 
                      required
                      className="border-portfolio-taupe/30 focus:border-portfolio-navy focus:ring-portfolio-navy/20"
                    />
                  </div>
                  <div>
                    <Input 
                      name="phone"
                      type="tel"
                      placeholder="Your phone number" 
                      required
                      onChange={handlePhoneInput}
                      className="border-portfolio-taupe/30 focus:border-portfolio-navy focus:ring-portfolio-navy/20"
                    />
                  </div>
                </div>
                
                {/* Email on its own row */}
                <div>
                  <Input 
                    name="email"
                    type="email"
                    placeholder="Your email" 
                    required
                    className="border-portfolio-taupe/30 focus:border-portfolio-navy focus:ring-portfolio-navy/20"
                  />
                </div>
                
                {/* Subject on its own row */}
                <div>
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    required
                    className="border-portfolio-taupe/30 focus:border-portfolio-navy focus:ring-portfolio-navy/20"
                  />
                </div>
                
                {/* Message */}
                <Textarea 
                  name="message"
                  placeholder="Tell me about your project..." 
                  rows={6}
                  required
                  className="border-portfolio-taupe/30 focus:border-portfolio-navy focus:ring-portfolio-navy/20 resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-navy hover:bg-portfolio-navy/90 text-white transition-colors py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
