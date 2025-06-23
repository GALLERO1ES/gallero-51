import React from "react";
const EventosTypesSection: React.FC = () => {
  return <section className="section bg-gradient-to-b from-black to-neutral-900">
      <div className="container-fluid">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-golden font-kritik">
          TIPOS DE EVENTOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weddings */}
          <div className="text-center">
            <img alt="Bodas elegantes" className="w-full h-64 object-cover rounded-xl mb-6" src="/lovable-uploads/32ef00c7-2150-4626-900d-5c9f64eda34d.png" />
            <h3 className="text-xl font-bold text-white mb-3 font-kritik">BODAS</h3>
            <p className="text-gray-300 font-mexican">
              Haz de tu día especial una celebración inolvidable con el toque 
              distintivo de GALLERO para brindar por vuestro amor.
            </p>
          </div>

          {/* Corporate Events */}
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Eventos corporativos" className="w-full h-64 object-cover rounded-xl mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 font-kritik">EVENTOS CORPORATIVOS</h3>
            <p className="text-gray-300 font-mexican">
              Cenas de empresa, presentaciones y celebraciones corporativas 
              con la calidad y prestigio que tu empresa merece.
            </p>
          </div>

          {/* Private Parties */}
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fiestas privadas" className="w-full h-64 object-cover rounded-xl mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 font-kritik">FIESTAS PRIVADAS</h3>
            <p className="text-gray-300 font-mexican">
              Cumpleaños, aniversarios, cenas de Navidad y cualquier ocasión 
              especial que quieras celebrar por todo lo alto.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default EventosTypesSection;