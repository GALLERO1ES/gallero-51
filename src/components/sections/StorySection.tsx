
import React from "react";
import { Badge } from "@/components/ui/badge";
const StorySection: React.FC = () => {
  return <section id="our-story" className="section bg-black">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Nuestra Historia</span>
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              Gallero nació en el corazón de Madrid, pero su alma viaja directo desde México.
              Inspirados por la pasión, el sabor y la tradición del tequila auténtico, decidimos crear algo diferente: una crema suave, atrevida y deliciosa, pensada para sorprender.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Importamos tequila de origen mexicano —fiel a su esencia y calidad— y lo fusionamos con sabores que conquistan: la dulzura especiada de la horchata y el toque jugoso y vibrante de la fresa. Así nace Gallero, una crema con carácter, creada para quienes se atreven a romper lo clásico y brindar con algo nuevo. 
            </p>
            <p className="text-lg text-gray-300">
              No somos solo una bebida. Somos un puente entre culturas, una mezcla inesperada y perfecta.
              Gallero es el sabor que no sabías que necesitabas pero que ahora no podrás dejar de llevar contigo!
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group hover-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="/lovable-uploads/f8d7ba3e-69c9-4c42-99dc-ffad8567bd9b.png" alt="Botellas de Gallero Tequila" className="relative rounded-lg object-contain w-full max-h-[500px] mx-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StorySection;
