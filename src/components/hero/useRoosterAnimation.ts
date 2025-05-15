
import { useState, useEffect } from "react";

interface RoosterPosition {
  side: string;
  vertical: number;
}

export const useRoosterAnimation = () => {
  const [showRooster, setShowRooster] = useState(false);
  const [roosterPosition, setRoosterPosition] = useState<RoosterPosition>({
    side: "right",
    vertical: 50,
  });

  useEffect(() => {
    // Animation cycle for the rooster
    const interval = setInterval(() => {
      // Generate random position - now only left or right sides to apply mirroring
      const sides = ["right", "left"];
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      const randomVertical = Math.floor(Math.random() * 60) + 20; // Between 20% and 80%

      setRoosterPosition({
        side: randomSide,
        vertical: randomVertical,
      });

      setShowRooster(true);

      const timeout = setTimeout(() => {
        setShowRooster(false);
      }, 5000); // Show for 5 seconds

      return () => clearTimeout(timeout);
    }, 40000); // Repeat every 40 seconds

    // Initial appearance after 2 seconds
    const initialTimeout = setTimeout(() => {
      setShowRooster(true);

      const hideTimeout = setTimeout(() => {
        setShowRooster(false);
      }, 5000);

      return () => clearTimeout(hideTimeout);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return { showRooster, roosterPosition };
};
