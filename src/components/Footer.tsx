
import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
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

  return (
    <footer className="bg-black py-12">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4 font-kritik">GALLERO</h4>
            <p className="text-gray-400 mb-4 font-mexican">Elaborado a la perfección. Un producto que cuando lo pruebes no querrás beber otra cosa.</p>
            <p className="text-gray-400 text-sm font-mexican">
              Bebe con responsabilidad.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 font-kritik">Enlaces</h5>
            <ul className="space-y-2 font-mexican">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-golden transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-golden transition-colors">Productos</button></li>
              <li><button onClick={() => scrollToSection('cocktails')} className="text-gray-400 hover:text-golden transition-colors">Cócteles</button></li>
              <li><button onClick={() => scrollToSection('our-story')} className="text-gray-400 hover:text-golden transition-colors">Nuestra Historia</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-golden transition-colors">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 font-kritik">Legal</h5>
            <ul className="space-y-2 font-mexican">
              <li><Link to="/politica-privacidad" className="text-gray-400 hover:text-golden transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/terminos-servicio" className="text-gray-400 hover:text-golden transition-colors">Términos de Servicio</Link></li>
              <li><Link to="/politica-cookies" className="text-gray-400 hover:text-golden transition-colors">Política de Cookies</Link></li>
              <li><Link to="/aviso-legal" className="text-gray-400 hover:text-golden transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="https://www.instagram.com/gallero_es/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-golden/30 transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="text-white" size={20} />
          </a>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm font-mexican">
          <p>&copy; {currentYear} GALLERO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
