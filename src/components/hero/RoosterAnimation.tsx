
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
  roosterPosition,
}) => {
  const [animationPosition, setAnimationPosition] = useState<number>(100);
  const isMobile = useIsMobile();

  // Animation effect - slide from right to left
  useEffect(() => {
    if (showRooster) {
      // Start from off-screen to the right
      setAnimationPosition(100);
      
      // Animate to the middle-right position showing only 3/4 of the image
      const animationTimer = setTimeout(() => {
        // This is the final position (shows 3/4 of the rooster on all screen sizes)
        setAnimationPosition(isMobile ? -5 : -25);
      }, 100);
      
      return () => clearTimeout(animationTimer);
    } else {
      // Move off-screen to the left when hiding
      setAnimationPosition(-120);
    }
  }, [showRooster, isMobile]);

  const getRoosterStyle = () => {
    // Responsive width based on screen size
    const width = isMobile ? "75vw" : "40vw";
    const clipPath = "inset(0 0 0 25%)"; // Clip 25% from the left side (shows 3/4)
    
    return {
      right: `${animationPosition}%`,
      top: `${roosterPosition.vertical}%`,
      transform: "translate(0, -50%) rotate(-6deg)",
      transition: "right 1.5s ease-out", // Smooth sliding animation
      width: width,
      clipPath: clipPath,
      overflow: "hidden"
    };
  };

  return (
    <div
      className={`fixed z-40 transition-opacity duration-1000 ${
        showRooster ? "opacity-100" : "opacity-0"
      }`}
      style={getRoosterStyle()}
    >
      <img
        src="/lovable-uploads/df6b1d3e-a626-4824-940f-c3017edb0a21.png"
        alt="Gallero Mascot"
        className="h-auto w-full object-contain animate-pulse-slow"
      />
    </div>
  );
};

export default RoosterAnimation;
