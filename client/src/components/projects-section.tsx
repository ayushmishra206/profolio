import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const featuredProjects = [
    {
      title: "CIWEM Membership Portal",
      description: "Architected comprehensive membership portal with deep Drupal-CiviCRM integration, featuring member lifecycle management, event registration, and payment processing with real-time data synchronization.",
      achievements: [
        "Custom MySQL queries for optimized backend performance",
        "Real-time CiviCRM data display using Drupal Views",
        "Custom database structure for seamless data sync"
      ],
      techStack: ["Drupal 8/9", "CiviCRM", "MySQL", "PHP OOP", "Twig"],
      tags: ["Drupal 9", "CiviCRM"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Client Project"
    },
    {
      title: "FEMS Unified Platform",
      description: "Led technical development for Federation of European Microbiological Societies, integrating Drupal with CiviCRM for comprehensive membership, events, and scientific publication management with multilingual support.",
      achievements: [
        "Multilingual content management system",
        "Scientific publication workflow automation",
        "Dynamic Views connected to CiviCRM data"
      ],
      techStack: ["Drupal", "CiviCRM", "i18n", "Views"],
      tags: ["Multilingual", "Scientific"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Federation Project"
    },
    {
      title: "FOSFA Arbitration Portal",
      description: "Engineered secure, Drupal-based digital platform for Federation of Oils, Seeds and Fats Associations to manage arbitration case submissions, tracking, and complete case lifecycle with robust security measures.",
      achievements: [
        "Role-based access controls and workflows",
        "Custom modules for specialized case handling",
        "External data systems integration"
      ],
      techStack: ["Drupal", "Custom Modules", "RBAC", "Workflows"],
      tags: ["Secure", "Legal"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Federation Project"
    },
    {
      title: "Washington.org Migration",
      description: "Executed complex Drupal 7 to Drupal 8 migration for high-traffic tourism platform (1M+ monthly visitors) with advanced MySQL optimization, caching strategies, and complete frontend redesign using Pattern Lab methodology.",
      achievements: [
        "Advanced MySQL query tuning and optimization",
        "Varnish and Memcached implementation",
        "Custom components with Pattern Lab"
      ],
      techStack: ["Drupal 7→8", "Varnish", "Memcached", "Pattern Lab"],
      tags: ["High Traffic", "Migration"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "MMGY Global"
    }
  ];

  const additionalProjects = [
    {
      title: "Disability Rights UK",
      description: "Full WCAG 2.1 AA compliance implementation with accessible Bootstrap theming, keyboard navigation, and comprehensive screen reader support.",
      techStack: ["Accessibility", "Bootstrap", "WCAG"],
      tag: "WCAG 2.1"
    },
    {
      title: "Intake Education Platform",
      description: "High-performance backend handling 2000+ API responses, automated data sync for 1500+ nodes, and custom content ranking algorithms.",
      techStack: ["REST API", "Cron Jobs", "Algorithms"],
      tag: "Big Data"
    },
    {
      title: "Carers UK Portal",
      description: "Comprehensive self-service portal with CiviCRM integration, enabling profile management and significantly reducing administrative overhead.",
      techStack: ["Self-Service", "Workflows", "CiviCRM"],
      tag: "Self-Service"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of complex Drupal implementations, CiviCRM integrations, 
            and large-scale platform development projects.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-mono font-semibold text-slate-900">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-slate-500">{project.type}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-mono font-semibold text-slate-900">{project.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {project.tag}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
