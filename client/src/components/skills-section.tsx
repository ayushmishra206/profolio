import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SiDrupal } from "react-icons/si";
import { Users, Code, Settings, Brain, GraduationCap, Award } from "lucide-react";

export default function SkillsSection() {
  const drupalSkills = [
    { name: "Site Building & Architecture", level: 95, expertise: "Expert" },
    { name: "Custom Module Development (OOP PHP)", level: 90, expertise: "Expert" },
    { name: "Theming (Twig) & API Mastery", level: 88, expertise: "Advanced" },
    { name: "Performance Tuning & Headless", level: 85, expertise: "Advanced" },
  ];

  const civicrmSkills = [
    { name: "Configuration & Customization", level: 92, expertise: "Expert" },
    { name: "Drupal Integration (Entity, Webform)", level: 90, expertise: "Expert" },
    { name: "Membership & Event Management", level: 88, expertise: "Advanced" },
    { name: "API Development & Data I/O", level: 85, expertise: "Advanced" },
  ];

  const webSkills = [
    { name: "PHP (OOP)", expertise: "Expert" },
    { name: "MySQL", expertise: "Advanced" },
    { name: "JavaScript (ES6+)", expertise: "Advanced" },
    { name: "HTML5/CSS3", expertise: "Expert" },
    { name: "RESTful APIs", expertise: "Advanced" },
  ];

  const devTools = [
    { name: "Git/Bitbucket", expertise: "Expert" },
    { name: "JIRA", expertise: "Advanced" },
    { name: "Linux Environment", expertise: "Advanced" },
    { name: "Postman", expertise: "Advanced" },
    { name: "Agile/Scrum", expertise: "Proficient" },
  ];

  const softSkills = [
    "Analytical Thinking",
    "Technical Leadership", 
    "Problem Solving",
    "Mentoring & Training",
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack, with deep specialization 
            in Drupal ecosystem and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Drupal Expertise */}
          <Card className="shadow-lg border border-slate-200">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <SiDrupal className="text-2xl text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-mono text-slate-900">Drupal Expertise</CardTitle>
                  <p className="text-slate-600">Versions 7-10 • 50+ Core Contributions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {drupalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-600 font-mono">{skill.expertise}</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
              
              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Key Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Drush", "Composer", "Acquia Cloud", "Platform.sh"].map((tool, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CiviCRM & Integration */}
          <Card className="shadow-lg border border-slate-200">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-2xl text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-mono text-slate-900">CiviCRM & Integration</CardTitle>
                  <p className="text-slate-600">Deep Integration Specialist</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {civicrmSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-600 font-mono">{skill.expertise}</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
              
              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Key Modules</h4>
                <div className="flex flex-wrap gap-2">
                  {["Membership", "Events", "Case Management", "CiviRules"].map((module, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800">
                      {module}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Web Technologies */}
          <Card className="shadow-md border border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-lg text-purple-600" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-slate-900">Web Stack</h3>
              </div>
              <div className="space-y-3">
                {webSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    <span className="text-xs text-slate-500 font-mono">{skill.expertise}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Development Tools */}
          <Card className="shadow-md border border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Settings className="text-lg text-orange-600" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-slate-900">Dev Tools</h3>
              </div>
              <div className="space-y-3">
                {devTools.map((tool, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{tool.name}</span>
                    <span className="text-xs text-slate-500 font-mono">{tool.expertise}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-md border border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="text-lg text-indigo-600" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-slate-900">Soft Skills</h3>
              </div>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <Card className="shadow-lg border border-slate-200">
          <CardContent className="p-8">
            <h3 className="text-xl font-mono font-semibold text-slate-900 mb-6 text-center">
              Education & Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-2xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Master of Computer Applications</h4>
                <p className="text-slate-600 mb-1">Chandigarh University (Online)</p>
                <p className="text-sm text-slate-500">8.0 GPA • 2021-2023</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-2xl text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Google Summer of Code</h4>
                <p className="text-slate-600 mb-1">Mentor Certification</p>
                <p className="text-sm text-slate-500">Drupal Association • 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
