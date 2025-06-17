
import React from "react";
import { Wine, Sparkles } from "lucide-react";

const EventosServicesSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-neutral-900 to-black">
      <div className="container-fluid">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-golden font-kritik">
          NUESTROS SERVICIOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Catering Service */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Wine className="w-16 h-16 text-golden mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white font-kritik">CATERING PREMIUM</h3>
            </div>
            <div className="space-y-4 font-mexican">
              <p className="text-gray-300">
                Incluye nuestros productos exclusivos en el catering de tu evento. 
                Ofrecemos una selección curada de nuestras mejores referencias para 
                que tus invitados disfruten de una experiencia gastronómica única.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Selección personalizada de productos GALLERO</li>
                <li>• Servicio profesional de bartending</li>
                <li>• Maridajes exclusivos</li>
                <li>• Presentación premium</li>
              </ul>
            </div>
          </div>

          {/* Show Service */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Sparkles className="w-16 h-16 text-golden mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white font-kritik">ESPECTÁCULO DEL GALLO</h3>
            </div>
            <div className="space-y-4 font-mexican">
              <p className="text-gray-300">
                ¡Sorprende a tus invitados con nuestro espectáculo exclusivo! 
                El icónico gallo de GALLERO puede formar parte de tu celebración 
                con una experiencia teatral única que nadie olvidará.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Espectáculo temático personalizado</li>
                <li>• Animación durante "hora loca"</li>
                <li>• Fotografías memorables</li>
                <li>• Experiencia interactiva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosServicesSection;
