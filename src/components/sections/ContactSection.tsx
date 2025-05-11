
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-neutral-900 to-black">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Contáctanos</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              ¿Tienes preguntas sobre nuestros productos o estás interesado en tener Tequila Gallero en tu establecimiento? Nos encantaría saber de ti.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Visítanos</h3>
                <p className="text-gray-300">
                  Destilería y Sala de Degustación<br />
                  Calle Principal 123<br />
                  Tequila, Jalisco<br />
                  México
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
                <p className="text-gray-300 mb-1">
                  <strong>Correo:</strong> info@gallerotequila.com
                </p>
                <p className="text-gray-300 mb-1">
                  <strong>Teléfono:</strong> +52 123 456 7890
                </p>
                <p className="text-gray-300">
                  <strong>Horario:</strong> Lun-Vie: 9am - 5pm (CST)
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-8 rounded-2xl relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-sm opacity-70"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="bg-white/5 border-white/10 text-white focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Correo
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Tu correo"
                        className="bg-white/5 border-white/10 text-white focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="Asunto del mensaje"
                      className="bg-white/5 border-white/10 text-white focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tu mensaje"
                      className="bg-white/5 border-white/10 text-white focus:border-primary"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit" className="btn-primary" size="lg">
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
