
import React from "react";

interface HeroBackgroundProps {
  ageVerified: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ ageVerified }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="bg-black/70 absolute inset-0 z-10"></div>
      <img
        src="/lovable-uploads/ffc4d9c5-bb1f-4ede-a0ce-a902f60f8934.png"
        alt="Fondo Gallero"
        className="absolute w-full h-full object-cover opacity-10"
      />

      {/* Video de fondo con efecto de vibración sutil */}
      {ageVerified && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover mix-blend-overlay opacity-30 animate-pulse"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-pouring-tequila-into-shot-glass-1589/1080p.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el tag de video.
        </video>
      )}
    </div>
  );
};

export default HeroBackground;
