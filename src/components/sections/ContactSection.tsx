
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Instagram } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactEmail = "info@gallerotequila.com";
  
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
                <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
                <p className="text-gray-300 mb-1">
                  <strong>Correo:</strong> {contactEmail}
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
                  <a href="https://www.instagram.com/gallero_es/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="text-white" size={20} />
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
                        defaultValue={contactEmail}
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
