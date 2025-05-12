
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

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

  const scrollToSection = (id: string) => {
    // Cerrar menú móvil si está abierto
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Si estamos en la página principal, hacer scroll suave
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, redirigir a la página principal con el hash
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        <div 
          onClick={scrollToTop}
          className="cursor-pointer transform transition-all duration-300 hover:scale-110"
        >
          <h1 className="text-2xl md:text-3xl font-bold font-kritik text-white">
            <span className="text-golden">
              GALLERO
            </span>
          </h1>
        </div>

        {!isMobile ? (
          <nav>
            <ul className="flex items-center gap-8">
              <li><button onClick={() => scrollToSection('products')} className="nav-link text-lg font-mexican">Productos</button></li>
              <li><button onClick={() => scrollToSection('cocktails')} className="nav-link text-lg font-mexican">Cócteles</button></li>
              <li><button onClick={() => scrollToSection('our-story')} className="nav-link text-lg font-mexican">Nuestra Historia</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link text-lg font-mexican">Contacto</button></li>
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
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="text-2xl nav-link inline-block font-mexican"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cocktails')} 
                  className="text-2xl nav-link inline-block font-mexican"
                >
                  Cócteles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-story')} 
                  className="text-2xl nav-link inline-block font-mexican"
                >
                  Nuestra Historia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-2xl nav-link inline-block font-mexican"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
