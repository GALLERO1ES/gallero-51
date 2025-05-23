
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface RoosterAnimationProps {
  showRooster: boolean;
  roosterPosition: {
    side: string;
    vertical: number;
  };
}

const RoosterAnimation: React.FC<RoosterAnimationProps> = ({
  showRooster,
  roosterPosition
}) => {
  const [animationPosition, setAnimationPosition] = useState<number>(100);
  const isMobile = useIsMobile();

  // Animation effect - slide from bottom to visible position
  useEffect(() => {
    if (showRooster) {
      // Start from off-screen at the bottom
      setAnimationPosition(100);

      // Animate to the visible position
      const animationTimer = setTimeout(() => {
        setAnimationPosition(0);
      }, 100);
      return () => clearTimeout(animationTimer);
    } else {
      // Move off-screen to the bottom when hiding
      setAnimationPosition(100);
    }
  }, [showRooster, isMobile]);

  const getRoosterStyle = () => {
    // Height limited to 1/3 of screen height
    const maxHeight = "33vh";
    
    return {
      right: isMobile ? "10px" : "20px",
      bottom: `${animationPosition}%`,
      transform: "translateY(100%) rotate(-6deg)",
      transition: "bottom 1.5s ease-out",
      height: maxHeight,
      width: "auto",
      zIndex: 40,
    };
  };

  return (
    <div 
      className={`fixed transition-opacity duration-1000 ${showRooster ? "opacity-100" : "opacity-0"}`} 
      style={getRoosterStyle()}
    >
      <img 
        alt="Gallero Mascot" 
        className="h-full w-auto object-contain animate-pulse-slow" 
        src="/lovable-uploads/3569deb3-8701-42b8-aaf5-9e6cbf362d60.png" 
      />
    </div>
  );
};

export default RoosterAnimation;
