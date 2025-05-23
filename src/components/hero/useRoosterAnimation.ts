
import { useState, useEffect } from "react";

interface RoosterPosition {
  side: string;
  vertical: number;
}

export const useRoosterAnimation = () => {
  const [showRooster, setShowRooster] = useState(false);
  const [roosterPosition, setRoosterPosition] = useState<RoosterPosition>({
    side: "right",
    vertical: 0, // Always from bottom
  });

  useEffect(() => {
    // Animation cycle for the rooster - appearing from bottom every 30 seconds
    const interval = setInterval(() => {
      setRoosterPosition({
        side: "right",
        vertical: 0, // Always from bottom
      });

      setShowRooster(true);

      const timeout = setTimeout(() => {
        setShowRooster(false);
      }, 5000); // Show for 5 seconds

      return () => clearTimeout(timeout);
    }, 30000); // Repeat every 30 seconds

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
