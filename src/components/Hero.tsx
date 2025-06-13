
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Rohan</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Katyal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
          Freelance Video Editor & Aspiring Full-Stack Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
          4 months of freelance video editing with Filmora • Learning DaVinci Resolve & Three.js • Building with MERN Stack
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
          <a
            href="#videos"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
