import { Mail, Github, Linkedin } from "lucide-react";
import { SiDrupal } from "react-icons/si";

export default function Footer() {
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

  const quickLinks = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    "Drupal Development",
    "CiviCRM Integration",
    "Site Migrations",
    "Performance Optimization",
    "Technical Consulting",
  ];

  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:ayushmishra206@gmail.com",
      ariaLabel: "Email"
    },
    { 
      icon: Github, 
      href: "https://github.com/ayushmishra",
      ariaLabel: "GitHub"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/ayushmishra",
      ariaLabel: "LinkedIn"
    },
    { 
      icon: SiDrupal, 
      href: "https://drupal.org/u/ayushmishra",
      ariaLabel: "Drupal.org Profile"
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-2xl text-white mb-4">ayush.dev</div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Senior Drupal Engineer crafting scalable web solutions with a passion 
              for open-source development and technical excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  aria-label={link.ariaLabel}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Ayush Mishra. All rights reserved. Built with passion for clean code and exceptional user experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
