import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";

interface ImmersiveNavigationProps {
  currentSection: number;
  sectionProgress: number;
  onNavigate: (index: number) => void;
  sectionNames: string[];
}

const ImmersiveNavigation = ({ 
  currentSection, 
  sectionProgress,
  onNavigate, 
  sectionNames 
}: ImmersiveNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = sectionNames.map((name, index) => ({
    name,
    index,
  }));

  // Navbar moves up with hero section, then becomes fixed after hero exits
  const navStyles = useMemo(() => {
    if (currentSection === 0) {
      // During hero section, navbar scrolls up as progress increases
      const translateY = sectionProgress > 0.5 
        ? -((sectionProgress - 0.5) * 2) * 100 
        : 0;
      const opacity = sectionProgress > 0.7 ? 1 - ((sectionProgress - 0.7) / 0.3) : 1;
      
      return {
        transform: `translateY(${translateY}%)`,
        opacity: Math.max(0, opacity),
        position: 'absolute' as const,
      };
    }
    // After hero, navbar is hidden (other sections have their own context)
    return {
      transform: 'translateY(-100%)',
      opacity: 0,
      position: 'absolute' as const,
    };
  }, [currentSection, sectionProgress]);

  return (
    <nav 
      className="top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-mustard/20 shadow-sm transition-opacity duration-300"
      style={navStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => onNavigate(0)}
            className="flex items-center space-x-3 group"
          >
            <div className="text-2xl font-bold text-charcoal group-hover:text-mustard transition-colors">
              Rohan Katyal
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.index)}
                className={`font-medium transition-all duration-300 relative ${
                  currentSection === item.index 
                    ? 'text-mustard' 
                    : 'text-charcoal hover:text-mustard'
                }`}
              >
                {item.name}
                {currentSection === item.index && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mustard rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-mustard transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-mustard/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.index);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-3 transition-colors duration-300 ${
                  currentSection === item.index 
                    ? 'text-mustard font-semibold' 
                    : 'text-charcoal hover:text-mustard'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ImmersiveNavigation;
