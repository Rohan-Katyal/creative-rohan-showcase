import { Play, Palette, Code, Sparkles, Workflow } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Editing",
      description: "Filmora for fast edits, transitioning to DaVinci Resolve for pro-level control",
      color: "from-mustard to-mustard/80"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Creation",
      description: "Using AI tools for image and video generation to speed up creative workflows",
      color: "from-charcoal to-charcoal/80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "MERN stack for web apps, exploring Three.js for interactive experiences",
      color: "from-mustard to-charcoal"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Canva for clean, effective visuals that communicate clearly",
      color: "from-charcoal to-mustard"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Project Execution",
      description: "Managing ideas from concept to delivery with structured workflows",
      color: "from-mustard/90 to-charcoal/90"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-mustard-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Creative Builder & <span className="text-mustard">Visual Technologist</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-charcoal/85 text-lg leading-relaxed">
              I'm <span className="font-semibold text-charcoal">Rohan Katyal</span>—a creative builder working at the intersection of creativity, technology, and AI. I turn ideas into real projects by combining visual storytelling, web development, and modern AI tools.
            </p>
            <p className="text-charcoal/85 text-lg leading-relaxed">
              My toolkit includes video editing with Filmora (currently leveling up to DaVinci Resolve), full-stack development using the MERN stack, and AI-powered image and video generation to speed up creative workflows. I also create clean visuals with Canva and experiment with Three.js for interactive web experiences.
            </p>
            <p className="text-charcoal/85 text-lg leading-relaxed">
              What drives me is solving problems through making—not just learning, but building, iterating, and shipping. I manage projects from concept to execution: structuring workflows, staying organized, and delivering outcomes that work.
            </p>
            <p className="text-charcoal/85 text-lg leading-relaxed">
              I'm still growing, and that's intentional. Every project teaches me something new. If you're looking for someone who can handle real creative and technical work while staying curious and adaptable, let's connect.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Filmora", "DaVinci Resolve", "AI Generation", "Canva", "Three.js", "React", "Node.js", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="bg-white border border-mustard text-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-5 rounded-xl border border-mustard/20 hover:border-mustard/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white flex-shrink-0`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-charcoal mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-charcoal/70 text-sm">
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
