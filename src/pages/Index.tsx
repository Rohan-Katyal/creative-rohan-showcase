import Hero from "../components/Hero";
import About from "../components/About";
import VideoPortfolio from "../components/VideoPortfolio";
import WebDevelopment from "../components/WebDevelopment";
import Navigation from "../components/Navigation";
import ImmersiveSection from "../components/ImmersiveSection";
import ScrollIndicator from "../components/ScrollIndicator";
import ThemeToggle from "../components/ThemeToggle";
import { useImmersiveScroll } from "../hooks/useImmersiveScroll";

const SECTIONS = [
  { name: "Home", component: Hero },
  { name: "About", component: About },
  { name: "Videos", component: VideoPortfolio },
  { name: "Web Dev", component: WebDevelopment },
];

const Index = () => {
  const { currentSection, isTransitioning, goToSection } = useImmersiveScroll({
    totalSections: SECTIONS.length,
    scrollResistance: 80,
    transitionDuration: 900,
  });

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-white dark:bg-charcoal text-charcoal dark:text-white font-poppins transition-colors duration-500">
      {/* Navigation - animates with first section */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          opacity: currentSection === 0 ? 1 : 0.95,
          transform: currentSection === 0 ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Navigation />
      </div>

      {/* Minimal nav for other sections */}
      <div
        className="fixed top-4 left-4 z-50 transition-all duration-500"
        style={{
          opacity: currentSection > 0 ? 1 : 0,
          transform: currentSection > 0 ? "translateY(0)" : "translateY(-20px)",
          pointerEvents: currentSection > 0 ? "auto" : "none",
        }}
      >
        <button
          onClick={() => goToSection(0)}
          className="text-xl font-bold text-charcoal dark:text-white hover:text-mustard transition-colors bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-mustard/20 dark:border-mustard/30"
        >
          RK
        </button>
      </div>

      {/* Immersive Sections Container */}
      <div className="relative w-full h-full">
        {SECTIONS.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <ImmersiveSection
              key={section.name}
              isActive={currentSection === index}
              isPrevious={currentSection > index}
              isNext={currentSection < index}
              transitionDuration={900}
            >
              <SectionComponent />
            </ImmersiveSection>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        totalSections={SECTIONS.length}
        currentSection={currentSection}
        sectionNames={SECTIONS.map((s) => s.name)}
        onNavigate={goToSection}
      />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Scroll hint for first section */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-all duration-500"
        style={{
          opacity: currentSection === 0 && !isTransitioning ? 1 : 0,
          transform: currentSection === 0 ? "translateY(0)" : "translateY(20px)",
          pointerEvents: "none",
        }}
      >
        <span className="text-charcoal/60 dark:text-white/60 text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-charcoal/30 dark:border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-mustard rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Index;
