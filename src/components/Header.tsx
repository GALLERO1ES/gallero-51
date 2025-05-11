
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-playfair text-white">
            <span className="text-gradient">Gallero</span>
          </h1>
        </Link>

        {/* Imagen de botella en la esquina derecha */}
        <div className="absolute right-0 top-0 h-[70vh] md:h-[80vh] lg:h-[90vh] z-10 hidden md:block pointer-events-none">
          <img 
            src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
            alt="Botella Gallero" 
            className="h-full object-contain"
          />
        </div>

        {!isMobile ? (
          <nav>
            <ul className="flex items-center gap-8">
              <li><a href="#home" className="nav-link text-lg">Inicio</a></li>
              <li><a href="#our-story" className="nav-link text-lg">Nuestra Historia</a></li>
              <li><a href="#products" className="nav-link text-lg">Productos</a></li>
              <li><a href="#cocktails" className="nav-link text-lg">Cócteles</a></li>
              <li><a href="#contact" className="nav-link text-lg">Contacto</a></li>
            </ul>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10 z-50"
          >
            <Menu />
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-30 animate-fade-in">
          <nav className="container-fluid py-10">
            <ul className="flex flex-col gap-6 text-center">
              <li>
                <a 
                  href="#home" 
                  className="text-2xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#our-story" 
                  className="text-2xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-2xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Productos
                </a>
              </li>
              <li>
                <a 
                  href="#cocktails" 
                  className="text-2xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cócteles
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-2xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
