
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PartyPopper, Calendar, Users, Sparkles, Wine, Heart } from "lucide-react";

const Eventos: React.FC = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
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
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Celebración en evento"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
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

        {/* Services Section */}
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

        {/* Event Types Section */}
        <section className="section bg-gradient-to-b from-black to-neutral-900">
          <div className="container-fluid">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-golden font-kritik">
              TIPOS DE EVENTOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Weddings */}
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Bodas elegantes"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-3 font-kritik">BODAS</h3>
                <p className="text-gray-300 font-mexican">
                  Haz de tu día especial una celebración inolvidable con el toque 
                  distintivo de GALLERO para brindar por vuestro amor.
                </p>
              </div>

              {/* Corporate Events */}
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Eventos corporativos"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-3 font-kritik">EVENTOS CORPORATIVOS</h3>
                <p className="text-gray-300 font-mexican">
                  Cenas de empresa, presentaciones y celebraciones corporativas 
                  con la calidad y prestigio que tu empresa merece.
                </p>
              </div>

              {/* Private Parties */}
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fiestas privadas"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-3 font-kritik">FIESTAS PRIVADAS</h3>
                <p className="text-gray-300 font-mexican">
                  Cumpleaños, aniversarios, cenas de Navidad y cualquier ocasión 
                  especial que quieras celebrar por todo lo alto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;
