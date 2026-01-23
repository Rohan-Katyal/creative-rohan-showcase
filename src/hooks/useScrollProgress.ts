import { useState, useEffect, useCallback, useMemo } from 'react';

interface ScrollSection {
  id: string;
  start: number;
  end: number;
  weight: number; // How much scroll "resistance" this section has
}

export const useScrollProgress = (totalSections: number) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);

  // First section has 2x weight (requires more scrolling to pass)
  const sectionWeights = useMemo(() => {
    const weights = Array.from({ length: totalSections }, (_, i) => i === 0 ? 2 : 1);
    return weights;
  }, [totalSections]);

  const totalWeight = useMemo(() => sectionWeights.reduce((a, b) => a + b, 0), [sectionWeights]);

  const sections: ScrollSection[] = useMemo(() => {
    let accumulated = 0;
    return sectionWeights.map((weight, i) => {
      const start = accumulated / totalWeight;
      accumulated += weight;
      const end = accumulated / totalWeight;
      return {
        id: `section-${i}`,
        start,
        end,
        weight,
      };
    });
  }, [sectionWeights, totalWeight]);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = Math.min(scrollTop / scrollHeight, 1);
    
    setScrollProgress(progress);

    // Determine current section based on weighted sections
    let sectionIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      if (progress >= sections[i].start && progress < sections[i].end) {
        sectionIndex = i;
        break;
      }
      if (i === sections.length - 1) {
        sectionIndex = i;
      }
    }
    setCurrentSection(sectionIndex);

    // Calculate progress within current section
    const section = sections[sectionIndex];
    if (section) {
      const sectionLocalProgress = (progress - section.start) / (section.end - section.start);
      setSectionProgress(Math.max(0, Math.min(1, sectionLocalProgress)));
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((index: number) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const section = sections[index];
    if (section) {
      const targetScroll = section.start * scrollHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, [sections]);

  return {
    scrollProgress,
    currentSection,
    sectionProgress,
    scrollToSection,
    totalSections,
  };
};
