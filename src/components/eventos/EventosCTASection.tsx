
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const EventosCTASection: React.FC = () => {
  const scrollToContact = () => {
    // Si estamos en la página principal, hacer scroll suave
    if (window.location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, redirigir a la página principal con el hash
      window.location.href = '/#contact';
    }
  };

  return (
    <section className="section bg-gradient-to-b from-neutral-900 to-black">
      <div className="container-fluid">
        <div className="glass-card p-12 rounded-2xl text-center relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-golden/30 to-golden/30 rounded-2xl blur-sm opacity-70"></div>
          <div className="relative z-10">
            <Calendar className="w-16 h-16 text-golden mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-kritik">
              ¿LISTO PARA TU EVENTO?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-mexican">
              Contacta con nosotros y diseñemos juntos la experiencia perfecta 
              para tu celebración. Cada evento es único, como cada momento especial.
            </p>
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-3"
              size="lg"
            >
              Planifica Tu Evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosCTASection;
