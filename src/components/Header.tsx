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
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Si estamos en otra página, redirigir a la página principal con el hash
      window.location.href = `${import.meta.env.BASE_URL}#${id}`;
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        <div
          onClick={scrollToTop}
          className="cursor-pointer transform transition-all duration-300 hover:scale-110"
        >
          <img
            src="/lovable-uploads/273c3b5c-bc8e-4dbb-91d0-7c358d8fb3b6.png"
            alt="GALLERO"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {!isMobile ? (
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="nav-link text-lg font-mexican"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="nav-link text-lg font-mexican"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cocktails")}
                  className="nav-link text-lg font-mexican"
                >
                  Cócteles
                </button>
              </li>
              <li>
                <Link
                  to="/eventos"
                  className="nav-link text-lg font-mexican"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("our-story")}
                  className="nav-link text-lg font-mexican"
                >
                  Nuestra Historia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link text-lg font-mexican"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`text-white z-50 ${
              mobileMenuOpen
                ? "bg-golden/50 hover:bg-golden/60"
                : "hover:bg-white/10"
            }`}
          >
            <Menu />
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-30 animate-fade-in">
          <nav className="container-fluid py-10">
            <ul className="flex flex-col gap-6 text-center bg-black">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-2xl nav-link inline-block font-mexican px-6 py-2 rounded-lg w-full bg-primary-DEFAULT"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-2xl nav-link inline-block font-mexican px-6 py-2 rounded-lg w-full bg-primary-DEFAULT text-inherit"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cocktails")}
                  className="text-2xl nav-link inline-block font-mexican bg-black/40 px-6 py-2 rounded-lg w-full"
                >
                  Cócteles
                </button>
              </li>
              <li>
                <Link
                  to="/eventos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl nav-link inline-block font-mexican bg-black/40 px-6 py-2 rounded-lg w-full"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("our-story")}
                  className="text-2xl nav-link inline-block font-mexican bg-black/40 px-6 py-2 rounded-lg w-full"
                >
                  Nuestra Historia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-2xl nav-link inline-block font-mexican bg-black/40 px-6 py-2 rounded-lg w-full"
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
