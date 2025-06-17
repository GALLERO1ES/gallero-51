
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
            <div style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '66.6667%',
              paddingBottom: 0,
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform'
            }}>
              <iframe 
                loading="lazy" 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAGqnhw67bE/C9A9nFMUfsjc7ppZKzby3g/watch?embed&autoplay=1&mute=1&controls=0" 
                allowFullScreen 
                allow="fullscreen; autoplay; muted"
              />
            </div>
            <a 
              href="https://www.canva.com/design/DAGqnhw67bE/C9A9nFMUfsjc7ppZKzby3g/watch?utm_content=DAGqnhw67bE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener"
              className="text-sm text-gray-400 hover:text-golden transition-colors"
            >
              Diseño de Pepelu Lopez
            </a>
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
