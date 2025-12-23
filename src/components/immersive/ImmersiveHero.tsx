import { ArrowDown, ChevronDown } from "lucide-react";

interface ImmersiveHeroProps {
  progress: number;
  onScrollDown: () => void;
}

const ImmersiveHero = ({ progress, onScrollDown }: ImmersiveHeroProps) => {
  // Parallax effect based on progress
  const parallaxY = progress * 100;
  const textOpacity = 1 - progress * 0.5;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-mustard-light">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mustard/10 via-mustard-light to-mustard/20" />
      
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-4 -left-4 w-72 h-72 bg-mustard rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-8 -right-4 w-72 h-72 bg-mustard rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-charcoal/10 rounded-full mix-blend-multiply filter blur-2xl"
          style={{ transform: `translateY(${parallaxY * 0.7}px)` }}
        />
      </div>

      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ opacity: textOpacity }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-charcoal">Rohan</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mustard to-mustard/70">
            Katyal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 mb-8 font-medium">
          Freelance Video Editor & Aspiring Full-Stack Developer
        </p>
        
        <p className="text-lg md:text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto">
          4 months of freelance video editing with Filmora • Learning DaVinci Resolve & Three.js • Building with MERN Stack
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onScrollDown}
            className="bg-charcoal text-mustard px-8 py-4 rounded-full font-semibold hover:bg-mustard hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-mustard/25 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={onScrollDown}
            className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-charcoal hover:text-mustard transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={onScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/60 hover:text-mustard transition-colors cursor-pointer group"
      >
        <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-mustard" />
      </button>
    </div>
  );
};

export default ImmersiveHero;
