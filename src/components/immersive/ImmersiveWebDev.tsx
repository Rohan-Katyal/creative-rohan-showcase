import { ExternalLink, Code, Monitor, Smartphone } from "lucide-react";

interface ImmersiveWebDevProps {
  progress: number;
}

const ImmersiveWebDev = ({ progress }: ImmersiveWebDevProps) => {
  const projects = [
    {
      id: 1,
      title: "Capstone Project",
      description: "A comprehensive web development project showcasing MERN stack skills and modern web design principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      liveUrl: "https://rohan-katyal.github.io/Capstone-Project/HomePage.html",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      id: 2,
      title: "Three.js Course Build",
      description: "Interactive 3D web experience built with Three.js, demonstrating advanced web development and 3D graphics skills.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      liveUrl: "https://rohan-katyal.github.io/ThreeJs-course-build-version/",
      tech: ["Three.js", "JavaScript", "WebGL", "3D Graphics"]
    }
  ];

  const openProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getCardStyle = (index: number) => {
    const staggerDelay = index * 0.15;
    const cardProgress = Math.max(0, Math.min(1, (progress - staggerDelay) / 0.5));
    
    return {
      opacity: cardProgress,
      transform: `translateY(${(1 - cardProgress) * 60}px) rotateX(${(1 - cardProgress) * 10}deg)`,
    };
  };

  return (
    <div className="w-full h-full overflow-y-auto py-20 px-4 sm:px-6 lg:px-8 bg-mustard-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            Web <span className="text-mustard">Development</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-8 rounded-full" />
          <p className="text-charcoal/70 text-base md:text-lg max-w-3xl mx-auto">
            My web development projects showcasing MERN stack skills and Three.js exploration over 4 months of learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-mustard/20 hover:border-mustard/50 cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => openProject(project.liveUrl)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-mustard text-charcoal p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Visit Live Site</span>
                      <div className="flex space-x-2">
                        <Monitor className="w-5 h-5 text-mustard" />
                        <Smartphone className="w-5 h-5 text-mustard" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner indicator */}
                <div className="absolute top-4 right-4 bg-charcoal/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-mustard w-4 h-4" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="w-5 h-5 text-mustard" />
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-mustard transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-mustard-light border border-mustard text-charcoal px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-mustard text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Click to view project
                  </div>
                  <div className="flex items-center space-x-2 text-charcoal/60 text-xs">
                    <Monitor className="w-4 h-4" />
                    <span>•</span>
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile friendly</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImmersiveWebDev;
