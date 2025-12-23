import { useState, useEffect, useCallback } from 'react';

interface ScrollSection {
  id: string;
  start: number;
  end: number;
}

export const useScrollProgress = (totalSections: number) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);

  const sections: ScrollSection[] = Array.from({ length: totalSections }, (_, i) => ({
    id: `section-${i}`,
    start: i / totalSections,
    end: (i + 1) / totalSections,
  }));

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = Math.min(scrollTop / scrollHeight, 1);
    
    setScrollProgress(progress);

    // Determine current section
    const sectionIndex = Math.min(
      Math.floor(progress * totalSections),
      totalSections - 1
    );
    setCurrentSection(sectionIndex);

    // Calculate progress within current section
    const section = sections[sectionIndex];
    if (section) {
      const sectionLocalProgress = (progress - section.start) / (section.end - section.start);
      setSectionProgress(Math.max(0, Math.min(1, sectionLocalProgress)));
    }
  }, [totalSections, sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((index: number) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (index / totalSections) * scrollHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, [totalSections]);

  return {
    scrollProgress,
    currentSection,
    sectionProgress,
    scrollToSection,
    totalSections,
  };
};
