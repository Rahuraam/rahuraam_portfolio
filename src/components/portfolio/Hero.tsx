
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
              <img 
                src="/lovable-uploads/47723116-d2e8-4980-8503-35368211fd48.png" 
                alt="Rahuraam R - Full Stack Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rahuraam R
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Dedicated to continuous learning and delivering exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
              onClick={() => window.open('https://github.com/Rahuraam', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
              onClick={() => window.open('https://linkedin.com/in/rahuraam-r-0b3a65283', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
