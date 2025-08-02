import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const designSkills = [
    { name: "Adobe Creative Suite", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Brand Identity", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "Typography", level: 92 },
    { name: "Color Theory", level: 90 }
  ];

  const devopsSkills = [
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "AWS", level: 88 },
    { name: "CI/CD", level: 92 },
    { name: "Terraform", level: 80 },
    { name: "Monitoring", level: 85 }
  ];

  const tools = [
    "Photoshop", "Illustrator", "Figma", "Sketch", "InDesign",
    "Docker", "Kubernetes", "Jenkins", "GitLab CI", "AWS", "Azure",
    "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nord-10 to-nord-8 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A unique blend of creative and technical skills that enable me to deliver 
            comprehensive solutions from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Design Skills */}
          <Card className="border-2 hover:border-nord-8/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-nord-12 to-nord-13 rounded-lg"></div>
                <span>Design Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* DevOps Skills */}
          <Card className="border-2 hover:border-nord-8/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-nord-8 to-nord-10 rounded-lg"></div>
                <span>DevOps Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {devopsSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="border-2 hover:border-nord-8/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-nord-14 to-nord-15 rounded-lg"></div>
              <span>Tools & Technologies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="hover:bg-nord-8/20 hover:text-nord-10 transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}