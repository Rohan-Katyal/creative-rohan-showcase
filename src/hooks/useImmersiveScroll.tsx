import { useState, useEffect, useCallback, useRef } from "react";

interface UseImmersiveScrollOptions {
  totalSections: number;
  scrollResistance?: number;
  transitionDuration?: number;
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
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioningRef = useRef(false);
  const currentSectionRef = useRef(0);

  // Keep refs in sync
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isTransitioningRef.current) return;
    if (index === currentSectionRef.current) return;
    
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentSection(index);
    currentSectionRef.current = index;
    accumulatedScroll.current = 0;
    setSectionProgress(0);
    
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }, transitionDuration);
  }, [totalSections, transitionDuration]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioningRef.current) return;
      
      const now = Date.now();
      const timeDelta = now - lastScrollTime.current;
      lastScrollTime.current = now;
      
      // Decay accumulated scroll over time for smoother feel
      if (timeDelta > 150) {
        accumulatedScroll.current *= 0.3;
      }
      
      // Add new scroll delta with resistance
      const scrollAmount = e.deltaY / scrollResistance;
      accumulatedScroll.current += scrollAmount;
      
      // Update progress for visual feedback
      const newProgress = Math.max(0, Math.min(1, Math.abs(accumulatedScroll.current) / 1.5));
      setSectionProgress(newProgress);
      
      // Threshold for section change
      const threshold = 1.2;
      
      if (accumulatedScroll.current > threshold) {
        // Scrolling down
        if (currentSectionRef.current < totalSections - 1) {
          goToSection(currentSectionRef.current + 1);
        }
        accumulatedScroll.current = 0;
      } else if (accumulatedScroll.current < -threshold) {
        // Scrolling up
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1);
        }
        accumulatedScroll.current = 0;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioningRef.current) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSectionRef.current < totalSections - 1) {
          goToSection(currentSectionRef.current + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1);
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
      if (isTransitioningRef.current) return;
      
      const touchY = e.touches[0].clientY;
      const delta = (touchStartY - touchY) / (scrollResistance * 0.5);
      touchAccumulated += delta;
      touchStartY = touchY;
      
      const threshold = 1.5;
      
      if (touchAccumulated > threshold) {
        if (currentSectionRef.current < totalSections - 1) {
          goToSection(currentSectionRef.current + 1);
        }
        touchAccumulated = 0;
      } else if (touchAccumulated < -threshold) {
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1);
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
  }, [totalSections, scrollResistance, goToSection]);

  return {
    currentSection,
    sectionProgress,
    isTransitioning,
    goToSection,
  };
};
