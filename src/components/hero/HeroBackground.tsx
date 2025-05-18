
import React from "react";

interface HeroBackgroundProps {
  ageVerified: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ ageVerified }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="bg-black/90 absolute inset-0 z-10"></div>
      
      {/* Background with rooster-headed people */}
      <div className="absolute inset-0 z-5 opacity-20">
        {/* First rooster-headed person */}
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 w-64 h-96 md:w-80 md:h-120">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36 md:w-48 md:h-48">
            <img 
              src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
              alt="Rooster Head" 
              className="w-full h-full object-contain opacity-70"
            />
          </div>
          <div className="absolute top-24 left-0 right-0 bottom-0">
            <div className="w-full h-full bg-gradient-to-b from-golden/5 to-golden/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Second rooster-headed person */}
        <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-64 h-96 md:w-80 md:h-120">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36 md:w-48 md:h-48">
            <img 
              src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
              alt="Rooster Head" 
              className="w-full h-full object-contain opacity-70 transform scale-x-[-1]"
            />
          </div>
          <div className="absolute top-24 left-0 right-0 bottom-0">
            <div className="w-full h-full bg-gradient-to-b from-golden/5 to-golden/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Fondo principal */}
      <img
        src="/lovable-uploads/ffc4d9c5-bb1f-4ede-a0ce-a902f60f8934.png"
        alt="Fondo Gallero"
        className="absolute w-full h-full object-cover opacity-10"
      />

      {/* Nuevos elementos de fondo con gallos */}
      <div className="absolute inset-0 z-2">
        {/* Gallos decorativos en diferentes posiciones */}
        <img 
          src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
          alt="Gallo decorativo" 
          className="absolute top-[10%] left-[5%] w-24 h-24 md:w-32 md:h-32 opacity-15 transform rotate-12 animate-float-slow"
        />
        <img 
          src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
          alt="Gallo decorativo" 
          className="absolute top-[40%] right-[8%] w-16 h-16 md:w-24 md:h-24 opacity-10 transform -rotate-12 animate-float"
        />
        <img 
          src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
          alt="Gallo decorativo" 
          className="absolute bottom-[30%] left-[15%] w-20 h-20 opacity-10 transform scale-x-[-1] rotate-6 animate-float-slow"
        />
        <img 
          src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
          alt="Gallo decorativo" 
          className="absolute top-[70%] right-[15%] w-28 h-28 opacity-15 transform scale-x-[-1] -rotate-6 animate-float"
        />
      </div>

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
