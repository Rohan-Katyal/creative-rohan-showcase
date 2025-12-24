import { ReactNode, useMemo } from 'react';

interface ImmersiveSectionProps {
  children: ReactNode;
  isActive: boolean;
  progress: number;
  direction?: 'up' | 'down';
  className?: string;
}

const ImmersiveSection = ({ 
  children, 
  isActive, 
  progress, 
  direction = 'up',
  className = '' 
}: ImmersiveSectionProps) => {
  const styles = useMemo(() => {
    if (!isActive) {
      return {
        opacity: 0,
        transform: direction === 'up' ? 'translateY(100vh) scale(0.95)' : 'translateY(-100vh) scale(0.95)',
        pointerEvents: 'none' as const,
      };
    }

    // More deliberate timing: hold longer at start, smoother transitions
    let opacity = 1;
    let translateY = 0;
    let scale = 1;

    // First 15% - hold/entry phase (slower reveal)
    if (progress < 0.15) {
      const enterProgress = progress / 0.15;
      // Ease-out curve for smoother entry
      const eased = 1 - Math.pow(1 - enterProgress, 3);
      opacity = eased;
      translateY = (1 - eased) * 60;
      scale = 0.96 + eased * 0.04;
    } 
    // 15% to 75% - fully visible, stable
    else if (progress >= 0.15 && progress <= 0.75) {
      opacity = 1;
      translateY = 0;
      scale = 1;
    }
    // Last 25% - exit phase (slower, more cinematic)
    else if (progress > 0.75) {
      const exitProgress = (progress - 0.75) / 0.25;
      // Ease-in curve for deliberate exit
      const eased = Math.pow(exitProgress, 2);
      opacity = 1 - eased;
      translateY = -eased * 40;
      scale = 1 - eased * 0.04;
    }

    return {
      opacity,
      transform: `translateY(${translateY}px) scale(${scale})`,
      pointerEvents: 'auto' as const,
    };
  }, [isActive, progress, direction]);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-none ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default ImmersiveSection;
