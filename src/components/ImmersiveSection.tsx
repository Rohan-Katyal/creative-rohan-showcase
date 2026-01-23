import { ReactNode, useMemo } from "react";

interface ImmersiveSectionProps {
  children: ReactNode;
  isActive: boolean;
  isPrevious: boolean;
  isNext: boolean;
  transitionDuration?: number;
  className?: string;
}

const ImmersiveSection = ({
  children,
  isActive,
  isPrevious,
  isNext,
  transitionDuration = 800,
  className = "",
}: ImmersiveSectionProps) => {
  const styles = useMemo(() => {
    if (isActive) {
      return {
        opacity: 1,
        transform: "translateY(0) scale(1)",
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    } else if (isPrevious) {
      return {
        opacity: 0,
        transform: "translateY(-30%) scale(0.95)",
        zIndex: 20,
        pointerEvents: "none" as const,
      };
    } else if (isNext) {
      return {
        opacity: 0,
        transform: "translateY(30%) scale(0.95)",
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    } else {
      return {
        opacity: 0,
        transform: "translateY(100%)",
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }
  }, [isActive, isPrevious, isNext]);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{
        ...styles,
        transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      <div className="w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default ImmersiveSection;
