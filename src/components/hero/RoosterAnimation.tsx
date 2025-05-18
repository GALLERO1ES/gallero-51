
import React, { useEffect, useState } from "react";

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

  // Animation effect - slide from right to left
  useEffect(() => {
    if (showRooster) {
      // Start from off-screen to the right
      setAnimationPosition(100);
      
      // Animate to the middle-right position
      const animationTimer = setTimeout(() => {
        setAnimationPosition(-25); // This is the final position (shows 3/4 of the rooster)
      }, 100);
      
      return () => clearTimeout(animationTimer);
    } else {
      // Move off-screen to the left when hiding
      setAnimationPosition(-120);
    }
  }, [showRooster]);

  const getRoosterStyle = () => {
    return {
      right: `${animationPosition}%`,
      top: `${roosterPosition.vertical}%`,
      transform: "translate(0, -50%) rotate(-6deg)",
      transition: "right 1.5s ease-out", // Smooth sliding animation
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
        className="h-64 object-contain animate-pulse-slow"
      />
    </div>
  );
};

export default RoosterAnimation;
