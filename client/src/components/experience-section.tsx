import { CheckCircle, Code, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Drupal Engineer (L2)",
      company: "Compuco",
      location: "Remote",
      period: "Apr 2022 – Present",
      current: true,
      description: "Leading technical architecture and development for complex Drupal and CiviCRM solutions, managing multiple concurrent projects and driving technical excellence across development teams.",
      achievements: [
        "Managed 5+ concurrent Drupal projects with complex CiviCRM integrations",
        'Ensured code quality; zero critical QA issues, cut delays 10%.',
        'Enhanced documentation, reducing issue clarification time by 15%.',
        "Achieved zero critical post-launch QA issues",
        "Reduced project delays by 10% through proactive problem-solving"
      ],
      responsibilities: [
        "Complex CiviCRM integrations for membership and fundraising",
        "Technical documentation standardization (15% efficiency gain)",
        "Module deployments and CiviCRM update management",
        "Performance optimization and scalability implementation"
      ],
      technologies: ["Drupal 8/9/10", "CiviCRM", "Team Leadership", "Technical Architecture"]
    },
    {
      title: "Software Developer",
      company: "Opensense Labs",
      location: "Remote",
      period: "Oct 2020 - Mar 2022",
      current: false,
      description: "Specialized in large-scale Drupal development, open-source contributions, and mentoring junior developers while contributing to company's recognition as a top 3 global Drupal services provider.",
      achievements: [
        "50+ Drupal core issue patches and contributions",
        "Led complex multisite Drupal project with REST API integration",
        "Mentored 2 junior developers in advanced Drupal techniques",
        "Contributed to company's top 3 global marketplace ranking"
      ],
      responsibilities: [
        "Washington.org migration (1M+ monthly visitors)",
        "Intake Education platform with 2000+ API responses",
        "Automated cron jobs for 1500+ Drupal nodes",
        "Dynamic content ranking system development"
      ],
      technologies: ["Drupal 7/8", "Open Source", "REST APIs", "Mentoring"]
    }
  ];

  const mentorship = {
    title: "GSoC Mentor",
    organization: "Drupal Association • Google Summer of Code",
    period: "May 2024 - Sep 2024",
    description: "Mentored student contributors on Drupal projects, providing technical guidance, code reviews, and support to help them complete their projects and contribute to the Drupal ecosystem. Received completion certificate.",
    technologies: ["Mentorship", "Open Source", "Google", "Community"]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A journey of continuous growth, technical leadership, and impactful contributions 
            to complex web development projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {/* Current Position */}
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  experience.current ? 'bg-primary' : 'bg-slate-400'
                }`}></div>
                <div className="ml-20">
                  <div className={`p-8 rounded-xl border ${
                    experience.current 
                      ? 'bg-gradient-to-r from-primary/5 to-blue-50 border-primary/10' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-mono font-semibold text-slate-900">{experience.title}</h3>
                        <p className={`font-medium ${experience.current ? 'text-primary' : 'text-slate-600'}`}>
                          {experience.company} • {experience.location}
                        </p>
                      </div>
                      <div className="text-slate-600 font-medium">{experience.period}</div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <CheckCircle className={`mt-1 mr-2 flex-shrink-0 w-4 h-4 ${
                                experience.current ? 'text-green-600' : 'text-yellow-500'
                              }`} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Technical Responsibilities</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <Code className={`mt-1 mr-2 flex-shrink-0 w-4 h-4 ${
                                experience.current ? 'text-primary' : 'text-blue-600'
                              }`} />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant={experience.current ? "default" : "secondary"}
                          className="text-sm font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mentorship */}
            <div className="relative flex items-start">
              <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-mono font-semibold text-slate-900">{mentorship.title}</h3>
                      <p className="text-green-600 font-medium">{mentorship.organization}</p>
                    </div>
                    <div className="text-slate-600 font-medium">{mentorship.period}</div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {mentorship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {mentorship.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 text-sm font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
