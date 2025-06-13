
import { Play, Palette, Code } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Editing",
      description: "Expert in Filmora for creating engaging video content",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Proficient in Canva for stunning visual designs",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "MERN Stack",
      description: "Full-stack development with MongoDB, Express, React, Node.js",
      color: "from-green-500 to-cyan-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Creative Professional & Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Rohan Katyal, a passionate creative professional who bridges the gap between 
              visual storytelling and technology. With expertise in video editing, graphic design, 
              and full-stack development, I help brands create compelling digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My mission is simple: to help brands grow through powerful visuals that connect 
              with audiences and drive meaningful engagement. Whether it's crafting the perfect 
              video narrative or designing eye-catching graphics, I bring ideas to life with 
              precision and creativity.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Filmora", "Canva", "React", "Node.js", "MongoDB", "Express"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
