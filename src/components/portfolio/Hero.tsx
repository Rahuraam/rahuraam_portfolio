
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume file to the public folder
    link.download = 'Rahuraam_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          {/* Profile Picture with enhanced animations */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3 animate-scale-in">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/47723116-d2e8-4980-8503-35368211fd48.png" 
                alt="Rahuraam R - Full Stack Developer"
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
              Rahuraam R
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="hover:text-cyan-400 transition-colors duration-300">Full Stack Developer</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Passionate about creating innovative solutions through code. 
            Dedicated to continuous learning and delivering exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-5 w-5 animate-bounce" />
            Download Resume
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://github.com/Rahuraam', '_blank')}
            >
              <Github className="mr-2 h-5 w-5 hover:rotate-12 transition-transform duration-300" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://linkedin.com/in/rahuraam-r-0b3a65283', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5 hover:rotate-12 transition-transform duration-300" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
