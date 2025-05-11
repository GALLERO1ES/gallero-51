
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  ageVerified: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ ageVerified }) => {
  const [showRooster, setShowRooster] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Marcar cuando los elementos están cargados
    setIsLoaded(true);
    
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Partículas flotantes para un efecto más dinámico */}
      <div className="absolute inset-0 z-5">
        <div className="particles-container">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className={`particle absolute bg-primary/20 rounded-full animate-float`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Imagen de fondo con overlay más dinámico */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="bg-black/70 absolute inset-0 z-10"></div>
        <img 
          src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
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
            <source src="https://cdn.coverr.co/videos/coverr-pouring-tequila-into-shot-glass-1589/1080p.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
      </div>
      
      {/* Contenido principal con animaciones más impactantes */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-16">
          <div className="text-center md:text-left">
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="text-gradient relative inline-block">
                GALLERO
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 animate-expand-line"></div>
              </span>
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 font-light max-w-lg transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Tequila premium crema de fresa
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center md:justify-start transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <Button 
                className="btn-primary text-lg hover:scale-105 transition-transform" 
                size="lg" 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Productos
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline text-lg hover:scale-105 transition-transform" 
                size="lg" 
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nuestra Historia
              </Button>
            </div>
          </div>
          
          {/* Producto destacado con efectos más llamativos */}
          <div className="hidden md:flex justify-center items-center mt-12 md:mt-0">
            <div className={`relative z-30 product-highlight transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <img 
                src="/lovable-uploads/ba893a4e-3791-4be0-af81-5c616df8bb89.png" 
                alt="Gallero Tequila" 
                className="h-[600px] object-contain mx-auto transform hover:scale-105 transition-all duration-500 animate-float-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 rounded-full -z-10 blur-3xl opacity-70 animate-pulse"></div>
              
              {/* Destellos alrededor de la botella */}
              {[...Array(5)].map((_, index) => (
                <div 
                  key={index}
                  className="absolute w-3 h-3 bg-primary/80 rounded-full blur-sm animate-twinkle"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator con animación mejorada */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#our-story" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-125 block">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
      
      {/* Animación del Gallo - Modificado para que se asome más */}
      <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ease-in-out ${showRooster ? 'translate-x-[50%]' : 'translate-x-full'}`}>
        <img 
          src="/lovable-uploads/df6b1d3e-a626-4824-940f-c3017edb0a21.png" 
          alt="Gallero Mascot" 
          className="h-64 object-contain transform -rotate-6 animate-pulse-slow"
        />
      </div>
    </section>
  );
};

export default HeroSection;
