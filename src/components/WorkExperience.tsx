
import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer & UI/UX Designer",
    company: "Saayam for ALL (NGO)",
    location: "Remote",
    duration: "2024 - Present",
    type: "Volunteer",
    color: "bg-green-100 text-green-700",
    shortDescription: "Volunteering as a full-stack developer and UI/UX team member for social impact",
    technologies: ["React", "Node.js", "UI/UX Design"],
    details: {
      responsibilities: [
        "Developing web applications for social impact initiatives",
        "Collaborating with UI/UX team on user-centered design solutions",
        "Contributing to full-stack development projects for community outreach",
        "Participating in design thinking workshops and user research"
      ],
      achievements: [
        "Contributing to meaningful social impact through technology",
        "Gaining experience in non-profit sector technology challenges",
        "Collaborating with diverse, mission-driven teams"
      ],
      aboutOrganization: {
        mission: "To provide timely and targeted assistance to those facing challenges in their lives, fostering a culture of compassion, solidarity, and service to humanity.",
        about: "At Saayam For All, we believe in the power of helping hands reaching out to those facing challenges.",
        vision: "To cultivate a community where the ethos of 'Manava Sevaye Madhava Seva' (Service to mankind is Service to God) and 'Sarve jana sukhino bhavantu' (May all live happily) guides our actions, driving positive change and fostering a more compassionate and equitable world for all."
      }
    }
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "PricewaterhouseCoopers",
    location: "Dubai, UAE",
    duration: "Aug 2021 - Dec 2022",
    type: "Full-time",
    color: "bg-blue-100 text-blue-700",
    shortDescription: "Developed Salesforce CRM solutions and optimized CI/CD pipelines",
    technologies: ["Salesforce", "Apex", "Java", "CI/CD"],
    details: {
      responsibilities: [
        "Developed Salesforce CRM applications using Apex and Java",
        "Built responsive Lightning Web Components",
        "Implemented CI/CD pipelines reducing deployment time by 30%",
        "Collaborated with cross-functional teams on enterprise solutions"
      ],
      achievements: [
        "Reduced deployment time by 30% through pipeline optimization",
        "Successfully delivered multiple enterprise CRM solutions"
      ]
    }
  },
  {
    id: 3,
    title: "Junior Software Engineer",
    company: "JK Projects",
    location: "Hyderabad, India", 
    duration: "Sep 2020 - Aug 2021",
    type: "Full-time",
    color: "bg-orange-100 text-orange-700",
    shortDescription: "Built crop management web application with Apache NiFi pipelines for real-time analytics, cutting data latency from 2 hrs to 5 min",
    technologies: ["Node.js", "Apache NiFi", "PostgreSQL", "Redis"],
    details: {
      responsibilities: [
        "Developed scalable crop management web application using Node.js and Express.js",
        "Built Apache NiFi pipelines for real-time analytics, cutting data latency from 2 hrs to 5 min, enabling quicker operational decisions",
        "Optimized database performance with Redis caching",
        "Built RESTful APIs and processed IoT sensor data"
      ],
      achievements: [
        "Reduced data latency from 2 hours to 5 minutes through Apache NiFi pipeline optimization",
        "Improved system performance by 38% through Redis implementation",
        "Successfully processed large-scale IoT sensor data for crop management"
      ]
    }
  },
  {
    id: 4,
    title: "Web Application Developer Intern",
    company: "Peopleone",
    location: "Chennai, India",
    duration: "Jun 2020 - Aug 2020",
    type: "Internship",
    color: "bg-purple-100 text-purple-700",
    shortDescription: "Developed web applications and gained hands-on experience in full-stack development",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    details: {
      responsibilities: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Built backend functionality using PHP and MySQL",
        "Collaborated with development team on various web projects",
        "Participated in code reviews and learned industry best practices"
      ],
      achievements: [
        "Successfully completed multiple web development projects",
        "Gained valuable industry experience in full-stack development",
        "Learned collaborative development workflows"
      ]
    }
  }
];

const WorkExperience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section id="experience" className="section bg-portfolio-cream">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title text-center">Professional Journey</h2>
        <p className="section-subtitle text-center">
          From enterprise solutions to social impact - building meaningful technology experiences
        </p>
        
        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          {experiences.map((experience, index) => {
            const isExpanded = expandedExperience === experience.id;
            
            return (
              <Card 
                key={experience.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md animate-fade-in border-portfolio-taupe/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleExpanded(experience.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-serif text-portfolio-navy">{experience.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-medium text-portfolio-navy/80">{experience.company}</span>
                            <Badge variant="outline" className="text-xs">{experience.type}</Badge>
                          </div>
                        </div>
                        <ChevronRight className={`h-5 w-5 text-portfolio-navy/60 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-portfolio-navy/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-portfolio-navy/80 mb-3">{experience.shortDescription}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                      
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-portfolio-taupe/20 space-y-4 animate-fade-in">
                          {experience.details.aboutOrganization && (
                            <div className="bg-portfolio-sage/10 rounded-lg p-4 space-y-3">
                              <h4 className="font-semibold text-portfolio-navy">About Saayam for ALL</h4>
                              <div className="space-y-2 text-sm text-portfolio-navy/80">
                                <p><strong>Mission:</strong> {experience.details.aboutOrganization.mission}</p>
                                <p><strong>About:</strong> {experience.details.aboutOrganization.about}</p>
                                <p><strong>Vision:</strong> {experience.details.aboutOrganization.vision}</p>
                              </div>
                            </div>
                          )}
                          
                          <div>
                            <h4 className="font-semibold text-portfolio-navy mb-2">Key Responsibilities</h4>
                            <ul className="list-disc list-inside space-y-1 text-portfolio-navy/80 text-sm">
                              {experience.details.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-portfolio-navy mb-2">Key Achievements</h4>
                            <ul className="list-disc list-inside space-y-1 text-portfolio-navy/80 text-sm">
                              {experience.details.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
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
      </div>
    </section>
  );
};

export default WorkExperience;
