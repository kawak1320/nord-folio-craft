import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Palette, Server } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      type: "Design",
      description: "Complete visual overhaul of a major e-commerce platform, improving user experience and conversion rates by 35%.",
      image: "🎨",
      tags: ["UI/UX", "Figma", "Brand Identity", "User Research"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "35% increase in conversions"
    },
    {
      id: 2,
      title: "Kubernetes Microservices Infrastructure",
      type: "DevOps",
      description: "Architected and deployed a scalable microservices infrastructure serving 1M+ daily users with 99.9% uptime.",
      image: "⚙️",
      tags: ["Kubernetes", "Docker", "AWS", "Terraform", "Monitoring"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "99.9% uptime achieved"
    },
    {
      id: 3,
      title: "Design System & Component Library",
      type: "Hybrid",
      description: "Created a comprehensive design system with automated deployment pipeline, used across 15+ applications.",
      image: "🎯",
      tags: ["Design System", "React", "Storybook", "CI/CD", "Documentation"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "15+ apps using system"
    },
    {
      id: 4,
      title: "Mobile App Brand Identity",
      type: "Design",
      description: "Developed complete brand identity and mobile app design for a fintech startup, resulting in $2M seed funding.",
      image: "📱",
      tags: ["Brand Design", "Mobile UI", "Prototyping", "User Testing"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "$2M funding raised"
    },
    {
      id: 5,
      title: "Multi-Cloud Deployment Pipeline",
      type: "DevOps",
      description: "Built automated deployment pipeline supporting AWS, Azure, and GCP with zero-downtime deployments.",
      image: "☁️",
      tags: ["Multi-Cloud", "Jenkins", "Ansible", "GitOps", "Security"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "Zero downtime deployments"
    },
    {
      id: 6,
      title: "Interactive Data Visualization Dashboard",
      type: "Hybrid",
      description: "Designed and developed real-time analytics dashboard with custom visualizations and automated scaling.",
      image: "📊",
      tags: ["Data Viz", "React", "D3.js", "WebSocket", "Auto-scaling"],
      links: {
        demo: "#",
        github: "#"
      },
      stats: "Real-time data processing"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Design": return <Palette className="h-4 w-4" />;
      case "DevOps": return <Server className="h-4 w-4" />;
      default: return <div className="h-4 w-4 bg-gradient-to-br from-nord-8 to-nord-10 rounded-full" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Design": return "bg-nord-13/20 text-nord-13 border-nord-13/30";
      case "DevOps": return "bg-nord-10/20 text-nord-10 border-nord-10/30";
      default: return "bg-nord-8/20 text-nord-8 border-nord-8/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nord-10 to-nord-8 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects showcasing the intersection of creative design 
            and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-nord-8/50">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className={`${getTypeColor(project.type)} flex items-center space-x-1`}>
                    {getTypeIcon(project.type)}
                    <span>{project.type}</span>
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-nord-10 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-sm font-medium text-nord-10">
                  {project.stats}
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}