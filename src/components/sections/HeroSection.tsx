
import React, { useState, useEffect } from "react";
import { useRoosterAnimation } from "../hero/useRoosterAnimation";
import RoosterAnimation from "../hero/RoosterAnimation";
import ParticlesEffect from "../hero/ParticlesEffect";
import HeroBackground from "../hero/HeroBackground";
import HeroContent from "../hero/HeroContent";

interface HeroSectionProps {
  ageVerified: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ ageVerified }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { showRooster, roosterPosition } = useRoosterAnimation();

  useEffect(() => {
    // Mark when elements are loaded
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles floating effect */}
      <ParticlesEffect />
      
      {/* Background with dynamic overlay */}
      <HeroBackground ageVerified={ageVerified} />
      
      {/* Main content with animations */}
      <HeroContent isLoaded={isLoaded} />
      
      {/* Rooster animation with random positions */}
      <RoosterAnimation 
        showRooster={showRooster} 
        roosterPosition={roosterPosition} 
      />
    </section>
  );
};

export default HeroSection;
