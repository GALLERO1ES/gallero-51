
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
    switch (roosterPosition.side) {
      case "right":
        return {
          right: 0,
          top: `${roosterPosition.vertical}%`,
          transform: "translate(50%, -50%) rotate(-6deg)",
          left: "auto",
          bottom: "auto",
        };
      case "left":
        return {
          left: 0,
          top: `${roosterPosition.vertical}%`,
          transform: "translate(-50%, -50%) rotate(6deg)",
          right: "auto",
          bottom: "auto",
        };
      default:
        return {};
    }
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
        className={`h-64 object-contain animate-pulse-slow ${
          roosterPosition.side === "left" ? "scale-x-[-1]" : ""
        }`}
      />
    </div>
  );
};

export default RoosterAnimation;
