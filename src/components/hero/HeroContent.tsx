
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroContentProps {
  isLoaded: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isLoaded }) => {
  return (
    <div className="container relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-16">
        <div className="text-center md:text-left">
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-white font-kritik relative inline-block">
              GALLERO
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 font-mexican max-w-lg transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            No es gallo si no canta, no es fiesta si no hay Gallero🐔
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center md:justify-start transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              className="btn-primary text-lg hover:scale-105 transition-transform"
              size="lg"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explorar Productos
            </Button>
            <Button
              variant="outline"
              className="btn-outline text-lg hover:scale-105 transition-transform"
              size="lg"
              onClick={() =>
                document
                  .getElementById("cocktails")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Cócteles
            </Button>
          </div>
        </div>

        {/* Producto destacado con efectos más llamativos */}
        <div className="hidden md:flex justify-center items-center mt-12 md:mt-0">
          <div
            className={`relative z-30 product-highlight transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <img
              src="/lovable-uploads/82c6fb5f-98be-406b-9a78-d8c6d19476a9.png"
              alt="Gallero Tequila"
              className="h-[700px] object-contain mx-auto transform hover:scale-105 transition-all duration-500 animate-float-slow"
            />
            <div className="absolute inset-0 bg-golden/20 rounded-full -z-10 blur-3xl opacity-70 animate-pulse"></div>

            {/* Destellos alrededor de la botella */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-golden/80 rounded-full blur-sm animate-twinkle"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down indicator con animación mejorada */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a
          href="#our-story"
          className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-125 block"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
