import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "5+", label: "Concurrent Projects" },
    { value: "50+", label: "Open Source Contributions" },
    { value: "20%", label: "Efficiency Improvement" },
    { value: "2+", label: "Developers Mentored" },
  ];

  const coreValues = [
    { title: "Technical Excellence", description: "Zero critical post-launch issues" },
    { title: "Open Source", description: "Contributing back to the community" },
    { title: "Mentorship", description: "Fostering growth in others" },
    { title: "Innovation", description: "Solving complex challenges creatively" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey from BCA graduate to senior Drupal engineer, driven by passion for 
            open-source development and creating impactful web solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-600">
              <p className="leading-relaxed">
                With over <strong className="text-primary">4+ years of professional experience</strong>, 
                I've evolved from a curious Computer Applications graduate into a results-oriented 
                Software Engineer specializing in complex Drupal ecosystems and CiviCRM integrations.
              </p>
              <p className="leading-relaxed">
                My expertise spans the entire software development lifecycle, from architectural 
                planning to deployment and maintenance. I've successfully led technical teams, 
                mentored junior developers, and contributed significantly to the open-source community 
                with <strong className="text-green-600">50+ Drupal core contributions</strong>.
              </p>
              <p className="leading-relaxed">
                What drives me is the challenge of translating complex client requirements into 
                robust, scalable solutions. Whether it's architecting a membership portal for 
                thousands of users or optimizing performance for high-traffic websites, I thrive 
                on delivering technical excellence that creates real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with multiple monitors and code" 
              className="rounded-xl shadow-lg w-full"
            />
            
            <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-mono font-semibold text-slate-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                {coreValues.map((value, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle className="text-primary w-5 h-5 mr-3 flex-shrink-0" />
                    <span><strong>{value.title}:</strong> {value.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
