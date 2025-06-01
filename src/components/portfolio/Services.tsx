
import { Code, Globe, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Code Optimization"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Creating responsive and user-friendly web applications tailored to your business needs.",
      features: ["Responsive Design", "Cross-browser Compatibility", "Performance Optimization", "SEO Friendly"]
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Designing and implementing efficient database solutions for your applications.",
      features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
