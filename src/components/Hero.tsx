
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mustard-light">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mustard/10 via-mustard-light to-mustard/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-mustard rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-mustard rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-charcoal">Rohan</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mustard to-mustard/70">
            Katyal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal/80 mb-8 animate-fade-in animation-delay-500 font-medium">
          Freelance Video Editor & Aspiring Full-Stack Developer
        </p>
        
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
          4 months of freelance video editing with Filmora • Learning DaVinci Resolve & Three.js • Building with MERN Stack
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
          <a
            href="#videos"
            className="bg-charcoal text-mustard px-8 py-4 rounded-full font-semibold hover:bg-mustard hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-mustard/25 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-charcoal hover:text-mustard transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-mustard" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
