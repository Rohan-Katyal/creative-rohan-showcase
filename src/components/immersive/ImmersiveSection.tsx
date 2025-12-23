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
        transform: direction === 'up' ? 'translateY(100vh) scale(0.9)' : 'translateY(-100vh) scale(0.9)',
        pointerEvents: 'none' as const,
      };
    }

    // Fade in during first 30%, stay visible, fade out during last 20%
    let opacity = 1;
    let translateY = 0;
    let scale = 1;

    if (progress < 0.3) {
      // Entering animation
      const enterProgress = progress / 0.3;
      opacity = enterProgress;
      translateY = (1 - enterProgress) * 50;
      scale = 0.95 + enterProgress * 0.05;
    } else if (progress > 0.8) {
      // Exiting animation
      const exitProgress = (progress - 0.8) / 0.2;
      opacity = 1 - exitProgress;
      translateY = -exitProgress * 30;
      scale = 1 - exitProgress * 0.05;
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
