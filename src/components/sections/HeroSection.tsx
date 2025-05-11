
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
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-overlay bg-black/50 z-10"></div>
        <img 
          src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
          alt="Fondo Gallero" 
          className="absolute w-full h-full object-cover opacity-40"
        />
        
        {/* Video de fondo (solo si la edad está verificada) */}
        {ageVerified && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute w-full h-full object-cover mix-blend-overlay opacity-60"
          >
            <source src="https://cdn.coverr.co/videos/coverr-pouring-tequila-into-shot-glass-1589/1080p.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
      </div>
      
      {/* Contenido principal */}
      <div className="container relative z-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="backdrop-blur-sm py-12 px-6 rounded-lg bg-black/30 border border-primary/20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">GALLERO</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white animate-slide-up animate-stagger-1 font-light">
              Experimenta el sabor extraordinario del tequila premium crema de fresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-2">
              <Button className="btn-primary text-lg" size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                Explorar Productos
              </Button>
              <Button variant="outline" className="btn-outline text-lg" size="lg" onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}>
                Nuestra Historia
              </Button>
            </div>
          </div>
          
          {/* Producto destacado - estilo similar a la imagen de referencia */}
          <div className="hidden md:block relative">
            <div className="relative z-30 product-highlight">
              <img 
                src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
                alt="Gallero Tequila" 
                className="h-[500px] object-contain mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 rounded-full -z-10 blur-xl opacity-60"></div>
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
        <div className="relative">
          <div className="rooster-container w-32 h-64 overflow-hidden">
            <div className="rooster-animation bg-primary/20 backdrop-blur-md p-4 rounded-l-lg border-l border-y border-primary/30">
              <div className="flex justify-center items-center h-full">
                <svg viewBox="0 0 100 100" width="100" height="100" fill="currentColor" className="text-primary animate-pulse">
                  <path d="M50,10 C40,10 30,20 30,35 C30,45 35,50 40,55 C45,60 45,65 40,70 C35,75 25,75 20,85 C15,95 25,95 30,90 C35,85 40,85 45,85 C50,85 55,80 55,75 C55,70 50,65 50,60 C50,55 55,55 60,50 C65,45 70,40 70,30 C70,20 60,10 50,10 Z" />
                  <circle cx="45" cy="30" r="3" className="text-white" />
                </svg>
              </div>
              <div className="text-center mt-4 text-white font-bold">
                ¡Gallero!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
