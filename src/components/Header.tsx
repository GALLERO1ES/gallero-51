
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair text-white">
            <span className="text-primary">Gallero</span> Tequila
          </h1>
        </Link>

        {!isMobile ? (
          <nav>
            <ul className="flex items-center gap-8">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#our-story" className="nav-link">Our Story</a></li>
              <li><a href="#products" className="nav-link">Products</a></li>
              <li><a href="#cocktails" className="nav-link">Cocktails</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            <Menu />
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/90 z-30 animate-fade-in">
          <nav className="container-fluid py-10">
            <ul className="flex flex-col gap-6 text-center">
              <li>
                <a 
                  href="#home" 
                  className="text-xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#our-story" 
                  className="text-xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#cocktails" 
                  className="text-xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cocktails
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-xl nav-link inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
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
