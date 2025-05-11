
import React from "react";

const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="section bg-gradient-to-b from-black to-neutral-900">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Nuestra Historia</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Fundado en el corazón de Jalisco, México, Gallero Tequila surgió de una pasión por la tradición y la innovación. Nuestro viaje comenzó con una visión simple: crear un tequila que honrara la rica herencia de México mientras abrazaba nuevos y audaces sabores.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Nuestros maestros destiladores elaboran artesanalmente cada lote utilizando técnicas tradicionales transmitidas a lo largo de generaciones, combinadas con un enfoque creativo que le da a Gallero su carácter distintivo.
            </p>
            <p className="text-lg text-gray-300">
              El resultado es nuestro Tequila Crema de Fresa – un equilibrio perfecto entre tequila premium de agave azul y la dulce esencia de fresas frescas, creando una experiencia de bebida sin igual que captura el espíritu de la celebración.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-70"></div>
              <img 
                src="/lovable-uploads/f8d7ba3e-69c9-4c42-99dc-ffad8567bd9b.png" 
                alt="Botellas de Gallero Tequila" 
                className="relative rounded-lg object-contain w-full max-h-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
