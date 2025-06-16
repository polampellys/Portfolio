import React, { useState } from 'react';
import { Code, Database, Brain, ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const skillCategories = [
	{
		title: "Full-Stack Development",
		icon: Code,
		skills: ["React", "Node.js", "TypeScript", "Python", "Java", "MongoDB", "Express"],
		color: "bg-blue-50 border-blue-200"
	},
	{
		title: "Data & Analytics",
		icon: Database,
		skills: ["Machine Learning", "SHAP", "Power BI", "SQL", "scikit-learn", "Pandas"],
		color: "bg-green-50 border-green-200"
	},
	{
		title: "Cloud & Design",
		icon: Brain,
		skills: ["AWS", "Figma", "UI/UX", "Docker", "Git", "REST APIs", "Agile"],
		color: "bg-orange-50 border-orange-200"
	}
];

const SkillsSection = () => {
	const [selectedCert, setSelectedCert] = useState<string | null>(null);

	const handleCertificateClick = (type: string) => {
		setSelectedCert(type);
	};

	return (
		<section id="skills" className="section bg-white">
			<div className="container px-4 sm:px-6">
				<h2 className="section-title text-center">Skills & Expertise</h2>
				<p className="section-subtitle text-center">
					A focused toolkit for building end-to-end digital solutions
				</p>

				<div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
					{skillCategories.map((category, index) => {
						const IconComponent = category.icon;
						return (
							<div
								key={category.title}
								className={`${category.color} rounded-xl p-6 animate-fade-in hover:shadow-lg transition-all duration-300`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="flex items-center mb-4">
									<IconComponent className="h-6 w-6 text-portfolio-navy mr-3" />
									<h3 className="text-lg font-serif text-portfolio-navy">{category.title}</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, i) => (
										<span
											key={i}
											className="bg-white px-3 py-1 rounded-full text-sm text-portfolio-navy/80 shadow-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-16 text-center">
					<h2 className="text-3xl md:text-4xl font-serif font-medium text-portfolio-navy mb-8">Education & Certifications</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<div className="bg-portfolio-sage/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-portfolio-sage/30">
							<div className="w-16 h-16 bg-portfolio-blush/30 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-xl font-serif text-portfolio-navy">MS</span>
							</div>
							<h4 className="text-xl font-serif text-portfolio-navy mb-3">Master of Science</h4>
							<p className="text-portfolio-navy/80 mb-2">Information Systems</p>
							<p className="text-portfolio-navy/70 mb-1">Northeastern University</p>
              <p className="text-portfolio-navy/60 text-sm mb-4">Boston, USA</p>
							<p className="text-portfolio-navy/60 text-sm mb-4">CGPA: 3.75/4 • Dec 2024</p>
							<button
								onClick={() => handleCertificateClick('neu')}
								className="flex items-center gap-2 text-portfolio-navy/80 hover:text-portfolio-navy text-sm transition-colors mx-auto bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
							>
								<ExternalLink className="h-4 w-4" />
								View Certificate
							</button>
						</div>

						<div className="bg-portfolio-mint/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-portfolio-mint/30">
							<div className="w-16 h-16 bg-portfolio-sage/30 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-xl font-serif text-portfolio-navy">BE</span>
							</div>
							<h4 className="text-xl font-serif text-portfolio-navy mb-3">Bachelor of Engineering</h4>
							<p className="text-portfolio-navy/80 mb-2">Computer Science</p>
							<p className="text-portfolio-navy/70 mb-1">Birla Institute of Technology & Science, Pilani</p>
              <p className="text-portfolio-navy/60 text-sm mb-4">Dubai, UAE</p>
							<p className="text-portfolio-navy/60 text-sm mb-4">CGPA: 8.49/10 • Apr 2022</p>
							<button
								onClick={() => handleCertificateClick('bits')}
								className="flex items-center gap-2 text-portfolio-navy/80 hover:text-portfolio-navy text-sm transition-colors mx-auto bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
							>
								<ExternalLink className="h-4 w-4" />
								View Certificate
							</button>
						</div>

						<div className="bg-gradient-to-r from-portfolio-blush/20 to-portfolio-sage/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-portfolio-blush/30">
							<div className="w-16 h-16 bg-portfolio-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-xl font-serif text-portfolio-navy">🏆</span>
							</div>
							<h4 className="text-xl font-serif text-portfolio-navy mb-3">SDLC / Agile</h4>
							<p className="text-portfolio-navy/80 mb-2">Agile Methodologies</p>
							<p className="text-portfolio-navy/60 text-sm mb-4">Applied Agile principles and Scrum methodologies through practical project experience</p>
							{/* <div className="flex flex-wrap gap-2 justify-center mb-4">
								<span className="bg-white px-3 py-1 rounded-full text-xs text-portfolio-navy/80 shadow-sm">Agile Principles</span>
								<span className="bg-white px-3 py-1 rounded-full text-xs text-portfolio-navy/80 shadow-sm">Scrum</span>
								<span className="bg-white px-3 py-1 rounded-full text-xs text-portfolio-navy/80 shadow-sm">Sprint Planning</span>
							</div> */}
							<button
								onClick={() => handleCertificateClick('scrum')}
								className="flex items-center gap-2 text-portfolio-navy/80 hover:text-portfolio-navy text-sm transition-colors mx-auto bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
							>
								<ExternalLink className="h-4 w-4" />
								View Certificate
							</button>
						</div>
					</div>
				</div>
			</div>							{/* Certificate Dialog */}
			<Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
				<DialogContent className="max-w-3xl">
					<img
						src={selectedCert === 'neu' ? '/Portfolio/NEU.png' : selectedCert === 'bits' ? '/Portfolio/BPDC.png' : selectedCert === 'scrum' ? '/Portfolio/Scrum.png' : ''}
						alt="Certificate"
						className="w-full rounded-lg"
					/>
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default SkillsSection;
