import { useCallback } from 'react';

interface ScrollIndicatorProps {
  currentSection: number;
  totalSections: number;
  scrollProgress: number;
  onNavigate: (index: number) => void;
  sectionNames: string[];
}

const ScrollIndicator = ({ 
  currentSection, 
  totalSections, 
  scrollProgress, 
  onNavigate,
  sectionNames 
}: ScrollIndicatorProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {/* Progress line */}
      <div className="relative h-40 w-0.5 bg-charcoal/20 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full bg-mustard rounded-full transition-all duration-300"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Section dots */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: totalSections }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className="group relative flex items-center"
            aria-label={`Navigate to ${sectionNames[i]}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSection
                  ? 'bg-mustard scale-125 shadow-lg shadow-mustard/50'
                  : i < currentSection
                  ? 'bg-mustard/60'
                  : 'bg-charcoal/30 hover:bg-charcoal/50'
              }`}
            />
            {/* Tooltip */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-charcoal bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
              {sectionNames[i]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
