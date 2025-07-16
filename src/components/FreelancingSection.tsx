import React, { useState } from 'react';
import { ExternalLink, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const freelanceProjects = [
  {
    id: 1,
    title: "Local Business Logo Design",
    client: "Small Business & Startups",
    type: "Logo Design",
    count: "2 Projects",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["Canva", "Adobe Illustrator", "Figma", "Design Systems"],
    description: "Created custom brand identities for local businesses and startups",
    details: {
      process: [
        "Initial client consultation and brand discovery",
        "Market research and competitor analysis", 
        "Concept development and sketching",
        "Digital design creation and refinement",
        "Final delivery with brand guidelines"
      ],
      deliverables: [
        "Primary logo designs",
        "Logo variations and color schemes",
        "Brand guidelines document",
        "High-resolution files in multiple formats"
      ],
      impact: "Helped 2 businesses establish strong visual identities",
      logos: [
        {
          id: 1,
          name: "Tales of Aarambh",
          image: "/Portfolio/ARAMBH.png",
          story: `The Challenge:
Create a brand identity for an event management agency with a strong vision - emphasizes culture and tradition.

They wanted a name and design rooted in culture and tradition, with a vibrant feel that celebrates beginnings. A key creative constraint was to find a name that reflected their essence while incorporating their initials: A, R, M, and B.

The Name Story:
As soon as I heard roots and tradition, I knew this brand needed to lean into vibrant colors - celebratory, bold, and full of life. That guided my design direction right from the start.

For the name, I explored Indian heritage and Sanskrit, looking for something meaningful and timeless. That’s when I discovered the word “Aarambh” (meaning 'beginning' in Sanskrit) including all required initials:
• A (Aarambh)
• R (aRaMbh)
• M (aaraMbh)
• B (aaramBh)

Design Evolution:
From there, I expanded the idea into a full brand identity. Since each event is a story, a celebration of life’s special moments, I developed the name further into “Tales of Aarambh”— a poetic, elegant name that holds deep meaning. The tagline “Your Story, Our Stage” followed naturally, emphasizing how this agency helps bring people’s stories to life.

Design Inspiration:
When it came to the logo, I knew it wasn’t about using short forms or initials. The name and tagline already carried the identity. Instead, I wanted to pair them with a symbol that was both traditional and vibrant, something rooted in Indian culture. That’s when I drew inspiration from my father’s love of mythology - from the stories he used to tell me growing up. I thought of the peacock, a timeless Indian symbol known for its beauty, grace, and association with auspicious beginnings. The peacock feather, in particular, felt like the perfect representation of vibrance, elegance, and new journeys.

Final Design:
A custom wordmark with the peacock feather subtly woven into the typography, creating a logo that's:
• Clean and memorable
• Rich in cultural meaning
• Perfect blend of tradition and modern design

The result is a brand identity that brings stories to life through events, rooted in Indian culture while looking toward new beginnings.`
        },
        {
          id: 2,
          name: "XR.AM",
          image: "/Portfolio/Logo1.png",
          story: `I remember when the client first described their agency: a marketing firm built around AR and VR technologies, named XR.AM. They were clear that the logo must stay monochrome and uncluttered, yet must spotlight "XR" while still hinting at marketing. At first I wondered how to signal virtual reality without adding obvious icons. Then it struck me: the simplest cue for VR is the headset silhouette. Placing a small, outline-style headset above the "X" felt subtle yet recognizable. To show "and marketing," we kept "AM" slightly smaller, separated by a dot so the letters stayed close but distinct. This maintained the bold focus on "XR" while keeping the agency aspect visible but secondary.

As I refined the logotype, I chose sturdy, minimalist letterforms for "XR," knowing they anchor the tech-forward identity. The dot before "AM" prevented awkward spacing if "AM" were the same size. Once the core mark felt balanced, I turned to conveying marketing without extra icons. Since the client insisted on no additional symbols, I proposed a concise tagline: "Immersive Reality Marketing." Placed beneath the logo in a clean, legible font, it immediately tells viewers that the agency fuses immersive tech with marketing services. In small contexts—favicons or social avatars—I drop the tagline but keep the headset cue with "XR.AM," ensuring recognition even at tiny sizes.

In the end, the logo feels both simple and meaningful. The bold "XR" and the subtle headset silhouette signal immersive technology; the reduced-size "AM" and dot hint at marketing; and the tagline makes the service clear. Rendered in a single color, the mark remains versatile across backgrounds and formats. This narrative journey—from understanding the brief to choosing the headset cue, balancing letter sizes, and crafting an explicit yet neat tagline—reflects how a clean design can carry layered meaning without clutter.`
                }
      ]
    }
  },
  {
    id: 2,
    title: "Graphic Design",
    client: "Local Events & Businesses",
    type: "Graphic Design",
    count: "Multiple Projects",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    technologies: ["Canva", "Adobe Creative Suite", "Typography"],
    description: "Designed eye-catching promotional materials for events and marketing campaigns",
    details: {
      process: [
        "Understanding campaign objectives and target audience",
        "Creative concept development",
        "Visual hierarchy and layout design",
        "Content integration and typography",
        "Print-ready file preparation"
      ],
      deliverables: [
        "Print-ready poster designs",
        "Digital versions for social media",
        "Multiple size variations",
        "Source files for future edits"
      ],
      impact: "Enhanced visual marketing presence for local businesses",
      posters: [
        {
          id: 1,
          name: "Salon Membership Poster 1",
          image: "/Portfolio/poster1.png",
          story: `This poster was designed to introduce a new membership policy for a salon, specifically targeting irregular clients and price-conscious customers. The design strategy focused heavily on psychological triggers that drive customer engagement.

Understanding that certain words have immediate impact on consumer psychology, I strategically incorporated attention-grabbing terms like "free," "limited time," "save," "Buy one Get one," and "50% off." The numerical presentation of savings was intentionally prominent, as concrete numbers help potential customers quickly grasp the value proposition.

The design needed to create an instant connection and motivate immediate sign-ups. As this was meant to be an introductory teaser, the focus was on creating high impact with selective information, leading customers to want to learn more about the membership benefits.

Tools used: Canva
Design Focus: Customer Psychology, Value Proposition, Instant Appeal`
        },
        {
          id: 2,
          name: "Salon Membership Poster 2",
          image: "/Portfolio/poster2.png",
          story: `This poster serves as a comprehensive follow-up to the membership teaser, delivering detailed information about the salon's membership program. The design challenge was to present extensive information while maintaining visual appeal and readability.

Following the client's requirement for brand consistency, I strictly adhered to the salon's color palette throughout the design. The information was carefully structured and presented in a clean, organized format to ensure that all membership benefits were clearly communicated without overwhelming the viewer.

This design demonstrates how to balance informative content with aesthetic appeal, making complex information digestible while maintaining the brand's visual identity.

Tools used: Canva
Design Focus: Information Hierarchy, Brand Consistency, Clear Communication`
                }
      ]
    }
  },
  {
    id: 3,
    title: "Salon Billing System",
    client: "Personal Project",
    type: "Web Application",
    count: "Ongoing Project",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["JavaScript", "Node.js", "Database Design", "Lovable AI","GitHub Copilot (Vibe Coding)"],
    description: "Developing a comprehensive billing and appointment management system (Currently in progress)",
    details: {
      process: [
        "Requirements gathering with salon owner",
        "Database schema design for services and customers",
        "User interface design and development",
        "Payment processing integration",
        "Testing and deployment"
      ],
      deliverables: [
        "Customer management system",
        "Service booking and scheduling",
        "Automated billing and invoicing",
        "Inventory tracking for products",
        "Reporting dashboard"
      ],
      impact: "Streamlining salon operations and improving customer experience",
      screenshots: [
        {
          id: 1,
          name: "Salon Management Dashboard",
          image: "/Portfolio/Billing System.png",
          story: `This isn't just another project – it's a personal venture born from my upcoming salon business. I wanted to create something that wasn't just functional, but deeply thoughtful about the real needs of salon management.

Building this system with TypeScript and integrating various AI tools has been an exciting journey into modern development. As someone who'll be using this software in my own salon, I'm creating it with both technical excellence and practical usability in mind.

Key Features:
• Employee attendance tracking (clock-in/out system)
• Comprehensive employee performance metrics
• Detailed revenue reports filtered by financial years
• Service-wise and employee-wise analytics
• Customizable UI theming to match any salon's branding

What makes this project special is that I'm developing it as a template that can be adapted for any salon, while currently styling it with the colors I envision for my own salon. The ability to customize the interface means other salon owners can make it truly their own.

Embracing 'vibe coding' and staying adaptable to new technologies like AI-assisted development has helped create a more robust and future-ready solution. It's been exciting to leverage modern tools while building something that I'll actually use in my own business.

This project represents both my technical skills and my entrepreneurial spirit – creating something that bridges the gap between sophisticated software development and real-world business needs in the beauty industry.`
                }
      ]
    }
  }
];

const FreelancingSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleExpanded = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setIsFlipped(false);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsFlipped(false);
  };

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="freelancing" className="section bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title text-center">Freelance Work</h2>
        <p className="section-subtitle text-center">
          Creative solutions for real-world challenges - from brand identity to custom applications
        </p>
        
        <div className="max-w-5xl mx-auto mt-12 grid gap-8">
          {freelanceProjects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg animate-fade-in border-portfolio-taupe/20 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleExpanded(project.id)}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-serif text-portfolio-navy">{project.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-portfolio-navy/80">{project.client}</span>
                            <Badge variant="outline" className="text-xs">{project.type}</Badge>
                          </div>
                        </div>
                        <ChevronRight className={`h-5 w-5 text-portfolio-navy/60 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                      
                      <p className="text-portfolio-navy/80 mb-3">{project.description}</p>
                      <p className="text-sm text-portfolio-navy/60 mb-3">{project.count}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                      
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-portfolio-taupe/20 space-y-4 animate-fade-in">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-portfolio-navy mb-2">Process & Approach</h4>
                              <ul className="list-disc list-inside space-y-1 text-portfolio-navy/80 text-sm">
                                {project.details.process.map((step, i) => (
                                  <li key={i}>{step}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-portfolio-navy mb-2">Key Deliverables</h4>
                              <ul className="list-disc list-inside space-y-1 text-portfolio-navy/80 text-sm">
                                {project.details.deliverables.map((deliverable, i) => (
                                  <li key={i}>{deliverable}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Showcase Images */}
                          {(project.details.logos || project.details.posters || project.details.screenshots) && (
                            <div>
                              <h4 className="font-semibold text-portfolio-navy mb-3">Work Showcase</h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {(project.details.logos || project.details.posters || project.details.screenshots)?.map((item, i) => (
                                  <div 
                                    key={i}
                                    className="cursor-pointer group"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openImageModal(item);
                                    }}
                                  >
                                    <img 
                                      src={item.image} 
                                      alt={item.name}
                                      className="w-full h-24 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                                    />
                                    <p className="text-xs text-portfolio-navy/70 mt-1">{item.name}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="bg-portfolio-sage/10 rounded-lg p-4">
                            <h4 className="font-semibold text-portfolio-navy mb-2">Impact</h4>
                            <p className="text-portfolio-navy/80 text-sm">{project.details.impact}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-serif text-portfolio-navy">{selectedImage.name}</h3>
                <button onClick={closeImageModal} className="text-portfolio-navy/60 hover:text-portfolio-navy">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 relative perspective" onClick={toggleFlip} style={{ perspective: '1000px' }}>
                <div
                  className={`relative transition-all duration-500 w-full`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  {/* Front of card (Image) */}
                  <div
  className="w-full backface-hidden relative group"
  style={{ backfaceVisibility: 'hidden' }}
>
  <img 
    src={selectedImage.image} 
    alt={selectedImage.name}
    className="w-full rounded-lg cursor-pointer"
  />
  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
    <p className="text-white text-sm">Click to see the story behind it</p>
  </div>
</div>
                  
                  {/* Back of card (Story) */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg p-6" style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                }}>
                  <div className="bg-portfolio-sage/10 rounded-lg p-6 w-full h-full overflow-y-auto">
                    <div className="prose prose-neutral max-w-none">
                      <h4 className="font-semibold text-portfolio-navy mb-4">Story Behind the Design</h4>
                      <div className="space-y-6 text-portfolio-navy/90 whitespace-pre-line text-base leading-relaxed">
                        {selectedImage.story}
                      </div>
                    </div>
                    <p className="text-sm text-center mt-8 text-portfolio-navy/70 hover:text-portfolio-navy transition-colors">
                      Click to see the image
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default FreelancingSection;
