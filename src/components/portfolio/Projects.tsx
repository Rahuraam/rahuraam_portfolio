
import { ExternalLink, Github, Users, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Banana Plant Disease Detection using ML",
      description: "Machine learning project for detecting diseases in banana plants using image recognition and classification algorithms.",
      techStack: ["Python", "Machine Learning", "OpenCV", "TensorFlow"],
      type: "team",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=250&fit=crop"
    },
    {
      title: "Cafe Management System",
      description: "Desktop application built with Apache NetBeans for managing cafe operations including orders, inventory, and customer management.",
      techStack: ["Java", "Apache NetBeans", "MySQL", "Swing"],
      type: "solo",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=250&fit=crop"
    },
    {
      title: "Food Delivery App",
      description: "Full-stack web application for food delivery with user authentication, restaurant management, and order tracking.",
      techStack: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
      type: "solo",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in different technologies and development approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gray-900/80 text-white border-0">
                    {project.type === "team" ? (
                      <><Users className="h-3 w-3 mr-1" /> Team</>
                    ) : (
                      <><User className="h-3 w-3 mr-1" /> Solo</>
                    )}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-cyan-400 text-cyan-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
