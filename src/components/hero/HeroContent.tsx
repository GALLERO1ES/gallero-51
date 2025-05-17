
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroContentProps {
  isLoaded: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isLoaded }) => {
  return (
    <div className="container relative z-20">
      <div className="flex items-center justify-center min-h-[70vh] text-center relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-golden/10 via-golden/5 to-golden/10 rounded-xl blur-xl animate-pulse-slow opacity-30 -z-10"></div>
        
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95 translate-y-10"}`}>
            <span className="text-white font-kritik relative inline-block text-center text-shadow-glow font-semibold">
              GALLERO
            </span>
          </h1>
          <p className={`text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 font-mexican max-w-lg mx-auto transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            No es gallo si no canta, no es fiesta si no hay Gallero🐔
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <Button className="btn-primary text-lg hover:scale-105 transition-transform hover:shadow-xl hover:shadow-golden/30" size="lg" onClick={() => document.getElementById("products")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Explorar Productos
            </Button>
            <Button variant="outline" className="btn-outline text-lg hover:scale-105 transition-transform hover:shadow-xl hover:shadow-golden/30" size="lg" onClick={() => document.getElementById("cocktails")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Cócteles
            </Button>
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
  );
};

export default HeroContent;
