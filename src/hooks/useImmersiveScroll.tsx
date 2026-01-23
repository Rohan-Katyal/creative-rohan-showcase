import { useState, useEffect, useCallback, useRef } from "react";

interface UseImmersiveScrollOptions {
  totalSections: number;
  scrollResistance?: number; // Higher = more resistance (slower scroll)
  transitionDuration?: number; // Duration of section transition in ms
}

interface UseImmersiveScrollReturn {
  currentSection: number;
  sectionProgress: number;
  isTransitioning: boolean;
  goToSection: (index: number) => void;
}

export const useImmersiveScroll = ({
  totalSections,
  scrollResistance = 100,
  transitionDuration = 800,
}: UseImmersiveScrollOptions): UseImmersiveScrollReturn => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const accumulatedScroll = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    accumulatedScroll.current = 0;
    setSectionProgress(0);
    
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [totalSections, isTransitioning, transitionDuration]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioning) return;
      
      const now = Date.now();
      const timeDelta = now - lastScrollTime.current;
      lastScrollTime.current = now;
      
      // Decay accumulated scroll over time for smoother feel
      if (timeDelta > 150) {
        accumulatedScroll.current *= 0.5;
      }
      
      // Add new scroll delta with resistance
      const scrollAmount = e.deltaY / scrollResistance;
      accumulatedScroll.current += scrollAmount;
      
      // Clamp progress between 0 and 1
      const newProgress = Math.max(0, Math.min(1, sectionProgress + scrollAmount * 0.5));
      setSectionProgress(newProgress);
      
      // Threshold for section change
      const threshold = 1.5;
      
      if (accumulatedScroll.current > threshold) {
        // Scrolling down - go to next section
        if (currentSection < totalSections - 1) {
          goToSection(currentSection + 1);
        }
      } else if (accumulatedScroll.current < -threshold) {
        // Scrolling up - go to previous section
        if (currentSection > 0) {
          goToSection(currentSection - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < totalSections - 1) {
          goToSection(currentSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          goToSection(currentSection - 1);
        }
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    let touchAccumulated = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchAccumulated = 0;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning) return;
      
      const touchY = e.touches[0].clientY;
      const delta = (touchStartY - touchY) / scrollResistance;
      touchAccumulated += delta;
      touchStartY = touchY;
      
      const threshold = 2;
      
      if (touchAccumulated > threshold) {
        if (currentSection < totalSections - 1) {
          goToSection(currentSection + 1);
        }
        touchAccumulated = 0;
      } else if (touchAccumulated < -threshold) {
        if (currentSection > 0) {
          goToSection(currentSection - 1);
        }
        touchAccumulated = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, [currentSection, totalSections, isTransitioning, scrollResistance, sectionProgress, goToSection]);

  return {
    currentSection,
    sectionProgress,
    isTransitioning,
    goToSection,
  };
};
