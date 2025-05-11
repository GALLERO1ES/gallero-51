
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  ageVerified: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ ageVerified }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-overlay bg-black/70 z-10"></div>
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
      
      <div className="container relative z-20 text-center">
        <div className="max-w-3xl mx-auto backdrop-blur-sm py-12 px-6 rounded-lg bg-black/30 border border-primary/20">
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
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#our-story" className="text-white/80 hover:text-white">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
