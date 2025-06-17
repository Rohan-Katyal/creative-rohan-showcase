
import { Play, Palette, Code } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Editing",
      description: "4 months of freelance experience with Filmora, learning DaVinci Resolve",
      color: "from-mustard to-mustard/80"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "2 months of experience creating designs with Canva",
      color: "from-charcoal to-charcoal/80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "4 months MERN Stack experience, learning Three.js for web development",
      color: "from-mustard to-charcoal"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-mustard-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            About <span className="text-mustard">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">
              Creative Professional & Developer
            </h3>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              I'm Rohan Katyal, a passionate beginner in the creative and tech space. Over the past 
              4 months, I've been working as a freelance video editor using Filmora, constantly 
              honing my skills and exploring new tools like DaVinci Resolve.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              In parallel, I've been developing my full-stack development skills with the MERN stack 
              for 4 months and recently started learning Three.js for immersive web experiences. 
              I'm also expanding into graphic design with Canva over the past 2 months.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              My mission is to grow as a creative professional while helping brands tell their 
              stories through compelling visuals and innovative web experiences.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Filmora", "DaVinci Resolve", "Canva", "Three.js", "React", "Node.js", "MongoDB", "Express"].map((skill) => (
                <span
                  key={skill}
                  className="bg-white border border-mustard text-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm"
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
                className="bg-white p-6 rounded-xl border border-mustard/20 hover:border-mustard/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-charcoal mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-charcoal/70">
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
