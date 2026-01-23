interface ScrollIndicatorProps {
  totalSections: number;
  currentSection: number;
  sectionNames: string[];
  onNavigate: (index: number) => void;
}

const ScrollIndicator = ({
  totalSections,
  currentSection,
  sectionNames,
  onNavigate,
}: ScrollIndicatorProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group flex items-center gap-3"
          aria-label={`Go to ${sectionNames[index]}`}
        >
          {/* Label on hover */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-charcoal dark:text-white bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-mustard/20 whitespace-nowrap">
            {sectionNames[index]}
          </span>
          
          {/* Dot indicator */}
          <div
            className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
              currentSection === index
                ? "bg-mustard scale-125 shadow-lg shadow-mustard/30"
                : "bg-charcoal/30 dark:bg-white/30 hover:bg-charcoal/50 dark:hover:bg-white/50"
            }`}
          >
            {/* Active ring animation */}
            {currentSection === index && (
              <div className="absolute inset-0 rounded-full bg-mustard/30 animate-ping" />
            )}
          </div>
        </button>
      ))}
      
      {/* Progress line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-charcoal/10 dark:bg-white/10 -z-10 rounded-full">
        <div 
          className="w-full bg-mustard rounded-full transition-all duration-500"
          style={{
            height: `${(currentSection / (totalSections - 1)) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
