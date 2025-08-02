import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-nord-10">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-nord-10 via-nord-9 to-nord-8 bg-clip-text text-transparent">
                Alex Nord
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
                <p>Graphic Designer</p>
                <p className="text-nord-8">&</p>
                <p>DevOps Specialist</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Creating beautiful designs and robust infrastructure. I bridge the gap between 
              creativity and technology, bringing visual concepts to life while ensuring 
              seamless deployment and scalability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-nord-8">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-nord-8">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-nord-8">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-nord-8 via-nord-9 to-nord-10 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-nord-4 to-nord-6 dark:from-nord-1 dark:to-nord-2 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-nord-10 to-nord-8 bg-clip-text text-transparent">
                    AN
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-nord-8 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-nord-14 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}