
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  ageVerified: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ ageVerified }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-overlay"></div>
        {ageVerified && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-pouring-tequila-into-shot-glass-1589/1080p.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
        {/* Fallback image for when video can't play or age verification isn't complete */}
        {!ageVerified && (
          <img 
            src="/lovable-uploads/dcc56214-4a30-442f-b741-07f29b5d7239.png" 
            alt="Fondo de Tequila" 
            className="absolute w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="container relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">GALLERO</span> <span className="font-light">TEQUILA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up animate-stagger-1">
            Experimenta el sabor extraordinario del tequila premium crema de fresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-2">
            <Button className="btn-primary" size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Explorar Nuestros Productos
            </Button>
            <Button variant="outline" className="btn-outline" size="lg" onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}>
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
