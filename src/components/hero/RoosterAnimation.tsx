
import React from "react";

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
  const getRoosterStyle = () => {
    // Now showing 3/4 of the image from right to left
    return {
      right: "-25%", // This makes 3/4 of the rooster visible (was -32%)
      top: `${roosterPosition.vertical}%`,
      transform: "translate(0, -50%) rotate(-6deg)",
    };
  };

  return (
    <div
      className={`fixed z-40 transition-all duration-1000 ease-in-out ${
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
