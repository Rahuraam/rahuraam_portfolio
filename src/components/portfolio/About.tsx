
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">My Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My mission is to apply my technical skills and problem-solving abilities to deliver effective IT solutions. 
              I am dedicated to continuous learning, teamwork, and adapting to challenges while contributing to 
              organizational success by improving processes and staying updated with the latest industry trends.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Problem-solving mindset</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Continuous learning approach</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Team collaboration</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Industry trend awareness</span>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Education</h4>
                    <p className="text-gray-400">Academic Journey</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h5 className="text-lg font-medium text-white">B.E. in Computer Science</h5>
                    <p className="text-cyan-400 font-medium">Kathir College of Engineering</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    Currently pursuing my degree with a focus on full-stack development, 
                    data structures, algorithms, and modern web technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
