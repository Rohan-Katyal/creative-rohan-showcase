import { useScrollProgress } from "@/hooks/useScrollProgress";
import ImmersiveNavigation from "@/components/immersive/ImmersiveNavigation";
import ImmersiveSection from "@/components/immersive/ImmersiveSection";
import ScrollIndicator from "@/components/immersive/ScrollIndicator";
import ImmersiveHero from "@/components/immersive/ImmersiveHero";
import ImmersiveAbout from "@/components/immersive/ImmersiveAbout";
import ImmersiveVideos from "@/components/immersive/ImmersiveVideos";
import ImmersiveWebDev from "@/components/immersive/ImmersiveWebDev";

const SECTION_NAMES = ["Home", "About", "Videos", "Web Dev"];
const TOTAL_SECTIONS = SECTION_NAMES.length;

const Index = () => {
  const { 
    scrollProgress, 
    currentSection, 
    sectionProgress, 
    scrollToSection,
    totalSections 
  } = useScrollProgress(TOTAL_SECTIONS);

  return (
    <>
      {/* Scroll container - creates scrollable height */}
      <div 
        className="relative"
        style={{ height: `${TOTAL_SECTIONS * 100}vh` }}
      />

      {/* Fixed viewport container */}
      <div className="fixed inset-0 overflow-hidden bg-white font-poppins">
        <ImmersiveNavigation 
          currentSection={currentSection}
          sectionProgress={sectionProgress}
          onNavigate={scrollToSection}
          sectionNames={SECTION_NAMES}
        />

        {/* Hero Section */}
        <ImmersiveSection
          isActive={currentSection === 0}
          progress={currentSection === 0 ? sectionProgress : currentSection > 0 ? 1 : 0}
        >
          <ImmersiveHero 
            progress={currentSection === 0 ? sectionProgress : 0}
            onScrollDown={() => scrollToSection(1)}
          />
        </ImmersiveSection>

        {/* About Section */}
        <ImmersiveSection
          isActive={currentSection === 1}
          progress={currentSection === 1 ? sectionProgress : currentSection > 1 ? 1 : 0}
        >
          <ImmersiveAbout progress={currentSection === 1 ? sectionProgress : 0} />
        </ImmersiveSection>

        {/* Videos Section */}
        <ImmersiveSection
          isActive={currentSection === 2}
          progress={currentSection === 2 ? sectionProgress : currentSection > 2 ? 1 : 0}
        >
          <ImmersiveVideos progress={currentSection === 2 ? sectionProgress : 0} />
        </ImmersiveSection>

        {/* Web Development Section */}
        <ImmersiveSection
          isActive={currentSection === 3}
          progress={currentSection === 3 ? sectionProgress : currentSection > 3 ? 1 : 0}
        >
          <ImmersiveWebDev progress={currentSection === 3 ? sectionProgress : 0} />
        </ImmersiveSection>

        {/* Scroll Indicator (hidden on mobile) */}
        <div className="hidden md:block">
          <ScrollIndicator
            currentSection={currentSection}
            totalSections={totalSections}
            scrollProgress={scrollProgress}
            onNavigate={scrollToSection}
            sectionNames={SECTION_NAMES}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
