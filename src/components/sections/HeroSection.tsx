
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  ageVerified: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ ageVerified }) => {
  const [showRooster, setShowRooster] = useState(false);

  useEffect(() => {
    // Animation cycle for the rooster
    const interval = setInterval(() => {
      setShowRooster(true);
      
      const timeout = setTimeout(() => {
        setShowRooster(false);
      }, 3000); // Show for 3 seconds
      
      return () => clearTimeout(timeout);
    }, 10000); // Repeat every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de fondo con overlay más sutil */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="bg-black/70 absolute inset-0 z-10"></div>
        <img 
          src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
          alt="Fondo Gallero" 
          className="absolute w-full h-full object-cover opacity-10"
        />
        
        {/* Video de fondo (solo si la edad está verificada) */}
        {ageVerified && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute w-full h-full object-cover mix-blend-overlay opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-pouring-tequila-into-shot-glass-1589/1080p.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
      </div>
      
      {/* Contenido principal - Diseño más minimalista */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-16">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
              <span className="text-gradient">GALLERO</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 animate-slide-up animate-stagger-1 font-light max-w-lg">
              Tequila premium crema de fresa
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-slide-up animate-stagger-2">
              <Button className="btn-primary text-lg" size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                Explorar Productos
              </Button>
              <Button variant="outline" className="btn-outline text-lg" size="lg" onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}>
                Nuestra Historia
              </Button>
            </div>
          </div>
          
          {/* Producto destacado - Botella más grande */}
          <div className="hidden md:flex justify-center items-center mt-12 md:mt-0">
            <div className="relative z-30 product-highlight">
              <img 
                src="/lovable-uploads/ba893a4e-3791-4be0-af81-5c616df8bb89.png" 
                alt="Gallero Tequila" 
                className="h-[600px] object-contain mx-auto transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 rounded-full -z-10 blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#our-story" className="text-white/80 hover:text-white">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
      
      {/* Animación del Gallo */}
      <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ease-in-out ${showRooster ? 'translate-x-0' : 'translate-x-full'}`}>
        <img 
          src="/lovable-uploads/df6b1d3e-a626-4824-940f-c3017edb0a21.png" 
          alt="Gallero Mascot" 
          className="h-64 object-contain animate-pulse"
        />
      </div>
    </section>
  );
};

export default HeroSection;
