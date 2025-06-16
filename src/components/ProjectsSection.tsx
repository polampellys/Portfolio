import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Media Cost Prediction & Model Interpretability",
		image: "/Portfolio/DSEM.png",
		category: "Data Science & Machine Learning",
		shortDescription: "Engineered ML workflows using linear regression, decision tree, and AutoML models to predict media costs with 20% accuracy improvement.",
		fullDescription: "Developed comprehensive machine learning workflows using Python to predict media costs across different channels and campaigns. Implemented multiple algorithms including linear regression, decision trees, and AutoML models, achieving significant performance improvements through advanced feature engineering and model interpretability techniques.",
		technologies: ["Python", "Machine Learning", "SHAP", "AutoML", "Scikit-learn", "Pandas", "NumPy"],
		keyFeatures: [
			"Linear regression, decision tree, and AutoML model implementation",
			"SHAP values for model interpretability and feature importance",
			"OLS regression and permutation importance analysis",
			"Advanced data preprocessing with outlier treatment and feature scaling",
			"Multicollinearity reduction techniques",
			"Gradient boosting for enhanced prediction accuracy"
		],
		outcomes: [
			"20% improvement in prediction accuracy through optimization",
			"Identified key cost drivers: 'promotion_name' and 'media_type'",
			"Enhanced model interpretability using SHAP analysis",
			"Robust feature engineering pipeline for better model performance"
		],
		course: "Data Science Engineering Methods and Tools",
		bgColor: "bg-portfolio-sage/40",
		githubLink: "https://github.com/polampellys/INFO6105_DataScienceEngineeringMethods_SPRING2024",
		certificateLink: "https://drive.google.com/your-dsem-certificate-link"
	},
	{
		id: 2,
		title: "Boston Hospital Management System",
		image: "/Portfolio/AED.png",
		category: "Enterprise Application Development",
		shortDescription: "Comprehensive hospital ecosystem supporting four operational modules with role-based access, reducing data retrieval time by 40%.",
		fullDescription: "Developed a unified healthcare management platform using Java Swing that integrates Hospital, Ambulance, Diagnostics, and Pharmacy operations into a single secure system. The application features role-based access controls, real-time tracking, and advanced reporting functionality.",
		technologies: ["Java", "Java Swing", "Object-Oriented Programming", "UML", "Enterprise Architecture"],
		keyFeatures: [
			"Four integrated enterprise modules: Hospital, Ambulance, Diagnostics, Pharmacy",
			"Role-based access controls for doctors, drivers, diagnosticians, pharmacists",
			"Patient management and appointment scheduling system",
			"Real-time ambulance dispatch and tracking",
			"Laboratory test management and machine vendor coordination",
			"End-to-end pharmacy inventory and prescription management",
			"Advanced reporting and analytics dashboard"
		],
		outcomes: [
			"40% reduction in data retrieval time",
			"Eliminated data silos across healthcare domains",
			"Improved system efficiency through streamlined workflows",
			"Enhanced security with role-based access implementation"
		],
		course: "Application Engineering and Development",
		bgColor: "bg-portfolio-blush/40",
		githubLink: "https://github.com/polampellys/AED_Final_Project"
	},
	{
		id: 3,
		title: "Travilago Travel Booking Platform",
		image: "/Portfolio/WEBD.png",
		category: "Full-Stack Web Development",
		shortDescription: "Scalable travel booking platform with ReactJS frontend, Node.js backend, and MongoDB integration, improving system efficiency by 33%.",
		fullDescription: "Built a comprehensive travel booking website featuring responsive user interfaces, secure backend APIs, and real-time data management. The platform includes advanced authentication, payment processing, and booking management systems.",
		technologies: ["ReactJS", "Node.js", "MongoDB", "Express.js", "REST APIs", "Authentication", "Payment Integration"],
		keyFeatures: [
			"Responsive and dynamic ReactJS user interface",
			"Secure Node.js backend with RESTful APIs",
			"Real-time data management with MongoDB integration",
			"Third-party payment API integration",
			"Advanced user authentication and authorization",
			"Real-time booking tracking and management",
			"Admin workflow optimization tools",
			"Scalable architecture for high-traffic handling"
		],
		outcomes: [
			"33% improvement in system efficiency",
			"Streamlined payment processing workflow",
			"Enhanced user and admin experience",
			"Real-time booking management capabilities"
		],
		course: "Web Design and Development",
		bgColor: "bg-portfolio-taupe/40",
		githubLink: "https://github.com/polampellys/my_Tour_Web-main"
	},
	{
		id: 4,
		title: "Trivia Parking Space Management",
		image: "/Portfolio/DP.png",
		category: "Design Patterns & Architecture",
		shortDescription: "Parking management system implementing 9 GoF design patterns with multi-tier services and wallet-based payments.",
		fullDescription: "Comprehensive parking management application featuring three service tiers (Green, Gold, Orange) with integrated car wash and inspection services. Demonstrates mastery of object-oriented design principles through implementation of multiple design patterns.",
		technologies: ["Java", "Design Patterns", "Object-Oriented Programming", "Software Architecture"],
		keyFeatures: [
			"Three service tiers: Green (parking), Gold (parking + car wash), Orange (parking + inspection)",
			"Support for registered users and walk-in guests",
			"Wallet-based payment system with premium pricing",
			"Implementation of 9 GoF design patterns",
			"Capacity management: Green (150), Gold (100), Orange (40)",
			"Premium fee calculation for tier mismatches"
		],
	designPatterns: [
		"Singleton: Core controller instances",
		"Factory: Billing strategy objects",
		"Strategy: Service line billing algorithms",
		"Adapter: Payment method integration",
		"Prototype: User and vehicle model cloning",
		"Decorator: Dynamic feature additions",
		"State: Parking lot availability management",
		"Observer: State change notifications",
		"Facade: Simplified operation interfaces"
	],
		outcomes: [
			"Successfully implemented 9 GoF design patterns",
			"Efficient tier management and premium pricing logic",
			"Scalable architecture for future enhancements",
			"Demonstrated advanced object-oriented design principles"
		],
		course: "Design Patterns",
		bgColor: "bg-portfolio-mint/40",
		githubLink: "https://github.com/polampellys/Trivia_Parking_Space"
	},
	{
		id: 5,
		title: "Boston Transit Database Management (BTDMS)",
		image: "/Portfolio/DMDD.png",
		category: "Database Design & Analytics",
		shortDescription: "Comprehensive MBTA database solution with security encryption, performance optimization, and Power BI dashboards.",
		fullDescription: "End-to-end database management system for Massachusetts Bay Transportation Authority featuring advanced security measures, performance optimization, and interactive reporting dashboards.",
		technologies: ["SQL Server", "Power BI", "Database Design", "T-SQL", "Data Encryption", "Performance Optimization"],
		keyFeatures: [
			"Comprehensive ERD with entities: STATION, ROUTE, TRAIN, SCHEDULE, EMPLOYEE, TRANSIT_CARD, COMPLAINT",
			"Transparent Data Encryption (TDE) for SSN protection",
			"Non-clustered unique indexes for performance optimization",
			"User-defined functions (dbo.CalculateAge)",
			"Automated triggers for business rule enforcement",
			"Stored procedures for complex queries",
			"Power BI dashboards for real-time analytics"
		],
		outcomes: [
			"Eliminated data silos across transit operations",
			"Enhanced security with TDE encryption implementation",
			"Improved query performance with strategic indexing",
			"Real-time reporting capabilities for stakeholders"
		],
		course: "Database Management and Design",
		bgColor: "bg-portfolio-sage/40",
		githubLink: "https://github.com/polampellys/Boston_Transit_System"
	},
	{
		id: 6,
		title: "Costco Website Redesign",
		image: "/Portfolio/UX.png",
		category: "UI/UX Design",
		shortDescription: "15-day design sprint improving membership conversion and user experience, achieving SUS score improvement from 68 to 82.",
		fullDescription: "Comprehensive UX redesign addressing membership signup friction, product discovery challenges, and checkout abandonment through user research, prototyping, and usability testing.",
		technologies: ["Figma", "Balsamiq", "User Research", "Usability Testing", "Design Systems", "Prototyping"],
		keyFeatures: [
			"Streamlined 4-step membership flow with progress indicators",
			"Enhanced search interface with auto-complete and filter chips",
			"Step-by-step checkout wizard reducing cognitive load",
			"Comprehensive design system with reusable components",
			"Five-plane framework implementation",
			"Accessibility-compliant design with proper contrast ratios"
		],
		researchMethods: [
			"Surveys and interviews with 50+ Costco shoppers",
			"Five persona development and journey mapping",
			"Moderated usability testing with 12 participants",
			"System Usability Scale (SUS) evaluation",
			"A/B testing recommendations"
		],
		outcomes: [
			"SUS score improvement from 68 to 82",
			"Projected 20-25% uplift in membership sign-ups",
			"15% estimated decrease in cart abandonment",
			"30% reduction in deep navigation complexity"
		],
		course: "UI/UX Design",
		bgColor: "bg-portfolio-blush/40",
		githubLink: "https://github.com/polampellys/Costco_Website_Redesign"
	},
	{
		id: 7,
		title: "Autonomous Vehicle Integration System",
		image: "/Portfolio/Agile.png",
		category: "Agile Development & Systems Integration",
		shortDescription: "Capstone project implementing Agile methodologies and Scrum practices through a theoretical autonomous vehicle integration study.",
		fullDescription: "Ten-week Agile capstone project focused on learning and applying Agile principles and Scrum methodologies through a theoretical study of autonomous vehicle integration into metropolitan traffic networks. The project emphasized practical application of Agile practices rather than technical implementation.",
		technologies: ["Agile Methodologies", "Scrum Framework", "Sprint Planning", "User Story Mapping", "Stakeholder Management", "Product Backlog Management"],
		keyFeatures: [
			"Applied Agile principles through theoretical infrastructure design",
			"Practiced Scrum framework with sprint cycles and ceremonies",
			"Developed user stories and acceptance criteria",
			"Conducted stakeholder engagement and feedback sessions",
			"Implemented backlog management and prioritization techniques",
			"Practiced continuous improvement through retrospectives"
		],
		agilePractices: [
			"Scrum Master facilitation of daily stand-ups and retrospectives",
			"Product backlog management with 35+ user stories",
			"MoSCoW prioritization and Planning Poker estimation",
			"Five 2-week sprint cycles with stakeholder demos",
			"Burndown charts and velocity tracking",
			"Continuous backlog refinement and adaptation"
		],
		outcomes: [
			"Earned Certificate in Agile Practices",
			"Stable team velocity of ~20 story points per sprint",
			"40% reduction in late-stage scope changes",
			"Practical understanding of Agile principles and Scrum methodology"
		],
		course: "Agile Software Development Capstone",
		bgColor: "bg-portfolio-taupe/40",
		githubLink: "https://github.com/polampellys/Agile"
	}
];

const ProjectsSection = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<section id="projects" className="section bg-portfolio-cream">
			<div className="container px-4 sm:px-6">
				<h2 className="section-title text-center">Featured Projects</h2>
				<p className="section-subtitle text-center">
					A comprehensive portfolio spanning data science, full-stack development, UI/UX design, and enterprise systems
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{projects.map((project, index) => (
						<Dialog key={project.id}>
							<DialogTrigger asChild>
								<Card
									className={`overflow-hidden border-none card-hover animate-scale-in cursor-pointer ${index % 2 === 0 ? '' : 'md:mt-8'}`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div
										className={`h-48 ${project.bgColor} flex items-center justify-center relative`}
									>
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<CardContent className="p-6">
										<div className="mb-2">
											<span className="text-xs text-portfolio-navy/60 uppercase tracking-wider">{project.category}</span>
										</div>
										<h3 className="text-xl font-serif mb-3">{project.title}</h3>
										<p className="text-portfolio-navy/75 mb-4 text-sm">{project.shortDescription}</p>
										<div className="flex flex-wrap gap-1 mb-4">
											{(project.technologies || []).slice(0, 3).map((tech, i) => (
												<Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
											))}
											{(project.technologies || []).length > 3 && (
												<Badge variant="outline" className="text-xs">+{(project.technologies || []).length - 3}</Badge>
											)}
										</div>
										<div className="flex items-center justify-between">
											<span className="text-portfolio-navy hover:text-portfolio-navy/80 transition-colors text-sm">
												View Details →
											</span>
										</div>
									</CardContent>
								</Card>
							</DialogTrigger>

							<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
								<DialogHeader>
									<DialogTitle className="text-2xl font-serif">{project.title}</DialogTitle>
									<p className="text-portfolio-navy/60">{project.category}</p>
								</DialogHeader>

								<div className="space-y-6">
									<div>
										<h4 className="font-semibold mb-2">Project Overview</h4>
										<p className="text-portfolio-navy/80">{project.fullDescription}</p>
									</div>

									<div>
										<h4 className="font-semibold mb-2">Technologies Used</h4>
										<div className="flex flex-wrap gap-2">
											{(project.technologies || []).map((tech, i) => (
												<Badge key={i} variant="secondary">{tech}</Badge>
											))}
										</div>
									</div>

									<div>
										<h4 className="font-semibold mb-2">Key Features</h4>
										<ul className="list-disc list-inside space-y-1 text-portfolio-navy/80">
											{(project.keyFeatures || []).map((feature, i) => (
												<li key={i}>{feature}</li>
											))}
										</ul>
									</div>

									{project.designPatterns && (
										<div>
											<h4 className="font-semibold mb-2">Design Patterns Implemented</h4>
											<ul className="list-disc list-inside space-y-1 text-portfolio-navy/80">
												{(project.designPatterns || []).map((pattern, i) => (
													<li key={i}>{pattern}</li>
												))}
											</ul>
										</div>
									)}

									{project.researchMethods && (
										<div>
											<h4 className="font-semibold mb-2">Research Methods</h4>
											<ul className="list-disc list-inside space-y-1 text-portfolio-navy/80">
												{(project.researchMethods || []).map((method, i) => (
													<li key={i}>{method}</li>
												))}
											</ul>
										</div>
									)}

									{project.agilePractices && (
										<div>
											<h4 className="font-semibold mb-2">Agile Practices Applied</h4>
											<ul className="list-disc list-inside space-y-1 text-portfolio-navy/80">
												{(project.agilePractices || []).map((practice, i) => (
													<li key={i}>{practice}</li>
												))}
											</ul>
										</div>
									)}

									<div>
										<h4 className="font-semibold mb-2">Outcomes & Impact</h4>
										<ul className="list-disc list-inside space-y-1 text-portfolio-navy/80">
											{(project.outcomes || []).map((outcome, i) => (
												<li key={i}>{outcome}</li>
											))}
										</ul>
									</div>

									{project.githubLink && (
										<div className="mt-4">
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy text-white rounded-lg hover:bg-portfolio-navy/90 transition-colors"
											>
												<Github className="h-5 w-5" />
												View on GitHub
											</a>
										</div>
									)}

									{project.course && (
										<div>
											<h4 className="font-semibold mb-2">Course</h4>
											<p className="text-portfolio-navy/80">{project.course}</p>
										</div>
									)}


								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
