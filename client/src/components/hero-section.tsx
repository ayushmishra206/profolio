import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { SiDrupal } from "react-icons/si";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-slate-900 mb-6 leading-tight">
              <span className="text-primary">Hi, I'm</span><br />
              <span className="relative">
                Ayush Mishra
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-slate-600 mb-8 font-medium">
              <span className="text-primary font-mono">Senior Drupal Engineer</span> crafting scalable web solutions
              <br />with <span className="text-green-600 font-semibold">50+ open source contributions</span>
            </div>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Specialized in Drupal architecture, CiviCRM integrations, and delivering robust, 
              scalable web applications. Proven track record of leading technical teams and 
              contributing to impactful open-source projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("experience")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View My Experience
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <a 
                href="mailto:ayushmishra206@gmail.com" 
                className="text-slate-500 hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/ayushmishra206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/ayushmishra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://drupal.org/u/ayushmishra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors duration-200"
                aria-label="Drupal.org Profile"
              >
                <SiDrupal className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="animate-slide-up lg:pl-8">
            <img 
              src="https://www.drupal.org/files/styles/grid-2-2x-square/public/user-pictures/picture-3649361-1592237320.png" 
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
