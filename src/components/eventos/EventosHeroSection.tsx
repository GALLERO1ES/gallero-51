
import React from "react";
import { Heart, Users, PartyPopper } from "lucide-react";

const EventosHeroSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-neutral-900">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-golden font-kritik">
            EVENTOS ÚNICOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-mexican">
            Donde canta el gallero, los demás guardan silencio. Haz de tu evento una experiencia inolvidable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="/video%20cabecero%202.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient font-kritik">
              TU EVENTO, NUESTRO COMPROMISO
            </h2>
            <p className="text-lg text-gray-300 font-mexican">
              GALLERO transforma cualquier celebración en una experiencia premium. 
              Desde bodas íntimas hasta grandes eventos corporativos, llevamos el 
              sabor auténtico y la elegancia que tu ocasión especial merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-golden">
                <Heart className="w-5 h-5" />
                <span className="font-mexican">Bodas</span>
              </div>
              <div className="flex items-center gap-2 text-golden">
                <Users className="w-5 h-5" />
                <span className="font-mexican">Eventos Corporativos</span>
              </div>
              <div className="flex items-center gap-2 text-golden">
                <PartyPopper className="w-5 h-5" />
                <span className="font-mexican">Fiestas Privadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosHeroSection;
