
import { ExternalLink, Code } from "lucide-react";

const WebDevelopment = () => {
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

  return (
    <section id="webdev" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Web <span className="text-cyan-400">Development</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            My web development projects showcasing MERN stack skills and Three.js exploration over 4 months of learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-700 hover:border-cyan-400/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-cyan-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
