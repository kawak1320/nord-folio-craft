import { Card, CardContent } from "@/components/ui/card";
import { Palette, Server, Lightbulb, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Palette,
      title: "Creative Excellence",
      description: "Crafting visually stunning designs that communicate effectively and leave lasting impressions."
    },
    {
      icon: Server,
      title: "Technical Mastery",
      description: "Building robust, scalable infrastructure that powers modern applications with reliability."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Constantly exploring new technologies and design trends to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with cross-functional teams to bring ideas from concept to production."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nord-10 to-nord-8 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate creative professional who bridges the worlds of design and technology. 
            With a keen eye for aesthetics and deep technical expertise, I create comprehensive 
            solutions that are both beautiful and functional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Starting as a graphic designer, I discovered my passion for creating visual 
                experiences that not only look beautiful but also serve a purpose. This led 
                me to explore the technical side of bringing designs to life.
              </p>
              <p>
                My transition into DevOps was a natural evolution - I wanted to understand 
                how to make design systems scalable, maintainable, and accessible to users 
                worldwide. Now I architect the infrastructure that powers the experiences I design.
              </p>
              <p>
                This unique combination allows me to think holistically about projects, 
                considering both user experience and technical feasibility from the very 
                beginning of the creative process.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-nord-8/20 to-nord-10/20 rounded-2xl p-8 backdrop-blur-sm border">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-nord-10">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-nord-8">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-nord-9">20+</div>
                  <div className="text-xs text-muted-foreground">Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-nord-8/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-nord-8 to-nord-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}