import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  summary: string;
  highlights?: string[];
  techStack: string[];
  tags?: string[];
  badge?: string;
  links?: {
    live?: string;
    repo?: string;
  };
};

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

  const featuredProjects: Project[] = [
    {
      title: "Washington.org Migration",
      summary: "Delivered a seamless Drupal 7 → 8 migration for Washington.org, keeping a 1M+ monthly visitor pipeline live while rebuilding the design system in Pattern Lab.",
      highlights: [
        "Optimized MySQL queries across legacy content imports",
        "Introduced Varnish + Memcached caching layers for rapid responses",
        "Redesigned UI components with reusable Pattern Lab atoms"
      ],
      techStack: ["Drupal 7→8", "Pattern Lab", "MySQL", "Varnish", "Memcached"],
      tags: ["High Traffic", "Migration"],
      badge: "Enterprise Migration"
    }
  ];

  const supportingProjects: Project[] = [
    {
      title: "Disability Rights UK",
      summary: "Implemented a fully accessible Drupal experience meeting WCAG 2.1 AA, including keyboard-friendly navigation and screen-reader semantics.",
      techStack: ["Accessibility", "Drupal", "Bootstrap"],
      tags: ["WCAG 2.1"],
      badge: "Inclusive Design"
    },
    {
      title: "Intake Education Platform",
      summary: "Scaled content ingestion for 1500+ education programs with automated ranking rules while keeping API integrations lean and observable.",
      techStack: ["REST APIs", "Cron Jobs", "Content Ranking"],
      tags: ["Big Data"],
      badge: "Data Ops"
    },
    {
      title: "Carers UK Portal",
      summary: "Built a CiviCRM-backed self-service portal so carers can manage membership details, reducing manual data entry for internal teams.",
      techStack: ["CiviCRM", "Workflows", "Self-Service"],
      tags: ["Portal"],
      badge: "Member Experience"
    }
  ];

  const personalProjects: Project[] = [
    {
      title: "SplitWisely",
      summary: "Group expense sharing PWA that keeps roommates, friends, and travel buddies in sync with transparent balances and quick settlements.",
      highlights: [
        "Realtime Supabase security policies scoped to group membership",
        "Expense and settlement flows powered by React Hook Form",
        "Responsive, offline-friendly Vite build with Tailwind theming"
      ],
      techStack: ["React 18", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
      tags: ["Side Project"],
      badge: "Maker Lab",
      links: {
        live: "https://split.ayushmishra.com/",
        repo: "https://github.com/ayushmishra206/splitwisely"
      }
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => {
    const hasLinks = project.links && (project.links.live || project.links.repo);

    return (
      <Card className="h-full border border-slate-200 bg-white/80 backdrop-blur">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.badge && (
              <Badge variant="outline" className="text-xs font-mono uppercase tracking-[0.08em]">
                {project.badge}
              </Badge>
            )}
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-2xl font-semibold text-slate-900">
            {project.title}
          </CardTitle>
          <p className="text-slate-600 leading-relaxed">
            {project.summary}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Highlights</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {hasLinks && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links?.live && (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    Visit Live App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.links?.repo && (
                <Button asChild variant="outline">
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    View Source
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A blend of high-impact client delivery and personal products, all built with a focus on reliability, accessibility, and fast iteration.
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-mono font-semibold text-slate-900">
                  Maker Playground
                </h3>
                <p className="text-slate-600 max-w-2xl">
                  Personal builds where I ship fast, iterate with users, and stress-test modern tooling in the wild.
                </p>
              </div>
              <Badge variant="secondary" className="self-start sm:self-auto text-xs uppercase tracking-wide">
                Always Shipping
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-mono font-semibold text-slate-900">
                  Supporting Impact
                </h3>
                <p className="text-slate-600 max-w-2xl">
                  Targeted engagements where accessibility, data flow, and member experience were the core KPIs.
                </p>
              </div>
              <Badge variant="secondary" className="self-start sm:self-auto text-xs uppercase tracking-wide">
                Delivery Notes
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-mono font-semibold text-slate-900">
                  Featured Engagement
                </h3>
                <p className="text-slate-600 max-w-2xl">
                  Enterprise delivery work that demanded scale, migration strategy, and a steady hand under traffic.
                </p>
              </div>
              <Badge variant="secondary" className="self-start sm:self-auto text-xs uppercase tracking-wide">
                Client Spotlight
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
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
